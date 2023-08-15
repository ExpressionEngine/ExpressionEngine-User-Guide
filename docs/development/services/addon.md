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

# Addon Service

[TOC]

## Simple Example

Read-only access to the data in an `addon.setup.php` file is made available via the object returned from a `ee('Addon')->get($addon_name)` call. The returned object has a `get($key)` method to retrieve data. For example:

    $info = ee('Addon')->get('hello_world');
    echo $info->get('description');

## Addon Service Methods

**class `ExpressionEngine\Service\Addon\Factory`**

[TOC=3]

### `get($name)`

Get an add-on object.

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| \$name    | `String` | The short name of the add-on |
| Returns   | `Addon`  | An Addon                     |

### `all()`

Get all add-ons.

| Parameter | Type    | Description               |
| --------- | ------- | ------------------------- |
| Returns   | `Array` | An array of Addon objects |

### `installed($name)`

Get all the installed add-ons.

| Parameter | Type    | Description               |
| --------- | ------- | ------------------------- |
| Returns   | `Array` | An array of Addon objects |

## Addon Object Methods

**class `ExpressionEngine\Service\Addon\Addon`**

[TOC=3]

### `isInstalled()`

Is this add-on installed?

| Parameter | Type      | Description                 |
| --------- | --------- | --------------------------- |
| Returns   | `Boolean` | TRUE if it is, FALSE if not |

### `hasUpdate()`

Does this add-on have an update available?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `getInstalledVersion()`

Get the installed version

| Parameter | Type    | Description                               |
| --------- | ------- | ----------------------------------------- |
| Returns   | `Mixed` | NULL if not installed or a version string |

### `getFrontendClass()`

Get the plugin or module class

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| Returns   | `String` | The fqcn or \$class |

### `getModuleClass()`

Get the module class

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| Returns   | `String` | The fqcn or \$class |

### `getPluginClass()`

Get the plugin class

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| Returns   | `String` | The fqcn or \$class |

### `getInstallerClass()`

Get the `*_upd` class

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| Returns   | `String` | The fqcn or \$class |

### `getControlPanelClass()`

Get the `*_mcp` class

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| Returns   | `String` | The fqcn or \$class |

### `getExtensionClass()`

Get the extension class

| Parameter | Type     | Description         |
| --------- | -------- | ------------------- |
| Returns   | `String` | The fqcn or \$class |

### `hasManual()`

Does this add-on have a `README.md` file?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `hasFrontend()`

Does this add-on have module or plugin?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `hasInstaller()`

Does this add-on have a `upd.` file?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `hasControlPanel()`

Does this add-on have a `mcp.` file?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `hasModule()`

Does this add-on have a `mod.` file?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `hasPlugin()`

Does this add-on have a `pi.` file?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `hasExtension()`

Does this add-on have a `ext.` file?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `hasFieldtype()`

Does this add-on have a `ft.` file?

| Parameter | Type      | Description                   |
| --------- | --------- | ----------------------------- |
| Returns   | `Boolean` | TRUE if it does, FALSE if not |

### `getFieldtypeClasses()`

Gets an array of the filedtype classes

| Parameter | Type    | Description         |
| --------- | ------- | ------------------- |
| Returns   | `Array` | An array of classes |

### `getFieldtypeNames()`

Get an associative array of names of each fieldtype. Maps the fieldtype's shortname to it's display name. The provider file is first checked for the display name in the _fieldtypes_ key, falling back on the _getName()_ method.

| Parameter | Type    | Description                                                           |
| --------- | ------- | --------------------------------------------------------------------- |
| Returns   | `Array` | An associative array of shortname to display name for each fieldtype. |

### `getProvider()`

Get the add-on Provider

| Parameter | Type                                      | Description         |
| --------- | ----------------------------------------- | ------------------- |
| Returns   | `ExpressionEngine\Core\Provider` | The add-on provider |

### `checkCachedLicenseResponse()`

If ExpressionEngine License Validation is enabled for the add-on, this will return the status of the license. You can enable License Validation in the add-on management section of your vendor account. Please note, by enabling license validation through ExpressionEngine.com, you agree that you will not disable any functionality of a live site.

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| Returns   | `String`  |  Possible license statuses: (valid, invalid, na, trial, expired)  |
