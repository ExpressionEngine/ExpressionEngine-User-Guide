Category Model Extension Hooks
==============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_category_insert
----------------------

.. function:: before_category_insert($category, $values)

  Called before the category object is inserted. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_insert', $this, $this->getValues());

  :param object $category: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_category_insert
---------------------

.. function:: after_category_insert($category, $values)

  Called after the category object is inserted. Changes made to the object
  object will **not** be saved automatically. Saving the object may trigger the
  save and update hooks.

  How it's called::

    ee()->extensions->call('after_category_insert', $this, $this->getValues());

  :param object $category: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_category_update
----------------------

.. function:: before_category_update($category, $values, $modified)

  Called before the category object is updated. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_update', $this, $this->getValues(), $modified);

  :param object $category: Current Category model object
  :param array $values: The Category model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_category_update
---------------------

.. function:: after_category_update($category, $values, $modified)

  Called after the category object is updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_category_update', $this, $this->getValues(), $modified);

  :param object $category: Current Category model object
  :param array $values: The Category model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0


before_category_save
--------------------

.. function:: before_category_save($category, $values)

  Called before the category object is inserted or updated. Changes made to
  the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_save', $this, $this->getValues());

  :param object $category: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_category_save
-------------------

.. function:: after_category_save($category, $values)

  Called after the category object is inserted or updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_category_save', $this, $this->getValues());

  :param object $category: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_category_delete
----------------------

.. function:: before_category_delete($category, $values)

  Called before the category object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_category_delete', $this, $this->getValues());

  :param object $category: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_category_delete
---------------------

.. function:: after_category_delete($category, $values)

  Called after the category object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_category_delete', $this, $this->getValues());

  :param object $category: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_category_bulk_delete
---------------------------

.. function:: before_category_bulk_delete($delete_ids)

  Called before a bulk of category objects are deleted. If you need to do an
  expensive operation when categories are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('before_category_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0

after_category_bulk_delete
--------------------------

.. function:: after_category_bulk_delete($delete_ids)

  Called after a bulk of category objects are deleted. If you need to do an
  expensive operation when categories are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('after_category_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0
