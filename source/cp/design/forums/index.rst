Forum Templates
===============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Template Manager --> Forums`

.. Overview

The ExpressionEngine Forums make use of "themes" to determine how they
are displayed. The Forum Module comes with a "default" theme, which is
located in your installation under themes/forum_themes/.

In order to edit the Templates inside the Control Panel, set the theme
folders and files to 666 permissions (for Windows servers, you need to
make them "writable").

If you plan to make changes to your theme, we recommend that you make a
copy of the themes/forum_themes/default/ directory, name it something
else, and make your changes to that one. You can easily switch
themes simply by choosing a new one under Default Preferences.

For anyone creating their own theme or modifying one, the original "PSD"
version of the "ExpressionEngine Forums" graphic `is available for
download <https://ellislab.com/asset/file/forum_logo_psd.zip>`_.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Template Management Allowed actions: Manage Template Settings
* Template Management Allowed actions: Create New Templates
* Template Management Allowed actions: Edit Templates
* Template Management Allowed actions: Delete Templates
* Template Management Allowed template groups

Actions
-------

.. contents::
  :local:
  :depth: 1

.. Each Action

.. include:: /cp/design/header.rst

Theme Selector
~~~~~~~~~~~~~~

The dropdown in the upper right corner of the table's container will select
which forum theme's templates are being managed.

Template Links
~~~~~~~~~~~~~~

This will take you to the template's :doc:`edit form <form>`.

Manage
~~~~~~

The icons in the manage column perform actions on the template in its row.

Edit
^^^^

This will take you to the template's :doc:`edit form <form>`.

.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  *