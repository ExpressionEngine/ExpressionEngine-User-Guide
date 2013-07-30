Tree Datastructure
==================

.. contents::
  :local:

.. highlight:: php

Uses and anatomy of a tree
--------------------------

A lot of data in ExpressionEngine can be described with parents and
children. This includes nested categories, template groups and their
templates, channels and their fields, relationships, and a lot of
others. When it comes to dealing with multiple levels of these sorts of
connections, it can be useful to model them as a tree.

The best way to imagine one of these trees is to think of them as a
typical tree as you might find in a forest. Upside-down:

::

        root
       /    \
   child   child
          /     \
      child    child


Creating a tree structure
-------------------------

As with most of ExpressionEngine's libraries, we need to load it before
we can start using it::

  ee()->load->library('datastructures/tree');

There are two ways to create a tree. The first is to create and connect
the nodes manually. This tends to give you a little more flexibility in
how you build your tree. The class we need for this is
:class:`EE_TreeNode`. It takes a node name as a parameter and some
optional data to attach to this node.

::

  $root = new EE_TreeNode('root');
  $child1 = new EE_TreeNode('child1');
  $child2 = new EE_TreeNode('child2');
  $subchild = new EE_TreeNode('subchild');

  $root->add($child1);
  $root->add($child2);
  $child2->add($subchild);

.. method:: add()

Here we have created a tree that looks like this::

         root
        /    \
   child1   child2
                 \
               subchild

The other option is to use the tree library's factory method. Frequently
you tree will come from a database as a list of entries with ids and
parent ids. The above data might look like this::

  $data = array(
      array('id' => 'root', 'parent_id' => ''),
      array('id' => 'child1', 'parent_id' => 'root'),
      array('id' => 'child2', 'parent_id' => 'root'),
      array('id' => 'subchild', 'parent_id' => 'child2'),
  );

In order to turn this into a tree, we simply pass it to the
:meth:`~EE_Tree::from_list` method::

    $root = ee()->tree->from_list($data);

By default, ``id`` and ``parent_id`` will be used to resolve the tree
structure. The ``id`` is also used as the name, and by default the tree
is constructed from :class:`EE_TreeNode` objects. If you need to change
any of these, you can do so with a second parameter::

  $root = ee()->tree->from_list($data, array(
      'id'          => 'category_id',
      'parent'      => 'parent_category_id',
      'class_name'  => 'MyCatTreeNode',
      'name_key'    => 'title'
  ));

It will return the root node of the tree for us. *Watch out:* Since the
database result can frequently contain more than one relative root it
will always return a blank root node with the actual tree as its
children. If you know you only have one root, you can use the
:meth:`~EE_TreeNode::first_child` convenience method to move to your real
root::

  if ( ! $root->is_leaf())
  {
      $root = $root->first_child();
  }

If you want to disconnect the single parent completely, you should also
call the :meth:`~EE_TreeNode::subtree` method so that your new node
responds correctly to :meth:`~EE_TreeNode::is_root`::

  if ( ! $root->is_leaf())
  {
      $root = $root->first_child()->subtree();
  }

Otherwise you will need to exclude the root in your iterations::

  foreach ($it as $node)
  {
      if ($node->is_root())
      {
          continue;
      }

      // process node
  }

Moving between tree nodes
-------------------------

All nodes contain the information about their neighbors so that you
can easily move between nodes to travel along your tree. The simplest
movement is between a node and its parent::

  $parent = $node->parent();

We can also get access to the children. There can be more than one so
they come in an array::

  $children = $node->children();
  $child1 = $children[0];
  $child2 = $children[1];

If your node names are unique you can also jump to direct child using
its name::

  $child1 = $node->get('child1');

If you get lost in the tree you can always jump back up to the root::

  $root = $node->root();

To stop from going past the edges of the tree, you should always check
if the current node is a leaf (going down) or the root (going up)::

  $node->is_leaf();
  $node->is_root();

Attaching and modifying node data
---------------------------------

When you create a node you give it a name and you can also give it any
payload data that you want it to have::

  $node = new EE_TreeNode('Lennie', array('friend' => 'George'));

The name can be accessed with the :meth:`~EE_TreeNode::name` function::

  echo $node->name(); // prints "Lennie"

If your payload data is an array, then you can read its keys directly
from the node::

  echo $node->friend; // prints "George"

The full data is available through the :meth:`~EE_TreeNode::data`
method::

  $data = $node->data();
  echo $data['friend']; // prints "George"

.. note:: The default tree's node data is immutable.

Traversing the tree
-------------------

Sometimes you simply need to walk the entire tree. This can quickly
become a review of recursion and an exercise in frustration. To simplify
this behavior, the tree can create Iterators for a few common types of
traversal. For the below examples we will be using this simple loop that
prints the tree with the children indented::

  $it = $node->some_iterator_function();

  foreach ($it as $node)
  {
      $indent = str_repeat(' ', 4 * $it->getDepth()); // indent each level 4 spaces
      echo $indent.$node->name();
  }

And this tree::

                 root
                /    \
           child1   child2
           /    \
    subchild1   subchild2

preorder_iterator()
~~~~~~~~~~~~~~~~~~~

Preorder iteration will visit the current node first and then each of
the children. This is the most common iterator.

::

    root
      child1
        subchild1
        subchild2
      child2

postorder_iterator()
~~~~~~~~~~~~~~~~~~~~

Postorder iteration will visit the children first and then the current node.

::

        subchild1
        subchild2
      child1
      child2
    root

breadth_first_iterator()
~~~~~~~~~~~~~~~~~~~~~~~~

Breadth first iteration will visit the tree level-by-level. This requires
a little more memory than other forms of iteration as the iterator needs to
remember which nodes had children.

::

    root
      child1
      child2
        subchild1
        subchild2

leaf_iterator()
~~~~~~~~~~~~~~~

This iterator only visits nodes that do not have children of their own.

::

  |    subchild1
  |    subchild2
  |    child2


Method Reference
----------------

EE_Tree
~~~~~~~

.. class:: EE_Tree

.. method:: from_list($data[, array $conf = NULL])

  Tree Factory

  Takes an array of rows that each have an id and parent id (as you
  would get from the db) and returns a tree structure

  :param array $data: array of ``array('unique_id' => x, 'parent_id' =>
    y, ...data)``
  :param array $conf: Optional array containing:

    - ``key``: data's unique id key
    - ``parent_id``: data's parent_id key

  :returns: Tree structure from a listing of data
  :rtype: ImmutableTree

.. method:: to_list(EE_TreeNode $tree)

  Flatten the tree to a list of data objects.

  :param EE_TreeNode $tree: :class:`EE_TreeNode` object
  :returns: Similar data structure to what was passed to
    :meth:`~EE_Tree::from_list`
  :rtype: Array

EE_TreeNode
~~~~~~~~~~~

.. class:: EE_TreeNode

.. method:: __get($key)

  Retrieve the payload data.

  If the payload is an array we treat the entire object as an accessor
  to the payload. Otherwise the key must be "data" to mimic regular
  object access.

  :param string $key: The name of the property
  :returns: The value of the property
  :rtype: Mixed

.. method:: __set($key, $value)

  Retrieve the payload data.

  If they payload is an array we treat the entire object as an accessor
  to the payload. Otherwise the key must be ``'data'`` to mimic regular
  object access.

  :param string $key: The name of the property
  :param mixed $value: The value of the property
  :rtype: Void

.. method:: add(EE_TreeNode $child)

  Add a child node to the current node.

  Notifies the child of its parent and adds the child name to the child
  name array. Does not enforce unique names since it may be desirable to
  have non-unique named children. It's on the developer to not rely on
  the :meth:`~EE_TreeNode::get` method in that case.

  :param EE_TreeNode $child: EE_TreeNode to add as a child
  :rtype: Void

.. method:: name()

  Get the node's name

  :returns: Node's name
  :rtype: String

.. method:: data()

  Get the node's payload

  :returns: Node's payload
  :rtype: Mixed

.. method:: depth()

  Get the node's depth relative to its root, where the root's
  depth is 0.

  :returns: Node's depth
  :rtype: Integer

.. method:: root()

  Get the tree's root node

  If the current node is not a root node, we move our
  way up until we have a root.

  :returns: The root EE_TreeNode
  :rtype: EE_TreeNode

.. method:: children()

  Get all of the node's children

  :returns: All child nodes
  :rtype: EE_TreeNode

.. method:: first_child()

  Get the node's first child

  :returns: First child node
  :rtype: EE_TreeNode

.. method:: parent()

  Get the node's parent

  :returns: Node's parent
  :rtype: EE_TreeNode

.. method:: siblings()

  Get all of a node's siblings

  :returns: Node's siblings
  :rtype: EE_TreeNode

.. method:: is_root()

  Check if the node has parents

  :returns: ``TRUE`` if the node has parents, ``FALSE`` otherwise
  :rtype: Boolean

.. method:: is_leaf()

  Check if the node has children

  :returns: ``TRUE`` if the node has children, ``FALSE`` otherwise
  :rtype: Boolean

.. method:: freeze()

  Freeze the node

  Prevents data and child manipulations. Cloning a frozen node will
  unfreeze it.

  :rtype: Void

.. method:: get($name)

  Get a child by name

  You are responsible for adding children with unique names. If you
  do not, then this method will return the last child node of the
  given name.

  :param string $name: Name of the child to get
  :returns: Child node
  :rtype: EE_TreeNode

.. method:: subtree()

  Create a subtree on this node.

  Clones the current node to turn it into a root node off the original
  tree.

  This is a shallow copy! The root node you receive is a clone, but its
  children remain on the tree. If you need a clone for anything other
  than traversal, consider using the :meth:`~EE_TreeNode::subtree_copy`
  method instead.

  :returns: A shallow copy of the tree starting at the current node
  :rtype: EE_TreeNode

.. method:: subtree_copy()

  Create a full subtree copy from this node down.

  Clones the current node and all of its children. This is a deep
  copy, everything will be cloned. If all you need is a new root
  for traversal, consider using :meth:`~EE_TreeNode::subtree` instead.

  :returns: Full subtree copy from the current node
  :rtype: EE_TreeNode

.. method:: preorder_iterator()

  Preorder Tree Iterator

  Creates a preorder tree iterator from the current node down.

  :returns: Preorder tree iterator from the current node down
  :rtype: RecursiveIteratorIterator

.. method:: postorder_iterator()

  Postorder Tree Iterator

  Creates a postorder tree iterator from the current node down.

  :returns: Postorder tree iterator from the current node down
  :rtype: RecursiveIteratorIterator

.. method:: leaf_iterator()

  Leaf Iterator

  Iterates across all the leaf nodes

  :returns: Iterator with leaf nodes only
  :rtype: RecursiveIteratorIterator

.. method:: breadth_first_iterator()

  Breadth First Iterator

  Iterates across all nodes in a level-by-level fashion

  :returns: Iterator with all nodes in a level-by-level fashion
  :rtype: RecursiveIteratorIterator

EE_TreeIterator
~~~~~~~~~~~~~~~

.. class:: EE_TreeIterator

  This class extends `RecursiveArrayIterator
  <http://php.net/manual/en/class.recursivearrayiterator.php>`_.

.. method:: hasChildren()

  Override ``RecursiveArrayIterator``'s child detection method. We
  really don't want to count object properties as children.

  :returns: ``TRUE`` if there are children, ``FALSE`` otherwise``
  :rtype: boolean

.. method:: getChildren()

  Override ``RecursiveArrayIterator``'s get child method to skip ahead
  into the children array and not try to iterate over the over the
  public name property.

  :returns: Children of the EE_TreeIterator
  :rtype: EE_TreeIterator

EE_BreadthFirstIterator
~~~~~~~~~~~~~~~~~~~~~~~

.. class:: EE_BreadthFirstIterator

  This class implements `OuterIterator
  <http://php.net/manual/en/class.outeriterator.php>`_.

.. method:: current()

  Current Iterator Entry

  :returns: Entry of the current inner iterator
  :rtype: Iterator

.. method:: key()

  Current Iterator Key

  :returns: Key of the current inner iterator
  :rtype: Iterator

.. method:: next()

  Next Iterator Step

  Standard level by level iterator using a queue to remember where
  the children are.

  :rtype: Void

.. method:: rewind()

  Rewind the Iterator

  All the subiterators are rewound when they're exhausted so we only
  have to worry about the current one.

  :rtype: Void

.. method:: valid()

  Find a valid iterator entry if it exists

  If we have exhausted the current iterator then we need to move on to
  the next one on the queue. If they're all exhausted we're out of
  entries.

  :returns: ``TRUE`` if iterator is valid, ``FALSE`` otherwise
  :rtype: Boolean

.. method:: getInnerIterator()

  Get internal iterator

  To the user this iterator is supposed to be mostly transparent. This
  is here to satisfy the ``OuterIterator`` contract. I can't think of a
  good reason you would want to use it.

  :returns: Current sub iterator
  :rtype: RecursiveIterator

.. method:: getDepth()

  Get iteration depth

  Retrieve the per level depth of the iterator. Using the same method
  contract as ``RecursiveIteratorIterator`` for consistency.

  :returns: Iteration depth
  :rtype: Integer

