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

  $money = ee('Format')->make('Number', 1.42)->currency();
  // $1.42 (presuming default / US locale in the PHP environment)

  $money = ee('Format')->make('Number', 4736234.58)->currency(['locale' => 'de_DE', 'currency' => 'EUR']);
  // 4.736.234,58 €

.. warning:: For the greatest accuracy, the PHP intl extension must be available. Without it, the currency symbol may be placed in the wrong position for non-US locales. The fallback also relies on `strfmon` which is not available on all systems, such as Windows. Thankfully the PHP intl extension is available by default, so your environment would have had to intentionally disabled it (why??) for it to be unavailable.

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
