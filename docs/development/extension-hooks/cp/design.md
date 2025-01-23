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

# Design Controller Extension Hooks

## `template_types()`

| Parameter | Type    | Description                            |
| --------- | ------- | -------------------------------------- |
| Returns   | `Array` | The custom templates array (see below) |

Add template types to ExpressionEngine's default set. In the Output library specifically, it is useful to return the appropriate content type header for the template type.

How it's called:

    $template_types = $EE->extensions->call('template_types');

This hook must append a key to the [\$last_call](development/extensions.md) array in the following format:

    $custom_templates = ee()->extensions->last_call;

    $custom_templates['ical'] = array(             // Short name for database
        'template_name'           => 'iCal Feed',  // Display name for Template Type dropdown
        'template_file_extension' => '.ics',       // File extension for saving templates as files
        'template_headers'        => array(        // Custom headers for file type
            'Content-Type: text/ical',
            'Content-Disposition: attachment; filename="event.ics"'
        )
    );

NOTE: **Note:** It is good practice to clean up the templates table and remove your custom template type from templates using it upon extension uninstallation.
