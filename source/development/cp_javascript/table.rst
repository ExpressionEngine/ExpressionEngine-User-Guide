Javascript Table Plugin
=======================

.. js:class:: $.fn.table

The javascript table plugin provides the javascript counterpart to the
enhanced table class. It uses the jQuery UI widget pattern, which means
that it will be available directly on the table. The initial setup is
done automatically when a datasource is declared in the
:doc:`/development/usage/table`.

.. note :: The plugin does not automatically handle sorting and
  filtering. Your datasource will be called when manipulating these
  options.

.. contents::
  :local:

.. highlight:: js

Adding a filter
---------------

.. js:function:: add_filter(obj)

  To add a form or form element as a filter, simply pass it to the
  add_filter function. ::

    $('table').table('add_filter', $('form'));

  You can also manually add one or more filters by passing a plain
  javascript object to the same function. ::

    $('table').table('add_filter', { name: 'igor' });

  :param obj: jQuery object representing the form/form element to filter
    by or a manual filter
  :returns: The current jQuery object
  :rtype: jQuery Object

Controlling Sorting
-------------------

.. js:function:: set_sort(column, dir)

  The plugin allows you to manually control sorting. You can set a sort
  by providing a column name and a direction::

    $('table').table('set_sort', 'name', 'asc');

  You can also add a sub-sort to the current sort::

    $('table').table('add_sort', 'age', 'desc');

  You can also revert to the initial sort after making changes::

    $('table').table('clear_sort', 'age', 'desc');

  :param column: The column to manually sort
  :param dir: The direction to sort; either ``'asc'`` or ``'desc'``
  :returns: The current jQuery object
  :rtype: jQuery Object

  .. note:: Sorting is automatically handled when headers are clicked.


Events
------

The plugin fires various events to report its internal state.

tableload
~~~~~~~~~

.. js:attribute:: tableload

  Fired at the beginning of a table change. Bind to this to show a
  loading indicator ::

    $('table').bind('tableload', function() {
        $('#indicator').show();
    });

tableupdate
~~~~~~~~~~~

.. js:attribute:: tableupdate

  Fired when the table html refreshes. Bind to this to hide a loading
  indicator ::

    $('table').bind('tableload', function() {
        $('#indicator').show();
    });
