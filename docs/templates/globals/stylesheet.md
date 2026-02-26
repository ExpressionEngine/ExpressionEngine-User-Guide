<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Linking to Stylesheets

[TOC]

## Stylesheet Global Variable

The stylesheet global variable is meant for generating URLs for use when linking to stylesheets. The basic syntax is this:

    {stylesheet='template_group/css_template'}

which will return this, (assuming a base URL of https://example.com/)

    https://example.com/?css=template_group/css_template
    
Make sure you substitute "template_group" and "css_template" with the name of your actual template group and CSS template.

The stylesheet variables is used exclusively in the CSS declaration in your pages. It must contain the template group/template name where your stylesheet is located:

    <link rel="stylesheet" type="text/css" media="all" href="{stylesheet='template_group/css_template'}" />

which will return

    <link rel="stylesheet" type="text/css" media="all" href="https://example.com?css=template_group/css_template" />

In many respects, this variable works much like the `{path=''}` global variable. However, there are some special considerations when the stylesheet URL (?css=) is used:

- Pages that are linked and served via the stylesheet URL will **not** be parsed as normal Templates. ExpressionEngine Tags and PHP inside the Template will not be parsed.
- The template will be sent exactly as it is stored. This means that your CSS files will be much more light-weight to serve, because they do not require the use of ExpressionEngine's template parser.
- The template must be set to Type CSS, and "text/css" MIME headers will be sent to the browser. Some browsers will not treat the CSS file as such without these headers.
- If the template is **not** set to be CSS, the server will report a 404 error rather than serve the file as mime type of HTML.

## Triggering a Stylesheet Via the URL

It is also possible to point to a stylesheet template by directly adding the "css" trigger word in the URL path. For instance, if your stylesheet is the "channel_css" template of the "channel" template group, you could point to it using the URL:

[https://example.com/css/channel/channel_css](https://example.com/css/template_group/css_template)

- Again, if the template is **not** set to be CSS, the server will report a 404 error rather than serve the file as mime type HTML.
- This could also cause a conflict if you have a real folder named "/css".

## Using Tags and PHP in a Stylesheet

Additionally, you can run your stylesheets through the full template parser so that tags and PHP can be used. To do so, just use a normal [path variable](templates/globals/path.md) to access your stylesheet. If you link to a template this way, make sure that it is set to "CSS" as the Template Type in order to get the CSS mime headers.

NO PARSING: `{stylesheet='template_group/css_template'}`

    https://example.com/?css=template_group/css_template

FULL PARSING: `{path='template_group/css_template'}`

    https://example.com/template_group/css_template
