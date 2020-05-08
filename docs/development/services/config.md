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

# Config Service

[TOC]

## Simple Example

This service will read items from a config file. By default all add-ons have a config directory located at `./config/` relative to their `addon.setup.php` file. To fetch items from your config simply do:

    ee('Config')->get('my_addon:my_config.my_item');

NOTE: **Note:** This does not replace `ee()->config`

## Config Service Methods

**class `EllisLab\ExpressionEngine\Service\Config\Factory`**

[TOC=3]

### `getDirectory($path)`

Get a config directory

| Parameter | Type        | Description               |
| --------- | ----------- | ------------------------- |
| \$path    | `String`    | The path to the directory |
| Returns   | `Directory` | The directory             |

### `getFile($name = 'config')`

Get a config file

| Parameter | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| \$name    | `String` | Config file name, optionally with a provider prefix |
| Returns   | `File`   | The config file                                     |

### `get($item, $default = NULL)`

Get a config item

| Parameter | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| \$name    | `String` | Config item name, optionally with a provider prefix |
| \$default | `Mixed`  | The value to return if \$path can not be found      |
| Returns   | `Mixed`  | The config item, or `$default` if it doesn't exist  |

## Directory Object Methods

**class `EllisLab\ExpressionEngine\Service\Config\Directory`**

[TOC=3]

### `get($item, $default = NULL)`

Get a config item from this directory

| Parameter | Type    | Description                                        |
| --------- | ------- | -------------------------------------------------- |
| \$default | `Mixed` | The value to return if \$path can not be found     |
| Returns   | `Mixed` | The config item, or `$default` if it doesn't exist |

### `hasFile($filename)`

Check if this directory contains the given config file

| Parameter | Type      | Description                           |
| --------- | --------- | ------------------------------------- |
| Returns   | `Boolean` | TRUE if it has the file, FALSE if not |

### `getFile($filename = 'config')`

Returns a ConfigFile class representing the config file

| Parameter  | Type     | Description       |
| ---------- | -------- | ----------------- |
| \$filename | `String` | Name of the file  |
| Returns    | `File`   | ConfigFile object |

## File Objet Methods

**class `EllisLab\ExpressionEngine\Service\Config\File`**

[TOC=3]

### `get($path, $default = NULL)`

Get an item from the config, you can use "item.subitem.subsubitem" to drill down in the config

| Parameter | Type     | Description                                                    |
| --------- | -------- | -------------------------------------------------------------- |
| \$path    | `String` | The config item to get                                         |
| \$default | `Mixed`  | The value to return if \$path can not be found                 |
| Returns   | `Mixed`  | The value found for `$path`, or `$default` if it doesn't exist |

### `has($path)`

Check if the file has a given item

| Parameter | Type      | Description                           |
| --------- | --------- | ------------------------------------- |
| Returns   | `Boolean` | TRUE if it has the item, FALSE if not |

### `getBoolean($path, $default = FALSE)`

Get a config item as a boolean

This is aware of some of EE's conventions, so it will cast strings y and n to the correct boolean.

| Parameter | Type      | Description            |
| --------- | --------- | ---------------------- |
| \$path    | `String`  | The config item to get |
| \$default | `Bool`    | The default value      |
| Returns   | `Boolean` | The value cast to bool |

### `set($path, $value)`

Set an item in the config. You can use 'item.subitem.subsubitem' to drill down in the config.

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| \$path    | `String` | The config item to set |
| \$value   | `Mixed`  | The value to set       |
| Returns   | `Void`   |                        |
