Template Structure API Extension Hooks
======================================

.. contents::
	:local:
	:depth: 1


template_types
--------------

Add template types to ExpressionEngine's default set. In the template
structure API, this hook can be used to specify file extensions for custom
template types. ::

	$template_types = $this->EE->extensions->call('template_types', array());

This hook must append a key to the :doc:`$last_call
</development/extensions>` array in the following format::

	$custom_templates = $this->EE->extensions->last_call;
	
	$custom_templates['ical'] = array(             // Short name for database
	    'template_name'           => 'iCal Feed',  // Display name for Template Type dropdown
	    'template_file_extension' => '.ics',       // File extension for saving templates as files
	    'template_headers'        => array(        // Custom headers for file type
	        'Content-Type: text/ical',
	        'Content-Disposition: attachment; filename="event.ics"'
	    )
	);

**Note:** It is good practice to clean up the templates table and remove
your custom template type from templates using it upon extension
uninstallation.

:returns:
    Array

Added in v2.4.0