<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Displaying Search Results

[TOC]

## Search Results Tag

The Search Results Tag controls how you display results from your searches. Example:

    <table border="0" cellpadding="6" cellspacing="1" width="100%">
        <tr>
            <th>{lang:title}</th>
            <th>{lang:excerpt}</th>
            <th>{lang:author}</th>
            <th>{lang:date}</th>
            <th>{lang:total_comments}</th>
            <th>{lang:recent_comments}</th>
        </tr>

    {exp:search:search_results}

        <tr class="{switch="resultRowOne|resultRowTwo"}">
            <td width="30%" valign="top"><b><a href="{auto_path}">{title}</a></b></td>
            <td width="30%" valign="top">{excerpt}</td>
            <td width="10%" valign="top"><a href="{member_path='member/index'}">{author}</a></td>
            <td width="10%" valign="top">{entry_date format="%m/%d/%y"}</td>
            <td width="10%" valign="top">{comment_total}</td>
            <td width="10%" valign="top">{recent_comment_date format="%m/%d/%y"}</td>
        </tr>

        {if count == total_results}
            </table>
        {/if}

        {paginate}
            <p>Page {current_page} of {total_pages} pages {pagination_links}</p>
        {/paginate}

    {/exp:search:search_results}

    </table>

The Search module uses the same pagination syntax as all first-party modules. Please look at the [Pagination](templates/pagination.md) documentation for more information.

## Parameters

[TOC=3]

### `backspace=`

    backspace="7"

Backspacing removes characters (including spaces and line breaks) from the last iteration of the loop. For example, if you put a &lt;br /&gt; tag after each result field you'll have this:

    Entry 1<br />
    Entry 2<br />
    Entry 3<br />

You might, however, not want the &lt;br /&gt; tag after the final item. Simply count the number of characters (including spaces and line breaks) you want to remove and add the backspace parameter to the tag. The &lt;br /&gt; tag has 6 characters plus a new line character, so you would do this:

    {exp:search:search_results backspace="7"}
        {title}<br />
    {/exp:search:search_results}

That will produce code like this:

    Entry 1<br />
    Entry 2<br />
    Entry 3

### `search_id=`

    search_id="{segment_4}"

The search_id is a 32 character ID number automatically included in search URLs and used to retrieved cached search results. The search_id can be manually specified via parameter in cases where the URL does not follow the standard template_group/template pattern.

## Variables

[TOC=3]

Nearly all of the [Channel Entries Tag Variables](channels/entries.md#single-variables) are available for the search results page so that you can display as much or as little of the channel entry's data as possible depending on your needs. There are also some search results specific variables available in the results page:

### `{auto_path}`

This parameter is replaced with the URL to the entry with the URL Title appended to the end. Unlike other "path" variables, this variable does **not** require the Template_Group/Template to be specified. Instead, the path will automatically be determined by the Search Results URL setting for the channel in [Channel Management](control-panel/channels.md).

### `{excerpt}`

An excerpt from the entry. The excerpt consists of the first 50 words from the field specified for search excerpting in your [Channel Management](control-panel/channels.md) settings for your channels. HTML markup is stripped prior to output.

### `{full_text}`

The text from the entry. Unlike the {excerpt} variable, this one returns the entire text from the field specified for search excerpting in your [Channel Management](control-panel/channels.md) settings for your channels.

TIP: **Tip:** Use [variable modifiers](templates/variable-modifiers.md) to more precisely control the output of search results variables.

### `{id_auto_path}`

This parameter is replaced with the URL to the entry with the Entry ID appended to the end. Unlike other "path" variables, this variable does **not** require the Template_Group/Template to be specified. Instead, the path will automatically be determined by the Channel URL setting for the channel in [Channel Management](control-panel/channels.md).


### `{if no_results}`

    {if no_results} content {/if}

In case you have set both `result_page` and `no_result_page` parameters to the same template, you may use this conditional for displaying a message in the case when no entries are returned.

    {if no_results}  <p>There are no entries available.</p>  {/if}

Further, you may specify that another Template be shown in a case when there are no results. In order to do that, you must use the redirect=variable

    {if no_results} {redirect="channel/noresult"} {/if}

Lastly, if you want to simply display your 404 page (with 404 headers) when no entries are returned, simply use "404" as the template name.

    {if no_results} {redirect="404"} {/if}

### `{member_path}`

    {member_path='member/index'}

The Template_Group/Template with which to display the member profile of the author of the entry. Typically, this variable will be specified as {member_path='member/index'}.

### `{switch=}`

    {switch="option_one|option_two|option_three"}

This variable permits you to rotate through any number of values as the entries are displayed. The first entry will use "option_one", the second will use "option_two", the third "option_three", the fourth "option_one", and so on.

Multiple instances of the {switch=} tag may be used and ExpressionEngine will intelligently keep track of each one.

## Search Keywords Tag

This tag lets you display the keywords used to perform a search. It is used on the search results page in order to show the user exactly what search terms they used:

    {exp:search:keywords}

This may also be used on the template specified by the [no_result_page](add-ons/search/advanced.md#no_result_page) parameter of the [simple search form](add-ons/search/simple.md) and [advanced search form](add-ons/search/advanced.md).

The only parameter for this tag is the `search-id-parameter` parameter.

There are no variables associated with this ExpressionEngine tag.

## Search Total Results Tag

This tag lets you display the total number of results found during a search. It is used on the search results page to show the total number of matches:

    {exp:search:total_results}

This may also be used on the template specified by the [no_result_page](add-ons/search/advanced.md#no_result_page) parameter of the [simple search form](add-ons/search/simple.md) and [advanced search form](add-ons/search/advanced.md).

The only parameter for this tag is the `search-id-parameter` parameter.

You may alternatively use the tag pair:

    {exp:search:total_results}
        {total_results}
    {/exp:search:total_results}

The only variable associated with this tag is `{total_results}`.
