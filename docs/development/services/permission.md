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

**class `ExpressionEngine\Service\Permission\Permission`**

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

### `isSuperAdmin()`

Returns `true` if logged in member is Super Admins, `false` otherwise

### `hasRole($role)`

Checks whether member has given role

| Parameter    | Type      | Description                    |
| ------------ | --------- | ------------------------------ |
| \$role | `Mixed`   | ID or name of member role |
| Returns      | `Boolean` | TRUE if user has role FALSE if not   |

### `hasAnyRole($roles)`

Checks whether user has any of given roles, supplied as array of IDs or names.

| Parameter    | Type      | Description                    |
| ------------ | --------- | ------------------------------ |
| \$roles | `Array`   | Array of IDs or names of member roles |
| Returns      | `Boolean` | TRUE if user has role FALSE if not   |

### `rolesThatHave($permission, $site_id = NULL, $fuzzy = false)`

Checks a session object for any matches against a collection of permissions, from one on up.

| Parameter    | Type      | Description                    |
| ------------ | --------- | ------------------------------ |
| \$permission | `String`   | Permission name, or start of permission name |
| \$site_id | `Int`   | Site ID, defaults to current site |
| \$fuzzy | `Boolean`   | TRUE if first parameter is start of permission name |
| Returns      | `Array` | Array of Role IDs   |



## Available Permissions

The following are permission names available for validating a user's permissions using the Permission Service methods.
- `can_view_online_system`
- `can_view_offline_system`
- `can_view_profiles`
- `can_delete_self`
- `can_post_comments`
- `can_moderate_comments`
- `can_edit_own_comments`
- `can_delete_own_comments`
- `can_edit_all_comments`
- `can_delete_all_comments`
- `can_search`
- `can_send_private_messages`
- `can_attach_in_private_messages`
- `can_send_bulletins`
- `can_access_cp`
- `can_access_footer_report_bug`
- `can_access_footer_new_ticket`
- `can_access_footer_user_guide`
- `can_view_homepage_news`
- `can_admin_channels`
- `can_create_channels`
- `can_edit_channels`
- `can_delete_channels`
- `can_create_channel_fields`
- `can_edit_channel_fields`
- `can_delete_channel_fields`
- `can_create_category_groups`
- `can_edit_category_groups`
- `can_delete_category_groups`
- `can_create_categories`
- `can_edit_categories`
- `can_delete_categories`
- `can_create_statuses`
- `can_edit_statuses`
- `can_delete_statuses`
- `can_access_files`
- `can_create_upload_directories`
- `can_edit_upload_directories`
- `can_delete_upload_directories`
- `can_upload_new_files`
- `can_edit_files`
- `can_delete_files`
- `can_access_members`
- `can_create_members`
- `can_edit_members`
- `can_delete_members`
- `can_ban_users`
- `can_email_from_profile`
- `can_edit_html_buttons`
- `can_admin_roles`
- `can_create_roles`
- `can_edit_roles`
- `can_delete_roles`
- `can_access_design`
- `can_admin_design`
- `can_create_template_groups`
- `can_edit_template_groups`
- `can_delete_template_groups`
- `can_create_template_partials`
- `can_edit_template_partials`
- `can_delete_template_partials`
- `can_create_template_variables`
- `can_edit_template_variables`
- `can_delete_template_variables`
- `can_access_addons`
- `can_admin_addons`
- `can_upload_new_toolsets`
- `can_edit_toolsets`
- `can_delete_toolsets`
- `can_access_utilities`
- `can_access_comm`
- `can_email_roles`
- `can_send_cached_email`
- `can_access_translate`
- `can_access_import`
- `can_access_sql_manager`
- `can_access_data`
- `can_access_logs`
- `can_access_sys_prefs`
- `can_access_security_settings`
- `can_manage_consents`

The following are available for each channel, `X` being the channel ID.

- `can_create_entries_channel_id_X`
- `can_edit_self_entries_channel_id_X`
- `can_delete_self_entries_channel_id_X`
- `can_edit_other_entries_channel_id_X`
- `can_delete_all_entries_channel_id_X`
- `can_assign_post_authors_channel_id_X`

Template editing permissions are being set for each template group, `X` being template group ID.

- `can_create_templates_template_group_id_X`
- `can_edit_templates_template_group_id_X`
- `can_delete_templates_template_group_id_X`
- `can_manage_settings_template_group_id_X`
