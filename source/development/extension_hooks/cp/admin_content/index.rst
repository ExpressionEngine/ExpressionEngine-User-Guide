Admin Content Controller Extension Hooks
========================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

category_delete
---------------

.. function:: category_delete($cat_ids)

  This hook is executed when a category is deleted via the control
  panel. It can be used to perform additional actions before the
  category is deleted.

  How it's called::

    ee()->extensions->call('category_delete', $cat_ids);

  :param array $cat_ids: Array of category IDs being deleted
  :rtype: Void

  .. versionadded:: 2.7.0

category_save
-------------

.. function:: category_save($cat_id, $data)

  This hook is executed when a new category is saved or an existing
  category was edited via the control panel. It can be used to perform
  additional actions after the category is saved.

  How it's called::

    ee()->extensions->call('category_save', $cat_id, $category_data);

  :param int $cat_id: ID of category saved
  :param array $category_data: Category meta data
  :rtype: Void

  .. versionadded:: 2.7.0

foreign_character_conversion_array
----------------------------------

See Content_publish's :func:`foreign_character_conversion_array`.
