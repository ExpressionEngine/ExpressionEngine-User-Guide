.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Member Import
=============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Utilities --> Member Import`

.. Overview

The Member Import Utility enables you to import members from other systems
utilizing ExpressionEngine's :doc:`special Member Import XML format <member-import-xml-format>`.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access Tools sections: Utilities
* Access Tools sections: Import

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

XML file location
~~~~~~~~~~~~~~~~~

Server path to your xml file.

Member group
~~~~~~~~~~~~

The member group to assign to each imported member.

Language
~~~~~~~~

The language to assign to each imported member

Timezone
~~~~~~~~

The timezone to assign to each imported member.

Date &amp; time format
~~~~~~~~~~~~~~~~~~~~~~

The date and time format to assign to each imported member.

Show Seconds?
~~~~~~~~~~~~~

Whether or not to display seconds when displaying time for each imported member.

Create custom fields?
~~~~~~~~~~~~~~~~~~~~~

When set to yes, import will automatically create custom member fields for any
data that does not match a default member field.

.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  member-import-xml-format
