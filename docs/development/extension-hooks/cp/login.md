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

# Login Controller Extension Hooks

[TOC=2]

## `login_authenticate_start()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Perform additional actions prior to/take over the control panel login routine.

How it's called:

    $this->extensions->call('login_authenticate_start');
    if ($this->extensions->end_script === TRUE) return;

## `cp_member_login($hook_data)`

| Parameter   | Type     | Description                                                                                                      |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| \$hook_data | `Object` | Member object with session ID (`$hook_data->session_id`) and CP permission boolean (`$hook_data->can_access_cp`) |
| Returns     | `Void`   |                                                                                                                  |

Executes after control panel session is instantiated, allows additional processing on control panel logins.

How it's called:

    ee()->extensions->call('cp_member_login', $this->_hook_data());
    if (ee()->extensions->end_script === TRUE) return;

## `cp_member_logout()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Perform additional actions after a user logs out of the control panel.

How it's called:

    $this->extensions->call('cp_member_logout');
    if ($this->extensions->end_script === TRUE) return;

## `cp_member_reset_password()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Perform additional actions after a user resets their password via the control panel.

How it's called:

    $this->extensions->call('cp_member_process_reset_password');
    if ($this->extensions->end_script === TRUE) return;
