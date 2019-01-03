.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Legacy Member Model Extension Hooks
===================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

member_create_start
-------------------

.. function:: member_create_start($data, $cdata)

  Provides an opportunity for extra code to be executed upon member
  creation, and also gives the opportunity to modify the member data by
  altering the arrays of data that we pass to the hook.

  How it's called::

    list($data, $cdata) = $this->extensions->call('member_create_start', $data, $cdata);

  :param array $data: Data to be inserted into ``exp_members`` table
  :param array $cdata: Optional custom member data
  :returns: Array containing the ``$data`` array and ``$cdata`` array
    (see below)
  :rtype: Array

  Example of array to return::

    array($data, $cdata)

  .. versionadded:: 2.6.0

member_create_end
-----------------

.. function:: member_create_end($member_id, $data, $cdata)

  Provides an opportunity for extra code to be executed after member
  creation.

  How it's called::

    $this->extensions->call('member_create_end', $member_id, $data, $cdata);

  :param int $member_id: ID of the member just created
  :param array $data: Data to be inserted into ``exp_members`` table
  :param array $cdata: Optional custom member data
  :rtype: Void

  .. versionadded:: 2.6.0

member_update_start
-------------------

.. function:: member_update_start($member_id, $data)

  Provides an opportunity for extra code to be executed upon member
  update, and also gives the opportunity to modify the update for member
  data by altering the array of data that we pass to the hook.

  How it's called::

    $data = $this->extensions->call('member_update_start', $member_id, $data);

  :param int $member_id: ID of the member to be edited
  :param array $data: Data to be updated
  :returns: Updated ``$data`` array
  :rtype: Array

  .. versionadded:: 2.6.0

member_update_end
-----------------

.. function:: member_update_end($member_id, $data)

  Provides an opportunity for extra code to be executed immediately before the
  update of the member data and member custom field data.

  How it's called::

    $this->extensions->call('member_update_end', $member_id, $data);

  :param int $member_id: ID of the member to be edited
  :param array $data: Data to be updated
  :rtype: Void

  .. versionadded:: 2.6.0

member_delete
-------------

.. function:: member_delete($member_ids)

  When a member is about to be deleted, this hook gives the chance to
  run a custom deletion routine and/or stop ExpressionEngine from
  running its own member deletion routine for certain members.

  How it's called::

    $member_ids = $this->extensions->call('member_delete', $member_ids);

  :param array $member_ids: Array of member IDs about to be deleted
  :returns: Array of member IDs to delete after adding or removing IDs
  :rtype: Array

  .. versionadded:: 2.4.0
