Model Service
=============

.. contents::
  :local:

.. highlight:: php

Simple Example
--------------

ExpressionEngine has a complex set of data types, such as Channels and
Categories. These are sometimes even stored on multiple tables with
conditions and constraints on their use. The model service helps smooth
out interacting with ExpressionEngine's data types by providing an API
that mimics the human description as closely as is feasible. You do not
query for ``channel_data`` joined on ``channel_titles``; instead, you
simply get a channel entry::

  $my_first_entry = ee('Model')->get('ChannelEntry')->filter('title', 'Hello World')->first();

  $my_first_entry->title = 'Hello WORLD!!!';
  $my_first_entry->save();

Creating Your Own Models
------------------------

A model class has four requirements. It must...

- ... extend ``EllisLab\ExpressionEngine\Service\Model\Model``
- ... define a primary key
- ... define a table name
- ... define its properties

::

  use EllisLab\ExpressionEngine\Service\Model\Model;

  class MyModel extends Model {

    protected static $_primary_key = 'id';
    protected static $_table_name = 'my_awesome_table';

    protected $id;
    protected $name;
    protected $email;

  }


Adding Validation
-----------------

Validation rules are added using the same format as the :doc:`Validation
Service <./validation>`. They should be added as a static property called
``$_validation_rules``::

  protected static $_validation_rules = array(
    'name'  => 'required',
    'email' => 'required|email'
  );