<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Categories Tag

[TOC]

## Overview

The Channel Categories tag enables you to show your Categories in a list. Here is the basic syntax:

    {exp:channel:categories}
        {category_name}
    {/exp:channel:categories}

Everything contained between the opening and closing tag will be repeated for each category, so if you want to wrap each category with some markup you'll do this:

    {exp:channel:categories}
        <a href="{path='channel/index'}">{category_name}</a>
        {if category_description}{category_description}{/if}
    {/exp:channel:categories}

## Parameters

[TOC=3]

### `backspace=`

    backspace="5"

Backspacing removes characters (including spaces and line breaks) from the last iteration of the loop. For example, if you put a &lt;br&gt; tag after each category you'll have this

    Local News<br>
    Health News<br>
    Science News<br>

You might, however, not want the &lt;br&gt; tag after the final item. Simply count the number of characters (including spaces and line breaks) you want to remove and add the backspace parameter to the tag. The &lt;br&gt; tag has 4 characters plus a new line character, so you would do this

    {exp:channel:categories style="linear" backspace="5"}
        {category_name}<br>
    {/exp:channel:categories}

That will produce code like:

    Local News<br>
    Health News<br>
    Science News

The "backspace" parameter is only allowed if you are using the "linear" style. It is not applicable if you use the "nested" style for the display of the list.

### `category_group=`

    category_group="2"

Category Groups are specified by ID number (the ID number of each [category group](control-panel/categories.md) is displayed in the Control Panel). The reason we use the ID is because category groups can be called anything (with spaces, quotes, etc.), and also renamed. It would be much more difficult to have to update the tag parameters every time you updated a category name.

And as with many other parameters, you can stack category groups

    category_group="1|2|4"

Or use "not" to exclude categories

    category_group="not 2"

### `channel=`

    channel="channel_name"

The name (short name) of the channel that the categories are assigned to. This variable is **required** unless you only have a single channel. Multiple channels may also be specified.

You must specify this parameter if you use the [category name in URL](control-panel/settings/urls.md#category-url-segment) feature.

### `class=`

    class="my_custom_class"

When using the "nested" style of display (see the [style=](#style) parameter), this lets you specify the value of the "class" attribute in the opening &lt;ul&gt; tag. The default value is "nav_categories".

For instance, if you set the parameter as class="my_custom_class", then the beginning of the nested category output would be

    <ul class="my_custom_class">

### `disable=`

    disable="category_fields"

The disable= parameter allows you to turn off aspects of the tag that you might not be using in order to improve performance. Valid options are:

- category_fields

### `id=`

    id="my_custom_id"

When using the "nested" style of display (see the [style=](#style) parameter), this lets you specify the value of the "id" attribute in the opening &lt;ul&gt; tag. The default value is "nav_categories".

For instance, if you set the parameter as id="my_custom_id", then the beginning of the nested category output would be

    <ul id="my_custom_id">

### `parent_only=`

    parent_only="yes"

This parameter allows you to limit the category display to only "parent" categories; no sub-categories will be displayed.

### `restrict_channel=`

    restrict_channel="no"

This parameter may be used to alter the behavior of the [show_empty parameter](#show_empty) and has no effect unless that parameter is set to not show empty categories. When restrict_channel is set to "no", the show_empty parameter will display categories that have no entries from all channels, rather than categories that have no entries from the specified channel. By default, the empty categories shown will be restricted to the specified channel.

### `show=`

    show="4|7"

With this parameter, you can specify which categories will be included in the list. For instance, if you wanted to keep a particular category from being listed you could specify only those you wanted displayed to be included. Category IDs are separated by the pipe character to specify more than one category. If you specify a child category be shown, you must also include its parent category to be shown.

You may alternatively specify which categories to not show

    show="not 3|6|8"

If you specify that a parent category is not shown, then any children of that parent category are then unable to be shown by the tag. The parent category is required for any and all children categories.

### `show_empty=`

    show_empty="no"

This parameter determines whether or not categories that contain no entries for the specific channel are displayed. If you set the parameter to "no" then categories which do not contain entries will not be included in the list. If you want only categories that have no entries assigned from **any** channels, use the [restrict_channel parameter](#restrict_channel) in conjunction with show_empty

By default, categories with no entries **will** be included.

### `show_expired=`

    show_expired="yes"

Determines whether expired entries are included when calculating whether a category has entries when the [show_empty parameter](#show_empty) is set to not show empty categories.

By default, expired entries will **not** count when determining whether a category is empty.

### `show_future_entries=`

    show_future_entries="yes"

Determines whether entries dated in the "future" to are included when calculating whether a category has entries when the [show_empty parameter](#show_empty) is set to not show empty categories.

By default, future dated entries will **not** count when determining whether a category is empty.

### `show_offline_sites=`

    show_offline_sites="no"

When this option is set to "no", entries from MSM sites that are set to "offline" will not be included in the results. The default is "yes", which includes entries from offline sites.

### `status=`

    status="open"

You may restrict to categories with entries with a particular [status](control-panel/channels.md#statuses-tab). The two statuses "open" and "closed" are default statuses that are always available, so you can always specify those if needed. You can choose multiple statuses using a pipe

    status="draft|reviewed|published"

Or exclude statuses using "not"

    status="not submitted|processing|closed"

By default, the Categories tag will display categories that contain any entries with a status _other than_ closed. This parameter has no effect unless the [show_empty parameter](#show_empty) is set to not show empty categories.

### `style=`

    style="nested"

There are two list "styles" for your categories: "nested" and "linear".

A "nested" category is one that shows the parent/child hierarchy. It will display the categories as nested "unordered lists" and will automatically enclose the contents in &lt;li&gt; tags and nest them correctly to show the hierarchy:

    <ul id="nav_categories">
      <li>News
        <ul>
          <li>Regional</li>
          <li>World</li>
        </ul>
        </li>
      <li>Sports
        <ul>
          <li>National
            <ul>
              <li>Football</li>
              <li>Basketball
                <ul>
                  <li>Lakers</li>
                  <li>Knicks</li>
                </ul>
                </li>
            </ul>
            </li>
        </ul>
        </li>
    </ul>

A "linear" category is one that shows a pure list with no HTML inserted

    News Regional World Sports National Football Basketball Lakers Knicks

By default, if you do not specify the "style" parameter then you will get a "nested" list.

When using the "nested" style of display, the opening &lt;ul&gt; tag of the list will have an id of "nav_categories" applied to it. This can be used as a selector for javascript or CSS to create expanding lists or menus. You may change this by using the [id=](#id) parameter.

## Variables

[TOC=3]

### `{category_description}`

This variable simply displays the content from the "category description" field. The variable may also be wrapped in a conditional statement so that it only displays if there is content in the field

    {if category_description}{category_description}{/if}

### `{category_id}`

The category ID associated with the category.

### `{parent_id}`

The category ID associated with the category's parent (or 0 in the case of a top level category).

### `{category_image}`

The image link (or other information) you can optionally store with each category within the Control Panel.

### `{category_name}`

This variable simply displays the name of the category.

### `{category_url_title}`

This variable displays the URL title of the category

### `{count}`

The "count" out of the current categories being displayed. If five categories are being displayed, then for the fourth category the {count} variable would have a value of "4".

### path=

    {path='template_group/template'}

The path (template_group/template) where you want to show the categories. This is typically used within a standard HTML link tag

    <a href="{path='channel/index'}">{category_name}</a>

You can also use SITE_INDEX in your path to point to your main site index page. If you show your channel on your home page, using SITE_INDEX is preferable since it will make the URL cleaner.

    <a href="{path='SITE_INDEX'}">{category_name}</a>

### `{total_results}`

The total number of categories being displayed.

### Custom Category Fields

All custom fields assigned to a category can be accessed using the "short name" of the field:

    {class} {extended_description} {category_name_fr} etc..

These are totally dynamic in that any field you create for your category will automatically be available by its "short name" as a variable.

## Conditional Variables

### `{active}`

    <a href="{path='news/index'}"{if active} class="active"{/if}>{category_name}</a>

You may use this conditional to test whether the category shown is the active category or not, based on the dynamic URI segment.

### `{has_children}`

    {exp:channel:categories channel="news" style="nested" show_empty="no"}
        <a href="{path='channel/index'}">{category_name}</a>

        {if has_children}
            <button
                type="button"
                aria-haspopup="true"
            >children categories</button>
        {/if}
    {/exp:channel:categories}
You may use this conditional to test whether the category shown is or isn't a parent category.

## Category Dropdown Menu

You can also display categories in a dropdown menu using the following code:

    <form name="catmenu" action="">
        <select name="selcat" onchange="location=document.catmenu.selcat.options[document.catmenu.selcat.selectedIndex].value;">
            <option value="">--Select Category--</option>
            {exp:channel:categories channel="yourchannel" style="linear"}
                <option value="{path='channel'}">{category_name}</option>
            {/exp:channel:categories}
        </select>
    </form>

## Examples

Here are a few examples of the categories tag in use

    {exp:channel:categories channel="news" style="linear" backspace="7"}
        <a href="{path='news/entry'}">{category_name}</a><br />
    {/exp:channel:categories}

This code would create a list of the categories in the "news" channel and link to the "news/entry" Template. It would also remove the &lt;br /&gt; from the last entry.

    {exp:channel:categories channel="politics" style="nested"}
        <a href="{path='SITE_INDEX'}">{category_name}</a>
    {/exp:channel:categories}

This code would create a nested, unordered list of the categories from the "politics" channel as links to the main channel page.
