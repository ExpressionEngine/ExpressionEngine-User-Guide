<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Fieldtype Bridge
----------------

To make your fieldtype compatible with Pro Variables, you can choose to return `TRUE` for the content type `pro_variables` in your `accepts_content_type` method. You can also use specific methods which are called. As a rule, these methods are named `var_x`, where `x` is the original method name.

NOTE: **Note:** The `var_display_field` method **must** be defined in your fieldtype in order to show up in Pro Variables.

## Properties 
Fieldtypes that are called by Pro Variables have the following properties available:

### `$this->content_type`

Always set to `pro_variables`.

### `$this->id`

The variable ID; `NULL` when new or not known.

### `$this->name`

The variable name; `NULL` when new or not known.

### `$this->row`

The entire variable row, including variable data, label, and more.

### `$this->settings`

The (decoded) variable settings.

## Methods

You can use the following methods in your fieldtype to further enhance Pro Variables compatibility.

### var_display_field _(required)_

Displays the input field on the module home page. You can access the current variable id with `$this->id`.

#### Arguments

- `$data` _(string)_ — The current variable data.

#### Return

A string containing the HTML to be used in the module’s home page.

### var_display_settings

If the fieldtype has settings, use this method to display them. You can access the current variable id with `$this->id`.

#### Arguments

- `$settings` _(array)_ — The current variable’s settings.

#### Return

An array containing two elements: the name/label in the first element, the form element(s) in the second.

### var_save_settings

Use this method to catch the settings values before saving them to the database.

#### Arguments

- `$settings` _(array)_ — The posted variable’s settings.

#### Return

An associative array containing the settings to be saved.

### var_post_save_settings

Use this method for additional processing when a (new) variable has been saved to the database.

#### Arguments

- `$settings` _(array)_ — The posted variable’s settings.

#### Return

`NULL`

### var_save

Use this method to catch the variable value before saving it to the database.

#### Arguments

- `$data` _(string)_ — The posted variable data.

#### Return

A string containing the modified variable data to be saved.

### var_post_save

Use this method to do something after the variable value has been saved to the database.

#### Arguments

- `$data` _(string)_ — The current variable data.

### var_replace_tag

Use this method for displaying the variable value in your templates, using the `{exp:pro_variables:parse}`, `{exp:pro_variables:single}` and `{exp:pro_variables:pair}` tags.

#### Arguments

- `$data` _(string)_ — The current variable’s value.
- `$tagparams` _(array)_ — The tag parameters.
- `$tagdata` _(string)_ — The current tag data.

#### Return

A string containing the modified tagdata.

### var_delete

Use this method for additional processing before a variable is deleted.

#### Arguments

- `$id` _(int)_ — The ID of the variable about to be deleted.

#### Return

`NULL`