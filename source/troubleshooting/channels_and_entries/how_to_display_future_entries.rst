.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

How to display future entries
=============================

Future entries are not shown by default.

Troubleshooting
---------------

By default, ExpressionEngine will not include entries whose entry date
lies in the future. This behavior can be modified using the
:ref:`channel_entries_show_future_entries` parameter::

	{exp:channel:entries channel="foobar" show_future_entries="yes"}
