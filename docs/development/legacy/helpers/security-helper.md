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

# Security Helper

The Security Helper file contains security related functions. This helper is loaded using the following code:

    ee()->load->helper('security');

## Available Functions

[TOC=3]

### `xss_clean($str[, $is_image = FALSE])`

| Parameter  | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| \$str      | `String` | Input data                          |
| \$is_image | `Bool`   | Whether we're dealing with an image |
| Returns    | `String` | XSS-clean string                    |

Provides Cross Site Script Hack filtering.

This function is an alias for `Security::xss_clean()`.

### `sanitize_filename($filename)`

| Parameter  | Type     | Description         |
| ---------- | -------- | ------------------- |
| \$filename | `String` | Filename            |
| Returns    | `String` | Sanitized file name |

Provides protection against directory traversal.

This function is an alias for `Security::sanitize_filename()`.

### `strip_image_tags($str)`

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| \$str     | `String` | Input string                        |
| Returns   | `String` | The input string with no image tags |

This is a security function that will strip image tags from a string. It leaves the image URL as plain text.

Example:

    $string = strip_image_tags($string);

### `encode_php_tags($str)`

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| \$str     | `String` | Input string            |
| Returns   | `String` | Safely formatted string |

This is a security function that converts PHP tags to entities.

NOTE: **Note:** `xss_clean()` does this automatically, if you use it.

Example:

    $string = encode_php_tags($string);
