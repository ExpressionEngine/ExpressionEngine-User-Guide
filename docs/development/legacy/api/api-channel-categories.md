---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine Channel Categories API

## Calling the Class

The Channel Category class is called with the `api->instantiate()` function:

    ee()->load->library('api');
    ee()->legacy_api->instantiate('channel_categories');

## Function Reference

**class `Api_channel_categories`**

[TOC=3]

### `category_tree($group_id[, $selected = ''[, $order = '']])`

| Parameter  | Type            | Description                                                                                                                 |
| ---------- | --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| \$group_id | `Mixed`         | Category group ID, pipe delimited string of category group IDs or array of category group IDs to create a category tree for |
| \$selected | `Mixed`         | Category ID, pipe delimited string of category IDs or array of category IDs to mark as selected                             |
| \$order    | `String`        | `c` for custom ordering, `a` for alphabetical                                                                               |
| Returns    | `Array/Boolean` | `FALSE` if no results, otherwise an associative array containing the category tree (see below)                              |

This function returns an array consisting of a hierarchy tree of categories. It has one required parameter, the category `group_id`. The category group(s) may be defined as a pipe delimited list of `group_ids` or an array. The second parameter allows the specification of any selected categories (useful when used as form data), while the third parameter determines the ordering of the categories (`a` for alphabetical based on `category_name` or `c` for the specified custom ordering):

    ee()->api_channel_categories->category_tree(
        (mixed) $group_id, [(mixed) $selected, [(string) c or a]]
    );

Example of returned data:

    array(
        0 => array(
            '0' =>  (int) Category ID,
            '1' =>  (string) Category Name,
            '2' =>  (int) Category Group ID,
            '3' =>  (string) Category Group Name,
            '4' =>  (bool) Selected,
            '5' =>  (int) Depth Nested in the Tree,
            '6' =>  (int) Category Parent ID
        ),
        1 => array(...)
    );

### `category_form_tree([$nested = 'y'[, $categories = FALSE[, $sites = FALSE]]])`

| Parameter    | Type     | Description                                                                                                                  |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| \$nested     | `String` | y if you want the array to be nested, anything else will return a flat listing                                               |
| \$categories | `Mixed`  | Category ID, pipe delimited string of category IDs, or array of Category IDs                                                 |
| \$sites      | `Mixed`  | Site ID, pipe delimited string of site IDs, or array of site IDs                                                             |
| Returns      | `Array`  | Array consisting of a hierarchy tree of categories formatted for use in select and multi-select forms and related javascript |

This function returns an array consisting of a hierarchy tree of categories formatted for use in select and multi-select forms and related javascript. It takes 3 optional parameters. The first parameter determines whether the returned categories are arranged in a nested format. The second parameter allows you to specify categories to include or exclude from the array. Included categories may be in the format of an array of category ids. You may also include or exclude categories using a pipe delimited string. This parameter defaults to `(bool) FALSE`, which will include all categories. The third parameter determines the `site_id`, and may be in the format of an array of site ids. You may also include or exclude sites using a pipe delimited string. This parameter defaults to `(bool) FALSE`, which will include only categories from the current site:

    ee()->api_channel_categories->category_form_tree(
        [(string) $nested y/n, [(mixed) $categories, [(mixed) $sites]]]
    );

Example of returned data:

    array(
        0 => array(
            '0' =>  (int) Category Group ID,
            '1' =>  (int) Category ID,
            '2' =>  (string) Category Name in ASCII Format,
            '3' =>  (int) Parent ID
        ),
        1 => array(...)
    );

### `fetch_category_parents($cat_array)`

| Parameter   | Type    | Description           |
| ----------- | ------- | --------------------- |
| \$cat_array | `Array` | Array of category IDs |
| Returns     | `Void`  |                       |

This function finds the parents of the specified categories and adds them to the `cat_parents` class variable:

    ee()->api_channel_categories->fetch_category_parents(
        (array) $cat_array
    );

### `fetch_allowed_category_groups($cat_group)`

| Parameter   | Type            | Description                                                                                                               |
| ----------- | --------------- | ------------------------------------------------------------------------------------------------------------------------- |
| \$cat_group | `Mixed`         | Category ID, or an array or pipe delimited string of category IDs                                                         |
| Returns     | `Array/Boolean` | Array of category group names the user has permission to administrate or `FALSE` if there are no allowed category groups. |

Given an array or a pipe delimited list of category group ids, this returns an array of the category group names if the user has permission to administrate channels or edit categories. Returns `FALSE` otherwise:

    ee()->api_channel_categories->fetch_allowed_category_groups(
        (mixed) $cat_group
    );

Example Usage:

    $group_id = '1|5';

    $allowed = ee()->api_channel_categories->fetch_allowed_category_groups($group_id);

    if ($allowed != FALSE) {
        foreach($allowed as $val)
        {
            echo 'Group ID: '.$val['0'].' Group Name: '.$val['1'].'';
        }
    }
