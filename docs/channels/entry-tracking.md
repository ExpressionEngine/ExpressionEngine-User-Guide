<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Entry "Views" Tracking Tag

[TOC]

## Overview

ExpressionEngine lets you track how many times a channel entry has been "viewed" on a particular page. Up to four different instances of the view counter can be used (each on a different page), enabling you to track different aspects of an entry independently. For example you can use view counter "one" to track views on your comments page and view counter "two" to track views on your permalink page.

NOTE: **Note:** The view tracking counter works in conjunction with the `{exp:channel:entries}` tag. Although you can show the number of views in any instance of your channel entries tag, the counter will **only** increment on pages that show a **single-entry pages**. Single entry pages are ones that show only a single entry, specified dynamically by the ID number or URL Title in the URL, such as comment or permalink pages.

NOTE: **Note:** If you have page caching enabled this feature will not work.

Some people have tags that are used to mimic a single-entry page without it being dynamic (e.g. by using `dynamic="no"` parameter). If you need Entry View Tracking to work for ANY combination that results in only one entry being returned by the tag (including channel query caching), you would need to set the [`relaxed_track_views`](general/system-configuration-overrides.md#relaxed_track_views) configuration override if your config file.

## Tracking Views

The view tracking feature must be enabled in a specific instance of the `{exp:channel:entries}` tag using the `track_views` parameter. Within the `track_views` parameter you will indicate which one of the four "instances" of the view counter you would like to use, like this

    track_views="one"
    track_views="two"
    track_views="three"
    track_views="four"

Here is an example of the channel entries tag in which the parameter is enabling a view counter

    {exp:channel:entries channel="news" limit="1" track_views="one"}
        <h3>{title}</h3>
        {body}
        <div class="date">Posted on {entry_date format="%M %d, %Y"}</div>
    {/exp:channel:entries}

## Displaying Views

Each of the above four track_views parameters corresponds to these variables, which can be shown within any instance of a `{exp:channel:entries}` tag

    {view_count_one}
    {view_count_two}
    {view_count_three}
    {view_count_four}

Here is an example of the channel entries tag showing the number of views

    {exp:channel:entries channel="news" limit="15"}
        <h3>{title}</h3>
        {body}

        <div class="date">Posted on {entry_date format="%M %d, %Y"}</div>
        This entry has been viewed {view_count_one} times.
    {/exp:channel:entries}
