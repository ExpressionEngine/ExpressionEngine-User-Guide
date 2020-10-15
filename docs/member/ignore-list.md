<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Ignore List Tag

[TOC]

## Overview

The Ignore List Tag allows you to display member profile information for members in a member's Ignore List. Fields can either be shown from the ignore list of currently logged-in user or from a specified user.

NOTE: **Important:** Avoid using Template Caching on any Template containing this tag. If you do not avoid caching, then data will not be dynamic for each user. Instead, whoever happens to load the page when it is cached will have their information shown for everyone until the cache expires. Unlike this tag, [Global Variables](templates/globals/single-variables.md) can be used in templates that are cached.

    {exp:member:ignore_list}
      <p>{ignore_screen_name}</p>
    {/exp:member:ignore_list}

### Parameters

### `member_id=`

    member_id="147"

You can specify a particular member's information to display. By default (if you do not include the member_id parameter), the tag will simply display information pertaining to the currently logged-in user.

### Variables

The following member variables are available. The unique prefix "ignore\_" ensures that the Ignore List variables do not conflict with Global Variables or member variables from other tags.

- {ignore_member_id}
- {ignore_group_id}
- {ignore_group_description}
- {ignore_username}
- {ignore_screen_name}
- {ignore_email}
- {ignore_ip_address}
- {ignore_location}
- {ignore_total_entries}
- {ignore_total_comments}
- {ignore_private_messages}
- {ignore_total_forum_topics}
- {ignore_total_forum_replies}
- {ignore_total_forum_posts}
