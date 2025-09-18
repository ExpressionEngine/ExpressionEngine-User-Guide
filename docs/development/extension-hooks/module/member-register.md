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

# Member Module Registration Extension Hooks

[TOC=2]

## `member_member_register($data, $member_id)`

| Parameter   | Type    | Description                                                          |
| ----------- | ------- | -------------------------------------------------------------------- |
| \$data      | `Array` | Array of data about the new member like username, email, screen_name |
| \$member_id | `Int`   | The new member's id                                                  |
| Returns     | `Void`  |                                                                      |

Additional processing when a member is registering through the user side of ExpressionEngine.

How it's called:

    ee()->extensions->call('member_member_register', $data, $member_id);
    if (ee()->extensions->end_script === TRUE) return;

## `member_member_register_errors($this)`

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| \$this    | `Object` | The current Member_register object |
| Returns   | `Void`   |                                    |

Add additional error checking to the member registration form.

How it's called:

    ee()->extensions->call('member_member_register_errors', $this);
    if (ee()->extensions->end_script === TRUE) return;

## `member_member_register_start()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Additional processing prior to/take control of member registration routine.

How it's called:

    ee()->extensions->call('member_member_register_start');
    if (ee()->extensions->end_script === TRUE) return;

## `member_register_validate_members($member_id)`

| Parameter   | Type   | Description          |
| ----------- | ------ | -------------------- |
| \$member_id | `Int`  | the ID of the member |
| Returns     | `Void` |                      |

Additional processing when member(s) are self validated

How it's called:

    ee()->extensions->call('member_register_validate_members', $member_id);
    if (ee()->extensions->end_script === TRUE) return;
