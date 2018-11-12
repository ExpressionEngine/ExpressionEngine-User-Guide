.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

MySQL Error 1366: Incorrect string value
========================================

ExpressionEngine returns the following error: **"MySQL Error 1366: Incorrect string value: '\xF0\x9F\x98\x9B' for column 'field_id_1'."**

Troubleshooting
---------------

This error happens when ExpressionEngine tries to save content with an emoji to
the database, and that database is not using the ``utf8mb4`` character set. Use
our `Emoji Suport add-on <https://github.com/ellislab/emoji-support>`_ to update
your database.
