.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Warning: Cannot modify header information
=========================================

ExpressionEngine returns the following warning: **"Cannot modify header
information."**

Troubleshooting
---------------

This error is often caused by blank lines or superfluous white space in
a PHP file before the opening or after the closing PHP tag. The
offending PHP file is usually named in the PHP error message.

This error can also be triggered by another PHP error, in which case the
originating error should be resolved first.
