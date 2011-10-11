Security Guidelines
===================

.. contents::
	:local:
	:depth: 2

Cross Site Scripting (XSS)
~~~~~~~~~~~~~~~~~~~~~~~~~~

Cross Site Scripting is a type of security vulnerability that allows
code injection by malicious users onto a page. You can find some
educational reading and examples on the following site:
`http://ha.ckers.org/xss.html <http://ha.ckers.org/xss.html>`_

Cross Site Scripting should be taken very seriously as you would never
want your add-on to be the source of an attack vector.

$this->EE->security->xss\_clean()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

$this->EE->security->xss\_clean() is the built in ExpressionEngine
XSS sanitization method, which is constantly tweaked for improved
security and performance. It accepts both a *string* and an *array*
and will return sanitized text.

::

	$str = $this->EE->security->xss_clean($str);

Sanitized Variables on Input
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Keys are cleaned and new lines in data are normalized
**automatically** by the Input Class for the following:

-  $\_GET
-  $\_COOKIE
-  $\_POST

For performance reasons, data are not automatically run through the
xss filter. This means that any front-side user input from
superglobals should be sanitized by using
$this->EE->security->xss\_clean() before inserting into the database
our outputting to the screen. If the user input is in the Control
Panel, such as a module's back end, it is at your discretion based on
the needs of the module for whether or not administrative input is
sanitized. Always err on the side of caution, and never assume that
your end user will only allow access to the back end of your module
to trusted members.

INSERT and UPDATE Queries
^^^^^^^^^^^^^^^^^^^^^^^^^

As ExpressionEngine assumes that all information in the database is
sanitized against XSS, the responsibility for sanitization falls on
**input** to the database. Therefore, all INSERT and UPDATE queries
should use $this->EE->security->xss\_clean() for user input data.

Outputting Data to the Page
^^^^^^^^^^^^^^^^^^^^^^^^^^^

Use the `Typography class <../usage/typography.html>`_ when
outputting to a page. Doing so provides a number of benefits and
security precautions:

-  Allows Safe HTML or no HTML at all if desired
-  Validates all BBCode, such as [url] and [img] to keep them safe
-  Encodes ExpressionEngine tags and variables by default

When In Doubt…
^^^^^^^^^^^^^^

If there is any doubt on the safety of a variable that you are
outputting or inserting into the database, use XML Encode
($this->EE->xml\_convert() or
`htmlentities() <http://us.php.net/manual/en/function.htmlentities.php>`_
and
`strip\_tags() <http://us.php.net/manual/en/function.strip-tags.php>`_.

SQL Injection Prevention
~~~~~~~~~~~~~~~~~~~~~~~~

SQL Injection is a special type of attack in which data is used in a
query without being properly filtered, allowing a user to execute their
own queries on the database. Example::

	$evil = "brett'; DELETE FROM exp_members;";
	$query = $this->EE->db->query("SELECT * FROM exp_members WHERE username='{$evil}'");

For more information, you can read MySQL's guide to SQL Injection
security:
`http://dev.mysql.com/tech-resources/articles/guide-to-php-security-ch3.pdf <http://dev.mysql.com/tech-resources/articles/guide-to-php-security-ch3.pdf>`_

Escaping PHP Variables
^^^^^^^^^^^^^^^^^^^^^^

PHP variables should be escaped in queries anytime the variable is
not explicitly set to a hard-coded value *within* the method using
the query. This means that even variables passed as arguments to a
method must be escaped before being used in a query.

Manually written queries should use
**`$this->EE->db->escape\_str() <../usage/database.html#additional>`_**
on variables, even if you think the value is trusted.

::

	$query = $this->EE->db->query("SELECT field FROM table WHERE column = '".$this->EE->db->escape_str($foo)."'");

**`$this->EE->db->insert\_string() <../usage/database.html#inserting>`_**
is the preferred method for INSERT queries, as values are escaped
automatically in the supplied data array.

::

	$data = array('name' => 'Brett Bretterson', 'email_address' => 'brett@example.com');
	$this->EE->db->query($this->EE->db->insert_string('table', $data));

**`$this->EE->db->update\_string() <../usage/database.html#updating>`_**
is the preferred method for UPDATE queries, as values are escaped
automatically in the supplied data and "where" arrays.

::

	$data = array('email_address' => 'brett.bretterson@example.com');
	$where = array('name' => 'Brett Bretterson');
	$this->EE->db->query($this->EE->db->update_string('table', $data, $where));

**Note:** If you send the third argument (the WHERE clause) as an
array as shown above, it will automatically be escaped. If you send a
string, you must escape it yourself.

::

	$data = array('email_address' => 'brett.bretterson@example.com');
	$this->EE->db->query($this->EE->db->update_string('table', $data, "name = '".$this->EE->db->escape_str($foo)."'"));

Preferences and Settings
~~~~~~~~~~~~~~~~~~~~~~~~

Storage of Settings
^^^^^^^^^^^^^^^^^^^

Security and required preference settings should be stored in the
database or config.php file.

Use of Settings in Forms
^^^^^^^^^^^^^^^^^^^^^^^^

Never send values for preferences or settings in hidden form fields.
HTML source is open and readable, so a malicious user could simply
copy the HTML or use a browser plugin to alter the form data to
something you do not expect or desire. If *absolutely* required,
encode them:

- JavaScript is good against bots but not against serious hackers.
- Base 64 encoding is easy to break and therefore NOT recommended.
- If there are a limited number of *possible* values, you could use
  md5() or sha1() to encode the values and check against encoded
  *possible* values. This is not bulletproof of course, as the
  hacker needs only to know what the possible values are to be able
  to utilize them.
- PHP has the `Mcrypt
  library <http://us2.php.net/manual/en/ref.mcrypt.php>`_ and other
  PHP libraries which have encryption and decryption with a salt.
  CodeIgniter has an `Encryption
  class <http://codeigniter.com/user_guide/libraries/encryption.html>`_,
  incidentally.

Yes / No Preferences
^^^^^^^^^^^^^^^^^^^^

If your preference setting is a simple Yes / No, use **'y'** for Yes
and **'n'** for No in both the code and the database, to keep things
simple and consistent.

Follow the Art of KISS
^^^^^^^^^^^^^^^^^^^^^^

"Keep It Simple, Stupid". Before adding a preference, ask yourself:
is a preference for 'foo' *really* needed? Eventually with too many
preferences, there will be interference and priority issues, and
overcomplication.

Tag Parameters
~~~~~~~~~~~~~~

Never Assume Tag Parameters are "Good" Input
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Do not make security exceptions for tag parameters. With PHP on
Input, nested tags, other plugins, or variables being possible
sources for parameter values, you cannot be sure that the data is
safe.

Validate Values Before Using
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Always validate the values being supplied to a tag parameter before
using them in your code. **switch()** statements are good for
numerous possible values, as are arrays of possible values::

	switch ($foo = $this->EE->TMPL->fetch_param('foo'))
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
	$foo = (in_array($foo = $this->EE->TMPL->fetch_param('foo'), $valid_foo)) ? $foo : '';

If you cannot validate against specific values, at least validate the
type of data.

::

	if (! ctype_digit($foo = $this->EE->TMPL->fetch_param('foo')))
	{
		$this->EE->TMPL->log_item('Super Class Module error: Provided parameter "foo" contains non-digit characters');
		return FALSE;
	}

   Or even::

	$foo = (ctype_digit($foo = $this->EE->TMPL->fetch_param('foo'))) ? FALSE : $foo;

**Side Note:** You no doubt notice that ctype\_digit is being used
here to validate the parameter as a numeric value. Why?
`is\_numeric() <http://us3.php.net/manual/en/function.is-numeric.php>`_
returns TRUE for some non-integer numbers, including notation, e.g.
"-0123.45e6".
`is\_int() <http://us2.php.net/manual/en/function.is-int.php>`_ only
returns TRUE on actual integer variable types, and tag parameters are
always strings. Note that
`ctype\_digit() <http://us3.php.net/manual/en/function.ctype-digit.php>`_,
will return TRUE on an empty string in pre-5.1.0 versions of PHP.

Default Values
^^^^^^^^^^^^^^

Always have default values if you plan to allow the code to execute
without parameters being supplied, or in the case of invalid
parameter values being provided. An empty string, NULL, or boolean
FALSE simply needs to be tested later to accommodate defaults in your
code. This also allows you to change the defaults all in one place in
the script. Here is one method, that takes advantage of PHP's
`variable
variables <http://us2.php.net/manual/en/language.variables.variable.php>`_.

::

	$defaults = array(
				'type'		=> '',
				'show_foo'	=> FALSE,
				'limit'		=> 5
			);
	
	foreach ($defaults as $key => $val)
	{
		$$key = ($$key = $this->EE->TMPL->fetch_param($key)) ? $$key : $val;
	}
	
	// Results in three variables being set:
	// $type, $show_foo, and $limit, to their corresponding tag parameter value
	// or the default value if the parameter was not present
	// Each variable would still need to be validated as instructed above
	// before using them in the code.

Secure Forms
~~~~~~~~~~~~

To help prevent spam and protect against Cross-site Request Forgery
(CSRF), ExpressionEngine has a "Secure Form" setting that uses a hash
stored in the database tied to the IP address of the machine that the
form was generated for. Here is how to make use of it.

$this->EE->functions->form\_declaration()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Create all forms on the user side with
`$this->EE->functions->form\_declaration() <../reference/functions.html>`_,
so the XID (secure hash ID) is added automatically as a hidden input
field. This also allows any extensions the site may have installed
that modifies forms to have effect on your forms.

Handling Form Hashes in Your Add-on
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Do a check and deletion for the secure hash after all error checking
has been completed, but prior to any data insertion into the
database. You will typically use the Security Library's
secure\_forms\_check() method, which returns a boolean to indicate
the validity of the security hash and deletes existing hashes as
needed.

::

	// error checking and data validation before this!
	
	// Secure Forms check
			
	if ($this->EE->security->secure_forms_check($this->EE->input->post('XID')) == FALSE)
	{
		// no data insertion if a hash isn't found or is too old
		$this->functions->redirect(stripslashes($this->EE->input->post('RET')));		
	}
	
	// All Clear- insert the data!
	$this->EE->db->query($this->EE->db->insert_string('table', $data));

In some cases, you may choose to run a check for a valid hash
($this->EE->security->check\_xid()) and the deletion of the existing
hash ($this->EE->security->delete\_xid()) separately.

Forms in the Control Panel
^^^^^^^^^^^^^^^^^^^^^^^^^^

The Control Panel's Display class automatically adds hashes to any
form tag automatically for you. Likewise, the system will check for
hashes automatically, so forms in the control panel require no
additional work for you to use securely.

Handling Form Submissions
~~~~~~~~~~~~~~~~~~~~~~~~~

Form submissions are the most common form of user input you will handle
in your add-ons, so it is important to understand how to deal with them
securely.

Outputting Form Data to the Screen
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Never** output unfiltered incoming data directly to the screen.

Trust No One
^^^^^^^^^^^^

Treat all input as potentially dangerous, even from within the
control panel.

Use a Logic Map for Processing
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

In your methods that will be handling form data, create a logic map
that you can use to ensure that you are handling all validation and
security checks prior to performing any actions. The following list
contains common things to use; your add-on may have fewer or
additional requirements.

-  What is validated and in what order?

  -  Does the user need to be a logged in member?
  -  Does the user need to be in a specific member group for the
     action?
  -  `Deny Duplicate Data <../../general/spam_protection.html>`_
     Check?

-  What security checks are performed?

  -  Secure form hashes
  -  CAPTCHA
  -  Blacklist Banning / Whitelist Overrides

     -  $this->EE->blacklist->blacklisted == 'y' (blacklisted)
     -  $this->EE->blacklist->whitelisted == 'y' (whitelist
        override)

  -  Preferences and settings checked against

-  Data Filtering and Conversion

  -  XSS clean
  -  Number formatting: number\_format(), ceil(), etc.
  -  Character set conversion
  -  XML convert
  -  Remove PHP or ExpressionEngine tags?

-  Insert Data or Update

  -  $this->EE->security->xss\_clean() on all string data even if
     there is no intent to output (don't forget about the Query
     module!)
  -  Make sure all data is properly escaped

After processing, make sure submitted data that might be sent to the
screen for a success or error message is the filtered and validated
version

Filename Security
~~~~~~~~~~~~~~~~~

include() and require()
^^^^^^^^^^^^^^^^^^^^^^^

Many servers have the ability to include files from offsite or
anywhere in the local server, so when using include() or require()
with user submitted data you need to be extremely careful. The best
practice is to not design your add-on in such a way that would make
this necessary in the first place, but if you do, either:

- Validate the filename based on possible options, OR
- Use $this->EE->security->sanitize\_filename() to remove naughty
  characters

Saving Images or Files to the Server
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When saving images or files to the server, make sure and validate the
file type (MIME) and also clean the file name to remove possible
naughty characters.

- Sanitize file name: **$this->EE->security->sanitize\_filename();**
- Browser provides the MIME type, available in:
  **$\_FILES['userfile']['type']**
- Use the Upload class ($this->EE->load->library('upload',
  $config);) whenever possible, as it contains methods for
  validation and sanitizing

Typography Class
~~~~~~~~~~~~~~~~

Use the `Typography class <../usage/typography.html>`_ whenever
outputting blocks of content from user submitted data. It is regularly
updated to improve security and performance, saving you both time and
energy.

-  It protects against PHP and ExpressionEngine tags from being parsed
-  BBCode is sanitized, even if Allow All HTML is enabled
-  Using 'safe' or 'none' for HTML formatting further protects output by
   converting tags to entities

General Security Practice
~~~~~~~~~~~~~~~~~~~~~~~~~

-  Super Admins' absolute power is for *access*, not security. Do not
   make security exceptions for Super Admins. "Doom, doom, doom," as it
   were.

   -  Imagine a Super Admin not logging out from a public terminal or
      not using an SSL connection on an open wireless network.
   -  Imagine a Super Admin using Cookies Only sessions in the control
      panel and then going to a third-party page, which automatically
      submitted a form with data to the entry submission routine in the
      control panel. Theoretically, the Super Admin would be submitting
      potentially malicious code into an entry automatically and without
      any knowledge.

-  Use built in ExpressionEngine classes and methods if they exist for
   tasks.
-  Use good beta testers and run a tight ship to get the best results.
-  Keep debugging on for all users on your private development / testing
   site. Refer to the `instructions for PHP
   errors <general.html#php_errors>`_ in the General Syntax and Style
   section.
-  Use an approach of Least Privilege. Start by allowing access to NO
   one, and explicitly grant access to those that qualify.

