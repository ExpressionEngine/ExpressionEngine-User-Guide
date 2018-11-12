.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

################
Number Formatter
################

.. contents::
  :local:
  :depth: 2

.. highlight:: php

The Number Formatter is part of the :doc:`../format` and handles many common formatting needs for numeric content.

*****
Usage
*****

Bytes
-----

::

  $display_size = ee('Format')->make('Number', 76752)->bytes();
  // 75<abbr title="Kilobytes">KB</abbr>

  $display_size = ee('Format')->make('Number', 76752)->bytes(FALSE);
  // 75 kilobytes

Currency
--------

::

  $money = ee('Format')->make('Number', 4736234.5)->currency();
  // $4,736,234.58 (presuming default / US locale in the PHP environment)

  $money = ee('Format')->make('Number', 4736234.58)->currency(['locale' => 'de_DE', 'currency' => 'EUR']);
  // 4.736.234,58 €

.. warning:: For the greatest accuracy, the PHP intl extension must be available (PHP's default). Without it, the currency symbol may be placed in the wrong position for non-US locales. The fallback also relies on `strfmon` which is not available on all systems, such as Windows.

Duration
--------

::

  $duration = ee('Format')->make('Number', 112358)->duration();
  // 31:12:38

Ordinal
-------

::

  $ordinal = ee('Format')->make('Number', 43)->ordinal();
  // 43rd

Spellout
--------

::

  $written_check = ee('Format')->make('Number', 112358.13)->spellout();
  // one hundred twelve thousand three hundred fifty-eight point one three

  $written_check = ee('Format')->make('Number', 112358.13)->spellout(['capitalize' => 'ucwords']);
  // One Hundred Twelve Thousand Three Hundred Fifty-eight Point One Three

  $written_check = ee('Format')->make('Number', 112358.13)->spellout(['locale' => 'de_DE']);
  // ein­hundert­zwölf­tausend­drei­hundert­acht­und­fünfzig Komma eins drei

.. warning:: This method requires the PHP intl extension (enabled by default).

*************
API Reference
*************

.. namespace:: EllisLab\ExpressionEngine\Service\Formatter\Formats

.. class:: Number

.. method:: bytes($abbr = TRUE, $include_markup = TRUE)

  Formats a binary byte multiple into a human-readable measure of units, e.g. B, KB, MB, GB.

  :param bool $abbr: (default: TRUE) Use the abbreviated form of the byte format
  :param bool $include_markup: (default: TRUE) Output with ``<abbr>`` HTML. Only affects abbreviated forms.
  :returns: A Formatter object
  :rtype: object

.. method:: currency($options = [])

  Formats as currency. Greatest accuracy requires the PHP intl extension to be available

  :param array $options:

    - (string) **currency** code (USD, EUR, etc.)
    - (string) **decimals** decimal precision (default based on locale)
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
