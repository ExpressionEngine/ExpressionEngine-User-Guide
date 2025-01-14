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

# Member Module Settings Extension Hooks

## `member_edit_preferences($element)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$element | `String` | Preference form template                       |
| Returns   | `String` | Modified preference form template (`$element`) |

Allows adding of preferences to user side preferences form by modifying the preference form template.

How it's called:

    $element = ee()->extensions->call('member_edit_preferences', $element);

## `member_update_preferences($data)`

| Parameter | Type    | Description                      |
| --------- | ------- | -------------------------------- |
| \$data    | `Array` | Array of data from standard form |
| Returns   | `Void`  |                                  |

Allows updating of added preferences via user side preferences form.

How it's called:

    ee()->extensions->call('member_update_preferences', $data);
    if (ee()->extensions->end_script === TRUE) return;
