.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Member Profile Templates
========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Templates --> Members`

.. Overview

The public profile area has its own set of templates which can be edited
to change the look. You'll find the templates located at::

  themes/ee/member/default/

A good strategy is to make a copy of the entire **default** templates folder,
then edit your copy so you can leave the **default** files intact. Save your new copy to::

  themes/user/member/custom_theme_name/

You can set your new copy as the site default under :menuselection:`Settings --> Members`

.. note:: When building your member profile templates, consider that any
  external links will pass along referrer data. This can cause security
  problems if someone clicks on an external link from a secure page. For
  example, if a user clicks an external link from the password reset
  page, the external site *could* use the password reset link from the
  referrer data to gain access to a user's account.

  You can strip everything but the base URL by linking to
  ``{path=""}?URL=<your url>``.

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

.. include:: /cp/design/_header.rst

Theme Selector
~~~~~~~~~~~~~~

The dropdown in the upper right corner of the table's container will select
which member theme's templates are being managed.

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