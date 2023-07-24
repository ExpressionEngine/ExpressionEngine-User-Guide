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

# Output Class

The Output class is a core class with one main function: To send the finalized web page to the requesting browser. It is also responsible for caching web pages.

NOTE: **Note:** This class is initialized automatically by the system so there is no need to do it manually.

Under normal circumstances you won't even notice the Output class since it works transparently without your intervention. For example, when you use the [Loader](development/legacy/libraries/loader.md) class to load a view file, it's automatically passed to the Output class, which will be called automatically by ExpressionEngine at the end of system execution. It is possible, however, for you to manually intervene with the output if you need to.

## Class Reference

**class `EE_Output`**

[TOC=3]

### `property $parse_exec_vars`

Defaults to `TRUE`.

Enables/disables parsing of the `{elapsed_time}` and `{memory_usage}` pseudo-variables.

ExpressionEngine will parse those tokens in your output by default. To disable this, set this property to `FALSE` in your controller.

    ee()->output->parse_exec_vars = FALSE;

### `set_output($output)`

| Parameter | Type        | Description                          |
| --------- | ----------- | ------------------------------------ |
| \$output  | `String`    | String to set the output to          |
| Returns   | `EE_Output` | EE_Output instance (method chaining) |

Permits you to manually set the final output string. Usage example:

    ee()->output->set_output($data);

NOTE: **Important:** If you do set your output manually, it must be the last thing done in the function you call it from. For example, if you build a page in one of your controller methods, don't set the output until the end.

### `get_output()`

| Parameter | Type     | Description   |
| --------- | -------- | ------------- |
| Returns   | `String` | Output string |

Permits you to manually retrieve any output that has been sent for storage in the output class. Usage example:

    $string = ee()->output->get_output();

Note that data will only be retrievable from this function if it has been previously sent to the output class by one of the ExpressionEngine functions like `ee()->load->view()`.

### `append_output($output)`

| Parameter | Type        | Description                          |
| --------- | ----------- | ------------------------------------ |
| \$output  | `String`    | Additional output data to append     |
| Returns   | `EE_Output` | EE_Output instance (method chaining) |

Appends data onto the output string.

    ee()->output->append_output($data);

### `set_header($header[, $replace = TRUE])`

| Parameter | Type        | Description                                                   |
| --------- | ----------- | ------------------------------------------------------------- |
| \$header  | `String`    | HTTP response header                                          |
| \$replace | `Bool`      | Whether to replace the old header value, if it is already set |
| Returns   | `EE_Output` | EE_Output instance (method chaining)                          |

Permits you to manually set server headers, which the output class will send for you when outputting the final rendered display. Example:

    ee()->output->set_header('HTTP/1.0 200 OK');
    ee()->output->set_header('HTTP/1.1 200 OK');
    ee()->output->set_header('Last-Modified: '.gmdate('D, d M Y H:i:s', $last_update).' GMT');
    ee()->output->set_header('Cache-Control: no-store, no-cache, must-revalidate');
    ee()->output->set_header('Cache-Control: post-check=0, pre-check=0');
    ee()->output->set_header('Pragma: no-cache');

### `set_status_header([$code = 200[, $text = '']])`

| Parameter | Type        | Description                          |
| --------- | ----------- | ------------------------------------ |
| \$code    | `Int`       | HTTP status code                     |
| \$text    | `String`    | Optional message                     |
| Returns   | `EE_Output` | EE_Output instance (method chaining) |

Permits you to manually set a server status header. Example:

    ee()->output->set_status_header('401');
    // Sets the header as:  Unauthorized

[See here](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html) for a full list of headers.

NOTE: **Note:** This method is an alias for `set_status_header()`.

### `enable_profiler([$val = TRUE])`

| Parameter | Type        | Description                               |
| --------- | ----------- | ----------------------------------------- |
| \$val     | `Bool`      | Whether to enable or disable the Profiler |
| Returns   | `EE_Output` | EE_Output instance (method chaining)      |

Permits you to enable/disable the Output Debugger, which will display benchmark and other data at the bottom of your pages for debugging and optimization purposes.

To enable the profiler place the following line anywhere within your [Controller](development/legacy/controllers.md) methods:

    ee()->output->enable_profiler(TRUE);

When enabled a report will be generated and inserted at the bottom of your pages.

To disable the profiler you would use:

    ee()->output->enable_profiler(FALSE);

### `cache($time)`

| Parameter | Type        | Description                          |
| --------- | ----------- | ------------------------------------ |
| \$time    | `Int`       | Cache expiration time in seconds     |
| Returns   | `EE_Output` | EE_Output instance (method chaining) |

Caches the current page for the specified amount of seconds.

For more information, please see the [caching documentation](development/legacy/libraries/cache.md).

### `_display([$output = ''])`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$output  | `String` | Output data override |
| Returns   | `Void`   | void                 |

Sends finalized output data to the browser along with any server headers. It also stops benchmark timers.

NOTE: **Note:** This method is called automatically at the end of script execution, you won't need to call it manually unless you are aborting script execution using `exit()` or `die()` in your code.

Example:

    $response = array('status' => 'OK');

    ee()->output
        ->set_status_header(200)
        ->set_content_type('application/json', 'utf-8')
        ->set_output(json_encode($response, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES))
        ->_display();
    exit;

NOTE: **Note:** Calling this method manually without aborting script execution will result in duplicated output.

### `send_ajax_response($msg, [$error = false])`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$msg  | `Array` | Object to be sent to the client. |
| \$error  | `Bool` | TRUE to set header status to `500` |
| Returns   | `Void`   | void                 |

Calling this method encode the given `$msg` parameter and will set the header `Content-Type: application/json`.

Example:

    $output = array(
        'this' => 'that',
        'foo' => 'bar'
    );
    ee()->output->send_ajax_response($output);
