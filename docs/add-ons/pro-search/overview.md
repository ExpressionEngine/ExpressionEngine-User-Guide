<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Pro Search

ExpressionEngine’s native `channel:entries` tag allows you to fetch and filter entries in many ways by setting its parameters. The native Search module allows for filtering by keyword, but is limited in its capabilities. Pro Search combines the two into one module and then throw in extra features, filters, and a performance boost. That is Low Search.

Searching by **keywords** uses a custom [full-text](http://dev.mysql.com/doc/refman/5.5/en/fulltext-search.html) index instead of the raw entry data, which makes Low Search fast. **Very fast**. It also adds **relevance** to search results which can be influenced by applying **weight** to any searchable field.

Apart from the powerful [keywords filter](add-ons/pro-search/filters.md#keywords), and the ability to **use any native parameter as a search filter**, Low Search adds several other filters to further enhance and refine your search results:

*   Select any combination of [categories](add-ons/pro-search/filters.md#categories);
*   Limit entries by a given [distance](add-ons/pro-search/filters.md#distance) based on latitude/longitude values;
*   Target [specific fields](add-ons/pro-search/filters.md#field-search), including Titles and Grid/Matrix columns;
*   Define numeric or date [ranges](add-ons/pro-search/filters.md#ranges);
*   Filter based on an entry’s [relationship](add-ons/pro-search/filters.md#relationships) with other entries;
*   Filter by [Grid/Matrix calculations](https://github.com/low/pro_search_table) like min/max values or averages;
*   Filter by [Author fields](https://github.com/low/pro_search_members) like screen name or email;

Filters marked with \* are sold separately. Other features include:

*   Keyword [suggestions](add-ons/pro-search/tags.md#suggestions-tag) based on your own [lexicon](add-ons/pro-search/lexicon.md);
*   Fuzzy searches using [singulars & plurals](add-ons/pro-search/filters.md#keywords-inflect) or [word stems](add-ons/pro-search/filters.md#keywords-stem);
*   [Diacritic insensitive](add-ons/pro-search/collections.md#diacritics) keyword searches;
*   Multiple site search;
*   Search [shortcuts](add-ons/pro-search/shortcuts.md) for custom search queries and URLs;
*   An exportable search log;
*   A super powerful [Find & Replace utility](add-ons/pro-search/find-and-replace);
*   A [custom filter API](add-ons/pro-search/create.md), [fieldtype API](add-ons/pro-search/api.md), and [extension hooks](add-ons/pro-search/hooks.md) for developers.