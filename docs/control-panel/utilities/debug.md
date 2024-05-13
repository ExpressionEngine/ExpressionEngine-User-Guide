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

## Review Duplicate Template Groups

**Control Panel Location: `Tools > Utilities > Duplicate Template Groups`**

ExpressionEngine expects each template group name to be unique per site. We do have automated checks to prevent duplicates, however in very rare cases the checks could have been skipped leading to duplicate records for template groups in database.

This utility helps to identify such cases and provide ability to remove or rename the duplicates.


## Debug Template Tags

**Control Panel Location: `Tools > Utilities > Debug Template Tags`**

![Debug Template Tags](_images/utilities-debug-tags.png)

This tool scans the site templates and then lists the add-on [template tags](templates/language.md) used.

If it finds a tag that corresponds to the add-on that is missing or not installed, it indicates that.

Clicking on the tag name shows the list of templates where it is found.

## Debug Fieldtypes

**Control Panel Location: `Tools > Utilities > Debug Fieldtypes`**

![Debug Fieldtypes](_images/utilities-debug-fieldtypes.png)

This page shows the fieldtypes that are being used as custom fields, that have their corresponding add-on missing or not installed.

It also lists all the fieldtypes installed, indicating what is currently in use and what is not in use.

Tip: How to find out if an fieldtype is still in use
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/B0C22re0ZPM" title="How to find out if an ExpressionEngine fieldtype is still in use" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>
