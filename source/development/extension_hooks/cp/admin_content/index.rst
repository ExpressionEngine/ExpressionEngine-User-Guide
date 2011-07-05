Admin Content Controller Extension Hooks
========================================

In the menu below you will find links to details about available
extension hooks in the content administration controller
(admin\_content.php).


Added in v1.6.0foreign\_character\_conversion\_array
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Allows you to set the foreign character conversion array used to
transliterate non-English characters for use in URLs.

**Note:** If you only need to use one non-dynamically controlled array,
you can simply modify system/expressionengine/config/foreign\_chars.php

::

	$foreign_characters = $this->extensions->call('foreign_character_conversion_array');

*Return value*
    Array


