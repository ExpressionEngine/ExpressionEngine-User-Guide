Upgrading from ExpressionEngine 3
=================================

This guide will help you update your site from ExpressionEngine 3 to the latest version of ExpressionEngine 4.

.. seealso:: If you are upgrading from ExpressionEngine 2, you must first upgrade to ExpressionEngine 3 seperately.  Use the version 3 files and see `Upgrading from ExpressionEngine 2 <https://docs.expressionengine.com/v3/installation/upgrade_from_2.x.html>`__.

1. Backup and Prepare
---------------------

#. :doc:`Back-up your ExpressionEngine database and files </operations/database_backup>`.

#. Download the latest release of ExpressionEngine (either :elstore:`ExpressionEngine Core </#ee-core>` or the :elstore:`standard edition </manage>`, whichever your site is currently running) and unzip the files to a folder on your computer.

.. note:: Check your third-party add-ons to see if you need updated versions for v4. Most add-ons do not need updating from v3, or only need minor changes. Your add-on vendor(s) can let you know what, if anything, you need to do for your installed add-ons.

2. Copy Files
-------------

Working either locally with your backed up files, or on the server (**not recommended**), **copy** the following files from the newly downloaded release to your site:

#. Copy :file:`admin.php` to :file:`admin.php`

#. Copy :file:`index.php` to :file:`index.php`

#. Copy :file:`system/ee/` to :file:`system/ee/`

#. Copy :file:`themes/ee/` to :file:`themes/ee/`

#. Copy :file:`system/user/config/license.key` to :file:`system/user/config/license.key`. If there is no :file:`license.key`, skip this step.

.. note:: If you’ve moved your system directory, make sure to change both :file:`index.php` and :file:`admin.php` to point to the correct directory. And don't forget to update **all** :file:`admin.php` files if you're running your control panel from multiple Sites!

3. Run The Update Wizard
------------------------

Go to your site's control panel URL (typically found at ``https://example.com/admin.php`` or ``https://example.com/system/``) and follow the on-screen instructions to update ExpressionEngine.

4. Clean up
-----------

You're Done! ExpressionEngine is now fully updated. But before you go...

- If the updater could not automatically rename the installer, rename or remove :file:`system/ee/installer/` directory manually. The installer directory can be safely removed after installing ExpressionEngine.

- To enable one-click updating, make sure your :ref:`file permissions <file_permissions>` are all set.

- Review the :doc:`Version Notes </installation/version_notes>` since they outline any version-specific changes that you may need to make to your installation.

- Review :ref:`file permissions <file_permissions>` if something isn't working quite right.
