###################################
ExpressionEngine 2.0 Syntax Changes
###################################

.. highlight:: php

In the move to 2.0, a number of classes have been renamed, deprecated,
and/or split up among helper functions. Some methods have also been
moved to new classes. EE 2.0 also replaces the use of global objects
with the use of the super object, necessitating a different approach to
initializing required classes. This section is an overview of syntax
changes that will be required for third party integration with the new
ExpressionEngine.

General Syntax Changes
======================

Change class names for extensions
---------------------------------

The PHP class in extensions must now include the suffix ``_ext``. So if
your Extension is named "Krakow", then the extension file will be
``exp.krakow.php`` and the PHP class will be named ``Krakow_ext``.

Change class names for module control panels
--------------------------------------------

The PHP class in extensions must now include the suffix ``_mcp`` instead
of ``_CP``. So if your Module is named "Krakow", then the module control
panel file will be ``mcp.krakow.php`` and the PHP class will be named
``Krakow_mcp``

Switch from globals to the super object
---------------------------------------

Methods are no longer called from global object references. Instead,
the super object is used.

#. Remove all globals from your methods.
#. Switch your syntax to use the super object returned by ``ee()``.

::

  // 1.x syntax
  $FNS->redirect();

  // 2.x syntax
  ee()->functions->redirect();

Switch 'weblog' terminology to 'channel' terminology
----------------------------------------------------

Change the word "weblog" in parameters and database calls to
"channel". For consistency, we recommend that if your add-on has its
own tables with columns containing the word "weblog" that you perform
an ALTER in your update script to change it to "channel" as well.

Protect your scripts from direct access
---------------------------------------

Start every php file with a security check::

  <?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

Paths and Constants
-------------------

The APPPATH constant is the path to ``system/expressionengine/`` and
should be used in place of any current constants such as ``PATH_CACHE``,
``PATH_EXT``, etc.

::

  OLD syntax: $this->cache_path = PATH_CACHE.$this->cache_name.'/'.md5($this->username);

  NEW syntax: $this->cache_path = APPPATH.'cache/'.$this->cache_name.'/'.md5($this->username);

.. note:: Files located using PATH\_CP will be in a
  `library <#libraries>`_ or core class, and should use the
  appropriate method for each.

The ``QUERY_MARKER`` constant replaces the use of the configuration item
'``force_query_strings``'::

  OLD syntax:

  $qs = ($PREFS->ini('force_query_string') == 'y') ? '' : '?';
  $search_link = $FNS->fetch_site_index(0, 0).$qs.'ACT='

  NEW syntax:

  $search_link = ee()->functions->fetch_site_index(0, 0).QUERY_MARKER.'ACT='

The ``SLASH`` constant has been removed from the template parser, and
forward slashes are no longer converted to entities. For example, the
following ``str_replace()`` examples are no longer necessary to perform
in a module or plugin's tagdata::

  OLD syntax:

    // neither $str = str_replace(SLASH, '/', $str);
    // nor $str = str_replace('&#47;', '/', $str);

The ``CSRF_TOKEN`` constant is used primarily in frontend javascript. In
the control panel it is automatically added to jQuery AJAX requests.
Additionally, if you are using the Form helper, it will automatically be
added to control panel forms as needed.

Renamed Objects
===============

Some object names have been changed. Pre-2.0 code will need to be
adjusted accordingly.

- ``BM`` → ``benchmark``
- ``DB`` → ``db``
- ``EXT`` → ``extensions``
- ``FNS`` → ``functions``
- ``IN`` → ``input``
- ``LANG`` → ``lang``
- ``LOC`` → ``localize``
- ``OUT`` → ``output``
- ``PREFS`` → ``config``
- ``SESS`` → ``session``
- ``STAT`` → ``stats`` (note that it's plural now)

Deprecated Objects
==================

Some classes have been deprecated and the functions moved or replaced.

- ``REGX``
- ``DSP``

Libraries
=========

A number of EE classes are now libraries, located in
``/system/expressionengine/libraries/``. To use one of these classes,
you invoke it using the following syntax::

  ee()->load->library('class name');

Where class name is the name of the class you want to invoke. For
example::

  OLD syntax:

  if ( ! class_exists('Typography'))
  {
      require PATH_CORE.'core.typography'.EXT;
  }

  $TYPE = new Typography;
  $str = $TYPE->light_xhtml_typography($str);

  NEW syntax:

  ee()->load->library('typography');
  ee()->load->typography->initialize();
  $str = ee()->typography->light_xhtml_typography($str);

Note that after loading the Typography library you need to initialize
it with ``ee()->load->typography->initialize();`` or you will be
inheriting the class properties of whatever code last used it.

Helper Functions
================

Helpers are collections of simple procedural functions that fit within a
given category. For example, there is a Text helper that is a collection
of functions that perform various text formatting routines, a URI helper
that is used for working with urls, and a form helper that's used to
quickly create proper forms. The helper files are located in
``/system/expressionengine/helpers/``. To use one of their functions,
you invoke it using the following syntax::

  ee()->load->helper('helper_name');

Where ``helper_name`` is the name of the helper you want to invoke. For
example, to limit a string to 10 words in length, you would use::

  ee()->load->helper('text'); $str = word_limiter($str, 10);

The helpers most likely to be used in plugins and modules include:

- Directory Helper
- File Helper
- Form helper
- String helper
- Text helper
- URI helper (replaces a number of input class methods)

Refer to :ellislab:`CodeIgniter's user guide </codeigniter/user-guide/>`
for details on all available helpers.

Renamed Functions by (Old) Class
================================

Database Class
--------------

- All queries should be rewritten to use :ellislab:`active record
  </codeigniter/user-guide/database/active_record.html>`
- The ``exp_weblogs``, ``exp_weblog_titles`` and ``exp_weblog_data``
  tables have been changed to use 'channel' nomenclature instead of
  'weblog'
- Queries should be compatible with MySQL running in "strict mode".
  If you are inserting data into a table with an auto-incremented
  field and try to insert an empty string to that field, it will
  cause an error under MySQL in "strict mode". More details can be
  found in the MySQL `SQL Mode
  FAQ <http://dev.mysql.com/doc/refman/5.0/en/faqs-sql-modes.html>`_.

The architecture of the database driver has changed. See the CodeIgniter
user guide for full details of the :ellislab:`database class
</codeigniter/user-guide/database/index.html>`. Here is a short summary
of some of the old vs. new syntax::

  ->num_rows
      ->num_rows()
  ->row['field_name']
      ->row('field_name')
  ->result as $row)
      ->result_array() as $row) // $row is an array
  (n/a)
      ->result() as $row) // $row is an object

Display Class
-------------

::

  $DSP->allowed_group('can_admin_channels')
      ee()->cp->allowed_group('can_admin_channels')
  $DSP->breadcrumb()
      ee()-cp->set_breadcrumb()
  $DSP->html_header()
      ee()-cp->set_variable('cp_page_title', $value)
  $DSP->error_message()
      show_error()

Email Class
-----------

::

  $email->initialize()
      ee()->email->EE_initialize();

Extensions Class
----------------

::

  $EXT->call_extension
      ee()->extensions->call
  $EXT->universal_call_extension
      ee()->extensions->universal_call

Functions Class
---------------

::

  $FNS->fetch_action_id()
  // Note: for use in the control panel
  ee()->cp->fetch_action_id()

  // Note: for use in the module file
  ee()->functions->fetch_action_id()

  $FNS->filename_security()
  ee()->security->sanitize_filename

Input Class
-----------

::

  $IN->URI
      ee()->uri->uri_string
  $IN->QSTR
      ee()->uri->query_string
  $IN->Pages_QSTR
      ee()->uri->page_query_string
  $IN->IP
      ee()->input->ip_address()
  $IN->blacklisted
      ee()->blacklist->blacklisted
  $IN->whitelisted
      ee()->blacklist->whitelisted
  $IN->SEGS
      ee()->uri->segments
  $IN->parse_uri
      Private method (Input class)
  $IN->fetch_uri_segment()
      ee()->uri->segment()
  $IN->clean_input_data
      Private method (Input class)

  $IN->GBL('name', 'GP')
      ee()->input->get_post('name')
  $IN->GBL('name')
      ee()->input->get_post('name')
  $IN->GBL('name', 'POST')
      ee()->input->post('name')
  $IN->GBL('name', 'GET')
      ee()->input->get('name')
  $IN->GBL('name', 'COOKIE')
      ee()->input->cookie('name')

Language Class
--------------

::

  $LANG->fetch_language_file
      ee()->lang->loadfile

Preferences Class
-----------------

::

  $PREFS->ini
      ee()->config->item

Regular Expressions Class
-------------------------

::

  array_stripslashes()
      strip_slashes() [ee()->load->helper('string');]
  ascii_to_entities()
      ascii_to_entities() [ee()->load->helper('text');]
  convert_accented_characters()
      convert_accented_characters()
      [ee()->load->helper('text');]
  convert_quotes()
      quotes_to_entities() [ee()->load->helper('string');]
  decode_qstr()
      Deprecated
  encode_ee_tags()
      ee()->functions->encode_ee_tags()
  encode_php_tags()
      encode_php_tags() [ee()->load->helper('security');]
  entities_to_ascii()
      entities_to_ascii() [ee()->load->helper('text');]
  form_prep()
      form_prep() [ee()->load->helper('form');]
  create_url_title()
      url_title() [ee()->load->helper('url');]
  keyword_clean()
      sanitize_search_terms() [ee()->load->helper('search');]
  prep_query_string()
      ee()->functions->prep_query_string()
  prep_url()
      prep_url() [ee()->load->helper('url');]
  remove_extra_commas($str)
      reduce_multiples($str, ',', TRUE);
      [ee()->load->helper('string');]
  strip_quotes()
      strip_quotes() [ee()->load->helper('string');]
  trim_slashes()
      trim_slashes() [ee()->load->helper('string');]
  valid_ip()
      ee()->input->valid_ip()
  xml_convert()
      xml_convert() [ee()->load->helper('xml');]
  xss_clean()
      ee()->security->xss_clean()
  xss_protection_hash()
      ee()->security->xss_hash()

2.0 Tips and Tricks
===================

Template Class
--------------

Aside from switching from globals to the super object, you don't HAVE to
change your use of the template class. However, make certain to read the
2.0 docs on the :doc:`/development/usage/template`, as using it has been
greatly simplified. The legacy approach still works, but it may be worth
experimenting with the new ``parse_variables()`` method, as you will
likely want to make use of the streamlined approach in the future.

Note also, the ``fetch_param()`` function has been changed so that
parameter values of ``'y'``, ``'on'`` and ``'yes'`` all return
``'yes'``, while ``'n'``, ``'off'`` and ``'no'`` all return ``'no'``.
Your module or plugin may need to be changed accordingly.

Be wary of shortcuts using session_start()
------------------------------------------

If you are using ``session_start()`` to look at the URL and output
content it will no longer work (ex:
http://example.com/system/index.php?S=0&ajax=jquery). CI's routing will
see that as a bad request (no controller or method) and will redirect to
the EE CP's homepage.

Instead, you should do is either use our internal JavaScript library
-or- actually make the request go to the module proper. For example::

  http://example.com/system/index.php?S=0&D=&C=addons\_modules&M=show\_module\_cp&module=tag&method=ajax&jquery=1.


