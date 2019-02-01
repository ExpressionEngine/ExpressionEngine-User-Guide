---
lang: js
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Javascript Table Plugin

**class `$.fn.table`**

[TOC]

The javascript table plugin provides the javascript counterpart to the enhanced table class. It uses the jQuery UI widget pattern, which means that it will be available directly on the table. The initial setup is done automatically when a datasource is declared in the [Table Class](development/legacy/libraries/table.md).

NOTE: **Note:** The plugin does not automatically handle sorting and filtering. Your datasource will be called when manipulating these options.

## Adding a filter

### `add_filter(obj)`

| Parameter | Type            | Description                                                                      |
| --------- | --------------- | -------------------------------------------------------------------------------- |
| obj       | `JQuery Object` | jQuery object representing the form/form element to filter by or a manual filter |
| Returns   | `JQuery Object` | The current jQuery object                                                        |

To add a form or form element as a filter, simply pass it to the add_filter function:

    $('table').table('add_filter', $('form'));

You can also manually add one or more filters by passing a plain javascript object to the same function:

    $('table').table('add_filter', { name: 'igor' });

## Controlling Sorting

### `set_sort(column, dir)`

| Parameter | Type            | Description                                   |
| --------- | --------------- | --------------------------------------------- |
| column    |                 | The column to manually sort                   |
| dir       |                 | The direction to sort; either `asc` or `desc` |
| Returns   | `JQuery Object` | The current jQuery object                     |

The plugin allows you to manually control sorting. You can set a sort by providing a column name and a direction:

    $('table').table('set_sort', 'name', 'asc');

You can also add a sub-sort to the current sort::

    $('table').table('add_sort', 'age', 'desc');

You can also revert to the initial sort after making changes::

    $('table').table('clear_sort', 'age', 'desc');

NOTE: **Note:** Sorting is automatically handled when headers are clicked.

## Events

The plugin fires various events to report its internal state.

### `tableload`

Fired at the beginning of a table change. Bind to this to show a loading indicator:

    $('table').bind('tableload', function() {
        $('#indicator').show();
    });

### `tableupdate`

Fired when the table html refreshes. Bind to this to hide a loading indicator:

    $('table').bind('tableload', function() {
        $('#indicator').show();
    });
