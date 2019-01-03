.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

File Model Extension Hooks
==========================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_file_insert
------------------

.. function:: before_file_insert($file, $values)

  Called before the file object is inserted. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_file_insert', $this, $this->getValues());

  :param object $file: Current File model object
  :param array $values: The File model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_file_insert
-----------------

.. function:: after_file_insert($file, $values)

  Called after the file object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

  How it's called::

    ee()->extensions->call('after_file_insert', $this, $this->getValues());

  :param object $file: Current File model object
  :param array $values: The File model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_file_update
------------------

.. function:: before_file_update($file, $values, $modified)

  Called before the file object is updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_file_update', $this, $this->getValues(), $modified);

  :param object $file: Current File model object
  :param array $values: The File model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_file_update
-----------------

.. function:: after_file_update($file, $values, $modified)

  Called after the file object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_file_update', $this, $this->getValues(), $modified);

  :param object $file: Current File model object
  :param array $values: The File model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0


before_file_save
----------------

.. function:: before_file_save($file, $values)

  Called before the file object is inserted or updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_file_save', $this, $this->getValues());

  :param object $file: Current File model object
  :param array $values: The File model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_file_save
---------------

.. function:: after_file_save($file, $values)

  Called after the file object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_file_save', $this, $this->getValues());

  :param object $file: Current File model object
  :param array $values: The File model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_file_delete
------------------

.. function:: before_file_delete($file, $values)

  Called before the file object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_file_delete', $this, $this->getValues());

  :param object $file: Current File model object
  :param array $values: The File model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_file_delete
-----------------

.. function:: after_file_delete($file, $values)

  Called after the file object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_file_delete', $this, $this->getValues());

  :param object $file: Current File model object
  :param array $values: The File model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_file_bulk_delete
-----------------------

.. function:: before_file_bulk_delete($delete_ids)

  Called before a bulk of file objects are deleted. If you need to do an
  expensive operation when files are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('before_file_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0

after_file_bulk_delete
----------------------

.. function:: after_file_bulk_delete($delete_ids)

  Called after a bulk of file objects are deleted. If you need to do an
  expensive operation when files are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('after_file_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0
