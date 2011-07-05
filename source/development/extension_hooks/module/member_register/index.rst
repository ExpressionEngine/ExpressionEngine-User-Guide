Member Module Registration Extension Hooks
==========================================

In the menu below you will find links to details about available
extension hooks in the Member module registration routines
(mod.member\_register.php).


Added in v1.4.0member\_member\_register
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Additional processing when a member is registering through the user side
of ExpressionEngine

::

	$edata = $this->extensions->call('member_member_register', $data, $member_id); if ($this->extensions->end_script === TRUE) return;

$data
    Array of data about the new member like username, email,
    screen\_name.
$member\_id (added in v2.0.1)
    The new member's id.
*Return value*
    void

Added in v1.4.2member\_member\_register\_start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Additional processing prior to / take control of member registration
routine

::

	$edata = $this->extensions->call('member_member_register_start'); if ($this->extensions->end_script === TRUE) return;

*Return value*
    void

Added in v1.5.2member\_register\_validate\_members
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Additional processing when member(s) are self validated

::

	$edata = $this->extensions->call('member_register_validate_members', $member_id); if ($this->extensions->end_script === TRUE) return;

$member\_id
    the ID of the member (added 1.6.1)
*Return value*
    void


