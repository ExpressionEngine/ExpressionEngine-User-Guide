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

# Member Model Extension Hooks

[TOC=2]

## `before_member_insert($member, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$member  | `Object` | Current Member model object              |
| \$values  | `Array`  | The Member model object data as an array |
| Returns   | `NULL`   | void                                     |

Called before the member object is inserted. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_member_insert', $this, $this->getValues());

## `after_member_insert($member, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$member  | `Object` | Current Member model object              |
| \$values  | `Array`  | The Member model object data as an array |
| Returns   | `NULL`   | void                                     |

Called after the member object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

How it's called:

    ee()->extensions->call('after_member_insert', $this, $this->getValues());

## `before_member_update($member, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| \$member   | `Object` | Current Member model object                      |
| \$values   | `Array`  | The Member model object data as an array         |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called before the member object is updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_member_update', $this, $this->getValues(), $modified);

## `after_member_update($member, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| \$member   | `Object` | Current Member model object                      |
| \$values   | `Array`  | The Member model object data as an array         |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called after the member object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_member_update', $this, $this->getValues(), $modified);

## `before_member_save($member, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$member  | `Object` | Current Member model object              |
| \$values  | `Array`  | The Member model object data as an array |
| Returns   | `NULL`   | void                                     |

Called before the member object is inserted or updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_member_save', $this, $this->getValues());

## `after_member_save($member, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$member  | `Object` | Current Member model object              |
| \$values  | `Array`  | The Member model object data as an array |
| Returns   | `NULL`   | void                                     |

Called after the member object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_member_save', $this, $this->getValues());

## `before_member_delete($member, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$member  | `Object` | Current Member model object              |
| \$values  | `Array`  | The Member model object data as an array |
| Returns   | `NULL`   | void                                     |

Called before the member object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('before_member_delete', $this, $this->getValues());

## `after_member_delete($member, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$member  | `Object` | Current Member model object              |
| \$values  | `Array`  | The Member model object data as an array |
| Returns   | `NULL`   | void                                     |

Called after the member object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('after_member_delete', $this, $this->getValues());

## `before_member_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called before a bulk of member objects are deleted. If you need to do an expensive operation when members are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('before_member_bulk_delete', $delete_ids);

TIP: **New in version 4.3.0.**

## `after_member_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called after a bulk of member objects are deleted. If you need to do an expensive operation when members are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('after_member_bulk_delete', $delete_ids);

TIP: **New in version 4.3.0.**

## `member_anonymize($member)`

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| \$member  | `Object` | Member model object being anonymized |
| Returns   | `NULL`   | void                                 |

Called when an anonymization action is taken on a member. If you have personally-identifiable information about members in your add-on, this is the place to implement your routines to anonymize that information.

How it's called:

    ee()->extensions->call('member_anonymize', $this);

TIP: **New in version 4.3.0.**
