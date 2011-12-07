Logger Class
============

.. contents::
	:local:
	:depth: 1

Calling the Logger Class
------------------------

Load the Logger library. ::

	$this->EE->load->library('logger');

Developer Log
-------------

The control panel contains a developer log, which is a log for
ExpressionEngine and its third-party developers to bring notices or
warnings to the attention of the Super Admin.

**Control Panel Location:** :menuselection:`Tools --> Logs --> Developer Log`

For example, EllisLab uses the developer log to warn developers if a core
function that is planned to be deprecated is being used by any third-party
add-ons.

To use the developer log to log your own events, notices or warnings, call this
function and pass the string of the notice::

	$this->EE->logger->developer('Log message.');