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

# Publish Controller Extension Hooks

## `entry_save_and_close_redirect($entry)`

| Parameter | Type                               | Description                                   |
| --------- | ---------------------------------- | --------------------------------------------- |
| \$entry   | `ChannelEntry`                     | Model object of the channel entry being saved |
| Returns   | `String of the URL to redirect to` |                                               |

This hook is executed when a member clicks Save & Close on the publish form, and provides an opportunity to change where the member is redirected to.

How it's called:

    $redirect_url = ee()->extensions->call('entry_save_and_close_redirect', $entry);

## `publish_live_preview_route($entry_data, $uri, $template_id)`

| Parameter     | Type     | Description                                                                                                                                                               |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$entry_data  | `Array`  | Entry data merged with POST data, contains entire publish form data                                                                                                       |
| \$uri         | `String` | The URI to be used for live preview with URL title and entry ID variable parsed, and is either based on the channel's preview URI setting or the entry's Pages module URI |
| \$template_id | `Int`    | The template ID, either derived from the channel's preview URI setting or the entry's Pages module template setting.                                                      |
| Returns       | `Array`  | Array with `uri` key and `template_id` key                                                                                                                                |

This hook is executed when a request is made to create or update the live preview rendering, and allows you change the request URI that should be used for the entry, and also optionally change the template ID to use to render the preview. You'll be passed the URI and template ID that live preview will otherwise use if you do not change them.

NOTE: **Note:** You must return an array with both a `uri` key and `template_id` key. Even if you do not alter one of them, you must still return the value you were originally passed in the method parameter.

How it's called:

    $route = ee()->extensions->call('publish_live_preview_route', array_merge($_POST, $data), $uri, $template_id);
    $uri = $route['uri'];
    $template_id = $route['template_id'];

Example return:

    return [
        'uri'         => 'my/special/uri',
        'template_id' => 5
    ];
