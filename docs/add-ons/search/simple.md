<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Simple Search Form Tag

[TOC]

The Simple Search Form Tag allows you to easily add a single-form search field to your site. This allows you to have a simple search box in a sidebar of your site. Example:

    {exp:search:simple_form channel="news"}
        <p>
            <label for="keywords">Search:</label><br>
            <input type="text" name="keywords" id="keywords" value="" size="18" maxlength="100">
        </p>
        <p>
            <a href="{path='search/index'}">Advanced Search</a>
        </p>
        <p>
            <input type="submit" value="submit" class="submit">
        </p>
    {/exp:search:simple_form}

The search results are displayed on the page you specify as the [result_page=](#result_page) page. Results are displayed with the [Search Results](add-ons/search/results.md)tag.

## Input Fields

### Keywords

The primary search method is to search by keyword. If you change the form field, you need to be sure to leave the name="keywords" attribute alone.

    <label for="keywords">Keywords:</label><br>
    <input type="text" name="keywords" id="keywords" maxlength="100" size="20">

### Member Name

You may _optionally_ search by member name (the screen name) by adding this field to your form. If you change the form field, you need to be sure to leave the name="member_name" attribute alone.

    <label for="member_name">Member Name:</label><br>
    <input type="text" name="member_name" id="member_name" maxlength="100" size="40">

### Exact Matching

If you offer the ability to search by member name, then you may also offer the option of matching partial member names or exact member names. If you change the form field, you need to be sure to leave the name="exact_match" attribute alone.

    <input type="checkbox" name="exact_match" id="exact_match" value="y">
    <label for="exact_match">Match Name Exactly</label>

### Include Expired Entries

Besides specifying whether expired entries are included in the search using the [show_expired="yes"](#show_expired) parameter, it is also possible to include a form field to let the user choose. If you change the form field, you need to be sure to leave the name="show_expired" attribute alone.

    <label for="field_show_expired">Include Expired Entries?</label>
    <select name="show_expired" id="field_show_expired">
        <option value="no">No</option>
        <option value="yes">Yes</option>
    </select>

### Include Future Entries

Besides specifying whether future entries are included in the search using the [show_future_entries="yes"](#show_future_entries) parameter, it is also possible to include a form field to let the user choose. If you change the form field, you need to be sure to leave the name="show_future_entries" attribute alone.

    <label for="field_show_future_entries">Include Future Entries?</label>
    <select name="show_future_entries" id="field_show_future_entries">
        <option value="no">No</option>
        <option value="yes">Yes</option>
    </select>

## Parameters

### `name=`

    name="search_form"

Specify the name attribute for the &lt;form&gt; tag, which will allow you to specify CSS and JavaScript to the form more easily.

### `no_result_page=`

    no_result_page="search/noresults"

You may specify a particular Template to display in the case when there are no results. This takes a standard "Template_Group/Template" as input.

### `result_page=`

    result_page="news/searches"

The Template_Group/Template where you would like the search results to be shown. If you do not specify this parameter, then it will default to "search/results", which is the default location of the search results Template.

### `results=`

    results="20"

The number of results to show per page on the search results.

### `search_in=`

    search_in="entries"
    search_in="everywhere"
    search_in="titles"

This parameter specifies which fields you would like to include in the searching. There are three possible values:

1.  **entries**: The search will be conducted in the entry fields and titles of your channel. The associated comments will not be included.
2.  **everywhere**: The search will be conducted in the title, entry fields, and in associated comments.
3.  **titles**: The search will be conducted in the title of your entries. The channel entry fields and any associated comments will not be included.

If this parameter is not set, the search will default to only search by "titles".

### `show_expired=`

    show_expired="yes"

With this parameter you can specify whether or not expired entries will be included in search results. The default behavior is for expired entries to _not_ be included. You may set this parameter to "yes" or "no". You may also let the user choose by using an [Include Expired Entries](#include-expired-entries) form field.

### `show_future_entries=`

    show_future_entries="yes"

With this parameter you can specify whether or not entries with the date set in the future will be included in search results. The default behavior is for future entries to _not_ be included. You may set this parameter to "yes" or "no". You may also let the user choose by using an [Include Future Entries](#include-future-entries) form field.

### `site=`

    site="default_site"

You can include sites other than the current site in search results. Use the pipe character to include multiple sites:

    site="default_site|boston|new_york"

Or add the word "not" (followed by a space) to exclude sites:

    site="not chicago|los_angeles"

### `status=`

    status="open"

You may restrict the result to entries assigned to a particular [status](control-panel/channels.md#statuses-tab). You can choose multiple statuses using a pipe:

    status="draft|reviewed|published"

Or exclude statuses using "not"

    status="not submitted|processing|closed"

### `channel=`

    channel="which"

From which [channel](control-panel/channels.md) to search the entries. Additionally, you can use the pipe character to separate multiple channels:

    channel="channel1|channel2|channel3"

Or you can add the word "not" (with a space after it) to exclude channels:

    channel="not channel1|channel2|channel3"

### `where=`

    where="all"

This parameter allows you to specify how matching in searches are performed. The options are:

- **any**: results containing any of the specified words will be returned.
- **all**: only results containing all of the specified words will be returned.
- **word**: only results containing the exact phrase specified will be returned.
- **exact**: only results containing the entire matching phrase will be returned.

### `form_class=`

    form_class="search_form"

With this parameter, you can specify the css class you want the form to have, enabling fine-grained styling of the form.

### `form_id=`

    form_id="my_search_form"

With this parameter, you can specify the css id you want the form to have.

### `orderby=`

    orderby="entry_date"

The "orderby" parameter sets the display order of the entries. The available values for this property are `entry_date`, `most_comments`, `recent_comment`, `title`, `status`, `entry_id`, `url_title`, `edit_date`, `comment_total`, `expiration_date`, `view_count_one`, `view_count_two`, `view_count_three`, `view_count_four`.`

If this parameter is not set, it will default to ordering by entry date.

### `sort=`

    sort="asc"

    sort="desc"

The sort order can be "asc" (ascending order or "oldest item first") or "desc" (descending order or "newest item first"). If you do not use a sort order the default is desc.

## Variables

There are no specific variables associated with the Simple Search Form. You may use the [{path=''}](templates/globals/path.md) Global Variable to create a link to an Advanced Search Form if you wish.
