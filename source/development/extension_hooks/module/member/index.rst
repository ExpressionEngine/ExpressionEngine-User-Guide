Member Module Extension Hooks
=============================

.. contents::
	:local:
	:depth: 1


member\_manager
---------------

Seize control over any Member Module user side request

::

	$edata = $this->extensions->call('member_manager', $this); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current state of the instantiated Member object

:returns:
    void

Added in v1.5.2
