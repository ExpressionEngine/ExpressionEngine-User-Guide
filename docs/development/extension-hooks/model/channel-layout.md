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

# ChannelLayout Model Extension Hooks

[TOC=2]

## `before_channel_layout_insert($channel, $values)`

| Parameter | Type     | Description                                     |
| --------- | -------- | ------------------------------------------------|
| \$channel | `Object` | Current ChannelLayout model object              |
| \$values  | `Array`  | The ChannelLayout model object data as an array |
| Returns   | `NULL`   | void                                            |

Called before the channel layout object is inserted. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_layout_insert', $this, $this->getValues());

## `after_channel_layout_insert($channel, $values)`

| Parameter | Type     | Description                                     |
| --------- | -------- | ------------------------------------------------|
| \$channel | `Object` | Current ChannelLayout model object              |
| \$values  | `Array`  | The ChannelLayout model object data as an array |
| Returns   | `NULL`   | void                                            |

Called after the channel layout object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

How it's called:

    ee()->extensions->call('after_channel_layout_insert', $this, $this->getValues());

## `before_channel_layout_update($channel, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | -------------------------------------------------|
| \$channel  | `Object` | Current ChannelLayout model object               |
| \$values   | `Array`  | The ChannelLayout model object data as an array  |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called before the channel layout object is updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_layout_update', $this, $this->getValues(), $modified);

## `after_channel_layout_update($channel, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | -------------------------------------------------|
| \$channel  | `Object` | Current ChannelLayout model object               |
| \$values   | `Array`  | The ChannelLayout model object data as an array  |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called after the channel layout object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_channel_layout_update', $this, $this->getValues(), $modified);

## `before_channel_layout_save($channel, $values)`

| Parameter | Type     | Description                                     |
| --------- | -------- | ------------------------------------------------|
| \$channel | `Object` | Current ChannelLayout model object              |
| \$values  | `Array`  | The ChannelLayout model object data as an array |
| Returns   | `NULL`   | void                                            |

Called before the channel layout object is inserted or updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_channel_layout_save', $this, $this->getValues());

## `after_channel_layout_save($channel, $values)`

| Parameter | Type     | Description                                     |
| --------- | -------- | ------------------------------------------------|
| \$channel | `Object` | Current ChannelLayout model object              |
| \$values  | `Array`  | The ChannelLayout model object data as an array |
| Returns   | `NULL`   | void                                            |

Called after the channel layout object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_channel_layout_save', $this, $this->getValues());

## `before_channel_layout_delete($channel, $values)`

| Parameter | Type     | Description                                     |
| --------- | -------- | ------------------------------------------------|
| \$channel | `Object` | Current ChannelLayout model object              |
| \$values  | `Array`  | The ChannelLayout model object data as an array |
| Returns   | `NULL`   | void                                            |

Called before the channel layout object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('before_channel_layout_delete', $this, $this->getValues());

## `after_channel_layout_delete($channel, $values)`

| Parameter | Type     | Description                                     |
| --------- | -------- | ------------------------------------------------|
| \$channel | `Object` | Current ChannelLayout model object              |
| \$values  | `Array`  | The ChannelLayout model object data as an array |
| Returns   | `NULL`   | void                                            |

Called after the channel layout object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('after_channel_layout_delete', $this, $this->getValues());

TIP: **New in version 5.3.0.**
