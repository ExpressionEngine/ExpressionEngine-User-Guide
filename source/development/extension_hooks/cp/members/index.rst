Members Controller Extension Hooks
==================================

.. contents::
	:local:
	:depth: 1


cp\_members\_member\_create
---------------------------

Additional processing after a member is created via the control panel.
Executes after member is created, but before stats are recounted. ::

	$edata = $this->extensions->call('cp_members_member_create', $member_id, $data); if ($this->extensions->end_script === TRUE) return;

$member\_id
~~~~~~~~~~~

Member ID of the newly created member

$data
~~~~~

Array of data about the new member

:returns:
    void

Added in v1.4.0

cp\_members\_member\_create\_start
----------------------------------

Perform additional tasks prior to / take over the control panel member
creation routine

::

	$edata = $this->extensions->call('cp_members_member_create_start'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.4.2

cp\_members\_member\_delete\_end
--------------------------------

Allows additional processing when a member is deleted from the control
panel. ::

	$edata = $this->extensions->call('cp_members_member_delete_end'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.4.0

cp\_members\_validate\_members
------------------------------

Additional processing after pending members are validated via the
Control Panel

::

	$edata = $this->extensions->call('cp_members_validate_members'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.5.2

myaccount_nav_setup
-------------------

Add additional menu items to the My Account settings page. ::

	$vars['additional_nav'] = array(
		'personal_settings' => array(),
		'utilities' => array(),
		'private_messages' => array(),
		'customize_cp' => array(),
		'channel_preferences' => array(),
		'administrative_options' => array()
	);

	$vars['additional_nav'] = array_merge_recursive(
		$vars['additional_nav'], 
		$this->extensions->call('myaccount_nav_setup')
	);

Your hook should return an associative array with the key matching one of the
keys above that match the My Account sections. The value should be another
associative array with the key being the text you want in the navgation and the
value being another associative array with ``module`` and ``method`` being the
keys and their values being the respective module's name and the method being a
method that exists in the method's control panel.

Additionally, you should check ``extensions->last_call`` to avoid overwriting
previous changes to the My Account navigation and be sure to use
``array_merge_recursive`` when merging the previous extension results::

	// Check for previous calls to myaccount_nav_setup hook
	$additional_nav = ($this->EE->extensions->last_call) ? 
		$this->EE->extensions->last_call :
		array();

	// Load in language file for navigation wording
	$this->EE->lang->loadfile('module_name');

	// Return new navigation item merged with existing calls to hook
	// Using array_merge_recursive for a deep clone
	return array_merge_recursive(
		$additional_nav,
		array(
			'customize_cp' => array(
				lang('module_myaccount_settings') => array(
					'module'	=> 'module_name',
					'method'	=> 'module_myaccount_settings'
				)
			)
		)
	);

:returns:
	Associative array containing one of the previously defined navigation 
	sections.

Added in v2.5
