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

# CP/URL Service

[TOC]

## Simple Example

Building URLs in the Control Panel is a common, but exacting task. We have a CP/URL Service to make building these URLs simple. For example:

    $url = ee('CP/URL', 'publish/create/1');

The service automatically takes care of appending the session ID when it is required. For more complex URLs we also provide means of adding arbitrary query string variables using the `make` method:

    $url = ee('CP/URL')->make('publish/edit', array('filter_by_channel' => 1));

Or:

    $url = ee('CP/URL', 'publish/edit')
      ->setQueryStringVariable('filter_by_channel', 1);

## When to use `compile()`

The CP/URL object has a magic `__toString()` method that compiles the object into a string when the object is treated as a string (see: PHP's documentation on the magic [\_\_toString() method](https://php.net/manual/en/language.oop5.magic.php#object.tostring) for more information). The `compile()` method exists for those occasions when the object is treated as an object but you need a string instead. As per [PHP's documentation on arrays](https://php.net/manual/en/language.types.array.php): "Arrays and objects can not be used as keys. Doing so will result in a warning: _Illegal offset type._" You will also want to compile the object when you want to JSON encode the URL otherwise you will get a JSON object instead of a string.

For example:

    $breadcrumb = array(
      ee('CP/URL', 'addons/settings/fortune_cookie')->compile() => lang('fortune_cookie_management')
    );

    ee()->javascript->set_global(array(
      'fortune_cookie.autosave.URL' => ee('CP/URL', 'addons/settings/fortune_cookie/autosave/')->compile()
    ));

## CP/URL Service Methods

**class `ExpressionEngine\Library\CP\URLFactory`**

[TOC=3]

### `make($path, $qs = array(), $cp_url = '', $session_id = NULL)`

Makes a URL object.

| Parameter    | Type          | Description                                                                   |
| ------------ | ------------- | ----------------------------------------------------------------------------- |
| \$path       | `String`      | The path of the url (ie. 'publish/edit/2')                                    |
| \$qs         | `Array`       | An associative array of query string variables to append to the rendered URL. |
| \$cp_url     | `String`      | The base URL to which all else will be appended (ie. 'admin.php')             |
| \$session_id | `String|NULL` | A session ID to append to the rendered URL                                    |
| Returns      | `URL`         | A URL object                                                                  |

### `makeFromString($url)`

Makes a URL object from a string.

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$url     | `String` | The URL to be parsed into a URL object |
| Returns   | `URL`    | A URL object                           |

### `getCurrentUrl()`

Makes a URL object representing the requested URL.

| Parameter | Type  | Description  |
| --------- | ----- | ------------ |
| Returns   | `URL` | A URL object |

### `decodeUrl($url)`

Decodes a base64 encoded, serialized URL object.

| Parameter | Type  | Description  |
| --------- | ----- | ------------ |
| Returns   | `URL` | A URL object |

## CP/URL Object Methods

**class `ExpressionEngine\Library\CP\URL`**

[TOC=3]

### `setQueryStringVariable($key, $value)`

Sets a key and value which will become the Query String of the request

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$key     | `String` | The name of the query string variable  |
| \$value   | `String` | The value of the query string variable |
| Returns   | `URL`    | \$this                                 |

### `addQueryStringVariables($values)`

Sets a values in bulk which will become the Query String of the request

| Parameter | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| \$values  | `Array` | An associative array of keys and values |
| Returns   | `URL`   | \$this                                  |

### `compile()`

Compiles and returns the URL as a string. Typically this is used when you need to use a URL as an array key, or want to json_encode() a URL.

| Parameter | Type      | Description |
| --------- | --------- | ----------- |
| Returns   | `The URL` | string      |

### `__toString()`

When accessed as a string simply compile the URL and return that.

| Parameter | Type      | Description |
| --------- | --------- | ----------- |
| Returns   | `The URL` | string      |
