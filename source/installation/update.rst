Updating from a Previous Version of ExpressionEngine
====================================================

This page describes the process for updating from a previous version of
ExpressionEngine 2 to the latest version of ExpressionEngine 2.

.. important:: If you are updating from ExpressionEngine 1.x use the
   `Updating from 1.x to ExpressionEngine 2.x <update_from_1.x.html>`_
   instructions.

1. Prepare and Back-up
----------------------

-  Back-up your ExpressionEngine database.
-  Back-up all ExpressionEngine files and folders.
-  `Download <https://secure.expressionengine.com/download.php>`_ the
   most current version of ExpressionEngine and unzip the software to
   your local computer.
-  Take Your Site Offline
   It is recommended that you take your site offline for the duration of
   the update so that people visiting your site won't see any PHP errors
   or other anomalies that may occur while you are uploading files. Here
   is one approach:

   #. Copy system/expressionengine/utilities/offline.html to your web
      root folder (the same place you have your main index.php file).
   #. Rename offline.html to index.html. Now your visitors will see the
      "offline" page while you update your site.

-  In your ExpressionEngine Control Panel, go to Tools > Data > Clear
   Caching. Select **All Caches** and click Submit.

2. Upload New Files
-------------------

Using an FTP program such as WS\_FTP, SmartFTP, Transmit or Fetch,
replace the following files and folders on your server with their new
versions:

-  admin.php
-  index.php
-  system/
-  themes/

3. Restore Modified Files
-------------------------

Files and settings that are specific to your site should now be restored
from the backup you made in Step 1.

-  Restore any modifications made to the following files, such as
   updating the system folder name or path:

   -  admin.php
   -  index.php

If you are using the `Multiple Site
Manager <http://expressionengine.com/user_guide/cp/sites/index.html>`_,
the same should be done for each MSM site's index.php and/or admin.php
file.

-  Restore the following files from your backup:

   -  system/expressionengine/config/config.php
   -  system/expressionengine/config/database.php

-  Restore the following folders from your backup:

   -  system/expressionengine/language/ (if you are using a language
      pack or previously modified the English language files)
   -  system/expressionengine/third\_party/
   -  system/expressionengine/templates/
   -  themes/third\_party/ (if it exists, and any additional third-party
      theme folders you had previously)

4. Verify File Permissions
--------------------------

If you are on `EngineHosting <http://enginehosting.com>`_ you can skip
this step. For other Unix hosts the following is typical, but you may
check with your host to see if more restrictive permissions can be used
to allow PHP to write to files (666) and folders (777). On Windows
servers the following will not apply, but you will need to ensure that
the files and folders are writable by ExpressionEngine. You may need to
contact your host for this.

-  Set the following files to 666:

   -  system/expressionengine/config/config.php
   -  system/expressionengine/config/database.php

-  Set the following folders to 777:

   -  system/expressionengine/cache/ (and subfolders)

5. Run The Update Wizard
------------------------

-  Point your browser to the URL of your admin.php file. For example:
   http://example.com/admin.php
-  Follow the on-screen instructions to update ExpressionEngine.
-  Once the Update Wizard is finished, remove the following folder from
   your server:

   -  system/installer/

6. Update Add-ons
-----------------

-  If the Discussion Forum or Multiple Site Manager are installed, these
   need to be updated at this time:

   -  `Discussion Forum Update
      Instructions <../modules/forum/forum_update.html>`_
   -  `MSM Update Instructions <../cp/sites/install.html>`_

-  Update any third-party add-ons by following the update instructions
   for each add-on.

.. _update-additional-steps:

7. Additional Steps
-------------------

Please review the following to determine if any additional steps need to
be taken:

-  The `Version Notes <version_notes.html>`_ will outline any
   version-specific changes that may need to be made.
-  If you're updating from a previous version, you may have a \_thumb
-  If you use a local version of the documentation, replace your copy
   with the latest from our `Download
   Area <https://secure.expressionengine.com/download.php>`_.

You're Done!
------------

ExpressionEngine is now fully updated.


