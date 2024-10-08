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

![allow registrations](/_images/members_allow_registrations.png)

Set whether site visitors are allowed to register for accounts.

### Account activation type

![activation types](/_images/members_activation_type.png)

Here you can choose how membership accounts are activated:

- **No activation required**: New members are automatically activated and approved for the site. They can immediately log in and begin using any member areas available at your site.
- **Self-activation via email**: New members are sent an email. Inside the email is a special activation link that the user must visit within two days to activate their account. By default ExpressionEngine uses this method since it ensures that the email address the user submitted when signing up is valid.
- **Manual activation by an administrator**: New members may only be activated by an admin visiting the `Members --> Activate Pending` section of the Control Panel.

### Auto-Login

![Automatic login after activation](/_images/members_auto_login_activation.png)

You can configure auto-login behavior to automatically log a member in after they have completed self-activation via email.  Or if no activation is required you can enable auto-login after registration.

### Activation redirect URL

![Automatic login after activation](/_images/members_activation_redirect_url.png)

Redirect members to a specific URL after clicking the email activation link.  When omitted, system message will be shown instead.

### Notify members when approved?

![Notify members when approved](/_images/members_notify_approval.png)

When set to **yes**, members will receive an email notification when their member registration is approved.

### Notify members when declined?

![Notify members when declined](/_images/members_notify_decline.png)

When set to **yes**, members will receive an email notification when their member registration is declined.

### Require terms of service?

![Require terms of service](/_images/members_require_terms.png)

This preference determines whether new members must indicate that they agree to abide by your site's terms of service before they can register.

If you are using legacy member profile template, when new members register through the site, a "terms of service" block of text is displayed. You may edit the terms of service within the registration form template, located at `Design --> Themes --> Member Profile Templates --> Default --> Registration Form`.

### Enable Multi-Factor Authentication?

This preference enables members to setup [Multi-Factor Authentication](member/mfa.md) with their accounts.

### Allow members to set time preferences?

![Allow members to set time preferences](/_images/members_time_prefs.png)

Set whether dates and times are localized to each members' own localization preferences. If set to "No", all dates and times will be localized to the site default and localization preferences will be disabled in the Member Profile and My Account pages.

### Default Primary Role

![Default Primary Role](/_images/members_default_role.png)

This allows you to specify the Primary Role to which approved members will be assigned.

### Member profile theme

![Member profile theme](/_images/member_profile_theme.png)

The default member profile theme to be used in the Member Profile area of your site. Available, installed themes are listed in the menu.

### Sort by

![sort by](/_images/member_sort_by.png)

Specifies the default sorting criteria to be used by `{exp:members:memberlist}` tag. Choices are: Total Posts, Screen Name, Total Comments, Total Entries, Join Date.
Can also be changed using [`memberlist_row_limit` configuration override](general/system-configuration-overrides.md#memberlist_row_limit).

### Order by

![order by](/_images/member_order_by.png)

Specifies whether to show the `{exp:members:memberlist}` list in _Ascending_ or _Descending_ order.
Can also be changed using [`memberlist_order_by` configuration override](general/system-configuration-overrides.md#memberlist_order_by).

### Total results

![total results](/_images/member_total_results.png)

Specifies the number of results that `{exp:members:memberlist}` tag will display by default.
Can also be changed using [`memberlist_row_limit` configuration override](general/system-configuration-overrides.md#memberlist_row_limit).

### Enable new member notifications?

![Enable new member notifications](/_images/member_new_notifications.png)

If enabled, notifications will be sent to the email addresses specified in the next preference field.

### Notification recipients

![Notification recipients](/_images/member_notification_recipients.png)

Here you can specify the email addresses which should receive notifications (see previous preference). Multiple email addresses should be separated by commas.
