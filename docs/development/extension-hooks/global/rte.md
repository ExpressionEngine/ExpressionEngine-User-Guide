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

# RTE Fieldtype Extension Hooks

## `rte_before_display($field, $data)`

| Parameter      | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| \$field     | `Object`    | Field instance                                 |
| \$data      | `String` | Field data                 |

Allows modification of field data before the field is being displayed in CP or Channel Form.

How it's called:

    $data = ee()->extensions->call('rte_before_display', $this, $data);

## `rte_before_save($field, $data)`

| Parameter      | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| \$field     | `Object`    | Field instance                                 |
| \$data      | `String` | Field data                 |

Allows modification of field data before it is saved.

How it's called:

    $data = ee()->extensions->call('rte_before_save', $this, $data);

## `rte_before_replace($field, $data)`

| Parameter      | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| \$field     | `Object`    | Field instance                                 |
| \$data      | `String` | Field data                 |

Allows modification of field data before it is being displayed using template tag and before any internal replacements are made (such as parsing the URLs and file upload directories)

How it's called:

    $data = ee()->extensions->call('rte_before_replace', $this, $data);

## `rte_before_replace_end($field, $data)`

| Parameter      | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| \$field     | `Object`    | Field instance                                 |
| \$data      | `String` | Field data                 |

Allows modification of field data before it is being displayed using template tag after internal replacements are made.

How it's called:

    $data = ee()->extensions->call('rte_before_replace_end', $this, $data);
