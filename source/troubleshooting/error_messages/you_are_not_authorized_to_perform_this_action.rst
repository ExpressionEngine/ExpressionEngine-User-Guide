You are not authorized to perform this action
=============================================

When accessing certain locations within the control panel
ExpressionEngine returns the following error message: "**You are not
authorized to perform this action".**

Troubleshooting Authorization Issues
------------------------------------

Logging into the Control Panel
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Only members of the "Superadmin" Member Group can access the Control
Panel under all circumstances. Users belonging to other groups need to
have appropriate group permissions to access the Control Panel. By
default, ExpressionEngine expects user's browsers to send a **valid IP
address** and **User Agent information**. This is meant to help prevent
hacking attempts. Some firewalls and other third-party software
installed on the user's computer might block this information.

This requirement can be disabled:

-  If the Control Panel can be accessed, it is possible to simply turn
   off the "**Require IP Address and User Agent for Login?**" and
   "**Require IP Address and User Agent when receiving comments?**"
   settings in Admin › Security and Session Preferences.
-  The settings can also be overridden by adding the following line to
   the **config.php** file::

	$config['require_ip_for_login'] = "n";

Banned or Blacklisted Users
~~~~~~~~~~~~~~~~~~~~~~~~~~~

This error will also occur for users that have been banned, or are being
blocked by the **Blacklist**. It is possible to block particular **User
Agents** or **domain names** under Modules › Blacklist/Whitelist in the
Control Panel and specific **IP addresses** under Admin › User Banning.
