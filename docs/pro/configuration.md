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

### General Settings
**Control Panel Location: `Addons > ExpressionEngine Pro > General`**



![Pro General Settings](/_images/pro_general_settings.png)

* **Enable Dock** - (Default: On, Matching Config Override: [`enable_dock`](#enable_dock) ) Enabling the Dock controls whether ExpressionEngine Pro is turned on for the front-end of your website. When the Dock is disabled all front-end editing, prolets, and Dock features will be disabled.

* **Enable front-end editing** - (Default: On, Matching Config Override: [`enable_frontedit`](#enable_frontedit)) Enabling front-end editing allows users with respective permissions to edit channel entries and content on the front-end of your website using provided edit links ( <img style="margin-bottom: 0px; vertical-align: middle;" src="../_images/pro_edit.png" alt="pro edit icon"> ) .

* **Enable automatic front-end editing links** - (Default: On, Matching Config Override: [`enable_frontedit_links`](#enable_frontedit_links)) By default ExpressionEngine Pro automatically inserts edit links ( <img style="margin-bottom: 0px; vertical-align: middle;" src="../_images/pro_edit.png" alt="pro edit icon"> ) where editable content is found in templates. These can be disabled on a per field basis or globally when using this toggle. When toggled off, ExpressionEngine Pro will no longer automatically generate edit links and links will need to be [added manually](pro/frontend.md#customizing-the-link-location) where needed in templates.


### Branding Settings
**Control Panel Location: `Addons > ExpressionEngine Pro > Branding`**


![Pro Branding Settings](/_images/pro_branding_settings.png)

* **Logo to show on login screen** - This settings allows you to upload an image that will be shown when users log in to the control panel. The recommendation is that the image is no more than 400px in width.

* **Favicon** - This setting allows you to upload an .ico or .png file which will be used as the favicon while users are in the control panel.


## Config overrides

### `autosave_interval_seconds`

Set the interval between autosaves on the Publish Page and on the Front-end when Pro is installed. If you want to ensure users do not accidentally loose unsaved changes adjust the `[autosave_interval_seconds]` system config override to a lower interval between autosaves. A setting of 10 seconds is recommended, and set as part of the pro install.

| Value   | Description                                                                       |
| ------- | --------------------------------------------------------------------------------- |
| integer | Autosave interval in seconds (default of 60 is changed to 10 upon install of Pro) |

Example Usage:

    $config['autosave_interval_seconds'] = '10';

### `enable_dock`

Allows turning off front-end facing features of ExpressionEngine Pro completely. When set to `n`, Dock will not be shown and front-end field editing will not be enabled.

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

When set to `n`, disables automatic creation of content management links on front-end. The links can still be [added manually](pro/frontend.md#customizing-the-link-location).

| Value | Behavior                                       |
| ----- | ---------------------------------------------- |
| y     | Enable automatic front-end editing links    (default) |
| n     | Disable automatic front-end editing links   |

Example Usage:

    $config['enable_frontedit_links'] = 'y';
    
### `favicon`

URL to file used as favicon in Control Panel. 

Example Usage:

    $config['favicon'] = '/url/to/icon.png';

### `login_logo`

URL to file used as branded logo on login page.

Example Usage:

    $config['login_logo'] = '/url/to/file.jpg';

