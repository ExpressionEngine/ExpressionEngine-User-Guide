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

# Member Model

**class `ExpressionEngine\Model\Role\Role`**

[TOC]

## Properties

### Required:
#### `name` Unique, max 100
#### `short_name` Unique, max 50

### Optional:
#### `role_id`
#### `description`
#### `is_locked`

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
