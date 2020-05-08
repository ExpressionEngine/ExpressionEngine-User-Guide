---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Security Class

[TOC]

## Calling the Security Class

**class `Security`**

This class is initialized automatically.

## Cross Site Scripting Protection

For general XSS protection handling, please refer to the [Cross Site Scripting](development/guidelines/security.md#cross-site-scripting-xss) section of the security guidelines.

### `xss_clean($str[, $is_image = FALSE])`

| Parameter  | Type      | Description                                                                                                                          |
| ---------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| \$str      | `Mixed`   | Either a string or an array to sanitize                                                                                              |
| \$is_image | `Boolean` | Set to `TRUE` if you want to test images for XSS attacks.                                                                            |
| Returns    | `Mixed`   | Either a string or an array of sanitized strings. If `$is_image` is set to `TRUE`, will return `FALSE` if the image fails the check. |

`xss_clean()` is the built in ExpressionEngine XSS sanitization method, which is constantly tweaked for improved security and performance:

    $str = ee()->security->xss_clean($str);

## Cross Site Request Forgery Protection

For general CSRF protection handling, please refer to the [Cross Site Request Forgery](development/guidelines/security.md#cross-site-request-forgery) section of the security guidelines.

## Other Class Methods

### `sanitize_filename($str[, $relative_path = FALSE])`

| Parameter       | Type      | Description                                                           |
| --------------- | --------- | --------------------------------------------------------------------- |
| \$str           | `String`  | Filename to sanitize                                                  |
| \$relative_path | `Boolean` | Set to `TRUE` if you want to validate a filename with a relative path |
| Returns         | `String`  | Sanitized filename                                                    |

Removes naughty characters from filenames. Returns a sanitized string:

    $filename = ee()->security->sanitize_filename($name);

### `xss_hash()`

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| Returns   | `String` | Random hash |

Returns a random hash:

    echo ee()->security->xss_hash();
