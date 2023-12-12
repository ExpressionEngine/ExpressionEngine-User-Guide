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

# FluidField Model Extension Hooks

[TOC=3]

### `fluid_field_get_all_data($data, $fluid_field_id, $fluid_field)`

| Parameter        | Type         | Description                                                               |
| ---------------- | ------------ | ------------------------------------------------------------------------- |
| \$data       	   | `FieldData`  | Instance of ExpressionEngine\Model\Content\FieldData for fluid field      |
| \$fluid_field_id | `Int`        | The ID of Fluid field being fetched                                       |
| \$fluid_field    | `FluidField` | Current instance of [FluidField model](development/models/fluid-field.md) |
| Returns          | `FieldData`  | Current instance of ExpressionEngine\Model\Content\FieldData              |

Called after field data has been fetched and before the fluid field field object is returned.

How it's called:

    ee()->extensions->call('fluid_field_get_all_data', $data, $fluid_field_id, $fluid_field);

### `fluid_field_get_field_data($data, $fluid_field_id, $field_data_id, $fluid_field)`

| Parameter        | Type         | Description                                                               |
| ---------------- | ------------ | ------------------------------------------------------------------------- |
| \$data       	   | `FieldData`  | Instance of ExpressionEngine\Model\Content\FieldData for fluid field      |
| \$fluid_field_id | `Int`        | The ID of Fluid field being fetched                                       |
| \$field_data_id  | `Int`        | The ID of row of field data racord                                        |
| \$fluid_field    | `FluidField` | Current instance of [FluidField model](development/models/fluid-field.md) |
| Returns          | `Array`      | Data for the field in Fluid that's currently fetched                     |

Called before field data is fetched. When hook is present, the field data will not be fetched from the database.

How it's called:

    ee()->extensions->call('fluid_field_get_all_data', $data, $fluid_field_id, $field_data_id, $fluid_field);

### `fluid_field_add_field($field_table_name, $values, $fluid_field)`

| Parameter          | Type         | Description                   |
| ------------------ | ------------ | ----------------------------- |
| \$field_table_name | `String`     | Name of Fluid field table     |
| \$values           | `Array`      | The current field values      |
| \$fluid_field      | `FluidField` | Current instance of [FluidField model](development/models/fluid-field.md) |
| Returns            | `Array`      | Adjusted field values         |

Called before the fluid field is inserted. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('fluid_field_add_field', $field_table_name, $values, $fluid_field);

### `fluid_field_after_add_field($fluid_field, $field_table_name, $values, $id)`

| Parameter          | Type         | Description                   |
| ------------------ | ------------ | ----------------------------- |
| \$fluid_field      | `FluidField` | Current instance of [FluidField model](development/models/fluid-field.md) |
| \$field_table_name | `String`     | Name of table being changed                                               |
| \$values           | `Array`      | The current field values                                                  |
| \$id               | `Int`        | The ID of field that was added                                            |
| Returns            | `Void`       | Does not return any data         |

Called after the fluid field is inserted.

How it's called:

    ee()->extensions->call('fluid_field_after_add_field', $fluid_field, $field_table_name, $values, $id);

### `fluid_field_update_field($fluid_field, $field_table_name, $values)`

| Parameter          | Type         | Description                                                               |
| ------------------ | ------------ | ------------------------------------------------------------------------- |
| \$fluid_field      | `FluidField` | Current instance of [FluidField model](development/models/fluid-field.md) |
| \$field_table_name | `String`     | Name of table being changed                                               |
| \$values           | `Array`      | The current field values                                                  |
| Returns            | `Array`      | Adjusted field values                                                     |

Called before the fluid field is updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('fluid_field_add_field', $field_table_name, $values);

### `fluid_field_after_update_field($fluid_field, $field_table_name, $values)`

| Parameter          | Type         | Description                                                               |
| ------------------ | ------------ | ------------------------------------------------------------------------- |
| \$fluid_field      | `FluidField` | Current instance of [FluidField model](development/models/fluid-field.md) |
| \$field_table_name | `String`     | Name of table being changed                                               |
| \$values           | `Array`      | The current field values                                                  |
| Returns            | `Void`       | Does not return any data                                                  |

Called after the fluid field has been updated. 

How it's called:

    ee()->extensions->call('fluid_field_add_field', $fluid_field, $field_table_name, $values);

### `fluid_field_remove_field($fluid_field)`

| Parameter          | Type         | Description                                                               |
| ------------------ | ------------ | ------------------------------------------------------------------------- |
| \$fluid_field      | `FluidField` | Current instance of [FluidField model](development/models/fluid-field.md) |
| Returns            | `null`       |                                                                           |

Called before the fluid field is deleted. Field will be deleted after hook is called

How it's called:

    ee()->extensions->call('fluid_field_remove_field', $fluid_field);
