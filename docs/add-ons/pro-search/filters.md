<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# Filters

[TOC]

Different type of Filters are automatically used by the `pro_search:results` tag when the query form uses specific field names, or the results tag includes specific parameters. 

For instance, if a search form contains a `keywords` field, the [Keywords filter](#keywords-filter) will be invoked. If the results tag has a `distance:to="cf_entry_lat|cf_entry_long"` parameter, the [Distance filter](#distance-filter) will be used. If the `search:field_name` parameter or field is used, Pro Search will use the [Field Search filter](#field-search) on the results

## Keywords Filter

The Keywords filter lets you filter entries by search terms (ie. keywords) and calculates a relevance score for each item in the search results.

NOTE: **Note:** You need to create at least one [Collection](/add-ons/pro-search/collections.md) to use with the Keywords filter. (You don't need to create a collection to use the other types of filters, just when using Keywords.)

To further fine-tune a keyword search, the following parameters are available.

### Parameters

#### collection

Limit search results to specified [collections](/add-ons/pro-search/collections.md) (names or IDs). If this parameter is not used and keywords are being searched, EE will search in all collections, so it's best to use this rather than `channel=` in the results. 

    collection="news|staff"

#### collection_lang

Limit search results to collections with the given language(s).

    collection_lang="en"

#### keywords

The search terms to filter by. You usually don't need this because it's in the form data that was submitted or it's in the query / URL. You can use double quotes to group terms, eg. lion "mighty jungle"

    keywords="example"

#### keywords:inflect

Defaults to `no`. Set to `yes` to enable singular & plural matching for the keywords, based on the language given in `keywords:lang`. Eg. searching for `lions` will also match `lion` if you've set `keywords:lang` to `en`

    keywords:inflect="yes"

#### keywords:lang

The language of the given keywords, eg. `en`. Adding this will enable keyword inflections and stemming, as well as keyword suggestions. There is no default.

    keywords:lang="en"

#### keywords:loose

Enables partial or substring matches. If you search for `lion`:

- `keywords:loose="no"`  will only match lion. This is the default.
- `keywords:loose="right"`  will match lions and lionized. (This is a broader match than what keywords:inflect would match.)
- `keywords:loose="left"`  will match dandelion and medallion.
- `keywords:loose="both"`  will match stallions and millionaire.

NOTE: **Note:** keywords:mode needs to be set to `any` or `all` for this matching to happen.

NOTE: **Note:** Setting keywords:loose to left or both will result in a slower query than normal. It is recommended to only use this option with languages that do not have word delimiters, like Thai or Japanese.

#### keywords:match

If a valid field (native or custom) is specified, entries where that field exactly matches the keywords  will be pushed to the top of the search results, regardless of score. For instance, if you specify title, entries with that exact title will appear at the top of the results. You can only specify one field.

    keywords:match="title"

#### keywords:mode

How to treat the given keywords:

- `keywords:mode="auto"` uses operators to process the given keywords. This is the default.
- `keywords:mode="any"` returns entries containing any of the given keywords.
- `keywords:mode="all"` returns entries containing all of the given keywords.
- `keywords:mode="exact"` returns entries containing the given keywords as an exact phrase.

#### keywords:score

Limit the search results to entries with a score equal or greater than the given number. There is no minimum score by default.

    keywords:score="1"

#### keywords:stem

Set to `yes` to enable matching keywords by their stem, based on the language given in `keywords:lang`. E.g. Searching for `sleeping` will also match words starting with sleep, like sleeps and sleepy.


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

### Order By

By default, search results will be ordered by relevance score.

    orderby="pro_search_score"

Use `orderby="pro_search_collection:foo,bar"` to order by collection first and score within that, where foo and bar are collection names. Search results that belong to other collections than what are defined in this parameter will be grouped together and shown last.

#### About Keywords:mode="auto"

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

For `lang`, use the 2-letter language code. The `plural` and `singular` keys should contain an array of key/value pairs to be used in a `preg_replace()` call. The `irregular` key should contain an array of irregular singulars (keys) and plurals (values). The `uncountable` key should contain a flat array of uncountable terms. Here are [Dutch inflection](https://github.com/low/dutch-inflection-rules) rules as an example.

### Stems

Pro Search supports matching of keywords by their [stem](http://en.wikipedia.org/wiki/Stemming). To enable this, both the `keywords:stem` and the `keywords:lang` parameters must be set. English stemming is supported natively, using a [Porter stemmer](http://tartarus.org/martin/PorterStemmer/) class, and you can add support for other languages by adding this to your [Config file](/general/system-configuration-overrides.md):

```
$config['pro_search_stemmers'][lang] = array(
  file_path,
  class_name,
  method
);
```

For `lang`, use the 2-letter language code. `file_path` is the full path to your the stemmer file, `class_name` is the class name the file contains, `method` is the method name that should be called to return the stem of a given word. Here is a [Dutch stemmer class](https://github.com/simplicitylab/php-dutch-stemmer) that you could use.

NOTE: **Note:** When enabled, inflections and stems are only applied to keyword searches that do not contain wildcards or have `keywords:loose` set to left, right or both.

## Categories

Use the native `category` parameter to filter by category. For more advanced filtering by category, you can also divide categories into groups. The group syntax lets you combine AND and OR filtering (category 1 or 2 and category 3 or 4), as parameters are always combined with AND.

### `category`

Like the [native category= parameter](channels/entries.md#category), but it also accepts category URL titles.

### `category:group_name`

Works just like the `category` parameter. When using category URL titles as the value, you can use the category group ID to limit the conversion to category IDs to that specific group, eg. `category:5`

NOTE: **Note:** Use category IDs instead of URL titles for better performance.

## Distance

Use the Distance filter to limit results by a given maximum distance. This filter prefers for you to use two channel fields where latitude and longitude values are stored. Alternatively, you can use a single field where the two values are separated by a comma. Using the Distance filter will limit results to entries that actually have latitude and longitude values entered.

### Parameters

#### `distance:from`

The spot you're using to calculate the distance from. Must be latitude and longitude values separated by a vertical bar.

    distance:from="52.163298|4.505547"

#### `distance:to`

The one or two channel field names that contain the latitude and longitude values you're comparing distance to, separated by a vertical bar if two fields.

    distance:to="store_geocode"
    distance:to="cf_entry_lat|cf_entry_long"

NOTE: **Note:** Use two separate fields instead of a single one for better performance.

#### `distance:radius`

The maximum distance allowable between the from and to values. Leave blank for no maximum.

    distance:radius="50"

#### `distance:unit`

The unit for the distances, either km, mi, m or yd. Defaults to km.

    distance:unit="km"

### Variables

#### `{pro_search_distance}`

The calculated distance in the given unit for this entry. The Distance filter makes this variable available in the [Results tag](/add-ons/pro-search/tags.md#exppro_searchresults).

NOTE: **Note:** Using the Distance filter will return the search results ordered by distance instead of keyword relevance (if applicable). You can override this by explicitly setting the orderby parameter to `pro_search_score`.

## Field Search

Use the native `search:field_name` parameter to target specific fields, just like `channel:entries` does already. Additionally, Pro Search's `pro_search:results` can target the entry’s ***title***, ***url_title***, ***status***, and target [Grid](/fieldtypes/grid.md) columns. It can also use multiple values for [numeric matching](/channels/entries.md#numeric-matching) (in combination with the `gt`, `gte`, `lt` and `lte` params), and use ***starts / ends with*** matching.

### Parameters

#### `search:field_name`

Like the [Channel search:field_name= parameter](channels/entries.md#searchfield_name).

#### `search:field_name:column_name`

Works just like the `search:field_name` parameter, but targets a specific column in a Grid/Matrix field.

#### `search:title`

Works just like the `search:field_name` parameter, but targets titles.

#### `search:url_title`

Works just like the `search:field_name` parameter, but targets url_titles.

#### `search:status`

Works just like the `search:field_name` parameter, but targets statuses.

#### `contains_words`

Accepts search field parameter names. Force the given parameter values to match the full term, to ensure that the values are [not contained within other words](channels/entries.md#contains-matching). Similar to forcing full term matching by using `search:field_name="value\W"`.

    contains_words="search:field_name"

#### `ends_with`

Accepts search field parameter names. Force the given parameter values to match the end of the target field. Also possible by using `search:field_name="value$"`.

#### `exact`

Accepts field parameter names. Force the given parameter values to exactly match the target field. Also possible by using `search:field_name="=value"`.

#### `gt`

Accepts search field parameter names. Force the given parameter values to have greater than prepended to it. Also possible by using `search:field_name=">value"`.

#### `gte`

Accepts search field parameter names. Force the given parameter values to have greater than or equal to prepended to it. Also possible by using `search:field_name=">=value"`.

#### `lt`

Accepts search field parameter names. Force the given parameter values to have less than prepended to it. Also possible by using `search:field_name="value"`.

#### `lte`

Accepts search field parameter names. Force the given parameter values to have less than or equal to prepended to it. Also possible by using `search:field_name="<=value"`.

#### `starts_with`

Accepts search field parameter names. Force the given parameter values to match the beginning of the target field. Also possible by using `search:field_name="^value"`.

#### `smart_field_search`

Set to `yes` to make `search:field_name` parameters that target non-Grid custom channel fields aware of the channels they belong to. Use this if your search results contain multiple channels.

NOTE: **Note:** using `smart_field_search="yes"` can affect performance, depending on the total amount of entries. Using Collections and collection="" parameter can help in such cases.

## Ranges

Use the Ranges filter to target a numeric or date field and limit results by a given range. If Pro Search detects that the given channel field for the range is a date field, it will try and convert the given range values to timestamps. This will allow custom date ranges as well.

### Parameters

#### `range:field_name`

Takes both a from and to value, separated by a vertical bar: |. Use `field_name:column_name` to target Grid/Matrix columns (v4.2.0+).

    range:ticket_price="20|80"

#### `range-from:field_name`

Takes a single from value. Use `field_name:column_name` to target Grid/Matrix columns (v4.2.0+).

    range-from:hire_date="2020-01-01"

#### `range-to:field_name`

Takes a single to value. Use field_name:column_name to target Grid/Matrix columns (v4.2.0+).

    range-to:age="65"

#### `range:min_field:max_field`

Where min and max are two separate (non-Grid/Matrix) fields. If a single value is given, entries will be returned where the value is between the min and max fields. If a from and to value is given, entries will be returned where the min and max fields overlap the given range.

    range:min-deposit:max-deposit="1000"

#### `range-from:min_field:max_field`

Where min and max are two separate fields. Takes a single from value.

#### `range-to:min_field:max_field`

Where min and max are two separate fields. Takes a single to value.

#### `exclude`

Accepts parameter names. Excludes a given parameter value from the range itself. For example, `range:field_name="0|10" exclude="range:field_name"` will result in search values `> 0` and `< 10` rather than `>= 0` and `<= 10`.

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

Use the Relationships filter to limit results by given parent or child entry IDs. The filter works for [Relationships fieldtypes](/fieldtypes/relationships.md).

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

Use the Tags filter to limit results by given tag names or IDs. For more advanced filtering by tags, you can also divide tags into groups. The group syntax lets you combine AND and OR filtering (tag 1 or 2 and tag 3 or 4), as parameters are always combined with AND.

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
