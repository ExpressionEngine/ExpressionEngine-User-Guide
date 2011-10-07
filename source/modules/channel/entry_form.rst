Stand-Alone Entry Form
======================

**IMPORTANT:** This tag is deprecated in favor of
`SafeCracker <../safecracker/index.html>`_ and will be removed from
future versions of ExpressionEngine. It is no longer supported. Thank
you to `Barrett Newton <http://barrettnewton.com/>`_ for developing
SafeCracker and working with EllisLab to provide it to the
ExpressionEngine community.

Using this tag, you can create an entry form to submit entries to any of
your channels outside of the Control Panel.

Users of this form **must** be members of the site and must be logged
in. Further, the user's Member Group must have permission to post
entries to the appropriate channel. No content will appear if the user
is not logged in.

Here is an example of how the tag might be used to create an entry form:

::

    {exp:channel:entry_form channel="default_site" return="site/index" preview="site/entry"}

    {preview}
    <h1>{title}</h1>

    {display_custom_fields}

    {/preview}


    <table>
    <tr>
    <td>


    <p>Title<br />
    <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();"  /></p>

    <p>URL Title<br />
    <input type="text" name="url_title"  id='url_title' value="{url_title}" maxlength="75" size="50" /></p>

    {custom_fields}
    {if required}* {/if}{field_label}<br />
    {formatting_buttons}
    {field_instructions}

    {if textarea}
    <textarea id="{field_name}" name="{field_name}" dir="{text_direction}" cols="50" rows="{rows}">{field_data}</textarea><br />
    {/if}

    {if textinput}
    <input type="text" dir="{text_direction}" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}" size="50" /><br />
    {/if}

    {if pulldown}
    <select id="{field_name}" name="{field_name}">
    {options}<option value="{option_value}"{selected}>{option_name}</option>{/options}<br />
    </select>
    {/if}

    {if date}
    <input type="text" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}" size="50" /><br />
    {/if}

    {if relationship}
    <select id="{field_name}" name="{field_name}">
    {options}<option value="{option_value}"{selected}>{option_name}</option>{/options}<br />
    </select>
    {/if}

    {if multiselect}
    <select id="{field_name}" name="{field_name}[]" multiple="multiple">
    {options}<option value="{option_value}"{selected}>{option_name}</option>{/options}
    </select>
    {/if}

    {if checkbox}
    {options}{option_value} <input type="checkbox" id="{field_name}" name="{field_name}[]" value="{option_value}"{checked} />{/options}
    {/if}

    {if radio}
    {options}{option_value} <input type="radio" id="{field_name}" name="{field_name}" value="{option_value}"{checked} />{/options}
    {/if}

    {if file}
        {file}
    {/if}

    {/custom_fields}


    </td>
    <td valign="top">

    <input type="submit" name="submit" value="Submit" />
    <input type="submit" name="preview" value="Preview" />

    {status_menu}
    <p>Status<br />
    <select name="status">
    {select_options}
    </select>
    </p>
    {/status_menu}

    <p>Date <br />
    <input type="text" name="entry_date" value="{entry_date}" maxlength="23" size="25" /></p>

    <p>Expiration Date <br />
    <input type="text" name="expiration_date" value="{expiration_date}" maxlength="23" size="25" /></p>

    <p>Comment Expiration Date <br />
    <input type="text" name="comment_expiration_date" value="{comment_expiration_date}" maxlength="23" size="25" /></p>

    <p><input type="checkbox" name="sticky" value="y"  {sticky} /> Make Entry Sticky</p>
    <p><input type="checkbox" name="allow_comments" value="y" {allow_comments} /> Allow Comments</p>
    <p><input type='checkbox' name='dst_enabled' value='y' {dst_enabled} />DST Active on Date of Entry</p>

    {ping_servers}
    <p>Ping Servers<br />
    {ping_row}
    <input type="checkbox" name="ping[]" value="{ping_value}" {ping_checked} /> {ping_server_name}<br />
    {/ping_row}
    </p>
    {/ping_servers}

    {category_menu}
    <p>Categories<br />
    <select name="category[]" size="4" multiple="multiple">
    {select_options}
    </select>
    </p>
    {/category_menu}

    </td>
    </tr>
    </table>

    {/exp:channel:entry_form}

Further, you should use the {path='css/\_ee\_saef\_css'} path variable
to call the stylesheet used by the file browser if you are allowing file
uploads. ::

	<link href="{path='css/_ee_saef_css'}" type="text/css" rel="stylesheet" media="screen" />

Input Fields
------------

All of the fields available on the Control Panel Publish page are
available. However, the only *required* fields are the Title field and
any entry fields which you have specified in your Admin > Custom Channel
Fields as required.


Allow Comments
~~~~~~~~~~~~~~

You may allow the user to choose whether or not to allow comments on the
entry. ::

	<p><input type="checkbox" name="allow_comments" value="y" {allow_comments} /> Allow Comments</p>

Category Menu
~~~~~~~~~~~~~

This allows the user to select one or more categories for the entry. ::

	{category_menu} <p>Categories<br /> <select name="category[]" size="4" multiple="multiple"> {select_options} </select> </p> {/category_menu}

Comment Expiration Date
~~~~~~~~~~~~~~~~~~~~~~~

The user can specify the exact date for comment expiration if desired.
This is specified in the format YYYY-MM-DD hh:mm PM exactly as in the
Control Panel Publish section. ::

	<p>Comment Expiration Date <br /> <input type="text" name="comment_expiration_date" value="{comment_expiration_date}" maxlength="23" size="25" /></p>

Custom Entry Fields
~~~~~~~~~~~~~~~~~~~

The entry fields are displayed dynamically by ExpressionEngine. These
are displayed by an outer variable pair, which loops through all of the
fields for the channel and then displays a field appropriate for the
type.

::

    {custom_fields}
    {if required}* {/if}{field_label}<br />
    {field_instructions}

    {if textarea}
    <textarea id="{field_name}" name="{field_name}" dir="{text_direction}" cols="50" rows="{rows}" onclick="setFieldName(this.name)">{field_data}</textarea><br />
    {/if}
    {if textinput}
    <input type="text" dir="{text_direction}" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}" size="50" onclick="setFieldName(this.name)" /><br />
    {/if}
    {if pulldown}
    <select id="{field_name}" name="{field_name}">
    {options}<option value="{option_value}"{selected}>{option_name}</option>{/options}<br />
    </select>
    {/if}
    {if date}
    <input type="text" id="{field_name}" name="{field_name}" value="{field_data}" maxlength="{maxlength}" size="50" onclick="setFieldName(this.name)" /><br />
    {/if}
    {if relationship}
    <select id="{field_name}" name="{field_name}">
    {options}<option value="{option_value}"{selected}>{option_name}</option>{/options}<br />
    </select>
    {/if}
    {if multiselect}
    <select id="{field_name}" name="{field_name}[]" multiple="multiple">
    {options}<option value="{option_value}"{selected}>{option_name}</option>{/options}
    </select>
    {/if}
    {if checkbox}
    {options}{option_value} <input type="checkbox" id="{field_name}" name="{field_name}[]" value="{option_value}"{checked} />{/options}
    {/if}
    {if radio}
    {options}{option_value} <input type="radio" id="{field_name}" name="{field_name}" value="{option_value}"{checked} />{/options}
    {/if}

    {if file}
        {file}
    {/if}
    {/custom_fields}

**Note:** The file field example includes markup used by the file
browser javascript. If you are using the file browser in you entry form,
it's suggested that you also include a link to the accompanying style
sheets via the {path='css/\_ee\_saef\_css'} path variable.

DST Enabled
~~~~~~~~~~~

You may allow the user to choose whether or not to store that `DST is
active <../../general/date_localization.html>`_ with the entry. ::

	<p><input type="checkbox" name="dst_enabled" value="y" {dst_enabled} /> DST Active on Date of Entry</p>

Entry Date
~~~~~~~~~~

The user can specify the exact date for the entry. This is specified in
the format YYYY-MM-DD hh:mm PM exactly as in the Control Panel Publish
section. ::

	<p>Date <br /> <input type="text" name="entry_date" value="{entry_date}" maxlength="23" size="25" /></p>

Expiration Date
~~~~~~~~~~~~~~~

The user can specify the exact expiration date for the entry if desired.
This is specified in the format YYYY-MM-DD hh:mm PM exactly as in the
Control Panel Publish section. ::

	<p>Expiration Date <br /> <input type="text" name="expiration_date" value="{expiration_date}" maxlength="23" size="25" /></p>

Formatting Buttons
~~~~~~~~~~~~~~~~~~

You may include the formatting button toolbar on a per-field setting
basis just as in the Publish section. ::

	{formatting_buttons}

Remember, you should add {path='css/\_ee\_saef\_css'} to the document so
that the formatting buttons will appear correctly.

Make Entry Sticky
~~~~~~~~~~~~~~~~~

The user can specify whether to make the entry "sticky" or not. ::

	<p><input type="checkbox" name="sticky" value="y"  {sticky} /> Make Entry Sticky</p>

Ping Servers
~~~~~~~~~~~~

The user can any servers they wish to ping when the entry is submitted. ::

	{ping_servers} <p>Ping Servers<br /> {ping_row} <input type="checkbox" name="ping[]" value="{ping_value}" {ping_checked} /> {ping_server_name}<br /> {/ping_row} </p> {/ping_servers}

Status Menu
~~~~~~~~~~~

The user can select the appropriate entry status for the entry. ::

	{status_menu} <p>Status<br /> <select name="status"> {select_options} </select> </p> {/status_menu}

Title
~~~~~

The user can input the title for the entry. ::

	<p>Title<br /> <input type="text" name="title" id="title" value="{title}" size="50" maxlength="100" onkeyup="liveUrlTitle();"  /></p>

URL Title
~~~~~~~~~

The user can specify the URL Title for the entry. By default, it will be
dynamically created as the user types the title. If this field is not
included or is left blank, then the URL Title will be created by
ExpressionEngine based on the Title. ::

	<p>URL Title<br /> <input type="text" name="url_title"  id='url_title' value="{url_title}" maxlength="75" size="50" /></p>

Parameters
----------


allow\_comments=
~~~~~~~~~~~~~~~~

::

	allow_comments="yes"

If you don't wish to include the form option on the page then you can
set whether or not to allow comments with the entry via this parameter.
Options are "yes" and "no".

category=
~~~~~~~~~

::

	category="7|13"

If you don't wish to include the form option on the page then you can
set any categories that you wish to assign the entry to via this
parameter. Specify the category by Category ID. You may specify multiple
categories by separating the Category ID with the pipe character::

	category="3|7|13|42"

hidden\_pings=
~~~~~~~~~~~~~~

::

	hidden_pings="yes"

If you don't wish to include the form options on the page to select the
servers to ping, then you can specify whether or not to send the pings
via this parameter. Options are "yes" and "no". If you select "yes",
then EE will send a ping to all of the servers that are specified under
Admin > Default Ping Servers.

preview=
~~~~~~~~

::

	preview="site/entry"

This parameter specifies the Template Group/Template to use for
displaying the entry preview. Typically, it is easiest to specify the
same Template being used for the entry form.

return=
~~~~~~~

::

	return="site/index"

You may specify where to take the user after the entry has been
submitted. Specify the Template Group/Template. This is a **required**
parameter.

show\_fields=
~~~~~~~~~~~~~

::

	show_fields="body|extended"

If you wish, you may elect not to display all of the entry fields
assigned to your channel. This could be useful if you have fields that
are only used for administrative purposes. Specify which fields to
include by using their field name (the short name, not the label). You
may specify multiple fields by separating their field names with the
pipe character::

	show_fields="body|extended|full_image"

You may exclude fields by placing the word "not" in front of the list::

	show_fields="not image_thumbnail|source|rating"

**Note:** You **must** include all fields that are designated as
"required".

status=
~~~~~~~

::

	status="pending"

If you don't wish to include the form option on the page you can set the
status that you wish to assign the entry to. Simply use the name of the
status as specified under Admin > Channel Administration > Statuses. The
two statuses "open" and "closed" are default statuses that are always
available, so you can always specify those if needed.

sticky\_entry=
~~~~~~~~~~~~~~

::

	sticky_entry="yes"

If you don't wish to include the form option on the page then you can
set whether or not to make the entry "sticky" via this parameter.
Options are "yes" and "no".

use\_live\_url=
~~~~~~~~~~~~~~~

::

	use_live_url="no"

By default, the URL Title field will be dynamically populated as you
type your Title. If you do not wish to have that happen, you can turn
off the feature using this parameter. Options are "yes" and "no".

channel=
~~~~~~~~

::

	channel="news"

The name (short name) of the channel that the categories are assigned
to. This is a **required** parameter.

form\_class=
~~~~~~~~~~~~

::

	form_class="saef_form"

With this parameter, you can specify the css class you want the form to
have, enabling fine-grained styling of the form.

include\_jquery=
~~~~~~~~~~~~~~~~

::

	include_jquery="no"

With this parameter, you can choose to load your own jQuery library that
the SAEF relies on for the file browser.

By Default, jQuery and the required dependencies are included below the
opening <form> tag. The scripts may be relocated within the form by
using the `{saef\_javascript} <#var_saef_javascript>`_ variable.

Variables
---------

The Stand Alone Entry Form also contains a few special variables.


field\_instructions
~~~~~~~~~~~~~~~~~~~

::

	{field_instructions}

The field instructions as entered in the `Channel Fields
area <../../cp/admin/channels/custom_fields_edit.html>`_.

saef\_javascript
~~~~~~~~~~~~~~~~

::

	{saef_javascript}

Although not required, this variable allows one to move the location of
included jQuery/jQuery Plugins, as well as a minimal amount of inline
javascript required for the formatting buttons and the file upload
function.
Previewing
----------

Within the main {exp:channel:entry\_form} tag, you may place a variable
pair to allow you to display a preview of the entry. ::

	{preview} <h1>{title}</h1>  {display_custom_fields}  {/preview}

Displaying Custom Fields
~~~~~~~~~~~~~~~~~~~~~~~~

There are two ways to display your custom field data in the preview. The
first, and simplest, way is simply to use this variable::

	{display_custom_fields}

That variable will automatically loop through and display all of the
entry fields.

The other method is to individually specify the fields, just as you
might when displaying an entry in a Template. For instance::

	{preview} <h2>{title}</h2>  {body}  <div class="more">{extended}</div>  {/preview}

You must specify the fields by their field name (short name) and not by
their *label*.
