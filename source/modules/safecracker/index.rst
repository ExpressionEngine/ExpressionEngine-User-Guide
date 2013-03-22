###########
SafeCracker
###########

.. contents::
   :local:
   :depth: 2

************
Introduction
************

SafeCracker makes it possible to add and edit entries from outside of
the Control Panel using a Stand-Alone Entry Form (SAEF). Thank you to
`Barrett Newton <http://barrettnewton.com/>`_ for developing SafeCracker
and working with EllisLab to provide it to the ExpressionEngine
community.

-  Allows guest (logged out) users to use the entry form, with optional
   CAPTCHA support.
-  Edit existing entries, and only edit the fields you need. Fields not
   in your form will be left intact.
-  Adds or edits entries based on the presence of an entry\_id and/or
   url\_title.
-  Allows use of the entry\_id or url\_title in your return URL, so that
   you may redirect to the entry that was just created. Useful for
   multi-page forms.
-  Specify a default status, or set forms to override default statuses.
-  Specify different return URLs for different member groups by the
   group\_id. Send visitors to one page, and admins to another.
-  Server-side form validation using the `CodeIgniter Form Validation
   class <http://codeigniter.com/user_guide/libraries/form_validation.html>`_.
-  Handles AJAX requests and can output responses in JSON.
-  Includes an optional `SafeCracker File Fieldtype`_.


*****************
Using SafeCracker
*****************

Including Assets
----------------

If you plan on using the Datepicker or formatting buttons, include a link
to the SAEF stylesheet in your template::

	<link href="{path=css/_ee_saef_css}" type="text/css" rel="stylesheet" media="screen">

SafeCracker will automatically load jQuery for you. If you prefer to
include your own version of jQuery, use the
`include_jquery=`_ parameter.

Form Inputs
-----------

.. contents::
   :local:

Most Channel Fields are available to use via input fields, including:


Title
~~~~~

Set the title of the entry. This is a **required** parameter. ::

	<label for="title">Title</label>
	<input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();">

URL Title
~~~~~~~~~

Set the URL title of the entry. ::

	<label for="url_title">URL Title</label>
	<input type="text" name="url_title" id="url_title" value="{url_title}" maxlength="75" size="50">

Entry Date
~~~~~~~~~~

Set the date of the entry, which must be in the format YYYY-MM-DD hh:mm
PM. ::

	<p>Date <br> <input type="text" name="entry_date" value="{entry_date}" maxlength="23" size="25"></p>

Expiration Date
~~~~~~~~~~~~~~~

Set the expiration date of the entry, which must be in the format
YYYY-MM-DD hh:mm PM. ::

	<p>Expiration Date <br>
		<input type="text" name="expiration_date" value="{expiration_date}" maxlength="23" size="25">
	</p>

Categories
~~~~~~~~~~

Set the entry's categories. ::

	{category_menu}
		<label for="categories">Categories</label>
		<select name="category[]" id="categories" size="4" multiple="multiple">
			{select_options}
		</select>
	{/category_menu}

Or use the alternative syntax. ::

	<label for="categories">Categories</label>
	<select name="category[]" id="categories" size="4" multiple="multiple">
		{categories}
			<option value="{category_id}"{selected}>{category_name}</option>
		{/categories}
	</select>
	

The following variables are available inside the Category Menu and Categories 
tag pairs:

{category_id}
^^^^^^^^^^^^^

The category id number.

{category_name}
^^^^^^^^^^^^^^^

The category name.

{category_group_id}
^^^^^^^^^^^^^^^^^^^

The category group id number.
	
{category_group}
^^^^^^^^^^^^^^^^

The category group name.

{category_parent}
^^^^^^^^^^^^^^^^^

The name of the category parent if it exists, indented according to the 
category depth.

{category_depth}
^^^^^^^^^^^^^^^^

The level of nesting assigned to the category.  The depth of a top level 
category is 1.

{selected}
^^^^^^^^^^

An indicator of whether the category has been selected or not.  Is blank if not, 
selected="selected" otherwise.

{checked}
^^^^^^^^^

An indicator of whether the category has been selected or not.  Is blank if not, 
checked="checked" otherwise.	

Status
~~~~~~

Set the entry's status. ::

	{status_menu}
		<p>Status<br>
			<select name="status">
				{select_options}
			</select>
		</p>
	{/status_menu}

Or use the alternative syntax. ::

	<label for="status">Status</label>
	<select name="status" id="status">
		{statuses}
			<option value="{status}"{selected}>{status}</option>
		{/statuses}
	</select>

Other Channel Fields
~~~~~~~~~~~~~~~~~~~~

Set other channel fields. Use the field name as the form input. Make use
of the {field:my\_field\_name} and {options:my\_field\_name} tags. ::

	<input type="text" name="my_field_name" id="my_field_name" value="{my_field_name}">
	{field:my_field_name}

	<select name="my_field_name" id="my_field_name">
		{options:my_field_name}
			<option value="{option_value}"{selected}>{option_name}</option>
		{/options:my_field_name}
	</select>

Parameters
----------

.. contents::
   :local:

allow_comments=
~~~~~~~~~~~~~~~

::

	allow_comments="yes"

Whether to allow comments on the submitted entry. If this parameter is
not specified, the Channel's :ref:`channel_prefs_allow_comments` preference
will be used.

author\_only=
~~~~~~~~~~~~~

::

	author_only="yes"

Only allow the author of the entry to edit the entry. Defaults to "no".

channel=
~~~~~~~~

::

	channel="news"

The short name of the channel. This is a **required** parameter.

class=
~~~~~~

::

	class="safecracker"

Specify the CSS class.

datepicker=
~~~~~~~~~~~

::

	datepicker="no"

Adds the datepicker to your date fields. Defaults to "yes".

dynamic\_title=
~~~~~~~~~~~~~~~

::

	dynamic_title="[your_custom_field] Submission"

Dynamically set the title of your entry based on your entry's data. Use
brackets [ ] instead of the standard curly braces.

entry\_id=
~~~~~~~~~~

::

	entry_id="{segment_3}"

The entry\_id of the channel entry you wish to edit. If both this and
url\_title are empty, the entry form will add a new entry.

error\_handling=
~~~~~~~~~~~~~~~~

::

	error_handling="inline"

Choose to display error messages inline (see `Error
Messages <#error-my-field-name>`_). By default, errors are displayed with the user
message template.

id=
~~~

::

	id="safecracker"

Specify the CSS id.

include\_jquery=
~~~~~~~~~~~~~~~~

::

	include_jquery="no"

Includes jQuery automatically. Defaults to "yes".

.. note:: If you are using your own copy of jQuery you will need to load
	it **before** the SafeCracker form.

json=
~~~~~

::

	json="yes"

Output your results in JSON format, instead of performing a redirect.

logged\_out\_member\_id=
~~~~~~~~~~~~~~~~~~~~~~~~

::

	logged_out_member_id="3"

In order to allow logged out users to use the entry form, you must
specify a member\_id which SafeCracker will use as the author of the
entry.

preserve\_checkboxes=
~~~~~~~~~~~~~~~~~~~~~

::

	preserve_checkboxes="yes"

If you are using an entry form to edit only some of your entry (like a
form just to change status, for example), you should use this parameter.
HTML checkboxes have an interesting property, which is that if
unchecked, they are not sent in the POST request. Because of this unique
nature, SafeCracker cannot distinguish between an unchecked checkbox and
an intentional omission of the field itself from your form. You are
provided this parameter to preserve the existing values without having
to use a hidden field. Defaults to "no".

require\_entry=
~~~~~~~~~~~~~~~

::

	require_entry="yes"

Require an entry to edit via the entry\_id or url\_title parameters.
Disables new entries. Defaults to "no".

return=
~~~~~~~

::

	return="site/ENTRY_ID"

Specify a path to redirect the user to after an entry submission. You
may use the constants ENTRY\_ID and URL\_TITLE, which will be replaced
with the entry's entry\_id or url\_title, respectively. This is a
**required** parameter.

return\_X=
~~~~~~~~~~

::

	return_X="site/thanks"

Specify a path to redirect the user to after an entry submission, based
on the user's member group. Replace X with the group\_id of the member
group.

rules:my\_field\_name=
~~~~~~~~~~~~~~~~~~~~~~

::

	rules:my_field_name="required|min_length[5]"

Add additional validation rules to your fields. Separate multiple rules
with the pipe \| character. You may use the native `CodeIgniter
rules <http://codeigniter.com/user_guide/libraries/form_validation.html#rulereference>`_
(required, matches, min\_length, max\_length, exact\_length, alpha,
alpha\_numeric, alpha\_dash, numeric, integer, is\_natural,
is\_natural\_no\_zero, valid\_email, valid\_emails, valid\_ip,
valid\_base64), and these additional ExpressionEngine-specific rules:
valid\_ee\_date.

.. _safecracker_rte_selector:

rte_selector=
~~~~~~~~~~~~~

::

	rte_selector=".my-custom-class"

This parameter will tell SafeCracker to automatically load ExpressionEngine's
:doc:`/modules/rte/index` and apply it to the element(s) matching the jQuery
selector you specify. Any valid jQuery selector is acceptable.

The RTE will use the Toolset preference of the currently logged-in user as chosen
in :ref:`my_account_rte_prefs`. If the user has not chosen a Toolset or is not
logged in, the site's :ref:`rte_mcp_default_toolset` will be used.

You can optionally force a particular toolset ID to use (see below).

.. _safecracker_rte_toolset_id:

rte_toolset\_id=
~~~~~~~~~~~~~~~~

::

	rte_toolset_id="1"

The ID of the Rich Text Editor toolset to use. Toolset IDs are listed on the
:doc:`/modules/rte/control_panel/index` page.

safecracker\_head=
~~~~~~~~~~~~~~~~~~

::

	safecracker_head="no"

Adds necessary Javascript to your form. If you don't require the
Javascript functionality, set to "no". Defaults to "yes".

secure\_action=
~~~~~~~~~~~~~~~

::

	secure_action="yes"

Forces the form to use https as its action.. Defaults to "no".

secure\_return=
~~~~~~~~~~~~~~~

::

	secure_return="yes"

Force the form to return to https. Defaults to "no".

site=
~~~~~

::

	site="your_site_name"

Specify the site short name of another site on your MSM installation to
add/edit entries for that site.

url\_title=
~~~~~~~~~~~

::

	url_title="{segment_3}"

The url\_title of the channel entry you wish to edit. If both this and
entry\_id are empty, the entry form will add a new entry.

use_live_url=
~~~~~~~~~~~~~

::

	use_live_url="no"

This will disable the url_title from being created automatically based on the
title. Use this when you've opted to disable safecracker_head. Defaults to
yes.


Variables
---------

.. contents::
   :local:


Custom Field Single Tag
~~~~~~~~~~~~~~~~~~~~~~~

::

	{my_field_name}

Display a custom field's data

Custom Field Tag Pair
~~~~~~~~~~~~~~~~~~~~~

::

	{my_field_name}{/my_field_name}

Display a custom field's data using the Fieldtype API's replace\_tag
method. Useful for fieldtypes with complex data, such as a Matrix field.

field:my\_field\_name
~~~~~~~~~~~~~~~~~~~~~

::

	{field:my_field_name}

Display a custom field using the Fieldtype API's display\_field method.
Useful for fieldtypes that use complex markup, for instance a WYSIWYG
fieldtype.

error:my\_field\_name
~~~~~~~~~~~~~~~~~~~~~

::

	{error:my_field_name}

If you have chosen `inline error handling <#error-handling>`_, you
can display the error for the specified field. You may also use this
syntax for non-custom fields, like title and url\_title.

label:my\_field\_name
~~~~~~~~~~~~~~~~~~~~~

::

	{label:my_field_name}

Display a custom field's label.

instructions:my\_field\_name
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{instructions:my_field_name}

Display a custom field's instructions.

selected\_option:my\_field\_name
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{selected_option:my_field_name}

In an edit form, display the selected option for the specified custom
field.

selected\_option:my\_field\_name:label
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{selected_option:my_field_name:label}

In an edit form, display the label of the selected option for the
specified custom field.

options:my\_field\_name
~~~~~~~~~~~~~~~~~~~~~~~

::

	<select name="my_field_name">
		{options:my_field_name}
			<option value="{option_value}"{selected}>{option_name}</option>
		{/options:my_field_name}
	</select>

If using a field with options, such as Checkboxes or Dropdown, you can
display the options in a loop, to give you more control over the markup.
You have the four following sub-variables: {option\_value},
{option\_name}, {selected} and {checked}.

custom\_fields
~~~~~~~~~~~~~~

::

	{custom_fields}
		<label for="{field_name}">{if required}* {/if}{field_label}</label>
		{field_instructions}
		{formatting_buttons}
		
		{if error}
			<p class="error">{error}</p>
		{/if}
		
		{if textarea}
			<textarea id="{field_name}" name="{field_name}" dir="{text_direction}" rows="{rows}">{field_data}</textarea>
		{/if}
		
		{if text}
			<input type="text" dir="{text_direction}" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}" size="50">
		{/if}
		
		{if select}
			<select id="{field_name}" name="{field_name}">
				{options}<option value="{option_value}"{selected}>{option_name}</option>{/options}
			</select>
		{/if}
		
		{if date}
			<input type="text" id="{field_name}" name="{field_name}" value="{field_data}" size="50">
		{/if}
		
		{if checkbox}
			{options}
				<label class="checkbox">{option_value}
					<input type="checkbox" id="{field_name}" name="{field_name}[]" value="{option_value}"{checked}>
				</label>
			{/options}
		{/if}
		
		{if radio}
			{options}
				<label class="checkbox">{option_value}
					<input type="radio" id="{field_name}" name="{field_name}" value="{option_value}"{checked}>
				</label>
			{/options}
		{/if}
				
		{if safecracker_file}
			{display_field}
		{/if}
		
		{if relationship}
			<select id="{field_name}" name="{field_name}">
				{options}
					<option value="{option_value}"{selected}>{option_name}</option>
				{/options}
			</select>
		{/if}
		
		{if multiselect}
			<select id="{field_name}" name="{field_name}[]" multiple="multiple">
				{options}
					<option value="{option_value}"{selected}>{option_name}</option>
				{/options}
			</select>
		{/if}
	{/custom_fields}

The template parsing for the custom\_fields loop is weak, and we know
it. To get it to work we recommend removing fieldtype conditionals for
fieldtypes that are not installed or are not applicable to the selected
channel.

Loop through the custom fields for the selected channel. Use
conditionals based on the field type to control the display of your
custom fields. To simply print out the field, you can use
{display\_field} within your field type conditional. The extension
settings page contains a list of your fieldtypes and their short names
for reference.

Within this loop, you have the following single variables::

	{field_name}
	{field_label}
	{field_id}
	{error}
	{field_instructions}
	{formatting_buttons} - Shows the EE formatting buttons if have that option selected for that field
	{display_field} - Displays the field as it appears in the CP (using the fieldtype API display_field method)
	{text_direction}
	{rows} - For textareas
	{field_data} - If used in an edit form, the custom field data for that entry.
	{maxlength} - For text inputs

You also have the options tag pair for fields with options::

	{options}
		<option value="{option_value}"{selected}>{option_name}</option>
	{/options}

And the following conditionals::

	{if required} {/if}
	{if your_field_type} {/if}
	{if error} {/if}

captcha
~~~~~~~

::

	{if captcha}
		<label for="captcha">Please enter the word you see in the image below:</label>
		{captcha}
		<input type="text" name="captcha" value="{captcha_word}" maxlength="20">
	{/if}

safecracker\_head
~~~~~~~~~~~~~~~~~

::

	{safecracker_head}

Many custom fields require additional css and/or javascript. This
additional markup is automatically added to the end of your form, unless
you use this variable to display it elsewhere.

global\_errors
~~~~~~~~~~~~~~

::

	{global_errors}{error}{/global_errors}

If you have chosen `inline error handling <#error-handling>`_, you
can display global entry submission errors.

global\_errors:count
~~~~~~~~~~~~~~~~~~~~

::

	{if global_errors:count}{/if}

If you have chosen `inline error handling <#error-handling>`_, you
can display the number global entry submission errors.

field\_errors
~~~~~~~~~~~~~

::

	{field_errors}{error}{/field_errors}

If you have chosen `inline error handling <#error-handling>`_, you
can display field-related entry submission errors.

field\_errors:count
~~~~~~~~~~~~~~~~~~~

::

	{if field_errors:count}{/if}

If you have chosen `inline error handling <#error-handling>`_, you
can display the number field-related entry submission errors.

Form Validation
---------------

SafeCracker uses the CodeIgniter Form Validation class. You can create
field-by-field `validation rules <#rules-my-field-name>`_. By default,
SafeCracker will display validation errors using the ExpressionEngine
user message template. If you prefer, you can also use `inline error
handling <#error-handling>`_ to display form validation errors in the
context of your form.

Allowing Guests to Post Entries
-------------------------------

In order to allow guests to use your SafeCracker Entry Form, you must
first take a few steps to set up.

#. Create a new member group (optional). You may use an existing member
   group if you prefer, but you are advised to create a new member group
   with *very* limited privileges.
#. Edit the member group. Adjust the member group's Channel Posting
   Privileges and Channel Assignment.
#. Create a new member (optional). You may use an existing member if you
   prefer.
#. Select this member for the channel you're working with in the
   SafeCracker settings. OR, note the member id, and use that as the
   ::

       logged_out_member_id

   parameter of your entry form.

SafeCracker File Fieldtype
--------------------------

The SafeCracker File fieldtype is a simple file fieldtype for creating
file fields without the entire file manager. You are presented with a
simple file input, and if applicable, a thumbnail and a "remove file"
checkbox. You specify the upload location in the field settings.
SafeCracker File may be used in both SafeCracker Entry Forms and the CP
Publish Form. SafeCracker File inherits the tags of the standard
:doc:`File Field </modules/channel/custom_fields>`.

SafeCracker File may be used as a Matrix celltype and as a Low Variables
variable type. If you are using it as a Low Variable, you must use the
`parse tag <http://gotolow.com/addons/low-variables/docs/tags#parse-
tag>`_.

********
Examples
********

See :doc:`SafeCracker Examples <examples>` for more complete examples of
SafeCracker usage.

**********************
Control Panel Settings
**********************

See the :doc:`SafeCracker Module Control Panel <control_panel/index>`
page.


***********
Development
***********

-  :ref:`safecracker_development_fieldtype`
-  :ref:`safecracker_development_hooks`

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	control_panel/index
	*