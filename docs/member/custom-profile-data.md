<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Custom Profile Data Tag

[TOC]

## Overview

The Custom Profile Data Tag allows you to display member profile information in your Templates. The data can either be shown from the currently logged-in user or from a specified user using the member_id="" parameter.

NOTE: **Note:** Remember that the profile information for the current visitor, such as {screen_name}, {email}, etc. are always available in any template as [Global Variables](templates/globals/single-variables.md). Therefore, only use this tag if you need to show custom profile data (that is, Member Fields that you have created yourself) or information for a specific user.

    {exp:member:custom_profile_data}
      <p>{age}, {gender}</p>
    {/exp:member:custom_profile_data}

NOTE: **Important:** If you omit the member_id= parameter as in the above example, do _not_ enable Template Caching on any Template containing this tag. Otherwise the data will not be dynamic and whoever happens to load the page when it is cached will have their information shown for everyone until the cache expires. Unlike this tag, [Global Variables](templates/globals/single-variables.md) _can_ be used in templates that are cached.


## Parameters

### `member_id=`

    member_id="147"

Specifies a particular member's information to display. By default (if you do not include the `member_id` or `username` parameter), the tag will simply display information pertaining to the currently logged-in user.

### `username=`

    username="admin"

Username of member to display

## Variables

### `{avatar_height}`

The height of the avatar image associated with the user. Typically used as such:

    {if avatar}
      <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
    {/if}

### `{avatar_width}`

The width of the avatar image associated with the user. Typically used as such:

    {if avatar}
      <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
    {/if}

### `{avatar_url}`

The URL to the avatar image associated with the user. Typically used as such:

    {if avatar}
      <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
    {/if}

### `{email}`

The user's Javascript-encoded email address.

### `{group_id}`
### `{role_id}`

The user's Role ID.

### `{join_date}`

    {join_date format="%Y %m %d"}

The date the user joined the site.

### `{language}`

The user's language.

### `{last_activity}`

    {last_activity format="%Y %m %d"}

The time of the user's last page load.

### `{last_comment_date}`

    {last_comment_date format="%Y %m %d"}

The date of the user's last comment.

### `{last_entry_date}`

    {last_entry_date format="%Y %m %d"}

The date of the user's last channel entry.

### `{last_forum_post_date}`

    {last_forum_post_date format="%Y %m %d"}

The date of the user's last forum post.

### `{last_visit}`

    {last_visit format="%Y %m %d"}

The date when the user was last active on the site PRIOR to their current session.

### `{local_time}`

    {local_time format="%Y %m %d"}

The user's local time.

### `{member_group}`

The user's member group.

### `{member_id}`

The user's Member ID.

### `{screen_name}`

The user's screen name.

### `{search_path}`

The search path to show entries and posts by this user:

    <a href="{search_path}">View Entries by User</a>

### `{send_private_message}`

The URL to send a Private Message to this user:

    <a href="{send_private_message}">Send Private Message to {screen_name}.</a>

### `{signature}`

The user's signature.

### `{timezone}`

The user's timezone.

### `{total_comments}`

The total number of comments made by the user.

### `{total_entries}`

The total number of entries made by the user.

### `{total_forum_posts}`

The total number of forum posts made by the user.

### `{total_forum_topics}`

The total number of forum topics made by the user.

### `{username}`

The user's username.

## Other Member Fields

All other member fields that you created can be accessed using the Short Name of the field:

    {age}
    {gender}
    {zodiac}
    etc..
