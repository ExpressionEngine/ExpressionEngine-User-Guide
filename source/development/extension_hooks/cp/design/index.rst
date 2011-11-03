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

	$custom_templates = $this->extensions->call('template_types');

This hook should return an array in the following format::

	$custom_templates = array(
	    'ical' = > array(                           // Short name for database
	        'template_name'         => 'iCal Feed', // Display name for Template Type dropdown
	        'template_content_type' => 'text/ical'  // Content-type header for Output library
	    )
	);

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
