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

**class `ExpressionEngine\Model\Role\RoleSettings`**

[TOC]

## Properties

### Required:
#### `role_id`

### Optional:
#### `id`
#### `site_id`
#### `menu_set_id`
#### `mbr_delete_notify_emails`
#### `exclude_from_moderation`
#### `search_flood_control`
#### `prv_msg_send_limit`
#### `prv_msg_storage_limit`
#### `include_in_authorlist` 
#### `include_in_memberlist`
#### `cp_homepage`
#### `cp_homepage_channel`
#### `cp_homepage_custom`

## Relationships

#### `MenuSet`
The control panel menu layout for the member.

#### `Role`
The role the member belongs to.

#### `Site`
The site ID the member belongs to.