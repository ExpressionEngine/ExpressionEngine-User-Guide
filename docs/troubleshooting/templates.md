<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Troubleshooting Templates

[TOC]

## "Enable HTTP Authentication?" Setting Not Working

If you've enabled [HTTP Authentication](control-panel/template-manager.md#edit-template) for a template and authentication is failing:

1.  First check to make sure that you've also given access to the desired member role(s), and that the user you are authenticating with is from one of those groups.
2.  Double check that the username and password is correct by logging in to ExpressionEngine as that member.

If it still fails to authenticate, it could be that the web server is not making the authentication details available to PHP (and thus unavailable to ExpressionEngine). This is common when the web server is running PHP-FPM and Apache for instance. In those cases, you can fix this by adding the following to the Apache VirtualHost or in your \`.htaccess\`:

    SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1

or:

    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

## Embedded Templates not using my Assigned Variables

When embedding a template assigned variables from the parent templates are not parsed in the child template.

### Assigning Variables and Passing Embedded Variables

Assigned Variables are valid only for the template in which they are assigned.

## PHP and EE Tags are not parsed in the Stylesheet

When including PHP and CSS tags in the stylesheet they are not parsed by the template parser.

### Parsing PHP and EE Tags in the Stylesheet

When using ExpressionEngine to link to stylesheets, the typical way to do this is by using the standard {stylesheet='channel/channel_css'} type syntax. When EE uses the {stylesheet=} tag, two special things happen:

- The stylesheet content is sent with the "text/css" header in order to tell the browser that the content is a stylesheet. This is necessary on some browsers such as Mozilla since the stylesheet is not a standard file with a .css extension.
- ExpressionEngine skips over most of the Template engine and simply serves the stylesheet content in a "raw" form. This is done to make the stylesheet be served as quickly as possible and with the least server overhead possible. It also means that PHP and EE tags are not parsed in the Template.

If parsing PHP and EE tags is a requirement then there are two options:

- use the {path=channel/channel_css} syntax to link to the stylesheet. That variable will cause EE to parse the Template as normal. However, the stylesheet will \[em\]not\[/em\] be sent with the "text/css" header and thus could cause problems in some browsers.
- Use the stylesheet as normal and link to it normally with the {stylesheet=} syntax. For the styles that require PHP or EE tags simply place those in the &lt;head&gt; of your regular pages/Templates and enclose the styles in &lt;style&gt; tags like normal. With this method the dynamic styles are embedded in the regular pages but still link to the external stylesheet for the majority of the CSS.

## Content from my new Channel Field is not appearing on the page.

A new channel field was created and entries were published with content in that channel field; however, content from the channel field does not get output to the page.

### Displaying Content from Channel Fields

Ensure that the channel field is being called within the template. For example, if the channel field is named "extended" then it needs to be called in the template like so:

    {exp:channel:entries}
        {extended}
    {/exp:channel:entries}

## CAPTCHA images not appearing

CAPTCHAs are enabling but there is a blank space where they should appear.

### Troubleshooting missing CAPTCHA Images

There are several possible reasons for CAPTCHA images to not appear:

- The path and/or URL to the CAPTCHA directory is not specified correctly under `Settings --> CAPTCHA`.
- The `images/captchas/` directory is not writable. See [File Permissions](troubleshooting/general.md#file-permissions) for details.
- The server does not support True Type Fonts. TrueType Fonts can be disabled in `Settings --> CAPTCHA`.
- GD library isn't installed and/or working correctly

## Can not save a template with the {exp:query} tag

It is not possible to save a Template that contains a SQL query or uses the {exp:query} EE Tag.

### Templates and Queries

Some Hosts have security implemented that does not allow the POSTing oo hata containing the phrase "select from". This is done in an attempt to help prevent hacking attempts, but it can also interfere with normal operations of dynamic-powered sites like an ExpressionEngine site.

If this behavior is encountered then the host or administrator should be contacted for assistance.
