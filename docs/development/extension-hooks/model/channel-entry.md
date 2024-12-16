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

# Channel Entry Model Extension Hooks

[TOC=2]

## `before_channel_entry_insert($entry, $values)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$entry   | `Object` | Current ChannelEntry model object              |
| \$values  | `Array`  | The ChannelEntry model object data as an array |
| Returns   | `NULL`   | void                                           |

Called before the channel entry object is inserted. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_entry_insert', $this, $this->getValues());

## `after_channel_entry_insert($entry, $values)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$entry   | `Object` | Current ChannelEntry model object              |
| \$values  | `Array`  | The ChannelEntry model object data as an array |
| Returns   | `NULL`   | void                                           |

Called after the channel entry object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

How it's called:

    ee()->extensions->call('after_channel_entry_insert', $this, $this->getValues());

## `before_channel_entry_update($entry, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| \$entry    | `Object` | Current ChannelEntry model object                |
| \$values   | `Array`  | The ChannelEntry model object data as an array   |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called before the channel entry object is updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_entry_update', $this, $this->getValues(), $modified);

## `after_channel_entry_update($entry, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| \$entry    | `Object` | Current ChannelEntry model object                |
| \$values   | `Array`  | The ChannelEntry model object data as an array   |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called after the channel entry object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_channel_entry_update', $this, $this->getValues(), $modified);

## `before_channel_entry_save($entry, $values)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$entry   | `Object` | Current ChannelEntry model object              |
| \$values  | `Array`  | The ChannelEntry model object data as an array |
| Returns   | `NULL`   | void                                           |

Called before the channel entry object is inserted or updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_entry_save', $this, $this->getValues());

## `after_channel_entry_save($entry, $values)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$entry   | `Object` | Current ChannelEntry model object              |
| \$values  | `Array`  | The ChannelEntry model object data as an array |
| Returns   | `NULL`   | void                                           |

Called after the channel entry object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_channel_entry_save', $this, $this->getValues());

## `before_channel_entry_delete($entry, $values)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$entry   | `Object` | Current ChannelEntry model object              |
| \$values  | `Array`  | The ChannelEntry model object data as an array |
| Returns   | `NULL`   | void                                           |

Called before the channel entry object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('before_channel_entry_delete', $this, $this->getValues());

## `after_channel_entry_delete($entry, $values)`

| Parameter | Type     | Description                                    |
| --------- | -------- | ---------------------------------------------- |
| \$entry   | `Object` | Current ChannelEntry model object              |
| \$values  | `Array`  | The ChannelEntry model object data as an array |
| Returns   | `NULL`   | void                                           |

Called after the channel entry object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('after_channel_entry_delete', $this, $this->getValues());

## `before_channel_entry_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called before a bulk of channel entry objects are deleted. If you need to do an expensive operation when channel entries are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('before_channel_entry_bulk_delete', $delete_ids);

TIP: **New in version 4.3.0.**

## `after_channel_entry_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called after a bulk of channel entry objects are deleted. If you need to do an expensive operation when channel entries are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('after_channel_entry_bulk_delete', $delete_ids);

TIP: **New in version 4.3.0.**
