Categories
==========

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Categories`

.. Overview

This section of the Control Panel is for the management of channel
categories. It is where categories and category groups are created,
deleted, and preferences are set.

Category groups are *collections* of categories that can be assigned to
channels. You can create a separate group for each channel or use the
same group on multiple channels.

The main Categories screen shows a list of all current category groups in the left navigation and a sortable table of the categories in the currently selected category group.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Channel categories: Create Categories
* Channel categories: Edit Categories
* Channel categories: Delete Categories

Actions
-------

.. contents::
  :local:
  :depth: 1

.. Each Action

.. include:: /cp/channel/_header.rst

Sidebar
~~~~~~~

New
^^^

Create a new category group.  This will take you to the category group :doc:`create form <form>`.

Category Group Links
^^^^^^^^^^^^^^^^^^^^

Specify the category group of the categories displayed in the main table.

Edit Category Group
^^^^^^^^^^^^^^^^^^^

This will take you to the :doc:`category group's edit form <form>`.

Remove Category Group
^^^^^^^^^^^^^^^^^^^^^

This will remove the indicated category group, all categories in that group, and unassign any entries currently assigned to that group. Removing a category group will cause a
confirmation modal to appear that will summarize the action.


Main Table
~~~~~~~~~~

Create New
~~~~~~~~~~

This will take you to the category :doc:`create form <form-cat>`.

Order
~~~~~

The reorder icon in the left-most column of the table allows you to reorder
the categories by dragging and dropping the rows.

Edit
~~~~

This will take you to the category edit :doc:`edit form <form-cat>`.

Bulk Actions
~~~~~~~~~~~~

The checkbox in the right-most column of the table selects a button for a bulk
action. When at least one checkbox is checked the bulk action dropdown menu and
submit button will be made available in the lower righthand corner of the table.

Remove
^^^^^^

The selected categories will be removed. Removing a category will
cause a confirmation modal to appear that will summarize the action.


.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  cat-list
  form
  */index
