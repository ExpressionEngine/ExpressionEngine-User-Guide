<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Archive Month Links Tag

[TOC]

## Overview

The Archive Month Links tag displays a list of links for any months that contain Channel Entries. The links will point to your monthly archive page. The links created by the tag look like this:

- October, 2011
- September, 2011
- August, 2011
- July, 2011
- June, 2011

Here is the basic tag prototype:

    {exp:channel:month_links channel="news" limit="50"}
        {month}, {year}<br>
    {/exp:channel:month_links}

## Parameters

[TOC=3]

### `channel=`

    channel="news"

The name of the channel you want to limit the query to.

### `limit=`

    limit="10"

The number of rows to return.

### `sort=`

    sort="asc" sort="desc"

The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.

### `show_expired=`

    show_expired="yes"

You can determine whether you wish for entries that have "expired" to be included.

### `show_future_entries=`

    show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to be included. This option is useful when doing things like creating a list of events, some of which have not occurred yet.

### `show_offline_sites=`

    show_offline_sites="no"

When this option is set to "no", entries from MSM sites that are set to "offline" will not be included in the results. The default is "yes", which includes entries from offline sites.

### `status=`

    status="open"

You may restrict to entries with a particular [status](control-panel/channels.md#statuses-tab). The two statuses "open" and "closed" are default statuses that are always available, so you can always specify those if needed. You can choose multiple statuses using a pipe:

    status="draft|reviewed|published"

Or exclude statuses using "not"

    status="not submitted|processing|closed"

## Variables

[TOC=3]

### `{month}`

Month, long format: September

### `{month_num}`

Month, numeric: 09

### `{month_short}`

Month, short format: Sep

### `{path}`

    {path='channel/archives'}

The URL to the specified template. The month/year part of the link will be added automatically.

For example, this

    <a href="{path='channel/archives'}">{month}, {year}</a>

Will be rendered like this

    <a href="example.com/channel/archives/2003/12/">December, 2003</a>

NOTE: **Note:** The path setting can optionally be enclosed in quotes

    {path='template_group/template_name'}

### `{year}`

Year, long format: 2003

### `{year_short}`

Year, short format: 03

## Variable Pairs

### `{year_heading}`

    {year_heading}
        <p>{year}</p>
    {/year_heading}

The year heading can be used to show information once for each year.
