.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

A new entry does not appear on the site right away
==================================================

A newly posted channel entry does not appear on the site right away. It
will show at some later point.

Troubleshooting
---------------

The site is probably using template caching and ExpressionEngine was not
configured to automatically recreate the cache after posting a new
entry. This setting can be found at :menuselection:`Settings --> Content & Design`.

Another possibility to check for is that the :doc:`entry date lies in the
future </troubleshooting/channels_and_entries/how_to_display_future_entries>`.
