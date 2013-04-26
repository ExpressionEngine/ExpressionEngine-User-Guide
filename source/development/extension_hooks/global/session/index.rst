Session Library Extension Hooks
===============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

sessions_end
------------

.. function:: sessions_end($this)

  Modify the user's session/member data, also allows for additional
  session or login methods (ex: log in to other system).

  How it's called::

    $this->extensions->call('sessions_end', $this);
    if ($this->extensions->end_script === TRUE) return;

  :param object $this: The current instantiated Session class with all
    of its variables and functions, use a reference in your functions to
    modify
  :rtype: Void

  .. versionadded:: 1.4.0

sessions_start
--------------

.. function:: sessions_start($this)

  Reset Session class variables, modify default/guest settings, take
  over whole session check, etc.

  How it's called::

    $this->extensions->call('sessions_start', $this);
    if ($this->extensions->end_script === TRUE) return;

  :param object $this: The current instantiated Session class with all
    of its variables and functions, use a reference in your functions to
    modify
  :rtype: Void

  .. versionadded:: 1.4.0
