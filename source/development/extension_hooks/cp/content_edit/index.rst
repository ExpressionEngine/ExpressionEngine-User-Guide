Content Edit Controller Extension Hooks
=======================================

.. contents::
	:local:
	:depth: 1


delete\_entries\_end
--------------------

Executed after the entry deletion routine complete, allowing additional
processing. ::

	$edata = $this->extensions->call('delete_entries_end'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.4.0

delete\_entries\_loop
---------------------

Executed in the loop that deletes each entry, after deletion, prior to
stat recounts. ::

	$edata = $this->extensions->call('delete_entries_loop', $val, $channel_id); if ($this->extensions->end_script === TRUE) return;

$val
~~~~

entry\_id of the entry being deleted

$channel\_id
~~~~~~~~~~~~

channel\_id of the entry being deleted

:returns:
    void

Added in v1.4.1

delete\_entries\_start
----------------------

This hook is executed when an entry is deleted via the control panel,
prior to the entry's deletion. It can be used to perform additional
validation / actions before the entry is deleted, or to take over the
deletion process. ::

	$edata = $this->extensions->call('delete_entries_start'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.4.0

update\_multi\_entries\_loop
----------------------------

This hook is executed when entries are updated using the multi-entry
editor. It runs once for each entry being updated, after the entry is
updated, allowing additional actions to be performed for each entry. ::

	$edata = $this->extensions->call('update_multi_entries_loop', $id, $data); if ($this->extensions->end_script === TRUE) return;

$id
~~~

entry\_id of the entry being updated

$data
~~~~~

array of data for the entry being updated

:returns:
    void

Added in v2.0

update\_multi\_entries\_start
-----------------------------

This hook is executed when entries are updated via the multi-entry
editor. It runs after authorization is checked, but prior to any
processing of submitted form data, allowing additional validation /
actions before the entries are updated, or to take over the update
process. ::

	$edata = $this->extensions->call('update_multi_entries_start'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v2.0
