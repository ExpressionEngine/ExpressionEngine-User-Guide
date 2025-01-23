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

# Channel Form Extension Hooks

[TOC=2]

## `channel_form_entry_form_absolute_start($channel_form_obj)`

| Parameter          | Type     | Description                |
| ------------------ | -------- | -------------------------- |
| \$channel_form_obj | `Object` | Active channel form object |
| Returns            | `Void`   |                            |

How it's called:

    ee()->extensions->call('channel_form_entry_form_absolute_start', $this);
    if (ee()->extensions->end_script === TRUE) return;

## `channel_form_entry_form_tagdata_start($tagdata, $channel_form_obj)`

| Parameter          | Type     | Description                |
| ------------------ | -------- | -------------------------- |
| \$tagdata          | `String` | Enclosed template chunk    |
| \$channel_form_obj | `Object` | Active channel form object |
| Returns            | `String` |                            |

How it's called:

    ee()->TMPL->tagdata = ee()->extensions->call('channel_form_entry_form_tagdata_start', ee()->TMPL->tagdata, $this);
    if (ee()->extensions->end_script === TRUE) return;

## `channel_form_entry_form_tagdata_end($return_tagdata, $channel_form_obj)`

| Parameter          | Type     | Description                      |
| ------------------ | -------- | -------------------------------- |
| \$return_tagdata   | `String` | Fully processed template tagdata |
| \$channel_form_obj | `Object` | Active channel form object       |
| Returns            | `String` |                                  |

How it's called:

    $return = ee()->extensions->call('channel_form_entry_form_tagdata_end', $return, $this);
    if (ee()->extensions->end_script === TRUE) return;

## `channel_form_submit_entry_start($channel_form_obj)`

| Parameter          | Type     | Description                |
| ------------------ | -------- | -------------------------- |
| \$channel_form_obj | `Object` | Active channel form object |
| Returns            | `Void`   |                            |
|                    |          |                            |

    ee()->extensions->call('channel_form_submit_entry_start', $this);
    if (ee()->extensions->end_script === TRUE) return;

## `channel_form_submit_entry_end($channel_form_obj)`

| Parameter          | Type     | Description                |
| ------------------ | -------- | -------------------------- |
| \$channel_form_obj | `Object` | Active channel form object |
| Returns            | `Void`   |                            |

How it's called:

    ee()->extensions->call('channel_form_submit_entry_end', $this);
    if (ee()->extensions->end_script === TRUE) return;
