Updating ExpressionEngine 2
===========================

This page describes the process for updating from a previous version of
ExpressionEngine 2 to the latest version of ExpressionEngine 2.

.. important:: If you are upgrading from ExpressionEngine 1.x use
   the :doc:`Upgrading from 1.x to ExpressionEngine 2.x </installation/upgrade_from_1.x>`
   instructions.

1. Prepare and Back-up
----------------------

-  Back-up your ExpressionEngine database.
-  Back-up all ExpressionEngine files and folders.
-  `Download <https://store.ellislab.com/manage>`_ the
   most recent release of ExpressionEngine and unzip the software to
   your local computer.
-  Take Your Site Offline
   It is recommended that you take your site offline for the duration of
   the update so that people visiting your site won't see any PHP errors
   or other anomalies that may occur while you are uploading files. Here
   is one approach:

   #. Copy :file:`system/expressionengine/utilities/offline.html` to
      your web root folder (the same place you have your
      main :file:`index.php` file).
   #. Rename offline.html to index.html. Now your visitors will see the
      "offline" page while you update your site.

-  In your ExpressionEngine Control Panel, go to :menuselection:`Tools
   --> Data --> Clear Caching`. Select **All Caches** and click Submit.

2. Upload New Files
-------------------

Using an FTP program such as WS\_FTP, SmartFTP, Transmit or Fetch,
replace the following files and folders on your server with their new
versions:

-  :file:`admin.php`
-  :file:`index.php`
-  :file:`system/`
-  :file:`themes/`

3. Restore Modified Files
-------------------------

Files and settings that are specific to your site should now be restored
from the backup you made in Step 1.

-  Restore any modifications made to the following files, such as
   updating the system folder name or path:

   -  :file:`admin.php`
   -  :file:`index.php`

If you are using the :doc:`Multiple Site Manager </cp/sites/index>`, the
same should be done for each MSM site's :file:`index.php` and/or
:file:`admin.php` file.

-  Restore the following files from your backup:

   -  :file:`system/expressionengine/config/config.php`
   -  :file:`system/expressionengine/config/database.php`

-  Restore the following folders from your backup:

   -  :file:`system/expressionengine/language/` (if you are using a language
      pack or previously modified the English language files)
   -  :file:`system/expressionengine/third\_party/`
   -  :file:`system/expressionengine/templates/`
   -  :file:`themes/third\_party/` (if it exists, and any additional third-party
      theme folders you had previously)

4. Verify File Permissions
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

5. Run The Update Wizard
------------------------

-  Point your browser to the URL of your :file:`admin.php` file. For example:
   http://example.com/admin.php
-  Follow the on-screen instructions to update ExpressionEngine.
-  Once the Update Wizard is finished, remove the following folder from
   your server:

   -  :file:`system/installer/`

6. Update Add-ons
-----------------

-  If the Discussion Forum or Multiple Site Manager are installed, these
   need to be updated at this time:

   -  :doc:`Discussion Forum Update
      Instructions </modules/forum/forum_update>`
   -  :doc:`MSM Update Instructions </cp/sites/install>`

-  Update any third-party add-ons by following the update instructions
   for each add-on.

.. _update_additional_steps:

7. Additional Steps
-------------------

Please review the following to determine if any additional steps need to
be taken:

-  The :doc:`Version Notes </installation/version_notes>` will outline any
   version-specific changes that may need to be made.
-  If you're updating from a previous version, you might need to sync your file
   upload directories for files to work properly.

You're Done!
------------

ExpressionEngine is now fully updated.


