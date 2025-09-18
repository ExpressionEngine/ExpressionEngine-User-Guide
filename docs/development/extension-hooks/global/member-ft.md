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

# Members Fieldtype Extension Hooks

[TOC=2]

## `member_relationships_display_field($entry_id, $field_id, $sql)`

| Parameter  | Type     | Description                                             |
| ---------- | -------- | ------------------------------------------------------- |
| \$entry_id | `Int`    | Entry ID of entry being edited.                         |
| \$field_id | `Int`    | Field ID of field currently being loaded.               |
| \$sql      | `String` | Compiled SQL about to be run to gather related members. |
| Returns    | `Array`  | Result Array of query result.                           |

Allows developers to modify the existing query that retrieves related members for the publish field or to perform their own queries to return related members.

How it's called:

    if (ee()->extensions->active_hook('member_relationships_display_field') === TRUE)
    {
        $related = ee()->extensions->call(
            'member_relationships_display_field',
            $entry_id,
            $this->field_id,
            ee()->db->_compile_select()
        );
    }
    else
    {
        $related = ee()->db->get()->result_array();
    }

NOTE: **Note:** To use this hook, you can either add to the existing Active Record call, or call `ee()->db->_reset_select()` to cancel the Active Record call and start your own, or modify the passed compiled SQL.

## `member_relationships_post_save($ships, $entry_id, $field_id)`

| Parameter  | Type    | Description                                    |
| ---------- | ------- | ---------------------------------------------- |
| \$ships    | `Array` | Array of member IDs to be related to the entry. |
| \$entry_id | `Int`   | Entry ID of entry being saved.                 |
| \$field_id | `Int`   | Field ID of field currently being saved.       |
| Returns    | `Array` | Array of relationships.                        |

Allows developers to modify or add to the relationships array before saving.

How it's called:

    $ships = ee()->extensions->call('member_relationships_post_save', $ships, $entry_id, $field_id);
