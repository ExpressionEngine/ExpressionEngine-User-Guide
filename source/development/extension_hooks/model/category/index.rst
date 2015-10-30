Category Model Extension Hooks
==============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

before_category_insert
----------------------

.. function:: before_category_insert($this, $values)

  Called before the category object is inserted. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_insert', $this, $this->getValues());

  :param object $this: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_category_insert
---------------------

.. function:: after_category_insert($this, $values)

  Called after the category object is inserted. Changes made to the object
  object will **not** be saved automatically. Saving the object may trigger the
  save and update hooks.

  How it's called::

    ee()->extensions->call('after_category_insert', $this, $this->getValues());

  :param object $this: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_category_update
----------------------

.. function:: before_category_update($this, $values, $modified)

  Called before the category object is updated. Changes made to the
  object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_update', $this, $this->getValues(), $modified);

  :param object $this: Current Category model object
  :param array $values: The Category model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_category_update
---------------------

.. function:: after_category_update($this, $values, $modified)

  Called after the category object is updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_category_update', $this, $this->getValues(), $modified);

  :param object $this: Current Category model object
  :param array $values: The Category model object data as an array
  :param array $modified: An array of all the old values that were changed
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0


before_category_save
--------------------

.. function:: before_category_save($this, $values)

  Called before the category object is inserted or updated. Changes made to
  the object will be saved automatically.

  How it's called::

    ee()->extensions->call('before_category_save', $this, $this->getValues());

  :param object $this: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_category_save
-------------------

.. function:: after_category_save($this, $values)

  Called after the category object is inserted or updated. Changes made to the
  object will **not** be saved automatically. Calling save may fire additional
  hooks.

  How it's called::

    ee()->extensions->call('after_category_save', $this, $this->getValues());

  :param object $this: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

before_category_delete
----------------------

.. function:: before_category_delete($this, $values)

  Called before the category object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('before_category_delete', $this, $this->getValues());

  :param object $this: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0

after_category_delete
---------------------

.. function:: after_category_delete($this, $values)

  Called after the category object is deleted. If you are conditionally
  deleting one of your own models, please consider creating an :ref:`inverse
  relationship <third_party_relationships>` instead. This will provide
  better performance and strictly enforce data consistency.

  How it's called::

    ee()->extensions->call('after_category_delete', $this, $this->getValues());

  :param object $this: Current Category model object
  :param array $values: The Category model object data as an array
  :returns: void
  :rtype: NULL

  .. versionadded:: 3.1.0
