Functions Class
===============

.. class:: Functions

  The Functions class contains commonly required functions used throughout
  ExpressionEngine's scripts.

.. contents::
  :local:

.. highlight:: php

fetch_site_index
----------------

.. method:: fetch_site_index([$add_slash = FALSE[, $sess_id = TRUE]])

  Returns the url of the main site index.

  :param boolean $add_slash: Set to ``TRUE`` to add a slash to the end
    of the return value
  :param boolean $sess_id: Set to ``FALSE`` to exclude the session id
  :returns: Site index URL
  :rtype: String

create_url
----------

.. method:: create_url($segment[, $sess_id = TRUE])

  The segment passed to this function is parsed and added to the full
  site URL to create a full URL/URI.

  ::

    $memberlist_url = ee()->functions->create_url('member/memberlist');
    // returns "http://example.com/index.php/member/memberlist/"

  :param string $segment: The desired URL's URI
  :param boolean $sess_id: If set to ``FALSE``, session_id will not be
    included
  :returns: Full site URL pointing to ``$segment``
  :rtype: String

fetch_current_uri
-----------------

.. method:: fetch_current_uri()

  Returns uri for current page.

  :returns: Current URI
  :rtype: String


remove_double_slashes
---------------------

.. method:: remove_double_slashes($str)

  .. deprecated:: 2.6
    Use String helper's ``reduce_double_slashes()`` instead.

  Removes all double slashes (``//``) from ``$str`` and returns the
  string. Useful for cleaning up URLs. The double slashes in ``http://``
  are preserved.

  :param string $str: String to remove double slashes from
  :returns: Cleaned up ``$str``
  :rtype: String

extract_path
------------

.. method:: extract_path($str)

  Extract the template group/template name from ``$str``, like
  ``{some_var path='channel/index'}``, and returns just the path.

  ::

    // Parse permalink path
    $key = '{permalink path='channel/details'}'
    if (ee()->functions->extract_path($key) != '' && ee()->functions->extract_path($key) != 'SITE_INDEX')
    {
        $path = ee()->functions->extract_path($key).'/'.$row['entry_id'];
    }
    // function returns 'channel/details'

  :param string $str: String to extract the path from
  :returns: Template group/name pair
  :rtype: String

var_swap
--------

.. method:: var_swap($str, $data)

  Replace array of variables in string::

    $str = "Rick and Paul ate {meal} while sitting around the {item}";
    $swap = array('meal' => "Skittles", 'item' => "computer");
    $msg = ee()->functions->var_swap($str, $swap);
    // returns "Rick and Paul ate Skittles while sitting around the computer";

  :param string $str: String to parse
  :param array $data: Associative array of keys to replace with values
  :returns: ``$str`` parsed with ``$data``
  :rtype: String

redirect
--------

.. method:: redirect($location[, $method = FALSE[, $status_code = NULL]])

  Redirect to location.

  :param string $location: URL to redirect to
  :param string $method: Optionally choose a method to redirect with
    (can use ``refresh``, otherwise defaults to using ``Location``
    header)
  :param integer $status_code: Status code in the 300 block
  :rtype: Void

random
------

.. method:: random([$type = 'encrypt'[, $len = 8]])

  Random number/password generator.

  :param string $type: There are four possible values:

    - ``basic`` - just a random number
    - ``alpha`` - string with length of length using only letters (upper
      and lower case) of the alphabet
    - ``numeric`` - string with length of length using only numbers
    - ``nozero`` - string with length of length using all numbers except
      zero
    - ``md5`` - string of a random number that has been ``md5``'ed
    - ``encrypt`` - string of a random number that has been hash'ed

  :param integer $len: Length of the string
  :returns: Random string of characters
  :rtype: String


.. _form_declaration:

form_declaration
----------------

.. method:: form_declaration($data)

  Creates opening form tag and hidden variables.

  Any form will accept the ``form_class`` and ``form_id`` parameters.
  Access the values with TMPL class properties of ``form_id`` and
  ``form_class``.

  ::

    $form_details = array(
        'action'          => '',
        'name'            => 'upload',
        'id'              => ee()->TMPL->form_id,
        'class'           => ee()->TMPL->form_class,
        'hidden_fields'   => array('new' => 'y'),
        'secure'          => TRUE,
        'onsubmit'        => "validate_form(); return false;"
    );

    $r = ee()->functions->form_declaration($form_details);

  :param array $data: Associative array of data (see above for example)
  :returns: Opening form tag and hidden fields
  :rtype: String

form_backtrack
--------------

.. method:: form_backtrack([$offset = ''])

  Returns a URL that allows us to return a user to a previously visited
  page after submitting a form. ExpressionEngine keeps track of the last
  five pages viewed by a visitor, and the page returned is determined by
  the value of offset.

  ::

    $data = array(
        'title'   => 'Information Accepted',
        'heading' => 'Thank you',
        'content' => 'Thank you for the locale information',
        'link'    => array(ee()->functions->form_backtrack('-2'), 'Return to entry')
    );

    ee()->output->show_message($data);

  :param integer $offset: How many pages you want to backtrack: ``0`` is
    the current page, ``-1`` would be the form page, and ``-2`` would be
    the page prior to the form page.
  :returns: Previous URL
  :rtype: String

evaluate
--------

.. method:: evaluate($str)

  Evaluates a string as PHP::

    $str = "echo 3*4;";

    ob_start();

    echo ee()->functions->evaluate($str);
    $value = ob_get_contents();

    ob_end_clean();

    // $value is now equal to 12, since that is what would be outputted by the PHP.

  :param string $str: String to evaluate as PHP
  :returns: Resulting value
  :rtype: String



char_limiter
------------

.. method:: char_limiter($str[, $num = 500])

  Returns section of a string limited to a certain amount of characters
  but rounds the string up to the nearest word.

  :param string $str: String to limit
  :param interger $num: Characters to limit to
  :returns: Limited string
  :rtype: String

word_limiter
------------

.. method:: word_limiter($str[, $num = 100])

  Returns section of a string based on number of words.

  :param string $str: String to limit
  :param interger $num: Words to limit to
  :returns: Limited string
  :rtype: String

fetch_email_template
--------------------

.. method:: fetch_email_template($name)

  Returns the contents of the email template requested based on the
  language settings of the user.

  :param string $name: Name of the email template
  :returns: Email template parsed with the user's language
  :rtype: String

language_pack_names
-------------------

.. method:: language_pack_names($default)

  Returns form select menu of available language packs

  :param string $default: Currently selected or default language
  :returns: Div tag with a select tag that contains the listing of
    languages
  :rtype: String

clear_caching
-------------

.. method:: clear_caching($which[, $sub_dir = ''])

  Clears one or all of the main cache folders

  :param string $which: ``'page'``, ``'tag'``, ``'db'``, ``'sql'``,
    ``'relationships'``, ``'all'``
  :param string $sub_dir: Define a specific folder or file in the cache
    directory
  :rtype: Void

delete_directory
----------------

.. method:: delete_directory($path[, $del_root = FALSE])

  Empties a directory of any files.

  :param string $path: Absolute path of the directory you wish to empty;
    remember to use the path constants to make this easier
  :param boolean $del_root: Set to ``TRUE`` to delete the directory as
    well
  :rtype: Void

fetch_assigned_channels
-----------------------

.. method:: fetch_assigned_channels()

  Returns array of channels accessible by current user.

  :returns: Array of channels accessible by current user
  :rtype: Array


.. _fetch_action_id:

fetch_action_id
---------------

.. method:: fetch_action_id($class, $method)

  Returns a tag in the format ``{AID:class:method}`` for use in the
  frontend. (See also :doc:`EE->cp->fetch_action_id
  </development/usage/cp>`).

  ::

    $action_id = ee()->functions->fetch_action_id('Comment', 'insert_new_comment');

  :param string $class: Class that contains the ``$method``
  :param string $method: Name of the method that has an action ID
  :returns: Valid action ID tag
  :rtype: String

create_captcha
--------------

.. method:: create_captcha($old_world = '')

  Using a random word chosen from the array stored in the
  ``config/captcha.php`` file, this function will create a captcha image
  and then store that word and the IP address of the current user in the
  database. You can then put the returned ``<img>`` tag in your form
  along with a text input field for the user submitted word. When the
  form is submitted you can check the submitted word against the
  database for the user's IP. If it matches, you continue processing the
  form data. If it does not, then the form should fail. This is used to
  prevent automated spamming tools from submitting spam.

  :param string $old_word: Can specify the word to appear as a captcha
  :returns: ``<img>`` tag
  :rtype: String

sql_andor_string
----------------

.. method:: sql_andor_string($str, $field[, $prefix = ''[, $null = FALSE]])

  Certain tag parameters have the option to be in the form of
  ``'value1|value2'`` or ``'not value1|value2'``, which allows the
  acceptance of multiple values. This function takes that parameter as
  ``$str`` and the ``$field`` to check, along with the (optional)
  ``$prefix`` of the table containing the field, and returns the query
  string required::

    $str  = 'channel|news|sports';
    $sql  = "SELECT * FROM exp_channels WHERE site_id = 1 ";
    $sql .= ee()->functions->sql_andor_string($str, 'channel_name');
    // $sql equals:
    // SELECT * FROM exp_channels WHERE site_id = 1
    // AND channel_name = 'channel' OR channel_name = 'news' OR channel_name = 'sports'

  :param string $str: Pipe delimited string from the tag parameter
  :param string $field: Name of the database field
  :param string $prefix: Field prefix, used when working with multiple
    tables to define the table (e.g. ``database_table_name.field_name``)
  :param boolean $null: Allow for null values in the ``$field``
  :returns: Partial query string containing some of the ``WHERE`` clause
  :rtype: String

assign_variables
----------------

.. method:: assign_variables([$str = ''[, $slash = '/']])

  This function extracts the variables contained within the current tag
  being parsed and assigns them to one of two arrays which are returned
  to you: ``var_single`` or ``var_pair``.

  :param string $str: String to parse
  :param string $slash: What kind of backslash is in the string (``/``
    or ``&#47;``)
  :returns: Associative array containing both ``var_single`` and
    ``var_pair``
  :rtype: Array

fetch_date_variables
--------------------

.. method:: fetch_date_variables($datestr)

  Fetch the date format (e.g. ``%Y %m %d``) from a date variable (e.g.
  ``{date format="%Y %m %d"}``).

  :param string $datestr: The string to look for a single date format in
  :returns: Date format string
  :rtype: String

assign_parameters
-----------------

.. method:: assign_parameters($str)

  Fetch parameters for tag

  :param string $str: String containing tag parameters directly from the
    :attr:`TMPL::$tagdata`
  :returns: Associative array containing the tag parameters
  :rtype: Array

prep_conditionals
-----------------

.. method:: prep_conditionals($str, $vars[, $safety = 'n'[, $prefix = '']])

  Parses conditionals and preps conditional for evaluation

  :param string $str: Template :attr:`TMPL::$tagdata` to parse
  :param array $vars: Associative array of conditionals to parse
  :param string $safety: Set to ``'y'`` to ensure that some safety
    checks are performed to make sure conditionals are well formed
  :param string $prefix: Used when your variables have a prefix, parses
    both prefixed and non-prefixed variables
  :returns: ``$str`` with the conditionals from ``$var`` parsed
  :rtype: String
