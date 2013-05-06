Upgrading from ExpressionEngine 1
=================================

This page describes the process for upgrading from ExpressionEngine 1.x
to ExpressionEngine 2.x.

.. important:: Third-party add-ons from version 1.x will not work with
   ExpressionEngine 2.x. Please contact each add-on's author for a
   2.x-compatible version before upgrading, or your site may not function
   properly. The installer will automatically disable all extensions as
   part of the upgrade process.

1. Prepare for the Upgrade
--------------------------

-  Back-up your ExpressionEngine database.
-  Back-up all ExpressionEngine files and folders.
-  `Download <https://store.ellislab.com/manage>`_ the
   most current version of ExpressionEngine and unzip the software to
   your local computer.
-  It is recommended that you take your site offline for the duration of
   the upgrade so that people visiting your site won't see any PHP
   errors or other anomalies that may occur while you are uploading
   files. Here is one approach:

   #. Copy :file:`system/utilities/offline.html` to your web
      root folder (the same place you have your main :file:`index.php`
      file).
   #. Rename :file:`offline.html` to :file:`index.html`. Now your
      visitors will see the "offline" page while you upgrade your site.

-  In your ExpressionEngine Control Panel, go to
   :menuselection:`Admin --> Utilities --> Clear Cached Data Files`.
   Select **All Caches** and click Submit.

2. Rename Old Files and Folders
-------------------------------

Rename the following files and folders so that they will not conflict
with the new EE 2.x versions, but will still be available if it's
necessary to roll-back to 1.x for some reason.

-  Rename :file:`index.php` to :file:`index.php\_old`
-  Rename :file:`system/` to :file:`system\_old/` (you may have
   previously re-named "system" to something else)
-  Rename :file:`themes/` to :file:`themes\_old/`

3. Upload New Files
-------------------

Using an FTP program such as WS\_FTP, SmartFTP, Transmit or Fetch,
upload the following ExpressionEngine 2.x files and folders:

-  :file:`admin.php`
-  :file:`index.php`
-  :file:`system/`
-  :file:`themes/`

4. Restore Some 1.x Files
-------------------------

-  Copy your old 1.x version of :file:`system/config.php` to
   :file:`system/expressionengine/config/config.php`
-  If you saved your templates as flat files in 1.x, upload the contents
   of your 1.x :file:`system/templates/` directory to
   :file:`system/expressionengine/templates/default\_site/` and verify
   permissions on the folder are set to 777. The upgrader will sync your
   templates with the database and archive the old files.

.. important:: If running the Multiple Site Manager and saving templates
   as files, you will need to create template folders for each site and and
   copy your 1.x templates into the proper folders. The folders should
   reside in :file:`system/expressionengine/templates` and be the same
   as each Site Short Name.

For example, if you have 3 Sites:

-  default\_site
-  products
-  company\_news

You would copy the appropriate 1.x template files to each of:

-  :file:`system/expressionengine/templates/default\_site/`
-  :file:`system/expressionengine/templates/products/`
-  :file:`system/expressionengine/templates/company\_news/`

Ensure each folder is set to 777 permissions.

5. Verify File Permissions
--------------------------

The following permissions are typical for UNIX-based hosts. You may want to
check with your host to see if more restrictive permissions can be used
to allow PHP to write to files (666) and folders (777). On Windows
servers the following will not apply, but you will need to ensure that
the files and folders are writable by ExpressionEngine. You may need to
contact your host for this.

-  Set the following files to 666:

   -  :file:`system/expressionengine/config/config.php`
   -  :file:`system/expressionengine/config/database.php`

-  Set the following folders to 777:

   -  :file:`system/expressionengine/cache/` (and subfolders)

6. Run The Upgrade Wizard
-------------------------

-  Point your browser to the URL of your admin.php file. For example:
   http://example.com/admin.php
-  Follow the on-screen instructions to upgrade ExpressionEngine.
-  Once the Upgrade Wizard is finished, remove the following folder from
   your server:

   -  :file:`system/installer/`

7. Upgrade Add-ons
------------------

-  If the Discussion Forum or Multiple Site Manager are installed, these
   need to be upgraded at this time:

   -  :doc:`Discussion Forum Update
      Instructions </modules/forum/forum_update>`
   -  :doc:`MSM Update Instructions </cp/sites/install>`

-  Upgrade any third-party add-ons by following the upgrade instructions
   for each add-on.

8. Additional Steps
-------------------

Please review the following to determine if any additional steps need to
be taken:

-  The :doc:`Version Notes </installation/version_notes>` will outline any
   version-specific changes that may need to be made.

You're Done!
------------

ExpressionEngine is now fully upgraded.

Post-Installation Best Practices
--------------------------------

Once you are confident that ExpressionEngine 2.x is working normally on
your server, there are :doc:`recommended best practices
</installation/best_practices>` for protecting your installation against
common security risks.
