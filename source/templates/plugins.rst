Using Plugins
=============

ExpressionEngine is designed so that features can be added through the
use of Plugins. The `ExpressionEngine Plugins <http://expressionengine.com/downloads/addons/category/plugins/>`_
site contains a list of all available first-party plugins, as well as
installation and usage instructions for each one. It is important to
review the notes for the specific plugin you wish to use.

Installation
------------

Follow these steps to install a plugin:

#. Download the Plugin to your local computer. You'll usually need to
   unzip the file.
#. Upload the Plugin's **folder** to your
   **system/expressionengine/third\_party/** folder.

For instance, the No Follow plugin would be placed like so:

-  system/expressionengine/third\_party/no\_follow/pi.no\_follow.php

Once the Plugin is installed, you should be able to see it listed in the
:doc:`Plugin Manager </cp/add-ons/plugin_manager>` in your
ExpressionEngine Control Panel.

.. note:: Some Plugins may have additional installation requirements
   specific to that particular Plugin. Be sure to read any instructions,
   readme files, etc. that may come with the Plugin.

Basic Usage
-----------

Within your templates you'll typically wrap the item you want affected
by the plugin::

	{exp:xml_encode}
		some content
	{/exp:xml_encode}

In the above example, the content would be XML Encoded.

.. _templates-nested-plugins:

Nested Plugins
--------------

It is possible to nest Plugins in order for content to be affected by
more than one plugin. For example, you can do this::

	{exp:word_limit total="35"}
		{exp:xml_encode}
			some content
		{/exp:xml_encode}
	{/exp:word_limit}

By default, ExpressionEngine will process the innermost Plugin first,
then the next Plugin, and so on until all the plugins wrapping a given
piece of content have been parsed. In the above example, the content is
XML Encoded first and then the result of that is limited to 35 words.

Changing Parsing Order
----------------------

You may change the parsing order and instruct ExpressionEngine to parse
an outer Plugin first. This is done by adding a parse="inward" parameter
to the Plugin opening tag. Using that parameter will tell EE to parse
that Plugin before parsing any Plugins inside of it. ::

	parse="inward"

Examples
~~~~~~~~

Here are some examples to help illustrate the parsing order. ::

	{exp:magpie url="http://some-site.com" parse="inward"}
		{items}
			<a href="{link}">{title}</a><br />
			{exp:word_limit total="20"}
				{content}
			{/exp:word_limit}<br />
		{/items}
	{/exp:magpie}

With the above, the "magpie" Plugin will be parsed first. This will
allow the content of the {content} variable to be available to the
other, nested Plugin: "word\_limit".

Here is a much more complicated example that demonstrates both parsing
orders in action. ::

	{exp:magpie url="http://some-site.com" limit="15" refresh="720" parse="inward"}
		<ul>
			{items}
				<li><a href="{link}">{title}</a><br />
					{exp:word_limit total="35"}
						{exp:xml_encode}
							{content}
						{/exp:xml_encode}
					{/exp:word_limit}
				</li>
			{/items}
		</ul>
	{/exp:magpie}

The outer "magpie" Plugin has the parameter set to parse inward, so it
is parsed first. This makes the {content} variable's content available
to the other Plugins. Next, is the "word\_limit" Plugin. However, since
by default EE parses Plugins outward, the "xml\_encode" Plugin is parsed
first and then "word\_limit" after it. In this way, "word\_limit" will
never erase the closing tag for the "xml\_encode" Plugin.
