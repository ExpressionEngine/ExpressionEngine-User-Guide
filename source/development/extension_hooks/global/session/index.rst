Session Library Extension Hooks
===============================

.. contents::
	:local:
	:depth: 1


sessions\_end
-------------

Modify the user's session/member data, also allows for additional
session or login methods (ex: log in to other system)::

	$edata = $this->extensions->call('sessions_end', $this);
	if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current instantiated Session class with all of its variables and
functions, use a reference in your functions to modify.

:returns:
    void

Added in v1.4.0

sessions\_start
---------------

Reset Session class variables, modify default/guest settings, take over
whole session check, etc. ::

	$edata = $this->extensions->call('sessions_start', $this); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current instantiated Session class with all of its variables and
functions, use a reference in your functions to modify.

:returns:
    void

Added in v1.4.0
