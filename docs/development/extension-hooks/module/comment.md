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

# Comment Module Extension Hooks

[TOC=2-3]

## Control Panel Hooks (mcp.comment.php)

## `delete_comment_additional($comment_ids)`

| Parameter     | Type    | Description               |
| ------------- | ------- | ------------------------- |
| \$comment_ids | `Array` | Comment IDs being deleted |
| Returns       | `Void`  |                           |

Allows additional processing after a comment is deleted.

How it's called:

    ee()->extensions->call('delete_comment_additional', $comment_ids);
    if (ee()->extensions->end_script === TRUE) return;

## `update_comment_additional($comment_id, $data)`

| Parameter    | Type    | Description                      |
| ------------ | ------- | -------------------------------- |
| \$comment_id | `Int`   | ID of the comment being modified |
| \$data       | `Array` | Comment data                     |
| Returns      | `Void`  |                                  |

Allows additional processing when a comment is updated, executed after the comment is updated.

How it's called:

    ee()->extensions->call('update_comment_additional', $comment_id, $data);
    if (ee()->extensions->end_script === TRUE) return;

## Frontend Comment Hooks (mod.comment.php)

## `comment_entries_query_result($results)`

| Parameter | Type    | Description           |
| --------- | ------- | --------------------- |
| \$results | `Array` | Database result array |
| Returns   | `Array` | Modified `$results`   |

Take the result of the query that gathers the data to display in the Comment Entries tag and modify it.

How it's called:

    $results = ee()->extensions->call('comment_entries_query_result', $results);
    if (ee()->extensions->end_script === TRUE) return ee()->TMPL->tagdata;

## `comment_entries_comment_ids_query($db)`

| Parameter   | Type       | Description                                      |
| ----------- | ---------- | ------------------------------------------------ |
| object \$db | `Database` | Query builder instance for the comment IDs query |
| Returns     | `Void`     |                                                  |

Take the database query object that is building the query to gather IDs for comments to be shown via the Comment Entries tag and manipulate it with your own `->where()` clauses. No need to return the object after use.

How it's called:

    ee()->extensions->call('comment_entries_comment_ids_query', ee()->db);
    if (ee()->extensions->end_script === TRUE) return ee()->TMPL->tagdata;

## `comment_entries_comment_format($row)`

| Parameter | Type     | Description              |
| --------- | -------- | ------------------------ |
| \$row     | `Array`  | Data for current comment |
| Returns   | `String` | Rendered comment         |

Do whatever you want to the comment variable

How it's called:

    $comment = ee()->extensions->call('comment_entries_comment_format', $row);
    if (ee()->extensions->end_script === TRUE) return;

## `comment_entries_tagdata($tagdata, $row)`

| Parameter | Type     | Description                        |
| --------- | -------- | ---------------------------------- |
| \$tagdata | `String` | Tagdata within comment entries tag |
| \$row     | `Array`  | Data for current comment           |
| Returns   | `String` | Modified `$tagdata`                |

Modify and play with the comment entries tagdata before everyone else.

How it's called:

    $tagdata = ee()->extensions->call('comment_entries_tagdata', $tagdata, $row);
    if (ee()->extensions->end_script === TRUE) return $tagdata;

## `comment_form_end($res)`

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \$res     | `String` | Current tagdata for form  |
| Returns   | `String` | Modified `$res` (tagdata) |

Modify, add, etc. something to the comment form at end of processing.

How it's called:

    $res = ee()->extensions->call('comment_form_end', $res);
    if (ee()->extensions->end_script === TRUE) return $res;

## `comment_form_hidden_fields($hidden_fields)`

| Parameter       | Type    | Description                                |
| --------------- | ------- | ------------------------------------------ |
| \$hidden_fields | `Array` | Current hidden fields for the comment form |
| Returns         | `Array` | Modified `$hidden_fields`                  |

Add/Remove Hidden Fields for Comment Form.

How it's called:

    $hidden_fields = ee()->extensions->call('comment_form_hidden_fields', $hidden_fields);
    if (ee()->extensions->end_script === TRUE) return;

## `comment_form_tagdata($tagdata)`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$tagdata | `String` | Comment form tagdata |
| Returns   | `String` | Modified `$tagdata`  |

Modify, add, replace anything in the Comment Form tag.

How it's called:

    $tagdata = ee()->extensions->call('comment_form_tagdata', $tagdata);
    if (ee()->extensions->end_script === TRUE) return;

## `comment_preview_comment_format($row)`

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| \$row     | `Array`  | Data for the comment being previewed |
| Returns   | `String` | Rendered comment preview             |

Play with the tagdata contents of the comment preview.

How it's called:

    $data = ee()->extensions->call('comment_preview_comment_format', $query->row());
    if (ee()->extensions->end_script === TRUE) return;

## `comment_preview_tagdata($tagdata)`

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| \$tagdata | `String` | Comment preview tagdata |
| Returns   | `String` | Modified `$tagdata`     |

Play with the tagdata contents of the comment preview.

How it's called:

    $tagdata = ee()->extensions->call('comment_preview_tagdata', $tagdata);
    if (ee()->extensions->end_script === TRUE) return;

## `insert_comment_start()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Allows complete rewrite of comment submission routine, or could be used to modify the POST data before processing.

How it's called:

    ee()->extensions->call('insert_comment_start');
    if (ee()->extensions->end_script === TRUE) return;

## `insert_comment_end($data, $comment_moderate, $comment_id)`

| Parameter          | Type      | Description                                    |
| ------------------ | --------- | ---------------------------------------------- |
| \$data             | `Array`   | Data for the new comment                       |
| \$comment_moderate | `Boolean` | `TRUE` if the comment is going to be moderated |
| \$comment_id       | `Int`     | ID of comment                                  |
| Returns            | `Void`    |                                                |

More emails, more processing, different redirect at the end of the comment inserting routine.

How it's called:

    ee()->extensions->call('insert_comment_end', $data, $comment_moderate, $comment_id);
    if (ee()->extensions->end_script === TRUE) return;

## `insert_comment_insert_array($data)`

| Parameter | Type    | Description              |
| --------- | ------- | ------------------------ |
| \$data    | `Array` | Data for the new comment |
| Returns   | `Array` | Modified `$data`         |

Modify any of the soon to be inserted values for a new comment.

How it's called:

    $data = ee()->extensions->call('insert_comment_insert_array', $data);
    if (ee()->extensions->end_script === TRUE) return;

## `insert_comment_preferences_sql($sql)`

| Parameter | Type     | Description                                              |
| --------- | -------- | -------------------------------------------------------- |
| \$sql     | `String` | Current query to return preferences for a comment insert |
| Returns   | `String` | Modified `$sql`                                          |

Rewrite or add to the comment preference sql query - Could be handy for comment/weblog restrictions.

How it's called:

    $sql = ee()->extensions->call('insert_comment_preferences_sql', $sql);
    if (ee()->extensions->end_script === TRUE) return;
