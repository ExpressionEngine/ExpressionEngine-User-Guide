<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2023, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Cookie Registry Service

[TOC]

For the cookies set in ExpressionEngine, site owners can set the cookie lifetime, title and description in [Cookie Settings](control-panel/settings/cookie-settings.md).

`CookieRegistry` is the underlying service that makes saving and using those settings possible.

NOTE: Normally, the add-ons that have their cookies properly [registered](development/addon-setup-php-file.html#cookies) do not need to call this service directly.

## Cookie Registry Constants

There are 4 different types of cookies that can be registered, and this class is defining a constant for each of those.

    // Necessary cookies (0)
    ee('CookieRegistry)::NECESSARY;

    //Functionality cookies (1)
    ee('CookieRegistry)::FUNCTIONALITY;

    // Performance cookies (2)
    ee('CookieRegistry)::PERFORMANCE;

    // Targeting cookies (4)
    ee('CookieRegistry)::TARGETING;

## Cookie Registry Methods

**class `ExpressionEngine\Service\Consent\CookieRegistry`**

### `registerNecessary($name)`

Register a cookie as Necessary

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |

### `registerFunctionality($name)`

Register a cookie as Functionality

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |


### `registerPerformance($name)`

Register a cookie as Performance

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |


### `registerTargeting($name)`

Register a cookie as Targeting

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |


### `isNecessary($name)`

Check whether cookie is Necessary. Returns `true` or `false`

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |

### `isFunctionality($name)`

Check whether cookie is Functionality. Returns `true` or `false`

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |

### `isPerformance($name)`

Check whether cookie is Performance. Returns `true` or `false`

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |

### `isTargeting($name)`

Check whether cookie is Targeting. Returns `true` or `false`

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |

### `isRegistered($name)`

Check whether or not the cookie is in the registry. Returns `true` or `false`

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |

### `getType($name)`

Get Cookie Type. Returns type int (from the list of constants) of registered cookie, `false` if cookie is not registered

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |

### `loadCookiesSettings()`

Load settings of all cookies into memory

### `registerCookieSettings()`

Register settings for the given cookie into memory

| Parameter     | Type             | Description                                  |
| ------------- | ---------------- | -------------------------------------------- |
| \$cookie      | `CookieSetting`  | Cookie object instance                       |


### `getCookieSettings($name)`

Get lifetime for cookie to be set. Returns cookie lifetime in seconds, or `null`` if value provided in code should be used

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$name        | `String`  | Name of the cookie                                    |
