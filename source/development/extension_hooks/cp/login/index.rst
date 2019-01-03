.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Login Controller Extension Hooks
================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

login_authenticate_start
------------------------

.. function:: login_authenticate_start()

  Perform additional actions prior to/take over the control panel login
  routine.

  How it's called::

    $this->extensions->call('login_authenticate_start');
    if ($this->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.4.2

cp_member_login
---------------

.. function:: cp_member_login($hook_data)

  Executes after control panel session is instantiated, allows
  additional processing on control panel logins.

  How it's called::

    ee()->extensions->call('cp_member_login', $this->_hook_data());
    if (ee()->extensions->end_script === TRUE) return;

  :param object $hook_data: Member object with session ID
    (``$hook_data->session_id``) and CP permission boolean
    (``$hook_data->can_access_cp``)
  :rtype: Void

  .. versionadded:: 1.4.0

cp_member_logout
----------------

.. function:: cp_member_logout()

  Perform additional actions after a user logs out of the control panel.

  How it's called::

    $this->extensions->call('cp_member_logout');
    if ($this->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.6.1

cp_member_reset_password
------------------------

.. function:: cp_member_reset_password()

  Perform additional actions after a user resets their password via the
  control panel.

  How it's called::

    $this->extensions->call('cp_member_process_reset_password');
    if ($this->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 2.9.3
