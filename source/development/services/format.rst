##############
Format Service
##############

.. contents::
  :local:
  :depth: 2

.. highlight:: php

********
Overview
********

The Format service offers a number of common formatting tasks as a convenience and consolidated way for ExpressionEngine handles these tasks. The Formatter handles common string and number presentational needs.

::

  $display_size = ee('Format')->make('Number', $content)->bytes();

The Format service is a factory to the various formatters available. If you need the factory, use ``ee('Format')``. If you need a Formatter, use ``ee('Format')->make($formatter, $content)``.

Format Factory
--------------

.. namespace:: EllisLab\ExpressionEngine\Service\Formatter

.. class:: FormatterFactory

.. method:: make($formatter_name, $content)

  Makes a Formatter object.

  :param string $formatter_name: Formatter name
  :param mixed $content: The content to be formatted
  :returns: A Formatter object
  :rtype: Formatter

All Formatters
--------------

.. class:: Formatter

.. method:: compile()

  Compiles and returns the content as a string. Typically this is used when you
  need to use a content as an array key, or want to json_encode() the content.

  :returns: string
  :rtype: The content

.. method:: __toString()

  When accessed as a string simply complile the content and return that.

  :returns: string
  :rtype: The content

.. note:: When using Formatters, if you just need the string and not the object for further processing, you can use PHP's type casting::

    $array = array('size' => (string) ee('Format')->make('Number', $content)->bytes());


.. namespace:: EllisLab\ExpressionEngine\Service\Formatter\Formats

Number Formatter
----------------

.. class:: Number

.. method:: bytes($abbr = TRUE, $include_markup = TRUE)

  Formats a binary byte multiple into a human-readable measure of units, e.g. B, KB, MB, GB.

  :param bool $abbr: Use the abbreviated form of the byte format
  :param bool $include_markup: Output with ``<abbr>`` HTML. Only affects abbreviated forms.
  :returns: A Formatter object
  :rtype: object

.. method:: currency($options = [])

  Formats as currency. Greatest accuracy requires the PHP intl extension to be available

  :param array $options:

    - (string) **currency** code (USD, EUR, etc.)
    - (string) **locale** (default: en_US.UTF-8)

  :returns: A Formatter object
  :rtype: object

  .. method:: duration($options = [])

    Formats as a duration using a rule-based format, e.g.: hh:mm:ss, mm:ss, or ss sec.

    :param array $options:

      - (string) **locale** (default: en_US.UTF-8)

    :returns: A Formatter object
    :rtype: object

  .. method:: ordinal($options = [])

    Formats with an ordinal suffix, e.g. ``127th``. Locales other than English require the PHP intl extension.

    :param array $options:

      - (string) **locale** (default: en_US.UTF-8)

    :returns: A Formatter object
    :rtype: object

  .. method:: spellout($options = [])

    Spell out the number as words. Requires the PHP intl extension.

    :param array $options:

      - (string) **capitalize** 'ucfirst' or 'ucwords'
      - (string) **locale** (default: en_US.UTF-8)

    :returns: A Formatter object
    :rtype: object

Text Formatter
--------------

.. class:: Text

.. method:: accentsToAscii($options = [])

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
    - (bool) **encode** (default: FALSE) - whether or not to base64 encode the encrypted data for safe transport

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

  :returns: A Formatter object
  :rtype: object

When to use ``compile()``
-------------------------

The Formatter object has a magic ``__toString()`` method that compiles the object
into a string when the object is treated as a string (see: PHP's documentation
on the magic `__toString() method
<http://php.net/manual/en/language.oop5.magic.php#object.tostring>`_ for more
information). The ``compile()`` method exists for those occasions when the
object is treated as an object but you need a string instead. As per `PHP's
documentation on arrays <http://php.net/manual/en/language.types.array.php>`_:
"Arrays and objects can not be used as keys. Doing so will result in a warning:
*Illegal offset type.*" You will also want to compile the object when you want
to JSON encode the content otherwise you will get a JSON object instead of a string.

For example::

  ee()->javascript->set_global(array(
    'form.some_input.value' => ee('Format')->make('String', $content)->attribute_escape()->compile()
  ));
