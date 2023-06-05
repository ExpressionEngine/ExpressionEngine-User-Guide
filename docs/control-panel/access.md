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

Session Time to Logout (TTL) refers to how long a user stays logged into the control panel after logging in.  The TTL countdown restarts after any activity by the user in the control panel, such as clicking a link or submitting a form.  After 1 hour of inactivity, administrators will be logged out of the control panel and required to log back in with their username and password.  The default administrative TTL length can be overriden by the [cpan_session_length](general/system-configuration-overrides.md#cpan_session_length) setting.

If control panel sessions are set to use cookies only, the 'Remember me' login option will allow the session cookie to persist for a year.

**Adminstrator Idle Check**

For added security, ExpressionEngine triggers a modal when an administrator is logged into the control panel but idle.  The modal triggers afer 30 minutes if the control panel is in focus and idle, or 45 minutes if idle and out of focus. Unlike a fresh login, if the user logs back in via the modal before the TTL is exceeded, they remain on the same page with no alteration of unsaved data.

![](_images/admin-access-modal.png)


  



