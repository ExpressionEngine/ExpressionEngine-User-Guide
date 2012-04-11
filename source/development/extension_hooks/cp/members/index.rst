Members Controller Extension Hooks
==================================

.. contents::
	:local:
	:depth: 1


cp\_members\_member\_create
---------------------------

Additional processing after a member is created via the control panel.
Executes after member is created, but before stats are recounted. ::

	$edata = $this->extensions->call('cp_members_member_create', $member_id, $data); if ($this->extensions->end_script === TRUE) return;

$member\_id
~~~~~~~~~~~

Member ID of the newly created member

$data
~~~~~

Array of data about the new member

:returns:
    void

Added in v1.4.0

cp\_members\_member\_create\_start
----------------------------------

Perform additional tasks prior to / take over the control panel member
creation routine

::

	$edata = $this->extensions->call('cp_members_member_create_start'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.4.2

cp\_members\_member\_delete\_end
--------------------------------

Allows additional processing when a member is deleted from the control
panel. ::

	$edata = $this->extensions->call('cp_members_member_delete_end', $member_ids); if ($this->extensions->end_script === TRUE) return;

$member\_ids
~~~~~~~~~~~

An array of Member IDs of members deleted

:returns:
    void

Added in v1.4.0

cp\_members\_validate\_members
------------------------------

Additional processing after pending members are validated via the
Control Panel

::

	$edata = $this->extensions->call('cp_members_validate_members'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.5.2
