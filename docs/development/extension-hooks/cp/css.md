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

# CSS Controller Extension Hooks

## `cp_css_end()`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| Returns   | `String` | CSS to add to every Control Panel page |

Allows you add custom CSS to every Control Panel page:

    $str = $this->extensions->call('cp_css_end');
