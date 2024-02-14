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

# File Field Library

ExpressionEngine's File Field Library provides some helper functions to display and parse File fields.

## Loading

In order to be used, the library needs to be loaded first. You can do it with this code

    ee()->load->library('file_field');

## Class Reference

**class `File_field`**

[TOC=3]


### `dragAndDropField($field_name, $data = '', $allowed_file_dirs = 'all', $content_type = 'all')`

Creates a drag-and-drop, control-panel only file field

| Parameter               | Type      | Description                                                                                             |
| ------------------------| --------- | --------------------------------------------------------------------------------------------------------|
| \$field_name            | `String`  | The name of the field                                                                                   |
| \$data                  | `String`  | The data stored in the file field e.g. `{file:XX:url}` or `{filedir_x}filename.ext`                     |
| \$allowed_file_dirs     | `String`  | Whether to show one upload destination or all upload destinations. Either 'all' or ONE directory ID  |
| \$content_type          | `String`  | The content type allowed. Either 'all' or 'image'                                                   |
| Returns                 | `String`  | Fully rendered file field                                                                               |

    $file_field = ee()->file_field->dragAndDropField('file_field', $file_field, 'all', 'image');

### `field($field_name, $data = '', $allowed_file_dirs = 'all', $content_type = 'all', $filebrowser = true, $existing_limit = null)`

Creates a front-end-friendly file field

| Parameter           | Type        | Description                                                                         |
| ------------------- | ----------- | ----------------------------------------------------------------------------------- |
| \$field_name        | `String`    | The name of the field                                                               |
| \$data              | `String`    | The data stored in the file field, e.g. `{file:XX:url}` or `{filedir_x}filename.ext` |
| \$allowed_file_dirs | `String`    | The allowed file directory. Either 'all' or ONE directory ID |
| \$content_type      | `String`    | The content type allowed. Either 'all' or 'image' |
| \$filebrowser       | `Bool`      | Indicates whether the list of existing files should be shown |
| \$existing_limit    | `Int`       | The number of existing files to show |
| Returns             | `String`    | Rended file field that can be displayed in front-end templates                      |

### `getFileModelForFieldData($data)`

Returns `File` model for the file field value.
Can accept string like  `{file:XX:url}`, `{filedir_1}somefile.jpg` as well as numeric file ID.

### `parse_field($data)`

Parse field contents, which may be in `{file:XX:url}` or `{filedir_x}filename.ext` format.

This function is being called internally when using [Typography](development/legacy/libraries/typography.md) library, but you might need to explicitly call it in your add-on if the output data are not being passed to EE Typography parser.

    $content = ee()->file_field->parse_field($content);
