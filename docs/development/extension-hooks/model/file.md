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

# File Model Extension Hooks

[TOC=2]

## `before_file_insert($file, $values)`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$file    | `Object` | Current File model object              |
| \$values  | `Array`  | The File model object data as an array |
| Returns   | `NULL`   | void                                   |

Called before the file object is inserted. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_file_insert', $this, $this->getValues());

## `after_file_insert($file, $values)`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$file    | `Object` | Current File model object              |
| \$values  | `Array`  | The File model object data as an array |
| Returns   | `NULL`   | void                                   |

Called after the file object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

How it's called:

    ee()->extensions->call('after_file_insert', $this, $this->getValues());

## `before_file_update($file, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| \$file     | `Object` | Current File model object                        |
| \$values   | `Array`  | The File model object data as an array           |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called before the file object is updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_file_update', $this, $this->getValues(), $modified);

## `after_file_update($file, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| \$file     | `Object` | Current File model object                        |
| \$values   | `Array`  | The File model object data as an array           |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called after the file object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_file_update', $this, $this->getValues(), $modified);

## `before_file_save($file, $values)`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$file    | `Object` | Current File model object              |
| \$values  | `Array`  | The File model object data as an array |
| Returns   | `NULL`   | void                                   |

Called before the file object is inserted or updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_file_save', $this, $this->getValues());

## `after_file_save($file, $values)`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$file    | `Object` | Current File model object              |
| \$values  | `Array`  | The File model object data as an array |
| Returns   | `NULL`   | void                                   |

Called after the file object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_file_save', $this, $this->getValues());

## `before_file_delete($file, $values)`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$file    | `Object` | Current File model object              |
| \$values  | `Array`  | The File model object data as an array |
| Returns   | `NULL`   | void                                   |

Called before the file object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('before_file_delete', $this, $this->getValues());

## `after_file_delete($file, $values)`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$file    | `Object` | Current File model object              |
| \$values  | `Array`  | The File model object data as an array |
| Returns   | `NULL`   | void                                   |

Called after the file object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('after_file_delete', $this, $this->getValues());

## `before_file_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called before a bulk of file objects are deleted. If you need to do an expensive operation when files are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('before_file_bulk_delete', $delete_ids);

TIP: **New in version 4.3.0.**

## `after_file_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called after a bulk of file objects are deleted. If you need to do an expensive operation when files are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('after_file_bulk_delete', $delete_ids);

TIP: **New in version 4.3.0.**
