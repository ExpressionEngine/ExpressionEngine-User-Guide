<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Pro Search Settings

[TOC]

## Global settings

### Encode query
Set to No to use GET variables instead of an encoded query in the URI for the search results page. Read more about encoded queries vs. GET variables. Defaults to Yes.

### Default result page
If a result page is not explicitly given, Pro Search will fall back to this page. You can optionally use %s to place the encoded search query anywhere in the URI. Defaults to search/results.

### Search Log size
Searches are logged in the Pro Search Log. You can set the maximum amount of recent searches to log. Set to 0 to disable logging altogether. Defaults to 500.

### Collection batch size
Building a search collection index or lexicon can be strenuous for your web server. To alleviate the load, you can set a batch size. Indexes will be built in batches of this size. Defaults to 100.

### Excerpt length
The maximum amount of words to display in the search excerpt. Set to 0 to display the full excerpt. Defaults to 50.

## Filters
All Filters that are available. All filters are enabled by default. You can optionally disable unused filters.

## Encoded queries vs. GET variables

Not all ExpressionEngine installations let you use GET variables. That’s why Pro Search uses an encoded and URI-safe segment to pass on a search query to the results page. An encoded query looks something like this:

`domain.com/search/results/eyJrZXl3b3JkcyI6ImhlbGxvIHdvcmxkIn0`

The same query with GET variables would look like this:

`domain.com/search/results?keywords=hello+world`

Using GET variables is not possible if the `uri_protocol` config setting is set to QUERY_STRING. It can also cause unexpected behavior if you’re using the second exception (the question mark) in your `.htaccess` file when hiding `index.php`. If you can, use the encoded query instead as this will always work.

NOTE:**Note:** When using GET variables, make sure Dynamic Channel Query Caching is turned off.

## Keywords filter settings

The following settings apply specifically to the Keywords filter.

### Highlight keywords

Choose a tag which is used to highlight keywords in the search excerpt. Options are `<em>`, `<span>`, `<strong>`, and `<mark>`. Choosing any of these tags will allow you to choose to highlight keywords in the Title as well. Defaults to do not highlight.

### Minimum word length

The ft_min_word_len setting of your MySQL installation determines the minimum length of words indexed by the Full Text index. Setting that value here will trigger an alternative search algorithm when the search term is smaller than this size. Defaults to 4. Do not alter unless you have customized your MySQL installation.

### Stop words

By default, MySQL keeps a list of stop words, which are ignored in the Full Text index. An alternative search method is triggered when the search query contains one or more of these words. Do not alter unless you have customised your MySQL installation.

### Ignore words

A list of words that will be removed from the given keywords so as not to trigger the alternative search method. These ignore words will only be stripped from the keywords for non-exact searches. Additionally, these words will not be added to the lexicon.

## Permissions

Per member group, you can define a set of permissions: whether the members in that group can manage collections, manage the lexicon, manage shortcuts, can use the Find & Replace utility, can view the search log or can view the replace log.