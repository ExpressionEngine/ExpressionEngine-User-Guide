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

# Role Model Extension Hooks

[TOC=3]

### `before_role_insert($role, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$role  | `Object` | Current Role model object              |
| \$values  | `Array`  | The Role model object data as an array |
| Returns   | `NULL`   | void                                     |

Called before the role object is inserted. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_role_insert', $this, $this->getValues());

### `after_role_insert($role, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$role  | `Object` | Current Role model object              |
| \$values  | `Array`  | The Role model object data as an array |
| Returns   | `NULL`   | void                                     |

Called after the role object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

How it's called:

    ee()->extensions->call('after_role_insert', $this, $this->getValues());

### `before_role_update($role, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| \$role   | `Object` | Current Role model object                      |
| \$values   | `Array`  | The Role model object data as an array         |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called before the role object is updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_role_update', $this, $this->getValues(), $modified);

### `after_role_update($role, $values, $modified)`

| Parameter  | Type     | Description                                      |
| ---------- | -------- | ------------------------------------------------ |
| \$role   | `Object` | Current Role model object                      |
| \$values   | `Array`  | The Role model object data as an array         |
| \$modified | `Array`  | An array of all the old values that were changed |
| Returns    | `NULL`   | void                                             |

Called after the role object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_role_update', $this, $this->getValues(), $modified);

### `before_role_save($role, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$role  | `Object` | Current Role model object              |
| \$values  | `Array`  | The Role model object data as an array |
| Returns   | `NULL`   | void                                     |

Called before the role object is inserted or updated. Changes made to the object will be saved automatically.

How it's called:

    ee()->extensions->call('before_role_save', $this, $this->getValues());

### `after_role_save($role, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$role  | `Object` | Current Role model object              |
| \$values  | `Array`  | The Role model object data as an array |
| Returns   | `NULL`   | void                                     |

Called after the role object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

How it's called:

    ee()->extensions->call('after_role_save', $this, $this->getValues());

### `before_role_delete($role, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$role  | `Object` | Current Role model object              |
| \$values  | `Array`  | The Role model object data as an array |
| Returns   | `NULL`   | void                                     |

Called before the role object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('before_role_delete', $this, $this->getValues());

### `after_role_delete($role, $values)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$role  | `Object` | Current Role model object              |
| \$values  | `Array`  | The Role model object data as an array |
| Returns   | `NULL`   | void                                     |

Called after the role object is deleted. If you are conditionally deleting one of your own models, please consider creating an [inverse relationship](development/services/model/relating-models.md#inverse-relationships) instead. This will provide better performance and strictly enforce data consistency.

How it's called:

    ee()->extensions->call('after_role_delete', $this, $this->getValues());

### `before_role_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called before a bulk of role objects are deleted. If you need to do an expensive operation when roles are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('before_role_bulk_delete', $delete_ids);


### `after_role_bulk_delete($delete_ids)`

| Parameter    | Type    | Description                                     |
| ------------ | ------- | ----------------------------------------------- |
| \$delete_ids | `Array` | The primary key IDs of the models being deleted |
| Returns      | `NULL`  | void                                            |

Called after a bulk of role objects are deleted. If you need to do an expensive operation when roles are deleted, it may be more efficient to handle it in bulk here.

How it's called:

    ee()->extensions->call('after_role_bulk_delete', $delete_ids);

