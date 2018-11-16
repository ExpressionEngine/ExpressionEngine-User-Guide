.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

MySQL Error 1030: Got error 28
==============================

ExpressionEngine returns the following error: **"MySQL Error 1030: Got
error 28."**

Troubleshooting
---------------

Error 28 means "No space left on device". This is typically caused by
the database server not having sufficient disk space to perform the
requested query. Even if there seems to be enough space left, the query
might have to create temporary tables which require more disk space than
is currently available.

Reducing the size of the database can often help: one easy way to do
this is by clearing out Template Revisions. (If Template Revisions are
not needed, that feature can be disabled altogether under
:menuselection:`Settings --> Template Settings`.) If MySQL runs on
localhost, increasing the available disk space by deleting other files
such as the cache might also work. In all cases the database
administrator should be notified of the issue.
