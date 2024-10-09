---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Fluid Field Model

**class `ExpressionEngine\Addons\FluidField\Model\FluidField`**

[TOC]

## Properties

- `id` Key
- `fluid_field_id`
- `entry_id`
- `field_id`
- `field_data_id`
- `order`

## Relationships

- `ChannelEntry`
- `ChannelFields`
- `FieldField`

## Methods

- `getSessionCacheKey`
- `setFieldData`
- `fetchFieldData`
- `getFieldData`
- `getField`

## Events

- `afterDelete'`

## Examples

### Get a Fluid Field by the Field ID

```php
$fluid_field = ee('Model')
            ->get('fluid_field:FluidField')
            ->filter('entry_id', 4)
            ->filter('fluid_field_id', 5)
            ->order('order')
            ->all();
```

### Add a Text Field to a Fluid Field

A Fluid Field is assigned to a Channel, and has field options assigned.

```php
// Create a Fluid object.
$field = ee('Model')->make('fluid_field:FluidField');

// Assign required values.
$field->entry_id        = 19; // The Entry we want to associate this fluid field with.
$field->fluid_field_id  = 15; // The Fluid Field ID itself.
$field->field_id        = 9; // The Text Field ID to add.
$field->field_data_id   = 4; // The row of data in the text field to use.
$field->order           = 5; // Set the order relative to other fields within the fluid field. Omitting will put the new field first.

// Save the changes.
$field->save();

```
