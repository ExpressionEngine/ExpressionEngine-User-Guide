Content Publish Controller Extension Hooks
==========================================

.. contents::
	:local:
	:depth: 1


entry\_submission\_absolute\_end
--------------------------------

Additional processing after entry submission, after all processing,
prior to redirect. ::

	$this->extensions->call('entry_submission_absolute_end', $this->entry_id, $this->meta, $this->data);

$this->entry\_id
~~~~~~~~~~~~~~~~

entry\_id of submitted entry

$this->meta
~~~~~~~~~~~

Array of entry's metadata (channel\_id, entry\_date, i.e. fields for
exp\_channel\_titles.)

$this->data
~~~~~~~~~~~

Array of entry's field data

:returns:
    void
    
Added in v2.0

entry\_submission\_redirect
---------------------------

Set the URL that the user will be redirected to after a successful entry
submission

::

	$loc = $this->extensions->call('entry_submission_redirect', $this->entry_id, $this->meta, $this->data, $cp_call, $orig_loc);

$this->entry\_id
~~~~~~~~~~~~~~~~

entry\_id of the submitted entry

$this->meta
~~~~~~~~~~~

Array of entry's metadata (channel\_id, entry\_date, i.e. fields for
exp\_channel\_titles.)

$this->data
~~~~~~~~~~~
    Array of entry's field data

$cp\_call
~~~~~~~~~

(Boolean) whether or not the entry is submitted from the control
panel

$orig\_loc
~~~~~~~~~~

Original Location ExpressionEngine would be redirecting to

:returns:
    String

Added in v2.0

foreign_character_conversion_array
----------------------------------

.. function:: foreign_character_conversion_array() 

  Allows you to set the foreign character conversion array used to
  transliterate non-English characters for use in URLs.

  How it's called::

    $foreign_characters = $CI->extensions->call('foreign_character_conversion_array');

  :returns: Array of character ASCII values as keys and what they should
    translate to as values
  :rtype: String

  .. note:: If you only need to use one non-dynamically controlled 
    array, you can simply modify 
    ``system/expressionengine/config/foreign_chars.php``

  .. versionadded:: 2.0

publish\_form\_channel\_preferences
-----------------------------------

Allows modification of channel preferences used on the publish form
page. ::

	$row = $this->extensions->call('publish_form_channel_preferences', $query->row_array());

$query->row\_array()
~~~~~~~~~~~~~~~~~~~~

Array of preferences for the selected channel

:returns:
    Array

Added in v1.4.1

publish\_form\_entry\_data
--------------------------

Allows modification of entry data for the publish form when editing an
existing entry. ::

	$resrow = $this->extensions->call('publish_form_entry_data', $result->row_array());

$result->row\_array()
~~~~~~~~~~~~~~~~~~~~~

Array of entry data

:returns:
    Array

Added in v1.4.1
