.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Allowed memory size of ... bytes exhausted
==========================================

ExpressionEngine returns the following error: **"Allowed memory size of
... bytes exhausted."**

Troubleshooting memory issues
-----------------------------

This error indicates that a PHP process on the server ran out of memory.
The amount of available memory for PHP will vary from server to server.
ExpressionEngine 2.0 requires a minimum of 32MB memory allocated to PHP.

The solution to this error is to increase the memory limit. This would
have to be done by the server administrator or host.
