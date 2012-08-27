Channel Entries API Extension Hooks
===================================

.. contents::
	:local:
	:depth: 1


api_channel_entries_custom_field_query
--------------------------------------

Modify the custom fields query array result. ::

	$result = $this->EE->extensions->call('api_channel_entries_custom_field_query', $result);
	if ($this->EE->extensions->end_script === TRUE) return;

$result
~~~~~~~

Array of result from custom field query.

:returns:
    Array

Added in v2.5.3

entry\_submission\_end
----------------------

Do more processing after an entry is submitted. ::

	$this->extensions->call('entry_submission_end', $this->entry_id, $this->meta, $this->data);

$this->entry\_id
~~~~~~~~~~~~~~~~

entry\_id of the entry being submitted

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

entry\_submission\_ready
------------------------

Additional processing after all data has been validated, just prior to
insertion / update. ::

	$this->EE->extensions->call('entry_submission_ready', $this->meta, $this->data, $this->autosave);

$this->meta
~~~~~~~~~~~

Array of entry's metadata (channel\_id, entry\_date, i.e. fields for
exp\_channel\_titles.)

$this->data
~~~~~~~~~~~

Array of entry's field data

$this->autosave
~~~~~~~~~~~~~~~

(Boolean) whether or not the submission action is an non-publishing
autosave

:returns:
    void

Added in v2.0

entry\_submission\_start
------------------------

Additional processing before an entry is submitted. ::

	$this->extensions->call('entry_submission_start', $this->channel_id, $this->autosave);

$this->channel\_id
~~~~~~~~~~~~~~~~~~
    channel\_id of the submitted entry

$this->autosave
~~~~~~~~~~~~~~~

(Boolean) whether or not the submission action is an non-publishing
autosave

:returns:
    void

Added in v2.0
