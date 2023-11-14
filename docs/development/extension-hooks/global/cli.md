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

# CLI Extension Hooks

### `cli_boot($cli, $commandClassName, $commandObject)`

| Parameter          | Type     | Description                                                              |
| ------------------ | -------- | ------------------------------------------------------------------------ |
| \$cli              | `Object` | Instance of CLI currently running                                        |
| Returns            | `Void`   |                                                                          |

Run tasks on every CLI request. Allows running the code before certain CLI command.

How it's called:

    $command = ee()->extensions->call('cli_boot', $this);
    if (ee()->extensions->end_script === true) {
        $this->complete('');
    }

### `cli_before_handle($cli, $command, $commandClass)`

| Parameter      | Type     | Description                                                              |
| -------------- | -------- | ------------------------------------------------------------------------ |
| \$cli          | `Object` | Instance of CLI currently running                                        |
| \$commandClass | `String` | Class name of command to be executed                                     |
| \$command      | `Object` | Instance of command class to be executed                                 |
| Returns        | `Object` | Modified instance of `$command`                                          |

Run tasks right before CLI command is excuted. Allows modification of command class instance.

How it's called:

    $command = ee()->extensions->call('cli_before_handle', $this, $command, $commandClass);
    if (ee()->extensions->end_script === true) {
        $this->complete('');
    }
