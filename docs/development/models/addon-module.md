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

# Addon Module Model

**class `ExpressionEngine\Model\Addon\Module`**

[TOC]

## Properties

| Name                  | Validation    | Type       | Description |
| --------------------- | ------------- | ---------- | ----------- |
| `module_id`           |               |            | |
| `module_name`         |               |            | Human-readable name of the Module. |
| `module_version`      |               |            | Module's version number. |
| `has_cp_backend`      | enum[y,n]     | boolString | Shows the option to see addon's settings. |
| `has_publish_fields`  | enum[y,n]     | boolString | Whether module provides tab for entry edit page|

## Relationships

- `AssignedRoles`
- `UploadDestination`

## Methods

This model has no additional methods.

## Events

This model has no events.

## Examples

Change a module's name.

```php
$module = ee('Model')
            ->get('Module')
            ->filter('module_name', 'Old Module Name')
            ->first();

$module->module_name = 'My New Module Name';

// Validation would not check the name, so not required.
$module->save();

```
