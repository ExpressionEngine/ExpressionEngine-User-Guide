.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Supplied argument is not a valid MySQL-Link resource
====================================================

ExpressionEngine returns the following warning: **"Supplied argument is
not a valid MySQL-Link resource."**

Troubleshooting
---------------

This error is usually returned in one of two cases:

The MySQL server is down
~~~~~~~~~~~~~~~~~~~~~~~~

This can only be resolved by the database administrator who should be
contacted immediately.

MySQL has run out of database connections
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the server is working properly, MySQL might be running out of database
connections. If that's the case, ensure that the database is using
non-persistent connections by adding the following line to config.php::

	$config['db_conntype'] = "0";
