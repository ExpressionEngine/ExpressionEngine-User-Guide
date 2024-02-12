<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Spanning a Channel Entry Across Multiple Pages

[TOC]

## Overview

ExpressionEngine includes a feature that allows you to automatically split a single channel entry/article across multiple pages. This feature is particularly useful for webzines or other sites that routinely post long articles.

Here's an example of what your channel entries tag might look like with this feature in action:

    {exp:channel:entries channel="news" paginate_type="field" paginate="bottom"}
       <h3>{title}</h3>
       {body}
       {multi_field="page1|page2|page3|page4"}
       <div>
          Last updated on {edit_date format='%M %d, %Y'} at
             {edit_date format='%h:%i %A'}<br />
       </div>
       {paginate}
          <p>Page {current_page} of {total_pages} pages for this article
             {pagination_links}</p>
       {/paginate}
    {/exp:channel:entries}

You may notice that the code shares a lot in common with the code for [channel entry and comment pagination](templates/pagination.md). In fact, the feature is very similar.

The ability to span a channel entry across multiple pages is only available when showing a single entry. That means it's useful on single-entry pages such as "comment" pages.

## Parameters

### `paginate=`

    paginate="top" paginate="bottom"  paginate="both"  paginate="inline"

This parameter determines where the pagination code will appear for your channel entries or comments:

1.  **top**: The navigation text and links will appear _above_ your list of entries.
2.  **bottom**: The navigation text and links will appear _below_ your list of entries.
3.  **both**: The navigation text and links will appear both above and below your list of entries.
4.  **inline**: The navigation text and links will appear within the list of entries for each entry.

If no parameter is specified, the navigation block will default to the "bottom" behavior.

### `paginate_type=`

    paginate_type="field"

Adding this parameter to your channel entries tag simply tells ExpressionEngine to turn this pagination feature on. There is only one possible value for the parameter: "field".

## Variable Pairs

The same variable pairs used in the [channel entry and comment pagination](templates/pagination.md) feature are available here. The following links point to the entries for that feature.

- [{paginate}](templates/pagination.md#variable-pairs)
- [{pagination_links}](templates/pagination.md#variable-pairs)
- [{if next_page}](templates/pagination.md#if-next_page)
- [{if previous_page}](templates/pagination.md#if-previous_page)

## Variables

These individual variables are for use inside the [{paginate}](templates/pagination.md#variable-pairs) tag pair.

### `{current_page}`

This variable is replaced by the page number of the current page you are viewing.

### `{multi_field}`

    {multi_field="summary|body|extended"}

The {multi_field=} variable is the core of the ability to span a channel entry across multiple pages. Within the variable, you specify a pipe-delimited list of the fields. These are the fields that will be used for each individual page. Here is an example of how the feature works:

1.  Let's say you set up a channel and it contains (among others) the fields "page1", "page2", "page3", etc.
2.  In your "comments" Template, you set up the {multi_field} variable like so:

        {multi_field="page1|page2|page3"}

3.  When you initially visit your comment page for an entry, where you have the {multi_field} tag in your Template, you will see the content of your "page1" field, just as if you had used the regular {page1} variable.
4.  If your entry has content in the "page2" field then you will see a "next page" link.
5.  When you click that link, you'll see your entry again, but instead of {page1} being displayed, in its place would be {page2}.
6.  This would continue with as many variables/pages as needed.

### `{path}`

The `{path}` variable is used inside of the [{if next_page}](templates/pagination.md#if-next_page) and [{if previous_page}](templates/pagination.md#if-previous_page) variable pairs. It is dynamically replaced with the correct path to the next/previous page.

### `{total_pages}`

The total number of pages of channel entries or comments you have.
