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

# Common Functions

ExpressionEngine uses a few functions for its operation that are globally defined, and are available to you at any point. These do not require loading any libraries or helpers.

[TOC=3]

### `is_php($version)`

| Parameter | Type     | Description                                                                   |
| --------- | -------- | ----------------------------------------------------------------------------- |
| \$version | `String` | Version number                                                                |
| Returns   | `Bool`   | TRUE if the running PHP version is at least the one specified or FALSE if not |

Example:

    if (is_php('5.3'))
    {
        $str = quoted_printable_encode($str);
    }

Returns boolean `TRUE` if the installed version of PHP is equal to or greater than the supplied version number. Returns `FALSE` if the installed version of PHP is lower than the supplied version number.

### `is_really_writable($file)`

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| \$file    | `String` | File path                                  |
| Returns   | `Bool`   | TRUE if the path is writable, FALSE if not |

`is_writable()` returns `TRUE` on Windows servers when you really can't write to the file as the OS reports to PHP as `FALSE` only if the read-only attribute is marked.

This function determines if a file is actually writable by attempting to write to it first. Generally only recommended on platforms where this information may be unreliable.

Example:

    if (is_really_writable('file.txt'))
    {
        echo "I could write to this if I wanted to";
    }
    else
    {
        echo "File is not writable";
    }

NOTE: **Note:** See also [PHP bug \#54709](https://bugs.php.net/bug.php?id=54709) for more info.

### `config_item($key)`

| Parameter | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| \$key     | `String` | Config item key                              |
| Returns   | `Mixed`  | Configuration key value or NULL if not found |

The [Config Library](development/legacy/libraries/config.md) is the preferred way of accessing configuration information, however `config_item()` can be used to retrieve single keys. See [Config Library](development/legacy/libraries/config.md) documentation for more information.

### `show_error($message, $status_code[, $heading = 'An Error Was Encountered'])`

| Parameter     | Type     | Description               |
| ------------- | -------- | ------------------------- |
| \$message     | `Mixed`  | Error message             |
| \$status_code | `Int`    | HTTP Response status code |
| \$heading     | `String` | Error page heading        |
| Returns       | `Void`   |                           |

This function calls `CI_Exception::show_error()`.

### `show_404([$page = ''[, $log_error = TRUE]])`

| Parameter   | Type     | Description              |
| ----------- | -------- | ------------------------ |
| \$page      | `String` | URI string               |
| \$log_error | `Bool`   | Whether to log the error |
| Returns     | `Void`   |                          |

This function calls `CI_Exception::show_404()`.

### `log_message($level, $message)`

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$level   | `String` | Log level: 'error', 'debug' or 'info' |
| \$message | `String` | Message to log                        |
| Returns   | `Void`   |                                       |

This function is an alias for `CI_Log::write_log()`.

### `set_status_header($code[, $text = ''])`

| Parameter | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| \$code    | `Int`    | HTTP Response status code                     |
| \$text    | `String` | A custom message to set with the status code |
| Returns   | `Void`   |                                              |

Permits you to manually set a server status header. Example:

    set_status_header(401);
    // Sets the header as:  Unauthorized

[See here](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) for a full list of headers.

### `remove_invisible_characters($str[, $url_encoded = TRUE])`

| Parameter     | Type     | Description                                      |
| ------------- | -------- | ------------------------------------------------ |
| \$str         | `String` | Input string                                     |
| \$url_encoded | `Bool`   | Whether to remove URL-encoded characters as well |
| Returns       | `String` | Sanitized string                                 |

This function prevents inserting `NULL` characters between ASCII characters, like `Java\\0script`.

Example:

    remove_invisible_characters('Java\\0script');
    // Returns: 'Javascript'

### `html_escape($var)`

| Parameter | Type    | Description                          |
| --------- | ------- | ------------------------------------ |
| \$var     | `Mixed` | Variable to escape (string or array) |
| Returns   | `Mixed` | HTML escaped string(s)               |

This function acts as an alias for PHP's native `htmlspecialchars()` function, with the advantage of being able to accept an array of strings.

It is useful in preventing Cross Site Scripting (XSS).

### `get_mimes()`

| Parameter | Type    | Description                        |
| --------- | ------- | ---------------------------------- |
| Returns   | `Array` | An associative array of file types |

This function returns a _reference_ to the MIMEs array from `system/ee/legacy/config/mimes.php`.

### `is_https()`

| Parameter | Type   | Description                                         |
| --------- | ------ | --------------------------------------------------- |
| Returns   | `Bool` | TRUE if currently using HTTP-over-SSL, FALSE if not |

Returns `TRUE` if a secure (HTTPS) connection is used and `FALSE` in any other case (including non-HTTP requests).
