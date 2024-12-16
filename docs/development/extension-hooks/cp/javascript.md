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

# Javascript Controller Extension Hooks

## `cp_js_end()`

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| Returns   | `String` | Javascript to add to the end of the control panel |

Allows you add javascript to every Control Panel page.

How it's called:

    $str = $this->extensions->call('cp_js_end');
