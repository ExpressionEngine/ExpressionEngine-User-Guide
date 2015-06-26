###############
Fetching Models
###############

.. contents::
   :local:
   :depth: 1

Basic Usage
-----------

Use the ``get()`` method with a model name to begin a query::

  $builder = ee('Model')->get('Template');

This will return a builder object, which we will use narrow down the selection.
When you're ready to retrieve the matching data, call ``all()``::

  $templates = $builder->all();

Usually these calls are chained for brevity::

  $templates = ee('Model')->get('Template')->all();

Filters
-------

You can filter your selection by individual model properties using the
``filter()`` method. It expects a property name, an operator, and a value::

  ->filter('template_name', '!=', 'index')

The operator is optional and will default to ``==`` if not given::

  ->filter('template_name', 'index')
  // same as:
  ->filter('template_name', '==', 'index')

By default, filters will be chained as ``AND`` conditions. An ``OR`` filter can
be applied by using the ``orFilter()`` method::

  ->filter('username' 'bob')
  ->orFilter('group_id', 1)

Available filters
~~~~~~~~~~~~~~~~~

=============   =========================  ===================================
Operator        Constraint                 Example
=============   =========================  ===================================
``==``          Equal                      ``filter('id', '==', 5)``
``!=``          Not equal                  ``filter('id', '!=', 5)``
``<``           Less than                  ``filter('id', '<' 5)``
``>``           Greater than               ``filter('id', '>', 5)``
``<=``          Less than or equals        ``filter('id', '<=', 5)``
``>=``          Greater than or equals     ``filter('id', '>=', 5)``
``IN``          In list of options         ``filter('id', 'IN', array(5, 8))``
``NOT IN``      Not in list of options     ``filter('id', '==', array(5, 8))``
=============   =========================  ===================================


Sorting
-------

The order that the elements are selected in can be changed with the ``order()``
method. The order options are ``ASC`` and ``DESC`` for ascending and descending
order, respectively::

  ->order('template_name', 'ASC')

Limit and Offset
----------------

You can limit how many models are selected, by using the ``limit()`` method::

  $page_one = ee('Model')->get('Template')->limit(10)->all();

To change the starting point of the selection, use the ``offset()`` method::

  $page_two = ee('Model')->get('Template')->offset(10)->limit(10)->all();

.. note:: The ``first()`` method will always use a limit of 1.

Example: Pagination
~~~~~~~~~~~~~~~~~~~

A common use-case for limit and offset is pagination. The following function
will accept a page number and return the correct template models for that page::

  function getTemplatesForPage($n)
  {
    $per_page = 10;

    $start = $per_page * ($n - 1); // this ensures page 1 starts at 0

    return ee('Model')
      ->get('Template')
      ->offset($start)
      ->limit($per_page)
      ->all();
  }

Count
-----

To see the number of matching elements without retrieving all of their data, use
the ``count()`` method instead of ``all()``::

  $total_templates = ee('Model')->get('Template')->count();

Partial Data
--------------

TODO Explain the ``fields()`` method.

Relationships
-------------

TODO Explain dot notation, aliasing, and link to eager loading relationships docs
