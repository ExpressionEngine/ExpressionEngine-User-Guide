.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Relating Models
===============

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Relationship Metadata
---------------------

All relationships are stored in a `relationships` metadata array::

  protected static $_relationships = array();

Each key in this array should be the name of a relationship. The values should
be arrays describing the relationship::

  protected static $_relationships = array(
    'Template' => array( ... ),
    'Authors' => array( ... )
  );

The relationship names are used for accessing the related data. They must be
uppercased and valid php variable names::

  // as declared above
  $template = $my_model->Template;
  $authors = $my_model->Authors;

The array describing each relationship contains the information that allows
ExpressionEngine to correctly identify the related data. By default, only the
the relationship type is required.

``type``
~~~~~~~~

The relationship ``type`` describes how two items are related. There are four
relationship types:

 * HasOne
 * HasMany
 * BelongsTo
 * HasAndBelongsToMany

These are declared by name::

  protected static $_relationships = array(
    'Template' => array(
      'type' => 'BelongsTo'
    )
  );

When figuring out how two items are related, consider how you would talk about
them in plain english. For example, a Template Group has many Templates, but a
Template belongs to a Template Group.

``model``
~~~~~~~~~

The relationship ``model`` declares the shortname of the model you are relating
to. This is optional and will default to the relationship name::

  protected static $_relationships = array(
    'Authors' => array(
      'type' => 'hasMany',
      'model' => 'ee:Member'
    )
  );

``from_key`` & ``to_key``
~~~~~~~~~~~~~~~~~~~~~~~~~

To specify which fields to use when matching up two models, you can specify a
``from_key`` for the current model and a ``to_key`` for the model being related::

  protected static $_relationships = array(
    'Authors' => array(
      'type' => 'hasMany',
      'model' => 'ee:Member'
      'from_key' => 'author_id',
      'to_key' => 'member_id'
    )
  );

The keys are optional. ExpressionEngine will attempt to divine the correct columns
to use based on the type of relationship and primary key names. For example, if a
Comment ``belongsTo`` an Entry, and the entry has a primary key called ``entry_id``,
ExpressionEngine will look for a field called ``entry_id`` in the comment. The
following table describes these automatic assumptions:

+---------------------+--------------------------+--------------------------+
| Type                | Default ``from_key``     | Default ``to_key``       |
+=====================+==========================+==========================+
| HasOne              | This primary key name    | This primary key         |
+---------------------+--------------------------+--------------------------+
| HasMany             | This primary key name    | This primary key         |
+---------------------+--------------------------+--------------------------+
| BelongsTo           | Related primary key name | Related primary key name |
+---------------------+--------------------------+--------------------------+
| HasAndBelongsToMany | This primary key name    | Related primary key name |
+---------------------+--------------------------+--------------------------+

``weak``
--------

When a model ``belongsTo`` another model, deleting the parent model will trigger
a deletion of the child model. This is in line with the human expectation of how
these types of relationships work.

If you wish to disable this behavior, you can specify the relationship as ``weak``.
A weak relationship will zero out the foreign key column on deletion, but it will
not cascade the delete::

  protected static $_relationships = array(
    'LastAuthor' => array(
      'type' => 'belongsTo',
      'model' => 'ee:Member'
      'from_key' => 'author_id'
      'weak' => TRUE
    )
  );

``pivot``
~~~~~~~~~

When dealing with HasAndBelongsToMany relationships you will need to declare
a pivot table that contains the relationship information::

  'pivot' => 'mytable'

By default the `to_key` and `from_key` are used to determine pivot table column
names. If your table uses a different name for the pivot columns, you can specify
them individually::

  'pivot' => array(
    'table' => 'mytable',
    'left' => 'some_key',
    'right' => 'another_key'
  );

Here ``left`` describes the pivot table key connecting the current model and
``right`` describes the key connecting the pivot table to the related model.
Picture it like a row of dominoes with the pivot in the center:

**ThisModel**::``from_key``--``left``::**pivot**::``right``--``to_key``::**RelatedModel**

.. _third_party_relationships:

Inverse Relationships
---------------------

All relationships must be declared in both associated models. This improves code
consistency and predictability by allowing both sides of the relationship to be
altered without creating orphaned objects. This is particularly important when
creating parent-child relationships that cascade their deletions automatically.

When relating to models that are not your own, this becomes problematic since
your addon cannot directly add relationships to native models. To get around
this problem and to allow for native events to cascade to your models, you must
declare all external dependencies in your ``addon.setup.php`` file::

  'models.dependencies' => array(
    'MyModel'   => array(
      'ee:Member'
    )
  ),

You can then declare the relationship as normal, but with the addition of an
``inverse`` key describing how it will behave on the other model::

  'Author' => array(
    'type'     => 'belongsTo',
    'from_key' => 'author_id',
    'to_key'   => 'member_id',
    'model'    => 'ee:Member',
    'weak'     => TRUE,
    'inverse' => array(
      'name' => 'AuthoredMyModels',
      'type' => 'hasMany'
    )
  )

The inverse key is not guaranteed to be unique across all addons, so it is
automatically prefixed with your prefix. In order to access the ``AuthoredMyModels``
relationship on a member object, we must first alias it to a valid value::

  $member = ee('Model')->get('Member')->first();
  $member->alias('mymodel:AuthoredMyModels', 'Lastauthored');

  $last_authored = $member->Lastauthored;

.. caution:: Aliases are mutable, you should reassign them before use if your
  code has shared access to the object.
