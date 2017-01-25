############
Channel Form
############

.. contents::
  :local:
  :depth: 2

************
Introduction
************

The Channel Form makes it possible to add and edit entries from outside
of the Control Panel using a regular form inside a template. Thank you
to `Barrett Newton <http://barrettnewton.com/>`_ for developing the
original (under the name of SafeCracker) and working with EllisLab to
provide it to the ExpressionEngine community.

- Allows guest (logged out) users to use the entry form, with optional
  CAPTCHA support.
- Edit existing entries, and only edit the fields you need. Fields not
  in your form will be left intact.
- Adds or edits entries based on the presence of an entry\_id and/or
  url\_title.
- Allows use of the entry\_id or url\_title in your return URL, so that
  you may redirect to the entry that was just created. Useful for
  multi-page forms.
- Specify a default status, or set forms to override default statuses.
- Specify different return URLs for different member groups by the
  group\_id. Send visitors to one page, and admins to another.
- Server-side form validation using the :ellislab:`CodeIgniter Form
  Validation class
  </codeigniter/user-guide/libraries/form_validation.html>`.
- Handles AJAX requests and can output responses in JSON.

.. versionchanged:: 2.7

  naming, additions, and removals

  * *SafeCracker* is now *Channel Form*.
  * The *File* fieldtype is now compatible with *Channel Form*.
  * *Stand-Alone Entry Form* has been removed.
  * *SafeCracker File* has been removed.
  * The stylesheet path has changed from ``{path=css/_ee_saef_css}`` to
    ``{path=css/_ee_channel_form_css}``.

******************
Using Channel Form
******************

The first thing you'll need is a ``{exp:channel:form}`` tag pair, along
with a few `parameters`_ to determine where to submit the entry::

  {exp:channel:form channel="news"}
    <input name="title" type="text">
    <input type="submit" value="Submit">
  {/exp:channel:form}

Including Assets
----------------

If you plan on using the formatting buttons or the :doc:`Grid
</fieldtypes/grid>`, :doc:`Relationships
</fieldtypes/relationships>`, :doc:`Rich Text Editor
</add-ons/rte/index>`, Date, or File fieldtypes, include a link to the
Channel Form stylesheet in your template::

  <link href="{path='css/_ee_channel_form_css'}" type="text/css" rel="stylesheet" media="screen">

The Channel Form tag will automatically load jQuery for you. If you
prefer to include your own version of jQuery, use the `include_jquery=`_
parameter.

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

.. note:: All date formats should match what the user has defined in
  localization settings. The date fields will autmatically use that format and
  validate against it.

Set the date of the entry::

  <p>Date <br> <input type="text" name="entry_date" value="{entry_date}" maxlength="23" size="25"></p>

Expiration Date
~~~~~~~~~~~~~~~

Set the expiration date of the entry::

  <p>Expiration Date <br>
    <input type="text" name="expiration_date" value="{expiration_date}" maxlength="23" size="25">
  </p>

Comment Expiration Date
~~~~~~~~~~~~~~~~~~~~~~~

Set the comment expiration date if desired::

  <p>Comment Expiration Date <br>
  <input type="text" name="comment_expiration_date" value="{comment_expiration_date}" maxlength="23" size="25" />
  </p>

Make Entry Sticky
~~~~~~~~~~~~~~~~~

Set the entry as "sticky" or not. ::

  <p><input type="checkbox" name="sticky" value="y"  {sticky} /> Make Entry Sticky</p>


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

Categories Tag Pair Parameters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

All of the category tag pair parameters available in the channel entries tag are available in the form:

backspace=
^^^^^^^^^^

::

	{categories backspace="5"}

limit=
^^^^^^

::

	{categories limit="1"}

show=
^^^^^

::

	{categories show="4|7"}

You may alternatively specify which categories to not show::

	{categories show="not 3|6|8"}

show_group=
^^^^^^^^^^^^

::

	{categories show_group="1|3"}

You may alternatively specify which category groups to not show::

	{categories show_group="not 2|4"}




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

For all of the other channel fields, you have several options for outputting
the form field.

The Custom fields tag pair loops through all of the custom fields, outputting custom fields with the minimum number of tags but also a limited amount of design flexibility.

To output a single field, the ``{field:...}`` tag is available::

  {field:my_field_name}

The `field tag` should output all of the required html needed for either a new entry or an edit.

If you need to further customize input fields, most can be manually constructed using the field shortname.


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

category=
~~~~~~~~~

::

  category="7|13"

If you don't wish to include the form option on the page then you can
set any categories that you wish to assign the entry to via this
parameter. Specify the category by Category ID. You may specify multiple
categories by separating the Category ID with the pipe character::

  category="3|7|13|42"

This parameter only applies to new entries and will be ignored for edits.

channel=
~~~~~~~~

::

  channel="news"

The short name of the channel. This is a **required** parameter.

class=
~~~~~~

::

  class="channel_form"

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

  id="channel_form"

Specify the CSS id.


include_assets=
~~~~~~~~~~~~~~~

::

  include_assets="yes"

Adds necessary Javascript to your form. If you require the
Javascript functionality, set to "yes". Defaults to "no".


include\_jquery=
~~~~~~~~~~~~~~~~

::

  include_jquery="no"

Includes jQuery automatically. Defaults to "yes".

.. note:: If you are using your own copy of jQuery you will need to load
  it **before** the form.

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
specify a member\_id which will be used as the author of the entry.

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
with the pipe \| character. You may use the native :ellislab:`CodeIgniter
rules </codeigniter/user-guide/libraries/form_validation.html#rulereference>`
(required, matches, min\_length, max\_length, exact\_length, alpha,
alpha\_numeric, alpha\_dash, numeric, integer, is\_natural,
is\_natural\_no\_zero, valid\_email, valid\_emails, valid\_ip,
valid\_base64), and these additional ExpressionEngine-specific rules:
valid\_ee\_date.

.. _channel_form_rte_selector:

rte_selector=
~~~~~~~~~~~~~

::

  rte_selector=".my-custom-class"

This parameter will automatically load ExpressionEngine's :doc:`/add-ons/rte/index`
and apply it to the element(s) matching the jQuery selector you specify.
Any valid jQuery selector is acceptable.

The RTE will use the Toolset preference of the currently logged-in user as chosen
in :ref:`my_account_rte_prefs`. If the user has not chosen a Toolset or is not
logged in, the site's :ref:`rte_mcp_default_toolset` will be used.

You can optionally force a particular toolset ID to use (see below).

.. _channel_form_rte_toolset_id:

rte_toolset\_id=
~~~~~~~~~~~~~~~~

::

  rte_toolset_id="1"

The ID of the Rich Text Editor toolset to use. Toolset IDs are listed on the
:doc:`/add-ons/rte/control_panel/index` page.

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

show\_fields=
~~~~~~~~~~~~~

::

  show_fields="body|extended"

Specify which entry fields to display in the custom field loop, by
specifying a pipe separated list of field short names.::

  show_fields="body|extended|full_image"

You may exclude fields by placing the word "not" in front of the list::

  show_fields="not image_thumbnail|source|rating"


sticky\_entry=
~~~~~~~~~~~~~~

::

  sticky_entry="yes"

Force the entry to be "sticky" or not.  This parameter only applies to new
entries and will be ignored for edits.

unique\_url\_title=
~~~~~~~~~~~~~~~~~~~

::

  unique_url_title="yes"

When set to "yes", will ensure the URL title of the entry will be unique so
there is no risk of creating an entry with a duplicate URL title.

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
title. Use this when you've opted to disable channel_form_assets. Defaults to
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
method. Useful for fieldtypes with complex data, such as a grid field.

field:my\_field\_name
~~~~~~~~~~~~~~~~~~~~~

::

  {field:my_field_name}

Display a custom field using the Fieldtype API's display\_field method.
Useful for fieldtypes that use complex markup, for instance a relationship
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

.. _channel_form_examples_custom_field_loop:

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

    {if rte}
      <textarea id="{field_name}" name="{field_name}" dir="{text_direction}" rows="{rows}" class="WysiHat-field">{field_data}</textarea>
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

    {if file}
      {display_field}
    {/if}

    {if relationships}
      {if allow_multiple}
        <ul style="list-style: none">
          {options}
          <li>
            <input type="text" name="{field_name}[sort][]" value="{option_order}" style="width: 25px">
            <label class="checkbox">
            <input type="checkbox" name="{field_name}[data][]" value="{option_value}"{checked}> {option_name}
            </label>
          </li>
          {/options}
        </ul>
      {if:else}
          <select id="{field_name}" name="{field_name}[data][]">
          {options}
            <option value="{option_value}"{selected}>{option_name}</option>
          {/options}
          </select>
      {/if}
    {/if}

    {if grid}
      {display_field}
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

channel\_form\_assets
~~~~~~~~~~~~~~~~~~~~~

::

  {channel_form_assets}

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

Channel Form uses the CodeIgniter Form Validation class. You can create
field-by-field `validation rules <#rules-my-field-name>`_. By default,
validaiton errors will be displayed using the ExpressionEngine user
message template. If you prefer, you can also use `inline error handling
<#error-handling>`_ to display form validation errors in the
context of your form.

Allowing Guests to Post Entries
-------------------------------

Allowing guest posts is controlled in the Channel Form settings at
:menuselection:`Developer Tools --> Channel Manager --> Settings`.

To allow guests to post in a certain channel, locate the options for
"Allow Guest Posts" next to the channel you want to allow guest posts
for, and choose "Yes".

You can optionally require the guest to pass a captcha before they
submit the Channel Form by choosing "Yes" under "Guest Captcha".

Finally, you can optionally choose an author that entries entered as
guests appear as authored by under Guest Author.


Manually Constructed Input Fields
---------------------------------

In rare cases, the field tag may not be flexible enough for the desired output.  In that case, most native fields can be manually coded.


Checkbox field
~~~~~~~~~~~~~~
 ::

  {options:my_field_name}
    <input type="checkbox" name="my_field_name[]" value="{option_value}"
      {checked}>  {option_name}</br>
  {/options:my_field_name}

See the {options:my_field_name} tag pair.


Date field
~~~~~~~~~~
 ::

  <input type="text" id="my_field_name" name="my_field_name"
    value="{my_field_name}" size="50">

.. note:: inclusion of the localization select field is not currently supported, whether constructing the field manually or using variables.

File field
~~~~~~~~~~

There are several additional inputs that may be specified when manually constructing a file field:

- ``my_field_name_directory`` - the file directory the image is assigned to.
    This field is required if submitting a file.
- ``my_field_name_hidden_directory`` - if specified, this will take precedence
  over ``my_field_name_directory`` and can be used to allow editing.
- ``my_field_name_hidden_file`` - the name of an existing, uploaded file.  If
  specified, this will take precedence over ``my_field_name`` and can be used
  to allow editing.

If editing entries, you will need to specify the existing directory and file
name or the file content will be lost ::

  <input type="file" name="my_field_name" />
  <input type="hidden" name="my_field_name_directory" value="1" />
  <input type="hidden" name="my_field_name_hidden_file" value="{my_field_name}{file_name}{/my_field_name}" />

.. note:: For the ``hidden_file`` input, use the :ref:`variable pair <channel_entry_file_field_pair>` to pull in *only* the ``{file_name}`` since we're already providing the directory above.

.. note:: If you want to allow users to change the file associated with the
   entry when editing, you will need to provide a way (typically Javascript)
   to reset the my_field_name_hidden_file to empty.


Grid field
~~~~~~~~~~

Manual construction of grid type fields is not supported.  Most customization
of grid fields can be done by overriding the CSS.

Multi Select field
~~~~~~~~~~~~~~~~~~
 ::

  <select name="my_field_name[]" id="my_field_name" multiple size="2">
    {options:my_field_name}
      <option value="{option_value}"{selected}>{option_name}</option>
    {/options:my_field_name}
  </select>

See ``{options:my_field_name}`` tag pair.

Radio field
~~~~~~~~~~~
 ::

  {options:my_field_name}
    <input type="radio" name="my_field_name" value="{option_value}" {checked}>
      {option_name}</br>
  {/options:my_field_name}

See ``{options:my_field_name}`` tag pair.

Relationship field
~~~~~~~~~~~~~~~~~~

Simple relationship fields with only 1 relationship allowed are very similar
in format to Multi Select fields, though note the slight variation in name::

  <select name="my_field_name[data][]" id="my_field_name">
    {options:my_field_name}
      <option value="{option_value}"{selected}>{option_name}</option>
    {/options:my_field_name}
  </select>

For relationship fields that allow multiple selections, you may also set the sort order::

    {options:my_field_name}
		Order: <input type="text" name="my_field_name[sort][]" value="{option_order}" />	<input type="checkbox" name="my_field_name[data][]" value="{option_value}" {checked}/> {option_name}<br />
    {/options:my_field_name}


Select field
~~~~~~~~~~~~
 ::

  <select name="my_field_name" id="my_field_name">
    {options:my_field_name}
      <option value="{option_value}"{selected}>{option_name}</option>
    {/options:my_field_name}
  </select>

See ``{options:my_field_name}`` tag pair.

Text Input field
~~~~~~~~~~~~~~~~~
 ::

  <input type="text" name="my_field_name" id="my_field_name" value="{my_field_name}">

Textarea field
~~~~~~~~~~~~~~
 ::

  <textarea name="my_field_name" id="my_field_name" cols="90" rows="10">{my_field_name}</textarea>



********
Examples
********

See :doc:`Channel Form Examples <examples>` for more complete examples of
Channel Form usage.

***********
Development
***********

-  :ref:`channel_form_development_fieldtype`
-  :ref:`channel_form_development_hooks`

.. toctree::
  :glob:
  :titlesonly:
  :hidden:

  *
