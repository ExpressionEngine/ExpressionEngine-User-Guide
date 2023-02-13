<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Troubleshooting Front-End Content Management

### Dock and/or front edit links do not show on the front-end of the website.

There are several settings that could prevent the Dock from showing on the front-end of your site.

- No active session on front-end of site - Users must be logged in to access these features. If any of the following are true, a user could have an active session in to the Control Panel while not having an active session on the front-end if any of the following are true:
    - [Website Session type](control-panel/settings/security-privacy.md#website-session-type) is using "Session ID only" or "Cookies and session ID"
    - [CP Session type](control-panel/settings/security-privacy.md#cp-session-type) is set to "Session ID only"

    If either of these conditions are met, then a user will need to be provided with a [login form](member/login.md) on the front-end of the site so to create an active session on the front-end.


- The Dock is disabled via settings or config override. Disabling the Dock will disable all Front-End Content Management on the front-end of your site.
    - Via [front-end editing settings](control-panel/settings/front-end-editing.md), ensure that the "Enable Dock?" setting is toggled on.
    - Via the [`enable_dock` config override](general/system-configuration-overrides.md#enable-dock). If in use, this override must be set to `'y'` for the Dock to work on the front-end.

### Dock shows, but front edit links do not show on the front-end of the website.

- Front edit links are disabled via settings or config override.
    - Via settings [front-end editing settings](control-panel/settings/front-end-editing.md), ensure that the "Enable front-end editing" setting is toggled on.
    - Via the [`enable_frontedit` config override](general/system-configuration-overrides.md#enable-frontedit). If in use, this override must be set to `'y'` for front-end editing to work.

- User does not have proper access to edit channels. Users must be assigned a role which has access to channels and to be able to edit channel content to see related front edit links on the site.

### Dock shows everywhere, while front edit links only show some places.

- If Front edit links are showing on some templates, but not on others then front edit links may be disabled via template settings. Front-end editing can be enabled/disabled under "Front-End Editing Settings" in each template's settings.

![template settings](_images/pro_template_settings.png).

- Automatic front-end editing links are disabled via settings or config override. By default, ExpressionEngine automatically generates front edit links for all entry fields. This can be turned on or off, requiring a developer to [manually insert front edit links](advanced-usage/front-end/frontend.md#customizing-the-link-location) via template tags. If only manually inserted links are showing, this could be the cause.
    - Via Pro's [general settings](control-panel/settings/front-end-editing.md), ensure that the "Enable automatic front-end editing links" setting is toggled on.
    - Via the [`enable_frontedit_links` config override](general/system-configuration-overrides.md#enable_frontedit_links). If in use, this override must be set to `'y'` to automatically insert front edit links.

- Front edit links are disabled via HTML comments, EE template comments, or `disable` parameter. There are 3 ways to disable Pro's automatic generation of front edit links. Ensure that the template code your inspecting isn't surrounded by template comments or wrapped in a field tag using `disable="frontedit`. For details on these methods read the [docs regarding disabling front-edit links](advanced-usage/front-end/frontend.md#enabledisable-the-front-edit-link) 

- User does not have proper access to edit channels they are viewing. Users must be assigned access to channels and to be able to edit channel content to see related front edit links on the site. If the user is viewing entries on the front-end for which they do not have content, then no front edit links will show.
