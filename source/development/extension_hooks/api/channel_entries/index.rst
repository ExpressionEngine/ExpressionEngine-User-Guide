Channel Entries API Extension Hooks
===================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

api_channel_entries_custom_field_query
--------------------------------------

.. function:: api_channel_entries_custom_field_query($result)

  Modify the custom fields query array result.

  How it's called::

    $result = $this->EE->extensions->call('api_channel_entries_custom_field_query', $result);
    if ($this->EE->extensions->end_script === TRUE) return;

  :param array $result: Array of results from custom field query
  :returns: Modified custom fields query array result
  :rtype: Array

  .. versionadded:: 2.5.3

entry_submission_ready
----------------------

.. function:: entry_submission_ready($meta, $data, $autosave)

  Additional processing after all data has been validated, just prior to
  insertion / update.

  How it's called::

    $this->EE->extensions->call('entry_submission_ready', $this->meta, $this->data, $this->autosave);

  :param array $meta: Entry's metadata (``channel_id``, ``entry_date``,
    i.e. fields for ``exp_channel_titles``)
  :param array $data: Entry's field data
  :param boolean $autosave: ``TRUE`` if the submission is a
    non-publishing autosave
  :rtype: Void

  .. versionadded:: 2.0

entry_submission_start
----------------------

.. function:: entry_submission_start($channel_id, $autosave)

  Additional processing before an entry is submitted.

  How it's called::

    $this->extensions->call('entry_submission_start', $this->channel_id, $this->autosave);

  :param int $channel_id: Channel ID of submitted entry
  :param boolean $autosave: ``TRUE`` if the submission is a
    non-publishing autosave
  :rtype: Void

  .. versionadded:: 2.0

entry_submission_end
--------------------

.. function:: entry_submission_end($entry_id, $meta, $data)

  Do more processing after an entry is submitted.

  How it's called::

    $this->extensions->call('entry_submission_end', $this->entry_id, $this->meta, $this->data);

  :param int $entry_id: ID of the entry being submitted
  :param array $meta: Entry's metadata (``channel_id``, ``entry_date``,
    i.e. fields for ``exp_channel_titles``)
  :rtype: Void

  .. versionadded:: 2.0

delete_entries_end
------------------

.. function:: delete_entries_end()

  Executed after the entry deletion routine complete, allowing additional
  processing.

  How it's called::

    $this->extensions->call('delete_entries_end');
    if ($this->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.4.0

delete_entries_loop
-------------------

.. function:: delete_entries_loop($val, $channel_id)

  Executed in the loop that deletes each entry, after deletion, prior to
  stat recounts.

  How it's called::

    $edata = $this->extensions->call('delete_entries_loop', $val, $channel_id);
    if ($this->extensions->end_script === TRUE) return;

  :param int $val: ID of the entry being deleted
  :param int $channel_id: Channel ID of the entry being deleted
  :rtype: Void

  .. versionadded:: 1.4.1

