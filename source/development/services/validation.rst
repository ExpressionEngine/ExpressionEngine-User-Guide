Validation Service
==================

.. contents::
  :local:

.. highlight:: php

Simple Example
--------------

Data validation is essential in all programming to ensure safety and
correctness of all programs. The Validation service simplifies this task
with a concise and extensible API.

::

  $rules = array(
    'username' => 'required|min_length[5]',
    'password' => 'required|min_length[5]'
  );

  $result = ee('Validation')->make($rules)->validate($_POST);

  if ($result->isValid())
  {
    // yay
  }

  // no :(


Defining Rules
--------------

Which rules to apply is defined in a string of pipe delimited rule names.
The rules are processed from left to right::

  "required|alpha_numeric"

Some rules may also take parameters. These are added in braces after the
rule name::

  "required|enum[blue, red, yellow]" // only allow these three color names


.. _validation-service-required:

Required Fields
---------------

The `required` rule is used to ensure that fields are set and not blank.
A field is considered blank if it only contains whitespace.

If no required rule is encountered then a blank field is considered valid
regardless of the other rules::

  "numeric|alpha" // despite conflicting rules, a blank field will pass

This means that you will usually want to use `required` at the beginning
of the rule string. The exception being conditional rules, which are
covered later.


.. _validation-service-when-present:

Conditional Rules
-----------------

There are times where you only want to apply validation if a certain
value has been set. The ``when_present`` rule allows you to do this::

  $rules = array(
    'name' => 'when_present|min_length[45]'
  );

A more complex case of this is when certain fields rely on the presence
of other fields. A common case for this are checkboxes that enable a
functionality. For example, a checkbox to subscribe to an email newsletter
may require an email address field that is otherwise optional. The
``when_present`` rule accepts a list of fields that must all be present
for the rules to be applied::

  $rules = array(
    'email' => 'when_present[newsletter]|required|email'
  );

Custom Rules
------------

ExpressionEngine allows you to create one-off validation rules on any
validator object. This is done by calling the ``defineRule`` method::

  $validator = ee('Validation');

  $validator->defineRule('impossible', function($value)
  {
    return ($value == 5 && $value == 6);
  });

  $validator->setRules(array(
    'age' => 'required|impossible'
  ));

  $result = $validator->validate();

Built in Rules
--------------

+------------------------+--------------------------------------------+--------------------------+
| Rule name              | Description                                | Example                  |
+========================+============================================+==========================+
| **alpha**              | Any alphabetical character                 | ``alpha``                |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **alpha_dash**         | Alpha plus dashes and underscores          | ``alpha_dash``           |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **alpha_numeric**      | Alpha plus numbers                         | ``alpha_numeric``        |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **email**              | Email addresses                            | ``email``                |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **enum**               | Any in a given list                        | ``enum[blue, red, pink]``|
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **exact_length**       | Input must have exactly ``n`` characters   | ``exact_length[4]``      |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **integer**            | Must be an integer                         | ``integer``              |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **ip_address**         | Ip address. Optional parameters:           | ``ip_address``           |
|                        | ``ipv4``, ``ipv6``, ``public``             |                          |
+------------------------+--------------------------------------------+--------------------------+
| **is_natural**         | Natural number                             | ``is_natural``           |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **is_natural_no_zero** | Natural number except zeros                | ``is_natural_no_zero``   |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **is_numeric**         | ``is_numeric()`` as defined by             | ``is_numeric``           |
|                        | `PHP <http://php.net/is_numeric>`_         |                          |
+------------------------+--------------------------------------------+--------------------------+
| **max_length**         | No more than ``n`` characters              | ``max_length[5]``        |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **min_length**         | No fewer than ``n`` characters             | ``min_length[8]``        |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **numeric**            | Any number, including decimals             | ``numeric``              |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **regex**              | Match a regular expression                 | ``regex[/^exp.*?ine$/]`` |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **required**           | Must not be blank.                         | ``required``             |
|                        | See :ref:`validation-service-required`     |                          |
+------------------------+--------------------------------------------+--------------------------+
| **valid_base64**       | Base64 character set only                  | ``valid_base64``         |
|                        |                                            |                          |
+------------------------+--------------------------------------------+--------------------------+
| **when_present**       | Only validate if field was sent.           | ``when_present``         |
|                        | See :ref:`validation-service-when-present` |                          |
+------------------------+--------------------------------------------+--------------------------+