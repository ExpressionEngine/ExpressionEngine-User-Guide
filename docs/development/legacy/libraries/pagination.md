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

# Pagination Class

[TOC]

## Generating Pagination

**class `Pagination_object`**

The pagination library (and object) is a flexible way to create pagination for many different instances. More often then not, you will not be using all of it's features and options, but they're there because we've run into situations where they're needed.

Your first step will be using ExpressionEngine's pagination library to create a `Pagination_object`:

    ee()->load->library('pagination');
    $pagination = ee()->pagination->create();

This instance of a `Pagination_object` represents the various conditions, template, and parameters for a specific group of things, whether it's channel entries, comments, files, forum threads, or otherwise.

Once you've created the object, you need to [prepare the template](#prepare-the-template).

### Prepare the Template

#### `prepare($template)`

| Parameter  | Type     | Description                                                                       |
| ---------- | -------- | --------------------------------------------------------------------------------- |
| \$template | `String` | The template data you want to prepare for pagination, typically `TMPL::$tagdata`. |
| Returns    | `String` | The prepared template, typically with it's pagination tags removed.               |

`prepare()` determines if `{paginate}` is in the template data and if so, stores it in the object and removes it from the template. If you're using field pagination (you most likely aren't) then we also do some work to find additional tags needed for that kind of pagination:

    ee()->TMPL->tagdata = $pagination->prepare(ee()->TMPL->tagdata);

The above line removes the pagination template from `TMPL::$tagdata` parses any parameters set on `{pagination_links}`. In addition, if you're using inline pagination (using the `Pagination_object::$position`) we replace the pagination with a marker instead of removing it entirely.

### Build the Pagination

#### `build($total_items, $per_page)`

| Parameter     | Type      | Description                                             |
| ------------- | --------- | ------------------------------------------------------- |
| \$total_items | `Int`     | The total number of items being paginated.              |
| \$per_page    | `Int`     | The number of items to show per page.                   |
| Returns       | `Boolean` | `TRUE` if everything was successful, `FALSE` otherwise. |

The next step in the process is building the pagination. This is most of the heavy lifting in the process and consists of figuring out offsets, how many pages should exist given the `$total_items` and `$per_page`, the basepath and URLs, and then generates the necessary data to later `render`:

    $total_items = $query->num_rows();
    $per_page = ee()->TMPL->fetch_param('limit');
    $pagination->build($total_items, $per_page);

It's recommended that you don't run this step if pagination isn't necessary, so you can see if `$Pagination_object::$paginate` is `TRUE` before running `Pagination_object::build`:

    if ($pagination->paginate === TRUE)
    {
      ...
      $pagination->build($total_items, $per_page);
    }

### Render the Pagination

#### `render($return_data)`

| Parameter     | Type     | Description                                                                                                                                             |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$return_data | `String` | Template with all individual items parsed, about to be output.                                                                                          |
| Returns       | `String` | `$return_data` with pagination added back if required. If pagination was unnecessary, nothing is added and the inline template is removed if necessary. |

The last step is rendering the pagination into your template. Normally the pagination will be added to the top, bottom, or both top and bottom of your tag pair depending upon the `Pagination_object::$position` property:

    $this->return_data = $pagination->render($this->return_data);

NOTE: **Note:** Unless you've manually set `Pagination_object::$position` to `hidden`, you should always run `Pagination_object::render`. It will remove the unused pagination template and tags.

## Properties

[TOC=3]

### `$paginate`

This property is set once `Pagination_object::prepare` and is useful for checking whether subsequent pagination calls should run. It's triggered by finding a `{paginate}` tag, so if you're using something else, you'll need to force the `Pagination_object`'s hand and set this to `TRUE`.

### `$current_page`

The current page number, should be 1 through `n`.

### `$offset`

The current offset, the number of items past the first. For example, if you're showing 10 items per page and you're on page 3, your offset should be 20.

### `$total_items`

The total number of **items** being paginated.

### `$total_pages`

The total number of **pages** being paginated.

### `$per_page`

The number of **items** per page.

### `$basepath`

The basepath URL for the pagination links. Normally this is automatically determined, but in some cases you will have to specify a basepath.

### `$prefix`

The letter used to prefix the offset in pagination URLs (e.g. `blog/archive/P30`, `P` is the prefix and `30` is the offset). If changed, ensure this is fairly unique to URL segments.

### `$position`

**Can only be set, not retrieved.** Manually set the position of the pagination. Only options are `top`, `bottom`, `both`, `inline`, or `hidden`.

### `$type`

**Can only be retrieved, not set.** This is the name of the calling class and is useful for when using the pagination extension hooks so you can only run your hook for specific modules.

### Field Pagination Specific

### `$field_pagination`

This property is set once `Pagination_object::prepare` and is only `TRUE` in the case of field pagination, which will happen if `{multi_field="..."}` is found in `$template`.

### `$cfields`

**Only used with :attr:\`Pagination_object::\$field_pagination\`.** The custom fields that we're potentially paginating over.

### `$field_pagination_query`

**Only used with :attr:\`Pagination_object::\$field_pagination\`.** This is the query for the individual item that is being field paginated over.
