Installing ExpressionEngine
===========================

.. important:: If you need to **update** your copy of ExpressionEngine
   from an earlier version, use the `Update Instructions <update.html>`_
   instead.

1. Get Your Settings
--------------------

Have the following pieces of information ready before you install
ExpressionEngine. If you do not know what they are, please contact your
host.

#. **MySQL Database Name**
#. **MySQL Server Address** (often "localhost" or the server IP address)
#. **MySQL Username**
#. **MySQL Password**

.. note:: You will need to either create your database or have an
   existing, empty database ready before running the installer. This is
   typically done with phpMyAdmin or through your hosting account's control
   panel.

2. Upload the Files
-------------------

Using an FTP program such as WS\_FTP, SmartFTP, Transmit or Fetch,
upload the ExpressionEngine files to a publicly accessible folder on
your server.

3. Set File Permissions
-----------------------

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

   -  /system/expressionengine/cache/
   -  /images/avatars/uploads/
   -  /images/captchas/
   -  /images/member\_photos/
   -  /images/pm\_attachments/
   -  /images/signature\_attachments/
   -  /images/uploads/

4. Run The Installation Wizard
------------------------------

-  Point your browser to the URL of the admin.php file you uploaded. For
   example: http://example.com/admin.php
-  Follow the `on-screen instructions <installation_wizard.html>`_ to
   install ExpressionEngine. Note that if you choose the "None - Empty
   Installation" Site Theme during this step, your site's homepage will
   appear blank since no templates will be created automatically for
   you.
-  Once the Installation Wizard is finished, you **must** remove the
   following folder from your server:

   -  system/installer/

Welcome to ExpressionEngine!
----------------------------

You can now log in to your Control Panel using admin.php or follow the
links provided in the Installation Wizard confirmation screen.

.. tip:: If you chose the "None - Empty Installation" Site Theme in Step
   4, your site's homepage will appear blank because no templates or data
   have been created yet.

If you're new to ExpressionEngine, begin the learning process by
following the `Getting
Started <http://expressionengine.com/user_guide/overview/index.html>`_
tutorial.

Post-Installation Best Practices
--------------------------------

Once you are confident that ExpressionEngine is working normally on your
server, there are `recommended best practices <best_practices.html>`_
for protecting your installation against common security risks.


