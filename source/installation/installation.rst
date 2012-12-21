Installing ExpressionEngine
===========================

.. important:: If you need to **update** your copy of ExpressionEngine
   from an earlier version, use the :doc:`Update Instructions </installation/update>`
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

   -  :file:`system/expressionengine/cache/`
   -  :file:`images/avatars/uploads/`
   -  :file:`images/captchas/`
   -  :file:`images/member\_photos/`
   -  :file:`images/pm\_attachments/`
   -  :file:`images/signature\_attachments/`
   -  :file:`images/uploads/`

4. Run The Installation Wizard
------------------------------

-  Point your browser to the URL of the admin.php file you uploaded. For
   example: http://example.com/admin.php
-  Follow the on-screen instructions to
   install ExpressionEngine. Note that if you choose the "None - Empty
   Installation" Site Theme during this step, your site's homepage will
   appear blank since no templates will be created automatically for
   you.
-  Once the Installation Wizard is finished, you **must** remove the
   following folder from your server:

   -  :file:`system/installer/`

Welcome to ExpressionEngine!
----------------------------

You can now log in to your Control Panel using admin.php or follow the
links provided in the Installation Wizard confirmation screen.

.. tip:: If you chose the "None - Empty Installation" Site Theme in Step
   4, your site's homepage will appear blank because no templates or data
   have been created yet.

If you're new to ExpressionEngine, begin the learning process by
reading through the :doc:`User Guide </index>`.

Post-Installation Best Practices
--------------------------------

Once you are confident that ExpressionEngine is working normally on your
server, there are :doc:`recommended best practices
</installation/best_practices>` for protecting your installation against
common security risks.


