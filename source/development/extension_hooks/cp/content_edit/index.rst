Content Edit Controller Extension Hooks
=======================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

delete_entries_start
--------------------

.. function:: delete_entries_start()

  This hook is executed when an entry is deleted via the control panel,
  prior to the entry's deletion. It can be used to perform additional
  validation / actions before the entry is deleted, or to take over the
  deletion process.

  How it's called::

    $this->extensions->call('delete_entries_start');
    if ($this->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.4.0

edit_entries_additional_where
-----------------------------

.. function:: edit_entries_additional_where($filter_data)

  This hook is executed when the edit page is loaded, and on every
  search that is performed on the edit page. It can be used to add
  additional where, where_in, and where_not_in options to the query.

  How it's called::

    $_hook_wheres = $this->extensions->call('edit_entries_additional_where', $filter_data);
    if ($this->extensions->end_script === TRUE) return;

  :param array $filter_data: Current search form information
  :returns: Additional where data (see below)
  :rtype: Array

  Example of additional where data::

    array(
        'entry_id !=' => 5,             // where
        'entry_id' => array(1, 2, 3),   // where_in
        'channel_id !=' => array(3, 4)  // where_not_in
    )

  .. versionadded:: 2.4.0

update_multi_entries_loop
-------------------------

.. function:: update_multi_entries_loop($id, $data)

  This hook is executed when entries are updated using the multi-entry
  editor. It runs once for each entry being updated, after the entry is
  updated, allowing additional actions to be performed for each entry.

  How it's called::

    $this->extensions->call('update_multi_entries_loop', $id, $data);
    if ($this->extensions->end_script === TRUE) return;

  :param int $entry_id: Entry ID of the entry being updated
  :param array $data: Data for the entry being updated
  :rtype: Void

  .. versionadded:: 2.0

update_multi_entries_start
--------------------------

.. function:: update_multi_entries_start()

  This hook is executed when entries are updated via the multi-entry
  editor. It runs after authorization is checked, but prior to any
  processing of submitted form data, allowing additional validation /
  actions before the entries are updated, or to take over the update
  process.

  How it's called::

    $this->extensions->call('update_multi_entries_start');
    if ($this->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 2.0
