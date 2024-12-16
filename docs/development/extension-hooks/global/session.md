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

# Session Library Extension Hooks

## `sessions_end($this)`

| Parameter | Type     | Description                                                                                                                 |
| --------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| \$this    | `Object` | The current instantiated Session class with all of its variables and functions, use a reference in your functions to modify |
| Returns   | `Void`   |                                                                                                                             |

Modify the user's session/member data, also allows for additional session or login methods (ex: log in to other system).

How it's called:

    $this->extensions->call('sessions_end', $this);
    if ($this->extensions->end_script === TRUE) return;

## `sessions_start($this)`

| Parameter | Type     | Description                                                          |
| --------- | -------- | -------------------------------------------------------------------- |
| \$this    | `Object` | The current instantiated Session class with all of its variables and |
| Returns   | `Void`   |                                                                      |

Reset Session class variables, modify default/guest settings, take over whole session check, etc.

How it's called:

    $this->extensions->call('sessions_start', $this);
    if ($this->extensions->end_script === TRUE) return;
