---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Permission Service

[TOC]

## Simple Example

The permission service checks for member authorization as indicated in the session userdata. Superadmins automatically have permission.

To check for exactly 1 permission:

    if (ee('Permission')->has('can_edit_all_comments'))
    {
      $this->show_form();
    }

To check for the existence of at least one permission among a list of permissions:

    if (ee('Permission')->hasAny('can_create_template_partials', 'can_edit_template_partials', 'can_delete_template_partials'))
    {
      $this->show_header();
    }

To check for the existence of all listed permissions:

    $can_delete = ee('Permission')->hasAll('can_delete_all_comments', 'can_delete_own_comments')

## Permission Service Methods

**class `EllisLab\ExpressionEngine\Service\Permission\Permission`**

[TOC=3]

### `has($permission)`

Checks a session object for a single permission

| Parameter    | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| \$permission | `String`  | A single permission name     |
| Returns      | `Boolean` | TRUE if allowed FALSE if not |

### `hasAny($permission)`

Checks a session object for any matches against a collection of permissions, from one on up.

| Parameter    | Type      | Description                    |
| ------------ | --------- | ------------------------------ |
| \$permission | `Mixed`   | Any number of permission names |
| Returns      | `Boolean` | TRUE if allowed FALSE if not   |

### `hasAll($permission)`

Checks a session object matches all permissions in a collection of permissions, from one on up.

| Parameter    | Type      | Description                    |
| ------------ | --------- | ------------------------------ |
| \$permission | `Mixed`   | Any number of permission names |
| Returns      | `Boolean` | TRUE if allowed FALSE if not   |
