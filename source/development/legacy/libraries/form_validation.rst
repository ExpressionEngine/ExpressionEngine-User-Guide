.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Form Validation Class
=====================

.. contents::
  :local:

.. highlight:: php

Usage of Form Validation Class
------------------------------

.. class:: Form_validation

  The Form Validation class provides comprehensive validation framework
  to minimize the amount of code you need to write. It provides a
  toolset for validating user input, showing validation errors, and
  repopulating form fields.

  The base functionality for the Form Validation class is inherited from
  the corresponding CodeIgniter library---refer to the :ellislab:`Form
  Validation </codeigniter/user-guide/libraries/form_validation.html>`
  documentation in the CodeIgniter user guide for details.

Setting Reference Values
------------------------

For member screen names, member usernames, and member email addresses
the Form Validation class needs a reference value. This value will be
ignored when checking for duplicates.

.. method:: set_old_value($key[, $value = ''])

  Is used to set a reference value for a given key::

    ee()->form_validation->set_old_value($key, $value)

  :param mixed $key: Name of input or associative array containing input
    names as the keys and their values as the values
  :param string $val: The value to set
  :rtype: Void

.. method:: old_value($key)

  Can be used to retrieve a reference value that was previously set.
  This method is primarily used internally::

    ee()->form_validation->old_value($key)

  :param string $key: Name of the input to retrieve
  :returns: Data of the value associated with ``$key``
  :rtype: String

User Specific Rules
-------------------

A few rules are provided to check for illegal characters, validate input
lengths, and check for duplicates on member fields.

valid_username
~~~~~~~~~~~~~~~

Checks the username for invalid characters, as well as making sure no
duplicates exist. It takes an optional parameter to indicate if this is
a new user. Expects that a reference value for ``username`` was set
before running the validation::

  ee()->form_validation->set_rules('username', 'Username', 'required|valid_username');
  ee()->form_validation->set_rules('username', 'Username', 'required|valid_username[new]');

valid_screen_name
~~~~~~~~~~~~~~~~~~~

Works the same way as the valid_username rule. Expects that a reference
value for ``screen_name`` was set before running the validation::

  ee()->form_validation->set_old_value('screen_name', 'Bob');
  ee()->form_validation->set_rules('screen_name', 'Screen Name', 'required|valid_screen_name');

valid_user_email
~~~~~~~~~~~~~~~~~~

Identical to the previous rules, but expects the reference value to be
set for ``email``::

  // Note: no reference value is needed if this is a new user
  ee()->form_validation->set_rules('email', 'lang:email', 'required|valid_user_email[new]');

valid_password
~~~~~~~~~~~~~~~

Checks the submitted password for weaknesses and illegal characters.
Takes the name of a username field as a parameter, which is used to
prevent a password that is based on the username. This rule *does not*
check user credentials::

  ee()->form_validation->set_rules('password', 'lang:password', 'required|valid_password[username]');

Prepping Methods
----------------

These are convenience methods to help sanitize and validate frequently
used input data patterns.

prep_list
~~~~~~~~~~

Replaces all commas, pipes, and whitespace (tabs, newlines, and spaces)
with a given delimiter::

  ee()->form_validation->set_rules('emails', 'lang:emails', 'required|prep_list[,]|valid_emails');

