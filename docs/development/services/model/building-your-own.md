---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Building your own Models

[TOC]

This section gives a detailed description on how to implement your own models.

NOTE: Models can also be **generated quickly by the Command Line Interface (CLI)**. Refer to the [make:model command](cli/built-in-commands/make-model.md) for more information.

NOTE: **Note:** Please review the basic [Model Usage](development/services/model.md) before attempting to write your own. Creating a model does not automatically create the corresponding database tables if they do not exist; you should use DB Forge to create your add-on's tables.

## Registering Models

All models must be registered in your [addon.setup.php](development/addon-setup-php-file.md) file. They should be in an array called `models`, where the key is their name and the value is the class of the model relative to your namespace. By convention this should be inside a `Model` directory:

    'models' => array(
      'Author' => 'Model\Author',
      'MyModel' => 'Model\MyModel'
    )

NOTE: **Note:** Your add-on prefix will be prepended automatically.

## Model Skeleton

All models **must** declare a primary key, a table name, and a set of properties. The basic skeleton looks as follows:

    namespace My\Namespace\Model\MyModel\Model;

    use ExpressionEngine\Service\Model\Model;

    class MyModel extends Model {

      protected static $_primary_key = 'id';
      protected static $_table_name = 'my_awesome_table';

      protected $id;
      protected $name;
      protected $email;
      // ... more properties

    }

## Properties

The column names of the table should be reflected in the models properties. These **must** be declared as `protected`. If you require class properties for internal use, you should prefix them with an underscore:

    // treated as table columns
    protected $title;
    protected $description;

    // ignored - prefixed with an underscore
    protected $_cache;

## Metadata

All models have static metadata attached to them. Metadata **must** be declared as `protected static` and **must** begin with an underscore to avoid any potential confusion with column names. It can be retrieved with the `getMetadata()` method:

    protected static $_events = array();

    // accessing it:
    MyModel::getMetaData('events');

    // or on an instance
    $my_model_instance->getMetaData('events');

## Internal Events

As covered in the [usage section](development/services/model.md) all models can emit events that can be subscribed to:

    $my_model->on('boom', function($model)
    {
      echo 'boom event happened on '.$model->getName();
    });

    $my_model->emit('boom');

Unfortunately this local event behavior is not very convenient for internal event handling. To solve this problem, all model objects are subscribers to their own events. This means you can automatically bind to events and receive the callback on a regular method.

To do so, first create a public method with the format `on<EventName>`, and then listen to the event by creating an `$_events` metadata array that lists the events you want to subscribe to:

    protected static $_events = array('beforeSave');

    public function onBeforeSave()
    {
      echo 'about to save!';
    }

There are some events that are emitted when handling things in bulk so that you may do things in efficient batches. These event handlers need to be implemented as static methods as your model class will not represent any one record:

    public static function onAfterBulkDelete($delete_ids)
    {
      // Handle deleted items, do extra clean-up, etc.
    }

NOTE: **Note:** Event names typically start with a lowercase letter, but the method name will have them as uppercase due to the `on` prefix.

### Default Events

| Event Name       | When                            | Parameters                 |
| ---------------- | ------------------------------- | -------------------------- |
| afterLoad        | After a model is fetched        | None                       |
| beforeInsert     | Before saving a new model       | None                       |
| afterInsert      | After saving a new model        | None                       |
| beforeUpdate     | Before saving an existing model | Array of changed values    |
| afterUpdate      | After saving an existing model  | Array of changed values    |
| beforeSave       | Before saving a model           | None                       |
| afterSave        | After saving a model            | None                       |
| beforeValidate   | Before validating               | None                       |
| afterValidate    | After validating                | None                       |
| beforeDelete     | Before deleting                 | None                       |
| afterDelete      | After deleting                  | None                       |
| beforeBulkDelete | Before bulk deleting            | Array of IDs being deleted |
| afterBulkDelete  | After deleting                  | Array of IDs deleted       |

## Relationships

_In-Depth Documentation:_ [Relating Models](development/services/model/relating-models.md)

Models can be related to other models using just a little bit of metadata. They are defined on a `$_relationships` metadata array. The array keys should be the relationship names, and their values will be a description of the relationship:

    protected static $_relationships = array(
      'Author' => array(
        'model' => 'Member',
        'type' => 'BelongsTo'
      )
    );

    $my_model->Author; // fetches member that created this entry

The type name is _required_, all other fields have predictable defaults. The `model` key will default to the relationship name. You may need to modify the key names that are used to match the relationship. To do so, specify a `from_key` and a `to_key`, where the `from_key` is a property name on this model, and the `to_key` is a property name on the related model:

    protected static $_relationships = array(
      'Author' => array(
        'model' => 'Member',
        'type' => 'BelongsTo',
        'from_key' => 'author_id',
        'to_key' => 'member_id'
      )
    );

The following types are available:

| Type                | Default from_key         | Default to_key           |
| ------------------- | ------------------------ | ------------------------ |
| HasOne              | This primary key name    | This primary key         |
| HasMany             | This primary key name    | This primary key         |
| BelongsTo           | Related primary key name | Related primary key name |
| HasAndBelongsToMany | This primary key name    | Related primary key name |

### HasAndBelongsToMany

The keys for the `HasAndBelongsToMany` relationship work slightly differently from the rest. This is because this relationship type requires a pivot table to work. The `from_key` and `to_key` still specify a property on the models, but there is an additional `pivot` key for the pivot table name:

    protected static $_relationships = array(
      'Editors' => array(
        'model' => 'Member',
        'type' => 'HasAndBelongsToMany',
        'pivot' => 'my_model_editors',
        'from_key' => 'editor_id',
        'to_key' => 'member_id'
      )
    );

If your pivot table key names do not match the primary key names, you can specify them as well, by turning the pivot item into an array:

    'pivot' => array(
      'table' => 'my_model_editors',
      'left' => 'editor_id',
      'right' => 'member_id'
    )

The `left` column will be matched to your `from_key` property and the `right` column will be matched to your `to_key` property.

## Validation

Validation rules are added using the same format as the [Validation Service](development/services/validation.md). They should be added to a metadata item called `$_validation_rules`:

    protected static $_validation_rules = array(
      'name'  => 'required',
      'email' => 'required|email'
    );

You can also create your own local validation rules. These one-off rules can be added directly to the model class by creating a public method whose name starts with `validate`. The method will be treated as a [custom validation rule](development/services/validation.md#custom-rules). On validation it will receive the property name, current value, rule parameters, and the rule object. The method should return `TRUE` on success, and an error string or language key on failure:

    protected static $_validation_rules = array(
      'even_number' => 'validateMultipleOf[2]',
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

## Getters and Setters

By default setting and getting of properties behaves the way it does for any object. However, you can create your own modifying getters and setters by creating methods in the format of `get__<property>` or `set__<property>`:

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

**Note:** These methods break the camelCase naming convention in order to match the snake_case property names. It also serves as a clear indicator that these methods should not be called directly, even internally. When setting properties manually you should take care to use _setRawProperty_, which will correctly track changes to the property.

## Typed Columns

Model properties can have basic type constraints set on them. These constraints allow for simple get/set typecasting of common values. They are defined in a metadata array called `$_typed_columns`:

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

| Name       | Setting           | Getting          |
| ---------- | ----------------- | ---------------- |
| bool       | Cast to boolean   | Cast to boolean  |
| int        | Cast to integer   | Cast to integer  |
| float      | Cast to float     | Cast to float    |
| double     | Cast to float     | Cast to float    |
| string     | Cast to string    | Cast to string   |
| boolString | Cast to y/n       | Cast to boolean  |
| yesNo      | Cast to y/n       | Cast to boolean  |
| timestamp  | Cast to timestamp | Cast to DateTime |
| pipeDelimited | Cast to string | Cast to array    |

## Composite Types

Sometimes a database column may contain serialized data. Instead of treating this data merely as a string or using getters and setters, you can automatically turn it into an array or object. These are also defined in the `$_typed_columns` metadata array:

    protected static $_typed_columns = array(
      'settings' => 'json'
    );

    $my_model->settings = array('name' => 'Bob'); // stores: {"name": "Bob"}
    $my_model->settings['name']; // 'Bob'

The following composite types are included:

| Name             | Serialization                    |
| ---------------- | -------------------------------- |
| base64           | base64_encode(\$data)            |
| json             | json_encode(\$data)              |
| serialized       | serialize(\$data)                |
| base64Serialized | base64_encode(serialize(\$data)) |

## Model Methods

**class `ExpressionEngine\Service\Model\Model`**

[TOC=3]

### `getId()`

Get the primary key value

| Parameter | Type                            | Description           |
| --------- | ------------------------------- | --------------------- |
| Returns   | `Int`(or null if not yet saved) | The primary key value |

### `getName()`

Get the model alias that was registered with ExpressionEngine.

| Parameter | Type     | Description     |
| --------- | -------- | --------------- |
| Returns   | `String` | The model alias |

### `getPrimaryKey()`

Get the primary key name

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| Returns   | `String` | The primary key name |

### `getProperty($name)`

Get a model property, calling any getters that were defined by the model.

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \$name    | `String` | The name of the property  |
| Returns   | `Mixed`  | The value of the property |

### `setProperty($name, $value)`

Set a model property and track its dirty state. Calls any setters that were defined by the model.

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| \$name    | `String` | The name of the property         |
| \$value   | `Mixed`  | The value to set the property to |
| Returns   | `Model`  | \$this                           |

### `getRawProperty($name)`

Get a model property, _without_ calling any getters that were defined by the model.

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \$name    | `String` | The name of the property  |
| Returns   | `Mixed`  | The value of the property |

### `setRawProperty($name, $value)`

Set a model property and track its dirty state. Does not call any setters that were defined by the model.

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| \$name    | `String` | The name of the property         |
| \$value   | `Mixed`  | The value to set the property to |
| Returns   | `Model`  | \$this                           |

- [Relating Models](development/services/model/relating-models.md)
