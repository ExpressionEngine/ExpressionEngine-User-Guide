<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# CP Access

**Control Panel Access Permissions**

Access to the control panel is determined on a per member role level.  Super admins automatically have full access to the control panel.  For all other member roles, access is specified in the [Member Role Settings](control-panel/member-manager.md).  Access settings determine not just the ability to login to the control panel, but which sections and actions can be taken by the member role.  The navigation will automatically reflect the access permissions a user has.

**Control Panel Access Location**
 
By default, the control panel may be accessed via the admin.php file and, if below root, the system/index.php file.  As per the post-install security recommendations, the system folder may have been renamed or be inaccessable via browser.  The admin.php file may also have been renamed.
 
**Adminstrator Sessions**

How long a user stays logged into the control panel is determined by two factors, the session length and the idle check.  Any activity such as clicking a link or submitting a form restarts the countdown for both times.  If an admin closes the browser or leaves the site and returns before the session expires, they will not need to log back in.  If the site sits open in the browser for longer than allowed by the idle check but before the session expires, they will be required to confirm their password before accessing the open browser pages.

***Session Length***

Session Time to Logout (TTL) refers to how long a user stays logged into the control panel after logging in.  By default, after 1 hour of inactivity, administrators will be logged out of the control panel and required to log back in with their username and password.  The default TTL length can be overriden by the [cpan_session_length](general/system-configuration-overrides.md#cpan_session_length) setting.  

If control panel sessions are set to use cookies only, the 'Remember me' login option will allow the session cookie to persist for 2 weeks.  This may be overriden using the [remember.php configuration file](config/config-files.md#remember_me).

***Adminstrator Idle Check***

For added security, ExpressionEngine triggers a modal when an administrator is logged into the control panel but idle beyond a set length of time.  The modal triggers afer 30 minutes if the control panel is in focus and idle, or 45 minutes if idle and out of focus. Unlike a fresh login, if the user logs back in via the modal before the TTL is exceeded, they remain on the same page(s) with no alteration of unsaved data. The idle check is not a factor if the site is no longer loaded in the browser.

![](_images/admin-access-modal.png)

**Control Panel vs Frontend Sessions**

Sessions are stored in cookies, session ID (URL) or both, see [Security and Privacy Settings](control-panel/settings/security-privacy.md#settings). The control panel and the frontend may have different session types. If the frontend uses cookies only for storage and the control panel uses cookies and sessions, logging into the frontend will not result in being logged into the control panel. However, logging into the control panel will result in being logged into the frontend. Logging into an area that sets a session cookie will apply to any area that requires session cookies only.

So if you're logged into the control panel but the website acts like you're a guest?  You probably don't have session data stored in a cookie per the control panel session settings.
  



