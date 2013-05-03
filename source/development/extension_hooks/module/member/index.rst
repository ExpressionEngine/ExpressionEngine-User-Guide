Member Module Extension Hooks
=============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

member_manager
--------------

.. function:: member_manager($this)

  Seize control over any Member Module user side request

  How it's called::

    $edata = ee()->extensions->universal_call('member_manager', $this);
    if (ee()->extensions->end_script === TRUE) return $edata;

  :param object $this: The current state of the instantiated Member object
  :rtype: Void

  .. versionadded:: 1.5.2
