Menu Class Extension Hooks
==========================

.. contents::
	:local:
	:depth: 1


cp\_menu\_array
---------------

Modify the control panel menu before it's presented in the control panel.
::

	$menu = $this->EE->extensions->call('cp_menu_array', $menu);

$menu
~~~~~

Array of control panel menu hierarchy and links.

:returns:
    Array

Added in v2.1.5