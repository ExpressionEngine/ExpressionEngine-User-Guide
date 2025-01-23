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

# Pagination Library Extension Hooks

[TOC=2]

## `pagination_create($this, $count)`

| Parameter | Type     | Description                                                                                                                     |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| \$this    | `Object` | Currently instantiated object for EE_Pagination class, remember to call this with a reference if you want to modify the object. |
| \$count   | `Int`    | Number of items being paginated                                                                                                 |
| Returns   | `Void`   |                                                                                                                                 |

Rewrite the pagination function in the Pagination library and possible expand the types of pagination available.

How it's called:

    $this->extensions->call('pagination_create', $this, $count);
    if ($this->extensions->end_script === TRUE) return;

## `pagination_fetch_data($this)`

| Parameter | Type     | Description                                                             |
| --------- | -------- | ----------------------------------------------------------------------- |
| \$this    | `Object` | Currently instantiated object for EE_Pagination class, remember to call |
| Returns   | `Void`   |                                                                         |

Works with the 'pagination_create' hook so you can modify rendered `{paginate}` tagdata.

How it's called:

    $this->extensions->call('pagination_fetch_data', $this);
    if ($this->extensions->end_script === TRUE) return;
