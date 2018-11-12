.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Template Routes
===============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Templates --> Template Routes`

.. Overview

The Template Route Manager shows all templates that are assigned a template route and
allows you to add, edit and manage your Template Routes.

Routes are listed in the order that the Template Router will match your
templates.

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

Route
~~~~~

This route determines the URLs that will match your template. The
format is as follows:

.. code-block:: none

	/segment/{variable}/{variable:rule}/{variable:rule0|rule1[arg]}

For more info see: :doc:`/urls/template_routes`

Require all Segments?
~~~~~~~~~~~~~~~~~~~~~

If set to "yes" all segments defined in your Template Route must be contained in a URL in order for it to match.

If set to "no" and static variables are used in the route, all variables will still be required in order for the URL to match the route. For example, ``/add/{url_title:alpha_dash}`` will not match the URL /add. It requires a third segment to match.

In order to use static variables and not require all variables, use a regular expression match in place of a static variable. In the example above, replace the static variable ``add`` with a regular expression match.  The resulting route would look like:

.. code-block:: none

	/{seg1:regex[(add)]}/{url_title:alpha_dash}

Create New
~~~~~~~~~~

Creates a new row where you may add a new route, specifying the template, the route and whether segments are required.

