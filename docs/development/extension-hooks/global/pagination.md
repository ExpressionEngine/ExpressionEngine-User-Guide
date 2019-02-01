---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Pagination Library Extension Hooks

[TOC=3]

### `pagination_create($this, $count)`

| Parameter | Type     | Description                                                                                                                     |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| \$this    | `Object` | Currently instantiated object for EE_Pagination class, remember to call this with a reference if you want to modify the object. |
| \$count   | `Int`    | Number of items being paginated                                                                                                 |
| Returns   | `Void`   |                                                                                                                                 |

Rewrite the pagination function in the Pagination library and possible expand the types of pagination available.

How it's called:

    $this->extensions->call('pagination_create', $this, $count);
    if ($this->extensions->end_script === TRUE) return;

### `channel_module_create_pagination($this, $count)`

WARN: **Deprecated since version 2.8:** Renamed in 2.8. Use `pagination_create()` instead.

### `pagination_fetch_data($this)`

| Parameter | Type     | Description                                                             |
| --------- | -------- | ----------------------------------------------------------------------- |
| \$this    | `Object` | Currently instantiated object for EE_Pagination class, remember to call |
| Returns   | `Void`   |                                                                         |

Works with the 'pagination_create' hook so you can modify rendered `{paginate}` tagdata.

How it's called:

    $this->extensions->call('pagination_fetch_data', $this);
    if ($this->extensions->end_script === TRUE) return;

### `channel_module_fetch_pagination_data($this)`

WARN: **Deprecated since version 2.8:** Renamed in 2.8. Use `pagination_fetch_data()` instead.
