---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Tree Datastructure

[TOC]

## Uses and anatomy of a tree

A lot of data in ExpressionEngine can be described with parents and children. This includes nested categories, template groups and their templates, channels and their fields, relationships, and a lot of others. When it comes to dealing with multiple levels of these sorts of connections, it can be useful to model them as a tree.

The best way to imagine one of these trees is to think of them as a typical tree as you might find in a forest. Upside-down:

         root
        /    \
    child   child
           /     \
       child    child

## Creating a tree structure

As with most of ExpressionEngine's libraries, we need to load it before we can start using it:

    ee()->load->library('datastructures/tree');

There are two ways to create a tree. The first is to create and connect the nodes manually. This tends to give you a little more flexibility in how you build your tree. The class we need for this is `EE_TreeNode`. It takes a node name as a parameter and some optional data to attach to this node.

    $root = new EE_TreeNode('root');
    $child1 = new EE_TreeNode('child1');
    $child2 = new EE_TreeNode('child2');
    $subchild = new EE_TreeNode('subchild');

    $root->add($child1);
    $root->add($child2);
    $child2->add($subchild);

### add()

Here we have created a tree that looks like this:

          root
         /    \
    child1   child2
                  \
                subchild

The other option is to use the tree library's factory method. Frequently you tree will come from a database as a list of entries with ids and parent ids. The above data might look like this:

    $data = array(
        array('id' => 'root', 'parent_id' => ''),
        array('id' => 'child1', 'parent_id' => 'root'),
        array('id' => 'child2', 'parent_id' => 'root'),
        array('id' => 'subchild', 'parent_id' => 'child2'),
    );

In order to turn this into a tree, we simply pass it to the `from_list` method:

    $root = ee()->tree->from_list($data);

By default, `id` and `parent_id` will be used to resolve the tree structure. The `id` is also used as the name, and by default the tree is constructed from `EE_TreeNode` objects. If you need to change any of these, you can do so with a second parameter:

    $root = ee()->tree->from_list($data, array(
        'id'          => 'category_id',
        'parent'      => 'parent_category_id',
        'class_name'  => 'MyCatTreeNode',
        'name_key'    => 'title'
    ));

It will return the root node of the tree for us. _Watch out:_ Since the database result can frequently contain more than one relative root it will always return a blank root node with the actual tree as its children. If you know you only have one root, you can use the `EE_TreeNode::first_child` convenience method to move to your real root:

    if ( ! $root->is_leaf())
    {
        $root = $root->first_child();
    }

If you want to disconnect the single parent completely, you should also call the `EE_TreeNode::subtree` method so that your new node responds correctly to `EE_TreeNode::is_root`:

    if ( ! $root->is_leaf())
    {
        $root = $root->first_child()->subtree();
    }

Otherwise you will need to exclude the root in your iterations:

    foreach ($it as $node)
    {
        if ($node->is_root())
        {
            continue;
        }

        // process node
    }

## Moving between tree nodes

All nodes contain the information about their neighbors so that you can easily move between nodes to travel along your tree. The simplest movement is between a node and its parent:

    $parent = $node->parent();

We can also get access to the children. There can be more than one so they come in an array:

    $children = $node->children();
    $child1 = $children[0];
    $child2 = $children[1];

If your node names are unique you can also jump to direct child using its name:

    $child1 = $node->get('child1');

If you get lost in the tree you can always jump back up to the root:

    $root = $node->root();

To stop from going past the edges of the tree, you should always check if the current node is a leaf (going down) or the root (going up):

    $node->is_leaf();
    $node->is_root();

## Attaching and modifying node data

When you create a node you give it a name and you can also give it any payload data that you want it to have:

    $node = new EE_TreeNode('Lennie', array('friend' => 'George'));

The name can be accessed with the `EE_TreeNode::name` function:

    echo $node->name(); // prints "Lennie"

If your payload data is an array, then you can read its keys directly from the node:

    echo $node->friend; // prints "George"

The full data is available through the `EE_TreeNode::data` method:

    $data = $node->data();
    echo $data['friend']; // prints "George"

NOTE: **Note:** The default tree's node data is immutable.

## Traversing the tree

Sometimes you simply need to walk the entire tree. This can quickly become a review of recursion and an exercise in frustration. To simplify this behavior, the tree can create Iterators for a few common types of traversal. For the below examples we will be using this simple loop that prints the tree with the children indented:

    $it = $node->some_iterator_function();

    foreach ($it as $node)
    {
        $indent = str_repeat(' ', 4 * $it->getDepth()); // indent each level 4 spaces
        echo $indent.$node->name();
    }

And this tree:

                 root
                /    \
           child1   child2
           /    \
    subchild1   subchild2

### `preorder_iterator()`

Preorder iteration will visit the current node first and then each of the children. This is the most common iterator.

    root
      child1
        subchild1
        subchild2
      child2

### `postorder\_iterator()`

Postorder iteration will visit the children first and then the current node.

        subchild1
        subchild2
      child1
      child2
    root

### `breadth_first_iterator()`

Breadth first iteration will visit the tree level-by-level. This requires a little more memory than other forms of iteration as the iterator needs to remember which nodes had children.

    root
      child1
      child2
        subchild1
        subchild2

### `leaf_iterator()`

This iterator only visits nodes that do not have children of their own.

    |    subchild1
    |    subchild2
    |    child2

## Method Reference

[TOC=3]

### EE_Tree

[TOC=3]

#### `EE_Tree::from_list($data[, array $conf = NULL])`

Tree Factory

Takes an array of rows that each have an id and parent id (as you would get from the db) and returns a tree structure

| Parameter | Type            | Description                                                                                       |
| --------- | --------------- | ------------------------------------------------------------------------------------------------- |
| \$data    | `Array`         | array of `array('unique_id' => x, 'parent_id' => y, ...data)`                                     |
| \$conf    | `Array`         | Optional array containing: <br>`key`: data's unique id key. <br>`parent_id`: data's parent_id key |
| Returns   | `ImmutableTree` | Tree structure from a listing of data                                                             |

#### `EE_Tree::to_list(EE_TreeNode $tree)`

Flatten the tree to a list of data objects.

| Parameter | Type          | Description                                                       |
| --------- | ------------- | ----------------------------------------------------------------- |
| \$tree    | `EE_TreeNode` | `EE_TreeNode` object                                              |
| Returns   | `Array`       | Similar data structure to what was passed to `EE_Tree::from_list` |

### EE_Tree

**class `EE_TreeNode`**

[TOC=4]

#### `EE_TreeNode::__get($key)`

Retrieve the payload data.

If the payload is an array we treat the entire object as an accessor to the payload. Otherwise the key must be "data" to mimic regular object access.

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \$key     | `String` | The name of the property  |
| Returns   | `Mixed`  | The value of the property |

#### `EE_TreeNode::__set($key, $value)`

Retrieve the payload data.

If they payload is an array we treat the entire object as an accessor to the payload. Otherwise the key must be `'data'` to mimic regular object access.

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \$key     | `String` | The name of the property  |
| \$value   | `Mixed`  | The value of the property |
| Returns   | `Void`   |                           |

#### `EE_TreeNode::add(EE_TreeNode $child)`

Add a child node to the current node.

Notifies the child of its parent and adds the child name to the child name array. Does not enforce unique names since it may be desirable to have non-unique named children. It's on the developer to not rely on the `EE_TreeNode::get` method in that case.

| Parameter | Type          | Description                   |
| --------- | ------------- | ----------------------------- |
| \$child   | `EE_TreeNode` | EE_TreeNode to add as a child |
| Returns   | `Void`        |                               |

#### `EE_TreeNode::name()`

Get the node's name

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| Returns   | `String` | Node's name |

#### `EE_TreeNode::data()`

Get the node's payload

| Parameter | Type    | Description    |
| --------- | ------- | -------------- |
| Returns   | `Mixed` | Node's payload |

#### `EE_TreeNode::depth()`

Get the node's depth relative to its root, where the root's depth is 0.

| Parameter | Type      | Description  |
| --------- | --------- | ------------ |
| Returns   | `Integer` | Node's depth |

#### `EE_TreeNode::root()`

Get the tree's root node

If the current node is not a root node, we move our way up until we have a root.

| Parameter | Type          | Description          |
| --------- | ------------- | -------------------- |
| Returns   | `EE_TreeNode` | The root EE_TreeNode |

#### `EE_TreeNode::children()`

Get all of the node's children

| Parameter | Type          | Description     |
| --------- | ------------- | --------------- |
| Returns   | `EE_TreeNode` | All child nodes |

#### `EE_TreeNode::first_child()`

Get the node's first child

| Parameter | Type          | Description      |
| --------- | ------------- | ---------------- |
| Returns   | `EE_TreeNode` | First child node |

#### `EE_TreeNode::parent()`

Get the node's parent

| Parameter | Type          | Description   |
| --------- | ------------- | ------------- |
| Returns   | `EE_TreeNode` | Node's parent |

##### `EE_TreeNode::siblings()`

Get all of a node's siblings

| Parameter | Type          | Description     |
| --------- | ------------- | --------------- |
| Returns   | `EE_TreeNode` | Node's siblings |

#### `EE_TreeNode::is_root()`

Check if the node has parents

| Parameter | Type      | Description                                       |
| --------- | --------- | ------------------------------------------------- |
| Returns   | `Boolean` | `TRUE` if the node has parents, `FALSE` otherwise |

#### `EE_TreeNode::is_leaf()`

Check if the node has children

| Parameter | Type      | Description                                        |
| --------- | --------- | -------------------------------------------------- |
| Returns   | `Boolean` | `TRUE` if the node has children, `FALSE` otherwise |

#### `EE_TreeNode::freeze()`

Freeze the node

Prevents data and child manipulations. Cloning a frozen node will unfreeze it.

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

#### `EE_TreeNode::get($name)`

Get a child by name

You are responsible for adding children with unique names. If you do not, then this method will return the last child node of the given name.

| Parameter | Type          | Description              |
| --------- | ------------- | ------------------------ |
| \$name    | `String`      | Name of the child to get |
| Returns   | `EE_TreeNode` | Child node               |

#### `EE_TreeNode::subtree()`

Create a subtree on this node.

Clones the current node to turn it into a root node off the original tree.

This is a shallow copy! The root node you receive is a clone, but its children remain on the tree. If you need a clone for anything other than traversal, consider using the `EE_TreeNode::subtree_copy` method instead.

| Parameter | Type          | Description                                             |
| --------- | ------------- | ------------------------------------------------------- |
| Returns   | `EE_TreeNode` | A shallow copy of the tree starting at the current node |

#### `EE_TreeNode::subtree_copy()`

Create a full subtree copy from this node down.

Clones the current node and all of its children. This is a deep copy, everything will be cloned. If all you need is a new root for traversal, consider using `EE_TreeNode::subtree` instead.

| Parameter | Type          | Description                             |
| --------- | ------------- | --------------------------------------- |
| Returns   | `EE_TreeNode` | Full subtree copy from the current node |

#### `EE_TreeNode::preorder_iterator()`

Preorder Tree Iterator

Creates a preorder tree iterator from the current node down.

| Parameter | Type                        | Description                                       |
| --------- | --------------------------- | ------------------------------------------------- |
| Returns   | `RecursiveIteratorIterator` | Preorder tree iterator from the current node down |

#### `EE_TreeNode::postorder_iterator()`

Postorder Tree Iterator

Creates a postorder tree iterator from the current node down.

| Parameter | Type                        | Description                                        |
| --------- | --------------------------- | -------------------------------------------------- |
| Returns   | `RecursiveIteratorIterator` | Postorder tree iterator from the current node down |

#### `EE_TreeNode::leaf_iterator()`

Leaf Iterator

Iterates across all the leaf nodes

| Parameter | Type                        | Description                   |
| --------- | --------------------------- | ----------------------------- |
| Returns   | `RecursiveIteratorIterator` | Iterator with leaf nodes only |

#### `EE_TreeNode::breadth_first_iterator()`

Breadth First Iterator

Iterates across all nodes in a level-by-level fashion

| Parameter | Type                        | Description                                         |
| --------- | --------------------------- | --------------------------------------------------- |
| Returns   | `RecursiveIteratorIterator` | Iterator with all nodes in a level-by-level fashion |

### EE_TreeIterator

**class `EE_TreeIterator`**

This class extends [RecursiveArrayIterator](http://php.net/manual/en/class.recursivearrayiterator.php).

[TOC=4]

#### `EE_TreeIterator::hasChildren()`

Override `RecursiveArrayIterator`'s child detection method. We really don't want to count object properties as children.

| Parameter | Type      | Description                                         |
| --------- | --------- | --------------------------------------------------- |
| Returns   | `Boolean` | `TRUE` if there are children, `FALSE` otherwise\`\` |

#### `EE_TreeIterator::getChildren()`

Override `RecursiveArrayIterator`'s get child method to skip ahead into the children array and not try to iterate over the over the public name property.

| Parameter | Type              | Description                     |
| --------- | ----------------- | ------------------------------- |
| Returns   | `EE_TreeIterator` | Children of the EE_TreeIterator |

### EE_BreadthFirstIterator

**class `EE_BreadthFirstIterator`**

This class implements [OuterIterator](http://php.net/manual/en/class.outeriterator.php).

[TOC=4]

#### `EE_BreadthFirstIterator::current()`

Current Iterator Entry

| Parameter | Type       | Description                         |
| --------- | ---------- | ----------------------------------- |
| Returns   | `Iterator` | Entry of the current inner iterator |

#### `EE_BreadthFirstIterator::key()`

Current Iterator Key

| Parameter | Type       | Description                       |
| --------- | ---------- | --------------------------------- |
| Returns   | `Iterator` | Key of the current inner iterator |

#### `EE_BreadthFirstIterator::next()`

Next Iterator Step

Standard level by level iterator using a queue to remember where the children are.

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

#### `EE_BreadthFirstIterator::rewind()`

Rewind the Iterator

All the subiterators are rewound when they're exhausted so we only have to worry about the current one.

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

#### `EE_BreadthFirstIterator::valid()`

Find a valid iterator entry if it exists

If we have exhausted the current iterator then we need to move on to the next one on the queue. If they're all exhausted we're out of entries.

| Parameter | Type      | Description                                    |
| --------- | --------- | ---------------------------------------------- |
| Returns   | `Boolean` | `TRUE` if iterator is valid, `FALSE` otherwise |

#### `EE_BreadthFirstIterator::getInnerIterator()`

Get internal iterator

To the user this iterator is supposed to be mostly transparent. This is here to satisfy the `OuterIterator` contract. I can't think of a good reason you would want to use it.

| Parameter | Type                | Description          |
| --------- | ------------------- | -------------------- |
| Returns   | `RecursiveIterator` | Current sub iterator |

#### `EE_BreadthFirstIterator::getDepth()`

Get iteration depth

Retrieve the per level depth of the iterator. Using the same method contract as `RecursiveIteratorIterator` for consistency.

| Parameter | Type      | Description     |
| --------- | --------- | --------------- |
| Returns   | `Integer` | Iteration depth |
