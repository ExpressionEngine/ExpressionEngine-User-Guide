.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Can not save a template with the {exp:query} tag
================================================

It is not possible to save a Template that contains a SQL query or uses
the {exp:query} EE Tag.

Templates and Queries
---------------------

Some Hosts have security implemented that does not allow the POSTing of
data containing the phrase "select from". This is done in an attempt to
help prevent hacking attempts, but it can also interfere with normal
operations of dynamic-powered sites like an ExpressionEngine site.

If this behavior is encountered then the host or administrator should be
contacted for assistance.


