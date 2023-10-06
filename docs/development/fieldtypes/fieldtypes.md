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

# Fieldtypes

[TOC]

## Overview
ExpressionEngine ships with a range of fieldtypes already in place. However, perhaps you want to had your fieldtype that executes functionality differently than the fields that ship with ExpressionEngine. If so, then read below for how to create your own custom fieldtype. 

TIP: For an overview of what a Fieldtype is, read the [Fieldtype Overview docs](/fieldtypes/overview.md).

NOTE:Before adding a fieldtype to your add-on, you need to already have an add-on in place. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## Creating An Amazing Fieldtype

Adding a custom fieldtype to your add-on is easy with the `make:fieldtype` command. 

```
$ php system/ee/eecli.php make:fieldtype
Let's implement a fieldtype!
What is the fieldtype name? Amazing Fieldtype
What add-on is the fieldtype being added to? [amazing_add_on]:  amazing_add_on
Building fieldype.
Fieldtype created successfully!
```

This will create a `ft.[fieldtype_name].php` in your add-on's folder. In the example above, this creates a file named `ft.amazing__fieldtype.php`.

```
amazing_add_on
 ...
┣ ft.[fieldtype_name].php
┗ ...
 ```

## Anatomy of A Fieldtype

[TOC=3]

All fieldtypes must inherit from the `EE_Fieldtype` base class and they must provide an `$info` array with a name and version number.

    <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Google_maps_ft extends EE_Fieldtype {

        var $info = array(
            'name'      => 'Google Maps',
            'version'   => '1.0'
        );

        // --------------------------------------------------------------------

        function display_field($data)
        {
            return form_input(array(
                'name'  => $this->field_name,
                'id'    => $this->field_id,
                'value' => $data
            ));
        }
    }
    // END Google_maps_ft class

    /* End of file ft.google_maps.php */
    /* Location: ./system/user/addons/google_maps/ft.google_maps.php */

NOTE: **Note:** Fieldtypes can declare their compatibility with other Fieldtypes in the `addon.setup.php` file, allowing a site admin to switch an existing field to another compatible type, e.g. _text_ can be switched to _email_ and vice-versa. Please see [Fieldtype Compatibility Options](development/addon-setup-php-file.md#fieldtypes) for more details.

NOTE: We also have [Example fieldtype with annotations](development/fieldtypes/example.md) for your reference.



### Class Variables

**class `EE_Fieldtype`**

The base class provides a handful of base variables:

[TOC=4]

#### `EE_Fieldtype::$id`

The field identifier (unique for the current content type).

#### `EE_Fieldtype::$name`

The field name, used for the tag names.

#### `EE_Fieldtype::$content_id`

The unique id of the parent content that contains this field. Not available in install, settings, or other non-content environments.

#### `EE_Fieldtype::$content_type`

#### `EE_Fieldtype::$settings`

The field settings array

#### `EE_Fieldtype::$field_id`

Alias for id

#### `EE_Fieldtype::$field_name`

Alias for name

NOTE: **Note:** Allowing fields to be used as tag pairs requires some extra processing to reduce the parsing overhead. So if you want to create such a field, you need to explicitly tell the parser to pre-parse these pairs:

#### `EE_Fieldtype::$has_array_data`

`TRUE` if the field can be used as a tag pair

#### `EE_Fieldtype::$entry_manager_compatible`

`true` if the field should be displayed as an Entry Manager column in the Control Panel.

NOTE: **Note:** when setting `public $entry_manager_compatible = true;` make sure that your fieldtype also implements the [`renderTableCell` method](development/fieldtypes/fieldtypes.md#ee_fieldtyperendertablecelldata-field_id-entry).

#### `EE_Fieldtype::$supportedEvaluationRules`

Array of supported evaluation rules when field is used as conditional (or `null` if the field cannot be used as condtional source). If omitted, default rules set will be used.

#### `EE_Fieldtype::$defaultEvaluationRule`

Default evaluation rule to pre-select when adding field conditions. Optional.

### Function Reference

**class `EE_Fieldtype`**

[TOC=4]

#### `EE_Fieldtype::id()`

Getter for `id`.

| Parameter | Type             |
| --------- | ---------------- |
| Returns   | `Integer/String` |

#### `EE_Fieldtype::name()`

Getter for `name`.

| Parameter | Type     |
| --------- | -------- |
| Returns   | `String` |

#### `EE_Fieldtype::content_id()`

Getter for `content_id`.

| Parameter | Type             |
| --------- | ---------------- |
| Returns   | `Integer/String` |

#### `EE_Fieldtype::content_type()`

Getter for `content_type`.

| Parameter | Type     |
| --------- | -------- |
| Returns   | `String` |

#### `EE_Fieldtype::row($key[, $default = NULL])`

| Parameter | Type     | Description                                 |
| --------- | -------- | ------------------------------------------- |
| \$key     | 'String' | The name of the row value to retrieve       |
| \$default | `Mixed`  | The value to return if \$key is not set     |
| Returns   | `Mixed`  | The value of the row element, or \$default. |

Accessor for the current content type parent row. In the case of channel entries, this would be current entry row. If the key is not found, the value given in default is returned. Not all content types have all row keys.

#### `EE_Fieldtype::install()`

Installs the fieldtype and sets initial global settings. Can return an array of global variables.

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

#### `EE_Fieldtype::uninstall()`

Handle any cleanup needed to uninstall the fieldtype. Channel data is dropped automatically.

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

#### `EE_Fieldtype::display_field($data)`

Used to render the publish field.

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| \$data    | `Array`  | Current field data, blank for new entries |
| Returns   | `String` | The field to display on the publish page  |

#### `EE_Fieldtype::renderTableCell($data, $field_id, $entry)`

Display the field data as column in the Entry Manager

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| \$data    | `Array`  | Current field data                        |
| \$field_id| `Int`    | Current field ID                          |
| \$entry   | `Array`  | Current `ChannelEntry` object             |
| Returns   | `String` | The string to display in Entry Manager column  |

#### `EE_Fieldtype::validate($data)`

Validates the field input

| Parameter | Type             | Description                                               |
| --------- | ---------------- | --------------------------------------------------------- |
| \$data    | `Array`          | Current field data, blank for new entries                 |
| Returns   | `Boolean/String` | `TRUE` if the field validates, an error message otherwise |

#### `EE_Fieldtype::save($data)`

Preps the data for saving

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| \$data    | `Array`  | Current field data, blank for new entries |
| Returns   | `String` | Data to save to the database              |

#### `EE_Fieldtype::post_save($data)`

Handles any custom logic after an entry is saved.

Called after an entry is added or updated. Available data is identical to save. This is a good method to implement if you need the content ID of the fieldtype's newly-saved parent content type.

| Parameter | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| \$data    | `Array` | Current field data, blank for new entries |
| Returns   | `Void`  |                                           |

#### `EE_Fieldtype::delete($ids)`

Handles any custom logic after an entry is deleted.

Called after one or more entries are deleted.

| Parameter | Type    | Description                                                                                                                  |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| \$ids     | `Array` | IDs of deleted entries. Please note that channel data is removed automatically so most fieldtypes will not need this method. |
| Returns   | `Void`  |                                                                                                                              |

#### `EE_Fieldtype::pre_loop($data)`

Before the tag is rendered on the frontend, this function is called to pass field data for the entire channel entries loop to the fieldtype for preprocessing or caching. This function is useful when your fieldtype needs to query the database to render its tag. Instead of querying with each loop of the channel entries tag, all data needed can be gathered up front, therefore reducing queries and loadtime needed.

| Parameter | Type    | Description                                                                                            |
| --------- | ------- | ------------------------------------------------------------------------------------------------------ |
| \$data    | `Array` | contains all field data for the current channel entries loop, limited only to the fieldtype's own data |
| Returns   | `Void`  |                                                                                                        |

#### `EE_Fieldtype::replace_tag($data[, $params = array()[, $tagdata = FALSE]])`

Replace the field tag on the frontend.

| Parameter | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| \$data    | `Array`  | contains the field data (or prepped data, if using `pre_process`) |
| \$params  | `Array`  | contains field parameters (if any)                                |
| \$tagdata | `Array`  | contains data between tag (for tag pairs)                         |
| Returns   | `String` | String to replace the tag                                         |

#### `EE_Fieldtype::display_settings($data)`

| Parameter | Type    | Description                                                                |
| --------- | ------- | -------------------------------------------------------------------------- |
| \$data    | `Array` | Field settings                                                             |
| Returns   | `Array` | An array in the [Shared Form View](development/shared-form-view.md) format |

Display the settings page.

#### `EE_Fieldtype::validate_settings($data)`

| Parameter | Type                       | Description                       |
| --------- | -------------------------- | --------------------------------- |
| \$data    | `Array`                    | Submitted settings for this field |
| Returns   | `Validation result object` |                                   |

Validate fieldtype settings. In this method, you can use the [Validation Service](development/services/validation.md) to ensure values entered in your settings form are valid. Here is an example from our File field:

    function validate_settings($data)
    {
        $validator = ee('Validation')->make(array(
            'allowed_directories' => 'required|allowedDirectories'
        ));

        $validator->defineRule('allowedDirectories', array($this, '_validate_file_settings'));

        return $validator->validate($settings);
    }

Callbacks may be specified as well, as you see above we are calling a method called `_validate_file_settings` to ensure upload destinations exist before creating a new file field.

#### `EE_Fieldtype::save_settings($data)`

| Parameter | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| \$data    | `Array` | Submitted settings for this field |
| Returns   | `Array` | Settings for the field            |

Save the fieldtype settings.

#### `EE_Fieldtype::settings_modify_column($data)`

| Parameter | Type    | Description                                                                                                                                      |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| \$data    | `Array` | settings for this field as well an indicator of the action being performed (`$data['ee_action']` with a value of `delete`, `add` or `get_info`). |
| Returns   | `Array` | Fields to be created, modified or dropped when fields are created                                                                                |

Allows the specification of an array of fields to be added, modified or dropped when fields are created, edited or deleted.

By default, when a new field is created, 2 fields are added to the exp_channel_data table. The content field (`field_id_x`) is a text field and the format field (`field_ft_x`) is a `tinytext NULL default`. You may override or add to those defaults by including an array of fields and field formatting options in this method. For example, the date file type requires an additional `field_dt_x` field and different content field type:

    function settings_modify_column($data)
    {
        $fields['field_id_'.$data['field_id']] = array(
            'type'      => 'INT',
            'constraint'    => 10,
            'default'   => 0
            );

        $fields['field_dt_'.$data['field_id']] = array(
            'type'      => 'VARCHAR',
            'constraint'    => 8
            );

        return $fields;
    }

#### `EE_Fieldtype::post_save_settings($data)`

Do additional processing after the field is created/modified.

`$this->settings` is fully available at this stage.

| Parameter | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| \$data    | `Array` | submitted settings for this field |
| Returns   | `Void`  |                                   |

#### `EE_Fieldtype::display_global_settings()`

Display a global settings page. The current available global settings are in `$this->settings`.

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| Returns   | `String` | Global settings form |

#### `EE_Fieldtype::save_global_settings()`

Save the global settings. Return an array of global settings.

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| Returns   | `Array` | Global settings form |

#### `EE_Fieldtype::pre_process($data)`

Preprocess the data on the frontend. Multiple tag pairs in the same weblog tag will cause `replace_tag` to be called multiple times. To reduce the processing required to extract the original data structure from the string (i.e. unserializing), the `pre_process` function is called first.

| Parameter | Type    | Description     |
| --------- | ------- | --------------- |
| \$data    | `Array` | Field data      |
| Returns   | `Array` | Prepped `$data` |

## Content Type Independence

Fieldtypes can be used to describe fields in many different types of content. For most fieldtypes adding support simply means overriding the `~EE_Fieldtype::accepts_content_type` method to always return TRUE.

### `EE_Fieldtype::accepts_content_type($name)`

Returns TRUE or FALSE based on whether or not the content type is supported. By default all fieldtypes support the _channel_ content type.:

| Parameter | Type      | Description                      |
| --------- | --------- | -------------------------------- |
| \$name    | `string`  | The name of the content type     |
| Returns   | `Boolean` | Supports the given content type? |

    public function accepts_content_type($name)
    {
      return ($name == 'channel');
    }

However, if your fieldtype stores its own data, then you must make sure to clearly separate the data by content type. You can do this by accessing the current content type with the `~EE_Fieldtype::content_type` getter method, and using it as an additional parameter everywhere you store or retrieve data.

You must also handle the complete out removal of a content type.

### `EE_Fieldtype::unregister_content_type($name)`

Remove a content type from the current fieldtype.

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| \$name    | `string` | Name of the content type to remove. |
| Returns   | `void`   |                                     |

If your fieldtype creates columns or tables dynamically, you may also want to implement the opposite case of when a fieldtype is added.

### `EE_Fieldtype::register_content_type($name)`

Add a content type from the current fieldtype.

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| \$name    | `string` | Name of the content type to add. |
| Returns   | `void`   |                                  |

## Grid Fieldtype Development

In order to make your fieldtypes compatible with Grid, a few more methods as well as Javascript callbacks are available.

To make your fieldtype recognized by Grid as a Grid-compatible fieldtype, you need to modify your implementation of `~EE_Fieldtype::accepts_content_type` to accept the `grid` content type. For example:

    public function accepts_content_type($name)
    {
        return ($name == 'channel' || $name == 'grid');
    }

Once that's done, your fieldtype will show up in the list of fieldtypes available for use when setting up a new Grid column.å

### Grid Fieldtype Events

All of the regular fieldtype methods (`display_field()`, `replace_tag()`, etc.) are available prefixed with "grid\_" for special handling when being used in the context of the Grid field, with a few exceptions noted below. For example:

    // Only called when being used as a normal fieldtype:
    public function display_field($data)
    {
        // Display code
    }

    // Only called when being rendered in a Grid field cell:
    public function grid_display_field($data)
    {
        // Display code for Grid cell
    }

However, if a fieldtype does NOT implement `grid_display_field()`, Grid will call `display_field()` to display the field's form in the cell. This applies to all fieldtype methods except for the following:

| Method                    | Exception                              |
| ------------------------- | -------------------------------------- |
| install()                 | No unique Grid method required         |
| uninstall()               | No unique Grid method required         |
| display_global_settings() | No unique Grid method required         |
| save_global_settings()    | No unique Grid method required         |
| settings_modify_column()  | Must use grid_settings_modify_column() |

The idea is that most fieldtypes should be able to use the same code to handle their field operations for both Grid and the normal publish form, but if not, you can easily override the behavior and run special operations when in the context of Grid.

If you use `grid_*` methods, you may want to look for ways to refactor your fieldtype where there is overlapping logic to run. For example, some of our native fieldtypes require slightly different code to render the HTML needed to display fields in `display_field()` and `grid_display_field()`, so we try to centralize the the common logic between them for better code maintainability.

### Grid Fieldtype Settings Class Property

When your fieldtype is in the context of Grid, it will have a few more items available to you in your fieldtype's `$settings` class property.

| Settings Key Name | Description                                                                                                                   |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| col_id            | The ID of the column your fieldtype is in publish form                                                                        |
| col_name          | The short name of the column your fieldtype is in                                                                             |
| col_required      | Whether or not the column is required (y/n), field_required will also be set to this                                          |
| grid_field_id     | Field ID of the column's parent Grid field                                                                                    |
| grid_row_name     | In certain instances, such as saving data, will be set to a unique row name when a row ID might not be available for new rows |
| grid_row_id       | When available, ID of the current row being processed                                                                         |

These are accessed as array keys of your `$settings` class property like so:

    $this->settings['col_id'];

### Grid Javascript Events

Several Javascript events are fired on certain actions to let your fieldtypes know when those actions have taken place. Here is an overview.

| Event Name      | Description                                                                           |
| --------------- | ------------------------------------------------------------------------------------- |
| display         | Called when a row is displayed on the publish form                                    |
| remove          | Called when a row is deleted from the publish form                                    |
| beforeSort      | Called before a row starts sorting on the publish form                                |
| afterSort       | Called after a row finishes sorting on the publish form                               |
| displaySettings | Called when a fieldtype’s settings form is displayed on the Grid field settings page |

To bind an event, use the below Javascript as an example:

    Grid.bind("date", "display", function(cell)
    {
        // Act on event
    });

Here are the usage details for this function:

#### Grid.bind(fieldtype, event, callback)

| Parameter | Type       | Description                            |
| --------- | ---------- | -------------------------------------- |
| fieldtype | `string`   | Your short fieldtype name              |
| event     | `string`   | Event name                             |
| callback  | `function` | Callback function to use for the event |
| Returns   | `void`     |                                        |

A jQuery object of the cell being affected by the current event (or settings form in the case of `displaySettings`) is passed to the callback function. There are a few data attributes available on the cell object such as `fieldtype`, `column-id` and `row-id` (`row-id` will be undefined for new rows). Plus since it's a jQuery object, you have all DOM traversal methods available to act upon.

## Fluid Fieldtype Development

To make your fieldtype recognized by Fluid fields as a compatible fieldtype, you need to modify your implementation of `accepts_content_type` to accept the `fluid_field` content type. For example:

    public function accepts_content_type($name)
    {
        return ($name == 'channel' || $name == 'fluid_field');
    }

Once that's done, your fieldtype will show up in the list of fieldtypes available for use when setting up a new Fluid field.

### Fluid Fieldtype Settings Class Property

When your fieldtype is in the context of Fluid field, it will have an additional item available to you in your fieldtype's `$settings` class property.

| Settings Key Name   | Description                                        |
| ------------------- | -------------------------------------------------- |
| fluid_field_data_id | When available, ID of the Fluid field Data entity. |

This is accessed as array keys of your `$settings` class property like so:

    $this->settings['fluid_field_data_id'];

### Fluid Javascript Events

Several Javascript events are fired on certain actions to let your fieldtypes know when those actions have taken place. Here is an overview.

| Event Name | Description                                                |
| ---------- | ---------------------------------------------------------- |
| add        | Called when field is added to a Fluid field                |
| remove     | Called when field is removed from a Fluid field            |
| beforeSort | Called before a field starts sorting on the publish form   |
| afterSort  | Called after a field finishes sorting on the publish form  |

To bind an event, use the below Javascript as an example:

    FluidField.on("date", "add", function(element)
    {
        // Act on event
    });

Here are the usage details for this function:

#### `FluidField.on(fieldtype, event, callback)`

| Parameter | Type       | Description                            |
| --------- | ---------- | -------------------------------------- |
| fieldtype | `string`   | Your short fieldtype name              |
| event     | `string`   | Event name                             |
| callback  | `function` | Callback function to use for the event |
| Returns   | `void`     |                                        |

A jQuery object of the field being affected by the current event is passed to the callback function.

NOTE: **Note:** Please refer to [Enhanced Fieldtype Features](development/fieldtypes/enhanced.md) page for advanced topics, such ad working with Live Preview, Entry Manager, Entry Cloning, File Picker and Conditional Fields.

## Do Something - Build A Fieldtype

For a complete fieldtype example see the [Google Maps Fieldtype example](/development/fieldtypes/example.md).