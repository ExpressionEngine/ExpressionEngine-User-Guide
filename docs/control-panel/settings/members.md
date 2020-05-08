<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member Settings

**Control Panel Location: `Settings > Member Settings`**

The Membership Preferences section of the Control Panel allows you to set all of your membership-related preferences.

## Settings

### Allow registrations?

Set whether site visitors are allowed to register for accounts.

### Account activation type

Here you can choose how membership accounts are activated:

- **No activation required**: New members are automatically activated and approved for the site. They can immediately log in and begin using any member areas available at your site.
- **Self-activation via email**: New members are sent an email. Inside the email is a special activation link that the user must visit within two days to activate their account. By default ExpressionEngine uses this method since it ensures that the email address the user submitted when signing up is valid.
- **Manual activation by an administrator**: New members may only be activated by an admin visiting the `Members --> Activate Pending` section of the Control Panel.

### Notify members when approved?

When set to **yes**, members will receive an email notification when their member registration is approved.

### Notify members when declined?

When set to **yes**, members will receive an email notification when their member registration is declined.

### Require terms of service?

When new members register through the site, a "terms of service" block of text is displayed. This preference determines whether new members must indicate that they agree to abide by these terms before they can register. You may edit the terms of service within the registration form template, located at `Design --> Themes --> Member Profile Templates --> Default --> Registration Form`.

### Allow members to set time preferences?

Set whether dates and times are localized to each members' own localization preferences. If set to "No", all dates and times will be localized to the site default and localization preferences will be disabled in the Member Profile and My Account pages.

### Default member group

This allows you to specify the Member Group to which approved members will be assigned.

### Member profile theme

The default member profile theme to be used in the Member Profile area of your site. Available, installed themes are listed in the menu.

### Sort by

Specifies the sorting criteria to be used. Choices are: Total Posts, Screen Name, Total Comments, Total Entries, Join Date.

### Order by

Specifies whether to show the list in _Ascending_ or _Descending_ order.

### Total results

Specifies the number of results to return by default.

### Enable new member notifications?

If enabled, notifications will be sent to the email addresses specified in the next preference field.

### Notification recipients

Here you can specify the email addresses which should receive notifications (see previous preference). Multiple email addresses should be separated by commas.
