---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2022, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Addon Extension Model

**class `ExpressionEngine\Model\Addon\Extension`**

[TOC]

## Properties

| Name               | Validation | Type        | Description |
| ------------------ | ---------- |------------ | ----------- |
| `extension_id` key |            |             | |
| `class`            |            |             | Name of the addon's class |
| `method`           |            |             | Name of the method executed |
| `hook`             |            |             | The EE hook name that triggers the extension. |
| `settings`         |            |             | Serialized settings for the extension. |
| `priority`         |            |             | |
| `version`          |            |             | Extension version. |
| `enabled`          |            | boolString  | Enable or disable the extension.  Can be toggled in the control panel. |

## Relationships

This model has no relationships.

## Methods

### `enable()`

Marks the extension as enabled.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | NULL | |

### `disable()`

Marks the extension as disabled.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | NULL | |

## Events

This model has no events.

## Examples

### Change the name of the called method

```php
$method = ee('Model')
            ->get('Extension')
            ->filter('class', 'My_extension_class_ext')
            ->first();

$method->method = 'my_new_method_name';

$method->save();
```

### Enable the extension if disabled

```php
$method = ee('Model')
            ->get('Extension')
            ->filter('class', 'My_extension_class_ext')
            ->first();

if ($method->enabled !== 'y') {
    $method->enable();
}
```
