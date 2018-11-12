.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Members Controller Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

cp_members_member_create_start
------------------------------

.. function:: cp_members_member_create_start()

  Perform additional tasks prior to / take over the control panel member
  creation routine.

  How it's called::

    $this->extensions->call('cp_members_member_create_start');
    if ($this->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.4.2

cp_members_member_create
------------------------

.. function:: cp_members_member_create($member_id, $data)

  Additional processing after a member is created via the control panel.
  Executes after member is created, but before stats are recounted.

  How it's called::

    $this->extensions->call('cp_members_member_create', $member_id, $data);
    if ($this->extensions->end_script === TRUE) return;

  :param int $member_id: New member's ID
  :param array $data: New member's data
  :rtype: Void

  .. versionadded:: 1.4.0

cp_members_member_delete_end
----------------------------

.. function:: cp_members_member_delete_end($member_ids)

  Allows additional processing when a member is deleted from the control
  panel.

  How it's called::

    $this->extensions->call('cp_members_member_delete_end', $member_ids);
    if ($this->extensions->end_script === TRUE) return;

  :param array $member_ids: IDs of members deleted
  :rtype: Void

  .. versionadded:: 1.4.0

cp_members_validate_members
---------------------------

.. function:: cp_members_validate_members()

  Additional processing after pending members are validated via the
  Control Panel.

  How it's called::

    $this->extensions->call('cp_members_validate_members', $ids);
    if ($this->extensions->end_script === TRUE) return;

  :param array $ids: IDs of members being validated
  :rtype: Void

  .. versionadded:: 1.5.2
