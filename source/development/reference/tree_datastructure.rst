Tree Datastructure
==================

.. contents::
	:local:


Uses and anatomy of a tree
--------------------------

A lot of data in ExpressionEngine can be described with parents and
children. This includes nested categories, template groups and their
templates, channels and their fields, relationships, and a lot of
others. When it comes to dealing with multiple levels of these sorts
of connections, it can be useful to model them as a tree.

The best way to imagine one of these trees is to think of them as
a typical tree as you might find in a forest. Upside-down:

::

        root
       /    \
   child   child
          /     \
      child    child


Creating a tree structure
-------------------------

As with most of ExpressionEngine's libraries, we need to load it before
we can start using it

::

    ee()->load->library('datastructures/tree');

There are two ways to create a tree. The first is to create and connect
the nodes manually. This tends to give you a little more flexibilty in
how you build your tree. The class we need for this is ``EE_TreeNode``.
It takes a node name as a parameter and some optional data to attach to
this node.

::

	$root = new EE_TreeNode('root');
	$child1 = new EE_TreeNode('child1');
	$child2 = new EE_TreeNode('child2');
	$subchild = new EE_TreeNode('subchild');

	$root->add($child1);
	$root->add($child2);
	$child2->add($subchild);

Here we have created a tree that looks like this:

::

         root
        /    \
   child1   child2
                 \
               subchild


The other option is to use the tree library's factory method. Frequently
you tree will come from a database as a list of entries with ids and
parent ids. The above data might look like this:

::

    $data = array(
    	array('id' => 'root', 'parent_id' => ''),
    	array('id' => 'child1', 'parent_id' => 'root'),
    	array('id' => 'child2', 'parent_id' => 'root'),
    	array('id' => 'subchild', 'parent_id' => 'child2'),
    )

In order to turn this into a tree, we simply pass it to the ``from_list()``
method:

::

    $root = ee()->tree->from_list($data);

By default, ``id`` and ``parent_id`` will be used to resolve the tree
structure. The ``id`` is also used as the name, and by default the tree
is constructed from ``EE_TreeNode`` objects. If you need to change any
of these, you can do so with a second parameter:

::

    $root = ee()->tree->from_list($data, array(
    	'id' => 'category_id',
    	'parent' => 'parent_category_id',
    	'class_name' => 'MyCatTreeNode',
    	'name_key' => 'title'
    ));


It will return the root node of the tree for us. *Watch out:* Since
the database result can frequently contain more than one relative root
it will always return a blank root node with the actual tree as its
children. If you know you only have one root, you can use the
``first_child()`` convenience method to move to your real root:

::

    if ( ! $root->is_leaf())
    {
    	$root = $root->first_child();
    }

If you want to disconnect the single parent completely, you should also
call the ``subtree()`` method so that your new node responds correctly
to ``is_root()``.

::

    if ( ! $root->is_leaf())
    {
    	$root = $root->first_child()->subtree();
    }

Moving between tree nodes
-------------------------

Any node contains all the information about its neighbours so that you
can easily move between nodes to move along your tree. The simplest
movement is between a node and its parent:

::

    $parent = $node->parent();

We can also get access to the children. There can be more than one so
they come in an array:

::

    $children = $node->children();
    $child1 = $children[0];
    $child2 = $children[1];

If your node names are unique you can also jump to direct child using
its name:

::

    $child1 = $node->get('child1');

If you get lost in the tree you can always jump back up to the root:

::

    $root = $node->root();

To stop from going past the edges of the tree, you should always check
if the current node is a leaf (going down) or the root (going up):

::

	$node->is_leaf();
	$node->is_root();


Attaching and modifying node data
---------------------------------

When you create a node you give it a name and you can also give it any
payload data that you want it to have:

::

    $node = new EE_TreeNode('Lennie', array('friend' => 'George'));

The name can be accessed with the ``name()`` function:

::

    echo $node->name(); // prints "Lennie"

If your payload data is an array, then you can read its keys directly
from the node:

::

    echo $node->friend; // prints "George"

The full data is available through the ``data()`` method:

::

	$data = $node->data();
	echo $data['friend']; // prints "George"


.. note:: The default tree's node data is immutable.

Traversing the tree
-----------------------

Sometimes you simply need to walk the entire tree. This can quickly
become a review of recursion and an exercise in frustration. To simplify
this behavior, the tree can create Iterators for a few common types of
traversal. For the below examples we will be using this simple loop that
prints the tree with the children indented:

::

    $it = $node->some_iterator_function();

    foreach ($it as $node)
    {
    	$indent = str_repeat(' ', 4 * $it->getDepth()); // indent each level 4 spaces
    	echo $indent.$node->name();
    }

And this tree:

::

                 root
                /    \
           child1   child2
           /    \
    subchild1   subchild2

preorder\_iterator()
~~~~~~~~~~~~~~~~~~~~

Preorder iteration will visit the current node first and then each of the
children. This is the most common iterator.

::

    root
    	child1
    		subchild1
    		subchild2
    	child2

postorder\_iterator()
~~~~~~~~~~~~~~~~~~~~~

Postorder iteration will visit the children first and then the current node.
This is also a depth first iterator.

::

    		subchild1
    		subchild2
    	child1
    	child2
    root

breadth\_first\_iterator()
~~~~~~~~~~~~~~~~~~~~~~~~~~

Breadth first iteration will visit the tree level-by-level. This requires
a little more memory than other forms of iteration as iterator needs to
remember which nodes had children.

::

    root
    	child1
    	child2
    		subchild1
    		subchild2
leaf\_iterator()
~~~~~~~~~~~~~~~~

This iterator only visits nodes that do not have parents of their own.

::

 |		subchild1
 |		subchild2
 |    child2