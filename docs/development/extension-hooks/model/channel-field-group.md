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

# ChannelFieldGroup Model Extension Hooks

[TOC=2]

## `before_channel_field_group_insert($channel_field_group, $values)`

| Parameter             | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| \$channel_field_group | `Object` | Current ChannelFieldGroup model object              |
| \$values              | `Array`  | The ChannelFieldGroup model object data as an array |
| Returns               | `NULL`   | void                                                |

Called before the channel field group object is inserted. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_field_group_insert', $this, $this->getValues());

## `after_channel_field_group_insert($channel_field_group, $values)`

| Parameter             | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| \$channel_field_group | `Object` | Current ChannelFieldGroup model object              |
| \$values              | `Array`  | The ChannelFieldGroup model object data as an array |
| Returns               | `NULL`   | void                                                |

Called after the channel field group object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

How it's called:

    ee()->extensions->call('after_channel_field_group_insert', $this, $this->getValues());

## `before_channel_field_group_update($channel_field_group, $values, $modified)`

| Parameter             | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| \$channel_field_group | `Object` | Current ChannelFieldGroup model object              |
| \$values              | `Array`  | The ChannelFieldGroup model object data as an array |
| \$modified            | `Array`  | An array of all the old values that were changed    |
| Returns               | `NULL`   | void                                                |

Called before the channel field group object is updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_field_group_update', $this, $this->getValues(), $modified);

## `after_channel_field_group_update($channel_field_group, $values, $modified)`

| Parameter             | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| \$channel_field_group | `Object` | Current ChannelFieldGroup model object              |
| \$values              | `Array`  | The ChannelFieldGroup model object data as an array |
| \$modified            | `Array`  | An array of all the old values that were changed    |
| Returns               | `NULL`   | void                                                |

Called after the channel field group object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_channel_field_group_update', $this, $this->getValues(), $modified);

## `before_channel_field_group_save($channel_field_group, $values)`

| Parameter             | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| \$channel_field_group | `Object` | Current ChannelFieldGroup model object              |
| \$values              | `Array`  | The ChannelFieldGroup model object data as an array |
| Returns               | `NULL`   | void                                                |

Called before the channel field group object is inserted or updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_field_group_save', $this, $this->getValues());

## `after_channel_field_group_save($channel_field_group, $values)`

| Parameter             | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| \$channel_field_group | `Object` | Current ChannelFieldGroup model object              |
| \$values              | `Array`  | The ChannelFieldGroup model object data as an array |
| Returns               | `NULL`   | void                                                |

Called after the channel field group object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_channel_field_group_save', $this, $this->getValues());

## `before_channel_field_group_delete($channel_field_group, $values)`

| Parameter             | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| \$channel_field_group | `Object` | Current ChannelFieldGroup model object              |
| \$values              | `Array`  | The ChannelFieldGroup model object data as an array |
| Returns               | `NULL`   | void                                                |

Called before the channel field group object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('before_channel_field_group_delete', $this, $this->getValues());

## `after_channel_field_group_delete($channel_field_group, $values)`

| Parameter             | Type     | Description                                         |
| --------------------- | -------- | --------------------------------------------------- |
| \$channel_field_group | `Object` | Current ChannelFieldGroup model object              |
| \$values              | `Array`  | The ChannelFieldGroup model object data as an array |
| Returns               | `NULL`   | void                                                |

Called after the channel field group object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('after_channel_field_group_delete', $this, $this->getValues());

## `before_channel_field_group_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called before a bulk of channel field group objects are deleted. If you need to do an expensive operation when channel field groups are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('before_channel_field_group_bulk_delete', $delete_ids);

TIP: **New in version 4.3.0.**

## `after_channel_field_group_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called after a bulk of channel field group objects are deleted. If you need to do an expensive operation when channel field groups are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('after_channel_field_group_bulk_delete', $delete_ids);

TIP: **New in version 4.3.0.**
