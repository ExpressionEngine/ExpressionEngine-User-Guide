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

# MemberGroup Model

**class `ExpressionEngine\Model\Role\RoleGroup`**

[TOC]

## Properties

#### `name` Required
#### `group_id`

## Relationships

#### `Roles`
[`Member`](development/models/member.md) instances are assigned to role as Primary Role.

#### `Members`
Members that are assigned to role. May or may not intersect with `PrimaryMembers`.

NOTE: **Note:** To get full list of members assigned to role, use [`getAllMembers()`](#getallmembers) function.

This model has no methods.

## Examples

#### Get a Role Group by ID
`
$role_id = 6;
$roleGroup = ee('Model')->get('RoleGroup', $role_id)->first();
`

#### Create a Role Group and Add Roles.
`
// Role IDs to add to Role Group.
$role_members = array(1,2,3); 

// Create a new Role instance.
$role_group = ee('Model')->make('RoleGroup'); 

// Use the Roles relationship to get each Role object.
$role_group->Roles = ee('Model')->get('Role', $role_members)->all(); 

// Add the changes to the object.
$role_group->set($group_data);

// Write the changes.
$role_group->save();
`