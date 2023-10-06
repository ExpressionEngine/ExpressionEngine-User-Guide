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

# Member Role Setting Model

**class `ExpressionEngine\Model\Role\RoleSettings`**

[TOC]

## Properties

### Required

- `role_id` int

### Optional

- `id` Key
- `site_id` int
- `menu_set_id` int
- `mbr_delete_notify_emails`
- `exclude_from_moderation` boolString
- `search_flood_control` int
- `prv_msg_send_limit` int
- `prv_msg_storage_limit` int
- `include_in_authorlist`  boolString
- `include_in_memberlist` boolString
- `cp_homepage`
- `cp_homepage_channel` int
- `cp_homepage_custom`

## Relationships

#### `MenuSet`

The control panel menu layout for the member.

#### `Role`

The role the member belongs to.

#### `Site`

The site ID the member belongs to.

## Methods

This model has no additional methods.
