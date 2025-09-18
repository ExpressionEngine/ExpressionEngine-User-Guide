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

# Members Controller Extension Hooks

[TOC=2]

## `cp_members_member_create_start()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Perform additional tasks prior to / take over the control panel member creation routine.

How it's called:

    $this->extensions->call('cp_members_member_create_start');
    if ($this->extensions->end_script === TRUE) return;

## `cp_members_member_create($member_id, $data)`

| Parameter   | Type    | Description       |
| ----------- | ------- | ----------------- |
| \$member_id | `Int`   | New member's ID   |
| \$data      | `Array` | New member's data |
| Returns     | `Void`  |                   |

Additional processing after a member is created via the control panel. Executes after member is created, but before stats are recounted.

How it's called:

    $this->extensions->call('cp_members_member_create', $member_id, $data);
    if ($this->extensions->end_script === TRUE) return;

## `cp_members_member_delete_end($member_ids)`

| Parameter    | Type    | Description            |
| ------------ | ------- | ---------------------- |
| \$member_ids | `Array` | IDs of members deleted |
| Returns      | `Void`  |                        |

Allows additional processing when a member is deleted from the control panel.

How it's called:

    $this->extensions->call('cp_members_member_delete_end', $member_ids);
    if ($this->extensions->end_script === TRUE) return;

## `cp_members_validate_members()`

| Parameter | Type    | Description                    |
| --------- | ------- | ------------------------------ |
| \$ids     | `Array` | IDs of members being validated |
| Returns   | `Void`  |                                |

Additional processing after pending members are validated via the Control Panel.

How it's called:

    $this->extensions->call('cp_members_validate_members', $ids);
    if ($this->extensions->end_script === TRUE) return;
