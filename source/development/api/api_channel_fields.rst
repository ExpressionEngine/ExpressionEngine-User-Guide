ExpressionEngine Channel Fields API
===================================

.. contents::
	:local:
	:depth: 1


Calling the Class
-----------------

.. class:: Api_channel_fields

	The Channel Fields class is called with the api->instantiate() function. ::

		$this->EE->load->library('api'); $this->EE->api->instantiate('channel_fields');

Function Reference
------------------

.. contents::
	:local:

Fetch all Fieldtypes
~~~~~~~~~~~~~~~~~~~~

.. method:: fetch_all_fieldtypes()
	
	Goes through all fieldtype files, includes them (using
	include\_handler()), and returns an array of all found fieldtypes::

		$this->EE->api_channel_fields->fetch_all_fieldtypes();

	:returns: Nested associative arrays of fieldtype data (see below)
	:rtype: Array

	Example of returned data::

		array(
			'fieldtype_shortname' => array(
				'path'  	=>  (string) File Path,
				'file'  	=>  (string) Filename,
				'name'  	=>  (string) Human readable name,
				'class' 	=>  (string) Class Name,
				'package' 	=>  (string) Package name
			),
			'fieldtype_shortname2' => array(...),
		);

	A package name is only returned if the fieldtype comes from a third
	party

Fetch installed Fieldtypes
~~~~~~~~~~~~~~~~~~~~~~~~~~

.. method:: fetch_installed_fieldtypes()

	This method is identical to
	:meth:`Api_channel_fields::fetch_all_fieldtypes`, but the returned
	array is limited to fieldtypes that have been installed by the
	user::

		$this->EE->api_channel_fields->fetch_installed_fieldtypes();

	:returns: Nested associative arrays of installed fieldtype data.
		Adds in version number and fieldtype ID.
	:rtype: Array

Include Fieldtype Class
~~~~~~~~~~~~~~~~~~~~~~~

.. method:: include_handler($field_type)

	This method includes the class that is responsible for a certain
	fieldtype, and adds it to a list of known fieldtypes. Do not include
	fieldtypes manually as it may cause ExpressionEngine to not
	recognize them::

		$this->EE->api_channel_fields->include_handler((string) $field_type);

	:param string $field_type: Name of the fieldtype to include (e.g.
		ft.**field_name**.php)
	:returns: Name of the fieldtype's class.
	:rtype: String

Setup Fieldtype Class
~~~~~~~~~~~~~~~~~~~~~

.. method:: setup_handler($field_type)

	This method prepares resets the fieldtype class and its settings. It
	must be called before a fieldtype is used::

		$this->EE->api_channel_fields->setup_handler((string) $field_type);

	:param string $field_type: Name of the fieldtype to include (e.g. 
		ft.**field_name**.php)
	:returns: ``TRUE`` if setup was successful, ``FALSE`` if not
	:rtype: Boolean

Setup Entry Settings
~~~~~~~~~~~~~~~~~~~~

.. method:: setup_entry_settings($channel_id, $entry_data[, $bookmarklet = FALSE])

	This method will properly populate the settings array for all fields
	in the specified channel. It returns an array of all field settings,
	and is typically used before the Channel Entries API's
	:doc:`submit_new_entry() </development/api/api_channel_entries>`
	method. ::

		$this->EE->api_channel_fields->setup_entry_settings((string) $channel_id, (array) $entry_data, (bool) $bookmarklet);

	:param int $channel_id: ID of the channel the entry is in
	:param array $entry_data: Associative array of entry data
	:param boolean $bookmarklet: ``TRUE`` if you need the data to be 
		setup for a bookmarklet
	:returns: Nested array of field settings for a channel with data
	:rtype: Array

Set Fieldtype Settings
~~~~~~~~~~~~~~~~~~~~~~

.. method:: set_settings($field_id, $settings)

	This method is used to assign additional settings to a fieldtype.
	This may be any data that a fieldtype developer may need to use in
	their fieldtype. The settings array must include a field\_type key,
	and can include an optional field\_name if used in a channel
	context::

		$this->EE->api_channel_fields->set_settings((string) $field_id, (mixed) $settings);

	:param string $field_id: ID of the field
	:param mixed $settings: Array of settings to **replace** the 
		original settings with
	:rtype: Void

Get Fieldtype Settings
~~~~~~~~~~~~~~~~~~~~~~

.. method:: get_settings($field_id)

	This method gets the settings of an individual field. ::

		$this->EE->api_channel_fields->get_settings((string) $field_id);

	:param string $field_id: ID of the field
	:returns: Array of settings or an empty array if that field doesn't
		exist
	:rtype: Array


Call a Fieldtype Method
~~~~~~~~~~~~~~~~~~~~~~~

.. method:: apply($method[, $parameters = array()])

	This is a convenience method to call a fieldtype after it has been
	setup. It will automatically setup the proper third party paths and
	handle PHP4's pass-by-reference quirks. It acts on the last
	fieldtype that was passed to setup\_handler(). It takes an array of
	parameters::

		$this->EE->api_channel_fields->apply((string) $method, (mixed) $parameters);

	:param string $method: Name of the method to run
	:param mixed $parameters: Parameters to send to the method
	:returns: The return value of the fieldtype function that was called.
	:rtype: Mixed

	Example Usage::

		$parameters = array(
			'foo'       => 'Dog',
			'bar'       => 'Cat'
		);
		
		$this->EE->api_channel_fields->setup_handler('my_fieldtype');
		echo $this->EE->api_channel_fields->apply('my_method', $parameters);

Create or Update a Channel Field
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. method:: update_field($field_data)

	This creates a new channel field or updates an existing field. Include a
	field_id in the $field_data array to update an existing field, or omit
	field_id to create a new one. ::

		$this->EE->api_channel_fields->update_field((array) $field_data);

	:param array $field_data: The field settings. Needs the following 
		keys: ``group_id``, ``site_id``, ``field_name``, 
		``field_label``, ``field_type``, ``field_order``, and also 
		fieldtype-specific settings, e.g. ``text_field_text_direction``
	:returns: The field_id of the updated/created field.
	:rtype: String

	Values that may be passed in the $field_data array include:

	- ``group_id``, (``int``)
	- ``field_id``, (``int`` optional)
	- ``field_name``, (``string`` a-zA-Z0-9\_- only)
	- ``field_label``, (``string``)
	- ``field_type``, (``string`` a valid fieldtype short name)
	- ``field_order``, (``int``)
	- ``field_instructions``, (``string``)
	- ``field_required``, (``string`` y/n)
	- ``field_search``, (``string`` y/n)
	- ``field_is_hidden``, (``string`` y/n)
	- ``field_fmt``, (``string``)
	- ``field_show_fmt``, (``string``)
	- ``field_text_direction``, (``string`` ltr/rtl)
	- ``field_maxl``, (``int``)
	- and other fieldtype-specific settings, see the fieldtype's ``display_settings`` and ``save_settings`` methods for more options

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

.. method:: field_edit_vars($group_id[, $field_id = FALSE[, $field_types = FALSE]])

	This method supplies the view variables for field settings in the
	Edit/Create Field screen. This is used prior to and in conjunction
	with api_channel_fields->update_field(). $field_id is optional if
	you are creating a new field. $field_types is optional, and is an
	array of field types to display. By default, all field types are
	shown in the view.

		$this->EE->api_channel_fields->field_edit_vars((int) $group_id, (int) $field_id, (array) $field_types)

	:param int group_id: Group to add/edit field
	:param int $field_id: Field ID if you're editing, FALSE if it's new
	:param array $field_types: Array of field types to present as
		``field_type_options``, will show all valid field types if
		``FALSE``
	:returns: View variables for the ``admin/field_edit`` view
	:rtype: Array

	Example Usage::

		$vars = $this->EE->api_channel_fields->field_edit_vars(1, 2);
		return $this->EE->load->view('admin/field_edit', $vars, TRUE);