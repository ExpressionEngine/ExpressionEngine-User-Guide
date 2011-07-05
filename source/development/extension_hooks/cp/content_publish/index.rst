Content Publish Controller Extension Hooks
==========================================

In the menu below you will find links to details about available
extension hooks in the content publish controller
(content\_publish.php).


Added in v2.0entry\_submission\_absolute\_end
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Additional processing after entry submission, after all processing,
prior to redirect. ::

	$this->extensions->call('entry_submission_absolute_end', $this->entry_id, $this->meta, $this->data);

$this->entry\_id
    entry\_id of submitted entry
$this->meta
    Array of entry's metadata (channel\_id, entry\_date, i.e. fields for
    exp\_channel\_titles.)
$this->data
    Array of entry's field data
*Return value*
    void

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

Added in v1.4.1publish\_form\_channel\_preferences
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Allows modification of channel preferences used on the publish form
page. ::

	$row = $this->extensions->call('publish_form_channel_preferences', $query->row_array());

$query->row\_array()
    Array of preferences for the selected channel
*Return value*
    Array

Added in v1.4.1publish\_form\_entry\_data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Allows modification of entry data for the publish form when editing an
existing entry. ::

	$resrow = $this->extensions->call('publish_form_entry_data', $result->row_array());

$result->row\_array()
    Array of entry data
*Return value*
    Array


