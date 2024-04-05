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

### `fluid_field_get_all_data($data, $fluid_field_id)`

| Parameter        | Type         | Description                                                             |
| ---------------- | ------------ | ----------------------------------------------------------------------- |
| \$data       	   | `FluidField` | Current instance of ExpressionEngine\Addons\FluidField\Model\FluidField |
| \$fluid_field_id | `Array`      | The MemberField model object data as an array                           |
| Returns          | `FluidField` | Current instance of ExpressionEngine\Addons\FluidField\Model\FluidField |

Called before the fluid field field object is returned.

How it's called:

    ee()->extensions->call('fluid_field_get_all_data', $data, $fluid_field_id);

TIP: **New in version 6.1.0.**

### `fluid_field_add_field($field_table_name, $values)`

| Parameter          | Type         | Description                   |
| ------------------ | ------------ | ----------------------------- |
| \$field_table_name | `String`     | Name of Fluid field table     |
| \$values           | `Array`      | The current field values      |
| Returns            | `Array`      | Adjusted field values         |

Called before the fluid field is inserted. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('fluid_field_add_field', $field_table_name, $values);

TIP: **New in version 6.1.0.**

### `fluid_field_update_field($fluid_field, $field_table_name, $values)`

| Parameter          | Type         | Description                                                             |
| ------------------ | ------------ | ----------------------------------------------------------------------- |
| \$fluid_field      | `FluidField` | Current instance of ExpressionEngine\Addons\FluidField\Model\FluidField |
| \$field_table_name | `String`     | Name of table being changed                                             |
| \$values           | `Array`      | The current field values                                                |
| Returns            | `Array`      | Adjusted field values                                                   |

Called before the fluid field is updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('fluid_field_update_field', $field_table_name, $values);

TIP: **New in version 6.1.0.**

### `fluid_field_remove_field($fluid_field)`

| Parameter          | Type         | Description                                                             |
| ------------------ | ------------ | ----------------------------------------------------------------------- |
| \$fluid_field      | `FluidField` | Current instance of ExpressionEngine\Addons\FluidField\Model\FluidField |
| Returns            | `null`       |                                                                         |

Called before the fluid field is deleted. Field will be deleted after hook is called

How it's called:

    ee()->extensions->call('fluid_field_remove_field', $fluid_field);

TIP: **New in version 6.1.0.**
