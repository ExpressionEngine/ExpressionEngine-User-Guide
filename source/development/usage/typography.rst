Typography Class
================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Calling the Typography Class
----------------------------

.. class:: Typography

  The Typography class is used in ExpressionEngine to parse type,
  providing tools for automatic XHTML, auto line-breaking, email
  encoding, word censoring, decoding BBCode, syntax highlighting, and
  gateway access to formatting plugins.

  To use the these features in your modules, you need to first
  instantiate the Typography Class::

    ee()->load->library('typography');
    ee()->typography->initialize();

  Note that after loading the Typography library you need to initialize
  it with ``ee()->load->typography->initialize();`` or you will be
  inheriting the class properties of whatever code last used it.

Typography Class Properties
---------------------------

The Typography class has a number of class properties that you may wish
to set before calling any methods. Below is a description of available
class properties and their default values (in bold).

.. attr:: allow_img_url

  (``string``) [ y / **n** ] — Allow inline images?

.. attr:: allow_js_img_anchors

  (``bool``) [ TRUE / **FALSE** ] — Whether to allow JavaScript
  submitted (within ``<a href>`` and ``<img>`` tags

.. attr:: auto_links

  (``string``) [ **y** / n ] — Auto-link URLs and email addresses? (Note
  that auto-linking does not ever occur if ``$html_format`` is "none")

.. attr:: bounce

  (``string``) — Used to construct redirect links, to prevent control
  panel URLs from showing up in referrer logs, and on the front-end
  for rank denial. This property is set dynamically based on site
  preferences and is not necessary to set directly.

.. attr:: censored_replace

  (``string``) — String that censored words are replaced with, taken
  from site preferences.

.. attr:: censored_words

  (``array``) — Array of words to be censored, taken from site
  preferences.

.. attr:: code_chunks

  (``array``) — Array of temporary markers and content used to prevent
  formatting from being applied to syntax highlighted code.

.. attr:: code_counter

  (``int``) — Used as keys of the $code_chunks array, to keep the
  temporary markers organized.

.. attr:: convert_curly

  (``bool``) [ **TRUE** / FALSE ] — Convert curly brackets ( "{" and
  "}") into entities?

.. attr:: emoticon_path

  (``string``) — The preference setting for the URL path to the site's
  emoticons. This property is set dynamically based on site
  preferences and is not necessary to set directly.

.. attr:: encode_email

  (``bool``) [ **TRUE** / FALSE ] — Whether or not email addresses are
  encoded.

.. attr:: encode_type

  (``string``) [ **javascript** / noscript ] — Type of encoding applied
  to email addresses if email address encoding is enabled.
  ``"noscript"`` renders in a human readable format (e.g. "name at
  example dot com)", suitable for use where JavaScript is inappropriate,
  such as in a feed.

.. attr:: file_paths

  (``array``) — Array of file upload directories in ``key (ids) => value
  (urls)`` pairs.

.. attr:: highlight_code

  (``bool``) [ **TRUE** / FALSE ] — Perform PHP syntax highlighting on
  ``[pre]`` and ``[code]`` blocks?

.. attr:: html_fmt_types

  (``array``) [ **array('safe', 'all', 'none')** ] — Array of standard
  HTML handling types available to the Typography class.

.. attr:: html_format

  (``string``) [ **safe** / all / none ] — Controls how HTML is handled
  in text.

.. attr:: parse_images

  (``bool``) [ **TRUE** / FALSE ] — Whether or not ``{filedir_#}``
  variables are to be parsed.

.. attr:: parse_smileys

  (``bool``) [ **TRUE** / FALSE ] — Replace text smileys with smiley
  images?

.. attr:: popup_links

  (``bool``) [ TRUE / **FALSE** ] — Create links as popups?

.. attr:: single_line_pgfs

  (``bool``) [ **TRUE** / FALSE ] — Whether to treat single lines as
  paragraphs in auto-XHTML

.. attr:: smiley_array

  (``mixed``) [ **FALSE** ] — If emoticons are enabled for the site,
  this property will contain an array of smiley conversions in ``key
  (smiley) => value (image)`` pairs. If emoticons are not enabled, this
  will be set to ``FALSE``.

.. attr:: text_fmt_plugins

  (``array``) — Array of available installed plugins.

.. attr:: text_fmt_types

  (``array``) [ **array('xhtml', 'br', 'none', 'lite')** ] — Array of
  standard formatting types available to the Typography class.

.. attr:: text_format

  (``string``) [ **xhtml** / br / none / lite ] — Controls what
  formatting is applied to text.

.. attr:: use_span_tags

  (``bool``) [ **TRUE** / FALSE ] — Use ``<span>`` tags for font color
  and size BBCode? Setting to ``FALSE`` uses ``<font>`` tags.

.. attr:: word_censor

  (``bool``) [ **FALSE** ] — Whether or not word censoring is applied.
  This property is set dynamically based on site preferences and is
  not necessary to set directly.

.. attr:: yes_no_syntax

  (``array``) [ **array('y', 'n')** ] — Array of valid Yes / No strings
  for use in properties. Used to ensure that valid settings are being
  provided for a Yes / No type preference.

Parsing Type
------------

.. method:: parse_type($str[, $prefs = ''])

  This method returns a string of parsed type. It is the most common use
  of the Typography class, and many of the individual methods also
  described in this document are used within the parse_type() method. The
  format the string is returned in is determined by both the class
  properties and the array of properties provided in the second argument.::

    $str = ee()->typography->parse_type($str);

  :param string $str: String to parse
  :param array $prefs: Associative array containing parsing preferences
    (see below)
  :returns: Parsed string
  :rtype: String

  You may override class properties directly in the $prefs array for the
  following:

  - ``text_format``
  - ``html_format``
  - ``auto_links``
  - ``allow_img_url``

  ::

    $prefs = array(
        'text_format'   => 'xhtml',
        'html_format'   => 'all',
        'auto_links'    => 'y',
        'allow_img_url' => 'y'
    );

    $str = ee()->typography->parse_type($str, $prefs);

Using a Plugin for Text Formatting
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Any installed formatting plugin may be used to parse type. Simply use
the class name of the plugin, in lowercase letters::

  $str = ee()->typography->parse_type($str, array('text_format' => 'markdown'));

If you attempt to use a plugin that is not installed, no text formatting
will be performed. It may be wise to check for the existence of plugins
before using them, so if they are not installed, you can fall back on
one of the native formatting types::

  $text_format = (in_array('markdown', ee()->typography->text_fmt_plugins)) ? 'markdown' : 'xhtml';
  $str = ee()->typography->parse_type($str, array('text_format' => $text_format));

Encode Email Addresses
----------------------

.. method:: encode_email($email[, $title = ''[, $anchor = TRUE ]])

  This method encodes email addresses with Javascript, to assist in
  prevention of email harvesting by bots.::

      $str = "brett.bretterson@example.com";
      $str = ee()->typography->encode_email($str, "Email Brett Bretterson");

  If you want to return a human readable "encoded" email address
  instead, you can also set the :attr:`Typography::$encode_type` class
  property to ``"noscript"``.

  :param string $email: Email address
  :param string $title: Text to use as the title of the link
  :param boolean $anchor: Whether to create a clickable link or not
  :returns: Encoded email address
  :rtype: String

Auto (XTHML) Typography
-----------------------

.. method:: auto_typography($str[, $reduce_linebreaks = FALSE])

  This method takes a string of text and returns typographically
  correct XHTML::

    $str = ee()->typography->auto_typography($str);

  Its primary modifications are:

  - It turns double spaces into paragraphs.
  - It adds line breaks where there are single spaces.
  - It turns single and double quotes into curly quotes.
  - It turns three dots into ellipsis.
  - It turns double dashes into em-dashes.

  :param string $str: Text to apply XHTML typography to
  :param boolean $reduce_linebreaks: Set to ``TRUE`` to reduce more than
    two consecutive newlines to two
  :returns: Formatted and cleaned text
  :rtype: String

Formatting Characters for XHTML ("Light" Typography)
----------------------------------------------------

.. method:: format_characters($str)

  This method performs the character transformation portion of the
  XHTML typography only, i.e. curly quotes, ellipsis, ampersand, etc.::

      $str = ee()->typography->format_characters($str);

  :param string $str: Text to apply character formatting to
  :returns: Character formatted text
  :rtype: String
