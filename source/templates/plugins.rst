.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Using Plugins
=============

ExpressionEngine is designed so that features can be added through the
use of plugins. A list of first party ExpressionEngine plugins can be
found on `EllisLab's GitHub page <https://github.com/EllisLab/>`_, along
with installation and usage instructions for each one. It is important
to review the notes for the specific plugin you wish to use.

Installation
------------

Follow these steps to install a plugin:

#. Download the plugin to your local computer. You'll usually need to
   unzip the file.
#. Upload the plugin's **folder** to your
   **system/user/addons/** folder.

For instance, the No Follow plugin would be placed like so:

-  system/user/addons/no_follow/pi.no_follow.php

Once the plugin is installed, you should be able to see it listed in the
:doc:`Add-on Manager </cp/addons/index>` in your
ExpressionEngine Control Panel.

.. note:: Some plugins may have additional installation requirements
   specific to that particular plugin. Be sure to read any instructions,
   readme files, etc. that may come with the plugin.

Basic Usage
-----------

Within your templates you'll typically wrap the item you want affected
by the plugin::

	{exp:xml_encode}
		some content
	{/exp:xml_encode}

In the above example, the content would be XML Encoded.

There is also a `Markdown <http://daringfireball.net/projects/markdown/>`_ plugin where you can parse any content for Markdown syntax::

	{exp:markdown}
		{title}
	{/exp:markdown}

That's if you already haven't set Markdown as the :doc:`Text Formatting </general/text_formatting>` option for the field.

.. _templates_nested_plugins:

Nested Plugins
--------------

It is possible to nest plugins in order for content to be affected by
more than one plugin. For example, you can do this::

	{exp:word_limit total="35"}
		{exp:xml_encode}
			some content
		{/exp:xml_encode}
	{/exp:word_limit}

By default, ExpressionEngine will process the innermost plugin first,
then the next plugin, and so on until all the plugins wrapping a given
piece of content have been parsed. In the above example, the content is
XML Encoded first and then the result of that is limited to 35 words.

Changing Parsing Order
----------------------

You may change the parsing order and instruct ExpressionEngine to parse
an outer plugin first. This is done by adding a parse="inward" parameter
to the plugin opening tag. Using that parameter will tell EE to parse
that plugin before parsing any plugins inside of it::

     parse="inward"

Examples
~~~~~~~~

Here are some examples to help illustrate the parsing order.::

	{exp:rss_parser url="https://ellislab.com/blog/rss-feed" limit="5" parse="inward"}
		{feed_items}
			<a href="{item_link}">{item_title}</a><br />
			{exp:word_limit total="20"}
				{content}
			{/exp:word_limit}<br />
		{/feed_items}
	{/exp:rss_parser}

With the above, the RSS plugin will be parsed first. This will
allow the content of the {content} variable to be available to the
other, nested plugin: "word_limit".

Here is a much more complicated example that demonstrates both parsing
orders in action.::

	{exp:rss_parser url="https://ellislab.com/blog/rss-feed" limit="5" parse="inward"}
		<ul>
		{feed_items}
			<li><a href="{item_link}">{item_title}</a><br />
					{exp:word_limit total="35"}
						{exp:xml_encode}
							{content}
						{/exp:xml_encode}
					{/exp:word_limit}
				</li>
		{/feed_items}
		</ul>
	{/exp:rss_parser}	

The outer RSS plugin has the parameter set to parse inward, so it
is parsed first. This makes the {content} variable's content available
to the other plugins. Next, is the "word_limit" plugin. However, since
by default EE parses plugins outward, the "xml_encode" plugin is parsed
first and then "word_limit" after it. In this way, "word_limit" will
never erase the closing tag for the "xml_encode" plugin.
