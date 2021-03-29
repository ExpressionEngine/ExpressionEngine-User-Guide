<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine Pro Configuration

[TOC]

## Settings page

On EE Pro add-on settings page you can upload or select image to be shows as company logo on CP login screen and favicon for CP pages.

## Dashboard management

Each member can have their own set of widgets saved for CP homepage. To manage what is being shown, click the gear icon in top right corner of homepage. You can hide or unhide the widgets and change their order. The layut is being saved on per-member basis.

## Config overrides

### `login_logo`

URL to file used as branded logo on login page.

Example Usage:

    $config['login_logo'] = '/url/to/file.jpg';

### `favicon`

URL to file used as favicon in Control Panel.

Example Usage:

    $config['favicon'] = '/url/to/icon.png';

### `disable_dock`

Allows turning off front-end facing features of EE Pro completely. When set to `y`, Dock will not be shown and front-end field editing will not be enabled.

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Turn off Dock, front-end editing and Prolets   |
| n     | Enabled Dock and all its features    (default) |

Example Usage:

    $config['disable_dock'] = 'n';

### `disable_frontedit`

When set to `y`, completely disables front-end editing while keeping Dock visible and Prolets functional.

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Disable front-end editing   |
| n     | Enables front-end editing    (default) |

Example Usage:

    $config['disable_frontedit'] = 'n';

### `disable_frontedit_links`

When set to `y`, disables automatic creation of content management links on front-end. The links can still be [added manually](pro/frontend.html#customizing-the-link).

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Disable automatic front-end editing links   |
| n     | Enable automatic front-end editing links    (default) |

Example Usage:

    $config['disable_frontedit_links'] = 'y';
