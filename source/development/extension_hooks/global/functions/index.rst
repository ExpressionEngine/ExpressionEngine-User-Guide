Functions Library Extension Hooks
=================================

.. contents::
	:local:
	:depth: 1


create\_captcha\_start
----------------------

Allows rewrite of how CAPTCHAs are created

::

	$edata = $this->extensions->call('create_captcha_start', $old_word); if ($this->extensions->end_script === TRUE) return $edata;

$old\_word
~~~~~~~~~~

Normally empty, but it will create a CAPTCHA with that word if set.

:returns:
    void

Added in v1.4.0

form\_declaration\_modify\_data
-------------------------------

Modify the $data parameters before they are processed by the user side
form creator. ::

	$data = $this->extensions->call('form_declaration_modify_data', $data);

$data
~~~~~
The array of arguments sent to the form\_declaration() method

:returns:
    Array

Added in v1.4.2

form\_declaration\_return
-------------------------

Take control of the form\_declaration function to create form tags the
way you want. ::

	$form = $this->extensions->call('form_declaration_return', $data); if ($this->extensions->end_script === TRUE) return $form;

$data
~~~~~

The array of arguments sent to the function for creating the form
tag

:returns:
    String

Added in v1.4.2
