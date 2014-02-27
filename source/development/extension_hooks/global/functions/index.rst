Functions Library Extension Hooks
=================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

create_captcha_start
--------------------

.. function:: create_captcha_start($old_word)

  Allows rewrite of how CAPTCHAs are created.

  How it's called::

    $edata = ee()->extensions->call('create_captcha_start', $old_word);
    if (ee()->extensions->end_script === TRUE) return $edata;

  :param string $old_word: Normally empty, but it will create a CAPTCHA
    with that word if set
  :rtype: Void

  .. versionadded:: 1.4.0

form_declaration_modify_data
----------------------------

.. function:: form_declaration_modify_data($data)

  Modify the $data parameters before they are processed by the user side
  form creator.

  How it's called::

    $data = $this->extensions->call('form_declaration_modify_data', $data);

  :param array $data: Array of arguments sent to the
    ``form_declaration()`` method
  :returns: Manipulated array to pass to ``form_declaration()``
  :rtype: Array

  .. versionadded:: 1.4.2

form_declaration_return
-----------------------

.. function:: form_declaration_return($data)

  Take control of the form_declaration function to create form tags the
  way you want.

  How it's called::

    $form = $this->extensions->call('form_declaration_return', $data);
    if ($this->extensions->end_script === TRUE) return $form;

  :param array $data: Array of arguments sent to the function for
    creating the form tag
  :returns: String containing the opening form tag, must set
    ``end_script`` to ``FALSE`` for this to work
  :rtype: String

  .. versionadded:: 1.4.2


