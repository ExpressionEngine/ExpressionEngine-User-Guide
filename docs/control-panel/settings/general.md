<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# General Settings

**Control Panel Location: `Settings > General Settings`**

This section of the Control Panel allows you to define the basic settings of your site. If you are using [Multiple Sites](msm/overview.md), note that these settings are per-site.

![](_images/cp-general-settings.png)

## Settings

### Name

This is the name of your website. It may contain spaces and punctuation. This name is available in your Templates by using the {site_name} Global Variable.

### Short name

This will be used in any code-based references to your Site.

### Site License Key

For products that use license validation through the ExpressionEngine Store, a Site License Key is required. (Video: [Attach your product to a site)](https://youtu.be/F80Bl8pid_0) )

### Website online?

This indicates whether or not your site is "live" and displayed to the public. If you set this preference to "Offline" only members of the Super Admin group, and all groups with the "Offline" Website Access permission, will be able to see the site. All other users will be shown the System Offline page, which you can edit at `Developer --> Templates --> Messages --> System Offline`.

### New version auto check

When set to "auto" ExpressionEngine will cause a message to be displayed in the Control Panel when a new version of ExpressionEngine is available. It will **not** automatically download and install a new version.

### Enable Site Manager?

When set to "enable", super admins and member roles with permissions will be able to manage additional websites from the CP.

### Language

The language pack that members will see when logged in to the Control Panel. This only affects the Control Panel. Members are able to override this setting in [Personal Settings](control-panel/member-profile.md#personal-settings).

### Timezone

Specify the default timezone for your site. All dates and times displayed by ExpressionEngine will be localized to this timezone unless overridden by a member's own localization preferences.

### Date & time format

Specify the default date format for your site, and whether your site should display times in a 24-hour format or a 12-hour format with AM and PM. This is the format the Control Panel uses for displaying dates and for date input.

### Week start
The day on which the new week starts. This will be used when displaying calendars

### Show seconds?

Specify whether your site should display seconds in times.
