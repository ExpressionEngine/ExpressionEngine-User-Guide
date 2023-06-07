<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# General Utilities

[TOC]

## PHP Info

**Control Panel Location: `Tools > Utilities > PHP Info`**

The PHP Info page of the Control Panel allows you to see the configuration details of your PHP installation, via the standard [phpinfo()](https://www.php.net/phpinfo) command.

The page will show a great deal of information about your server, server configuration, PHP installation, etc., which can be very useful if you are trying to troubleshoot a problem or determine whether your server supports a certain feature.

## Manage Add-on Extensions

**Control Panel Location: `Tools > Utilities > Manage Extensions`**

Since Extensions are calling code within the ExpressionEngine code there is a chance that an extension will interfere with how your site is working. If you are unsure of which extension might be causing a problem you can either turn them off one by one until the problem disappears.

![Manage Add-on Extensions](_images/utilities-extensions.png)

TIP: **Tip:** If you want to temporary disable _all_ extensions, you can set `$config['allow_extensions'] = 'n';` [configuration override](general/system-configuration-overrides.md#allow_extensions) in `config.php` file.
