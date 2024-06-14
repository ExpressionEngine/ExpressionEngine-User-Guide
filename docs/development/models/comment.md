---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2022, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Comment Model

**class `ExpressionEngine\Model\Comment`**

[TOC]

Stores submitted comments. Used by the Comment Module.

## Properties

| Name             | Validation           | Type       | Description     |
| ---------------- | -------------------- | ---------- | --------------- |
| `comment_id` Key |                      |            |                 |
| `site_id`        | `required,isNatural` |            | MSM site ID, default is 1 |
| `entry_id`       | `required,isNatural` |            | Entry ID the comment is associated with. |
| `channel_id`     | `required,isNatural` |            | Channel the entry ID is apart of. |
| `author_id`      | `required,isNatural` |            | Author (user) ID. |
| `status`         | `enum[o,c,p,s]`      |            | Status of the comment, `o`pen/`c`losed/`p`ending/`s`pam. |
| `name`           |                      |            | Name of the commenter |
| `email`          |                      |            | Email of the commenter |
| `url`            |                      |            | Commenter's URL |
| `location`       |                      |            | Where the commenter is. |
| `ip_address`     | `ip_address`         |            | Commenter's IP address. |
| `comment_date`   |                      |            | Comment creation date. |
| `edit_date`      |                      |            | Comment edit date. |
| `comment`        | `required`           |            | The comment body. |

## Relationships

- `Site`
- `Entry`
- `Channel`
- `Author`

## Methods

This model has no additional methods.

## Events

- `afterInsert`
- `afterDelete`
- `afterUpdate`

## Examples

### Create a new comment

Creating a comment using a model will bypass Comment Module settings and rules.

```php
$entry = ee('Model')->get('ChannelEntry', $entry_id)->first();

$comment = ee('Model')->make('Comment');
$comment->site_id    = ee()->config->item('site_id');
$comment->entry_id   = $entry->getId();
$comment->channel_id = $entry->channel_id;
$comment->author_id  = ee()->session->userdata['member_id']; // Get currently logged-in user.
$comment->comment    = 'My super awesome comment.';
$comment->status     = 's'; // Status is needed to have comment display in the CP.

// Optional:
$comment->ip_address   = ee()->session->userdata['ip_address'];
$comment->name         = ee()->session->userdata['screen_name'];
$comment->email        = ee()->session->userdata['email'];
$comment->url          = ee()->session->userdata['url'];
$comment->location     = ee()->session->userdata['location'];
$comment->comment_date = ee()->localize->now;

$comment->save();
```

### Delete all spam

```php
$comments = ee('Model')->get('Comment')->filter('status', 's')->all();

foreach($comments as $comment)
{
    $comment->delete();
}
```
