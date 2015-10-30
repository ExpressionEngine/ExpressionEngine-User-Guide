Channel Entry Model Extension Hooks
===================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_channel_entry_insert
---------------------------

.. function:: before_channel_entry_insert($this, $values)

  Called before the channel entry object is inserted. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_entry_insert', $this, $this->getValues());

  :param object $this: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_channel_entry_insert
--------------------------

.. function:: after_channel_entry_insert($this, $values)

  Called after the channel entry object is inserted. Changes made to the object
  object will **not** be saved automatically. Saving the object may trigger the
  save and update hooks.

  How it's called::

    ee()->extensions->call('after_channel_entry_insert', $this, $this->getValues());

  :param object $this: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_channel_entry_update
---------------------------

.. function:: before_channel_entry_update($this, $values, $modified)

  Called before the channel entry object is updated. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_entry_update', $this, $this->getValues(), $modified);

  :param object $this: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_channel_entry_update
--------------------------

.. function:: after_channel_entry_update($this, $values, $modified)

  Called after the channel entry object is updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_channel_entry_update', $this, $this->getValues(), $modified);

  :param object $this: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0


before_channel_entry_save
-------------------------

.. function:: before_channel_entry_save($this, $values)

  Called before the channel entry object is inserted or updated. Changes made to
  the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_channel_entry_save', $this, $this->getValues());

  :param object $this: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_channel_entry_save
------------------------

.. function:: after_channel_entry_save($this, $values)

  Called after the channel entry object is inserted or updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_channel_entry_save', $this, $this->getValues());

  :param object $this: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_channel_entry_delete
---------------------------

.. function:: before_channel_entry_delete($this, $values)

  Called before the channel entry object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_channel_entry_delete', $this, $this->getValues());

  :param object $this: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_channel_entry_delete
---------------------------

.. function:: after_channel_entry_delete($this, $values)

  Called after the channel entry object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_channel_entry_delete', $this, $this->getValues());

  :param object $this: Current ChannelEntry model object
  :param array $values: The ChannelEntry model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0
