Moving ExpressionEngine to Another Server
=========================================

The following steps outline the general procedure for moving
ExpressionEngine to another server. Please note that you may need to
perform additional steps if you are using any third-party add-ons that
store their own path configurations.

1. Verify Server Compatibility
------------------------------

Upload the :doc:`ExpressionEngine Server Wizard </installation/requirements>` to
the new server and run it to verify basic compatibility with
ExpressionEngine.

2. Synchronize Templates
------------------------

You can skip this step if you are not saving templates as files.

From the Control Panel, go to Design > Templates > Synchronize
Templates, select all templates and click Submit.

3. Back-up Database and Files
-----------------------------

-  Back-up your existing ExpressionEngine database.
-  Back-up all existing ExpressionEngine files and folders.

4. Prepare the New Database
---------------------------

Create a new, empty database on the new server and import the back-up
file you created in Step 3 into it. Typically this will be a SQL file
(or a ZIP file containing the SQL file).

5. Copy Files and Folders
-------------------------

Copy all ExpressionEngine files and folders from the old server to the
new server. At a minimum, this will typically include:

-  admin.php
-  index.php
-  images/
-  system/
-  themes/

6. Verify File Permissions
--------------------------

The following permissions are typical for UNIX-based hosts. You may want to
check with your host to see if more restrictive permissions can be used
to allow PHP to write to files (666) and folders (777). On Windows
servers the following will not apply, but you will need to ensure that
the files and folders are writable by ExpressionEngine. You may need to
contact your host for this.

-  Ensure the following files are set to 666:

   -  system/expressionengine/config/config.php
   -  system/expressionengine/config/database.php

-  Ensure the following folders are set to 777:

   -  /system/expressionengine/cache/
   -  /images/avatars/uploads/
   -  /images/captchas/
   -  /images/member\_photos/
   -  /images/pm\_attachments/
   -  /images/signature\_attachments/
   -  /images/uploads/

7. Update database.php
----------------------

Open system/expressionengine/config/database.php and update the settings
to match those of the new server.

8. Verify index.php and admin.php
---------------------------------

Verify that your site's root index.php and admin.php files have the
correct settings for the new server.

9. Log In and Update Paths
--------------------------

At this point, you should be able to log in to the Control Panel using
admin.php. If not, please verify that the settings made in Steps 7 and 8
are correct.

There are typically several areas of the Control Panel in which paths
may need to be updated, including:

-  Admin > General Configuration
-  Admin > Channel Administration > Channels
-  Admin > Security and Privacy > Captcha Preferences
-  Admin > System Administration > Emoticon Preferences
-  Content > Files > File Upload Preferences
-  Members > Preferences
-  Design > Templates > Global Preferences

10. Clear Caches
----------------

Go to Tools > Data > Clear Caching. Select **All Caches** and click
Submit.

You're Done!
------------

At this point, your site should be fully functional. Check to make sure
that there are no links still pointing to the previous server. It is
recommended that links be generated using the
:doc:`{path} </templates/globals/path>` or :ref:`{site\_url} <global-site_url>`
variables for maximum portability.
