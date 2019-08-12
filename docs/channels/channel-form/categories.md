<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Category Selection

[TOC]

## Category Menu

Creates a menu that allows an entry's categories to be set:

    {category_menu}
      <label for="categories">Categories</label>
      <select name="category[]" id="categories" size="4" multiple="multiple">
        {select_options}
      </select>
    {/category_menu}

## Category Menu Tag Parameters

[TOC=3]

The following parameters are available as category_menu tag pairs:

### `show=`

    {category_menu show="4|7"}

### `show_group=`

    {category_menu show_group="1|3"}

## Categories Tag

If you prefer, you can use the following alternative syntax to generate a category menu.

    <label for="categories">Categories</label>
    <select name="category[]" id="categories" size="4" multiple="multiple">
      {categories}
        <option value="{category_id}"{selected}>{category_name}</option>
      {/categories}
    </select>

## Categories Tag Parameters

The `{categories}` tag pair supports all parameters that are available in the [Channel Categories Tag](channels/categories.md#parameters)

## Category Variables

[TOC=3]

The following variables are available for both the Category Menu or Categories tag pairs described above:

### `{category_id}`

The category id number.

### `{category_name}`

The category name.

### `{category_group_id}`

The category group id number.

### `{category_group}`

The category group name.

### `{category_parent}`

The name of the category parent if it exists, indented according to the category depth.

### `{category_depth}`

The level of nesting assigned to the category. The depth of a top level category is 1.

### `{selected}`

An indicator of whether the category has been selected or not. Is blank if not, selected="selected" otherwise.

### `{checked}`

An indicator of whether the category has been selected or not. Is blank if not, checked="checked" otherwise.
