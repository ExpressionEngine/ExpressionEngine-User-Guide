<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Extension Hooks

[TOC]

## pro_search_catch_searc

Use this hook to check incoming data after a Pro Search form was submitted, and optionally change it.

### Arguments

- `$data` _(array)_ — the combined `GET` and `POST` data.

### Return

The (modified) array of data.

    $data = ee()->extensions->call('pro_search_catch_search', $data);
    if (ee()->extensions->end_script === TRUE) return;

## pro_search_channel_entries

Use this hook to use your own channel:entries method to parse the search results tagdata, available in the global `TMPL` object.

### Arguments

`NULL`

### Return

The parsed tagdata as a string or `FALSE` if you want to fall back to the default method.

    if (ee()->extensions->active_hook('pro_search_channel_entries') === TRUE)
    {
      $tagdata = ee()->extensions->call('pro_search_channel_entries');
    }

## pro_search_excerpt

Use this hook to change the excerpt data.

### Arguments

- `$entry_ids` _(array)_ — all the entry IDs of the entries about to be displayed.
- `$row` _(array)_ — the entry details of the current entry.
- `$field_id` _(int)_ — the field ID to be used for the excerpt.

### Return

A string containing the excerpt data or an array containing the excerpt data and a boolean. If an array is given and the second item is `FALSE`, Pro Search will use the given excerpt as is, without truncating or highlighting the keywords.

    $str = ee()->extensions->call('pro_search_excerpt', $entry_ids, $row, $field_id);

## pro_search_get_index_entries

Use this hook to get the entries that need to be indexed. The collection details contain the channel ID and settings, which in turn contain the fields (and weight) to get. The keys in `$col['settings']` are the field IDs, including 0 for the title and a format of `x:y` where `x` is the category group ID and `y` is the category field.

### Arguments

- `$col` _(array)_ — The collection details.
- `$entry_ids` _(array)_ — Optional amount of entry IDs that you need to get.

### Return

An array containing the entry rows you queried. Per row, it will expect at least an `entry_id`. These entries will then be processed and added/updated to the search index.

    $entries = ee()->extensions->call('pro_search_get_index_entries', $col, $entry_ids);

## pro_search_modify_score

Use this hook to modify the score of the search results.

### Arguments

- `$results` _(array)_ — Contains the entry ID as key and current score as value.

### Return

An array containing the entry IDs as keys and new scores as values. If the array is empty, it will trigger No Results.

    $results = ee()->extensions->call('pro_search_modify_score', $results);

## pro_search_post_replace 

Use this hook to perform extra processing after the values of the Find & Replace action is performed, like clearing cache.

### Arguments

- `$entry_ids` _(array)_ — entry ids of the entries that were affected.

    ee()->extensions->call('pro_search_post_replace', $entry_ids);

## pro_search_post_search

Use this hook to change any of the search parameters after the search is executed.

### Arguments

- `$params` _(array)_ — the parameters initially loaded.

### Return

The (modified) array of parameters.

    $params = ee()->extensions->call('pro_search_post_search', $params);
    if (ee()->extensions->end_script === TRUE) return ee()->TMPL->tagdata;

## pro_search_pre_search

Use this hook to change any of the search parameters before the search is executed.

### Arguments

- `$params` _(array)_ — the parameters initially loaded.

### Return

The (modified) array of parameters. Adding a key `keywords-query:_table_column_` will add its value to the where-clause of the keyword search. For example: `$params['keywords-query:entry_id'] = '1';`. It allows for multiple items.

    $params = ee()->extensions->call('pro_search_pre_search', $params);
    if (ee()->extensions->end_script === TRUE) return ee()->TMPL->tagdata;

## pro_search_update_index

Use this hook to change the index data for entries.

### Arguments

- `$data` _(array)_ — the data to be inserted/updated.
- `$entry` _(array)_ — the channel entry associated with this data.

### Return

The (modified) array of data.

    $ext_data = ee()->extensions->call('pro_search_update_index', $data, $entry);
    
    if (is_array($ext_data) && ! empty($ext_data))
    {
      $data = array_merge($data, $ext_data);
    }

## pro_search_update_lexicon

Use this hook to change the lexicon data before it is inserted.

### Arguments

- `$data` _(array)_ — the data to be inserted.

### Return

The (modified) array of data.

    $ext_data = ee()->extensions->call('pro_search_update_lexicon', $data, $entry);
    
    if (is_array($ext_data) && ! empty($ext_data))
    {
      $data = array_merge($data, $ext_data);
    }