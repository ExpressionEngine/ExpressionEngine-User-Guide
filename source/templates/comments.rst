Commenting Template Code
========================

ExpressionEngine allows developers to comment their templates in an easy
syntax so that the comments will be available to them when editing their
templates but the comments will never be displayed when that template is
displayed. This allows developers to jot down notes about their usage of
tags, variables, plugins, and even PHP in templates for future reference
while keeping users from ever seeing those notes.

.. note:: ExpressionEngine comments must be stored directly in the
	template. When stored in any type of variable, the comments will be
	rendered directly to the screen.

The syntax for commenting your template code is fairly similar to HTML
comments, just intead of the greater than and lesser than symbols, you
use the opening and closing curly quote brackets, like with other EE
Tags::

	     {!--      Your comments will go in here.
	     You can even span it across multiple lines.     --}

Any ExpressionEngine code that you put in these comments will NOT be
rendered, so you can comment out old code or perhaps reference tags for
later::

	{!--	Once the channel is set up and the old data inserted, use this below.

		{exp:channel:entries channel="recipies"}
		    	{title}
	     	{/exp:channel:entries}
	 --}
