<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member Profile Templates  - Legacy

[TOC]

## Overview

- The public side of your website also has a Member Profile area, enabling your site members to manage their personal profile information without having access to your Control Panel. Typically, this Member Profile area is found at: `https://example.com/member/profile/`

## Member Profile Templates

Theme assets such as images are located in your installation under `themes/ee/member/default/`. Theme templates are located under `system/ee/templates/_themes/member/`.

To customize the templates:

1.  Copy `themes/ee/member/theme_name/` to `themes/user/member/custom_theme_name/`
2.  Copy `system/ee/templates/_themes/member/theme_name/` to `system/user/templates/_themes/member/custom_theme_name/`

NOTE: **Note:** Any changes made to files in `themes/ee/`or `system/ee/` will be lost during an update. Customized themes must be saved in the `themes/user/` or `system/user/` folder.

Templates in `system/user/templates/_themes/member/` can be edited with a text editor, or you may choose to edit them via your Control Panel at `Developer --> Templates --> Members`.

To make edits to the templates from inside the Control Panel, set the `system/user/templates/_theme/` folders and files to be writable. See [File Permissions](troubleshooting/general.md#file-permissions) for details. Only themes in the `system/user/templates/_theme/` folder will be available for editing in the Control Panel.

If you do create a custom theme, you may set it as the site default under `Settings --> Member Settings`

NOTE: **Note:** When building your member profile templates, consider that any external links will pass along referrer data. This can cause security problems if someone clicks on an external link from a secure page. For example, if a user clicks an external link from the password reset page, the external site _could_ use the password reset link from the referrer data to gain access to a user's account. You can strip everything but the base URL by linking to `{path=""}?URL=<your url>`.
	
## Creating Member Links

You can create links that point to various profile template powered member-related pages, enable visitors to sign-up for an account, log-in, log-out, edit their profile, etc.

### Log In

This link points to the personal profile login page. To create the link, use this variable:

    {path='member/login'}

Place the variable inside of a link tag:

    <a href="{path='member/login'}">Log In</a>


### Registration Page

This link points to the member registration page. To create the link, use this variable:

    {path='member/register'}

Place the variable inside of a link tag:

    <a href="{path='member/register'}">Register as a new member</a>

### View Memberlist

This link points to the page showing a list of all registered members. To create the link, use this variable:

    {path='member/memberlist'}

Place the variable inside of a link tag:

    <a href="{path='member/memberlist'}">View the Memberlist</a>

### Member Profile Page

This link points to the personal profile page of the logged-in user, allowing them to edit any of their settings. To create the link, use this variable:

    {path='member/profile'}

Place the variable inside of a link tag:

    <a href="{path='member/profile'}">Edit your profile</a>

When the link is rendered it will appear similar to: <https://example.com/member/profile/>

### Forgotten Password?

This link points to the page where users can retrieve their password:

    {path='member/forgot_password'}

Place the variable inside of a link tag:

    <a href="{path='member/forgot_password'}">Forget your password?</a>
	
