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

# Output Library Extension Hooks

## `output_show_message($data, $output)`

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| \$data    | `Array`  | Array of data describing the message            |
| \$output  | `String` | HTML rendered from the default message template |
| Returns   | `String` | New rendered output for the message             |

Modify the output of front-end system messages.

How it's called:

    if (ee()->extensions->active_hook('output_show_message') === TRUE)
    {
      $output = ee()->extensions->call('output_show_message', $data, $output);
    }

## template_types

See the Design controller's [template_types](development/extension-hooks/cp/design.md#template_types).
