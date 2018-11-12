.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

ChannelField Model Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_channel_field_insert
---------------------------

.. function:: before_channel_field_insert($channel_field, $values)

  Called before the channel field object is inserted. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_field_insert', $this, $this->getValues());

  :param object $channel_field: Current ChannelField model object
  :param array $values: The ChannelField model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_channel_field_insert
--------------------------

.. function:: after_channel_field_insert($channel_field, $values)

  Called after the channel field object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

  How it's called::

    ee()->extensions->call('after_channel_field_insert', $this, $this->getValues());

  :param object $channel_field: Current ChannelField model object
  :param array $values: The ChannelField model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_channel_field_update
---------------------------

.. function:: before_channel_field_update($channel_field, $values, $modified)

  Called before the channel field object is updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_field_update', $this, $this->getValues(), $modified);

  :param object $channel_field: Current ChannelField model object
  :param array $values: The ChannelField model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_channel_field_update
--------------------------

.. function:: after_channel_field_update($channel_field, $values, $modified)

  Called after the channel field object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_channel_field_update', $this, $this->getValues(), $modified);

  :param object $channel_field: Current ChannelField model object
  :param array $values: The ChannelField model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0


before_channel_field_save
-------------------------

.. function:: before_channel_field_save($channel_field, $values)

  Called before the channel field object is inserted or updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_field_save', $this, $this->getValues());

  :param object $channel_field: Current ChannelField model object
  :param array $values: The ChannelField model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_channel_field_save
------------------------

.. function:: after_channel_field_save($channel_field, $values)

  Called after the channel field object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_channel_field_save', $this, $this->getValues());

  :param object $channel_field: Current ChannelField model object
  :param array $values: The ChannelField model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_channel_field_delete
---------------------------

.. function:: before_channel_field_delete($channel_field, $values)

  Called before the channel field object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_channel_field_delete', $this, $this->getValues());

  :param object $channel_field: Current ChannelField model object
  :param array $values: The ChannelField model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_channel_field_delete
--------------------------

.. function:: after_channel_field_delete($channel_field, $values)

  Called after the channel field object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_channel_field_delete', $this, $this->getValues());

  :param object $channel_field: Current ChannelField model object
  :param array $values: The ChannelField model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_channel_field_bulk_delete
--------------------------------

.. function:: before_channel_field_bulk_delete($delete_ids)

  Called before a bulk of channel field objects are deleted. If you need to do an
  expensive operation when channel fields are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('before_channel_field_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0

after_channel_field_bulk_delete
-------------------------------

.. function:: after_channel_field_bulk_delete($delete_ids)

  Called after a bulk of channel field objects are deleted. If you need to do an
  expensive operation when channel fields are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('after_channel_field_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0
