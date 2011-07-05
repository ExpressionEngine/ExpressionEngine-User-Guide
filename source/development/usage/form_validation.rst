Form Validation Class
=====================

-  `Usage of Form Validation Class <form_validation.html#usage>`_
-  `Setting Reference Values <form_validation.html#reference_values>`_
-  `User Specific Rules <form_validation.html#user_rules>`_
-  `Prepping Functions <form_validation.html#prepping_functions>`_

Usage of Form Validation Class
------------------------------

The Form Validation class provides comprehensive validation framework to
minimize the amount of code you need to write. It provides a toolset for
validating user input, showing validation errors, and repopulating form
fields.

The base functionality for the Form Validation class is inherited from
the corresponding CodeIgniter library - refer to the `Form
Validation <http://codeigniter.com/user_guide/libraries/form_validation.html>`_
documentation in the CodeIgniter user guide for details.

Setting Reference Values
------------------------

For member screen names, member usernames, and member email addresses
the Form Validation class needs a reference value. This value will be
ignored when checking for duplicates.

$this->EE->form\_validation->set\_old\_value($key, $value)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Is used to set a reference value for a given key.

$this->EE->form\_validation->old\_value($key)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Can be used to retrieve a reference value that was previously set. This
method is primarily used internally.

User Specific Rules
-------------------

A few rules are provided to check for illegal characters, validate input
lengths, and check for duplicates on member fields.

valid\_username
~~~~~~~~~~~~~~~

Checks the username for invalid characters, as well as making sure no
duplicates exist. It takes an optional parameter to indicate if this is
a new user. Expects that a reference value for **username** was set
before running the validation.

::

    $this->EE->form_validation->set_rules('username', 'Username', 'required|valid_username');
    $this->EE->form_validation->set_rules('username', 'Username', 'required|valid_username[new]');

valid\_screen\_name
~~~~~~~~~~~~~~~~~~~

Works the same way as the valid\_username rule. Expects that a reference
value for **screen\_name** was set before running the validation.

::

    $this->EE->form_validation->set_old_value('screen_name', 'Bob');
    $this->EE->form_validation->set_rules('screen_name', 'Screen Name', 'required|valid_screen_name');

valid\_user\_email
~~~~~~~~~~~~~~~~~~

Identical to the previous rules, but expects the reference value to be
set for **email**.

::

    // Note: no reference value is needed if this is a new user
    $this->EE->form_validation->set_rules('email', 'lang:email', 'required|valid_user_email[new]');

valid\_password
~~~~~~~~~~~~~~~

Checks the submitted password for weaknesses and illegal characters.
Takes the name of a username field as a parameter, which is used to
prevent a password that is based on the username. This rule *does not*
check user credentials.

::

    $this->EE->form_validation->set_rules('password', 'lang:password', 'required|valid_password[username]');

Prepping Functions
------------------

These are convenience functions to help sanitize and validate frequently
used input data patterns.

prep\_list
~~~~~~~~~~

Replaces all commas, pipes, and whitespace (tabs, newlines, and spaces)
with a given delimiter.

::

    $this->EE->form_validation->set_rules('emails', 'lang:emails', 'required|prep_list[,]|valid_emails');

