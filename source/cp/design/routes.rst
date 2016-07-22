Template Routes
===============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Template Routes`

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

If set to "yes" all segments defined in your Template Route must
be contained in a URL in order for it to match.

Create New
~~~~~~~~~~

Creates a new row where you may add a new route, specifying the template, the route and whether segments are required.

