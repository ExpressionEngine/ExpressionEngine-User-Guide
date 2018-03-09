##############
Text Formatter
##############

.. contents::
  :local:
  :depth: 2

.. highlight:: php

The String Formatter is part of the :doc:`../format` and handles many common formatting needs for text-based content.

*****
Usage
*****

Accented Characters to Ascii
----------------------------

::

  $written_check = ee('Format')->make('Text', 'über crème brûlée')->accentsToAscii();
  // uber creme brulee

Attribute Escaping
------------------

::

  $attr = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->attributeEscape();
  // A discussion about &quot;Wonko the Sane&quot;


Attribute Safe (escaping and other common utilities)
----------------------------------------------------

::

  // this is the same as attributeEscape(), but allows character limiting, unicode punctuation, etc. Note: limiting keeps whole words
  $str = 'A discussion about &quot;Wonko the Sane&quot;';
  $attr = ee('Format')->make('Text', $str)->attributeSafe(['limit' => 20]);
  // A discussion…

Censor
------

::

  $text = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->censor();
  // A discussion about "Wonko the ####" (presuming "sane" is a configured naughty word)

Convert to Entities
-------------------

::

  $text = ee('Format')->make('Text', '"über" crème brûlée')->convertToEntities();
  // &quot;&uuml;ber&quot; cr&egrave;me br&ucirc;l&eacute;e

Encode ExpressionEngine Tags
----------------------------

::

  $str = '{exp:tag}{variable}{/exp:tag}';
  $text = ee('Format')->make('Text', $str)->encodeEETags();
  // &#123;exp:tag&#125;&#123;variable&#125;&#123;/exp:tag&#125;

Encrypt
-------

::

  $str = 'A discussion about "Wonko the Sane"';
  $encrypted = ee('Format')->make('Text', $str)->encrypt();
  // �1����j(QqS ���>}  ��1LU�䯏�u��u�%9�E0�3���tQhFsA�w[ZÈ�

  $encrypted = ee('Format')->make('Text', $str)->encrypt(['encode' => TRUE]);
  // UKEQBOdb+8DaznDlVTW1SHbrvTd2MsVNgoSJ7OxrIhqAYtyUfhOAih6ZvXXO0DTl+eV27tIV2bSrojMRYxA+4g==

Form Prep
---------

::

  $value = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->formPrep();
  // A discussion about &quot;Wonko the Sane&quot;

JSON
----

::

  $value = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->json();
  // "A discussion about &quot;Wonko the Sane&quot;"

Length
------

::

  $length = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->length();
  // 35

Limit Characters
----------------

::

  $text = ee('Format')->make('Text', '<h1>A <em>brief</em> discussion about "Wonko the Sane"</h1>')->limitChars(['characters' => 20]);
  // A brief discussion a&#8230;

Replace
-------

::

  $str = 'A discussion about "Wonko the Sane"';
  $text = ee('Format')->make('Text', $str)->replace(['find' => 'about', 'replace' => 'aboot']);
  // A discussion aboot "Wonko the Sane"

  $text = ee('Format')->make('Text', $str)->replace(['find' => '/ou?/', 'replace' => 'OH', 'regex' => TRUE]);
  // A discussiOHn abOHt "WOHnkOH the Sane"

URL Decode
----------

::

  $text = ee('Format')->make('Text', 'A%20discussion%20about%20%22Wonko%20the%20Sane%22')->urlDecode();
  // A discussion about "Wonko the Sane"

URL Encode
----------

::

  $str = 'A discussion about "Wonko the Sane"';
  $text = ee('Format')->make('Text', $str)->urlEncode();
  // A%20discussion%20about%20%22Wonko%20the%20Sane%22

  $text = ee('Format')->make('Text', $str)->urlEncode(['plus_encoded_spaces' => TRUE]);
  // A+discussion+about+%22Wonko+the+Sane%22

URL Normalization
-----------------

::

  $str = 'www.example.com';
  $url = ee('Format')->make('Text', $str)->url();
  // http://www.example.com

  $str = 'https://';
  $url = ee('Format')->make('Text', $str)->url();
  // empty string, URL is invalid

URL Slug
--------

::

  $url_title = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->urlSlug();
  // a-discussion-about-wonko-the-sane

  $url_title = ee('Format')->make('Text', 'A discussion about "Wonko the Sane"')->urlSlug(['remove_stopwords' => TRUE]);
  // discussion-wonko-sane

*************
API Reference
*************

.. namespace:: EllisLab\ExpressionEngine\Service\Formatter\Formats

.. class:: Text

.. method:: accentsToAscii()

  Converts accented / multi-byte characters, e.g. ü, é, ß to ASCII transliterations. Uses foreign_chars.php config, either the default or user override, as a map

  :returns: A Formatter object
  :rtype: object

.. method:: attributeEscape($double_encode = TRUE)

  Escapes a string for use in an HTML attribute.

  :param bool $double_encode: Whether to double encode existing HTML entities
  :returns: A Formatter object
  :rtype: object

.. method:: attributeSafe($options = [])

  Makes content safe to use in an HTML attribute. In addition to escaping like attributeEscape(), it allows for character limiting, and unicode punctuation—handy for meta tags where entities may not be parsed.

  :param array $options:

    - (bool) **double_encode** (default: FALSE) - whether to double encode existing entities
    - (string) **end_char** (default: &#8230;) - character to use when the limit terminates the string
    - (int) **limit** (default: no limit) - number of characters to limit to, retains whole words
    - (bool) **unicode_punctuation** (default: TRUE) - whether or not to use unicode punctuation characters instead of entities

  :returns: A Formatter object
  :rtype: object

.. method:: censor()

  Censor naughty words, respects application preferences

  :returns: A Formatter object
  :rtype: object

.. method:: convertToEntities($options = [])

  Converts all applicable characters into HTML entities

  :returns: A Formatter object
  :rtype: object

.. method:: encodeEETags($options = [])

  Encode ExpressionEngine Tags. By default encodes all curly braces so variables are also protected.

  :param array $options:

    - (bool) **encode_vars** (default: TRUE) - whether or not to convert curly braces on variables along with tags

  :returns: A Formatter object
  :rtype: object

.. method:: encrypt($options = [])

  Encrypt the text

  :param array $options:

    - (string) **key** (optional encryption key, when not provided, uses the application encryption key)
    - (bool) **encode** (default: TRUE) - whether or not to base64 encode the encrypted data for safe transport

  :returns: A Formatter object
  :rtype: object

.. method:: formPrep()

  Preps the content for use in a form field

  :returns: A Formatter object
  :rtype: object

.. method:: getLength()

  Replace the contents with the length of the string

  :returns: A Formatter object
  :rtype: object

.. method:: json($options = [])

  Encode as JSON

  :param array $options:

    - (bool) **double_encode** (default: TRUE) - whether to double encode already-encoded entities
    - (bool) **enclose with quotes** (default: TRUE) - whether or not to return the JSON enclosed in double quotes
    - (string) **options** Pipe-delimited list of PHP JSON bitmask constants

  :returns: A Formatter object
  :rtype: object

.. method:: limitChars($options = [])

  Limit to X characters, with an optional end character

  :param array $options:

    - (int) **characters** (default: 500) - number of characters to limit to, does not preserve whole words
    - (string) **end_char** (default: &#8230;) - character to use when the limit terminates the string

  :returns: A Formatter object
  :rtype: object

.. method:: replace($options = [])

  Encrypt the text

  :param array $options:

    - (string) **find** - the text to be replaced
    - (string) **replace** - the replacement text
    - (bool) **case_sensitive** (default: TRUE) - whether or not the replacement is case-sensitive (has no effect if regex replacement is used, in those cases use the ``i`` regex flag)
    - (bool) **regex** (default: FALSE) - whether the find string should be processed as a regex replacement

  :returns: A Formatter object
  :rtype: object

.. method:: url()

  Normalize a URL for use in markup.

  :returns: A Formatter object
  :rtype: object

.. method:: urlDecode($options = [])

  URL encode the text

  :param array $options:

    - (bool) **plus_encoded_spaces** (default: FALSE) - whether or not to decode ``+`` to spaces

  :returns: A Formatter object
  :rtype: object

.. method:: urlEncode($options = [])

  URL encode the text

  :param array $options:

    - (bool) **plus_encoded_spaces** (default: FALSE) - whether or not to encode spaces as ``+`` instead of ``%20``

  :returns: A Formatter object
  :rtype: object

.. method:: urlSlug($options = [])

  Make a URL slug from the text

  :param array $options:

    - (string) **separator** (default: ``-``) - the character used to separate words. If not specified, will respect the application preferences.
    - (bool) **lowercase** (default: TRUE) - whether or not to force lowercase
    - (bool) **remove_stopwords** (default: FALSE) - whether or not to remove stopwords (a, the, and, etc.)

  :returns: A Formatter object
  :rtype: object
