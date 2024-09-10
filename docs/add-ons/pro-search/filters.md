<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Filters

[TOC]


## Keywords Filter

The Keywords filter lets you filter entries by search terms (ie. keywords). You need to create at least one Collection to use the Keywords filter. It also adds a relevance score to the search results. To further fine-tune a keyword search, the following parameters are available.



### Parameters

#### collection
    Limit search results to given collection names or IDs. Will use all collections if not specified and keywords are given.
#### collection_lang
    Limit search results to collections with the given language(s).
#### keywords
    The search terms to filter by. You can use double quotes to group terms, eg. lion "mighty jungle"
#### keywords:inflect
    Set to yes to enable singular & plural matching for the keywords, based on the language given in keywords:lang. Eg. searching for lions will also match lion.
#### keywords:lang
    The language of the given keywords, eg. en. Adding this will enable keyword inflections and stemming, as well as keyword suggestions.
#### keywords:loose
    Enables partial or substring matches:
- **right**: lion will match lions and lionized.
- **left**: lion will match dandelion and medallion.
- **both**: lion will match stallions and millionaire.
- **no**: lion will only match lion. This is the default.

NOTE: **Note:** keywords:mode needs to be set to any or all.

#### keywords:match
    If a valid field (native or custom) is given, entries where that field exactly matches the keywords given will be pushed to the top of the search results, regardless of score. Eg. title
#### keywords:mode
    How to treat the given keywords:
- **any**: returns entries containing any of the given terms.
- **all**: returns entries containing all of the given terms.
- **exact**: returns entries containing the given terms as an exact phrase.
- **auto**: uses operators to process the given terms. This is the default.
#### keywords:score
    Limit the search results to entries with a score greater than the given number. Eg. >=1 or 2.
#### keywords:stem
    Set to yes to enable matching keywords by their stem, based on the language given in keywords:lang. Eg. searching for sleeping will also match words starting with sleep, like sleeps and sleepy.

NOTE: **Note:** Setting keywords:loose to left or both will result in a slower query than normal. It is recommended to only use this option with languages that do not have word delimiters, like Thai or Japanese.

### Variables
The keywords filter also makes these variables available in the Results tag:

#### {pro_search_collection_id}
    Collection ID for the collection the entry was found in.
#### {pro_search_collection_label}
    Collection label for the collection the entry was found in.
#### {pro_search_collection_language}
    Collection language for the collection the entry was found in.
#### {pro_search_collection_name}
    Collection name for the collection the entry was found in.
#### {pro_search_score}
    Relevance score of the entry.

### Order by collection

By default, search results will be ordered by relevance score:

#### pro_search_score
Use `orderby="pro_search_collection:foo,bar"` to order by collection first, where foo and bar are collection names. Search results that belong to other collections than defined here will be grouped together and shown last.

#### keywords:mode="auto"

The automatic `keywords:mode` uses operators in keywords for any/all/exact matching, excluding terms, and partial matching. The `keywords:loose` parameter is ignored when using this mode.

- **jungle lion**
    Entries containing both “jungle” and “lion”.
- **jungle OR lion**
    Entries containing either “jungle” or “lion” or both.
- **jungle -lion**
    Entries containing “jungle” but not “lion”.
- **"jungle lion"**
    Entries containing the exact phrase “jungle lion”.
- **jun\***
    Entries containing a word that starts with “jun”.
- **\*ion**
    Entries containing a word that ends with “ion”.
- **\*ung\***
    Entries containing a word that contains “ung”.

### Singulars & Plurals

Pro Search supports singular and plural matching of keywords [inflections](http://en.wikipedia.org/wiki/Inflection). To enable this, both the `keywords:inflect` and the `keywords:lang` parameters must be set. Pro Search supports English inflections natively and you can add support for other languages by adding inflection rules to your [Config file](/general/system-configuration-overrides.md):

```
$config['pro_search_inflection_rules'][lang] = array(
  'plural'      => array(),
  'singular'    => array(),
  'irregular'   => array(),
  'uncountable' => array()
);
```

`lang` is the 2-letter language code. The `plural` and `singular` keys should contain an array of key/value pairs to be used in a `preg_replace()` call. The `irregular` key should contain an array of irregular singulars (keys) and plurals (values). The `uncountable` key should contain a flat array of uncountable terms. Here are [Dutch inflection](https://github.com/low/dutch-inflection-rules) rules as an example.

### Stems

Pro Search supports matching of keywords by their stem [stemming](http://en.wikipedia.org/wiki/Stemming). To enable this, both the `keywords:stem` and the `keywords:lang` parameters must be set. English stemming is supported natively, using a [Porter stemmer](http://tartarus.org/martin/PorterStemmer/) class, and you can add support for other languages by adding this to your [Config file](/general/system-configuration-overrides.md):

```
$config['pro_search_stemmers'][lang] = array(
  file_path,
  class_name,
  method
);
```

`lang` is the 2-letter language code. `file_path` is the full path to your the stemmer file, `class_name` is the class name the file contains, `method` is the method name that should be called to return the stem of a given word. Here’s a [Dutch stemmer class](https://github.com/simplicitylab/php-dutch-stemmer) that you could use.

NOTE: **Note:** When enabled, inflections and stems are only applied keyword searches that do not contain wildcards or have keywords:loose set to left, right or both.

## Categories

You can use the native `category` parameter to filter by category. For more advanced filtering by category, you can also divide categories into groups. The group syntax lets you combine AND and OR filtering (category 1 or 2 and category 3 or 4), as parameters are always combined with AND.

### `category`
    Like the [native category= parameter](/channel/channel_entries.md#category), but it also accepts category URL titles.

### `category:group_name`
    Works just like the `category` parameter. When using category URL titles as the value, you can use the category group ID to limit the conversion to category IDs to that specific group, eg. `category:5`

NOTE: **Note:** Use category IDs instead of URL titles for better performance.

## Distance

You can use the Distance filter to limit results by a given maximum distance. This filter requires you to use two channel fields where latitude and longitude values are stored. Alternatively, you can use a single field where the two values are separated by a comma. Using the Distance filter will limit results to entries that actually have latitude and longitude values entered.

### Parameters

#### `distance:from`
    Latitude and longitude values separated by a vertical bar, used to calculate the distance. Eg. 52.163298|4.505547
#### `distance:to`
    The one or two channel field names that contain the latitude and longitude values separated by a vertical bar, used to calculate the distance. Eg. cf_entry_lat|cf_entry_long
#### `distance:radius`
    The maximum distance between the from and to values. Leave blank for no maximum. Eg. 50.
#### `distance:unit`
    The unit for the distances, either km, mi, m or yd. Defaults to km.

NOTE: **Note:** Use two separate fields instead of a single one for better performance.

### Variables
The Distance filter also makes this variable available in the [Results tag](/add-ons/pro-search/tags.md#exppro_searchresults):

#### `{pro_search_distance}`
    The calculated distance in the given unit for this entry.

NOTE: **Note:** Using the Distance filter will return the search results ordered by distance, ignoring keyword relevance if applicable. Override by explicitly setting the orderby parameter.

## Field Search

You can use the native `search:field_name` parameter to target specific fields. Additionally, Pro Search can target the entry’s ***title***, ***url_title***, ***status***, target [Grid](/fieldtypes/grid.md) columns, use multiple values for [numeric matching](/channels/entries.md#numeric-matching) (in combination with the `gt`, `gte`, `lt` and `lte` params), and use ***starts / ends with*** matching.

### Parameters

#### `search:field_name`
    Like the [channel search:field_name= parameter](/channel/channel_entries.md#search-field-name).
#### `search:field_name:column_name`
    Works just like the `search:field_name` parameter, but targets a specific column in a Grid/Matrix field.
#### `search:title`
    Works just like the `search:field_name` parameter, but targets titles.
#### `search:url_title`
    Works just like the `search:field_name` parameter, but targets url_titles.
#### `search:status`
    Works just like the `search:field_name` parameter, but targets statuses.
#### `contains_words`
    Accepts parameter names. Force the given parameter values to match the full term, to ensure that the values are [not contained within other words](/channel/channel_entries.md#contains-matching). Also possible by using `search:field_name="value\W"`.
#### `ends_with`
    Accepts parameter names. Force the given parameter values to match the end of the target field. Also possible by using `search:field_name="value$"`.
#### `exact`
    Accepts parameter names. Force the given parameter values to exactly match the target field. Also possible by using `search:field_name="=value"`.
#### `gt`
    Accepts parameter names. Force the given parameter values to have greater than prepended to it. Also possible by using `search:field_name=">value"`.
#### `gte`
    Accepts parameter names. Force the given parameter values to have greater than or equal to prepended to it. Also possible by using `search:field_name=">=value"`.
#### `lt`
    Accepts parameter names. Force the given parameter values to have less than prepended to it. Also possible by using
`search:field_name="value"`.
#### `lte`
    Accepts parameter names. Force the given parameter values to have less than or equal to prepended to it. Also possible by using
`search:field_name="<=value"`.
#### `starts_with`
    Accepts parameter names. Force the given parameter values to match the beginning of the target field. Also possible by using `search:field_name="^value"`.
#### `smart_field_search`
    Set to `yes` to make `search:field_name` parameters that target non-Grid custom channel fields aware of the channels they belong to. Use this if your search results contain multiple channels.

NOTE: **Note:** using `smart_field_search="yes"` can affect performance, depending on the total amount of entries. Using Collections and collection="" parameter can help in such cases.

## Ranges

You can use the Ranges filter to limit results by a given range, targeting a numeric or date field. If Pro Search detects that the given channel field for the range is a date field, it will try and convert the given range values to timestamps. This will allow custom date ranges as well.

### Parameters

#### `range:field_name`
    Takes a from and to value, separated by a vertical bar: |. Use `field_name:column_name to target Grid/Matrix columns (v4.2.0+).
#### `range-from:field_name`
    Takes a single from value. Use field_name:column_name to target Grid/Matrix columns (v4.2.0+).
#### `range-to:field_name`
    Takes a single to value. Use field_name:column_name to target Grid/Matrix columns (v4.2.0+).
#### `range:min_field:max_field`
    Where min and max are two separate (non-Grid/Matrix) fields. If a single value is given, entries will be returned where the value is between the min and max fields. If a from and to value is given, entries will be returned where the min and max fields overlap the given range.
#### `range-from:min_field:max_field`
    Where min and max are two separate fields. Takes a single from value.
#### `range-to:min_field:max_field`
    Where min and max are two separate fields. Takes a single to value.
#### `exclude`
    Accepts parameter names. Excludes a given parameter value from the range itself. For example,
`range:field_name="0|10" exclude="range:field_name"`
will result in values `> 0` and `< 10` rather than `>= 0` and `<= 10`.

NOTE: **Note:** For numeric fields, make sure the Field Content option in the field’s settings is set to Number, Integer or Decimal.

### Supported Fields
Apart from any custom numeric or date field, the following standard channel fields are supported:

- `entry_date`
- `edit_date`
- `expiration_date`
- `comment_expiration_date`
- `recent_comment_date`
- `view_count_one`
- `view_count_two`
- `view_count_thee`
- `view_count_four`
- `comment_total`

## Relationships

You can use the Relationships filter to limit results by given parent or child entry IDs. The filter works for [Relationships fieldtypes](/fieldtypes/relationships.md).

### Parameters

#### `child:field_name`
    Limit results by entries that have the given entry IDs or URL titles as a child for the Relationships/Playa field defined.
#### `parent:field_name`
    Limit results by entries that have the given entry IDs or URL titles as a parent for the Relationships/Playa field defined.
#### `child:field_name:column_name`
    Limit results by entries that have the given entry IDs or URL titles as a child for the Relationships/Playa column defined in a Grid field.
#### `parent:field_name:column_name`
    Limit results by entries that have the given entry IDs or URL titles as a parent for the Relationships/Playa column defined in a Grid field.

NOTE: **Note:** Use entry IDs instead of URL titles for better performance.

## Tags

You can use the Tags filter to limit results by given tag names or IDs.For more advanced filtering by tags, you can also divide tags into groups. The group syntax lets you combine AND and OR filtering (tag 1 or 2 and tag 3 or 4), as parameters are always combined with AND.

### Parameters

#### `tag_id`
    Limit results by entries that have the given tag IDs assigned to them.
#### `tag_name`
    Limit results by entries that have the given tag names assigned to them.
#### `tag_id:group_name`
    Works just like the tag_id parameter.
#### `tag_name:group_name`
    Works just like the tag_name parameter.
#### `websafe_separator`
    The websafe separator character for multi-word tags. Defaults to +.

NOTE: **Note:** Use `tag_id` instead of `tag_name` for better performance.