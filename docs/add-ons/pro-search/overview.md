<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Pro Search

ExpressionEngine’s native `channel:entries` tag allows you to fetch and filter entries in many ways by using its parameters. The native Search module, `search:search_results`,  allows for searching by keyword, and returning results from many channels, but is very limited in its overall capabilities. Pro Search combines the two into one module and then throws in many extra features, powerful filters, and a performance boost.

Pro Search uses a custom [full-text](http://dev.mysql.com/doc/refman/5.5/en/fulltext-search.html) index instead of the raw entry data, which makes searching by keywords **Very Fast**. It also adds **relevance** to search results, which can be custom tuned by assigning **different weights** to any searchable field.

Apart from the powerful [keywords filter](/add-ons/pro-search/filters.md#keywords), and the ability to **use any native parameter as a search filter**, Pro Search adds several other filters to further enhance and refine your entries loop or your search results:

- Category: Select any combination of [categories](/add-ons/pro-search/filters.md#categories);
- Distance: Limit entries by a given [distance](/add-ons/pro-search/filters.md#distance) based on latitude/longitude values;
- Fields: Target [specific fields](/add-ons/pro-search/filters.md#field-search), including Titles and Grid columns;
- Number Ranges: Define numeric or date [ranges](/add-ons/pro-search/filters.md#ranges);
- Relationships: Filter based on an entry’s [relationship](/add-ons/pro-search/filters.md#relationships) with other entries;
- Math: Filter by [Grid calculations](https://github.com/low/low_search_table) like min/max values or averages;
- Author: Filter by [Author fields](https://github.com/low/low_search_members) like screen name or email;
- SQL: Filter a field based on a [SQL query](/add-ons/pro-search/parameters.html#sql-parameters)

Other features include:

- Keyword [suggestions](/add-ons/pro-search/tags.md#exppro_searchsuggestions) based on your own [lexicon](/add-ons/pro-search/lexicon.md);
- Fuzzy searches using [singulars & plurals](/add-ons/pro-search/filters.md#keywordsinflect) or [word stems](/add-ons/pro-search/filters.md#keywordsstem);
- [Diacritic insensitive](/add-ons/pro-search/collections.md#diacritics-and-foreign-characters) keyword searches;
- Multiple site search;
- Search [shortcuts](/add-ons/pro-search/shortcuts.md) for custom search queries and URLs;
- An exportable search log;
- A super powerful [Find & Replace utility](/add-ons/pro-search/find-and-replace.md);
- A [custom filter API](/add-ons/pro-search/development/create.md), [fieldtype API](/add-ons/pro-search/development/api.md), and [extension hooks](/add-ons/pro-search/development/hooks.md) for developers.
