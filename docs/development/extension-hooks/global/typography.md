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

# Typography Library Extension Hooks

## `typography_parse_type_start($str, $this, $prefs)`

| Parameter | Type     | Description                                              |
| --------- | -------- | -------------------------------------------------------- |
| \$str     | `String` | The string currently being parsed                        |
| \$this    | `Object` | The Typography library object                            |
| \$prefs   | `Array`  | Array of preferences sent to `EE_Typography::parse_type` |
| Returns   | `String` | String to be parsed by `EE_Typography::parse_type`       |

Modify string prior to all other typography processing.

How it's called:

    $str = $this->extensions->call('typography_parse_type_start', $str, $this, $prefs);

## `typography_parse_type_end($str, $this, $prefs)`

| Parameter | Type     | Description                                              |
| --------- | -------- | -------------------------------------------------------- |
| \$str     | `String` | The string currently being parsed                        |
| \$this    | `Object` | The Typography library object                            |
| \$prefs   | `Array`  | Array of preferences sent to `EE_Typography::parse_type` |
| Returns   | `String` | String passed out of `EE_Typography::parse_type`         |

Modify string after all other typography processing.

How it's called:

    $str = $this->extensions->call('typography_parse_type_end', $str, $this, $prefs);
