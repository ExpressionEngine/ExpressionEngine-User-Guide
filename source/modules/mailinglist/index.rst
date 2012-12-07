Mailing List Module
===================

.. contents::
   :local:
   :depth: 1

Introduction
------------

The Mailing List is an opt in type, meaning that when someone adds their
email address to the list, they are sent a confirmation email containing
a link with an access code. Unless they click the link, their email
address will not be added to the list. The opt-in link will expire in 48
hours. Conversely, when someone in your mailing list receives an email,
there will be an "unsubscribe" link permitting them to remove themselves
from the list.

To access the Mailing List-backed functions, go to :menuselection:`Add-Ons --> Modules --> Mailing List`
in your Control Panel. There you will be able to create and
manage your mailing lists, as well as find and delete email addresses.
See :doc:`Mailing List control panel <control_panel/index>` for more
information. To send email to any of your lists you will use the Control
Panel `Communicate Page <../../cp/tools/communicate.html>`_.

Adding a Mailing List Form to Your Site
---------------------------------------

To add the mailing list form to any of your pages, use the following tag
in any template::

	{exp:mailinglist:form list="default"}
		<p>Join our Mailing List</p>
		<p><input type="text" name="email" value="{email}"></p>
		<p><input type="submit" value="submit"></p>
	{/exp:mailinglist:form}

Parameters
----------

.. contents::
   :local:

list=
~~~~~

::

	list="default"

This parameter allows you to specify which Mailing List the email
address will be subscribed to. This parameter takes the "short name" of
the List as set in the Mailing List control panel. If no list is
specified with the parameter then the "default" list is assumed.

form\_class=
~~~~~~~~~~~~

::

	form_class="mailinglist_form"

With this parameter, you can specify the css class you want the form to
have, enabling fine-grained styling of the form.

form\_id=
~~~~~~~~~

::

	form_id="mailinglist_form"

With this parameter, you can specify the css id you want the form to
have. The default value is 'mailinglist\_form'

Variables
---------

.. contents::
   :local:

email
~~~~~

::

	{email}

This is the standard
`{email} <../../templates/globals/single_variables.html#var_email>`_
global variable. Using this variable as the value of the email input
field lets you automatically populate the field for logged-in members.
Use as follows::

	<input type="text" name="email" value="{email}" />

full\_name
~~~~~~~~~~

::

	{full_name}

You may use this variable to display the full name of the Mailing List.

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	control_panel/index