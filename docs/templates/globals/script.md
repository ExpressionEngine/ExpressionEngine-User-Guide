<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Linking to Scripts

[TOC]

## Script Global Variable

The script global variable is meant for generating URLs for use when linking to scripts. The basic syntax is this:

    {script='template_group/js_template'}

Make sure you substitute "template_group" and "js_template" with the name of your actual template group and JS template.

The script variables is used exclusively in the JS declarations in your pages. It must contain the template group/template name where your script is located:

    <link rel="preload" as="script" href="{script='channel/channel_js'}" />

    <script src="{script='channel/channel_js'}"></script>

In many respects, this variable works much like the {path=''} global variable. However, there are some special considerations for the script variable:

- Pages that are linked through the script tag will **not** be parsed as normal Templates. ExpressionEngine Tags and PHP inside the Template will not be parsed. The Template will be sent exactly as it is stored. This means that your JS files will be much more light-weight as they do not require the use of ExpressionEngine's template parser.
- When the script tag is used, "text/js" MIME headers will be sent to the browser. Some browsers will not treat the JS file as such without these headers.

## Triggering a Script Via the URL

It is also possible to point to a script templates by directly adding a "js" trigger word in the URL. For instance, if your script is the "channel_js" Template of the "channel" Template Group, you could point to it using the URL:

[https://example.com/js/channel/channel\\\_js/](https://example.com/js/channel/channel_js/)

## Using Tags and PHP in a Script

Additionally, you can allow your scripts to run through the full template parser so tags and PHP can be used. To do so, just use a normal [path variable](templates/globals/path.md) to access your script. If you specify a template this way make sure that it is set to "JS" as the Template Type.
