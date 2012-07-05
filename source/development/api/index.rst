ExpressionEngine API
====================

.. contents::
	:local:
	:depth: 1

Overview
--------

The API libraries attempt to provide a simple, unified abstraction to
common ExpressionEngine operations. This includes managing templates and
channels, as well as creating, editing, and deleting channel entries.
Typically operations of this sort are complex with multiple steps to
maintain database consistency. That makes them prone to errors and
difficult to maintain. Making use of the provided APIs removes the
burden of staying up-to-date with all of the required steps and ensures
that your addons will remain functional even if the underlying
architecture changes.

Calling the API
---------------

::

	$this->EE->load->library('api');

After loading the parent API library, the child classes are loaded with
instantiate()::

$this->EE->api->instantiate('channel_entries');

At this point, methods within the api\_channel\_entries api are callable
via $this->EE->api\_channel\_entries->method\_name();

Available APIs
--------------

-  `Channel Categories <./api_channel_categories.html>`_ – Retrieve
   information on Channel Categories.
-  `Channel Entries <./api_channel_entries.html>`_ – Retrieve
   information on Channel Entries.
-  `Channel Fields <./api_channel_fields.html>`_ – Retrieve information
   on Channel Fields.
-  `Channel Structure <./api_channel_structure.html>`_ – Create, Modify,
   Delete & Update Channels.
-  `Template Structure <./api_template_structure.html>`_ – Retrieve
   information on Template Groups.

Function Reference
------------------

The following public functions are accessible:

.. contents::
	:local:

Instantiate
~~~~~~~~~~~

Name of the API to instantiate. ::

	$this->EE->api->instantiate((string) $which);

:returns:
	Void on success, however an exception will be raised if the API can not be found.

Error Count
~~~~~~~~~~~

Number of errors generated in API functions. ::

	$this->EE->api->error_count();

:returns:
    Number of errors

Make URL Safe
~~~~~~~~~~~~~

Makes a string safe for use in a URL segment.

Valid Characters are: a-zA-Z0-9\_-. ::

	$this->EE->api->make_url_safe((string) $str);

Example Usage::

	$this->EE->load->library('api');
	
	$str = 'this is a string that\'s not URL safe.  (we will clean it for $5).';
	$str = $this->EE->api->make_url_safe($str); // Result thisisastringthatsnotURLsafe.wewillcleanitfor5.

:returns:
    Cleansed string

Is String URL Safe?
~~~~~~~~~~~~~~~~~~~

Checks if a string is safe for use in a URL segment

::

	$this->EE->api->is_url_safe((string) $str);

Example Usage::

	$this->EE->load->library('api');
	
	$str = 'this is a string that\'s not URL safe.  (we will clean it for $5).';
	
	if ( ! $this->EE->api->is_url_safe($str))
	{
		// Do additional Processing on the string to make it URL safe
	}

:returns:
    Boolean - TRUE on success, FALSE on failure


.. toctree::
	:glob:
	:hidden:
	:titlesonly:

	*