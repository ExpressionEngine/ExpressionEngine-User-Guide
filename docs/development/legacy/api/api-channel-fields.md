---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine Channel Fields API

## Calling the Class

The Channel Fields class is called with the api-&gt;instantiate() function:

    ee()->load->library('api'); ee()->legacy_api->instantiate('channel_fields');

## Function Reference

**class `Api_channel_fields`**

[TOC=3]

### `fetch_all_fieldtypes()`

| Parameter | Type    | Description                                             |
| --------- | ------- | ------------------------------------------------------- |
| Returns   | `Array` | Nested associative arrays of fieldtype data (see below) |

Goes through all fieldtype files, includes them (using `include_handler()`), and returns an array of all found fieldtypes:

    ee()->api_channel_fields->fetch_all_fieldtypes();

Example of returned data:

    array(
        'fieldtype_shortname' => array(
            'path'    =>  (string) File Path,
            'file'    =>  (string) Filename,
            'name'    =>  (string) Human readable name,
            'class'   =>  (string) Class Name,
            'package'   =>  (string) Package name
        ),
        'fieldtype_shortname2' => array(...),
    );

A package name is only returned if the fieldtype comes from a third party

### `fetch_installed_fieldtypes()`

| Parameter | Type    | Description                                                                                     |
| --------- | ------- | ----------------------------------------------------------------------------------------------- |
| Returns   | `Array` | Nested associative arrays of installed fieldtype data. Adds in version number and fieldtype ID. |

This method is identical to `~Api_channel_fields::fetch_all_fieldtypes`, but the returned array is limited to fieldtypes that have been installed by the user:

    ee()->api_channel_fields->fetch_installed_fieldtypes();

### `include_handler($field_type)`

| Parameter    | Type     | Description                                                   |
| ------------ | -------- | ------------------------------------------------------------- |
| \$field_type | `String` | Name of the fieldtype to include (e.g. ft.**field_name**.php) |
| Returns      | `String` | Name of the fieldtype's class.                                |

This method includes the class that is responsible for a certain fieldtype, and adds it to a list of known fieldtypes. Do not include fieldtypes manually as it may cause ExpressionEngine to not recognize them:

    ee()->api_channel_fields->include_handler((string) $field_type);

### `setup_handler($field_type)`

| Parameter    | Type      | Description                                                   |
| ------------ | --------- | ------------------------------------------------------------- |
| \$field_type | `String`  | Name of the fieldtype to include (e.g. ft.**field_name**.php) |
| Returns      | `Boolean` | `TRUE` if setup was successful, `FALSE` if not                |

This method prepares resets the fieldtype class and its settings. It must be called before a fieldtype is used:

    ee()->api_channel_fields->setup_handler((string) $field_type);

### `setup_entry_settings($channel_id, $entry_data[, $bookmarklet = FALSE])`

| Parameter     | Type      | Description                                               |
| ------------- | --------- | --------------------------------------------------------- |
| \$channel_id  | `Int`     | ID of the channel the entry is in                         |
| \$entry_data  | `Array`   | Associative array of entry data                           |
| \$bookmarklet | `Boolean` | `TRUE` if you need the data to be setup for a bookmarklet |
| Returns       | `Array`   | Nested array of field settings for a channel with data    |

This method will properly populate the settings array for all fields in the specified channel. It returns an array of all field settings:

    ee()->api_channel_fields->setup_entry_settings((string) $channel_id, (array) $entry_data, (bool) $bookmarklet);

### `set_settings($field_id, $settings)`

| Parameter  | Type     | Description                                                 |
| ---------- | -------- | ----------------------------------------------------------- |
| \$field_id | `String` | ID of the field                                             |
| \$settings | `Mixed`  | Array of settings to **replace** the original settings with |
| Returns    | `Void`   |                                                             |

This method is used to assign additional settings to a fieldtype. This may be any data that a fieldtype developer may need to use in their fieldtype. The settings array must include a `field_type` key, and can include an optional `field_name` if used in a channel context:

    ee()->api_channel_fields->set_settings((string) $field_id, (mixed) $settings);

### `get_settings($field_id)`

| Parameter  | Type     | Description                                                     |
| ---------- | -------- | --------------------------------------------------------------- |
| \$field_id | `String` | ID of the field                                                 |
| Returns    | `Array`  | Array of settings or an empty array if that field doesn't exist |

This method gets the settings of an individual field:

    ee()->api_channel_fields->get_settings((string) $field_id);

### `apply($method[, $parameters = array()])`

| Parameter    | Type     | Description                                                 |
| ------------ | -------- | ----------------------------------------------------------- |
| \$method     | `String` | Name of the method to run                                   |
| \$parameters | `Mixed`  | Parameters to send to the method                            |
| Returns      | `Mixed`  | The return value of the fieldtype function that was called. |

This is a convenience method to call a fieldtype after it has been setup. It will automatically setup the proper third party paths and handle PHP4's pass-by-reference quirks. It acts on the last fieldtype that was passed to `setup_handler()`. It takes an array of parameters:

    ee()->api_channel_fields->apply((string) $method, (mixed) $parameters);

Example Usage:

    $parameters = array(
        'foo'       => 'Dog',
        'bar'       => 'Cat'
    );

    ee()->api_channel_fields->setup_handler('my_fieldtype');
    echo ee()->api_channel_fields->apply('my_method', $parameters);

### `update_field($field_data)`

| Parameter    | Type     | Description                                                                                                                                                                                           |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$field_data | `Array`  | The field settings. Needs the following keys: `group_id`, `site_id`, `field_name`, `field_label`, `field_type`, `field_order`, and also fieldtype-specific settings, e.g. `text_field_text_direction` |
| Returns      | `String` | The field_id of the updated/created field.                                                                                                                                                            |

This creates a new channel field or updates an existing field. Include a `field_id` in the `$field_data` array to update an existing field, or omit `field_id` to create a new one.

    ee()->api_channel_fields->update_field((array) $field_data);

Values that may be passed in the \$field_data array include:

- `group_id`, (`int`)
- `field_id`, (`int` optional)
- `field_name`, (`string` a-zA-Z0-9\_- only)
- `field_label`, (`string`)
- `field_type`, (`string` a valid fieldtype short name)
- `field_order`, (`int`)
- `field_instructions`, (`string`)
- `field_required`, (`string` y/n)
- `field_search`, (`string` y/n)
- `field_is_hidden`, (`string` y/n)
- `field_fmt`, (`string`)
- `field_show_fmt`, (`string`)
- `field_text_direction`, (`string` ltr/rtl)
- `field_maxl`, (`int`)
- and other fieldtype-specific settings, see the fieldtype's `display_settings` and `save_settings` methods for more options

Example Usage:

    $field_data = array(
        'group_id' => 1,
        'field_name' => 'blog_body',
        'field_label' => 'Body',
        'field_type' => 'text',
        'field_order' => 10,
        'field_required' => 'y',
        'field_search' => 'y',
        'field_is_hidden' => 'n',
        'field_instructions' => '',
        'field_maxl' => 128,
        'text_field_fmt' => 'none',
        'text_field_show_fmt' => 'n',
        'text_field_text_direction' => 'ltr',
        'text_field_content_type' => 'all',
        'text_field_show_smileys' => 'n',
        'text_field_show_glossary' => 'n',
        'text_field_show_spellcheck' => 'n',
        'text_field_show_file_selector' => 'n',
    );

    ee()->api_channel_fields->update_field($field_data);

### `field_edit_vars($group_id[, $field_id = FALSE[, $field_types = FALSE]])`

| Parameter     | Type    | Description                                                                                         |
| ------------- | ------- | --------------------------------------------------------------------------------------------------- |
| group_id      | `Int`   | Group to add/edit field                                                                             |
| \$field_id    | `Int`   | Field ID if you're editing, FALSE if it's new                                                       |
| \$field_types | `Array` | Array of field types to present as `field_type_options`, will show all valid field types if `FALSE` |
| Returns       | `Array` | View variables for the `admin/field_edit` view                                                      |

This method supplies the view variables for field settings in the Edit/Create Field screen. This is used prior to and in conjunction with `api_channel_fields->update_field()`. `$field_id` is optional if you are creating a new field. `$field_types` is optional, and is an array of field types to display. By default, all field types are shown in the view:

    ee()->api_channel_fields->field_edit_vars((int) $group_id, (int) $field_id, (array) $field_types)

Example Usage:

    $vars = ee()->api_channel_fields->field_edit_vars(1, 2);
    return ee()->load->view('admin/field_edit', $vars, TRUE);
