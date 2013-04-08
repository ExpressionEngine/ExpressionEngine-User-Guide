Member Module Authorization Extension Hooks
===========================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

member_member_login_multi
-------------------------

.. function:: member_member_login_multi($hook_data)

  Additional processing when a member is logging into ExpressionEngine
  via the Multi-Login functionality.

  How it's called::

    $this->EE->extensions->call('member_member_login_multi', $this->_hook_data());
    if ($this->EE->extensions->end_script === TRUE) return;

  :param object $hook_data: Member object with session ID
    (``$hook_data->session_id``) and CP permission boolean
    (``$hook_data->can_access_cp``)
  :rtype: Void

  .. versionadded:: 1.4.0

member_member_login_single
--------------------------

.. function:: member_member_login_single($hook_data)

  Additional processing when a member is logging into ExpressionEngine.

  How it's called::

    $this->EE->extensions->call('member_member_login_single', $this->_hook_data());
    if ($this->EE->extensions->end_script === TRUE) return;

  :param object $hook_data: Member object with session ID
    (``$hook_data->session_id``) and CP permission boolean
    (``$hook_data->can_access_cp``)
  :rtype: Void

  .. versionadded:: 1.4.0

member_member_login_start
-------------------------

.. function:: member_member_login_start()

  Additional processing prior to / take control of member login routine

  How it's called::

    $this->EE->extensions->call('member_member_login_start');
    if ($this->EE->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.4.2

member_member_logout
----------------------

.. function:: member_member_logout()

  Perform additional actions after logout.

  How it's called::

    $edata = $this->EE->extensions->call('member_member_logout');
    if ($this->EE->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.6.1
