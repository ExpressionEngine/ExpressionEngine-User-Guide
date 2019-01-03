.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

View Service
============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Views are how you display your data. Separating these from application code keeps your application logic
neat and concise. It also prevents markup changes from triggering large code
changes.

::

  $view = ee('View')->make('addon_name:member/profile');

  $output = $view->render(array(
    'member' => $current_member
  ));

Creating a View
---------------

All views are represented as separate objects. To create a new view instance,
simply call ``make()`` on the core view service and pass in a the path to a
view file, prefixed with the folder name of your add-on::

  $view = ee('View')->make('addon_name:member/profile');

The view file should be a plain ``.php`` file in the ``views`` folder. In this
case it would be: ``views/member/profile.php``

Rendering a View
----------------

To render a view, call the ``render()`` method. You can optionally pass an
associative array to use as the view data::

  $view->render(array('username' => 'Mike'));

The keys of this array will be accessible as local variables inside the view::

  <h1><?=$username?></h1>

.. Hint:: Using the `echo shortcut <https://secure.php.net/manual/en/function.echo.php>`_
  (``<?=``) and the `alternative syntax <https://secure.php.net/manual/en/control-structures.alternative-syntax.php>`_
  for control structures can help improve readability of your views.

Disabling View Features
-----------------------

Reusing a view sometimes requires small reductions in markup. For example, a
profile image may require some wrapping markup for most of the site, but not
universally. To avoid passing around boolean values, views can have have
disabled features::

  $view->disable(array('figure', 'data-attribute'));

In the view, these can be checked using the ``$this->disabled()`` and
``$this->enabled()`` helper methods::

  <?php if ($this->enabled('figure')): ?>
    <figure><?=$username?></figure>
  <?php endif; ?>

.. Note:: By default all features are enabled.

Embedding Sub-Views
-------------------

Views can be rendered directly inside of another view. This is done using the
``$this->embed()`` helper method::

  <p><?php $this->embed('addon_name:sub/view') ?></p>

All of the current view variables are automatically made available to the
subview. You can optionally pass additional ones in the second parameter::

  <p><?php $this->embed('addon_name:sub/view', array('username' => $member->username)) ?></p>

Notice that you do not need to echo the output of this method, it is added to
the right place automatically.

You can also disable features in a view, using the third parameter::

  <p><?php $this->embed('addon_name:sub/view', array(), 'figure') ?></p>

Extending Parent Views
----------------------

A view can extend another view, by calling the ``$this->extend()`` helper method::

  <?php $this->extend('html-wrapper'); ?>

The rendered child view will be available to the parent as ``$child_view``::

  <section><?=$child_view?></section>

The API for this this method is otherwise identical to ``embed()``. The second
and third parameter are used for additional variables and disabled features,
respectively.

View Blocks
-----------

Passing large chunks of data from a child view to a parent can be tedious. To
solve this problem, the child view can create blocks of content that are passed
to the parent view automatically::

  <?php $this->extend('html_wrapper') ?>

  <?php $this->startBlock('js') ?>
    <script> ... </script>
  <?php $this->endBlock() ?>

This data is passed to the parent view as an associative array called ``$blocks``::

  <?=$blocks['js']?>
