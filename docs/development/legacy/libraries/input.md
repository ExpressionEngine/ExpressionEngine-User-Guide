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

# Input Class

[TOC]

## Calling the Input Class

**class `Input`**

ExpressionEngine uses the Input class for two main purposes:

1.  To provide some helper methods for fetching input data and pre-processing it.
2.  To pre-process global input data for security.

This class is initialized automatically.

## Fetching a Superglobal value

You are not required to use this class to call the incoming data from the superglobal arrays, it will still be available through the superglobals themselves. However, the input class does offer some benefits.

All of the superglobal methods allow the specification of an optional second parameter that lets you run the data through the [XSS filter](security). It's enabled by setting the second parameter to `TRUE` (boolean).

Lastly, the superglobal methods will check to see if the item is set and return `FALSE` (boolean) if not. This lets you conveniently use data without testing whether an item exists first. In other words, normally you might do something like this:

    if ( ! isset($_POST['something']))
    {
        $something = FALSE;
    }
    else
    {
        $something = $_POST['something'];
    }

With the built-in methods you can simply do this:

    $something = ee()->input->post('something');

To automatically run the returned data through the `Security::xss_clean` method, simply specify the second parameter is `TRUE`:

    $something = ee()->input->post('something', TRUE);

The available superglobal methods are:

### `post($index[, $xss_clean = FALSE])`

| Parameter   | Type      | Description                                                          |
| ----------- | --------- | -------------------------------------------------------------------- |
| \$index     | `String`  | Name of the input in the `$_POST` array                              |
| \$xss_clean | `Boolean` | If set to `TRUE` the value will be run through `Security::xss_clean` |
| Returns     | `String`  | Value stored in `$_POST`                                             |

The first parameter will contain the name of the `POST` item you are looking for:

    ee()->input->post('some_data');

### `get($index[, $xss_clean = FALSE])`

| Parameter   | Type      | Description                                                          |
| ----------- | --------- | -------------------------------------------------------------------- |
| \$index     | `String`  | Name of the input in the `$_GET` array                               |
| \$xss_clean | `Boolean` | If set to `TRUE` the value will be run through `Security::xss_clean` |
| Returns     | `String`  | Value stored in `$_GET`                                              |

This method is identical to the post method, only it fetches get data:

    ee()->input->get('some_data');

### `get_post($index[, $xss_clean = FALSE])`

| Parameter   | Type      | Description                                                          |
| ----------- | --------- | -------------------------------------------------------------------- |
| \$index     | `String`  | Name of the input in the `$_POST` or `$_GET` array                   |
| \$xss_clean | `Boolean` | If set to `TRUE` the value will be run through `Security::xss_clean` |
| Returns     | `String`  | Value stored in `$_POST` or `$_GET`                                  |

This method will search through both the post and get streams for data, looking first in post, and then in get:

    ee()->input->get_post('some_data');

### `cookie($index[, $xss_clean = FALSE])`

| Parameter   | Type      | Description                                                          |
| ----------- | --------- | -------------------------------------------------------------------- |
| \$index     | `String`  | Name of the input in the `$_COOKIE` array                            |
| \$xss_clean | `Boolean` | If set to `TRUE` the value will be run through `Security::xss_clean` |
| Returns     | `String`  | Value stored in `$_COOKIE`                                           |

This method is identical to the post method, only it fetches cookie data:

    ee()->input->cookie('some_data');

### `server($index[, $xss_clean = FALSE])`

| Parameter   | Type      | Description                                                          |
| ----------- | --------- | -------------------------------------------------------------------- |
| \$index     | `String`  | Name of the input in the `$_SERVER` array                            |
| \$xss_clean | `Boolean` | If set to `TRUE` the value will be run through `Security::xss_clean` |
| Returns     | `String`  | Value stored in `$_SERVER`                                           |

This method is identical to the above method, only it fetches server data:

    ee()->input->server('some_data');

### `ip_address()`

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| Returns   | `String` | IP address for the current user |

Returns the IP address for the current user. If the IP address is not valid, the method will return an IP of: 0.0.0.0:

    echo ee()->input->ip_address();

### `valid_ip($ip[, $which = ''])`

| Parameter | Type      | Description                                                            |
| --------- | --------- | ---------------------------------------------------------------------- |
| \$ip      | `String`  | IP address to validate                                                 |
| \$which   | `String`  | Specify `'ipv4'` or `'ipv6'` to validate a specific type of IP address |
| Returns   | `Boolean` | `TRUE` if valid, `FALSE` otherwise                                     |

Takes an IP address as input and returns `TRUE` or `FALSE` (boolean) if it is valid or not.

NOTE: **Note:** The `Input::ip_address` method above validates the IP automatically.

    if ( ! $this->input->valid_ip($ip))
    {
        echo 'Not Valid';
    }
    else
    {
        echo 'Valid';
    }

### `user_agent()`

| Parameter | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| Returns   | `Mixed` | The user agent, otherwise `FALSE` |

Returns the user agent (web browser) being used by the current user:

    echo ee()->input->user_agent();

## Cleaning Superglobals

The input class is loaded by EE core early in processing. It automatically does the following:

- Destroys all global variables in the event `register_globals` is turned on.
- Filters the `POST`/`GET`/`COOKIE` array keys, permitting only alpha-numeric (and a few other) characters.
- Standardizes newline characters to `\\n`

## Setting and Deleting Cookies

The input library contains two methods for manipulating cookies. One for setting them and one for deleting them before their expiration.

### `set_cookie([$name = ''[, $value = ''[, $expire = '']]])`

| Parameter | Type      | Description                                                                                                     |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| \$name    | `String`  | Name of the cookie                                                                                              |
| \$value   | `String`  | Value of the cookie                                                                                             |
| \$expire  | `Integer` | When the cookie should expire, if left blank the time is set to the past and the cookie will expire immediately |
| Returns   | `Void`    |                                                                                                                 |

Sets cookie based on name and value. The advantage of using this function over the standard PHP function is EE will automatically add the cookie domain, cookie prefix, and cookie path as specified in the preferences. Those are helpful for making these cookies unique to EE and not interfering with other cookies set for your site by other software.

### `delete_cookie($name)`

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| \$name    | `String` | Name of the cookie |
| Returns   | `Void`   |                    |

Cleanly delete a cookie. The advantage of using this function over the standard PHP function is EE will automatically add the cookie domain, cookie prefix, and cookie path as specified in the preferences.
