.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

MemberGroup Model Extension Hooks
=================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_member_group_insert
--------------------------

.. function:: before_member_group_insert($member_group, $values)

  Called before the member group object is inserted. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_member_group_insert', $this, $this->getValues());

  :param object $member_group: Current MemberGroup model object
  :param array $values: The MemberGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_member_group_insert
-------------------------

.. function:: after_member_group_insert($member_group, $values)

  Called after the member group object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

  How it's called::

    ee()->extensions->call('after_member_group_insert', $this, $this->getValues());

  :param object $member_group: Current MemberGroup model object
  :param array $values: The MemberGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_member_group_update
--------------------------

.. function:: before_member_group_update($member_group, $values, $modified)

  Called before the member group object is updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_member_group_update', $this, $this->getValues(), $modified);

  :param object $member_group: Current MemberGroup model object
  :param array $values: The MemberGroup model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_member_group_update
-------------------------

.. function:: after_member_group_update($member_group, $values, $modified)

  Called after the member group object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_member_group_update', $this, $this->getValues(), $modified);

  :param object $member_group: Current MemberGroup model object
  :param array $values: The MemberGroup model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0


before_member_group_save
------------------------

.. function:: before_member_group_save($member_group, $values)

  Called before the member group object is inserted or updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_member_group_save', $this, $this->getValues());

  :param object $member_group: Current MemberGroup model object
  :param array $values: The MemberGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_member_group_save
-----------------------

.. function:: after_member_group_save($member_group, $values)

  Called after the member group object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_member_group_save', $this, $this->getValues());

  :param object $member_group: Current MemberGroup model object
  :param array $values: The MemberGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_member_group_delete
--------------------------

.. function:: before_member_group_delete($member_group, $values)

  Called before the member group object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_member_group_delete', $this, $this->getValues());

  :param object $member_group: Current MemberGroup model object
  :param array $values: The MemberGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_member_group_delete
-------------------------

.. function:: after_member_group_delete($member_group, $values)

  Called after the member group object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_member_group_delete', $this, $this->getValues());

  :param object $member_group: Current MemberGroup model object
  :param array $values: The MemberGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_member_group_bulk_delete
-------------------------------

.. function:: before_member_group_bulk_delete($delete_ids)

  Called before a bulk of member group objects are deleted. If you need to do an
  expensive operation when member groups are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('before_member_group_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0

after_member_group_bulk_delete
------------------------------

.. function:: after_member_group_bulk_delete($delete_ids)

  Called after a bulk of member group objects are deleted. If you need to do an
  expensive operation when member groups are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('after_member_group_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0
