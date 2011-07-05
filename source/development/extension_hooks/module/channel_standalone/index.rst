Channel Module Stand-Alone Entry Form Extension Hooks
=====================================================

In the menu below you will find links to details about available
extension hooks in the Channel module Stand-Alone Entry Form
(mod.channel\_standalone.php).


Added in v2.0entry\_submission\_redirect
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Set the URL that the user will be redirected to after a successful entry
submission

::

	$loc = $this->extensions->call('entry_submission_redirect', $this->entry_id, $this->meta, $this->data, $cp_call, $orig_loc);

$this->entry\_id
    entry\_id of the submitted entry
$this->meta
    Array of entry's metadata (channel\_id, entry\_date, i.e. fields for
    exp\_channel\_titles.)
$this->data
    Array of entry's field data
$cp\_call
    (Boolean) whether or not the entry is submitted from the control
    panel
$orig\_loc
    Original Location ExpressionEngine would be redirecting to
*Return value*
    String

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


