---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Fetching Models

[TOC]

## Basic Usage

Use the `get()` method with a model name to begin a query:

    $builder = ee('Model')->get('Template');

This will return a [Query Builder](development/services/model/query-builder.md) object, which we will use narrow down the selection. When you're ready to retrieve the matching data, call `all()`. You will be returned a [Collection](development/services/model/collection.md):

    $templates = $builder->all();

Usually these calls are chained for brevity:

    $templates = ee('Model')->get('Template')->all();

NOTE: **Note:** Please see [Query Builder](development/services/model/query-builder.md) for list of methods to build model query and [Collection](development/services/model/collection.md) for list of methods to operate returned data.

## Filters

You can filter your selection by individual model properties using the `filter()` method. It expects a property name, an operator, and a value:

    ->filter('template_name', '!=', 'index')

The operator is optional and will default to `==` if not given:

    ->filter('template_name', 'index')
    // same as:
    ->filter('template_name', '==', 'index')

By default, filters will be chained as `AND` conditions. An `OR` filter can be applied by using the `orFilter()` method:

    ->filter('username' 'bob')
    ->orFilter('role_id', 1)

For more complex calls, filters can be grouped by using the `filterGroup()`, `orFilterGroup()`, and `endFilterGroup()` methods:

    // filter members who have less than 10 entries AND either have a primary role_id of 1 OR 2.
    ->filter('total_entries', '<', '10')
    ->filterGroup()
        ->filter('role_id', '1')
        ->orFilter('role_id', '2')
    ->endFilterGroup()

### Available filters

| Operator   | Constraint                  | Example                                 |
| ---------- | --------------------------- | --------------------------------------- |
| ==         | Equal                       | filter('id', '==', 5)                   |
| !=         | Not equal                   | filter('id', '!=', 5)                   |
| <          | Less than                   | filter('id', '<' 5)                     |
| >          | Greater than                | filter('id', '>', 5)                    |
| <=         | Less than or equals         | filter('id', '<=', 5)                   |
| >=         | Greater than or equals      | filter('id', '>=', 5)                   |
| IN         | In list of options          | filter('id', 'IN', array(5, 8))         |
| NOT IN     | Not in list of options      | filter('id', 'NOT IN', array(5, 8))     |
| LIKE       | Matches wildcard string     | filter('title', 'LIKE', 'hello%')       |
| NOT LIKE   | No wildcard matches         | filter('title', 'NOT LIKE', 'hello%')   |
| REGEXP     | Matches regular expression  | filter('title', 'REGEXP', '^w')         |
| NOT REGEXP | No regular expression match | filter('title', 'NOT REGEXP', 'hello%') |
| IS         | Is NULL                     | filter('title', 'IS', NULL)             |
| IS NOT     | Is not NULL                 | filter('title', 'IS NOT', NULL)         |

## Searching

You can create basic search functionality using the `search()` method. It takes a field, or list of fields, as well as a search term and creates a SQL `LIKE` query to find these items:

    // find titles that contain "hello" and "world"
    ->search('title', 'hello world')
    // find titles or body fields that contain "hello" and "world"
    ->search(['title', 'body'], 'hello world')

The search function knows about more advanced search conventions. It treats quoted strings as single words and excludes words that start with a minus sign:

    // find titles that contain "hello world", but not dog
    ->search('title', '"hello world" -dog');

NOTE: **Note:** Searches are always appended as an `AND` to the end of the query and cannot be used inside filter groups.

## Sorting

The order that the elements are selected in can be changed with the `order()` method. The order options are `ASC` and `DESC` for ascending and descending order, respectively:

    ->order('template_name', 'ASC')

## Limit and Offset

You can limit how many models are selected, by using the `limit()` method:

    $page_one = ee('Model')->get('Template')->limit(10)->all();

To change the starting point of the selection, use the `offset()` method:

    $page_two = ee('Model')->get('Template')->offset(10)->limit(10)->all();

NOTE: **Note:** The `first()` method will always use a limit of 1.

### Example: Pagination

A common use-case for limit and offset is pagination. The following function will accept a page number and return the correct template models for that page:

    function getTemplatesForPage($n)
    {
      $per_page = 10;

      $start = $per_page * ($n - 1); // this ensures page 1 starts at 0

      return ee('Model')
        ->get('Template')
        ->offset($start)
        ->limit($per_page)
        ->all();
    }

## Count

To see the number of matching elements without retrieving all of their data, use the `count()` method instead of `all()`:

    $total_templates = ee('Model')->get('Template')->count();

## Relationships

To access a related model, you can simply access the relationship name as it is defined in the model. By convention, relationships that are singular will return a single model (or null), whereas plural relationships will return a collection of related models:

    // singular
    $template = ee('Model')->get('Template')->first();
    $template_group = $template->TemplateGroup;

    // plural
    $status_group = ee('Model')->get('StatusGroup')->first();
    $statuses = $status_group->Statuses;

By default, all relationship data is loaded on a need-to-know basis. When a related model is accessed, its data is automatically retrieved:

    $template = ee('Model')->get('Template')->first();

    $template_group = $template->TemplateGroup; // fetches the correct template group behind the scenes

This lazy loading behavior is good for single models, but it can cause performance bottlenecks when it is put inside a loop. For example:

    $templates = ee('Model')->get('Template')->all();

    foreach ($templates as $template)
    {
      $group = $template->TemplateGroup; // BAD, triggers a fetch for each iteration
    }

### Eager Loading

To get around this problem, you can specify a relationship to be loaded with the original query. This is done using the `with()` method. The above snippet then becomes:

    $templates = ee('Model')->get('Template')->with('TemplateGroup')->all();

    foreach ($templates as $template)
    {
      $group = $template->TemplateGroup; // OK, already loaded
    }

These eager queries can also be nested to retrieve complex model hierarchies:

    ->get('Template')->with(array('LastAuthor' => 'PrimaryRole'));

NOTE: **Note:** Always call `all()` when using eager loading to ensure getting full set of related models. 

### Filtering on Relationships

Eager loading also enables more advanced filtering and sorting. To specify a column that is not on the main model, simply prefix it with the relationship name:

    ->get('Template')->with('TemplateGroup')->filter('TemplateGroup.group_name', 'blog')->all()

## Aliasing

To simplify writing complex filters, any named model can be aliased and the alias used instead:

    ->get('Template as t')
    ->with('TemplateGroup as tg')
    ->filter('tg.group_name', 'news')
    ->sort('t.template_name')
    ->all();

## Partial Data

In order to reduce memory usage, you can ask for only a subset of the available data. This is done with the `fields()` method, which takes as arguments the names of the fields you want to fetch:

    $template = ee('Model')
      ->get('Template')
      ->fields('template_id', 'template_name')
      ->first();

NOTE: **Note:** This method should only be used for querying data. It should not be used for models that will be edited, deleted, or passed to other code for processing.

## Caching

The queries are not cached by default. If you'll need to reuse same model query at a later time, you can specify boolean `true` as parameter for `->all()` or `->first()` methods:

    $templates = ee('Model')->get('Template')->all(true);

    $template = ee('Model')->get('Template')->first(true);
