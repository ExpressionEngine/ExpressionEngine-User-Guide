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

# Forum Module Extension Hooks

[TOC=3]

### `forum_add_template($which, $classname)`

| Parameter   | Type     | Description                                                             |
| ----------- | -------- | ----------------------------------------------------------------------- |
| \$which     | `String` | The name of the template to be loaded.                                  |
| \$classname | `String` | The name of the class and thus folder associated with the template name |
| Returns     | `String` | Modified `$classname`                                                   |

Allows the addition and loading of entirely new templates.

How it's called:

    $classname = ee()->extensions->call('forum_add_template', $which, $classname);

### `forum_include_extras($this, $function, $element)`

| Parameter  | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| \$this     | `Object` | The current Forum object                          |
| \$function | `String` | The name of the template being parsed.            |
| \$element  | `String` | A string containing the contents of the template. |
| Returns    | `String` | Modified template (`$element`)                     |

Allows additional processing of forum templates that are not associated with an existing forum method call. Can be used in conjunction with the forum_add_template hook to parse entirely new templates.

How it's called:

    $element = ee()->extensions->call('forum_include_extras', $this, $function, $element);

### `forum_submission_form_start($this, $str)`

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| \$this    | `Object` | The current Forum Core object    |
| \$str     | `String` | Submission form template         |
| Returns   | `String` | Modified forum template (`$str`) |

Allows rewrite or modify of Submission form template before processing

How it's called:

    $str = ee()->extensions->universal_call('forum_submission_form_start', $this, $str);
    if (ee()->extensions->end_script === TRUE) return $str;

### `forum_submission_form_end($this, $str)`

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| \$this    | `Object` | The current Forum Core object   |
| \$str     | `String` | Submission form template        |
| Returns   | `String` | Modified form template (`$str`) |

Final chance to modify the submission form before it is displayed

How it's called:

    $str = ee()->extensions->universal_call('forum_submission_form_end', $this, $str);
    if (ee()->extensions->end_script === TRUE) return $str;

### `forum_submission_page($this, $type)`

| Parameter | Type     | Description                                          |
| --------- | -------- | ---------------------------------------------------- |
| \$this    | `Object` | The current Forum Core object                        |
| \$type    | `String` | `new_topic`, `edit_topic`, `new_reply`, `edit_reply` |
| Returns   | `Void`   |                                                      |

Allows usurping of forum submission forms and more error checking and permissions, too.

How it's called:

    $edata = $this->extensions->universal_call('forum_submission_page', $this, $type);
    if ($this->extensions->end_script === TRUE) return $edata;

### `forum_submit_post_start($this)`

| Parameter | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| \$this    | `Object` | The current Forum Core object |
| Returns   | `Void`   |                               |

Allows usurping of forum submission routine or possible adding more checks and permissions.

How it's called:

    $edata = ee()->extensions->universal_call('forum_submit_post_start', $this);
    if (ee()->extensions->end_script === TRUE) return $edata;

### `forum_submit_post_end($this, $data)`

| Parameter | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| \$this    | `Object` | The current Forum Core object |
| \$data    | `Array`  | the forum post data array     |
| Returns   | `Void`   |                               |

Do more processing after the post is submitted.

How it's called:

    $edata = ee()->extensions->universal_call('forum_submit_post_end', $this, $data);
    if (ee()->extensions->end_script === TRUE) return $edata;

NOTE: **Note:** User notifications have not been sent at this point.

### `forum_threads_template($this, $str, $tquery)`

| Parameter | Type     | Description                                          |
| --------- | -------- | ---------------------------------------------------- |
| \$this    | `Object` | The current Forum Core object                        |
| \$str     | `String` | The topics thread template                           |
| \$tquery  | `Object` | Thread database object                               |
| Returns   | `String` | Modified threads template (`$str`) before processing |

Allows modifying of the Threads display template before it is processed.

How it's called:

    $str = ee()->extensions->universal_call('forum_threads_template', $this, $str, $tquery);
    if (ee()->extensions->end_script === TRUE) return $str;

### `forum_thread_rows_absolute_end($this, $data, $thread_rows)`

| Parameter     | Type     | Description                                                       |
| ------------- | -------- | ----------------------------------------------------------------- |
| \$this        | `Object` | The current Forum Core object                                     |
| \$data        | `Array`  | Information about the current group of thread_rows (announcement, |
| \$thread_rows | `String` | The fully processed thread row template                           |
| Returns       | `String` | Modified thread row template (`$thread_rows`)                     |

Take the processed thread rows and do what you wish

How it's called:

    $thread_rows = ee()->extensions->universal_call('forum_thread_rows_absolute_end', $this, $data, $thread_rows);
    if (ee()->extensions->end_script === TRUE) return $thread_rows;

### `forum_thread_rows_loop_start($this, $data, $row, $temp)`

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| \$this    | `Object` | The current Forum Core object       |
| \$data    | `Array`  | The data for all thread rows        |
| \$row     | `Array`  | The data for this thread row (post) |
| \$temp    | `String` | The processed thread row            |
| Returns   | `String` | Modified thread row (`$temp`)       |

Modify the thread row template and data before any processing takes place.

How it's called:

    $temp = ee()->extensions->universal_call('forum_thread_rows_loop_start', $this, $data, $row, $temp);
    if (ee()->extensions->end_script === TRUE) return;

### `forum_thread_rows_loop_end($this, $data, $row, $temp)`

| Parameter | Type     | Description                         |
| --------- | -------- | ----------------------------------- |
| \$this    | `Object` | The current Forum Core object       |
| \$data    | `Array`  | The data for all thread rows        |
| \$row     | `Array`  | The data for this thread row (post) |
| \$temp    | `String` | The processed thread row            |
| Returns   | `String` | Modified thread row (`$temp`)       |

Modify the processed row before it is appended to the template output.

How it's called:

    $temp = ee()->extensions->universal_call('forum_thread_rows_loop_end', $this, $data, $row, $temp);
    if (ee()->extensions->end_script === TRUE) return;

### `forum_thread_rows_start($this, $template, $data, $is_announcement, $thread_review)`

| Parameter         | Type      | Description                                 |
| ----------------- | --------- | ------------------------------------------- |
| \$this            | `Object`  | The current Forum Core object               |
| \$template        | `String`  | The topics thread row template              |
| \$data            | `Array`   | The data for this thread row (post)         |
| \$is_announcement | `Boolean` | `TRUE` if announcement                      |
| \$thread_review   | `Boolean` | `TRUE` if thread review                     |
| Returns           | `String`  | Modified thread rows template (`$template`) |

Allows modifying of the thread rows template.

How it's called:

    $template = ee()->extensions->universal_call('forum_thread_rows_start', $this, $template, $data, $is_announcement, $thread_review);
    if (ee()->extensions->end_script === TRUE) return $template;

### `forum_topics_absolute_end($this, $result, $str)`

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| \$this    | `Object` | The current Forum Core object        |
| \$result  | `Array`  | Array of all of the displayed topics |
| \$str     | `String` | The finalized topics template        |
| Returns   | `String` | Modified topics template (`$str`)    |

Modify the finalized topics template and do what you wish.

How it's called:

    $str = ee()->extensions->universal_call('forum_topics_absolute_end', $this, $query->result(), $str);
    if (ee()->extensions->end_script === TRUE) return $str;

### `forum_topics_loop_start($this, $result, $row, $temp)`

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$this    | `Object` | The current Forum Core object         |
| \$result  | `Array`  | Array of all of the topics            |
| \$row     | `Array`  | The data for this topic               |
| \$temp    | `String` | The yet-to-be-processed template      |
| Returns   | `String` | Modified topic row template (`$temp`) |

Modify the topic row template and data before any processing takes place.

How it's called:

    $temp = ee()->extensions->universal_call('forum_topics_loop_start', $this, $query->result(), $row, $temp);
    if (ee()->extensions->end_script === TRUE) return;

### `forum_topics_loop_end($this, $result, $row, $temp)`

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| \$this    | `Object` | The current Forum Core object    |
| \$result  | `Array`  | Array of all of the topics       |
| \$row     | `Array`  | The data for this topic          |
| \$temp    | `String` | The yet-to-be-processed template |
| Returns   | `String` | Modified topic row (`$temp`)     |

Modify the processed topic row before it is appended to the template output.

How it's called:

    $temp = ee()->extensions->universal_call('forum_topics_loop_end', $this, $query->result(), $row, $temp);
    if (ee()->extensions->end_script === TRUE) return;

### `forum_topics_start($this, $str)`

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| \$this    | `Object` | The current Forum Core object     |
| \$str     | `String` | The topics template               |
| Returns   | `String` | Modified topics template (`$str`) |

Allows modifying of the Topics display template before it is processed.

How it's called:

    $str = ee()->extensions->universal_call('forum_topics_start', $this, $str);
    if (ee()->extensions->end_script === TRUE) return $str;

### `main_forum_table_rows_template()`

| Parameter     | Type     | Description                                                   |
| ------------- | -------- | ------------------------------------------------------------- |
| \$this        | `Object` | The current Forum Core object                                 |
| \$table_rows  | `String` | The unparsed forum table rows template                        |
| \$row         | `Array`  | Array of data for the current row                             |
| \$markers     | `Array`  | Array of topic markers                                        |
| \$read_topics | `Array`  | Array of topics read by current visitor                       |
| Returns       | `Array`  | Modified and parsed forum table rows template (`$table_rows`) |

Allows modifying of the forum_table_rows template

How it's called:

    $table_rows = ee()->extensions->universal_call('main_forum_table_rows_template', $this, $table_rows, $row, $markers, $read_topics);
    if (ee()->extensions->end_script === TRUE) return $table_rows;
