Design Controller Extension Hooks
=================================

.. contents::
	:local:
	:depth: 1


edit\_template\_start
---------------------

Additional processing / take over at the beginning of the
edit\_template() method. ::

	$edata = $this->extensions->call('edit_template_start', $query, $template_id, $message); if ($this->extensions->end_script === TRUE) return;

$query
~~~~~~

Database result object for the selected template

$template\_id
~~~~~~~~~~~~~

Template ID of the selected template

$message
~~~~~~~~

Update / Error message from update action, if applicable

:returns:
    void

Added in v1.6.0

template_types
--------------

Add template types to ExpressionEngine's default set. In the design
controller, this hook will append custom template types to the bottom of
Template Type dropdowns. ::

	$custom_templates = $this->extensions->call('template_types', array());

This hook should append a key to the passed array in the following
format::

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

update\_template\_end
---------------------

Additional processing after a template is updated

::

	$edata = $this->extensions->call('update_template_end', $template_id, $message); if ($this->extensions->end_script === TRUE) return;

$template\_id
~~~~~~~~~~~~~

Template ID of the updated template

$message
~~~~~~~~

Update / Error message from update action

:returns:
    void

Added in v1.6.0
