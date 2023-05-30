<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Next/Previous Entry Linking

[TOC]

## Overview

The Next and Previous entry links allow you to generate links to the next or previous channel entry, based on the date of the entry.

NOTE: **Note:** These links can **only** be used on pages displaying a single entry, such as a "comment" page, since they are designed to provide navigation from one entry to another.

These tags work as tag pairs so that they will conditionally show the content between the pair if there is a next (or previous) entry.

    {exp:channel:next_entry channel="news"}
        <p>Next entry: <a href="{path='news/article'}">{title}</a></p>
    {/exp:channel:next_entry}

    {exp:channel:prev_entry channel="news"}
        <p>Previous entry: <a href="{path='news/article'}">{title}</a></p>
    {/exp:channel:prev_entry}

NOTE: **Important:** These tags **cannot** be placed inside your main Channel Entries Tag. They must be placed outside of the Channel Entries tag in order to work correctly.

If you are viewing the most recent entry in your channel, then the "next_entry" tag's contents will not be shown (since there is no "next entry"). Likewise, when you are viewing the oldest/first entry in the channel the "previous_entry" content will not be shown.

## Parameters

[TOC=3]

### `category=`

    category="2"

Categories are specified by ID number (the ID number of each [category](control-panel/categories.md) is displayed in the Control Panel). The reason we use the ID is because categories can be called anything (with spaces, quotes, etc.), and also renamed. It would be much more difficult to have to update the tag parameters every time you updated a category name. Further, you can have multiple categories with the same name either in different Category Groups or in different parts of the hierarchy within the same Category Group.

And as with some of the other parameters, you can stack categories to get entries with any of those categories:

    category="2|45|4|9"

Or use "not" to exclude categories

    category="not 4|5|7"

And, you can use an inclusive stack to only get entries with _all_ of the categories:

    category="3&7&8"

Or you can negate the inclusive stack and get entries that do not of _all_ of those categories:

    category="not 3&5"

NOTE: **Note:** When you use the category="3|4" parameter (not excluding), you are implicitly telling ExpressionEngine to only deal with entries that have been assigned one or more categories. If you have entries that haven't been categorized then they will be ignored and not included in the results. However, if you are using exclusion (`category="not 3|4"`), then you will be shown all entries without those categories _including_ those without any categories assigned. To change this behavior when excluding categories use the `channel_entries_uncategorized_entries` parameter.

### `category_group=`

    category_group="2"

Category Groups are specified by ID number (the ID number of each [category group](control-panel/categories.md) is displayed in the Control Panel). The reason we use the ID is because category groups can be called anything (with spaces, quotes, etc.), and also renamed. It would be much more difficult to have to update the tag parameters every time you updated a category name.

And as with some of the other parameters, you can stack category groups:

    category_group="1|2|4"

Or use "not" to exclude categories

    category_group="not 2"

### `channel=`

    channel="news"

You can restrict the cycle to a specific channel. You may also specify multiple channels by using the pipe character:

    channel="channel1|channel2|channel3"

Or you can exclude channels by including the word "not" followed by a space:

    channel="not channel4|channel5"

### `entry_id=`

    entry_id="12"

You can limit the tag to specific entries, or more practically, you can omit specific entries from showing up in the cycle, by using "not":

    entry_id="not 2|9|23|50"

The above example would ignore entries 2, 9, 23, and 50.

### `show_expired=`

    show_expired="yes"

You can determine whether you wish for entries that have "expired" to be included.

### `show_future_entries=`

    show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to be included. This option is useful when doing things like creating a list of events, some of which have not occurred yet.

### `status=`

    status="open"

You may restrict to entries assigned to a particular [status](control-panel/channels.md#statuses-tab). You can choose multiple statuses using a pipe:

    status="draft|reviewed|published"

Or exclude statuses using "not"

    status="not submitted|processing|closed"

### `url_title=`

    url_title="{segment_4}"

You may specify the URL title in which the module uses as a reference for next and previous entries. This is useful when a custom URL structure is being used and the module has trouble detecting the URL title automatically.

## Variables

[TOC=3]

### `{channel}`

The title of the channel the entry is in.

### `{channel_short_name}`

The short name of the channel the entry is in.

### `{channel_url}`

The URL of the channel the entry is in.

### `{comment_entry_id_auto_path}`

This variable is replaced by the URL set in the "Comment Page URL" preference under Admin &gt; Channel Management. The ID number of the entry will be automatically added. For example, this:

    <a href="{comment_entry_id_auto_path}">Next entry</a>

Would be rendered like this:

    <a href="https://example.com/channel/comments/234/">Next entry</a>

### `{comment_url_title_auto_path}`

This variable is replaced by the URL set in the "Comment Page URL" preference under Admin &gt; Channel Management. The URL Title of the entry will be automatically added. For example, this:

    <a href="{comment_url_title_auto_path}">Next entry</a>

Would be rendered like this:

    <a href="https://example.com/channel/comments/ice_cream/">Next entry</a>

### `{entry_id}`

The ID number of the channel entry.

### `{id_path}`

    {id_path='template_group/template'}

The path (template_group/template) where you want to show the entry. The ID number of the entry will be automatically added instead of the entry's url_title. This is typically used within a standard HTML link tag:

    <a href="{id_path='site/index'}">{title}</a>

You can also use SITE_INDEX in your path to point to your main site index page. If you show your channel on your home page, using SITE_INDEX is preferable since it will make the URL cleaner.

    <a href="{path='SITE_INDEX'}">{title}</a>

### `{path}`

    {path='template_group/template'}

The path (template_group/template) where you want to show the entry. This is typically used within a standard HTML link tag:

    <a href="{path='site/index'}">{title}</a>

You can also use SITE_INDEX in your path to point to your main site index page. If you show your channel on your home page, using SITE_INDEX is preferable since it will make the URL cleaner.

    <a href="{path='SITE_INDEX'}">{title}</a>

### `{title}`

This variable simply displays the title of the entry.

### `{url_title}`

The human readable title used in the URL as a permalink.
