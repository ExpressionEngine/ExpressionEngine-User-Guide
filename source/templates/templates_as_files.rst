.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Saving Templates as Text Files
==============================

ExpressionEngine supports saving Template Groups, Templates, Global Variable, and
Template Partials as regular folders and files on your server, so that you can
use your preferred text editor (e.g. Dreamweaver, Coda, BBEdit, etc.) to edit
Templates and then FTP the changes to the server.

-  Template Group folder names must end with *.group* and the preceding
   name must be URL safe (contain only letters, numbers, dashes,
   underscores and dots).
-  Template Files must be in an appropriately named group folder. They
   must end with an approved extension and must be URL safe. Approved
   extensions and the associated template type they will result in are:

   -  *.html* creates a 'webpage' template type
   -  *.feed* creates an 'rss' template type
   -  *.css* creates a 'css' template type
   -  *.js* creates a 'js' template type
   -  *.xml* creates an 'xml' template type
-  Template group names (not including the .group) and template names (not including the .extension) are limited to 50 characters.  Anything longer than that will be truncated by the database and fail to match the file.

Enabling Saving Templates as Files
----------------------------------

By default, templates are saved to the ``system/user/templates`` directory.

Troubleshooting
~~~~~~~~~~~~~~~

If templates are not saved as files, first check your folder permissions.  The ``system/user/templates`` folder must be writable. See :doc:`/troubleshooting/general/file_permissions` for details.

If your permissions are correct, check to see if the :ref:`configuration override <overrides-save-tmpl-files>` is being used.


Creating and Synchronizing Templates and Files
----------------------------------------------

Once your site is set up to save templates as text files, the files and the
database will be kept in sync automatically. An edited or newly created template
file is synced when it is used in any way; this includes loading it on the frontend
or opening it in the Template Editor.

.. note:: The templates are kept in sync based on their edit date. If the
   flat file has been edited more recently than the database, then its contents
   will be copied to the database. Similarly, if the database version is newer
   than the file, or a file does not exist, then the file will be written from
   the information in the database.

Deleting Templates Saved as Files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Templates can only be deleted in the :doc:`Template Manager </cp/design/index>`.
Deleting a template file will not remove it from the database and the file will
be recreated the next time that database entry is seen.

Saved Templates and the Multiple Site Manager
---------------------------------------------

Sites under the Multiple Site Manager have their own preferences for
saving templates as text files. As such, when setting up a new Site
under the Multiple Site Manager, you must set up a new location for
saving those templates.

When importing or duplicating to a new Site in the Multiple Site
Manager, if you wish to use existing templates which are saved as text
files, then the template directory must be manually copied to the
directory for the new Site.
