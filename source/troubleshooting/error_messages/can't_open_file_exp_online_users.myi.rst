.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Can't open file: exp\_online\_users.MYI
=======================================

ExpressionEngine returns the following error: **"Can't open file:
exp\_online\_users.MYI."**

Troubleshooting
---------------

In these cases, MySQL usually returns "Error 145" which means that a
"table is marked as crashed and should be repaired." This is usually
caused by a file associated with that particular database becoming
corrupted so that the database needs to be repaired.

Repairing the database through ExpressionEngine
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If ExpressionEngine's Control Panel is still accessible, the database can be
repaired via the built-in SQL Manager at :menuselection:`Developer -->
Utilities --> SQL Manager`. Select the tables to repair, then choose *Repair
selected tables* at the bottom and click Submit.

Repairing the database by other means
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the Control Panel is no longer accessible the database must be
repaired by some other means. This can be done by using the MySQL
command line tools, or some external application such as phpMyAdmin. If
these attempts fails, or the error occurs with some frequency, the
database administrator should be notified.
