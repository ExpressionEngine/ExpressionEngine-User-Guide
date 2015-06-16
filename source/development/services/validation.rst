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
    'username' => 'required|minLength[5]',
    'password' => 'required|minLength[5]'
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

  "required|alphaNumeric"

Some rules may also take parameters. These are added in braces after the
rule name::

  "required|enum[blue,red,yellow]" // only allow these three color names


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
value has been set. The ``whenPresent`` rule allows you to do this::

  $rules = array(
    'name' => 'whenPresent|minLength[45]'
  );

A more complex case of this is when certain fields rely on the presence
of other fields. A common case for this are checkboxes that enable a
functionality. For example, a checkbox to subscribe to an email newsletter
may require an email address field that is otherwise optional. The
``whenPresent`` rule accepts a list of fields that must all be present
for the rules to be applied::

  $rules = array(
    'email' => 'whenPresent[newsletter]|required|email'
  );

Custom Rules
------------

ExpressionEngine allows you to create one-off validation rules on any
validator object. This is done by calling the ``defineRule`` method::

  $validator = ee('Validation');

  $validator->defineRule('impossible', function($key, $value, $parameters)
  {
    return ($value == 5 && $value == 6);
  });

  $validator->setRules(array(
    'age' => 'required|impossible'
  ));

  $result = $validator->validate($data);


Custom Conditional Rules
------------------------

Custom conditional rules can be created by calling ``skip()`` on the
``ValidationRule`` object. This can be useful, for example, if you
need to conditionally validate a field based on the value of another
field::

  use EllisLab\ExpressionEngine\Service\Validation\Validator;

  $data = $_POST;

  $validator->defineRule('whenNotifyTypeIs', function($key, $value, $parameters, $rule) use ($data)
  {
    return ($data['notify-type'] == $parameters[0]) ? TRUE : $rule->skip();
  });

  $validator->setRules(array(
    'notify-type' => 'required|enum[email,sms]',
    'email' => 'whenNotifyTypeIs[email]|required|email',
    'sms' => 'whenNotifyTypeIs[sms]|required|regex[/^\d{3}-\d{3}-\d{4}$/]',
  ));


Built-in Rules
--------------

+---------------------+--------------------------------------------+---------------------------+
|      Rule name      |                Description                 |          Example          |
+=====================+============================================+===========================+
| **alpha**           | Any alphabetical character                 | ``alpha``                 |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **alphaDash**       | Alpha plus dashes and underscores          | ``alphaDash``             |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **alphaNumeric**    | Alpha plus numbers                         | ``alphaNumeric``          |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **boolean**         | Must be of boolean type                    | ``boolean``               |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **email**           | Email addresses                            | ``email``                 |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **enum**            | Any in a given list                        | ``enum[blue, red, pink]`` |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **exactLength**     | Input must have exactly ``n`` characters   | ``exactLength[4]``        |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **fileExists**      | File or path must exist                    | ``fileExists``            |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **hexColor**        | A three or six-character hex code          | ``hexColor``              |
|                     | without a pound sign                       |                           |
+---------------------+--------------------------------------------+---------------------------+
| **integer**         | Must be an integer                         | ``integer``               |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **ipAddress**       | Ip address. Optional parameters:           | ``ipAddress``             |
|                     | ``ipv4``, ``ipv6``, ``public``             |                           |
+---------------------+--------------------------------------------+---------------------------+
| **isNatural**       | Natural number                             | ``isNatural``             |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **isNaturalNoZero** | Natural number except zeros                | ``isNaturalNoZero``       |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **maxLength**       | No more than ``n`` characters              | ``maxLength[5]``          |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **minLength**       | No fewer than ``n`` characters             | ``minLength[8]``          |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **noHtml**          | Must not contain HTML                      | ``noHtml``                |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **numeric**         | Any number, including decimals             | ``numeric``               |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **regex**           | Match a regular expression                 | ``regex[/^exp.*?ine$/]``  |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **required**        | Must not be blank.                         | ``required``              |
|                     | See :ref:`validation-service-required`     |                           |
+---------------------+--------------------------------------------+---------------------------+
| **url**             | Must be a valid URL                        | ``url``                   |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **validBase64**     | Base64 character set only                  | ``validBase64``           |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **whenPresent**     | Only validate if field was sent.           | ``whenPresent``           |
|                     | See :ref:`validation-service-when-present` |                           |
+---------------------+--------------------------------------------+---------------------------+
| **writeable**       | File or path must be writeable             | ``writeable``             |
|                     |                                            |                           |
+---------------------+--------------------------------------------+---------------------------+
| **xss**             | Must not contain content that looks like   | ``xss``                   |
|                     | XSS (Cross Site Scripting)                 |                           |
+---------------------+--------------------------------------------+---------------------------+
