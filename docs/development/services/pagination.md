---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# CP/Pagination Service

[TOC]

## Simple Example

Adding pagination to the control panel is a common task and we created a pagination service to assist. This service follows our [style-guide](https://ellislab.com/style-guide/c/listings#pagination) handling all the mathematical calculations. All you need is the number of items you are going to paginate and a URL object:

    $base_url = ee('CP/URL', 'publish/edit');
    $pagination = ee('CP/Pagination', $total_count)
      ->render($base_url);

## CP/Pagination Service Methods

**class `EllisLab\ExpressionEngine\Library\CP\Pagination`**

[TOC=3]

### `perPage($per_page)`

Sets the number of items per page

| Parameter  | Type         | Description                  |
| ---------- | ------------ | ---------------------------- |
| \$per_page | `Int`        | The number of items per page |
| Returns    | `Pagination` | \$this                       |

### `currentPage($current_page)`

Sets page number being displayed

| Parameter      | Type         | Description                      |
| -------------- | ------------ | -------------------------------- |
| \$current_page | `Int`        | The current page (defaults to 1) |
| Returns        | `Pagination` | \$this                           |

### `queryStringVariable($page_variable)`

Sets the query string variable name

| Parameter       | Type         | Description                                                            |
| --------------- | ------------ | ---------------------------------------------------------------------- |
| \$page_variable | `String`     | The name of the page variable in the query string (defaults to 'page') |
| Returns         | `Pagination` | \$this                                                                 |

### `displayPageLinks($pages_to_display)`

Sets the number of numbered pages to calculate

| Parameter | Type         | Description                                               |
| --------- | ------------ | --------------------------------------------------------- |
| \$pages   | `Int`        | The number of numbered pages to calculate (defaults to 3) |
| Returns   | `Pagination` | \$this                                                    |

### `render($base_url)`

Renders the pagination to HTML

| Parameter  | Type     | Description                         |
| ---------- | -------- | ----------------------------------- |
| \$base_url | `Url`    | A CPURL object                      |
| Returns    | `String` | The rendered HTML of the pagination |
