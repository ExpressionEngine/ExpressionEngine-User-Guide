<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Troubleshooting ExpressionEngine Pro

[TOC]

## Dock and/or front edit links do not show on the front-end of the website.

There are several settings that could prevent the Dock from showing on the front-end of your site.

- No active session on front-end of site - Users must be logged in to access Pro's features. If any of the following are true, a user could have an active session in to the Control Panel while not having an active session on the front-end if any of the following are true:
    - [Website Session type](control-panel/settings/security-privacy.md#website-session-type) is using "Session ID only" or "Cookies and session ID"
    - [CP Session type](control-panel/settings/security-privacy.md#cp-session-type) is set to "Session ID only"

    If either of these conditions are met, then a user will need to be provided with a [login form](member/login.md) on the front-end of the site so to create an active session on the front-end and access ExpressionEngine Pro features.


- [Role Permissions](pro/permissions/expressionEngine-pro-role-access) - Users must be assigned a role with proper permissions to use ExpressionEngine Pro on both the front and back-end of the site.

- The Dock is disabled via settings or config override. Disabling the Dock will disable all of Pro's features on the front-end of your site.
    - Via Pro's [general settings](pro/configuration.md#general-settings), ensure that the "Enable Dock?" setting is toggled on.
    - Via the [`enable_dock` config override](pro/configuration.md#enable_dock). If in use, this override must be set to `'y'` for the Dock and Pro features to work on the front-end.

## Dock shows, but front edit links do not show on the front-end of the website.

- Front edit links are disabled via settings or config override.
    - Via Pro's [general settings](pro/configuration.md#general-settings), ensure that the "Enable front-end editing" setting is toggled on.
    - Via the [`enable_frontedit` config override](pro/configuration.md#enable_frontedit). If in use, this override must be set to `'y'` for front-end editing to work.

## Dock shows everywhere, while front edit links only show some places.

- If Front edit links are showing on some templates, but not on others then front edit links may be disabled via template settings. Front-end editing can be enabled/disabled under "Pro Settings" in each template's settings.
![images/pro_template_settings.png].

- Automatic front-end editing links are disabled via settings or config override. By default, ExpressionEngine Pro automatically generates front edit links for all entry fields. This can be turned on or off, requiring a developer to [manually insert front edit links](pro/frontend.md#customizing-the-link-location) via template tags.
    - Via Pro's [general settings](pro/configuration.md#general-settings), ensure that the "Enable automatic front-end editing links" setting is toggled on.
    - Via the [`enable_frontedit_links` config override](pro/configuration.md#enable_frontedit_links). If in use, this override must be set to `'y'` for Pro to automatically insert front edit links.

