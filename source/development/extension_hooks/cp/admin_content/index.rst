Admin Content Controller Extension Hooks
========================================

.. contents::
	:local:
	:depth: 1


foreign\_character\_conversion\_array
-------------------------------------

Allows you to set the foreign character conversion array used to
transliterate non-English characters for use in URLs.

**Note:** If you only need to use one non-dynamically controlled array,
you can simply modify system/expressionengine/config/foreign\_chars.php

::

	$foreign_characters = $this->extensions->call('foreign_character_conversion_array');

:returns:
    Array

Added in v1.6.0
