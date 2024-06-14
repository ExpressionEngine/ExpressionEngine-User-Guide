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

### Required

- `status` Unique
- `highlight` Hex color

### Optional

- `status_id` Key
- `status_order` ini

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

### `getSelectOptionComponent()`

Returns the value and rendered label for option select input display

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| use_ids   | `array`      | ID of status, otherwise uses the status name.  Default is `false` |
| Returns   | `array`      | Array of value, and rendered label using `renderTag()` method.|

### `renderTag()`

Renders the tag with styles using the `_shared/status-tag` view.

### `validateUnique()`

Override of the parent validateUnique to alter the language key if it is a failure.  Validates true if the status is unique.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| key       | `string`     | Property name |
| value     | `string`     | Property value |
| params    | `array`      | Rule parameters |
| Returns   | `string`     | option component array |

## Events

Saving with this model will trigger the following events:

- `beforeInsert`

## Examples

### Get a Status

```php
$status = ee('Model')->get('Status')->filter('status','open')->first();
```

### Get entry IDs with a specific status

```php
// Get the Status Object.
$status = ee('Model')->get('Status')->filter('status','open')->first();

// Get entries with that status, returning the entry id to an array.
$entries_array = $status->ChannelEntries->pluck('entry_id');
```

### Get Users that can access the Status

```php
// Get the Status Object.
$status = ee('Model')->get('Status')->filter('status','open')->first();

// Get the related Roles.
$roles = $status->Roles;

// Get the Members in those Roles
$members = $roles->Members->all();

// Return the usernames to an array.
$usernames = $members->pluck('username);

// As one one line:
$username_arrays = $ee('Model')
                    ->get('Status')
                    ->filter('status','open')
                    ->first()
                    ->Roles
                    ->Members
                    ->all()
                    ->pluck('username');
```

### Edit the Status name

```php
// Get the Status Object.
$status = ee('Model')->get('Status')->filter('status','review')->first();

$status->status = 'reviewed';

// Validate and Save.
$result = $status->validate();

if ($result->isValid())
{
  $status->save();
}
```

### Create a New Status

```php
// Make the Status Model.
$status = ee('Model')->make('Status');

// Set the Title and Hex Color
$status->status = "MyNewStatus";
$status->highlight = '009933';

// Validate and Save.
$result = $status->validate();

if ($result->isValid())
{
  $status->save();
}
```
