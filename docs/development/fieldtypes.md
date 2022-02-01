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


NOTE: Fieldtypes can also be **generated quickly by the Command Line Interface (CLI)**. Refer to the [make:addon command](/cli/built-in-commands/make-addon.md) for more information.

## Basic File Structure

All fieldtypes should be placed into the `system/user/addons` folder in a package and be named after that package name. So in a packaged named google_maps the fieldtype file will be `ft.google_maps.php`. All fieldtypes must inherit from the `EE_Fieldtype` base class and they must provide an \$info array with a name and version number.

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

NOTE: **Note:** All add-ons are required to have an [addon.setup.php file](development/addon-setup-php-file.md). This is where Fieldtypes can declare their compatibility with other Fieldtypes, allowing a site builder to switch an existing field to another compatible type, e.g. _text_ can be switched to _email_ and vice-versa. Please see [Fieldtype Compatibility Options](development/addon-setup-php-file.md#fieldtypes) for more details.

## Example - Google Maps

The snippets below were truncated for clarity. The full example fieldtype can be [downloaded here](_downloads/google-maps.zip).

### Installation

The google maps fieldtype is going to have 3 global settings. Latitude, longitude, and zoom. These will determine what the default map looks like. By returning an array from within install we can provide a default set of global settings.

    function install()
    {
        // Somewhere in Oregon ...
        return array(
            'latitude'  => '44.06193297865348',
            'longitude' => '-121.27584457397461',
            'zoom'      => 13
        );
    }

### Uninstaller

The installation method for this fieldtype does not create any additional tables, so no cleanup work needs to be done. The default `uninstall()` method provided by the EE_Fieldtype parent class will suffice. Most fieldtype methods have sensible defaults to help reduce duplicate code.

### Global Settings

The installer sets the default global settings, but currently there is no way to change these from the control panel. We can use the `display_global_settings()` method to return the contents of the settings form. Having this method also enables the global settings link on the overview page.

    function display_global_settings()
    {
        $val = array_merge($this->settings, $_POST);

        $form = form_label('latitude', 'latitude').NBS.form_input('latitude', $val['latitude']).NBS.NBS.NBS.' ';
        $form .= form_label('longitude', 'longitude').NBS.form_input('longitude', $val['longitude']).NBS.NBS.NBS.' ';
        $form .= form_label('zoom', 'zoom').NBS.form_dropdown('zoom', range(1, 20), $val['zoom']);

        return $form;
    }

Manually entering longitudes and latitudes is inconvenient so the final method in the example download also adds some javascript to let the user choose from a map.

### Saving Global Settings

In most instances saving the global settings is as easy as storing the `$_POST` array. Remember to include existing global settings if not everything can be changed.

    function save_global_settings()
    {
        return array_merge($this->settings, $_POST);
    }

### Individual Settings

The default map may not always be the desired choice for each map field, so on the regular settings page it will display a similar configuration screen. We will use the familiar [Shared Form View](development/shared-form-view.md) format to display our settings.

    function display_settings()
    {
        $latitude   = isset($data['latitude']) ? $data['latitude'] : $this->settings['latitude'];
        $longitude  = isset($data['longitude']) ? $data['longitude'] : $this->settings['longitude'];
        $zoom       = isset($data['zoom']) ? $data['zoom'] : $this->settings['zoom'];

        $settings = array(
            array(
                'title' => 'latitude',
                'desc' => 'latitude_desc',
                'fields' => array(
                    'latitude' => array(
                        'type' => 'text',
                        'value' => $latitude,
                    )
                )
            ),
            array(
                'title' => 'longitude',
                'desc' => 'longitude_desc',
                'fields' => array(
                    'longitude' => array(
                        'type' => 'text',
                        'value' => $longitude,
                    )
                )
            ),
            array(
                'title' => 'zoom',
                'desc' => 'zoom_desc',
                'fields' => array(
                    'zoom' => array(
                        'type' => 'select',
                        'choices' => range(1, 20),
                        'value' => $zoom,
                    )
                )
            ),
            array(
                'title' => 'preview',
                'desc' => 'preview_desc',
                'wide' => TRUE,
                'fields' => array(
                    'preview' => array(
                        'type' => 'html',
                        'content' => '<div style="height: 300px;"><div id="map_canvas" style="width: 100%; height: 100%"></div></div>'
                    )
                )
            )
        );

        // Map preview
        $this->_cp_js();
        ee()->javascript->output('$(window).load(gmaps);');

        return array('field_options_google_maps' => array(
            'label' => 'field_options',
            'group' => 'google_maps',
            'settings' => $settings
        ));
    }

### Saving Individual Settings

Saving individual field settings works largely the same as saving global settings. Keep be aware that they are later merged with global settings, so they can override a global setting.

If your fieldtype needs a wide style on the publish form, like Grid or a Textarea, then be sure to include `'field_wide' => TRUE` in your settings array.

    function save_settings($data)
    {
        return array(
            'latitude'  => ee()->input->post('latitude'),
            'longitude' => ee()->input->post('longitude'),
            'zoom'      => ee()->input->post('zoom')
        );
    }

### Displaying the Field (Publish Page)

With all the settings set up, it can now be displayed on the publish screen. A key factor when you get to this stage is to decide in what format the data should be stored. Since all three available values in this case are numbers, this field will store them separated by pipes (`lang|lat|zoom`).

    function display_field($data)
    {
        $data_points = array('latitude', 'longitude', 'zoom');

        if ($data)
        {
            list($latitude, $longitude, $zoom) = explode('|', $data);
        }
        else
        {
            foreach($data_points as $key)
            {
                $$key = $this->settings[$key];
            }
        }

        $zoom = (int) $zoom;
        $options = compact($data_points);

        // some javascript

        $value = implode('|', array_values($options));
        $hidden_input = form_input($this->field_name, $value, 'id="'.$this->field_name.'" style="display: none;"');

        return $hidden_input.'<div style="height: 500px;"><div id="map_canvas" style="width: 100%; height: 100%"></div></div>';
    }

### Rendering the Tag

Finally, the field needs a frontend display. For google maps this will almost exclusively be javascript.

    function replace_tag($data, $params = array(), $tagdata = FALSE)
    {
        static $script_on_page = FALSE;
        $ret = '';

        list($latitude, $longitude, $zoom) = explode('|', $data);

        // google maps javascript ...

        return $ret.'<div style="height: 500px;"><div id="map_canvas_'.$this->field_id.'" style="width: 100%; height: 100%"></div></div>';
    }

### Creating Multiple Rendering Options

Along with parameters a field can also provide tag modifiers to change its output. In the template these are called by adding a colon to the fieldname, followed by the modifier name. For example: `{myfield:latitude}`. The advantage that field modifiers have over parameters is that they can be used in conditionals.

Parsing the modifiers is identical to using the regular `replace_tag()` function. The method name must start with `replace_` followed by the modifier name.

    function replace_latitude($data, $params = array(), $tagdata = FALSE)
    {
        list($latitude, $longitude, $zoom) = explode('|', $data);
        return $latitude;
    }

There is also a function to catch ALL modifiers, whose declaration includes the modifier name and looks like this:

    function replace_tag_catchall($file_info, $params = array(), $tagdata = FALSE, $modifier = FALSE)

You can also use variable pairs to capture tag data for processing in your modifier function. The syntax for using modifiers on variable pairs in your templates is:

    {myfield:option}
        Tag data here
    {/myfield}

## Development Reference

[TOC=3]

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

NOTE: **Note:** when setting `public $entry_manager_compatible = true;` make sure that your fieldtype also implements the [`renderTableCell` method](development/fieldtypes.md#ee_fieldtyperendertablecelldata-field_id-entry).

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

## Working with Live Preview

In order for your fieldtype to render in a template under live preview, it needs to be able to render using data from the publish form, which is essentially your fieldtype's POST data. You will not access your data from `$_POST`, your fieldtype's data should be sent automatically to your `replace_tag()` method. If you're missing any data, you can access the entry's entire preview data via the [LivePreview service](development/services/live-preview.md).

This means if your fieldtype does extra processing before your data is saved and your `replace_tag()` method expects data in a different format than what is returned directly from the publish form, you'll need to make accommodations.

For instance, say your fieldtype has inputs that look like this:

    <input type="text" name="field_id_1[text1]">
    <input type="text" name="field_id_1[text2]">

And your `save()` and `replace_tag()` routines looks like this:

    function save($data)
    {
        // Concatenate this data to save in the database
        return $data['text1'] . $data['text2'];
    }

    function replace_tag($data)
    {
        // Data is preformatted, just return it!
        return $data;
    }

You may want to change your `replace_tag()` routine to format its data on the fly:

    function replace_tag($data)
    {
        // Looks like we're in live preview, reformat our data for presentation
        if (ee('LivePreview')->hasEntryData())
        {
            return $data['text1'] . $data['text2'];
        }

        return $data;
    }

### Live Preview Javascript

Live Preview automatically refreshes when HTML inputs, selects, and textareas are interacted with. If your fieldtype has other interactions that need to update the live preview, you can use the following JavaScript:

    $(document).trigger('entry:preview');

Many fieldtypes do not need to be notified via JavaScript when the Live Preview modal opens and closes, many of your JavaScript bindings should continue to work. But certain libraries such as CKEditor may require some more attention in this area and for that you can listen to the `entry:preview-open` and `entry:preview-closed` events on `$(document)` to do any extra processing you need:

    $(document).on('entry:preview-open', function(event) {
      // ...
    });

## Displaying field data in Entry Manager

Custom fields can display their data inside the Entry Manager through 3 possible ways:
 1. Declare `public $has_array_data = false;` OR
 2. Add `implements ColumnInterface` to fieldtype class definition.

        use ExpressionEngine\Library\CP\EntryManager\ColumnInterface;
        class Google_maps_ft extends EE_Fieldtype implements ColumnInterface {
    OR
 3. Declare `public $entry_manager_compatible = true;` and implement `renderTableCell` method

**Example:**

    class Google_maps_ft extends EE_Fieldtype
    {
        public $has_array_data = true;

        public $entry_manager_compatible = true;

        /*.....*/

        /**
        * Implements EntryManager\ColumnInterface
        */
        public function renderTableCell($data, $field_id, $entry)
        {
            if (!empty($data)) {
                list($latitude, $longitude, $zoom) = explode('|', $data);
                return "<a href=\"https://www.google.com/maps/@{$latitude},{$longitude},{$zoom}z\" target=\"_blank\">View on map</a>";
            }
            return '';
        }

        /**
        * Allows HTML in the column content
        */
        public function getTableColumnConfig()
        {
            return [
                'encode' => false
            ];
        }

        /* .... */

    }

## Entry cloning support

[ExpressionEngine Pro](/pro/overview.md) enables add ability to clone existing entries using "Clone to New Entry" option on entry editing page. Most of fieldtypes do not need to do anything special to support this feature. 

However if the fieldtype you are developing is saving data to its own database table, you might need to tell it to save the rows as submission for new entry, and not for the existing one.

You can do it by adding this check:

    if (defined('CLONING_MODE') && CLONING_MODE === true) {
        //this is cloning request, add new rows
    }

## Implementing Filepicker for Rich Text Editor

If your add-on is operating as File Manager, you might want to make it available as file picker for RTE fields.

In order to achieve that, create file prefixed with `rtefb.` in add-on's main directory, e.g. `rtefb.my_addon.php`. You can refer to the file in Filepicker add-on as an example.

The file's class needs to implement `ExpressionEngine\Library\Rte\RteFilebrowserInterface`. The easiest way to achive that is to extend `ExpressionEngine\Library\Rte\AbstractRteFilebrowser` abstract class and add code only for the functions that work differently from 
