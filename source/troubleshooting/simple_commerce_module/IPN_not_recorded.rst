.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

IPN not being recorded by Simple Commerce Module
================================================

When testing the Simple Commerce module sometimes the IPN gets sent by
PayPal but the Simple Commerce module does not record it.

Troubleshooting IPN
-------------------

Confirm these settings:

-  Both buyer and seller are verified.
-  Buyer is logged in to ExpressionEngine when purchasing.
-  The email address in the Simple Commerce module matches that entered
   into PayPal. This is case sensitive.


