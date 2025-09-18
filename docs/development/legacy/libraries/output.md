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

### `send_ajax_response($msg, [$statusCode = false])`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$msg  | `Array` | Object to be sent to the client. |
| \$error  | `Bool|Int` | HTTP status code. If `false`, status code is `200`. If `true`, status code is 500 |
| Returns   | `Void`   | void                 |

Calling this method encode the given `$msg` parameter and will set the header `Content-Type: application/json`.

Example:

    $output = array(
        'this' => 'that',
        'foo' => 'bar'
    );
    ee()->output->send_ajax_response($output);

With status code (401):

```
$output = array(
    'sucess' => 'false',
    'message' => 'not allowed',
);
ee()->output->send_ajax_response($output, 401);
```

As error with standard 500 error code:

```
$output = array(
    'sucess' => 'false',
    'message' => 'not allowed',
);
ee()->output->send_ajax_response($output, true);

### `show_message($data, $xhtml = true, $redirect_url = false, $template_name = 'generic')`

| Parameter       | Type     | Description                                                                                |
| --------------- | -------- | ------------------------------------------------------------------------------------------ |
| \$data          | `Array`  | Data to be sent to the view. Explained below                                               |
| \$xhtml         | `Bool`   | Parse the content as HTML                                                                  |
| \$redirect_url  | `String` | URL to redirect to instead of showing the message                                          |
| \$template_name | `String` | Specialty template to use. Defaults to `generic` which is equivalent of `message_template` |
| Returns         | `Void`   | void                                                                                       |

Show user message using [system message template](control-panel/template-manager.md#system-message-templates) or [custom template](control-panel/template-manager.md#custom-system-messages). This is used on front-end, for instance, when we need to inform the user about successful form submission.

When `$redirect_url` is provided, the user will be redirected to that URL instead of showing the message.

The `$data` parameter is an associative array with the following keys:
 - `title` - HTML titles of message page
 - `heading` - heading text
 - `content` - main content
 - `redirect` - URL to automatically redirect to after showing message
 - `rate` - time in seconds after which the redirect happens
 - `link` - the link to include in the message. Should be in the format of `array($link_url, $link_text)`

Example:

    $data = array(
        'title' => 'Title',
        'heading' => 'Heading',
        'content' => 'Content',
        'redirect' => 'http://example.com',
        'rate' => 5,
        'link' => array('http://example.com', 'Link Text')
    );
    ee()->output->show_message($data);

### `show_user_error($type = 'submission', $errors = '', $heading = '', $redirect_url = '')`

| Parameter       | Type     | Description                                                                                |
| --------------- | -------- | ------------------------------------------------------------------------------------------ |
| \$type          | `String` | Type of error. Defaults to `submission`, can also be `general` or `off`                    |
| \$errors        | `Mixed`  | Error message or array of messages to display.                                             |
| \$heading       | `String` | Heading text. Legacy, not used, set automatically based on type.                           |
| \$redirect_url  | `String` | URL to redirect to instead of showing the message                                          |
| Returns         | `Void`   | void                                                                                       |

Show user an error message using [system message template](control-panel/template-manager.md#system-message-templates) or [custom template](control-panel/template-manager.md#custom-system-messages). This is used on front-end, for instance, when a form is submitted without the required info.

When `$redirect_url` is provided, the user will be redirected to that URL instead of showing the message. Useful when the form is set to [handle errors inline](templates/globals/single-variables.md#error-variables).

    $return_error_link = ee()->functions->determine_error_return();
    ee()->output->show_user_error('submission', $errors, '', $return_error_link);

### `show_form_error($errors, $type = 'general')`

| Parameter       | Type     | Description                                                                                |
| --------------- | -------- | ------------------------------------------------------------------------------------------ |
| \$errors        | `Mixed`  | Array of error messages or instance of \ExpressionEngine\Service\Validation\Result         |
| \$type          | `String` | Type of error. Defaults to `general`, can also be `submission` or `off`                    |
| Returns         | `Void`   | void                                                                                       |

Handle displaying errors for a form either passed as a Validation Result or an array of errors.  If the form is using
inline error handling the errors and old input will be flashed to the session otherwise they will be displayed with the
appropriate template.

### `show_form_error_aliases($errors = '', $aliases = [], $type = 'general')`

| Parameter       | Type     | Description                                                                                   |
| --------------- | -------- | --------------------------------------------------------------------------------------------- |
| \$errors        | `Mixed`  | Array of error messages or instance of \ExpressionEngine\Service\Validation\Result            |
| \$aliases       | `Array`  | Array of aliases to use, i.e. ['input_id_1' => ['field' => 'input_name', 'label' => 'Input']] |
| \$type          | `String` | Type of error. Defaults to `general`, can also be `submission` or `off`                       |
| Returns         | `Void`   | void                                                                                          |

This function builds upon `show_form_error()` with the additional ability to provide aliases for input names so
that variable names used in inline error handling can be more meaningful i.e. `field_name` instead of `field_id_1`.