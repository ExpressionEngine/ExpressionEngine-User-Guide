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
