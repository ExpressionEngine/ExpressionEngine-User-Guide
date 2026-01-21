<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Category Archive Tag

[TOC]

## Overview

This tag allows you to show your channel entry titles organized by category in a master archive that looks like this

    <h3>Category One</h3>
    <a href="www.mysite.com/1/">title one</a><br />
    <a href="www.mysite.com/2/">title two</a><br />
    <a href="www.mysite.com/3/">title three</a><br />

    <h3>Category Two</h3>
    <a href="www.mysite.com/4/">title one</a><br />
    <a href="www.mysite.com/5/">title two</a><br />
    <a href="www.mysite.com/6/">title three</a><br />

    <h3>Category Three</h3>
    <a href="www.mysite.com/7/">title one</a><br />
    <a href="www.mysite.com/8/">title two</a><br />
    <a href="www.mysite.com/9/">title three</a><br />

    etc...

Here is an example, showing how the ExpressionEngine tags are used to generate this type of list:

    {exp:channel:category_archive channel="default_site" style="linear"}
        {categories}
            <h3>{category_name}</h3>
            {if category_description}
                <p>{category_description}</p>
            {/if}
        {/categories}
        {entry_titles}
            <a href="{path='SITE_INDEX'}">{title}</a><br />
        {/entry_titles}
    {/exp:channel:category_archive}

NOTE: **Note:** Once you have hundreds of channel entries, it might become cumbersome to use this tag on your page.

## Parameters

[TOC=3 hide]

### `backspace=`

    backspace="7"

Backspacing removes characters (including spaces and line breaks) from the last iteration of the loop. For example, if you put a &lt;br /&gt; tag after each listed entry you'll have something like this:

    <h3>Category one</h3>
    <a href="www.mysite.com/1/">title one</a><br />
    <a href="www.mysite.com/2/">title two</a><br />
    <h3>Category two</h3>
    <a href="www.mysite.com/6/">title one</a><br />
    <a href="www.mysite.com/7/">title two</a><br />

You might not want the &lt;br /&gt; tag after the final item. Simply count the number of characters (including spaces and line breaks) you want to remove and add the backspace parameter to the tag. The &lt;br /&gt; tag has 6 characters plus a new line character, so you would do this:

    {exp:channel:category_archive channel="default_site" style="linear" backspace="7"}
        {categories}
            <h3>{category_name}</h3>
        {/categories}
        {entry_titles}
            <a href="{path='SITE_INDEX'}">{title}</a><br />
        {/entry_titles}
    {/exp:channel:category_archive}

That will produce code like this:

    <h3>Category one</h3>
    <a href="www.mysite.com/1/">title one</a><br />
    <a href="www.mysite.com/2/">title two</a><br />
    <h3>Category two</h3>
    <a href="www.mysite.com/6/">title one</a><br />
    <a href="www.mysite.com/7/">title two</a>

The "backspace" parameter is only allowed if you are using the "linear" style. It is not applicable if you use the "nested" style for the display of the list.

### `category_group=`

    category_group="2"

Category Groups are specified by ID number (the ID number of each [category group](control-panel/categories.md) is displayed in the Control Panel). The reason we use the ID is because category groups can be called anything (with spaces, quotes, etc.), and also renamed. It would be much more difficult to have to update the tag parameters every time you updated a category name.

And as with many other parameters, you can stack category groups

    category_group="1|2|4"

Or use "not" to exclude categories

    category_group="not 2"

### `channel=`

    channel="channel"

This indicates the name of the channel that the categories are assigned to. The channel parameter is **required** unless you only have a single channel. Multiple channels may also be specified.

### `class=`

    class="my_custom_class"

When using the "nested" style of display (see the [style=](#style) parameter), this lets you specify the value of the "class" attribute in the opening &lt;ul&gt; tag. The default value is "nav_cat_archive".

### `disable=`

    disable="category_fields"

The disable= parameter allows you to turn off aspects of the tag that you might not be using in order to improve performance. Valid options are:

- category_fields

### `id=`

    id="my_custom_id"

When using the "nested" style of display (see the [style=](#style) parameter), this lets you specify the value of the "id" attribute in the opening &lt;ul&gt; tag. The default value is "nav_cat_archive".

For instance, if you set the parameter as id="my_custom_id", then the beginning of the nested category output would be:

    <ul id="my_custom_id">

### `orderby=`

    orderby="date"

The "order" parameter sets the display order of the entries. Setting options for this parameter include:

- orderby="date"
- orderby="title"
- orderby="comment"
- orderby="most_recent_comment"

If this parameter is not set, it will default to ordering by the title.

### `show=`

    show="4|7"

With this parameter, you can specify which categories will be included in the list. For instance, if you wanted to keep a particular category from being listed you could specify only those you wanted displayed to be included. Category IDs are separated by the pipe character to specify more than one category.

You may alternatively specify which categories to not show:

    show="not 3|6|8"

### `show_empty=`

    show_empty="no"

This parameter determines whether or not categories that contain no entries are displayed. If you set the parameter to "no" then categories which do not contain any entries will not be included in the list.

By default, categories with no entries **will** be included.

### `show_future_entries=`

    show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to be included. This option is useful when doing things like creating a list of events, some of which have not occurred yet.

### `show_offline_sites=`

    show_offline_sites="no"

When this option is set to "no", entries from MSM sites that are set to "offline" will not be included in the results. The default is "yes", which includes entries from offline sites.


### `sort=`

    sort="asc"

    sort="desc"

The sort order can be "asc" (ascending order or "oldest item first") or "desc" (descending order or "newest item first"). If you do not use a sort order the default is desc.

NOTE: **Note:** The order of the categories will always follow the Category Order specified in the control panel. The only things the sort parameter changes is the order of the _entries_ within each category.

### `status=`

    status="open"

You may restrict to entries with a particular [status](control-panel/channels.md#statuses-tab). You can choose multiple statuses using a pipe:

    status="draft|reviewed|published"

Or exclude statuses using "not"

    status="not submitted|processing|closed"

### `sticky=`

    sticky="no"

By default, the sticky parameter makes no difference on entries sorting. 
Options:
* `sticky="no"` - no effect (default)
* `sticky="yes"` - manually turn on sticky entries
* `sticky="only"` - only "sticky" entries are included in the results

### `style=`

    style="linear"

There are two list "styles" for your categories: "nested" and "linear".

By default, the category list is displayed fully "nested" to show the parent/child hierarchy between the categories. It will display the categories as nested "unordered lists" and will automatically enclose the contents in `<li>` tags and nest them correctly to show the hierarchy. This can be used to create cascade menus.

    <nav class="header-nav">
        {exp:channel:category_archive show_empty="no" disable="category_fields"
        style="nested" category_group="7" class="header-nav__list"}
            {categories}
                {category_name}
            {/categories}

            {entry_titles}
                <a
                    id="entry--{entry_id}"
                    href="{channel_url}/{url_title}"
                >{title}</a>
                <small id="{channel_id}" class="channel--{channel_short_name}">
                    {channel}
                </small>
            {/entry_titles}
        {/exp:channel:category_archive}
    </nav>

When using the "nested" style of display, the opening &lt;ul&gt; tag of the list will have an id of "nav_cat_archive" applied to it. This can be used as a selector for javascript or CSS to create expanding lists or menus.

    <ul id="nav_cat_archive">

The list can also be shown in a flat "linear" style.

For more information about how this option works see the parameter description on the [Channel Categories](channels/categories.md) page.

## Categories Variables

[TOC=3 hide]

There are several variables available for use inside the `{categories}{/categories}` variable pair.

### `{active}`

    {categories}
    	{if active} This category is active {/if}
    {/categories}

You may use this conditional to test whether the category shown is the active category or not, based on the dynamic URI segment.

### `{has_children}`

    {categories}
        <a href="{path='channel/index'}">{category_name}</a>

        {if has_children}
            <button
                type="button"
                aria-haspopup="true"
            >children categories</button>
        {/if}
    {/categories}
You may use this conditional to test whether the category shown is or isn't a parent category.

### `{category_description}`

    {categories}
        <p>{category_description}</p>
    {/categories}

This displays the content of the "category description" field associated with the category. The variable may also be wrapped in a conditional statement so that it only displays if there is content in the field:

    {categories}
        {if category_description}{category_description}{/if}
    {/categories}

### `{category_id}`

The category ID associated with the category.

### `{parent_id}`

The category ID associated with the category's parent (or 0 in the case of a top level category).

### `{category_image}`

The image link (or other information) you can optionally store with each category within the Control Panel.

### `{category_name}`

    {categories}
        <h3>{category_name}</h3>
    {/categories}

This displays the name of the category.

### `{category_url_title}`

This variable displays the URL title of the category:

### `{path}`

    {categories}
        <a href="{path='site/categories'}">{category_name}</a>
    {/categories}

The path (template_group/template) is used to create a URL to display a list of the entries belonging to this category.

    <a href="{path='site/categories'}">{category_name}</a>

You can also use SITE_INDEX in your path to point to your main site index page. If you show your categories on your home page, using SITE_INDEX is preferable since it will make the URL cleaner.

    <a href="{path='SITE_INDEX'}">{category_name}</a>

### Custom Category Fields

All custom fields assigned to a category can be accessed using the "short name" of the field

    {class} {extended_description} {category_name_fr} etc..

These are totally dynamic in that any field you create for your category will automatically be available by its "short name" as a variable.

## Entry Titles Variables

[TOC=3 hide]

There are several variables available for use inside the `{entry_titles}{/entry_titles}` variable pair.

### `{channel_id}`

    {channel_id}

The ID of the channel the current entry belongs to.

### `{channel_short_name}`

    {channel_short_name}

The [short name of the channel](control-panel/channels.md#channel-tab) the current entry belongs to.

### `{channel}`

    {channel}

The [name of the channel](control-panel/channels.md#channel-tab) the current entry belongs to.

### `{channel_url}`

    {channel_url}

The [URL of the channel](control-panel/channels.md#settings-tab) the current entry belongs to, set on Control Panel.

### `{entry_date}`

    {entry_date format="%Y %m %d"}

The date the entry was submitted.

### `{entry_id}`

The ID number of the channel entry.

### `{entry_id_path}`

    {entry_titles}
        <a href="{entry_id_path='site/index'}">{title}</a>
    {/entry_titles}

The path (`template_group/template`) is used to create a URL to display this entry. This variable uses the entry's id number in the URL. This is typically used within a standard HTML link tag

    <a href="{entry_id_path='site/index'}">{title}</a>

You can also use SITE_INDEX in your path to point to your main site index page. If you show your channel on your home page, using SITE_INDEX is preferable since it will make the URL cleaner.

    <a href="{entry_id_path='SITE_INDEX'}">{title}</a>

### `{page_uri}`

If you have the Pages Module installed and if you have associated a static page with a channel entry (via the "Pages" section of the Publish tab), this is the page uri for the page.

### `{page_url}`

If you have the Pages Module installed and if you have associated a static page with a channel entry (via the "Pages" section of the Publish tab), this is the page url for the page (the site URL + the page URI).

### `{path}`

    {entry_titles} <a href="{path='site/index'}">{title}</a> {/entry_titles}

The path (template_group/template) is used to create a URL to display this entry. This variable uses the entry's url_title in the URL. This is typically used within a standard HTML link tag.

    <a href="{path='site/index'}">{title}</a>

You can also use SITE_INDEX in your path to point to your main site index page. If you show your channel on your home page, using SITE_INDEX is preferable since it will make the URL cleaner.

    <a href="{path='SITE_INDEX'}">{title}</a>

### `{title}`

    {entry_titles} {title} {/entry_titles}

This variable is replaced by the title of the entry.

### `{url_title}`

The human readable title used in the URL as a permalink.
