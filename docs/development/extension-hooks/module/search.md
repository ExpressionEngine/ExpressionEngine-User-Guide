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

# Search Module Extension Hooks

## `channel_search_modify_search_query($sql, $hash)`

| Parameter | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| \$sql     | `String` | Unmodified search query                          |
| \$hash    | `String` | Unique ID identifying this query in the database |
| Returns   | `String` | SQL query                                        |

Modify the query stored by the Search Module. When a new search is performed, the Search Module creates the query for searching the database and caches that query in the database for later retrievals.

How it's called:

    $modified_sql = ee()->extensions->call('channel_search_modify_search_query', $sql, $this->hash);
    ...
    if (ee()->extensions->end_script === TRUE) return $sql

## `channel_search_modify_result_query($sql, $hash)`

| Parameter   | Type     | Description                                      |
| ----------- | -------- | ------------------------------------------------ |
| \$sql       | `String` | Unmodified search query                          |
| \$search_id | `String` | Unique ID identifying this query in the database |
| Returns     | `String` | SQL query                                        |

Modify the query retrieved by the Search Module. When search results are displayed, a cached query is retrieved from the database to perform the search.

How it's called:

    $modified_sql = ee()->extensions->call('channel_search_modify_result_query', $sql, $search_id);
