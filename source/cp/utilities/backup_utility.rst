.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Database Backup Utility
=======================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Utilities --> Backup Utility`

.. Overview

This utility allows you to make simple SQL dump backups of your ExpressionEngine database. For file backups, or more robust and automated database backup options, please refer to :doc:`Back-up your ExpressionEngine database and files </operations/database_backup>`.

When you click "Backup Database", a SQL dump will be created and stored in your ``system/user/cache/`` folder, named based on the date and time of the backup, e.g.: ``my_database_2017-10-20_09h20mPDT.sql``

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access Tools sections: Utilities
* Access Tools sections: SQL Management
