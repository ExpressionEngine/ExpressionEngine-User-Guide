.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Sync Directory
==============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Files --> Sync`

.. Overview

The Synchronize Files page allows you to synchronize the file records in
the database with the files stored in a given upload directory. To load this
page, click on the directory you wish to sync in the sidebar, then click on the
sync icon next to the title in the main content area.

When submitted, all allowed file types in the directory will be checked
against the file records in the database. If there is no record in the
database, one will be added. For images, any additional sizes will be
generated and watermarked according to the file upload preferences for
that directory.

Lastly, any records in the database that do not have a corresponding file in the main directory will be highlighted as not found.

.. Screenshot (optional)


.. Permissions

Permission Restrictions
-----------------------

* Files: Upload New Files

.. Fields
.. ------
..
.. .. contents::
..   :local:
..   :depth: 1
..
.. .. Each Field
..
