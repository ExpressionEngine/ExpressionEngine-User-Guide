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

.. note:: The properties must be declared as protected.

Events
------

All models automatically support a simple event system.

To listen to an event on a model, use the ``on`` method::

  $my_model->on('boom', function($model)
  {
    echo 'boom event happened on '.$model->getName();
  });

To initiate an event, use the ``trigger`` method::

  $my_model->trigger('boom');

The first parameter passed to the event handler will always be the
model instance. Any additional parameters passed to trigger will also
be passed to the event handler::

  $my_model->on('boom', function($model, $year)
  {
    echo 'boom event happened on '.$model->getName().' in '.$year;
  });

  $my_model->trigger('boom', 2015);

Inside your model you can automatically bind to events. To do so, first
create a public method with the format ``on<EventName>``, and then listen
to the event by adding an `_events` metadata array that lists the event::

  protected static $_events = array('beforeSave');

  public function onBeforeSave()
  {
    echo 'about to save!';
  }

.. note:: Event names typically start with a lowercase letter, but the
  method name will have them as uppercase due to the ``on`` prefix.


Validation
----------

Validation rules are added using the same format as the :doc:`Validation
Service <./validation>`. They should be added as a static property called
``$_validation_rules``::

  protected static $_validation_rules = array(
    'name'  => 'required',
    'email' => 'required|email'
  );


Typed Columns
-------------

Model properties can have some basic type constraints set on them. These
constraints allow for simple get/set typecasting for common values. These
are defined in `_typed_columns`::

  protected static $_typed_columns = array(
    'id' => 'int'
  );

  $my_model->id = '5'; // set to int 5
  $my_model->id; // always returns an integer

The available options include:

+------------+-------------------+------------------+
| Name       | Setting           | Getting          |
+============+===================+==================+
| bool       | Cast to boolean   | Cast to boolean  |
+------------+-------------------+------------------+
| int        | Cast to integer   | Cast to integer  |
+------------+-------------------+------------------+
| float      | Cast to float     | Cast to float    |
+------------+-------------------+------------------+
| string     | Cast to string    | Cast to string   |
+------------+-------------------+------------------+
| boolString | Cast to y/n       | Cast to boolean  |
+------------+-------------------+------------------+
| boolInt    | Cast to 0/1       | Cast to boolean  |
+------------+-------------------+------------------+
| timestamp  | Cast to timestamp | Cast to DateTime |
+------------+-------------------+------------------+


Getters and Setters
-------------------

You can create your own modifying getters and setters by creating
methods in the format of ``get__<property>`` or ``set__<property>``::

  protected $first_name;
  protected $last_name;

  protected function get__name()
  {
    return $this->first_name.' '.$this->last_name;
  }

  protected function set__name($value)
  {
    list($first, $last) = explode(' ', $value);

    $this->first_name = $first;
    $this->last_name = $last;
  }

  $my_model->name = 'Bob Bobson';
  $my_model->first_name; // Bob

Composite Columns
-----------------

Multiple Tables
---------------

