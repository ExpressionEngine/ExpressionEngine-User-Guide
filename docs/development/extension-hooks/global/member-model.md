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

# Legacy Member Model Extension Hooks

[TOC=2]

## `member_create_start($data, $cdata)`

| Parameter | Type    | Description                                                       |
| --------- | ------- | ----------------------------------------------------------------- |
| \$data    | `Array` | Data to be inserted into `exp_members` table                      |
| \$cdata   | `Array` | Optional custom member data                                       |
| Returns   | `Array` | Array containing the `$data` array and `$cdata` array (see below) |

Provides an opportunity for extra code to be executed upon member creation, and also gives the opportunity to modify the member data by altering the arrays of data that we pass to the hook.

How it's called:

    list($data, $cdata) = $this->extensions->call('member_create_start', $data, $cdata);

Example of array to return:

    array($data, $cdata)

## `member_create_end($member_id, $data, $cdata)`

| Parameter   | Type    | Description                                  |
| ----------- | ------- | -------------------------------------------- |
| \$member_id | `Int`   | ID of the member just created                |
| \$data      | `Array` | Data to be inserted into `exp_members` table |
| \$cdata     | `Array` | Optional custom member data                  |
| Returns     | `Void`  |                                              |

Provides an opportunity for extra code to be executed after member creation.

How it's called:

    $this->extensions->call('member_create_end', $member_id, $data, $cdata);

## `member_update_start($member_id, $data)`

| Parameter   | Type    | Description                   |
| ----------- | ------- | ----------------------------- |
| \$member_id | `Int`   | ID of the member to be edited |
| \$data      | `Array` | Data to be updated            |
| Returns     | `Array` | Updated `$data` array         |

Provides an opportunity for extra code to be executed upon member update, and also gives the opportunity to modify the update for member data by altering the array of data that we pass to the hook.

How it's called:

    $data = $this->extensions->call('member_update_start', $member_id, $data);

## `member_update_end($member_id, $data)`

| Parameter   | Type    | Description                   |
| ----------- | ------- | ----------------------------- |
| \$member_id | `Int`   | ID of the member to be edited |
| \$data      | `Array` | Data to be updated            |
| Returns     | `Void`  |                               |

Provides an opportunity for extra code to be executed immediately before the update of the member data and member custom field data.

How it's called:

    $this->extensions->call('member_update_end', $member_id, $data);

## `member_delete($member_ids)`

| Parameter    | Type    | Description                                                |
| ------------ | ------- | ---------------------------------------------------------- |
| \$member_ids | `Array` | Array of member IDs about to be deleted                    |
| Returns      | `Array` | Array of member IDs to delete after adding or removing IDs |

When a member is about to be deleted, this hook gives the chance to run a custom deletion routine and/or stop ExpressionEngine from running its own member deletion routine for certain members.

How it's called:

    $member_ids = $this->extensions->call('member_delete', $member_ids);
