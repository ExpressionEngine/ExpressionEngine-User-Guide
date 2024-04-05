<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Entries Tag

[TOC]

## Overview

The Channel Entries tag is the primary tag used within your [Templates](templates/overview.md) to show the content you create and edit via your Control Panel's `Create` or `Edit` section. It's the most powerful tag in ExpressionEngine, and the most commonly used since its main function is to retrieve and display your site's content.

The Channel Entries tag can display both multi-entry and single-entry content--that is, several entries on a page, or one specific entry. By default, Channel Entries will use [information in the URL](general/url-structure.md) to retrieve the right content. By using available parameters and variables (described below), Channel Entries can display content from categories, specific days, monthly archives, and more.

Let's look at a basic Channel Entries tag example:

    {exp:channel:entries channel="news" limit="10"}
        <h2>{title}</h2>
        {body}
    {/exp:channel:entries}

In the above example, everything between the opening and closing `{exp:channel:entries}` tags is repeated 10 times, once for each entry returned from the "News" channel.

The directives that tell the tag how to behave are **parameters**:

    channel="news"
    limit="10"

Within the opening and closing ExpressionEngine Tags are **variables**. `{title}` is replaced with the Title of each entry, and `{body}` is replaced with the content from the "Body" field of each entry.

## Parameters

[TOC=3 hide]

### `author_id=`

The `author_id=` parameter will limit the returned entries to the specified Member ID:

    author_id="1"

Use the pipe delimiter to specify multiple Member IDs:

    author_id="1|2|3"

Modify the parameter value using `not` to exclude Member IDs:

    author_id="not 1|2|3"

Use the `CURRENT_USER` token to limit entries to the currently logged-in user:

    author_id="CURRENT_USER"

NOTE: **Note:** `CURRENT_USER` will limit Channel Entries to return entries authored by the currently logged-in user. Users who are not logged-in will not see any output.

Use the `NOT_CURRENT_USER` token to limit entries **excluding** the currently logged in user:

    author_id="NOT_CURRENT_USER"

### `backspace=`

The `backspace=` parameter will remove characters, including spaces and line breaks, from the last iteration of the tag pair:

    backspace="7"

For example, if you use a `<br />` element after each entry, Channel Entries will output this markup:

    Entry 1<br />
    Entry 2<br />
    Entry 3<br />

However, you may not want the `<br />` element after the last entry. Count the number of characters, including spaces and line breaks and use the result as the value for the parameter. The example `<br />` element includes 6 characters and a line break, for a total of 7:

    {exp:channel:entries backspace="7"}
        {title}<br />
    {/exp:channel:entries}

Using `backspace=`, Channel Entries will output this markup:

    Entry 1<br />
    Entry 2<br />
    Entry 3

### `cache=, refresh=, cache_prefix=`

    cache="yes" refresh="60"

This parameter enables tag caching. Refresh is the number of minutes between cache refreshes.
By default, caches are separate for each loaded URI. If you need cache file to be shared between different pages, you can specify `cache_prefix="global"` parameter, where "global" can be replaced with any other unique cache prefix.

### `cat_limit=`

    cat_limit="30"

This parameter lets you set a different limit for the category display than the regular display. For example, let's say you normally only want 10 entries on your main channel page, but you want 100 entries shown when viewing a specific category. For that, you could do this:

    {exp:channel:entries limit="10" cat_limit="100"}

### `category=`

    category="2"

Categories are specified by ID number (the ID number of each category is displayed in the Control Panel). The reason we use the ID is because categories can be called anything (with spaces, quotes, etc.), and also renamed. It would be much more difficult to have to update the tag parameters every time you updated a category name. Further, you can have multiple categories with the same name either in different Category Groups or in different parts of the hierarchy within the same Category Group.

And as with some of the other parameters, you can stack categories to get entries with any of those categories

    category="2|45|4|9"

Or use "not" to exclude categories

    category="not 4|5|7"

And, you can use an inclusive stack to only get entries with _all_ of the categories

    category="3&7&8"

Or you can negate the inclusive stack and get entries that do not match _all_ of those categories

    category="not 3&5"

NOTE: **Note:** When you use the `category="3|4"` parameter (not excluding), you are implicitly telling ExpressionEngine to only deal with entries that have been assigned one or more categories. If you have entries that haven't been categorized then they will be ignored and not included in the results. However, if you are using exclusion (`category="not 3|4"`), then you will be shown all entries without those categories _including_ those without any categories assigned. To change this behavior when excluding categories use the [uncategorized_entries](#uncategorized_entries) parameter.

NOTE: **Note:** If you are using exclusion (`category="not 3|4"`) and an entry is in a category that is not excluded, the entry will be returned even if it also belongs to an excluded category.

NOTE: **Note:** Using this parameter will automatically cause ExpressionEngine to _ignore_ any category information specified via the URL. For instance, if you are on a "category page" (e.g. a `/C13/` segment in the URL) that will be completely ignored in favor of whatever you have specified via the parameter.

### `category_group=`

    category_group="2"

Category Groups are specified by ID number (the ID number of each [category group](control-panel/channels.md) is displayed in the Control Panel). The reason we use the ID is because category groups can be called anything (with spaces, quotes, etc.), and also renamed. It would be much more difficult to have to update the tag parameters every time you updated a category name.

And as with some of the other parameters, you can stack category groups

    category_group="1|2|4"

Or use "not" to exclude categories

    category_group="not 2"

NOTE: **Note:** Using this parameter will automatically cause ExpressionEngine to _ignore_ any category information specified via the URL. For instance, if you are on a "category page" (e.g. a `/C13/` segment in the URL) that will be completely ignored in favor of whatever you have specified via the parameter.

### `channel=`

    channel="news"

From which [channel](control-panel/channels.md) to show the entries (will show all channels if no channel is specified). Additionally, you can use the pipe character to separate multiple channels:

    channel="channel1|channel2|channel3"

Or you can add the word "not" (with a space after it) to exclude channels:

    channel="not channel1|channel2|channel3"

You must specify this parameter if you use the [category name in URL](control-panel/settings/content-design.md) feature.

### `disable=`

    disable="categories"

The disable= parameter allows you to turn off aspects of the tag that you might not be using in order to improve performance. The channel tag is designed to fetch a lot of information by default: Categories, channel fields, member data, etc. Depending on how you use the tag, some of this data may not be needed. Through the use of the "disable" parameter you can turn off aspects of the tag in order to make it more lightweight.

The syntax for the disable parameter is this: `disable="ITEM YOU WANT TO DISABLE"`. The following items can be turned off:

- `categories`
- `category_fields`
- `custom_fields`
- `member_data`
- `pagination`
- `relationships`
- `relationship_custom_fields`
- `relationship_categories`

NOTE: **Note:** If you disable categories, category fields will automatically be disabled.

You may specify multiple items to disable by separating them with the pipe character:

    disable="categories|member_data"

The best approach is to examine the data you are showing in each instance of the tag. If there is a type of data you are not utilizing, turn it off.

For example, let's say you are using an instance of your channel tag to show your 10 most recent entry titles:

    {exp:channel:entries orderby="date" sort="desc" limit="10"}
        <a href="{title_permalink='channel/comments'}">{title}</a><br>
    {/exp:channel:entries}

In this example you are only showing the title of your entries and nothing else; yet, the channel tag automatically fetches categories and other data. Using the disable= parameter you can turn off the unneeded features from being queried. In this case, you don't need any of the features that can be disabled.

    {exp:channel:entries orderby="date" sort="desc" limit="10" disable="categories|custom_fields|member_data|pagination"}
        <a href="{title_permalink='channel/comments'}">{title}</a><br>
    {/exp:channel:entries}

### `display_by=`

    display_by="month"

There are three optional "display types" that let you limit the display of your entries. If you **do not** use these parameters the default grouping is by "number".

These parameters interact with the "limit" parameter to tailor the number of entries per page. For example, if you want to show only the last month that contains entries you'll do this:

    display_by="month" limit="1"

At 12 AM on the first day of the month, based on your server time, the previous month will no longer be visible. If you want to show three months you'll do this:

    display_by="month" limit="3"

If you want to show only one day you'll do this:

    display_by="day" limit="1"

If you want to show 14 days you'll do this:

    display_by="day" limit="14"

These are all optional. If you do not use this parameter your entries will be limited by number. In other words:

    limit="20"

Will show 20 entries.

    display_by="week"

The `display_by="week"` parameter allows the displaying of entries by week. To simply show the last week that contains entries, you can use this:

    display_by="week" limit="1"

The `display_by="week"` parameter can be used with other parameters like [show_current_week=](#show_current_week), [start_day=](#start_day) and [week_sort=](#week_sort) to give more control over how the weeks are displayed and used with pagination.

For example, if you want to display the current week by default but also show entries in future weeks with pagination, you can use this:

    display_by="week" limit="1" show_future_entries="yes" show_current_week="yes"

NOTE: **Note:** The display_by parameter uses the last unit of time provided that has entries. If you `display_by="day"` then it will show the last day that has entries. If you `display_by="month"` combined with `limit="3"` then it will show the last 3 months with entries, even if these months are not consecutive.

This parameter uses UTC/GMT time and is not localized to the server or logged in user.

### `dynamic=`

    dynamic="no"

The channel display engine sets some parameters dynamically, based on what is in the URL. There are times, however, where you do not want the parameters affected by what the URL contains. To override the dynamic nature of the channel tag, use `dynamic="no"`.

This is often useful if you want to list entries in a "sidebar" on your site and have them always be the same ones regardless of which page on your site you visit (main page, archives, comments, etc.). By setting `dynamic="no"` you will ensure that the list is not affected by anything passed in the URL.

NOTE: **Note:** You may allow the tag to be sensitive to pagination data in the url by including the [paginate=](#paginate) parameter. If that tag is used in conjunction with the dynamic parameter, the tag will act dynamically for pagination data only.

### `dynamic_parameters=`

    dynamic_parameters="orderby|limit|sort"

The [Dynamic Parameters](#dynamic_parameters) feature permits a {exp:channel:entries} tag's parameters to be set "on the fly" using POST data submitted via a form. A practical use for this is to create some display options in a form on your page that your visitors can use to select their preferred page view.

NOTE: **Note:** This feature will only work if page caching is turned OFF for the template in which it is being used.

Every Parameter available to the channel tag can be set dynamically.

### `dynamic_start=`

    dynamic_start="yes"

This parameter is only used in the tag when used in an RSS/Atom feed. It will not do anything in any other circumstance. The default value is "no", so you must specify this parameter in order to take advantage of the feature.

When used in an RSS/Atom feed, this parameter allows ExpressionEngine to dynamically provide a starting date for the feed. This is used to allow EE to serve only _new_ content when it is requested by the feed via a RFC3229-compliant request ([RFC3229 info](https://tools.ietf.org/rfc/rfc3229.txt)).

### `entry_id=`

    entry_id="147"

You can hard code the channel tag to show a specific channel entry. You may also specify multiple entries by separating them with the pipe character:

    entry_id="13|42|147"

Or use "not" to exclude entries::

    entry_id="not 45|534|807"

If you set the entry_id parameter to no value, the parameter will be ignored.

### `entry_id_from=`

    entry_id_from="20"

This parameter is used together with [entry_id_to=](#entry_id_to) to designate a range of entries to display. This parameter indicates the beginning of the range. With the example above, the tag would begin displaying entries starting with entry ID 20.

### `entry_id_to=`

    entry_id_to="40"

This parameter is used together with [entry_id_from=](#entry_id_from) to designate a range of entries to display. This parameter indicates the end of the range. With the example above, the tag would stop displaying entries at entry ID 40.

### `fixed_order=`

    fixed_order="3|7|1"

You can hard code the channel entries tag to show entries in a specific order based on their entry ids. Entries will be displayed in the order specified in the pipe delimited list. In the example above, the three entries with id's 3, 7, and 1 would be displayed in that order.

If you wish, you can also cause the entries to be displayed in the _reverse_ of the order you specified. To do this, use the sort= param, setting it to 'desc':

    fixed_order="3|7|1" sort="desc"

In the above example, three entries would be displayed, in the order: 1, 7, and then 3.

NOTE: **Note:** Using this parameter will automatically constrain the entries tag to the entry id's you specify, effectively setting the [entry_id=](#entry_id) parameter to the same id's given to the `fixed_order=` parameter.

### `group_id=`

NOTE: We recommend using [primary_role_id=](#primary_role_id) parameter instead, which works the same but more clearly conveys that the filtering is happening on primary role ID.

    group_id="4"

You can decide from which Member Role (by specifying the role ID) you wish entries to be shown. If you choose "4", then only entries created by members of the Primary Role with the ID of 4 will be shown. You can choose multiple Roles using a pipe:

    group_id="2|3|4"

Or exclude role using "not"

    group_id="not 2|3|4"

### `limit=`

    limit="12"

This parameter limits the number of entries on any given page. The limit will default to 100 entries if a value is not specified. If you are using [pagination](templates/pagination.md) then this will determine the number of entries shown per page.

### `month_limit=`

    month_limit="30"

This parameter lets you set a different limit for the month display than the regular display. For example, let's say you normally only want 10 entries on your main channel page, but you want 100 entries shown when viewing a specific month. For that, you could do this:

    {exp:channel:entries limit="10" month_limit="100"}

### `offset=`

    offset="1"

This parameter offsets the display by X number of entries. For example, if you want to show all entries except the three latest ones, you would do this:

    offset="3"

### `orderby=`

    orderby="date"

The `orderby` parameter sets the display order of the entries. Setting options for this parameter include:

- `orderby="comment_total"`
- `orderby="date"`
- `orderby="edit_date"`
- `orderby="entry_id"`
- `orderby="expiration_date"`
- `orderby="most_recent_comment"`
- `orderby="random"`
- `orderby="screen_name"`
- `orderby="status"`
- `orderby="title"`
- `orderby="url_title"`
- `orderby="username"`
- `orderby="view_count_one"`
- `orderby="view_count_two"`
- `orderby="view_count_three"`
- `orderby="view_count_four"`

In addition you can order by a [channel field](control-panel/field-manager/field-manager-settings.md). Use the "short_name" of the field:

    orderby="name_of_field"

NOTE: **Note:** Ordering by a Relationship field will cause entries to appear in the order the relationships were made, not based on any content from the related entries.

NOTE: **Note:** **Random** ordered entries have special rules applied. "Sticky" entries will not appear first; they will appear randomly with all other entries. If the tag is not paginated, each page load, a new selection of random entries will be returned. If the tag **is** paginated, then the order of the entries is randomly set on the first page load and stored for the user's session so that entries show up only once in the paginated results.

**Multiple Orders and Sorts**

The [orderby=](#orderby) and [sort=](#sort) parameters can accept multiple values using the pipe character. This allows you to have multiple levels of ordering and then specify the sort rules for those levels.

For example, if you wish to order by **screen_name** _alphabetically_ and then have the **most recent entries** _first_, you would use the following parameters:

    orderby="screen_name|date" sort="asc|desc"

**Multiple Site Manager and orderby=**

The orderby= parameter can accept a site short-name in the namespace.

    orderby="default_site:body|second_site:summary"

When ordering by multiple fields from multiple Sites, remember that entries from another site will have no data for that field, and the entries will be ordered as such. This results in ordering entries by Site and then Field(s):

    orderby="default_site:body|second_site:summary"

Will result in:

    Default Site - Entry One - Albert
    Default Site - Entry Two - Bobby
    Second Site    - Entry One - Alligator
    Second Site    - Entry Two - Buffalo

If you have multiple Sites where each site has a field with the same exact short name, then you can specify that short name (without the site specified) and ExpressionEngine will treat those two fields as the same value and be able to order them as if they were the same field:

    orderby="body"

    Default Site - Entry One - Albert
    Second Site    - Entry One - Alligator
    Default Site - Entry Two - Bobby
    Second Site    - Entry Two - Buffalo

Thus, the output will then be ordered by the body, regardless of the originating site.

### `paginate=`

    paginate="top"

This parameter is for use with entry [pagination](templates/pagination.md) and determines where the pagination code will appear for your channel entries:

1.  **top**: The navigation text and links will appear _above_ your list of entries.
2.  **bottom**: The navigation text and links will appear _below_ your list of entries.
3.  **both**: The navigation text and links will appear both above and below your list of entries.
4.  **hidden**: The navigation text and links will not appear, but your entries will be paginated. (This is useful for things like JSON.)
5.  **inline**: The navigation text and links will appear within the list of entries for each entry.

If no parameter is specified, the navigation block will default to the "bottom" behavior.

If the pagination tag pair is not included, the entries returned will not respond to a page indicator in the URL. In that case you would need to set the parameter to _hidden_ to allow the entries to reflect the pagination in the URL.

### `paginate_base=`

    paginate_base="site/index"

This tells ExpressionEngine to override the normal [pagination](templates/pagination.md) link locations and point instead to the explicitly stated template group and template.

### `paginate_type=`

    paginate_type="field"

This tells ExpressionEngine to function in "pagination" mode for your channel entry fields so that you can automatically have an entry span multiple pages. See the [Spanning a Channel Entry Across Multiple Pages](channels/entry-spanning.md) page.

### `primary_role_id=`

    primary_role_id="4"

You can decide from which Member Role (by specifying the role ID) you wish entries to be shown. If you choose "4", then only entries created by members of the Primary Role with the ID of 4 will be shown. You can choose multiple Roles using a pipe:

    primary_role_id="2|3|4"

Or exclude roles using "not"

    primary_role_id="not 2|3|4"

### `related_categories_mode=`

    related_categories_mode="no" related_categories_mode="yes"

NOTE: **Important:** This parameter is intended for use **only** when you are using the channel tag within "single entry" pages. Single entry pages are ones that show only a single entry, specified by the ID number or URL Title in the URL.

NOTE: **Note:** If you are using Template Routes, you may need to use the `url_title=` or `entry_id=` parameters in this tag to instruct it as to which segment the entry identifier is in the URL.

When enabled, this parameter alters the behavior of the {exp:channel:entries} tag, causing it to ignore the entry ID or URL title found in the URL, and _instead_ show a list of entries that are in the same category as the entry specified in the URL. This lets you create a list of entries that are "related" to the primary one specified by the URL.

The default limit when enabling related_categories_mode is 10 entries, and can be overridden with the addition of the `channel_entries_limit` parameter.

When the `related_categories_mode=""` parameter is set to "yes", there are two additional parameters available to the Channel Entries tag: `custom_fields="yes"` and `member_data="yes"`, which will allow the displaying of field data and member data respectively. By default, those two parameters are both set to "no" to reduce load. Below is a simplified example with both optional parameters enabled:

    {exp:channel:entries related_categories_mode="yes" custom_fields="yes" member_data="yes"}
        <h2>{title}</h2>
        {body}
        <div class="posted">Posted by {author} on {entry_date format='%m/%d'} at {entry_date format='%h:%i %A'}</div>
    {/exp:channel:entries}

NOTE: **Note:** Relationships, Reverse Relationships, Pagination, and Categories are not available when Related Category Mode is enabled.

### `relaxed_categories=`

    relaxed_categories="yes"

This parameter allows you to use the category indicator in your URLs with an entries tag specifying multiple channels that do **not** share category groups.

### `require_entry=`

    require_entry="yes"

This parameter tells the channel tag that it should expect the URL to contain a valid entry ID or a valid URL title. If an ID is not found in the URL, the tag will not display any data. Normally, the channel tag will show something, even if the URL doesn't point to a particular entry. For example, your main channel page will typically show several of your most recent entries. Whereas your "single entry" pages, like your comment page, will show a single entry based on information in the URL. However, if one of your single entry pages is requested, but it doesn't contain a valid ID, this parameter will tell the tag that you do not wish the template to display anything.

NOTE: **Note:** You will often use this parameter in conjunction with the [if no_results](#if-no_results) conditional.

### `search:field_name=`

    search:body="pickles"

The "search:" parameter allows you to constrain Channel Entries output based on content within your fields. You specify which field to search by using the field's short name immediately after "search:". You can search based on whether a field is an exact match to your provided term or whether or not a field simply contains your term.

NOTE: **Note:** Some fields store their content in a manner that affects the ability to work with this parameter. Grid fields, for instance, could only use this parameter for columns with "Include in search?" enabled. Relationship fields cannot be searched using the search parameter.

#### "Exact" Matching

Use "Exact" matching when you only want entries whose fields match your terms exactly. To trigger "Exact" matching, precede your search terms with an equal sign (=). You may provide a pipe-delimited list of terms:

    search:body="=pickles|shoes"

This example would return all entries where the 'body' field was either 'pickles' or 'shoes'.

Or you can use "not" to exclude entries:

    search:body="=not pickles|shoes"

This example would return all entries where the 'body' field was **neither** 'pickles' **nor** 'shoes'. Note that the equal sign precedes the keyword "not".

#### "Contains" Matching

Use "Contains" matching when you are interested only if a field contains your terms, anywhere in the field.

    search:body="pickles|shoes"

This example would return all entries that contained the term "pickles" or contained the term "shoes".

    search:body="not pickles|shoes"

This example would return all entries that contained **neither** the term "pickles" **nor** contained the term "shoes".

"Contains" matching also lets you use an inclusive set of terms. Instead of separating the terms with a pipe symbol, you would separate them with double ampersands (so that single ampersands may still be used as part of search terms).

    search:body="pickles&&shoes"

This example would return all entries that contained **both** the term "pickles" **and** the term "shoes".

    search:body="not pickles&&shoes"

This example would return all entries that **do not** contain **both** the term "pickles" **and** the term "shoes". It would still display entries that contain the word "pickles", so long as the field did not _also_ contain the word "shoes".

When doing a "Contains" search, ExpressionEngine is literally just looking for matches on the combination of letters given. For instance using "cat" in a "Contains" search would match entries with "cat", "cats", "category", "vocation", etc. If you need "Contains" matching, but only want entries that include the term as a whole word on its own, you can add the special trigger \\W after the term.

    search:body="cat\W"

The above example will return all entries that contain the whole word "cat". It will not match entries where the phrase "cat" only lies within another word.

#### Numeric Matching

If you have a field containing numeric data, you may use greater-than or less-than operators to search through them.

    search:numeric_field="<20"

    search:numeric_field=">20"

    search:numeric_field="<=20"

    search:numeric_field=">=20"

You can also specify ranges to the search by piping your numeric match parameters. For all values between (and including) 20 through 30:

    search:numeric_field='>=20|<=30'

Or for all values _outside of_ 20 through 30:

    search:numeric_field='<20|>30'

TIP: **Tip:** Numeric matching is also used for custom date fields. With date fields, search and filter using a [Unix timestamp](https://www.unixtimestamp.com) (external link).

#### Including / Excluding Empty Fields

If you wish to only display entries that have (or do not have) content, use the special search constant IS_EMPTY.

    search:body="IS_EMPTY"

This example would return all results where the body field is empty.

    search:body="not IS_EMPTY"

This example would return all results where the body field is **not** empty, i.e. only entries where the body field had content.

The IS_EMPTY search constant can also be used in conjunction with other search terms, for both "Exact" and "Contains" type matching.

    search:body="=IS_EMPTY|sandwich"

Since it is prefixed with =, this example is an "Exact" match and would return all results where the body is empty or is "sandwich".

    search:body="IS_EMPTY|sandwich"

This example is a "Contains" match and would return all results where the body is empty **or** contains the word "sandwich".

    search:body="not IS_EMPTY|sandwich|salad"

This example returns only entries that have content, but **not** those that contain "sandwich" **nor** those that contain the word "salad".

NOTE: **Note:** You may use multiple search: parameters in a channel entries tag, as long as each one is searching a different field. e.g.:

    {exp:channel:entries search:style="=ale" search:region="germany|belgium" search:rating="=3|4|5"}

When using multiple search parameters, all search parameters must be matched in order for an entry to be included. The above example would pull back only those entries where the style is 'ale', the region is 'germany' or 'belgium' and the rating is 1, 2 or 3.

### `show_current_week=`

    show_current_week="yes"

Requires use of the [display_by=](#display_by) "week" parameter. When set to "yes", it displays the current week by default (i.e. no pagination in the URL) and automatically adjusts the pagination links to indicate the correct page for that week.

### `show_expired=`

    show_expired="no" show_expired="yes" show_expired="only"

There are three valid options for this parameter: "yes", "no", "only". The default is "no", with expired entries not shown. If set to "yes", expired entries are included in the results. If set to "only", only expired entries are included.

### `show_future_entries=`

    show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to be included. This option is useful when doing things like creating a list of events, some of which have not occurred yet. Note that EE will still display past entries; this parameter simply instructs EE to also include entries from the future.

### `show_pages=`

    show_pages="only" show_pages="no"

Allows you to tell the Channel module whether to show those entries that have been used to create pages with the Pages module. You can also set it to "only" and _only_ show those entries that have had Pages assigned to them. The default is "yes" and it will treat entries with assigned Pages no different from any other entries.

TIP: **Tip:** `show_pages="only"` acts in the same manner as `dynamic="no"`. `show_pages="only"` aids in building persistent menus based off existing Pages.

### `sort=`

    sort="asc" sort="desc"

The sort order can be ascending or descending. The order will default to "descending" if nothing is specified.

**Multiple Orders and Sorts**

Along with the [orderby=](#orderby) parameter this parameter can accept multiple values using the pipe character so that you can have multiple levels of ordering and set the sort for those levels. For example, if you wish to order by screen_name alphabetically and then have the most recent entries first, you would use the following parameters:

    orderby="screen_name|date" sort="asc|desc"

If no sort value or an incorrect value is specified for an order, then the default will be "descending".

### `start_day=`

    start_day="Monday"

Requires use of the [display_by=](#display_by) "week" parameter. Allows you to choose whether the week starts on Monday or Sunday. Sunday is the default.

### `start_on=`

    start_on="2004-06-05 20:00"

You can specify a particular date/time on which to start the entries. Only entries that are on or after this date will be included in the display. This parameter is often used together with the [stop_before=](#stop_before) parameter for limiting the entry display to a specific date range.

#### Format

The [start_on=](#start_on) parameter accepts any input that an ExpressionEngine Date field would accept. This means you have a wide variety of options:

    start_on="October 21st, 2015 4:30 PM"
    start_on="today"
    start_on="yesterday"
    start_on="last Monday"
    start_on="-2 months"

#### Common Uses

This parameter can be used in conjunction with `global_current_time`:

    {exp:channel:entries channel="{my_weblog}" sort="desc" start_on="{current_time}" show_future_entries="yes"}

The above would display future entries starting from the current time.

To display up to 5 entries with entry dates that fall within the previous 24 hours:

    {exp:channel:entries channel="{my_weblog}" limit="5" sort="desc" start_on="-24 hours"}

### `status=`

    status="open"

You may restrict to entries with a particular [status](control-panel/channels.md#statuses-tab). The two statuses "open" and "closed" are default statuses that are always available, so you can always specify those if needed. If no status parameter is specified, only open status entries will be returned. You can choose multiple statuses using a pipe:

    status="draft|reviewed|published|closed"

Or exclude statuses using "not"

    status="not submitted|processing"

Note that closed status entries will not be included in the results when using "not" regardless of whether it is in the piped list.

### `stop_before=`

    stop_before="2004-06-12 20:00"

You can specify a particular date/time on which to end the entries. Only entries that are before this date will be included in the display (entries exactly on this date/time will not be included). This parameter is often used together with the [start_on=](#start_on) parameter for limiting the entry display to a specific date range.

This parameter accepts the same date formats as the [start_on=](#start_on) parameter.

### `sticky=`

    sticky="yes"

By default, sticky topics always remain at the top of the page.
Options:
* `sticky="yes"` - sticky topics always remain at the top of the page (default)
* `sticky="no"` - no special treatment will be given to sticky entries
* `sticky="only"` - only sticky entries are included in the results
* `sticky="none"` - only non-sticky entries are included in the results

### `track_views=`

ExpressionEngine lets you track how many times a channel entry has been "viewed" on a particular page. The view tracking counter will ONLY increment on pages that show a single entry using the {exp:channel:entries} tag, and only when the feature is enabled by using this parameter in the tag you want tracked. Up to four different instances of the view counter can be used (each in a different tag on a different page).

To enable the view counter you will use one of these four parameters in the tag located in the page you want tracked.

    track_views="one" track_views="two" track_views="three" track_views="four"

Each of the above four parameters corresponds to these variables, which can be shown within any tag:

    {view_count_one}{view_count_two}{view_count_three}{view_count_four}

### `uncategorized_entries=`

    uncategorized_entries="no"

By default, when specifying the [category=](#category) parameter with 'not ' at the beginning , ExpressionEngine will show all entries without those categories _including_ any entries without categories assigned. If you would prefer that ExpressionEngine not show these uncategorized entries, then set this parameter to "no" and they will be ignored.

### `url_title=`

    url_title="my_wedding"

This parameter limits the query by an entry's url_title. You can use the pipe character to query by multiple url_titles:

    url_title="my_wedding|my_honeymoon|my_kids"

Or you can add "not" to exclude url_titles:

    url_title="not my_in_laws"

NOTE: **Note:** It is strongly suggested you use the `channel=""` parameter when using the `url_title=""` parameter as ExpressionEngine can be set up to allow the same url_title for two different channels.

### `username=`

    username="petunia"

This parameter limits the query by username. You can use the pipe character to query by multiple usernames:

    username="tom|dick|harry"

Or you can add "not" to exclude usernames

    username="not tom|dick|harry|fred"

You can also use the token `"CURRENT_USER"` to show entries from only the currently logged in user.

    username="CURRENT_USER"

This allow each logged-in user to get only their entries. Users who are not logged in won't see anything. Alternatively, you can use the token `"NOT_CURRENT_USER"` to show entries **except** from the currently logged in user.

    username="NOT_CURRENT_USER"

### `week_sort=`

    week_sort="asc"

Requires the [display_by=](#display_by) "week" parameter. Changes the sort order of the weeks so that you can either have the weeks displayed by most recent first or oldest first. Separate from the `sort=""` parameter, which will only affect the sorting of entries within the weeks, not the weeks themselves.

### `year=, month=, day=`

    year="2003"

    month="12"

    day="23"

You can limit queries by year, month, or day. For example, to show all of year 2002 you'll use only:

    year="2002"

To show only the month of December in 2003 you'll do this

    year="2003"

    month="12"

NOTE: **Note:** Don't combine these parameters with the `display_by` parameter discussed previously, as these take precedence over that parameter. In addition, the three parameters must be applied "in order", meaning that you must specify the year if you specify the month and you must specify both month and year to use day.

## Single Variables

[TOC=3 hide]

### `{absolute_count}`

The absolute "count" out of the current entries being displayed by the tag, including those entries on previous pages (if using pagination).

If five entries are being displayed per page, then for the fourth entry on the second page the {absolute_count} variable would have a value of "9"

**BONUS:** Since the Search module utilizes channel variables, {absolute_count} is also available to the Search Results tag.

### `{absolute_results}`

This variable will always display the absolute total number of results that are returned by the tag, regardless of pagination.

### `{absolute_reverse_count}`

The _opposite_ of `{absolute_count}`, in that it displays the entry count position counting backwards from the absolute total. Works across pagination, so the fifth entry in a list of fifteen entries would display "10".

### `{author}`

The author's screen name, if it exists; otherwise, this variable will display the username.

### `{author_id}`

The member ID of the author.

### `{avatar_image_height}`

The height of the avatar image associated with the entry's author. Typically used as such:

    {if avatar}
        <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar">
    {/if}

### `{avatar_image_width}`

The width of the avatar image associated with the entry's author. Typically used as such:

    {if avatar}
        <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar">
    {/if}

### `{avatar_url}`

The URL to the avatar image associated with the entry's author. Typically used as such:

    {if avatar}
        <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar">
    {/if}

### `{channel}`

The name of the channel that the currently displayed entry is assigned to.

### `{channel_id}`

The ID number of the actual channel (not the _entry_.)

### `{channel_short_name}`

The short name of the channel of the currently displayed entry.

### `{channel_url}`

    {channel_url}

The [URL of the channel](control-panel/channels.md#settings-tab) the current entry belongs to, set on Control Panel.

### `{comment_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the channel's **Settings** tab. No entry id, URL Title, or other information is included; this is the exact URL from the preference.

### `{comment_expiration_date}`

    {comment_expiration_date format="%Y %m %d"}

The date on which commenting expires for this entry, if they do. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{comment_entry_id_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the channel's **Settings** tab. The ID number of the entry will be automatically added. For example, this:

    <a href="{comment_entry_id_auto_path}">my entry</a>

Would be rendered like this:

    <a href="https://example.com/channel/comments/234">my entry</a>

### `{comment_subscriber_total}`

Total number of subscribers to comments for a particular entry.

### `{comment_total}`

The total number of comments for a particular entry.

### `{comment_url_title_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the channel's **Settings** tab. The URL Title of the entry will be automatically added. For example, this:

    <a href="{comment_url_title_auto_path}">my entry</a>

Would be rendered like this:

    <a href="https://example.com/channel/comments/ice_cream/">my entry</a>

### `{count}`

The "count" out of the current entries being displayed. If five entries are being displayed, then for the fourth entry the {count} variable would have a value of "4".

### `{cp_edit_entry_url}`

    {if logged_in}
      <a href="{cp_edit_entry_url}">Edit Entry</a>
    {/if}

The URL of the entry form in the control panel where this entry can be edited. It is recommended you wrap this variable in an `{if logged_in}` conditional to hide your control panel's URL from regular site visitors. If you are running a membership based site, hide it behind an appropriate `logged_in_role_id` conditional. For example, to hide this link from everyone but Super Admins:

    {if logged_in_role_id == 1}
      <a href="{cp_edit_entry_url}">Edit Entry</a>
    {/if}

### `{edit_date}`

The date on which the entry was last edited. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{email}`

The author's raw email address.

### `{entry_date}`

    {entry_date format="%Y %m %d"}

The date the entry was submitted. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{entry_id}`

    {entry_id}

The ID number of the channel entry.

### `{entry_id_path}`

    {entry_id_path='channel/archives'}

The URL to the specified template. The ID number of the entry will be automatically added. For example, this:

    <a href="{entry_id_path='channel/archives'}">my entry</a>

Would be rendered like this:

    <a href="https://example.com/channel/archives/234/">my entry</a>

### `{entry_site_id}`

The Site ID of the channel entry.

### `{expiration_date}`

    {expiration_date format="%Y %m %d"}

The expiration date of the entry. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{forum_topic_id}`

If you have the Discussion Forum Module installed and if you have associated a forum thread with a channel entry (via the "Forum" section of the Publish tab), this is the ID number of the forum thread. It will typically be used like so:

    {if forum_topic}
        <a href="{path='forums/viewthread'}{forum_topic_id}">Discuss this in our forums</a>
    {/if}

### `{gmt_entry_date}`

    {gmt_entry_date format="%Y %m %d"}

The date the entry was submitted in GMT. This variable is **not** localized for each user's date settings. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{gmt_edit_date}`

    {gmt_edit_date format="%Y %m %d"}

The date on which the entry was last edited in GMT. This variable is **not** localized for each user's date settings. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{ip_address}`

The IP address of the author when they posted the entry.

### `{member_search_path}`

    {member_search_path='search/results'}

This variable is replaced by a URL that passes the author's member name to your search results Template. In this way, you can display all entries made by the author. You should specify the Template_Group/Template that you use to display search results. For example:

    <a href="{member_search_path='search/results'}">View entries by this member</a>

### `{page_uri}`

If you have the Pages Module installed and if you have associated a static page with a channel entry (via the "Pages" section of the Publish tab), this is the page uri for the page. It will typically be used like so:

    {if page_uri != ''} <a href="{page_uri}">View this page</a> {/if}

### `{page_url}`

If you have the Pages Module installed and if you have associated a static page with a channel entry (via the "Pages" section of the Publish tab), this is the page url for the page (the site URL + the page URI). It will typically be used like so:

    {if page_url != ''} <a href="{page_url}">View this page</a> {/if}

### `{permalink}`

This variable defaults to site index with entry ID number:

    https://example.com/235/

In addition, you can specify a template group/template and the entry ID will automatically be added:

    {permalink="channel/archives"}

Will render as:

    https://example.com/channel/archives/235/

### `{profile_path}`

    {profile_path='member'}

The URL to the author of the current entry. The ID number of the author will be automatically added. Used in a link:

    <a href="{profile_path='member'}">{author}</a>

### `{recent_comment_date}`

    {recent_comment_date format="%Y %m %d"}

The date of the most recent comment associated with the entry. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{relative_url}`

The URL stored in your Channel URL setting under Channel Management, with the domain information removed. For example, if your setting is <https://example.com/site/index/> the variable will output /index.php/site/index/. Typically only used in the Atom feed Template.

### `{relative_date}`

The amount of time that has passed between when the entry was submitted and the current time. The output is displayed in the format 1 day, 3 hours, 45 minutes. This variable is useful for displaying something such as "This entry was posted 1 day, 3 hours, 45 minutes ago."

### `{reverse_count}`

The _opposite_ of `{count}`, in that it displays the entry count position counting backwards from the total. Like `{count}`, this is relative to the number of entries the tag is currently displaying. If you want the counts to include paginated results, you may want `{absolute_reverse_count}`.

### `{screen_name}`

The author's screen name, if it exists. This variable will not return anything if the author does not have a screen name defined.

### `{signature}`

The signature associated with the entry's author. Typically used as such:

    {if signature} <p>{signature}</p> {/if}

### `{signature_image_height}`

The height of the signature image associated with the entry's author. Typically used as such:

    {if signature_image}
        <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature">
    {/if}

### `{signature_image_url}`

The URL to the signature image associated with the entry's author. Typically used as such:

    {if signature_image}
        <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature">
    {/if}

### `{signature_image_width}`

The width of the signature image associated with the entry's author. Typically used as such:

    {if signature_image}
        <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature">
    {/if}

### `{status}`

The status of the entry (open, closed, etc.)

### `{switch}`

    {switch='option_one|option_two|option_three'}

This variable permits you to rotate through any number of values as the entries are displayed. The first entry will use "option_one", the second will use "option_two", the third "option_three", the fourth "option_one", and so on.

The most straightforward use for this would be to alternate colors. It could be used like so:

    {exp:channel:entries channel="yourchannel"}
        <div class="{switch='one|two'}">
            <h2>{title}</h2>
            {body}
        </div>
    {/exp:channel:entries}

The entries would then alternate between `<div class="one">` and `<div class="two">`.

Multiple instances of the `{switch=}` tag may be used and the system will intelligently keep track of each one.

### `{title}`

The title of the entry

### `{title_permalink}`

This variable uses the "url title" as the link. It defaults to the site index with the "url title":

    https://example.com/my_ugly_boyfriend/

In addition, you can specify a specific template group/template and the "url title" will automatically be added:

    {title_permalink="channel/archives"}

Will render as:

    https://example.com/channel/archives/my_ugly_boyfriend/

NOTE: **Note:** When creating a new entry, if you don't supply the "url title" then it will be automatically created from the actual entry title. Spaces are turned into underscores and quotes are removed. For example, "Joe's night out" becomes "joes_night_out".

### `{total_results}`

The total number of entries being displayed.

### `{trimmed_url}`

The domain name for your site, trimmed of any subdomains. For instance, beta.example.com becomes example.com. Typically only used in the Atom feed Template.

### `{url_title}`

The human readable title used in the URL as a permalink.

### `{url_title_path}`

    {url_title_path='channel/archives'}

The URL to the specified template. The "url title" of the entry will be automatically added. For example, this:

    <a href="{url_title_path='channel/archives'}">permalink</a>

Would be rendered like this:

    <a href="https://example.com/channel/archives/ice_cream/">permalink</a>

### `{username}`

The author's username.

### `{week_date}`

    {week_date format="%Y %m %d"}

The date that the week of the currently displayed entry started on, most commonly used in "weekly" scenarios with the [date_heading](#date_heading) variable pair.

This variable is affected by the [start_day=](#start_day) parameter. By default, the week date will fall on Sunday for the week of the entry. When `start_day="Monday"` is used, the week date will fall on Monday for the week of the entry. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

## Conditional Tags

[TOC=3 hide]

Conditionals allow you to more precisely control your content.

NOTE: **Note:** A more complete explanation of conditional control structures and operators can be found on the [Conditional Tags](templates/conditionals.md) page.

Here is an example that tests for the "summary" field being not empty

    {if summary != ""}
        The summary is not empty!
    {/if}

An alternate, shorthand syntax can accomplish the same thing

    {if summary}
        The summary is not empty!
    {/if}

If only the variable name is in the conditional statement it tests for "not empty".

Many of the single variables can be used in a conditional. You may always use the short name of one of your custom entry fields in a conditional. In addition, there are several unique conditionals.

### `{if allow_comments}`

    {if allow_comments} content {/if}

This special conditional lets you conditionally display content if the current entry is set to allow comments. This conditional will return FALSE if commenting has expired.

    {if allow_comments}
        ({comment_total}) <a href="{comment_path='channel/comments'}">Comments</a>
    {/if}

Or you can display content if commenting is disabled:

    {if allow_comments == FALSE} content {/if}

### `{if avatar}`

    {if avatar} content {/if}

This special conditional lets you conditionally display content if the current entry's author has an avatar image specified.

    {if avatar}
        <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar">
    {/if}

### `{if category_request}`

    {if category_request} content {/if}

This special conditional lets you conditionally display content if the current tag is being displayed based on a category specified in the URL. For instance, if the URL being viewed were <https://example.com/channel/archives/C13/> that could trigger this conditional.

### `{if count}`

    {if count > 5} content {/if}

This conditional allows you to test against which number entry is being displayed. You could use this to apply different styles to the first entry or have the last 5 entries out of 10 be formatted differently.

### `{if forum_topic}`

    {if forum_topic} content {/if}

You may use this conditional for displaying content when a forum topic has been associated with a channel entry. That option is only available if the Discussion Forum Module is installed. It will typically be used like so:

    {if forum_topic}
        <a href="{path='forums/viewthread'}/{forum_topic_id}">Discuss this in our forums</a>
    {/if}

### `{if has_categories}`

Handy conditional for displaying markup or content based on whether or not the entry has been assigned any categories.

    {if has_categories}
        <h3>Categories</h3>

        <div id="categories">
            {categories}
                ...
            {/categories}
        </div>
    {/if}

### `{if no_results}`

    {if no_results} content {/if}

You may use this conditional for displaying a message in the case when no entries are returned. The contents inside of the conditional will be displayed in cases where there are no results returned for the tag.

    {if no_results}  <p>There are no entries available.</p>  {/if}

Further, you may specify that another Template be shown in a case when there are no results. In order to do that, you must use the redirect=variable

    {if no_results} {redirect="channel/noresult"} {/if}

Lastly, if you want to simply display your 404 page (with 404 headers) when no entries are returned, simply use "404" as the template name.

    {if no_results} {redirect="404"} {/if}

NOTE: **Note:** If you have several nested tags, each one would need to include a `{if no_results}` pair to be parsed correctly.

For instance, if you have Grid field with `{if no_results}` block, the parent `{exp:channel:entries}` tag pair would need to include `{if no_results}` block as well.
```
{exp:channel:entries channel="blog"}
    {if no_results} No entries {/if}
    {my_grid_field}
        {if no_results} Grid is empty {/if}
        {my_grid_field:text}
    {/my_grid_field}
{/exp:channel:entries}
```

### `{if not_category_request}`

    {if not_category_request} content {/if}

This special conditional lets you conditionally display content if the current tag is _not_ being displayed based on a category specified in the URL. For instance, if the URL being viewed were <https://example.com/channel/archives/C13/> that would not trigger this conditional.

### `{if not_forum_topic}`

    {if not_forum_topic} content {/if}

You may use this conditional for displaying content when _no_ forum topic has been associated with a channel entry. That option is only available if the Discussion Forum Module is installed. It will typically be used like so:

    {if not_forum_topic} There is no forum discussion available. {/if}

### `{if signature_image}`

    {if signature_image} content {/if}

This special conditional lets you conditionally display content if the current entry's author has a signature image specified.

    {if signature_image}
        <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature">
    {/if}

### `{if sticky}`

    {if sticky == 'y'} content {/if}

You may test whether an entry is set to be "sticky". You may also test whether it is not "sticky".

    {if sticky == 'n'} content {/if}

## Variable Pairs

[TOC=3]

Variable pairs contain an opening and closing tag as well as content in-between. Example:

    {date_heading}  <h1>{entry_date format="%Y %m %d"}</h1>  {/date_heading}

The reason variable pairs have an opening and closing pair is because the information between the pairs can be shown or not shown if the criteria for each tag is met.

In the case of the "date_heading" pair, for example, it only appears at a certain interval that you set (hourly, daily, weekly, monthly, etc.). By using a pair of variables you can put HTML formatting between them that only gets shown when the interval is met. Otherwise, the chunk is not displayed.

### `{date_footer}`

    {date_footer display="daily"}  <p>That's all from today!</p>  {/date_footer}

The date footer can be used to show a footer at certain intervals. The interval can be set to show hourly, daily, weekly, monthly, or yearly. An optional "display" parameter can be used to set the display interval:

    {date_footer display="daily"}

Choices for the "display" parameter are:

- `{date_footer display="hourly"}`
- `{date_footer display="daily"}`
- `{date_footer display="weekly"}`
- `{date_footer display="monthly"}`
- `{date_footer display="yearly"}`

If no parameter is specified it will default to "daily".

NOTE: **Note:** You can use as many date_footers as you want in the same tag. There is a bit of a performance hit, however, since date parsing is the most processor intensive. Read the caching section for information on improving performance.

### `{date_heading}`

    {date_heading}  <h1>{entry_date format="%Y %m %d"}</h1>  {/date_heading}

The date heading can be used to show a heading at certain intervals. The interval can be set to show hourly, daily, weekly, monthly, or yearly.

When using weekly intervals, the [week_date](#week_date) variable would typically be used.

    {date_heading display="weekly"}Week of {week_date format="%Y %m %d"}{/date_heading}

An optional "display" parameter can be used to set the display interval:

    {date_heading display="daily"}

Choices for the "display" parameter are:

- `{date_heading display="hourly"}`
- `{date_heading display="daily"}`
- `{date_heading display="weekly"}`
- `{date_heading display="monthly"}`
- `{date_heading display="yearly"}`

If no parameter is specified it will default to "daily".

NOTE: **Note:** You can use as many date_footers as you want in the same tag. There is a bit of a performance hit, however, since date parsing is the most processor intensive. Read the caching section for information on improving performance.

### {categories}

[TOC=4]

Categories are unique in that they are a "looping pair". Since you can have multiple categories per entry, we need a mechanism to show as many categories as exist for each entry.

    {categories}
        {category_image}
        <a href="{path='channel/index'}">{category_name}</a>
    {/categories}

#### Categories Tag Pair Parameters

[TOC=5]

##### `backspace=`

    {categories backspace="5"}

Backspacing removes characters (including spaces and line breaks) from the last iteration of the loop. For example, if you put a &lt;br&gt; tag after each category you'll have this:

    Local News<br>
    Health News<br>
    Science News<br>

You might, however, not want the &lt;br&gt; tag after the final item. Simply count the number of characters (including spaces and line breaks) you want to remove and add the backspace parameter to the tag. The &lt;br&gt; tag has 4 characters plus a new line character, so you would do this:

    {categories backspace="5"}
        {category_name}<br>
    {/categories}

That will produce code like this:

    Local News<br>
    Health News<br>
    Science News

##### `limit=`

    {categories limit="1"}

This parameter limits the number of categories output by this variable pair. When in use, it will limit the output to the number provided, using the specified order in the Category Management page to determine which categories get shown.

##### `show=`

    {categories show="4|7"}

With this parameter, you can specify which categories can be included when listing them with the {categories} variable pair. For instance, if you had entries that belonged to several categories, you could use this parameter to limit the display to only those categories you specified. While the entries may actually belong to more categories, only those you specify would be shown. Category IDs are separated by the pipe character to specify more than one category.

You may alternatively specify which categories to not show:

    {categories show="not 3|6|8"}

##### `show_group=`

    {categories show_group="1|3"}

With this parameter, you can specify which category groups can be included when listing categories with the {categories} variable pair. For instance, if you had entries in a channel that had multiple category groups but only wanted to show the categories for one of those groups, you could specify that category group's ID number with this parameter. Category Group IDs are separated by the pipe character to specify more than one category group.

You may alternatively specify which category groups to not show:

    {categories show_group="not 2|4"}

#### Categories Tag Pair Variables

[TOC=5]

##### `{category_count}`

The "count" out of the current categories being displayed. If five categories are being displayed, then for the fourth category the {category_count} variable would have a value of "4".

##### `{category_description}`

The description associated with the category.

##### `{category_group}`

The category group ID of the category.

##### `{category_id}`

The category ID associated with the category.

##### `{category_image}`

The image link (or other information) you can optionally store with each category within the Control Panel.

##### `{category_name}`

This displays the name of the category.

##### `{category_reverse_count}`

The _opposite_ of `{category_count}`, in that it displays the category count position counting backwards from the total. Countdown all the things!

##### `{category_total_results}`

The total number of categories being displayed.

##### `{category_url_title}`

This variable displays the URL title of the category

##### `{parent_id}`

The category ID associated with the category's parent (or 0 in the case of a top level category).

##### `{path=}`

    {path='channel/index'}

This variable will be replaced by a URL to the specifies Template Group/Template. The category designation information will automatically be added to the end of the URL so that the target page will know which category to display.

If you want the category links to point to your site index instead of a particular template group/template you can use SITE_INDEX instead:

    {categories}  <a href="{path='SITE_INDEX'}">{category_name}</a>  {/categories}

#### Custom Category Fields

All custom fields assigned to a category can be accessed using the "short name" of the field:

    {class} {extended_description} {category_name_fr} etc..

These are totally dynamic in that any field you create for your category will automatically be available by its "short name" as a variable.

## Pagination

The [Pagination](templates/pagination.md) feature allows you to create "next" and "previous" links between pages of entries.

You can also span a single entry [across multiple pages](channels/entry-spanning.md), like online magazines do.

## Entry "Views" Tracking

The Channel Entries tag also has a [Views Tracking](channels/entry-tracking.md) feature that lets you track the number of times an entry has been viewed.

## Relationships

The Channel Module supports a powerful [Relationship](fieldtypes/relationships.md) feature that lets you associate one entry to another.
