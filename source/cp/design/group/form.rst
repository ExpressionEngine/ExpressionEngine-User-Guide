Create/Edit Template Group
==========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Templates --> New/Edit`

.. Overview


.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Template groups: Create New Groups
* Template groups: Edit Groups

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Name
~~~~

The name of the Template Group. This must be a single word with no spaces. You may use the letters a-z, the numbers 0-9, and the underscore and hyphen/dash characters. You should refrain from creating all-numeric Template Group names as they can cause confusion with Entry IDs used in URLs.

Duplicate existing group?
~~~~~~~~~~~~~~~~~~~~~~~~~

You can optionally choose to base your new group on an existing one.

.. note:: This will only be available when creating a Template Group.

Make default group?
~~~~~~~~~~~~~~~~~~~

ExpressionEngine requires that the "index" template in one of your
template groups be considered your site default page. This page will be
shown if **only** the Template Group is specified in the URL. For
example::

    http://example.com/index.php/template_group/
