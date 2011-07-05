Member Module Extension Hooks
=============================

In the menu below you will find links to details about available
extension hooks in the Member module (mod.member.php).


Added in v1.5.2member\_manager
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Seize control over any Member Module user side request

::

	$edata = $this->extensions->call('member_manager', $this); if ($this->extensions->end_script === TRUE) return;

$this
    The current state of the instantiated Member object
*Return value*
    void


