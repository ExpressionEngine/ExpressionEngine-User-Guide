Can not log into the Control Panel on Windows Based server
==========================================================

Log in to the Control Panel fails on a Windows-based server.

Troubleshooting
---------------

Open system/user/config/config.php and add the following
line::

	$config['redirect_method'] = "refresh";


