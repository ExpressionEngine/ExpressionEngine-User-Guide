Core Library Extension Hooks
==================================

.. contents::
	:local:
	:depth: 1


core\_template\_route
---------------------

Reassign the template group and template loaded for parsing.

::

	$this->template = $this->EE->extensions->call('core_template_route', $this->EE->uri->uri_string);

$this->EE->uri->uri_string
~~~~~~~~~~~~~~~~~~~~~~~~~~

The full uri string being loaded

:returns:
       Array (string The name of the template group, string The name of the template)