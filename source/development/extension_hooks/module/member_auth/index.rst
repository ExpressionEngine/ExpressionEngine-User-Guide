Member Module Authorization Extension Hooks
===========================================

.. contents::
	:local:
	:depth: 1


member\_member\_login\_multi
----------------------------

Additional processing when a member is logging into ExpressionEnging via
the Multi-Login functionality

::

	$edata = $this->extensions->call('member_member_login_multi', $query->row()); if ($this->extensions->end_script === TRUE) return;

$query->row()
~~~~~~~~~~~~~

    The member data for the member logging in

:returns:
    void

Added in v1.4.0

member\_member\_login\_single
-----------------------------

Additional processing when a member is logging into ExpressionEnging

::

	$edata = $this->extensions->call('member_member_login_single', $query->row()); if ($this->extensions->end_script === TRUE) return;

$query->row()
~~~~~~~~~~~~~

    The member data for the member logging in

:returns:
    void

Added in v1.4.0

member\_member\_login\_start
----------------------------

Additional processing prior to / take control of member login routine

::

	$edata = $this->extensions->call('member_member_login_start'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.4.2

member\_member\_logout
----------------------

Perform additional actions after logout

::

	$edata = $this->extensions->call('member_member_logout'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.6.1
