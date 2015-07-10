########################
Building your own Models
########################

This section gives a detailed description on how to implement your own models.

.. note:: Please review the basic
  :doc:`Model Usage <../model/index>` before attempting to write your own.

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Model Skeleton
--------------

All models **must** declare a primary key, a table name, and a set of properties.
The basic skeleton looks as follows::


  use EllisLab\ExpressionEngine\Service\Model\Model;

  class MyModel extends Model {

    protected static $_primary_key = 'id';
    protected static $_table_name = 'my_awesome_table';

    protected $id;
    protected $name;
    protected $email;
    // ... more properties

  }

Properties
----------

The column names of the table should be reflected in the models properties.
These **must** be declared as ``protected``. If you require class properties for
internal use, you should prefix them with an underscore::

  // treated as table columns
  protected $title;
  protected $description;

  // ignored - prefixed with an underscore
  protected $_cache;

Metadata
--------

All models have static metadata attached to them. Metadata **must** be declared
as ``protected static`` and **must** begin with an underscore to avoid any
potential confusion with column names. It can be retrieved with the
``getMetadata()`` method::

  protected static $_events = array();

  // accessing it:
  MyModel::getMetaData('events');

  // or on an instance
  $my_model_instance->getMetaData('events');


Internal Events
---------------

As covered in the :doc:`usage section <../model/index>`, all models can emit
events that can be subscribed to::

  $my_model->on('boom', function($model)
  {
    echo 'boom event happened on '.$model->getName();
  });

  $my_model->emit('boom');

Unfortunately this local event behavior is not very convenient for internal
event handling. To solve this problem, all model objects are subscribers to
their own events. This means you can automatically bind to events and receive
the callback on a regular method.

To do so, first create a public method with the format ``on<EventName>``, and
then listen to the event by creating an ``$_events`` metadata array that lists
the events you want to subscribe to::

  protected static $_events = array('beforeSave');

  public function onBeforeSave()
  {
    echo 'about to save!';
  }

.. note:: Event names typically start with a lowercase letter, but the
  method name will have them as uppercase due to the ``on`` prefix.

Default Events
~~~~~~~~~~~~~~

+----------------+----------------------------------+-------------------------+
| Event Name     | When                             | Parameters              |
+================+==================================+=========================+
| beforeInsert   | Before saving a new model        | None                    |
+----------------+----------------------------------+-------------------------+
| afterInsert    | After saving a new model         | None                    |
+----------------+----------------------------------+-------------------------+
| beforeUpdate   | Before saving an existing model  | Array of changed values |
+----------------+----------------------------------+-------------------------+
| afterUpdate    | After saving an existing model   | Array of changed values |
+----------------+----------------------------------+-------------------------+
| beforeSave     | Before saving a model            | None                    |
+----------------+----------------------------------+-------------------------+
| afterSave      | After saving a model             | None                    |
+----------------+----------------------------------+-------------------------+
| beforeValidate | Before validating                | None                    |
+----------------+----------------------------------+-------------------------+
| afterValidate  | After validating                 | None                    |
+----------------+----------------------------------+-------------------------+
| beforeDelete   | Before deleting                  | None                    |
+----------------+----------------------------------+-------------------------+
| afterDelete    | After deleting                   | None                    |
+----------------+----------------------------------+-------------------------+

Relationships
-------------

Relationships to other models can be defined


Validation
----------

Validation rules are added using the same format as the :doc:`Validation
Service <../validation>`. They should be added to a metadata item called
``$_validation_rules``::

  protected static $_validation_rules = array(
    'name'  => 'required',
    'email' => 'required|email'
  );

You can also create your own local validation rules. These one-off rules can
be added directly to the model class by creating a public method whose name
starts with ``validate``. The method will be treated as a
:ref:`custom validation rule <validation-service-custom-rules>`. On validation
it will receive the property name, current value, rule parameters, and the rule
object. The method should return ``TRUE`` on success, and an error string or
language key on failure::

  protected static $_validation_rules = array(
    'even_number' => 'validateMultipleOf[2]'
    'decade' => 'validateMultipleOf[10]'
  );

  public function validateMultipleOf($name, $value, $params, $object)
  {
    if ($value % $params[0] != 0)
    {
      return 'This field must be a multiple of '.$params[0];
    }

    return TRUE;
  }

Getters and Setters
-------------------

By default setting and getting of properties behaves the way it does for
any object. However, you can create your own modifying getters and
setters by creating methods in the format of ``get__<property>`` or
``set__<property>``::

  protected $first_name;
  protected $last_name;

  protected function get__name()
  {
    return $this->first_name.' '.$this->last_name;
  }

  protected function set__name($value)
  {
    list($first, $last) = explode(' ', $value);

    $this->setRawProperty('first_name', $first);
    $this->setRawProperty('last_name', $last);
  }

  $my_model->name = 'Bob Bobson';
  $my_model->first_name; // Bob

.. note:: These methods break the camelCase naming convention in order
  to match the snake_case property names. It also serves as a clear
  indicator that these methods should not be called directly, even internally:
  always use ``setProperty()``.

When setting properties manually you should take care to use
`setRawProperty`, which will correctly track changes to the property.

Typed Columns
-------------

Model properties can have basic type constraints set on them. These
constraints allow for simple get/set typecasting of common values. They
are defined in a metadata array called ``$_typed_columns``::

  protected static $_typed_columns = array(
    'model_id' => 'int',
    'created_at' => 'timestamp'
  );

  $my_model->model_id = '5'; // set to int 5
  $my_model->model_id; // always returns an integer

  $my_model->created_at; // returns a DateTime object
  $my_model->created_at = new DateTime('2015-01-30'); // sets an int timestamp
  $my_model->created_at = 1421558529; // also ok

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

Composite Columns
-----------------

Sometimes a database column may contain serialized data. Instead of
treating this data merely as a string or array (using getters and setters),
you can automatically turn it into sub-objects by defining a composite
column.

First, add a static ``$_composite_columns`` array to your model where the
key is the name of the column and the value is the name of the composite
class you wish to use.

::

  protected static $_composite_columns = array(
    'coordinates' => 'Coordinates'
  );

Next, create a class that describes the composite column. Place it under
``<your\model\namespace>\Column\``::

  use EllisLab\ExpressionEngine\Service\Model\Column\Composite;

  class Coordinates extends Composite {

    protected $latitude;
    protected $longitude;

  }

Lastly, define two methods - ``serialize`` and ``unserialize`` on your
composite column to describe how it should be saved and loaded::

  protected function serialize($data)
  {
    return json_encode($data);
  }

  protected function unserialize($data)
  {
    return json_decode($data);
  }

Now you can access your composite column by calling
``get<CompositeName>`` and modify it as you see fit. Saving the parent
model will automatically synchronize any changes to the column::

  $coordinates = $my_model->getCoordinates();

  $coordinates->latitude = 42.3550496;
  $coordinates->longitude = -71.0656267;

  $my_model->save();

If you don't wish to implement your own, a few common serializations are
included in the ``EllisLab\ExpressionEngine\Service\Model\Column\``
namespace:

+----------------------------------+---------------------------------+
| Class                            | Serialization                   |
+==================================+=================================+
| Composite (parent class)         | None, must implement your own   |
+----------------------------------+---------------------------------+
| JsonComposite                    | json_encode($data)              |
+----------------------------------+---------------------------------+
| SerializedComposite              | serialize($data)                |
+----------------------------------+---------------------------------+
| Base64EncodedSerializedComposite | base64_encode(serialize($data)) |
+----------------------------------+---------------------------------+


Multiple Tables
---------------


Model Methods
-------------

.. class:: EllisLab\\ExpressionEngine\\Service\\Model\\Model

.. method:: getId()

  Get the primary key value

  :returns: The primary key value
  :rtype: Int (or null if not yet saved)

.. method:: getName()

  Get the model alias that was registered with ExpressionEngine.

  :returns: The model alias
  :rtype: String

.. method:: getPrimaryKey()

  Get the primary key name

  :returns: The primary key name
  :rtype: String

.. method:: getProperty($name)

  Get a model property, calling any getters that were defined by
  the model.

  :param string $name: The name of the property
  :returns: The value of the property
  :rtype: Mixed

.. method:: setProperty($name, $value)

  Set a model property and track its dirty state. Calls any setters that
  were defined by the model.

  :param string $name: The name of the property
  :param mixed $value: The value to set the property to
  :returns: $this
  :rtype: Model

.. method:: getRawProperty($name)

  Get a model property, *without* calling any getters that were defined
  by the model.

  :param string $name: The name of the property
  :returns: The value of the property
  :rtype: Mixed

.. method:: setRawProperty($name, $value)

  Set a model property and track its dirty state. Does not call any
  setters that were defined by the model.

  :param string $name: The name of the property
  :param mixed $value: The value to set the property to
  :returns: $this
  :rtype: Model
