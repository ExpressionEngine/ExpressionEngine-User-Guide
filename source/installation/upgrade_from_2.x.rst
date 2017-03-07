#################################
Upgrading from ExpressionEngine 2
#################################

.. important:: Third-party add-ons from 2.x will not work with ExpressionEngine 3. Check with each the add-on authors to see if there are updates available. If you maintain your own add-ons, please see the :doc:`/development/conversion/index`.

 Uninstall any 2.x add-ons that will not be used in 3.x before upgrading to 3.x.

 If needed, the `Playa & Matrix Importer <https://github.com/EllisLab/PlayaMatrixImporter>`_ should be run while still on 2.x.

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

1. Copy :file:`system/expressionengine/config/config.php` to :file:`system/user/config/config.php`

2. Copy :file:`system/expressionengine/config/database.php` to :file:`system/user/config/database.php`

3. If you have any languages other than English in your Control Panel, copy all files and directories  *except* ``english`` from :file:`system/expressionengine/language/` to :file:`system/user/language/`.

4. If you have the forum module installed, copy the directory :file:`themes/forum_themes/` to :file:`themes/user/forum/`.

5. If you have the wiki module installed, copy the directory :file:`themes/wiki_themes/` to :file:`themes/user/wiki_themes/`.

6. If you save templates as files, copy all files and directories from :file:`system/expressionengine/templates/` to :file:`system/user/templates/`.

.. note:: If any of your third party add-ons have updates, we recommend downloading them and putting them into the :file:`system/user/addons/` directory now.

***************
3. Upload Files
***************

On the server, rename the following files and directories:

- Rename :file:`system/` to :file:`system_old/`
- Rename :file:`themes/` to :file:`themes_old/`
- Rename :file:`index.php` to :file:`index.php.old`
- Rename :file:`admin.php` to :file:`admin.php.old`

Then upload the following files and directories:

-  :file:`system/`
-  :file:`themes/`
-  :file:`index.php`
-  :file:`admin.php`

.. note:: If you've moved your system directory, make sure to change both :file:`index.php` and :file:`admin.php` to point to the correct directory.

********************
4. Check Permissions
********************

Apache
======

You need to enable write access to the following files and folders. In a worst-case scenario that would be ``666`` for files and ``777`` for directories. You should check with your web host to see if more restrictive permissions can be used to allow PHP to write to files and directories. See :doc:`/troubleshooting/general/file_permissions` for details.

Make this file writable:

- :file:`system/user/config/config.php`

Make these directories (and their subdirectories) writable:

- :file:`system/user/cache/`
- :file:`system/user/templates/`

IIS
===

Provide all permissions to the IIS user for following directories *(and their subdirectories)*:

- :file:`system/user/cache/`
- :file:`system/user/templates/`

**************
5. Run Upgrade
**************

Go to your site's control panel URL (typically found at ``http://example.com/admin.php`` or ``http://example.com/system/``) and follow the on-screen instructions to upgrade ExpressionEngine.

***********
6. Clean up
***********

1. Remove or rename the offline :file:`index.html` file from your site.

2. If the updater could not automatically rename the installer, rename or remove :file:`system/ee/installer/` directory manually.

    .. note:: The installer directory can be safely removed after installing ExpressionEngine.

3. Review any :doc:`Version Notes </installation/version_notes>` since they outline any version-specific changes that you may need to make to your installation.

4. Review our :doc:`best practices </installation/best_practices>` for recommendations on protecting your installation against common security risks.

5. Go to the Add-On Manager and run the updates for any of your compatible add-ons.

    .. rst-class:: cp-path

    **Control Panel Location:** :menuselection:`Developer Menu --> Add-On Manager`


You're Done! ExpressionEngine is now fully upgraded.
