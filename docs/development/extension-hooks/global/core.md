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

# Core Library Extension Hooks

### `core_boot()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Run tasks on every ExpressionEngine request.

How it's called:

    ee()->extensions->call('core_boot');
    if (ee()->extensions->end_script === TRUE) return;

NOTE: **Note:** This hook fires on every ExpressionEngine request, so be mindful of the speed and resource usage of your code here. If you need to run code based on the type of request, the `REQ` constant can be checked to determine the type of request. It will either be `PAGE` for front-end requests, `CP` for control panel requests, or `ACTION` for module action requests (`ACT=` URLs). e.g.:

    if (REQ != 'CP')
    {
      // Do work only on control panel requests
      return;
    }


### `core_cp_boot()`

| Parameter | Type   |
| --------- | ------ |
| Returns   | `Void` |

Run tasks on every Control Panel request.

How it's called:

    ee()->extensions->call('core_cp_boot');
    if (ee()->extensions->end_script === TRUE) return;

Runs for every Control Panel request, after making sure the user is fully authorized (including MFA) and `ee()->cp` library is loaded.

### `core_template_route($uri_string)`

| Parameter    | Type     | Description                                                              |
| ------------ | -------- | ------------------------------------------------------------------------ |
| \$uri_string | `String` | Current URI string                                                       |
| Returns      | `Array`  | Array containing the name of the template group and template (see below) |

Reassign the template group and template loaded for parsing.

How it's called:

    $edata = ee()->extensions->call('core_template_route', ee()->uri->uri_string);
    if (is_array($edata) && count($edata) == 2)
    {
        list($template_group, $template) = $edata;
    }

Example of array to return:

    array(
        'template_group', // Template group name
        'template'        // Template name
    );
