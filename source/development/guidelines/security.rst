###################
Security Guidelines
###################

.. contents::
  :local:
  :depth: 2

.. highlight:: php

.. _dev_guidelines_xss_protection:

**************************
Cross Site Scripting (XSS)
**************************

Cross Site Scripting is a type of security vulnerability that allows
code injection by malicious users onto a page. You can find some
educational reading and examples on the following site:
`http://owasp.org
<https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet>`_.

Cross Site Scripting should be taken very seriously as you would never
want your add-on to be the source of an attack vector.

ee()->security->xss_clean()
===========================

``ee()->security->xss_clean()`` is the built in ExpressionEngine
XSS sanitization method, which is constantly tweaked for improved
security and performance. It accepts both a ``string`` and an ``array``
and will return sanitized text::

  $str = ee()->security->xss_clean($str);

Sanitized Variables on Input
============================

Keys are converted to UTF-8 and new lines in data are normalized
**automatically** by the Input Class for the following variables:

- ``$_GET``
- ``$_COOKIE``
- ``$_POST``

However, for performance reasons, data are not automatically run through
the xss filter. If you are storing or displaying data from these
variables, you should use the :doc:`Input class's get(), post(), or
get_post() methods </development/legacy/libraries/input>` and pass ``TRUE`` as
the second parameter so the value will be XSS cleaned.

If the user input is in the Control Panel, such as a module's back end,
it is at your discretion based on the needs of the module for whether or
not administrative input is sanitized. Always err on the side of
caution, and never assume that your end user will only allow access to
the back end of your module to trusted members.

INSERT and UPDATE Queries
=========================

As ExpressionEngine assumes that all information in the database is
sanitized against XSS, the responsibility for sanitization falls on
**input** to the database. Active Record methods will escape your data,
but will not XSS clean it.Therefore, all data should be run through
either ``ee()->security->xss_clean()`` or ``ee()->input->get_post('key',
TRUE)`` before being stored in the database.

Outputting Data to the Page
===========================

Use the :doc:`Typography class </development/legacy/libraries/typography>` whenever
outputting blocks of content from user submitted data. It is regularly
updated to improve security and performance, saving you both time and
energy.

- It protects against PHP and ExpressionEngine tags from being parsed
- BBCode is sanitized, even if Allow All HTML is enabled
- Using ``'safe'`` or ``'none'`` for HTML formatting further protects
  output by converting tags to entities

When In Doubt...
================

If there is any doubt on the safety of a variable that you are
outputting or inserting into the database, use XSS Clean:
``ee()->security->xss_clean($value)``.

.. _dev_guidelines_sql_injection_prevention:

************************
SQL Injection Prevention
************************

SQL Injection is a special type of attack in which data is used in a
query without being properly filtered, allowing a user to execute their
own queries on the database. Example::

  $evil = "brett'; DELETE FROM exp_members;";
  $query = ee()->db->query("SELECT * FROM exp_members WHERE username='{$evil}'");

For more information, you can read MySQL's guide to SQL Injection
security:
`http://dev.mysql.com/tech-resources/articles/guide-to-php-security-ch3.pdf <http://dev.mysql.com/tech-resources/articles/guide-to-php-security-ch3.pdf>`_

Escaping PHP Variables
======================

PHP variables should be escaped in queries anytime the variable is not
explicitly set to a hard-coded value *within* the method using the
query. This means that even variables passed as arguments to a method
must be escaped before being used in a query.

Manually written queries should use both XSS cleaned data and
:doc:`ee()->db->escape_str() </development/legacy/libraries/database>` on variables, even if
you think the value is trusted::

  $data = ee()->security->xss_clean($foo);

  OR

  $data = ee()->input->get_post('foo', TRUE);

  ...

  $query = ee()->db->query("SELECT field FROM table WHERE column = '".ee()->db->escape_str($data)."'");

:doc:`ee()->db->insert() </development/legacy/libraries/database>` is the preferred method
for ``INSERT`` queries, as values are escaped automatically in the
supplied data array::

  ee()->db->insert(
      'table',
      array(
          'name'          => 'Brett Bretterson',
          'email_address' => 'brett@example.com'
      )
  );

:doc:`ee()->db->update() </development/legacy/libraries/usage/database>` is the preferred method
for ``UPDATE`` queries, as values are escaped automatically in the
supplied data and ``where`` arrays::

  ee()->db->update(
      'table',
      array('email_address' => 'brett.bretterson@example.com'),
      array('name' => 'Brett Bretterson')
  );

.. note:: If you send the third argument (the ``WHERE`` clause) as an
  array as shown above, it will automatically be escaped. If you send
  a string, you must escape it yourself::

    ee()->db->update(
        'table',
        array('email_address' => 'brett.bretterson@example.com'),
        "name = '".ee()->db->escape_str($foo)."'"
    );

**************
Tag Parameters
**************

Never Assume Tag Parameters are "Good" Input
============================================

Do not make security exceptions for tag parameters. With PHP on Input,
nested tags, other plugins, or variables being possible sources for
parameter values, you cannot be sure that the data is safe.

Validate Values Before Using
============================

Always validate the values being supplied to a tag parameter before
using them in your code. ``switch()`` statements are good for numerous
possible values, as are arrays of possible values::

  switch ($foo = ee()->TMPL->fetch_param('foo'))
  {
      case 'bar':
      case 'baz':
      case 'bag':
          // value is already set, and okay, so simply break
          break;
      default:
          $foo = '';
          break;
  }

  $valid_foo = array('bar', 'baz', 'bag');
  $foo = (in_array($foo = ee()->TMPL->fetch_param('foo'), $valid_foo)) ? $foo : '';

If you cannot validate against specific values, at least validate the
type of data::

  if (! ctype_digit($foo = ee()->TMPL->fetch_param('foo')))
  {
      ee()->TMPL->log_item('Super Class Module error: Provided parameter "foo" contains non-digit characters');
      return FALSE;
  }

Or even::

  $foo = (ctype_digit($foo = ee()->TMPL->fetch_param('foo'))) ? FALSE : $foo;

.. note:: You no doubt notice that ``ctype_digit`` is being used
  here to validate the parameter as a numeric value. Why?
  `is_numeric()
  <http://us3.php.net/manual/en/function.is-numeric.php>`_ returns
  ``TRUE`` for some non-integer numbers, including notation, e.g.
  "-0123.45e6". `is_int()
  <http://us2.php.net/manual/en/function.is-int.php>`_ only returns
  ``TRUE`` on actual integer variable types, and tag parameters are
  always strings. Note that `ctype_digit()
  <http://us3.php.net/manual/en/function.ctype-digit.php>`_, will
  return ``TRUE`` on an empty string in pre-5.1.0 versions of PHP.

Default Values
==============

Always have default values if you plan to allow the code to execute
without parameters being supplied, or in the case of invalid parameter
values being provided. An empty string, ``NULL``, or boolean ``FALSE``
simply needs to be tested later to accommodate defaults in your code.
This also allows you to change the defaults all in one place in the
script. Here is one method, that takes advantage of PHP's `variable
variables
<http://us2.php.net/manual/en/language.variables.variable.php>`_.

::

  $defaults = array(
      'type'    => '',
      'show_foo'  => FALSE,
      'limit'   => 5
  );

  foreach ($defaults as $key => $val)
  {
      $$key = ($$key = ee()->TMPL->fetch_param($key)) ? $$key : $val;
  }

  // Results in three variables being set:
  // $type, $show_foo, and $limit, to their corresponding tag parameter value
  // or the default value if the parameter was not present
  // Each variable would still need to be validated as instructed above
  // before using them in the code.

.. _dev_guidelines_csrf_protection:

**************************
Cross Site Request Forgery
**************************

To help prevent spam and protect against Cross-site Request Forgery
(CSRF), ExpressionEngine adds a random string to a hidden field on all
forms. A copy of this string - also know as a CSRF token - is stored in
the database along with the session id for which that form was generated.
When the form is submitted this field is checked before any processing
is done. If no CSRF token is present or no match is found, then the
submission is rejected.

CSRF Tokens in Templates
========================

If you are manually creating templates that send POST requests you must
include the CSRF token as part of the form. This is easily done using
the ``csrf_token`` :doc:`variable <../../templates/globals/single_variables>`
as a value for a hidden field called ``csrf_token``::

  <input type="hidden" name="csrf_token" value="{csrf_token}">

Creating Template Forms from Add-ons
====================================

If your add-on is creating a form for the template, you should use
:ref:`ee()->functions->form_declaration()
<form_declaration>`. This automatically adds the CSRF token as a hidden
input field. It also allows any extensions the site may have installed
to modify the form before it is served, thus creating a more uniform
experience for the end user. ::

  ee()->functions->form_declaration(array(
    'action'  => ''
  ));

If your form submits to a different site you should ensure that you are
not leaking the user's CSRF token. You can either do this by manually
creating the form open tag or setting the 'secure' option for the
``form_declaration()`` method to ``FALSE``. ::

  ee()->functions->form_declaration(array(
    'secure'  => FALSE
  ));

Validating Form Hashes in Your Add-on
=====================================

ExpressionEngine will automatically check the CSRF token of all requests
before handing the request off to your add-on. This means that all forms
and requests must include the ``csrf_token`` field. Asynchronous
requests that include an `HTTP_REQUESTED_BY` header (this is set by most
popular libraries, such as jQuery) default to being exempt from these
checks as they provide a good layer of intrinsic security.

There are several ways in which you can control this validation behavior
of the CSRF tokens.

Disabling the check
~~~~~~~~~~~~~~~~~~~

For action requests you can disable all CSRF token checks. This is done
by setting the ``csrf_exempt`` column in the actions table to 1 for that
action.

You should only do this for actions that do not add, delete, or
otherwise modify data (e.g. search) or requests that are expect to be
initiated by another site (e.g. webhooks, payment gateways, etc).

Forcing AJAX Validation
~~~~~~~~~~~~~~~~~~~~~~~

While the same origin restriction for AJAX requests provides a good
level of security from cross-site request forgery, compromised browser
add-ons can send these requests.

If you have AJAX action requests that are performing sensitive
operations, then you should consider forcing AJAX CSRF validation for
your add-on. This happens on per-class basis using a marker interface.
You simply implement the `Strict_XID` interface on your action receiving
class::

  class My_module implements Strict_XID { ... }

You can still disable the check on a per-action basis.

Forms in the Control Panel
==========================

The Control Panel's Display class automatically adds hashes to any form
using the `form_open()` helper. CSRF tokens are a requirement in the
Control Panel and as such the check cannot be disabled. The Control
Panel includes a jQuery ajax prefilter that takes care of CSRF tokens
on all AJAX requests and also handles periodic token refreshing for
additional security.

You should use ``EE.CSRF_TOKEN`` if you require the token in your
JavaScript. Due to the ephemeral nature of CSRF tokens you should access
this property when you need it. It should not be copied or cached.

*************************
Handling Form Submissions
*************************

Form submissions are the most common form of user input you will handle
in your add-ons, so it is important to understand how to deal with them
securely.

Outputting Form Data to the Screen
==================================

**Never** output unfiltered incoming data directly to the screen.

Trust No One
============

Treat all input as potentially dangerous, even from within the
control panel.

Use a Logic Map for Processing
==============================

In your methods that will be handling form data, create a logic map that
you can use to ensure that you are handling all validation and security
checks prior to performing any actions. The following list contains
common things to use; your add-on may have fewer or additional
requirements.

- What is validated and in what order?

  - Does the user need to be a logged in member?
  - Does the user need to be in a specific member group for the
    action?
  - :doc:`Deny Duplicate Data </security/spam_protection>` Check?

- What security checks are performed?

  - Secure form hashes
  - CAPTCHA
  - Blacklist Banning / Whitelist Overrides

    - ``ee()->blacklist->blacklisted == 'y'`` (blacklisted)
    - ``ee()->blacklist->whitelisted == 'y'`` (whitelist
      override)

  - Preferences and settings checked against

- Data Filtering and Conversion

  - XSS clean
  - Number formatting: ``number_format()``, ``ceil()``, etc.
  - Character set conversion
  - XML convert
  - Remove PHP or ExpressionEngine tags?

- Insert Data or Update

  - ``ee()->security->xss_clean()`` on all string data even if
    there is no intent to output (don't forget about the Query
    module!)
  - Make sure all data is properly escaped

After processing, make sure submitted data that might be sent to the
screen for a success or error message is the filtered and validated
version

*****************
Filename Security
*****************

include() and require()
=======================

Many servers have the ability to include files from offsite or anywhere
in the local server, so when using ``include()`` or ``require()`` with
user submitted data you need to be extremely careful. The best practice
is to not design your add-on in such a way that would make this
necessary in the first place, but if you do, either:

- Validate the filename based on possible options, OR
- Use ``ee()->security->sanitize_filename()`` to remove naughty
  characters

Saving Images or Files to the Server
====================================

When saving images or files to the server, make sure and validate the
file type (MIME) and also clean the file name to remove possible naughty
characters.

- Sanitize file name: ``ee()->security->sanitize_filename();``
- Browser provides the MIME type, available in:
  ``$_FILES['userfile']['type']``
- Use the Upload class (``ee()->load->library('upload',
  $config);``) as it contains methods for validation and sanitizing

.. todo:: Move most of the preferences and settings to an add-on
  guidelines page

************************
Preferences and Settings
************************

Storage of Settings
===================

Security and required preference settings should be stored in the
database or ``config.php`` file.

Use of Settings in Forms
========================

Never send values for preferences or settings in hidden form fields.
HTML source is open and readable, so a malicious user could simply copy
the HTML or use a browser plugin to alter the form data to something you
do not expect or desire. If *absolutely* required, encode them:

- JavaScript is good against bots but not against serious hackers.
- Base 64 encoding is easy to break and therefore NOT recommended.
- If there are a limited number of *possible* values, you could use
  ``md5()`` or ``sha1()`` to encode the values and check against encoded
  *possible* values. This is not bulletproof of course, as the
  hacker needs only to know what the possible values are to be able
  to utilize them.
- PHP has the `Mcrypt
  library <http://us2.php.net/manual/en/ref.mcrypt.php>`_ and other
  PHP libraries which have encryption and decryption with a salt.
  CodeIgniter has an :ellislab:`Encryption class
  </codeigniter/user-guide/libraries/encryption.html>`, incidentally.

Yes / No Preferences
====================

If your preference setting is a simple Yes / No, use ``'y'`` for Yes and
``'n'`` for No in both the code and the database, to keep things simple
and consistent.

Follow the Art of KISS
======================

"Keep It Simple, Stupid". Before adding a preference, ask yourself: is a
preference for 'foo' *really* needed? Eventually with too many
preferences, there will be interference and priority issues, and over-
complication.


*************************
General Security Practice
*************************

- Super Admins' absolute power is for *access*, not security. Do not
  make security exceptions for Super Admins. "Doom, doom, doom," as it
  were.

  - Imagine a Super Admin not logging out from a public terminal or
    not using an SSL connection on an open wireless network.
  - Imagine a Super Admin using Cookies Only sessions in the control
    panel and then going to a third-party page, which automatically
    submitted a form with data to the entry submission routine in the
    control panel. Theoretically, the Super Admin would be submitting
    potentially malicious code into an entry automatically and without
    any knowledge.

- Use built in ExpressionEngine classes and methods if they exist for
  tasks.
- Use good beta testers and run a tight ship to get the best results.
- Keep debugging on for all users on your private development / testing
  site. Refer to the :doc:`instructions for PHP errors
  </development/guidelines/general>` in the General Syntax and Style
  section.
- Use an approach of Least Privilege. Start by allowing access to NO
  one, and explicitly grant access to those that qualify.
