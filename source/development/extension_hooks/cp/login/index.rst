Login Controller Extension Hooks
================================

.. contents::
	:local:
	:depth: 1


login\_authenticate\_start
--------------------------

Perform additional actions prior to / take over the control panel login
routine. ::

	$edata = $this->extensions->call('login_authenticate_start'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.4.2

cp\_member\_login
-----------------

Executes after control panel session is instantiated, allows additional
processing on control panel logins. ::

	$edata = $this->extensions->call('cp_member_login', $query->row()); if ($this->extensions->end_script === TRUE) return;

$query->row()
~~~~~~~~~~~~~

Array of member data

:returns:
    void

Added in v1.4.0

cp\_member\_logout
------------------

Perform additional actions after a user logs out of the control panel

::

	$edata = $this->extensions->call('cp_member_logout'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.6.1
