---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Legacy API Library

[TOC]

The API libraries attempt to provide a simple, unified abstraction to common ExpressionEngine operations. This includes managing templates and channels, as well as creating, editing, and deleting channel entries. Typically operations of this sort are complex with multiple steps to maintain database consistency. That makes them prone to errors and difficult to maintain. Making use of the provided APIs removes the burden of staying up-to-date with all of the required steps and ensures that your add-ons will remain functional even if the underlying architecture changes.

## Calling the API

    ee()->load->library('api');

After loading the parent API library, the child classes are loaded with `instantiate()`:

    ee()->legacy_api->instantiate('channel_entries');

At this point, methods within the api_channel_entries api are callable via `ee()->api_channel_entries->method_name();`

## Available APIs

- [Channel Categories](development/legacy/api/api-channel-categories.md) – Retrieve information on Channel Categories.
- [Channel Fields](development/legacy/api/api-channel-fields.md) – Retrieve information on Channel Fields.
- [Channel Structure](development/legacy/api/api-channel-structure.md) – Create, Modify, Delete & Update Channels.
- [Template Structure](development/legacy/api/api-template-structure.md) – Retrieve information on Template Groups.

## Function Reference

The following public functions are accessible:

[TOC=3]

### `Api::instantiate($which)`

| Parameter | Type     | Description                                                                                                                                        |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$which   | `String` | Name of the API to instantiate. Options: `channel_categories`, `channel_entries`, `channel_fields`, `channel_structure`, and `template_structure`. |
| Exception |          | Raises an exception if the specified API doesn't exist                                                                                             |
| Returns   | `Void`   |                                                                                                                                                    |

Instantiate an API:

    ee()->legacy_api->instantiate('channel_entries');

### `Api::error_count()`

| Parameter | Type      | Description                                     |
| --------- | --------- | ----------------------------------------------- |
| Returns   | `Integer` | The number of errors generated in API functions |

Get the number of API errors:

    ee()->legacy_api->error_count();

### `Api::make_url_safe($str)`

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| \$str     | `String` | String to make URL safe |
| Returns   | `String` | Cleansed string         |

Makes a string safe for use in a URL segment:

    ee()->load->library('api');
    $str = 'this is a string that's not URL safe.  (we will clean it for $5).';
    $str = ee()->legacy_api->make_url_safe($str); // Result thisisastringthatsnotURLsafe.wewillcleanitfor5.

NOTE: **Note:** Valid Characters are: a-zA-Z0-9\_-.

### `Api::is_url_safe($str)`

| Parameter | Type      | Description                           |
| --------- | --------- | ------------------------------------- |
| \$str     | `String`  | String to verify URL safety           |
| Returns   | `Boolean` | `TRUE` on success, `FALSE` on failure |

Checks if a string is safe for use in a URL segment:

    ee()->load->library('api');
    $str = 'this is a string that\'s not URL safe.  (we will clean it for $5).';
    if ( ! ee()->legacy_api->is_url_safe($str))
    {
        // Do additional Processing on the string to make it URL safe
    }
