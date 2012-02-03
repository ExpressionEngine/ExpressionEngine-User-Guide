ExpressionEngine Channel Fields API
===================================

.. contents::
	:local:
	:depth: 1

                        
Calling the Class
-----------------

The Channel Fields class is called with the api->instantiate() function. ::

	$this->EE->load->library('api'); $this->EE->api->instantiate('channel_fields');

Function Reference
------------------

.. contents::
	:local:

Fetch all Fieldtypes
~~~~~~~~~~~~~~~~~~~~

Goes through all fieldtype files, includes them (using
include\_handler()), and returns an array of all found fieldtypes. ::

	$this->EE->api_channel_fields->fetch_all_fieldtypes();

:returns:
    Array::

	'fieldtype_shortname' => array(
		'path'  	=>  (string) File Path,
		'file'  	=>  (string) Filename,
		'name'  	=>  (string) Human readable name,
		'class' 	=>  (string) Class Name,
		'package' 	=>  (string) Package name
	);

    A package name is only returned if the fieldtype comes from a third
    party

Fetch installed Fieldtypes
~~~~~~~~~~~~~~~~~~~~~~~~~~

This method is identical to fetch\_all\_fieldtypes(), but the returned
array is limited to fieldtypes that have been installed by the user. ::

	$this->EE->api_channel_fields->fetch_installed_fieldtypes();

:returns:
    (array) Same as fetch\_all\_fieltypes, but with the addition of a
    version number and fieldtype id.

Include Fieldtype Class
~~~~~~~~~~~~~~~~~~~~~~~

This method includes the class that is responsible for a certain
fieldtype, and adds it to a list of known fieldtypes. Do not include
fieldtypes manually as it may cause ExpressionEngine to not recognize
them. ::

	$this->EE->api_channel_fields->include_handler((string) $field_type);

:returns:
    (string) Name of the fieldtype's class.

Setup Fieldtype Class
~~~~~~~~~~~~~~~~~~~~~

This method prepares resets the fieldtype class and its settings. It
must be called before a fieldtype is used. ::

	$this->EE->api_channel_fields->setup_handler((string) $field_type);

:returns:
    (bool) Fieldtype setup successful

Setup Entry Settings
~~~~~~~~~~~~~~~~~~~~

This method will properly populate the settings array for all fields in
the specified channel. It returns an array of all field settings, and is
typically used before the Channel Entries API's
`submit\_new\_entry() <api_channel_entries.html#submit_new_entry>`_
method. ::

	$this->EE->api_channel_fields->setup_entry_settings((string) $channel_id, (array) $entry_data,(bool) $bookmarklet);

Set Fieldtype Settings
~~~~~~~~~~~~~~~~~~~~~~

This method is used to assign additional settings to a fieldtype. This
may be any data that a fieldtype developer may need to use in their
fieldtype. The settings array must include a field\_type key, and can
include an optional field\_name if used in a channel context. ::

	$this->EE->api_channel_fields->set_settings((string) $field_id, (mixed) $settings);

Get Fieldtype Settings
~~~~~~~~~~~~~~~~~~~~~~

This method gets the settings of an individual field. ::

	$this->EE->api_channel_fields->get_settings((string) $field_id);

Call a Fieldtype Method
~~~~~~~~~~~~~~~~~~~~~~~

This is a convenience method to call a fieldtype after it has been
setup. It will automatically setup the proper third party paths and
handle PHP4's pass-by-reference quirks. It acts on the last fieldtype
that was passed to setup\_handler(). It takes an array of parameters. ::

	$this->EE->api_channel_fields->apply((string) $method, (mixed) $parameters);

:returns:
    (mixed) The return value of the fieldtype function that was called.

Example Usage::

	$parameters = array(
		'foo'       => 'Dog',
		'bar'       => 'Cat'
	);
	
	$this->EE->api_channel_fields->setup_handler('my_fieldtype');
	echo $this->EE->api_channel_fields->apply('my_method', $parameters);

Create or Update a Channel Field
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This method gets the settings of an individual field. Include a field_id in the $field_data array to update an existing field, or omit field_id to create a new one. ::

	$this->EE->api_channel_fields->update_field((array) $field_data);

:returns:
	(string) The field_id of the updated/created field.

Values that may be passed in the $field_data array include:

- **group\_id**, (int)
- **field\_id**, (int optional)
- **field\_name**, (string a-zA-Z0-9\_- only)
- **field\_label**, (string)
- **field\_type**, (string a valid fieldtype short name)
- **field\_order**, (int)
- **field\_instructions**, (string)
- **field\_required**, (string y/n)
- **field\_search**, (string y/n)
- **field\_is_hidden**, (string y/n)
- **field\_fmt**, (string)
- **field\_show_fmt**, (string)
- **field\_text_direction**, (string ltr/rtl)
- **field\_maxl**, (int)
- and other fieldtype-specific settings, see the fieldtype's display_settings and save_settings methods for more options

Example Usage::

	$field_data = array(
		'group_id' => 1,
		'field_name' => 'blog_body',
		'field_label' => 'Body',
		'field_type' => 'text',
		'field_order' => 10,
		'field_required' => 'y',
		'field_search' => 'y',
		'field_is_hidden' => 'n',
		'field_instructions' => '',
		'field_maxl' => 128,
		'text_field_fmt' => 'none',
		'text_field_show_fmt' => 'n',
		'text_field_text_direction' => 'ltr',
		'text_field_content_type' => 'all',
		'text_field_show_smileys' => 'n',
		'text_field_show_glossary' => 'n',
		'text_field_show_spellcheck' => 'n',
		'text_field_show_file_selector' => 'n',
	);
	
	$this->EE->api_channel_fields->update_field($field_data);

Field Settings Variables
~~~~~~~~~~~~~~~~~~~~~~~~

This method supplies the view variables for field settings in the Edit/Create Field screen. This is used prior to and in conjunction with api_channel_fields->update_field(). $field_id is optional if you are creating a new field. $field_types is optional, and is an array of field types to display. By default, all field types are shown in the view.

	$this->EE->api_channel_fields->field_edit_vars((int) $group_id, (int) $field_id, (array) $field_types)

:returns:
	(array) View variables for the admin/field_edit view.

Example Usage::

	$vars = $this->EE->api_channel_fields->field_edit_vars(1, 2);
	
	return $this->EE->load->view('admin/field_edit', $vars, TRUE);