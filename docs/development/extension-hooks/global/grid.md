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

# Grid Fieldtype Extension Hooks

## `grid_query($entry_ids, $field_id, $content_type, $data_table, $sql)`

| Parameter      | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| \$entry_ids    | `Int`    | Entry IDs to gather data for.                                  |
| \$field_id     | `Int`    | Field ID of field currently being queried.                     |
| \$content_type | `String` | The name of the content type this Grid field lives in, such as |
| \$data_table   | `String` | Name of the table to query the data from.                      |
| \$sql          | `String` | Compiled SQL about to be run to gather Grid row data.          |
| Returns        | `Array`  | Result Array of query result.                                  |

Allows developers to modify and run the query that gathers Grid row data for both the publish form and the front-end tag rendering.

How it's called:

    if (ee()->extensions->active_hook('grid_query') === TRUE)
    {
      $rows = ee()->extensions->call(
        'grid_query',
        $entry_ids,
        $field_id,
        $content_type,
        $this->_data_table($content_type, $field_id),
        ee()->db->_compile_select(FALSE, FALSE)
      );
    }
    else
    {
      $rows = ee()->db->get(
        $this->_data_table($content_type, $field_id)
      )->result_array();
    }

## `grid_save($entry_id, $field_id, $content_type, $data_table, $data)`

| Parameter      | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| \$entry_id     | `Int`    | Entry ID of entry being saved.                                 |
| \$field_id     | `Int`    | Field ID of field being saved.                                 |
| \$content_type | `String` | The name of the content type this Grid field lives in, such as |
| \$data_table   | `String` | Name of the Grid data table to modify.                         |
| \$data         | `Array`  | Array of data with keys for `new_rows`, `updated_rows` and     |
| Returns        | `Array`  | Array of data with aforementioned keys intact.                 |

Allows developers to modify or add to the Grid data array before saving.

How it's called:

    $data = ee()->extensions->call(
      'grid_save',
      $entry_id,
      $field_id,
      $content_type,
      $table_name,
      $data
    );
