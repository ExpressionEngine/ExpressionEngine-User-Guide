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

**class `ExpressionEngine\Model\Member\Member`**

[TOC]

## Properties

### Required

- `role_id`
- `username`
- `email`
- `password`

### Optional

- `member_id` Key
- `group_id` (deprecated, use role_id)
- `screen_name`
- `salt` (deprecated)
- `unique_id`
- `crypt_key`
- `authcode`
- `signature`
- `avatar_filename`
- `avatar_width`
- `avatar_height`
- `photo_filename`
- `photo_width`
- `photo_height`
- `sig_img_filename`
- `sig_img_width`
- `sig_img_height`
- `ignore_list`
- `private_messages`
- `accept_messages`
- `last_view_bulletins`
- `last_bulletin_date`
- `ip_address`
- `join_date`
- `last_visit`
- `last_activity`
- `total_entries`
- `total_comments`
- `total_forum_topics`
- `total_forum_posts`
- `last_entry_date`
- `last_comment_date`
- `last_forum_post_date`
- `last_email_date`
- `in_authorlist`
- `accept_admin_email`
- `accept_user_email`
- `notify_by_default`
- `notify_of_pm`
- `display_signatures`
- `parse_smileys`
- `smart_notifications`
- `language`
- `timezone`
- `time_format`
- `date_format`
- `include_seconds`
- `profile_theme`
- `forum_theme`
- `tracker`
- `template_size`
- `notepad`
- `notepad_size`
- `bookmarklets`
- `quick_links`
- `quick_tabs`
- `show_sidebar`
- `pmember_id` (deprecated)
- `cp_homepage`
- `cp_homepage_channel` json
- `cp_homepage_custom`

## Relationships

#### `PrimaryRole`

Primary [`Role`](development/models/role.md) that the member belongs to.

#### `Roles`

Additional Roles the member is assigned to. May or may not include Primary Role.

#### `RoleGroups`

Role Groups assigned to member.

NOTE: **Note:** To get full list of Roles assigned to member, use [`getAllRoles()`](#getallroles) function.

#### `HTMLButtons`

HTML Buttons assigned to member.

#### `LastAuthoredTemplates`

Templates last edited by member.

#### `AuthoredChannelEntries`

Channel Entries created by member.

#### `LastAuthoredSpecialtyTemplates`

Specialty Templates last edited by member.

#### `UploadedFiles`

Files uploaded by member.

#### `ModifiedFiles`

Files modified by member.

#### `VersionedChannelEntries`

Channel Entry Versions created by member.

#### `EmailConsoleCaches`

Email Console Log records for member.

#### `SearchLogs`

Search Log records for member.

#### `CpLogs`

CP Log records for member.

#### `ChannelEntryAutosaves`

Channel Entries Autosaves by member.

#### `Comments`

Comments posted by member.

#### `TemplateRevisions`

Template RevisionTracker records that the member is author of.

#### `SiteStatsIfLastMember`

Stats for the site where member is last registered user.

#### `CommentSubscriptions`

Member's Subscriptions for new comment notifications

#### `NewsView`

Member's News View for CP Homepage

#### `AuthoredConsentRequests`

Consent Request Versions authored by member.

#### `ConsentAuditLogs`

Records in Consent Audit Log for member.

#### `Consents`

Consent signed by member.

#### `SentMessages`

Private Messages sent by member.

#### `SentMessageReceipts`

Message Copy records for private messages sent by member.

#### `SentAttachments`

Attachments to private messages sent by member.

#### `ReceivedMessages`

Private messages received by member.

#### `ReceivedMessageReceipts`

Message Copy records for private messages received by member.

#### `MessageFolders`

Private Message Folders for member.

#### `ListedMembers`

Members Listed (as buddy or blocked) by user.

#### `ListedByMembers`

Users that have listed the member.

#### `RememberMe`

`RememberMe` records for member.

#### `Session`

Sessions opened by member.

#### `Online`

`OnlineMember` records for member.

## Methods

### `getMemberName()`

Gets the member's name

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `String` | The member's name |

### `getHTMLButtonsForSite($site_id)`

Gets the HTML buttons for a given site id for this member. Falls back to the site's defined HTML buttons

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| \$site_id   | `Int` | The site ID |
| Returns   | `Collection` | A collection of `HTMLButton` entities |

### `updateAuthorStats()`

Updates the author's total_entries and total_comments stats based on the ChannelEntry and Comment counts.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Void` |  |

### `updateAuthorStats($site_id)`

Returns the URL to use for the homepage for this member, otherwise we'll use the default of 'homepage'. We prioritize on the Member's preferences then the groups preferences, falling back to the default.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| \$site_id   | `Int` | The site ID, defaults to current site |
| Returns   | `CP\URL` | The URL |

### `getAvatarUrl()`

Get the full URL to the Avatar

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `String` | Avatar URL |

### `getSignatureImageUrl()`

Get the full URL to the Signature Image

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `String` | Signature Image URL |

### `anonymize()`

Anonymize a member record in order to comply with a GDPR Right to Erasure request

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Void` |  |

### `isAnonymized()`

Checks whether this member already been anonymized

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Bool` | `TRUE` if the user has been anonymized |

### `getAllRoles()`

Get all roles assigned to member, including Primary Role, extra roles and roles assigned via Role Groups

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | all roles assigned to member |

### `getAssignedModules()`

Get all modules that the member is allowed to access

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | Collection of `Module` entities |

### `getAssignedChannels()`

Get all channels that the member is allowed to use

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | Collection of `Channel` entities |

### `getAssignedUploadDestinations()`

Get all upload destination that the member is allowed to use

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | Collection of `UploadDestination` entities |

### `getAssignedStatuses()`

Get all entry statuses that the member is allowed to use

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | Collection of `Status` entities |

### `getAssignedTemplateGroups()`

Get all template groups that the member is allowed to manipulate

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | Collection of `TemplateGroup` entities |

### `getAssignedTemplates()`

Get all templates that the member is allowed to access

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | Collection of `Template` entities |

### `getPermissions()`

Get permissions assigned to member

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Array` | `[permission => permission_id]` |

### `has($permission)`

Checks whether member has certain permission

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| \$permission   | `String` | Full permission name |
| Returns   | `Bool` | `TRUE` if permission has been granted |

### `isSuperAdmin()`

Checks whether member is SuperAdmin

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Bool` | `TRUE` if if member is SuperAdmin |

### `isBanned()`

Checks whether member has been banned

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Bool` | `TRUE` if if member is banned |

### `isPending()`

Checks whether member is pending

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Bool` | `TRUE` if if member is pending |

## Events

Saving with this model will trigger the following events:

- `afterUpdate'`
- `beforeDelete'`
- `afterBulkDelete'`
- `beforeInsert'`
- `beforeValidate'`
- `afterSave`

## Examples

### Get Member

```php
$username = 'bob';
$member_object = ee('Model')->get('Member')->filter('username', $username)->first();
```

### Get A Member's Roles

```php
$username = 'bob';
$member_roles_object = ee('Model')->get('Member')->filter('username', $username)->first()->getAllRoles();
```

### Change Member's Primary Role

```php
$new_role_id = 8;
$member_object->role_id = $new_role_id;

// Validate and Save.
$result = $member_object->validate();

if ($result->isValid())
{
  $member_object->save();
}
```

### Add additional Roles to Member

```php
// Get the member object.
$member_object = ee('Model')->get('Member')->filter('username', $username)->first();

// Get Member's existing role ID.
$current_role_ids = $member_object->Roles->pluck('role_id');

// Your list of new roles to add.
$roles_to_add = array(5,6);

// Merge the two arrays.
$all_roles = array_merge($current_role_ids, $roles_to_add);

// Add the roles to the member.
$member_object->Roles = ee('Model')->get('Role', $all_roles)->all();

// Validate and Save.
$result = $member_object->validate();

if ($result->isValid())
{
  $member_object->save();
}
```

### Set Member Custom Field

```php
$field_id = '26';
$member_object->{'m_field_id_'.$field_id} = 'New Field Value';

// Validate and Save.
$result = $member_object->validate();

if ($result->isValid())
{
  $member_object->save();
}
```

### Create a New Member

```php
$password_array = ee()->auth->hash_password($unencrypted_password);

$member_data = array(

    'role_id'    => 6,
    'username'   => 'bobsmith123', // unique.
    'email'      => 'example@gmail.com',  // unique.
    'password'   => $password_array['password'],
    'ip_address' => ee()->input->ip_address(),
    'unique_id'  => ee('Encrypt')->generateKey(),
    'crypt_key'  => ee('Encrypt')->generateKey(),
    'join_date'  => ee()->localize->now,
    'language'   => ee()->config->item('deft_lang'),

);

$member = ee('Model')->make('Member');
$member->set($member_data);

// Validate and Save.
$result = $member->validate();

if ($result->isValid())
{
  $member->save();
}
```
