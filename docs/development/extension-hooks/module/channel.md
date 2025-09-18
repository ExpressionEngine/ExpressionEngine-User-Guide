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

# Channel Module Extension Hooks

[TOC=2]

## `channel_entries_query_result($this, $query_result)`

| Parameter      | Type     | Description                        |
| -------------- | -------- | ---------------------------------- |
| \$this         | `Object` | Current Channel object             |
| \$query_result | `Array`  | Channel entries query result array |
| Returns        | `Array`  | Modified `$query_result` array     |

Modify the channel entries query result array before the parsing loop starts.

How it's called:

    $query_result = $this->extensions->call('channel_entries_query_result', $this, $query_result);
    if ($this->extensions->end_script === TRUE) return $this->TMPL->tagdata;

## `channel_entries_tagdata($tagdata, $row, $this)`

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| \$tagdata | `String` | Channel entries tagdata |
| \$row     | `Array`  | Current entry data      |
| \$this    | `Object` | Current Channel object  |
| Returns   | `String` | Modified `$tagdata`     |

Modify the tagdata for the channel entries before anything else is parsed.

How it's called:

    $tagdata = $this->extensions->call('channel_entries_tagdata', $tagdata, $row, $this);
    if ($this->extensions->end_script === TRUE) return $tagdata;

## `channel_entries_row($this, $row)`

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| \$this    | `Object` | Current Channel object |
| \$row     | `Array`  | Current entry data     |
| Returns   | `Array`  | Modified `$row`        |

Modify the entry data for the channel entries before anything else is parsed.

How it's called:

    $row = $this->extensions->call('channel_entries_row', $this, $row);
    if ($this->extensions->end_script === TRUE) return $tagdata;

## `channel_entries_tagdata_end($tagdata, $row, $this)`

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| \$tagdata | `String` | Channel entries tagdata |
| \$row     | `Array`  | Current entry data      |
| \$this    | `Object` | Current Channel object  |
| Returns   | `String` | Modified `$tagdata`     |

Take the final result from an entry's parsing and do what you will.

How it's called:

    $tagdata = $this->extensions->call('channel_entries_tagdata_end', $tagdata, $row, $this);
    if ($this->extensions->end_script === TRUE) return $tagdata;

## `channel_module_calendar_start()`

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| Returns   | `String` | Rendered calendar data |

Rewrite the displaying of the calendar tag.

How it's called:

    $edata = $this->extensions->call('channel_module_calendar_start');
    if ($this->extensions->end_script === TRUE) return $edata;

## `channel_module_categories_start()`

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| Returns   | `String` | Rendered category tagdata |

Rewrite the displaying of categories with the Category tag in the Channel module.

How it's called:

    return $this->extensions->call('channel_module_categories_start');

## `channel_module_category_heading_start()`

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| Returns   | `String` | Rendered category heading tagdata |

Rewrite the displaying of category headings.

How it's called:

    ee()->TMPL->tagdata = $this->extensions->call('channel_module_category_heading_start');
    if ($this->extensions->end_script === TRUE) return ee()->TMPL->tagdata;
