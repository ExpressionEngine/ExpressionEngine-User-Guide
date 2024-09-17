<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Anatomy of a Pro Search Filter

Below is the skeleton of a Pro Search Filter, containing the default properties and methods.

    class Pro_search_filter_foo extends Pro_search_filter {
    
    	protected $params;
    	protected $fields;
    	protected $priority = 5;
    
    	public function filter($entry_ids)
    	{
    		return $entry_ids;
    	}
    
    	public function fixed_order()
    	{
    		return FALSE;
    	}
    
    	public function exclude()
    	{
    		return NULL;
    	}
    
    	public function results($rows)
    	{
    		return $rows;
    	}
    
    }

## Properties

### $params

(object) — a shortcut to the `ee()->pro_search_params` object for easy access to the current search parameters. Use `$this->params` in your methods.

### $fields (v4.2.0)

(object) — a shortcut to the `ee()->pro_search_fields` object for easy access to the Fields library. Use `$this->fields` in your methods.

### $priority

(int) — indicates when this filter should be executed regarding other filters. Filters with priority `1` will be executed _before_ filters with priority `2`, and so on. If the priority of your filter is irrelevant, you can omit it from your class. Defaults to `5`.

## Methods

### filter

Use this method to filter channel entries.

#### Arguments

*   `$entry_ids` _(null or array)_ — the current search results or `NULL` if no filter has been triggered yet.

#### Returns

An array of entry IDs, an empty array (no results), or `NULL` (if given and your filter is not triggered).

### fixed_order

Should return `TRUE` or `FALSE` depending on whether the entry IDs returned by [the filter method](#filter) are in the order they should appear in the [Results tag](/add-ons/pro-search/tags.md#exppro_searchresults). Defaults to `FALSE`.

#### Returns

`Bool`

### exclude (v5.2.0)

Should return an array of entry IDs that should be _excluded_ from the search results or `NULL` if no specific entries should be excluded.

#### Returns

`Array` or `NULL`

### results

This method is called before displaying the search results in the [Results tag](/add-ons/pro-search/tags.md#exppro_searchresults) so you can add your own custom variables to the search results. It basically piggy-backs on the [channel_entries_query_result](/development/extension-hooks/module/channel.md#channel_entries_query_resultthis-query_result) extension hook.

#### Arguments

*   `$rows` _(array)_ — the entries that are about to be displayed. **Note:** just like the hook, this does _not_ mean _all_ search results. Just the one on the current page.

#### Returns

The (modified) array of entries.