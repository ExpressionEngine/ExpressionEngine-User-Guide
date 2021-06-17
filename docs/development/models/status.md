---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Status Model

**class `ExpressionEngine\Model\Status\Status`**

[TOC]

## Properties

### Required:
#### `status` Unique
#### `highlight` Hex color

### Optional:
#### `status_id` Key
#### `status_order` ini

## Relationships

#### `Channels`
Related channels the status is assigned to.

#### `ChannelEntries`
Related channel entries the status is used in.

#### `Site`
Sites the status is used in.

#### `Roles`
Roles with permissions to use the status.


## Methods

### `onBeforeInsert()`

New statuses get appended roles assigned

### `getSelectOptionComponent()`

Returns the value and rendered label for option select input display

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| use_ids   | `array` | ID of status, otherwise uses the status name.  Default is `false` |
| Returns   | `array` | Array of value, and rendered label using `renderTag()` method.|

### `renderTag()`

Renders the tag with styles using the `_shared/status-tag` view.

### `validateUnique()`

Override of the parent validateUnique to alter the language key if it is a failure.  Validates true if the status is unique.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| key   | `string` | Property name |
| value   | `string` | Property value |
| params   | `array` | Rule parameters |
| Returns   | `string` | option component array |


## Events
Saving with this model will trigger the following events:
`beforeInsert`

## Examples

#### Get a Status
```
$status_object = ee('Model')->get('Status')->filter('status','open')->first();
```

#### Get entry IDs with a specific status
```
// Get entries with that status, return the entry id.
$entries_array = $status_object->ChannelEntries->pluck('entry_id');
```

#### Set a new status name
```

```
#### Users that can access the Status
```
// Get related Roles, and then members in those Roles.
// Return the usernames.
$username_arrays = $status_object->Roles
                    ->Members
                    ->all()
                    ->pluck('username');
```