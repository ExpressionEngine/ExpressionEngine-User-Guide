###########################
Updating ExpressionEngine 3
###########################

This guide will help you update your site from a previous version of ExpressionEngine 3 to the latest version of ExpressionEngine 3.

.. important:: If you are upgrading from ExpressionEngine 2 to ExpressionEngine 3, see :doc:`/installation/upgrade_from_2.x`.

*********************
1. Backup and Prepare
*********************

#. Clear the cache in ExpressionEngine by going to :menuselection:`Tools --> Data --> Clear Caching`. Select **All Caches** and click Submit.

#. Back-up your ExpressionEngine database.

#. Back-up all of your ExpressionEngine files and directories.

#. Download the latest release of ExpressionEngine (either :elstore:`ExpressionEngine Core </#ee-core>` or the :elstore:`standard edition </manage>`, whichever your site is currently running) and unzip the files to a folder on your computer.

#. Take your site offline:

   #. Copy :file:`system/expressionengine/utilities/offline.html` to your web root directory (the same place you have your main :file:`index.php` file).

   #. Rename :file:`offline.html` to :file:`index.html`. Now your visitors will see the "offline" page while you update your site.

*************
2. Copy Files
*************

Now **copy** the following files from the backup of your current site to the newly downloaded ExpressionEngine 3.x directory:

#. Copy :file:`system/user/` to :file:`system/user/`

#. Copy :file:`themes/user/` to :file:`themes/user/`

***************
3. Upload Files
***************

On the server, move or rename the following directories and files:

- :file:`system/`
- :file:`themes/`
- :file:`index.php`
- :file:`admin.php`

.. note:: You can override the files instead of moving or renaming them.

***********************
4. Restore File Changes
***********************

Restore any modifications made to these files, such as updating the system directory name or path:

  - :file:`admin.php`
  - :file:`index.php`

.. note:: If you are using :doc:`/cp/sites/index`, the same should be done for each MSM site's :file:`index.php` and :file:`admin.php` file.

********************
5. Check Permissions
********************

Apache
======

These permissions are typical for PHP-based applications running on Apache, though you may want to check with your web host to see if more restrictive permissions can be used to allow PHP to write to files and directories.

Set this file to 666:

- :file:`system/user/config/config.php`

Set these directories (and their subdirectories) to 777:

- :file:`system/user/cache/`
- :file:`system/user/templates/`
- :file:`images/avatars/uploads/`
- :file:`images/captchas/`
- :file:`images/member_photos/`
- :file:`images/pm_attachments/`
- :file:`images/signature_attachments/`
- :file:`images/uploads/`

IIS
===

Provide all permissions to the IIS user for following directories *(and their subdirectories)*:

- :file:`system/user/cache/`
- :file:`system/user/templates/`
- :file:`images/avatars/uploads/`
- :file:`images/captchas/`
- :file:`images/member_photos/`
- :file:`images/pm_attachments/`
- :file:`images/signature_attachments/`
- :file:`images/uploads/`

************************
6. Run The Update Wizard
************************

Go to your site's control panel URL (typically found at ``http://example.com/admin.php`` or ``http://example.com/system/``) and follow the on-screen instructions to update ExpressionEngine.

.. _update_cleanup:

***********
7. Clean up
***********

1. Remove the offline :file:`index.html` file that was added to your web root in Step 1.

2. If the updater could not automatically rename the installer, rename or remove :file:`system/installer/` directory manually.

.. note:: The installer directory can be safely removed after installing ExpressionEngine.

3. Review the :doc:`Version Notes </installation/version_notes>` since they outline any version-specific changes that you may need to make to your installation.

You're Done! ExpressionEngine is now fully updated.
