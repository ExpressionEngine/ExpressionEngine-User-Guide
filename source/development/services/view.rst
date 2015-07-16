View Service
============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

Views are how you display your data. They contain the markup and formatting
information. Separating these from application code keeps your application logic
neat and concise. It also prevents markup changes from triggering large code
changes.

::

  $view = ee('View')->make('member/profile');

  $output = $view->render(array(
    'member' => $current_member
  ));

Creating a View
---------------

All views are represented as separate objects. To create a new view instance,
simply call ``make()`` on the core view service and pass in a the path to a
view file::

  $view = ee('View')->make('member/profile');

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

Including Sub-Views
-------------------

It can be useful to embed views inside of each other. This can be done in one of
two ways:

The most intuitive approach is to render the subviews separately and then pass
their output to the primary view as variables. This may be preferred when the
views have very little shared data. Splitting it up this way can help make data
dependencies more obvious::

  $mini_profile = ee('View')->make('member/mini-profile')->render(array('member' => $member));
  $sidebar = ee('View')->make('sidebar')->render(compact('mini_profile'));

The second approach is to render a view directly inside of another view. This
can be done with the `view()` helper method::

  <p><?php $this->view('sub/view') ?></p>

Notice that you do not need to echo the output of this method, it is added to
the right place automatically. Additionally, all of the current views variables
are passed to the subview. You can optionally pass additional ones in the second
parameter::

  <p><?php $this->view('sub/view', array('username' => $member->username)) ?></p>
