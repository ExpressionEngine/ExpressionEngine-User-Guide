.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Can not log into the Control Panel on Windows Based server
==========================================================

Log in to the Control Panel fails on a Windows-based server.

Troubleshooting
---------------

Open system/user/config/config.php and add the following
line::

	$config['redirect_method'] = "refresh";


