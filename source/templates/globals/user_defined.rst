User-Defined Global Variables
=============================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Template Variables`

Custom, user-defined global variables can be created for use in any
Template.

User-defined global variables can hold any **static** information. These
variables can be useful for things like site header, footers, copyright
notices, etc. Since these variables can go in any template it makes the
information very portable and simple to update.

Once you've created a variable you can use it in any template simply by
surrounding the variable name with curly braces. For example, if you
create a variable called "copyright", you'll use it in your template
this way::

	{copyright}

**Important:** You cannot give a user-defined global variable the same
name as an existing variable. This includes variables native to
ExpressionEngine such as other Global Variables. Please see the list of
:doc:`/general/reserved_words` for details.

.. note:: User-defined global variables are not run through the template
	engine, so you cannot place EE Tags, PHP, or variables inside them.
	Also note that Global Variables are one of the last things parsed in
	your Templates. This means that you cannot use a Global Variable as
	the value for an EE Tag parameter. For instance, if you had a Global
	Variable called "special\_channel", the following **would not work**
	::

		{exp:channel:entries channel="{special_channel}" limit="10"}

	In this case, you would need to consider using a :doc:`Snippet
	<snippets>`.
