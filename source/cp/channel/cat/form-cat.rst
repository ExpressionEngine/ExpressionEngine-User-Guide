.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Create/Edit Category
====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Categories --> New/Edit Category`

.. Overview


.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Channel categories: Create Categories
* Channel categories: Edit Categories
* Channel categories: Delete Categories

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Name
~~~~

The name of the new category. The name may include spaces.

URL title
~~~~~~~~~

The human readable category name used in the URL when using :doc:`Category
URL Titles in Links </cp/settings/content-design>`.

Description
~~~~~~~~~~~

A text description of your category.

Images
~~~~~~

This field is designed to allow you to associate an image with the
category.

Parent category
~~~~~~~~~~~~~~~

This drop-down list allows you to create a hierarchical relationship
between categories. The list dynamically contains all existing
categories for this category group. Selecting a parent category means
that the new category will be a "child" of the parent in the hierarchy.
The "None" option is available and will make the new category a "top
level" category with no parent.

Custom Fields
-------------

Any :doc:`custom category fields <tab-fields>` that exist for this category
group will be included in the form.
