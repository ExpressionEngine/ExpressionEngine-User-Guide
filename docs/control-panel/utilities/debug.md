<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Debug Tools

This section presents set of useful utilities designed to diagnose potential issues with your site.

The check are being run automatically when you visit the utility pages and also they are executed in the background when ExpressionEngine is being updated.

[TOC]

## Debug Template Tags

**Control Panel Location: `Tools > Utilities > Debug Template Tags`**

![Debug Template Tags](_images/utilities-debug-tags.png)

This tool is scanning through the site templates and then lists the add-on [template tags](templates/language.md) used.

If it finds a tag that corresponds to the add-on that is not installed or missing, it indicates that.

Clicking on the tag name would show the list of templates where it is found.

### Debug Fieldtypes

**Control Panel Location: `Tools > Utilities > Debug Fieldtypes`**

![Debug Fieldtypes](_images/utilities-debug-fieldtypes.png)

This page will show the fieldtypes that are being in use by custom fields, but have the corresponding add-on missing or not installed.

It also lists all the fieldtypes that installed on the system, indicating what is currently in use and what is not in use.
