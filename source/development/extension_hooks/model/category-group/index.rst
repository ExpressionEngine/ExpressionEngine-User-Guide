CategoryGroup Model Extension Hooks
===================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_category_group_insert
----------------------------

.. function:: before_category_group_insert($category_group, $values)

  Called before the category group object is inserted. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_group_insert', $this, $this->getValues());

  :param object $category_group: Current CategoryGroup model object
  :param array $values: The CategoryGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_category_group_insert
---------------------------

.. function:: after_category_group_insert($category_group, $values)

  Called after the category group object is inserted. Changes made to the object object will **not** be saved automatically. Saving the object may trigger the save and update hooks.

  How it's called::

    ee()->extensions->call('after_category_group_insert', $this, $this->getValues());

  :param object $category_group: Current CategoryGroup model object
  :param array $values: The CategoryGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_category_group_update
----------------------------

.. function:: before_category_group_update($category_group, $values, $modified)

  Called before the category group object is updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_group_update', $this, $this->getValues(), $modified);

  :param object $category_group: Current CategoryGroup model object
  :param array $values: The CategoryGroup model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_category_group_update
---------------------------

.. function:: after_category_group_update($category_group, $values, $modified)

  Called after the category group object is updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_category_group_update', $this, $this->getValues(), $modified);

  :param object $category_group: Current CategoryGroup model object
  :param array $values: The CategoryGroup model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0


before_category_group_save
--------------------------

.. function:: before_category_group_save($category_group, $values)

  Called before the category group object is inserted or updated. Changes made to the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_group_save', $this, $this->getValues());

  :param object $category_group: Current CategoryGroup model object
  :param array $values: The CategoryGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_category_group_save
-------------------------

.. function:: after_category_group_save($category_group, $values)

  Called after the category group object is inserted or updated. Changes made to the object will **not** be saved automatically. Calling save may fire additional hooks.

  How it's called::

    ee()->extensions->call('after_category_group_save', $this, $this->getValues());

  :param object $category_group: Current CategoryGroup model object
  :param array $values: The CategoryGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_category_group_delete
----------------------------

.. function:: before_category_group_delete($category_group, $values)

  Called before the category group object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_category_group_delete', $this, $this->getValues());

  :param object $category_group: Current CategoryGroup model object
  :param array $values: The CategoryGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

after_category_group_delete
---------------------------

.. function:: after_category_group_delete($category_group, $values)

  Called after the category group object is deleted. If you are conditionally deleting one of your own models, please consider creating an :ref:`inverse relationship <third_party_relationships>` instead. This will provide better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_category_group_delete', $this, $this->getValues());

  :param object $category_group: Current CategoryGroup model object
  :param array $values: The CategoryGroup model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.3.0

before_category_group_bulk_delete
---------------------------------

.. function:: before_category_group_bulk_delete($delete_ids)

  Called before a bulk of category group objects are deleted. If you need to do an
  expensive operation when category groups are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('before_category_group_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0

after_category_group_bulk_delete
--------------------------------

.. function:: after_category_group_bulk_delete($delete_ids)

  Called after a bulk of category group objects are deleted. If you need to do an
  expensive operation when category groups are deleted, it may be more efficient to
  handle it in bulk here.

  How it's called::

    ee()->extensions->call('after_category_group_bulk_delete', $delete_ids);

  :param array $delete_ids: The primary key IDs of the models being deleted
  :returns: void
  :rtype: NULL

  .. versionadded:: 4.3.0
