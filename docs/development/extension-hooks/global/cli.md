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
| \$commandClassName | `String` | Class name of command to be executed                                     |
| \$commandObject    | `Object` | Instance of command class to be executed                                 |
| Returns            | `Object` | Modified instance of `$commandObject`                                    |

Run tasks on every CLI request. Allows running the code before certain CLI command is run as well as modification of command class instance.

How it's called:

    $command = ee()->extensions->call('cli_boot', $this, $commandClass, $command);
    if (ee()->extensions->end_script === true) {
        $this->complete('');
    }

### `core_template_route($uri_string)`

| Parameter    | Type     | Description                                                              |
| ------------ | -------- | ------------------------------------------------------------------------ |
| \$uri_string | `String` | Current URI string                                                       |
| Returns      | `Array`  | Array containing the name of the template group and template (see below) |

Reassign the template group and template loaded for parsing.

How it's called:

    $edata = ee()->extensions->call('core_template_route', ee()->uri->uri_string);
    if (is_array($edata) && count($edata) == 2)
    {
        list($template_group, $template) = $edata;
    }

Example of array to return:

    array(
        'template_group', // Template group name
        'template'        // Template name
    );
