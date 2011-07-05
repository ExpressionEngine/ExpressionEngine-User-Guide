Member Module Authorization Extension Hooks
===========================================

In the menu below you will find links to details about available
extension hooks in the Member module authorization routines
(mod.member\_auth.php).


Added in v1.4.0member\_member\_login\_multi
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Additional processing when a member is logging into ExpressionEnging via
the Multi-Login functionality

::

	$edata = $this->extensions->call('member_member_login_multi', $query->row()); if ($this->extensions->end_script === TRUE) return;

$query->row()
    The member data for the member logging in
*Return value*
    void

Added in v1.4.0member\_member\_login\_single
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Additional processing when a member is logging into ExpressionEnging

::

	$edata = $this->extensions->call('member_member_login_single', $query->row()); if ($this->extensions->end_script === TRUE) return;

$query->row()
    The member data for the member logging in
*Return value*
    void

Added in v1.4.2member\_member\_login\_start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Additional processing prior to / take control of member login routine

::

	$edata = $this->extensions->call('member_member_login_start'); if ($this->extensions->end_script === TRUE) return;

*Return value*
    void

Added in v1.6.1member\_member\_logout
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Perform additional actions after logout

::

	$edata = $this->extensions->call('member_member_logout'); if ($this->extensions->end_script === TRUE) return;

*Return value*
    void


