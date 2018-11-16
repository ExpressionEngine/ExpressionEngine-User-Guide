.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Browser downloading install.php
===============================

When attempting to install the browser tries to download install.php
instead of run it.

Troubleshooting running PHP files
---------------------------------

This behavior is usually an indication that PHP is either not running or
not properly configured on the account or server. Check with the
admin/Host to see if the account has PHP available. If it does, then
make sure it is set to process .php files (as opposed - or in addition -
to something like .php4).

.. note:: This problem can also be caused by memory leaks in the
	browser. Close all browser windows and try again.


