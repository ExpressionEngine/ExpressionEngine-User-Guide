<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Date Localization

ExpressionEngine stores all dates and times in UTC (Universal Coordinated Time), formerly known as GMT (Greenwich Mean Time). The benefit of doing so is that each member of your site can choose their own time zone and date localization settings. This permits entries and other information containing dates/times to appear in each member's local time. All dates are offset in real time for each user viewing your site.

If people browsing your site are not members, or if they have not set a time zone preferences in their personal profile, the times will instead be shown according to your master system localization settings found in the [Localization Settings](control-panel/settings/general.md) area of your Control Panel. If you prefer that the localization settings of a particular member be used as the site default this can be specified in the `Profile --> Personal Settings` page.

If you do not wish to permit your members to set their own localization preferences you can disable the feature in the [Membership Preferences](control-panel/settings/members.md) page of the Control Panel. When disabled, the localization preferences page will not be accessible to members in their member profile area.
