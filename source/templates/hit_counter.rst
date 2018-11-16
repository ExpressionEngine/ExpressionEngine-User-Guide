.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Hit Counters
============

Every time a template is accessed a counter is incremented. To display
the number of hits, put the following variable in any template::

    {hits}

The hit count for each template can be manually altered in the
template's preferences under :menuselection:`Developer --> Templates`.

Entry "View" Tracking
---------------------

In addition to tracking page hits, EE lets you track the number of views
a particular channel entry has received. For more information regarding
this feature please read about the :ref:`channel_entries_track_views`
parameter.
