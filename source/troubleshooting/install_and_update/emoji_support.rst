.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Emoji Support
=============

In order to support emojis in your content your MySQL server and client libaries must support the ``utf8mb4`` character set. Your MySQL server version must be 5.5.3 or newer. The client libraries that PHP uses to connect to MySQL must be 5.5.3 or higher, unless you are using the ``mysqlnd`` driver in which case the minimum version is 5.0.9.

If you originally installed ExpressionEngine in an environment that did not support ``utf8mb4`` but now are in an environment that supports it, you can use our `Emoji Suport add-on <https://github.com/ellislab/emoji-support>`_ to update your database.
