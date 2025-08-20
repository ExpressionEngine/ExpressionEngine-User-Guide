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

# Member Module Authorization Extension Hooks

[TOC=2]

## `member_member_login_multi($hook_data)`

| Parameter   | Type     | Description                                                                                                      |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| \$hook_data | `Object` | Member object with session ID (`$hook_data->session_id`) and CP permission boolean (`$hook_data->can_access_cp`) |
| Returns     | `Void`   |                                                                                                                  |

Additional processing when a member is logging into ExpressionEngine via the Multi-Login functionality.

How it's called:

    ee()->extensions->call('member_member_login_multi', $this->_hook_data());
    if (ee()->extensions->end_script === TRUE) return;

## `member_member_login_single($hook_data)`

| Parameter   | Type     | Description                                                                                                      |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| \$hook_data | `Object` | Member object with session ID (`$hook_data->session_id`) and CP permission boolean (`$hook_data->can_access_cp`) |
| Returns     | `Void`   |                                                                                                                  |

Additional processing when a member is logging into ExpressionEngine.

How it's called:

    ee()->extensions->call('member_member_login_single', $this->_hook_data());
    if (ee()->extensions->end_script === TRUE) return;

## `member_member_login_start()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Additional processing prior to / take control of member login routine

How it's called:

    ee()->extensions->call('member_member_login_start');
    if (ee()->extensions->end_script === TRUE) return;

## `member_member_logout()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Perform additional actions after logout.

How it's called:

    $edata = ee()->extensions->call('member_member_logout');
    if (ee()->extensions->end_script === TRUE) return;

## `member_auth_send_reset_token_start($address)`

| Parameter | Type     | Description
| --------- | -------- | ---------------------------------------------
| $address  | `String` | Email address posted from reset password form
| Returns   | `String` | Email address after extension processes it

Additional processing of email address sent via reset password form.  Happens after basic security checks, but before email address check occurs.

How it's called:

    if (ee()->extensions->active_hook('member_auth_send_reset_token_start')) {
        $address = ee()->extensions->call('member_auth_send_reset_token_start', $address);
        if (ee()->extensions->end_script === true) {
            return;
        }
    }

## `member_process_reset_password()`

| Parameter | Type    | Description                                |
| --------- | ------- | ------------------------------------------ |
| \$data    | `Array` | An `Output::show_message()` `$data` array. |
| Returns   | `Void`  |                                            |

Perform additional actions after the user resets their password.

How it's called:

    $data = ee()->extensions->call('member_process_reset_password', $data);
    if (ee()->extensions->end_script === TRUE) return;
