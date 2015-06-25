#################################
Upgrading from ExpressionEngine 2
#################################

.. important:: Third-party add-ons from 2.x will not work with ExpressionEngine
  3. Check with each the add-on authors to see if there are updates available.

*********************
1. Backup and Prepare
*********************

#. Back-up your ExpressionEngine database.

#. Back-up all of your ExpressionEngine files and directories.

#. Download the latest release of ExpressionEngine (either
   `ExpressionEngine Core <https://store.ellislab.com/#ee-core>`__ or the
   `standard edition <https://store.ellislab.com/manage>`__, whichever your site
   is currently running) and unzip the files to a folder on your computer.

#. Clear the cache in ExpressionEngine by going to
   :menuselection:`Admin --> Utilities --> Clear Cached Data Files`. Select
   **All Caches** and click Submit.

#. Take your site offline:

  #. Copy :file:`system/utilities/offline.html` to your web root directory (the
     same place you have your main :file:`index.php` file).
  #. Rename :file:`offline.html` to :file:`index.html`. Now your visitors will
     see the "offline" page while you update your site.

*************
2. Copy Files
*************

Now **copy** the following files from the backup of your current site to the
newly downloaded ExpressionEngine 3.x directory:

1. Copy :file:`system/expressionengine/config/config.php` to
   the :file:`system/user/config/config.php`

2. Copy :file:`system/expressionengine/config/database.php` to
   :file:`system/user/config/database.php`

3. If you have any languages other than English in your Control Panel, copy all
   files and directories  *except* ``english`` from
   :file:`system/expressionengine/language/` to :file:`system/user/language/`.

.. note:: If you have changed the paths for ``templates`` and/or ``third_party``
  using :doc:`/general/system_configuration_overrides`, you can safely ignore
  the following steps.

4. If you save templates as files, copy all files and directories from
   :file:`system/expressionengine/templates/` to :file:`system/user/templates/`.

5. If you have any third-party add-ons, copy all files and directories from
   :file:`system/expressionengine/third_party/` to :file:`system/user/addons/`.

   .. note:: If any of your add-ons have updates, we recommend downloading them
     and putting them into the :file:`system/user/addons/` directory now.

***************
3. Upload Files
***************

On the server, rename the following files and directories:

- Rename :file:`system/` to :file:`system_old/`
- Rename :file:`themes/` to :file:`themes_old/`
- Rename :file:`index.php` to :file:`index.php.old`

Then upload the following files and directories:

-  :file:`admin.php`
-  :file:`index.php`
-  :file:`system/`
-  :file:`themes/`

.. note:: If you've moved your system directory, make sure to change both
  :file:`index.php` and :file:`admin.php` to point to the correct directory.

********************
4. Check Permissions
********************

Apache
======

These permissions are typical for PHP-based applications running on Apache,
though you may want to check with your web host to see if more restrictive
permissions can be used to allow PHP to write to files and directories.

Set this file to 666:

- :file:`system/user/config/config.php`

Set these directories (and their subdirectories) to 777:

- :file:`system/user/cache/`
- :file:`system/user/templates/`

IIS
===

Provide all permissions to the IIS user for following directories *(and their
subdirectories)*:

- :file:`system/user/cache/`
- :file:`system/user/templates/`

**************
5. Run Upgrade
**************

Go to your site's control panel URL (typically found at
``http://example.com/admin.php`` or ``http://example.com/system/``) and follow
the on-screen instructions to upgrade ExpressionEngine.

***********
6. Clean up
***********

#. Remove or rename the offline :file:`index.html` file from your site.

#. If the updater could not automatically rename the installer, rename or remove
   :file:`system/installer/` directory manually.

#. Review any :doc:`Version Notes </installation/version_notes>` since they
   outline any version-specific changes that you may need to make to your
   installation.

#. Review our :doc:`best practices </installation/best_practices>` for
   recommendations on protecting your installation against common security
   risks.

You're Done! ExpressionEngine is now fully upgraded.
