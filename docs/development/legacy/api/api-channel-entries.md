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

# ExpressionEngine Channel Entries API

## Calling the Class

The Channel Entries class is called with the `api->instantiate()` function:

    ee()->load->library('api');
    ee()->legacy_api->instantiate('channel_entries');

NOTE: **Note:** The API uses a Singleton pattern and does not currently support nesting of calls. Thus instantiating a new call while in the middle of a request may have unanticipated results.

## Function Reference

**class `Api_channel_entries`**

[TOC=3]

### `save_entry($data[, $channel_id = NULL[, $entry_id = 0[, $autosave = FALSE]]])`

Saves a new or existing channel entry.

| Parameter    | Type      | Description                                               |
| ------------ | --------- | --------------------------------------------------------- |
| \$data       | `Array`   | Entry data to submit                                      |
| \$channel_id | `Int`     | The channel ID for the new entry                          |
| \$entry_id   | `Int`     | The entry ID to update                                    |
| \$autosave   | `Boolean` | Whether the entry is being autosaved or not               |
| Returns      | `Boolean` | Whether the new entry was successfully created or updated |

The data array must contain a title and data for all required fields. If the entry date or edit date are not included in the data array, current time will be used instead.:

    ee()->api_channel_entries->save_entry($data, $channel_id, $entry_id, $autosave);

Example Usage:

    ee()->load->library('api');
    ee()->legacy_api->instantiate('channel_entries');
    ee()->legacy_api->instantiate('channel_fields');

    $data = array(
        'title'         => 'Breaking News Story!',
        'entry_date'    => '1256953732',
        'edit_date'     => '1351653729',
        'field_id_6'    => 'Some data',
        'field_ft_6'    => 'none',
        'field_id_19'   => 'More data',
        'field_ft_19'   => 'xhtml'
    );

    ee()->api_channel_fields->setup_entry_settings($channel_id, $data);

    $success = ee()->api_channel_entries->save_entry($data, $channel_id);

    if ( ! $success)
    {
        show_error(implode('<br />', $this->api_channel_entries->errors));
    }

See also `Api_channel_fields::setup_entry_settings` in the Channel Fields API.

NOTE: **Note:** As part of the data normalization, custom data with a value of NULL is transformed to an empty string before database insertion.

NOTE: **Note:** Successful submission requires a valid session exist for a user with the necessary posting privileges.

### `delete_entry($entry_ids)`

This function will delete one or more entries as well as some of their related data. The data array must contain an entry id, or an array of entry ids.

| Parameter   | Type      | Description                                                   |
| ----------- | --------- | ------------------------------------------------------------- |
| \$entry_ids | `Mixed`   | Integer or array of integers containing `entry_ids` to delete |
| Returns     | `Boolean` | Whether an entry was successfully deleted                     |

    ee()->api_channel_entries->delete_entry((mixed) $entry_ids);

### `entry_exists($entry_id)`

This function checks if an entry with a given id exists.

| Parameter  | Type      | Description             |
| ---------- | --------- | ----------------------- |
| \$entry_id | `Int`     | Entry ID to be verified |
| Returns    | `Boolean` | Whether an entry exists |

    ee()->api_channel_entries->entry_exists((int) $entry_id);

### `update_related_cache($entry_id)`

This function updates the relationship cache table. You should only need to use this function if you are manually changing relationship data, `submit_new_entry()` and `update_entry()` will automatically recompile relationship data:

    ee()->api_channel_entries->update_related_cache((int) $entry_id);

### `submit_new_entry($channel_id, $data[, $autosave = FALSE])`

WARN: Deprecated since version 2.6: Use `Api_channel_entries::save_entry` instead.

### `update_entry($entry_id, $data[, $autosave = FALSE])`

WARN: Deprecated since version 2.6: Use `Api_channel_entries::save_entry` instead.

### `send_pings($ping_servers, $channel_id, $entry_id[, $send_now = TRUE])`

WARN: Deprecated since version 2.7.
