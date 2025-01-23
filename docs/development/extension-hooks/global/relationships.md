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

# Relationships Fieldtype Extension Hooks

[TOC=2]

## `relationships_display_field($entry_id, $field_id, $sql)`

| Parameter  | Type     | Description                                             |
| ---------- | -------- | ------------------------------------------------------- |
| \$entry_id | `Int`    | Entry ID of entry being edited.                         |
| \$field_id | `Int`    | Field ID of field currently being loaded.               |
| \$sql      | `String` | Compiled SQL about to be run to gather related entries. |
| Returns    | `Array`  | Result Array of query result.                           |

Allows developers to modify the existing query that retrieves related entries for the publish field or to perform their own queries to return related entries.

How it's called:

    if (ee()->extensions->active_hook('relationships_display_field') === TRUE)
    {
        $related = ee()->extensions->call(
            'relationships_display_field',
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

## `relationships_display_field_options($entry_id, $field_id, $sql)`

| Parameter  | Type     | Description                                    |
| ---------- | -------- | ---------------------------------------------- |
| \$entries  | `Object` | ChannelEntry model object.                     |
| \$field_id | `Int`    | Field ID of field currently being loaded.      |
| \$settings | `Array`  | The field settings for the field being loaded. |
| Returns    | `Void`   |                                                |

Allows developers to add additional filters to the entries that populate the select options available to the relationship field.

How it's called:

    if (ee()->extensions->active_hook('relationships_display_field_options') === TRUE)
    {
        ee()->extensions->call(
            'relationships_display_field_options',
            $entries,
            $this->field_id,
            $this->settings
        );
    }

## `relationships_post_save($ships, $entry_id, $field_id)`

| Parameter  | Type    | Description                                    |
| ---------- | ------- | ---------------------------------------------- |
| \$ships    | `Array` | Array of entry IDs to be related to the entry. |
| \$entry_id | `Int`   | Entry ID of entry being saved.                 |
| \$field_id | `Int`   | Field ID of field currently being saved.       |
| Returns    | `Array` | Array of relationships.                        |

Allows developers to modify or add to the relationships array before saving.

How it's called:

    $ships = ee()->extensions->call('relationships_post_save', $ships, $entry_id, $field_id);

## `relationships_query($field_name, $entry_ids, $depths, $sql)`

| Parameter    | Type     | Description                                             |
| ------------ | -------- | ------------------------------------------------------- |
| \$field_name | `String` | Name of current node being parsed.                      |
| \$entry_ids  | `Int`    | Entry IDs of entries being queried for.                 |
| \$depths     | `Array`  | Depth of branches.                                      |
| \$sql        | `String` | Compiled SQL about to be run to gather related entries. |
| Returns      | `Array`  | Result Array of query result.                           |

Allows developers to modify the existing query that retrieves related entries for front end tag parsing or to perform their own queries to return related entries.

How it's called:

    if (ee()->extensions->active_hook('relationships_query') === TRUE)
    {
        $result = ee()->extensions->call(
            'relationships_query',
            $node->field_name(),
            $entry_ids,
            $depths,
            $db->_compile_select()
        );
    }
    else
    {
        $result = $db->get()->result_array();
    }

NOTE: **Note:** To use this hook, you can either add to the existing Active Record call, or call `ee()->db->_reset_select()` to cancel the Active Record call and start your own, or modify the passed compiled SQL.

## `relationships_query_result($entry_lookup)`

| Parameter      | Type    | Description                                           |
| -------------- | ------- | ----------------------------------------------------- |
| \$entry_lookup | `Array` | Array of entry IDs to rows for all relationship tags. |
| Returns        | `Array` | Array of entry IDs to rows.                           |

Allows developers to modify or add columns to the relationships array. Do not use this hook to remove elements.

How it's called:

    $entry_lookup = ee()->extensions->call('relationships_query_result', $entry_lookup);

## `relationships_modify_rows($rows, $node)`

| Parameter | Type        | Description                                   |
| --------- | ----------- | --------------------------------------------- |
| \$rows    | `Array`     | Array of entry IDs to rows for this tag.      |
| \$node    | `ParseNode` | Parse node for the current relationships tag. |
| Returns   | `Array`     | Array of entry ids to rows for this tag.      |

Allows developers to modify or add to the relationship rows right before parsing happens.

How it's called:

    $rows = ee()->extensions->call('relationships_modify_rows', $rows, $node);

## `relationship_entries_tagdata($tagdata, $row)`

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| \$tagdata | `String` | Relationship entries tagdata |
| \$row     | `Array`  | Current relationship data    |
| Returns   | `String` | Modified `$tagdata`          |

Modify the tagdata for the relationship tag pair before anything else is parsed.

How it's called:

    $tagdata = $this->extensions->call('relationship_entries_tagdata', $tagdata, $row);
    if ($this->extensions->end_script === TRUE) return $tagdata;
