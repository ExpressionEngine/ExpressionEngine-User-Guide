<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
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

### `enable_dock`

Allows turning off front-end facing features of EE Pro completely. When set to `n`, Dock will not be shown and front-end field editing will not be enabled.

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Enables Dock and all its features    (default) |
| n     | Turn off Dock, front-end editing and Prolets   |

Example Usage:

    $config['enable_dock'] = 'n';

### `enable_frontedit`

When set to `n`, completely disables front-end editing while keeping Dock visible and Prolets functional.

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Enables front-end editing    (default) |
| n     | Disable front-end editing   |


Example Usage:

    $config['enable_frontedit'] = 'n';

### `enable_frontedit_links`

When set to `n`, disables automatic creation of content management links on front-end. The links can still be [added manually](pro/frontend.html#customizing-the-link).

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Enable automatic front-end editing links    (default) |
| n     | Disable automatic front-end editing links   |

Example Usage:

    $config['enable_frontedit_links'] = 'y';
