.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

###########################
Installing ExpressionEngine
###########################

.. important:: If you need to **update** your installation from an earlier version, see the :doc:`Update Instructions </installation/update>` instead.

Before getting started, make sure your web host and your browser meet all the :doc:`/installation/requirements` to run ExpressionEngine.

********************
1. Prep the Database
********************

You'll need an empty database and the following credentials handy to install ExpressionEngine. If you're not sure how to create a new database or find this information, ask your web host.

- MySQL Database Name
- MySQL Server Address *(often* ``127.0.0.1`` *or* ``localhost`` *or the server IP address)*
- MySQL Username
- MySQL Password

*******************
2. Upload the Files
*******************

:expressionengine:`Download the latest release of ExpressionEngine </>` and unzip the files to a folder on your computer. Then use your favorite FTP client to upload the files to a publicly-accessible directory on your server.

.. _file_permissions:

***********************
3. Set File Permissions
***********************

You need to enable write access to the following files and folders.

For Apache, that would be ``666`` for files and ``777`` for directories, in a worst-case scenario. You should check with your web host to see if more restrictive permissions can be used to allow PHP to write to files and directories. See :doc:`/troubleshooting/general/file_permissions` for details.

For IIS, provide all permissions to the IIS user for these files and directories.

- :file:`system/ee/`
- :file:`system/ee/*` (only top-level files and directories need modifying)
- :file:`system/user/config/config.php`
- :file:`system/user/cache/`
- :file:`system/user/templates/`
- :file:`images/avatars/`
- :file:`images/captchas/`
- :file:`images/member_photos/`
- :file:`images/pm_attachments/`
- :file:`images/signature_attachments/`
- :file:`images/uploads/`
- :file:`themes/ee/`
- :file:`themes/ee/*` (only top-level files and directories need modifying)
- :file:`themes/user/`

.. tip::

  On a Unix based system, you can use the following pattern to set permissions recursively to what you need for folders and files. In this example, we are setting all directories in `system/ee` to **755** and all files therein to **644**, recursively:

    .. code-block:: bash

      find system/ee \( -type d -exec chmod 755 {} \; \) -o \( -type f -exec chmod 644 {} \; \)

******************************
4. Run The Installation Wizard
******************************

#. Point your browser to the URL of the :file:`admin.php` file you uploaded. For example: ``https://example.com/admin.php``.

#. Follow the on-screen instructions to install ExpressionEngine.

    .. tip:: If you choose not to install the default theme, your site's homepage will appear blank because no templates or content has been created yet.

#. Once the Installation Wizard is finished, you *should* rename or remove the :file:`system/ee/installer/` directory from your server.


****************************
Welcome to ExpressionEngine!
****************************

You can now log in to your Control Panel at ``https://example.com/admin.php``!

If you're new to ExpressionEngine, get started with the classic :doc:`Hello, World! </how_to/hello-world>` example.

********************************
Post-Installation Best Practices
********************************

Once you are confident that ExpressionEngine is working normally on your server, we recommend a few :doc:`best practices </installation/best_practices>` for protecting your installation against common security risks.
