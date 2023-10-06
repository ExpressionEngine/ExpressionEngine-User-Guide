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

# Role Group Model

**class `ExpressionEngine\Model\Role\RoleGroup`**

[TOC]

## Properties

### Required

- `name`

### Optional

- `group_id` Key, ini

## Relationships

#### `Roles`

[`Member`](development/models/member.md) instances are assigned to role as Primary Role.

#### `Members`

Members that are assigned to role. May or may not intersect with `PrimaryMembers`.

NOTE: **Note:** To get full list of members assigned to role, use [`getAllMembers()`](development/models/role.md#getallmembers) function.

## Methods

This model has no methods.

## Examples

### Get a Role Group by ID

```php
$role_id = 6;
$roleGroup = ee('Model')->get('RoleGroup', $role_id)->first();
```

### Edit a Role Group Name

```php
$roleGroup = ee('Model')->get('RoleGroup', 6)->first();
$roleGroup->name = 'Marvel Members';

// Validate and Save.
$result = $roleGroup->validate();

if ($result->isValid())
{
  $roleGroup->save();
}
```

### Create a Role Group

```php
// Create a Role Model
$roleGroup = ee('Model')->make('RoleGroup');

// Set the Require field
$roleGroup->name = 'DC Members';

// Validate and Save.
$result = $roleGroup->validate();

if ($result->isValid())
{
  $roleGroup->save();
}

// the ID is now available:
$roleGroup->group_id;
```

### Add Roles to a Role Group

```php
// Role IDs to add to Role Group.
$role_members = array(1,2,3);

// Use the Roles relationship to get each Role object.
$roleGroup->Roles = ee('Model')->get('Role', $role_members)->all();

// Validate and Save.
$result = $roleGroup->validate();

if ($result->isValid())
{
  $roleGroup->save();
}
```
