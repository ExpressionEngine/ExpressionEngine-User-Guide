.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

SQL Manager
===========

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Utilities --> SQL Manager`

.. Overview

This section of the Control Panel allows you to manage your database.
You can view information about the database, run queries, optimize your
tables, and more.

The main SQL Manager screen shows a table of your basic database
information.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access Tools sections: Utilities
* Access Tools sections: SQL Management

Actions
-------

.. contents::
  :local:
  :depth: 1

.. Each Action

Search
~~~~~~

This will search tables by table name.

Manage
~~~~~~

View
^^^^

This will run a ``SELECT * FROM`` :doc:`query <query>` for the table.

Bulk Actions
~~~~~~~~~~~~

The checkbox in the right-most column of the table selects a button for a bulk
action. When at least one checkbox is checked the bulk action dropdown menu and
submit button will be made available in the lower righthand corner of the table.

Repair
^^^^^^

This performs a standard SQL "repair" on your selected tables. Tables can
occasionally become corrupted, which is typically repairable using this option.

Optimize
^^^^^^^^

This will perform an optimization on your selected tables, which you are
encouraged to run occasionally to eliminate database fragmentation.
