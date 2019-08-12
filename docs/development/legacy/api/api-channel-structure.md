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

# ExpressionEngine Channel Structure API

## Calling the Class

The Channel Structure class is called with the `api->instantiate()` function:

    ee()->load->library('api'); ee()->legacy_api->instantiate('channel_structure');

## Function Reference

**class `Api_channel_structure`**

[TOC=3]

### `get_channel_info($channel_id)`

Fetches all metadata for a channel.

| Parameter    | Type                                 | Description                                |
| ------------ | ------------------------------------ | ------------------------------------------ |
| \$channel_id | `Int`                                | ID of the channel to fetch information for |
| Returns      | `CodeIgniter database result object` | Database result object or `FALSE` on error |

    ee()->api_channel_structure->get_channel_info((int) $channel_id);

### `get_channels([$site_id = FALSE])`

Fetches channel names and ids.

| Parameter | Type                                 | Description                                  |
| --------- | ------------------------------------ | -------------------------------------------- |
| \$site_id | `Int`                                | The site ID you want channel information for |
| Returns   | `CodeIgniter database result object` | Database result object or `FALSE` on error   |

    ee()->api_channel_structure->get_channels([(int) $site_id]);

### `delete_channel($channel_id = ''[, $site_id = NULL])`

Delete a channel.

| Parameter    | Type             | Description                                             |
| ------------ | ---------------- | ------------------------------------------------------- |
| \$channel_id | `Int`            | ID of the channel to delete                             |
| \$site_id    | `Int`            | Specify the site ID of the channel if necessary         |
| Returns      | `String/Boolean` | Channel Title on successful delete or `FALSE` on error. |

    ee()->api_channel_structure->delete_channel((int) $channel_id, [(int) $site_id]);

### `create_channel($data)`

Creates a new channel.

| Parameter | Type              | Description                                             |
| --------- | ----------------- | ------------------------------------------------------- |
| \$data    | `Array`           | Array of data necessary to create a channel (see below) |
| Returns   | `Integer/Boolean` | ID of newly created channel or `FALSE` on error.        |

    ee()->api_channel_structure->create_channel((array) $data);

At the minimum, `channel_title` and `channel_name` must be in the \$data array.

Values that may be passed in the data array include:

- `site_id`, (int)
- `channel_title`, (string)
- `channel_name`, (string a-zA-Z0-9\_- only)
- `url_title_prefix`, (string a-zA-Z0-9\_- only)
- `comment_expiration`, (int)
- `create_templates`, (string yes/no) **Also Requires:**
  - `old_group_id`
  - `group_name`, (string a-zA-Z0-9\_- only)
  - `template_theme`
- `cat_group`, (int or array of category group ids)
- `dupe_id`
- `status_group`
- `field_group`
- `channel_url`
- `channel_lang`
- `group_order`

Example Usage:

    $data = array(
        'channel_title' => 'News',
        'channel_name'  => 'news',
        'field_group' => 2,
        'channel_url' => 'https://example.com/news/',
        'status_group'  => 1
    );

    if (ee()->api_channel_structure->create_channel($data) === FALSE)
    {
        show_error('An Error Occurred Creating the Channel');
    }

### `modify_channel($data)`

Update an existing Channel:

| Parameter | Type              | Description                                                                                   |
| --------- | ----------------- | --------------------------------------------------------------------------------------------- |
| \$data    | `Array`           | Channel modification data (see `Api_channel_structure::create_channel`'s data array examples) |
| Returns   | `Integer/Boolean` | ID of newly created channel or `FALSE` on error                                               |

    ee()->api_channel_structure->modify_channel((array) $data);

The `channel_id` of the channel to be modified is required in the \$data array. `channel_title` and `channel_name` are also required.

In addition to values in the `exp_channels` table, values that may be modified include:

- `apply_expiration_to_existing`, (`bool`) only if `comment_expiration` is set
- `clear_versioning_data`, (`bool`)
