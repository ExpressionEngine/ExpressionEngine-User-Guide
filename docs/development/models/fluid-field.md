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
#### `id` Key
#### `fluid_field_id`
#### `entry_id`
#### `field_id`
#### `field_data_id`
#### `order`


## Relationships
#### `ChannelEntry`
#### `ChannelFields`
#### `FieldField`


## Methods
### `getSessionCacheKey`
### `setFieldData`
### `fetchFieldData`
### `getFieldData`
### `getField`


## Events
`afterDelete'`


## Examples

#### Get a Fluid Field by the Field ID
```
$fluid = ee('Model')->get('fluid_field:FluidField')->filter('fluid_field_id', 5)->all();
```

#### Add a Text Field to a Fluid Field
A Fluid Field is assigned to a Channel, and has field options assigned.
```
// Create a Fluid object.
$field = ee('Model')->make('fluid_field:FluidField');

// Assign required values.
$field->entry_id        = 19; // The Entry we want to affect.
$field->fluid_field_id  = 15; // The Fluid Field ID itself.
$field->field_id        = 9; // The Text Field ID to add.
$field->field_data_id   = 4; // The row of data in the text field to use.
// $field->order  Omitting will put the new field first.

// Save the changes.
$field->save();

```
