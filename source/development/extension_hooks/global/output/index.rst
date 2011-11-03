Output Library Extension Hooks
==============================

.. contents::
	:local:
	:depth: 1


template_types
--------------

Add template types to ExpressionEngine's default set. In the Output
library specifically, it is useful to return the appropriate content type
header for the template type. ::

	$custom_templates = $this->extensions->call('template_types');

This hook should return an array in the following format::

	$custom_templates = array(
	    'ical' = > array(                           // Short name for database
	        'template_name'         => 'iCal Feed', // Display name for Template Type dropdown
	        'template_content_type' => 'text/ical'  // Content-type header
	    )
	);

:returns:
    Array

Added in v2.4.0