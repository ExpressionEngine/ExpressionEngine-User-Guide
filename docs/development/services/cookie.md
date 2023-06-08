<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Cookie Service

[TOC]

The Cookie service provides a convenient way to set and read cryptographically-signed cookies. Setting cryptographically-signed cookies helps ensure the cookies you set are not altered client-side.

TIP: New in version 5.1.2.

## Simple Examples

Set a cookie:

    ee('Cookie')->setSignedCookie('my_cookie_name', $data);

Retrieving cookie data:

    ee('Cookie')->getSignedCookie('my_cookie_name');

## Cookie Methods

**class `ExpressionEngine\Service\Cookie\Cookie`**

### `getSignedCookie($cookie_name, $xss_clean = FALSE)`

Gets cryptographically-signed cookie data by name.

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$cookie_name | `String`  | Cookie name                                           |
| \$xss_clean   | `Boolean` | Clean the data for XSS or not                         |
| returns       | `Mixed`   | Cookie data, or FALSE if cookie not found or verified |

### `setSignedCookie($cookie_name, $cookie_data, $expire = NULL)`

Set cryptographically-signed cookies.

| Parameter     | Type     | Description                  |
| ------------- | -------- | ---------------------------- |
| \$cookie_name | `String` | Cookie name                  |
| \$cookie_data | `String` | Cookie data                  |
| \$expire      | `Int`    | Cookie expiration in seconds |
| returns       | `Void`   |                              |
