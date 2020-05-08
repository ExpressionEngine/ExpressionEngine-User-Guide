<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Forum Helper

[TOC]

The forum helper tag allows you to display the status of recent support forum posts in your standard Templates. You could use this to list recent threads in a sidebar on your site's main page, for instance.

NOTE: **Note:** This tag is for use in any of your ExpressionEngine templates that are accessible via the TEMPLATES page in the control panel. It is not available for use in your forum templates. If you would like to show the support helper in your forum templates please use the **{include:support_helper}** tag, which corresponds to the Archive Template: "Support Helper Tables".

At its simplest, posts to support forums can be displayed along with the current reply status, making it easy for users to identify recent posts that have not been successfully solved or replied to by staff:

    <table>
        <tr>
            <td>Title</td>
            <td>Status</td>
            <td>Last reply</td>
        </tr>
        {exp:forum:forum_helper orderby="post_date" sort="desc" limit="50"}
            <tr>
                <td><a href="{thread_path='forums/viewthread'}">{title}</a></td>
                <td>{"status"}</td>
                <td>
                    Last response: {last_post_date format="%m/%d/%Y %h:%i %a"}<br />
                    By: <a href="{last_author_profile_path='forums/member'}">{last_author}</a>
                </td>
            </tr>
        {/exp:forum:topic_titles}
    </table>

You can also break out the different statuses into their own display grids using variable pairs:

    {exp:forum:forum_helper orderby="post_date" sort="desc" limit="50"}
        {status_group status="new"}
            {status_header}
                <h2>{status}<h2>
                <table>
                    <tr>
                        <td>Title</td>
                        <td>Last reply</td>
                    </tr>
            {/status_header}
                    <tr>
                        <td><a href="{thread_path='forums/viewthread'}">{title}</a></td>
                        <td>
                            Last response: {last_post_date format="%m/%d/%Y %h:%i %a"}<br />
                            By: <a href="{last_author_profile_path='forums/member'}">{last_author}</a></td>
                        </tr>
            {status_footer}
                </table>
            {/status_footer}
        {/status_group}
        {status_group status="not new"}
            {status_header}
                <h2>{status}<h2>
                <table>
                    <tr>
                        <td>Title</td>
                        <td>Status</td>
                        <td>Last reply</td>
                    </tr>
            {/status_header}
                    <tr>
                        <td><a href="{thread_path='forums/viewthread'}">{title}</a></td>
                        <td>{status}</td>
                        <td>
                            Last response: {last_post_date format="%m/%d/%Y %h:%i %a"}<br />
                            By: <a href="{last_author_profile_path='forums/member'}">{last_author}</a>
                        </td>
                    </tr>
            {status_footer}
                </table>
            {/status_footer}
        {/status_group}
    {/exp:forum:forum_helper}

## Parameters

[TOC=3]

### `boards=`

    boards="2"

Allows you to specify which boards to pull topics from by Board ID number. Board ID 1 will be used if no value is specified.

As with many other parameters that use ID specification, you can stack boards to get topics from any number of boards:

    boards="2|3|4"

Or use "not" to exclude boards:

    boards="not 1|4"

### `forums=`

    forums="3"

Allows you to specify which forums to pull topics from by Forum ID number. If no value is specified, the Topic Titles tag will pull from all forums in the specified boards.

As with many other parameters that use ID specification, you can stack forums to get topics from specific forums only:

    forums="3|14|16"

Or use "not" to exclude forums:

    forums="not 9|12"

### `limit=`

    limit="30"

Allows you to limit the number of topics displayed. The limit will default to 10 topics if a value is not specified.

### `orderby=`

    orderby="post_date"

The "order" parameter sets the display order of the forum topics. Setting options for this parameter include:

- orderby="post_date"
- orderby="recent_post"
- orderby="title"

### `sort=`

    sort="asc"
    sort="desc"

The sort order can be "asc" (ascending order or "oldest item first" for dates) or "desc" (descending order or "newest item first" for dates). If you do not use a sort order the default is desc.

### `status=`

    status="awaiting_staff"

Allows you to specify the statuses to include. The default will be 'new' if a value is not specified.

## Variables

[TOC=3]

### `{author}`

The screen name of the thread author.

### `{auto_thread_path}`

This variable is replaced by a path built with the URL set in the "Forum URL" general preference setting for the board that the topic belongs to. For example, this:

    <a href="{auto_thread_path}">{title}</a>

Would be rendered like this:

    <a href="https://example.com/forums/viewthread/11245/">My forum topic</a>

### `{board_label}`

The name of the board the topic belongs to, taken from the "Forum Board Label" general preference setting.

### `{board_name}`

The short name of the board the topic belongs to, taken from the "Forum Board Short Name" general preference setting.

### `{body}`

The contents of the topic.

NOTE: **Note:** This variable will use the formatting preferences of the forum that the topic belongs to.

### `{forum_name}`

The Forum Name of the specific forum that the topic belongs to.

### `{forum_url}`

This variable is replaced with the URL set in the "Forum URL" general preference setting for the board that the topic belongs to.

### `{last_author}`

The screen name of the most recent user to leave a reply in the thread. If there are no replies then the last author will be the author of the thread itself.

### `{last_author_profile_path='forums/member'}`

The URL to the member profile for the last user to leave a reply in the thread. If there are no replies then it will be for the author of the thread itself. For example, this:

    <a href="{last_author_profile_path='forums/member'}">{last_author}</a>

Would be rendered like this:

    <a href="https://example.com/forums/member/147/">Fred Smith</a>

### `{last_post_date}`

    {last_post_date format="%m/%d/%Y %h:%i %a"}

The date on which the last (most recent) post in the thread was made. As with other date variables, these require the "format" parameter in order to define how the date should be displayed. See the [date variable formatting](templates/date-variable-formatting.md) page for more information.

### `{last_post_id}`

The id of the last reply made to the thread. Will hold a value of 0 if no replies have been made. Can be used to build links to the last reply, e.g.:

    <a href="{forum_url}viewreply/{last_post_id}/">View latest reply</a>

### `{last_post_relative_date}`

The date on which the last (most recent) post in the thread was made, displayed relative to the current time. For instance, if you used this:

    Posted {last_post_relative_date} ago

It might be displayed as:

    Posted 1 hour and 23 minutes ago

### `{last_reply}`

If available, the contents of the most recent reply to the thread.

NOTE: **Note:** This variable will use the formatting preferences of the forum that the topic belongs to.

### `{profile_path}`

    {profile_path='forums/member'}

The URL to the member profile of the thread author. For example, this:

    <a href="{profile_path='forums/member'}">{author}</a>

Would be rendered like this:

    <a href="https://example.com/forums/member/147/">Fred Smith</a>

### `{status}`

The current status of the post.

### `{thread_path}`

    {thread_path='forums/viewthread'}

The URL to the thread at the specified Template. For example, this:

    <a href="{thread_path='forums/viewthread'}">{title}</a>

Would be rendered like this:

    <a href="https://example.com/forums/viewthread/42/">My Forum Thread</a>

### `{title}`

The title for the thread.

### `{topic_date}`

    {topic_date format="%m/%d/%Y %h:%i %a"}

The date on which the thread was posted. As with other date variables, these require the "format" parameter in order to define how the date should be displayed. See the [date variable formatting](templates/date-variable-formatting.md) page for more information.

### `{topic_relative_date}`

The date on which the thread was posted, displayed relative to the current time. For instance, if you used this:

    Posted {topic_relative_date} ago

It might be displayed as:

    Posted 1 hour and 23 minutes ago
