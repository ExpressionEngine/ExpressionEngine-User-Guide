---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Cookie Helper

The Cookie Helper file contains functions that assist in working with cookies. This helper is loaded using the following code:

    ee()->load->helper('cookie');

## Available Functions

[TOC=3]

### `set_cookie($name[, $value = ''[, $expire = ''[, $domain = ''[, $path = '/'[, $prefix = ''[, $secure = FALSE[, $httponly = FALSE]]]]]]]])`

| Parameter  | Type     | Description                                                                            |
| ---------- | -------- | -------------------------------------------------------------------------------------- |
| \$name     | `Mixed`  | Cookie name _or_ associative array of all of the parameters available to this function |
| \$value    | `String` | Cookie value                                                                           |
| \$expire   | `Int`    | Number of seconds until expiration                                                     |
| \$domain   | `String` | Cookie domain (usually: .yourdomain.com)                                               |
| \$path     | `String` | Cookie path                                                                            |
| \$prefix   | `String` | Cookie name prefix                                                                     |
| \$secure   | `Bool`   | Whether to only send the cookie through HTTPS                                          |
| \$httponly | `Bool`   | Whether to hide the cookie from JavaScript                                             |
| Returns    | `Void`   |                                                                                        |

This helper function gives you view file friendly syntax to set browser cookies. Refer to the `../libraries/input` for a description of its use, as this function is an alias for `Input::set_cookie()`.

### `get_cookie($index[, $xss_clean = NULL]])`

| Parameter   | Type     | Description                                          |
| ----------- | -------- | ---------------------------------------------------- |
| \$index     | `String` | Cookie name                                          |
| \$xss_clean | `Bool`   | Whether to apply XSS filtering to the returned value |
| Returns     | `Mixed`  | The cookie value or NULL if not found                |

This helper function gives you view file friendly syntax to get browser cookies. Refer to the `../libraries/input` for a description of its use, as this function is an alias for `Input::cookie()`.

### `delete_cookie($name[, $domain = ''[, $path = '/'[, $prefix = '']]]])`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$name    | `String` | Cookie name                              |
| \$domain  | `String` | Cookie domain (usually: .yourdomain.com) |
| \$path    | `String` | Cookie path                              |
| \$prefix  | `String` | Cookie name prefix                       |
| Returns   | `Void`   |                                          |

Lets you delete a cookie. Unless you've set a custom path or other values, only the name of the cookie is needed.:

    delete_cookie('name');

This function is otherwise identical to `set_cookie()`, except that it does not have the value and expiration parameters. You can submit an array of values in the first parameter or you can set discrete parameters.:

    delete_cookie($name, $domain, $path, $prefix)
