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

# Role Model

**class `ExpressionEngine\Model\Role\Role`**

[TOC]

## Properties

### Required

- `name` Unique, max 100
- `short_name` Unique, max 50

### Optional

- `role_id` Key, int
- `description`
- `is_locked` boolString

## Relationships

#### `PrimaryMembers`

[`Member`](development/models/member.md) instances are assigned to role as Primary Role.

#### `Members`

Members that are assigned to role. May or may not intersect with `PrimaryMembers`.

NOTE: **Note:** To get full list of members assigned to role, use [`getAllMembers()`](#getallmembers) function.

#### `ChannelLayouts`

CP Publish page Layouts assigned to role.

#### `Permissions`

Permission records for the role.

#### `RoleSettings`

Role Settings.

#### `RoleGroups`

Groups that the role belongs to.

#### `AssignedChannels`

Channels assigned to role.

#### `AssignedModules`

Modules assigned to role.

#### `AssignedStatuses`

Entry Statuses assigned to role.

#### `AssignedTemplates`

Templates that the role members can access.

#### `AssignedTemplateGroups`

Template Groups that the role members can edit.

#### `AssignedUploadDestinations`

Upload Destination where role members can manage the files.

#### `EmailCache`

Email Cache records for the role.

## Methods

### `getAllMembers()`

Get all members that are assigned to this role (as primary or extra one)

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | all members assigned to role |

### `getPermissions()`

Get permissions assigned to member role.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Array` | `[permission => permission_id]` |

### `has($permission)`

Checks whether member role has certain permission

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| \$permission   | `String` | Full permission name |
| Returns   | `Bool` | `TRUE` if permission has been granted |

## Events

Saving with this model will trigger the following events:

- `afterSave`

## Examples

### Get a Role

```php
$role_id = 6;
$role = ee('Model')->get('Role', $role_id)->first();
```

### Get all Members of a Role

```php
// Get the Role Model.
$role = ee('Model')->get('Role', $role_id)->first();

// Get the Members model
$members = $role->Members;

// Return the usernames to an array
$usernames = $members->pluck('username');
```

### Add Role Members

```php
// Get the Role Model.
$role = ee('Model')->get('Role', $role_id)->first();

// Get the Existing Member's IDs to an array.
$current_members = $role->Members->pluck('member_id');

// Get your list of members to add.
$new_members = array(2,3,4);

// Combine the member ID arrays.
$all_members = array_merge($current_members, $new_members);

$role->Members = ee('Model')->get('Member', $all_members)->all();

// Validate and Save.
$result = $role->validate();

if ($result->isValid())
{
  $role->save();
}
```

### Change Role Name

```php
// Get role object.
$role_id = 6;
$role = ee('Model')->get('Role')->filter('role_id', $role_id)->first();

// Change Role name in Object.
$role->name = 'My New Role Name';

// Validate and Save.
$result = $role->validate();

if ($result->isValid())
{
  $role->save();
}
```

### Create a New Role

```php
// Create a Role Group Model
$role = ee('Model')->make('Role');

// Set Required Fields
$role->name       = 'Role Name';
$role->sort_name  = 'role_name';

// Validate and Save.
$result = $role->validate();

if ($result->isValid())
{
  $role->save();
}

// The Role ID is now available
$role->role_id;
```
