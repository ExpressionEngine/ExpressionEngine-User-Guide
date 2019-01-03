.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Content from my new Channel Field is not appearing on the page.
===============================================================

A new channel field was created and entries were published with content
in that channel field; however, content from the channel field does not
get output to the page.

Displaying Content from Channel Fields
--------------------------------------

Ensure that the channel field is being called within the template. For
example, if the channel field is named "extended" then it needs to be
called in the template like so::

	{exp:channel:entries}             {extended}             {/exp:channel:entries}
