<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Helper functions

There are several helper functions and methods that will help you create your own filters. They are located in several files and objects.

## pro_search_filter

The parent class is located in `/pro_search/filter.pro_search.php`. Use `$this->_method_name_()` in your filter class.

### _get_field_id

_Deprecated since v4.2.0._ Use [`$this->fields->id()`](#id) instead.

### _get_where_search

_Deprecated since v4.2.0._ Use [`$this->fields->sql()`](#sql) instead.

### _remove_rogue_vars

Removes unset variables from the template before EE does it. Useful if your vars could be input for other tags.

#### Arguments

- `$key` _(string or array)_ — the variable name or names you wish to remove.
- `$prefix` _(bool, optional)_ — whether to apply the `pro_search_` prefix to the given names. Defaults to `TRUE`.

### _log

A shortcut for `ee()->TMPL->log_item()`.

#### Arguments
- `$msg` _(string)_ — the message you wish to log.


## pro_search_params

The library class is located in `/pro_search/libraries/pro_search_params.php` and mapped to `$this->params`. Use `$this->params->_method_name_()` in your filter class.

### explode

Turns a multi-valued parameter string to an array.

#### Arguments

 `$str` _(string)_ — parameter to explode.

#### Returns

An array where the first value contains the exploded values and the second value is a boolean whether the parameter had `not`  prefixed to it.

### get

Gets all parameters for this search query, or a single one.

#### Arguments

- `$key` _(string, optional)_ — parameter name to get. Omit for all.
- `$fallback` _(mixed, optional)_ — value to return if parameter is not set.

#### Returns

All parameters if no key is given, the parameter value if present, or the fallback if not present.

### get_prefixed

Gets all parameters where the name starts with given string.

#### Arguments

- `$prefix` _(string)_ — prefix to look for.
- `$strip` _(bool)_ — whether to strip the prefix from the parameter name when returning the matching parameters.

#### Returns

An associative array of the matching parameters.

### in_param

Checks if given value is present in given parameter.

#### Arguments

- `$val` _(string)_ — value to look for.
- `$param` _(string)_ — the parameter name which may or may not contain that value.

#### Returns

`Bool`

### prep

Modifies a parameter value to EE syntax based on the presence of the parameter name in other parameters like [require_all](/add-ons/pro-search/parameters.md#inclusive-values) or [exclude](/add-ons/pro-search/parameters.md#exclude-values).

#### Arguments

- `$key` _(string)_ — parameter name.
- `$val` _(string)_ — parameter value.

#### Returns

The modified value.

### site_ids

Gets the current site IDs based on the `site` parameter.

#### Returns
An array of the current site IDs.



## pro_search_fields

The library class is located in `/pro_search/libraries/pro_search_fields.php` and mapped to `$this->fields`. Use `$this->fields->_method_name_()` in your filter class.

### id

Retrieves the field ID for the given custom field name.

#### Arguments

- `$name` _(string)_ — the field name.

#### Returns

The field ID found, or 0 if no valid ID is found.

### is_native

Determines whether given field name is native, ie. part of the `exp_channel_titles` table.

#### Arguments

- `$name` _(string)_ — the field name.

#### Returns

`TRUE` or `FALSE`.

### is_date

Determines whether given field name is a date field, custom or native.

#### Arguments

- `$name` _(string)_ — the field name.

#### Returns

`TRUE` or `FALSE`.

### is_grid

Determines whether given field name is a Grid field.

#### Arguments

- `$name` _(string)_ — the field name.

#### Returns

`TRUE` or `FALSE`.

### is_rel

Determines whether given field name is a Relationships field.

#### Arguments

- `$name` _(string)_ — the field name.

#### Returns

`TRUE` or `FALSE`.

### is__third_party_field_name_

Determines whether given field name is a _third_party_field_name_ field, where that field uses _var pair syntax_. For example: `is_matrix` or `is_playa`.

#### Arguments

- `$name` _(string)_ — the field name.

#### Returns

`TRUE` or `FALSE`.

### grid_col_id

Retrieves the Grid column ID for the given grid column name.

#### Arguments

- `$field_id` _(int)_ — the Grid field ID.
- `$name` _(string)_ — the column name.

#### Returns

The field ID found, or FALSE if no valid ID is found.

### sql

Returns a SQL where-clause based on given table column name and parameter value, using the Field Search syntax rules.

#### Arguments

- `$col` _(string)_ — the database table column name, eg. `field_id_5`
- `$val` _(string)_ — a parameter value, eg. `=foo|bar`

#### Returns
A SQL where-clause, eg. `((field_id_5 = 'foo') OR (field_id_5 = 'bar'))`


## pro_search_settings

The library class is located in `/pro_search/libraries/pro_search_settings.php`. Use `ee()->pro_search_settings->_method_name_()` in your filter class.

### get

Gets all settings, or a single one.

#### Arguments

- `$key` _(string, optional)_ — setting name to get. Omit for all.
- `$fallback` _(mixed, optional)_ — value to return if setting is not set.

#### Returns

All settings if no key is given, the setting value if present, or the fallback if not present.


## Pro Search Helper

The helper file is located in `/pro_search/helpers/pro_search_helper.php`. Use `_function_name_()` in your filter class.

### low_array_is_numeric

Checks if given array only consists of numeric values.

#### Arguments

- `$array` _(array)_ — array to check.

#### Returns

`Bool`

### low_flatten_results

See: [array_column](http://php.net/manual/en/function.array-column.php). Also works for PHP < 5.5.