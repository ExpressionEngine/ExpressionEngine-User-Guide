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

# Member Module Extension Hooks

## `member_manager($this)`

| Parameter | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| \$this    | `Object` | The current state of the instantiated Member object |
| Returns   | `Void`   |                                                     |

Seize control over any Member Module user side request

How it's called:

    $edata = ee()->extensions->universal_call('member_manager', $this);
    if (ee()->extensions->end_script === TRUE) return $edata;
