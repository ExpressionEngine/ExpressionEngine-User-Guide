.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Channel Entry Model Extension Hooks
===================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_channel_entry_insert
---------------------------

.. function:: before_channel_entry_insert($entry, $values)

  Called before the channel entry object is inserted. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_entry_insert', $this, $this->getValues());

  :param object $entry: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_channel_entry_insert
--------------------------

.. function:: after_channel_entry_insert($entry, $values)

  Called after the channel entry object is inserted. Changes made to the object
  object will **not** be saved automatically. Saving the object may trigger the
  save and update hooks.

  How it's called::

    ee()->extensions->call('after_channel_entry_insert', $this, $this->getValues());

  :param object $entry: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_channel_entry_update
---------------------------

.. function:: before_channel_entry_update($entry, $values, $modified)

  Called before the channel entry object is updated. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_entry_update', $this, $this->getValues(), $modified);

  :param object $entry: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_channel_entry_update
--------------------------

.. function:: after_channel_entry_update($entry, $values, $modified)

  Called after the channel entry object is updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_channel_entry_update', $this, $this->getValues(), $modified);

  :param object $entry: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0


before_channel_entry_save
-------------------------

.. function:: before_channel_entry_save($entry, $values)

  Called before the channel entry object is inserted or updated. Changes made to
  the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_entry_save', $this, $this->getValues());

  :param object $entry: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_channel_entry_save
------------------------

.. function:: after_channel_entry_save($entry, $values)

  Called after the channel entry object is inserted or updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_channel_entry_save', $this, $this->getValues());

  :param object $entry: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_channel_entry_delete
---------------------------

.. function:: before_channel_entry_delete($entry, $values)

  Called before the channel entry object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_channel_entry_delete', $this, $this->getValues());

  :param object $entry: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_channel_entry_delete
---------------------------

.. function:: after_channel_entry_delete($entry, $values)

  Called after the channel entry object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_channel_entry_delete', $this, $this->getValues());

  :param object $entry: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_channel_entry_bulk_delete
--------------------------------

.. function:: before_channel_entry_bulk_delete($delete_ids)

  Called before a bulk of channel entry objects are deleted. If you need to do an
  expensive operation when channel entries are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('before_channel_entry_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0

after_channel_entry_bulk_delete
-------------------------------

.. function:: after_channel_entry_bulk_delete($delete_ids)

  Called after a bulk of channel entry objects are deleted. If you need to do an
  expensive operation when channel entries are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('after_channel_entry_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0
