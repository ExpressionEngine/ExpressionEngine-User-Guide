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

# Input Library Extension Hooks

## `set_cookie_end($data)`

| Parameter | Type    | Description                                                                                                                                  |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| \$data    | `Array` | Array of prepped cookie parameters, which include the following keys: `prefix`, `name`, `value`, `expire`, `path`, `domain`, `secure_cookie`, `samesite` |
| Returns   | `Void`  |                                                                                                                                              |

Take control of setting cookies after cookie parameters have been normalized according to the cookie configuration settings.

How it's called:

    ee()->extensions->call('set_cookie_end', $data);
    if (ee()->extensions->end_script === TRUE) return;
