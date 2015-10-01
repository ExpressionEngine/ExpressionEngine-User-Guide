Template Variables
==================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Template Variables`

.. Overview

In this section of the Control Panel you can define custom data that you would
like to be available globally in any Template. This is in addition to the
standard :doc:`/templates/globals/index` that are already available.

You could create a Global Variable for any number of purposes. One idea
would be for a piece of copyright text that would be included on every
page. By making it a Global Variable you can change it in one place and
immediately see the effects everywhere.

Global Variables can contain text, HTML, javascript, etc. but cannot
contain PHP code or ExpressionEngine tags that you wish to have parsed.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Template variables: Create New Variables
* Template variables: Edit Variables
* Template variables: Delete Variables

Actions
-------

.. contents::
  :local:
  :depth: 1

.. Each Action

.. include:: /cp/design/header.rst

Create New
~~~~~~~~~~

This will take you to the :doc:`create template form <form>`.

variable Links
~~~~~~~~~~~~~

This will take you to the template variable's :doc:`edit form <form>`.

Manage
~~~~~~

The icons in the manage column perform actions on the template variable in its row.

Edit
^^^^

This will take you to the template variable's :doc:`edit form <form>`.

Find
^^^^

This will perform a search for the template variable, showing all the templates
that use it.

Bulk Actions
~~~~~~~~~~~~

The checkbox in the right-most column of the table selects a button for a bulk
action. When at least one checkbox is checked the bulk action dropdown menu and
submit button will be made available in the lower righthand corner of the table.

Remove
^^^^^^

The selected template variables will be removed. Removing a template variable
will cause a confirmation modal to appear that will summarize the action.

Export variables
^^^^^^^^^^^^^^^

The selected template variables will be zipped and downloaded.

.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  *