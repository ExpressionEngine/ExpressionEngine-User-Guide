.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Cannot Fetch Current ExpressionEngine Version
=============================================

ExpressionEngine displays the error: **An unexpected error occurred attempting to download the current ExpressionEngine version number.**

Troubleshooting
---------------

Ensure this install has access to the internet and has no restrictions accessing update.expressionengine.com. Some servers may whitelist/blacklist the outbound sites that scripts can connect to.

Ensure cURL is installed and enabled in your PHP installation.

View the contents of ``system/user/cache/current_version``. If you see an error similar to "Unknown SSL protocol error", you may need to upgrade PHP to a version that supports connecting to sites over modern SSL protocols.

If you're still getting the error after trying the above and deleting the ``current_version`` file, use a support channel for more helps and include the contents of your ``current_version`` file.
