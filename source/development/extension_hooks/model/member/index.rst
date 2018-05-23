Member Model Extension Hooks
============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_member_insert
--------------------

.. function:: before_member_insert($member, $values)

  Called before the member object is inserted. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_member_insert', $this, $this->getValues());

  :param object $member: Current Member model object
  :param array $values: The Member model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_member_insert
-------------------

.. function:: after_member_insert($member, $values)

  Called after the member object is inserted. Changes made to the object
  object will **not** be saved automatically. Saving the object may trigger the
  save and update hooks.

  How it's called::

    ee()->extensions->call('after_member_insert', $this, $this->getValues());

  :param object $member: Current Member model object
  :param array $values: The Member model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_member_update
--------------------

.. function:: before_member_update($member, $values, $modified)

  Called before the member object is updated. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_member_update', $this, $this->getValues(), $modified);

  :param object $member: Current Member model object
  :param array $values: The Member model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_member_update
-------------------

.. function:: after_member_update($member, $values, $modified)

  Called after the member object is updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_member_update', $this, $this->getValues(), $modified);

  :param object $member: Current Member model object
  :param array $values: The Member model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0


before_member_save
------------------

.. function:: before_member_save($member, $values)

  Called before the member object is inserted or updated. Changes made to
  the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_member_save', $this, $this->getValues());

  :param object $member: Current Member model object
  :param array $values: The Member model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_member_save
-----------------

.. function:: after_member_save($member, $values)

  Called after the member object is inserted or updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_member_save', $this, $this->getValues());

  :param object $member: Current Member model object
  :param array $values: The Member model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_member_delete
--------------------

.. function:: before_member_delete($member, $values)

  Called before the member object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_member_delete', $this, $this->getValues());

  :param object $member: Current Member model object
  :param array $values: The Member model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_member_delete
-------------------

.. function:: after_member_delete($member, $values)

  Called after the member object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_member_delete', $this, $this->getValues());

  :param object $member: Current Member model object
  :param array $values: The Member model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_member_bulk_delete
-------------------------

.. function:: before_member_bulk_delete($delete_ids)

  Called before a bulk of member objects are deleted. If you need to do an
  expensive operation when members are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('before_member_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0

after_member_bulk_delete
------------------------

.. function:: after_member_bulk_delete($delete_ids)

  Called after a bulk of member objects are deleted. If you need to do an
  expensive operation when members are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('after_member_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0

member_anonymize
----------------

.. function:: member_anonymize($member)

  Called when an anonymization action is taken on a member. If you have
  personally-identifiable information about members in your add-on, this is the
  place to implement your routines to anonymize that information.

  How it's called::

    ee()->extensions->call('member_anonymize', $this);

  :param object $member: Member model object being anonymized
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0
