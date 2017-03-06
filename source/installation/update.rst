Updating ExpressionEngine 4
===========================

This guide will help you update your site from a previous version of ExpressionEngine 4 to the latest version of ExpressionEngine 4.

.. seealso:: If you are upgrading from ExpressionEngine 3 to ExpressionEngine 4, see :doc:`/installation/upgrade_from_3.x`.

One-click Updating
------------------

ExpressionEngine offers a one-click updater to make updating fast and easy for you. When an update is available, you'll see the version number in the control panel turn yellow or red. Click the version number, and then click "Update Now".

TODO: Docs for command line once that's fleshed out

If you cannot use the one-click updater, you can still do a :ref:`manual update<manual_updating>`.

Troubleshooting
^^^^^^^^^^^^^^^

Below are potential issues you may run into while using ExpressionEngine's one-click updater.

"The following paths are not writable:"
"""""""""""""""""""""""""""""""""""""""

This error occurs when the process running the updater does not have proper filesystem permissions to move the new ExpressionEngine files into place. Take a look at the :ref:`Set File Permissions <file_permissions>` section of the installation guide to make sure corret permissions are set.

Cannot rollback a failed upgrade
""""""""""""""""""""""""""""""""

If an error occurs while ExpressionEngine is updating its files or database, the updater should provide a link to rollback to your previous installation. But in the rare case that doesn't work, here is how you can get back up and running again.

#. Navigate to :file:`system/user/cache/ee_update/backups/` and check to make sure there are backups in the :file:`system_ee` folders and :file:`themes_ee` folders.
#. Delete the contents of :file:`system/ee/` and move the contents of :file:`system_ee` to :file:`system/ee/`.
#. Delete the contents of :file:`themes/ee/` and move the contents of :file:`themes_ee` to :file:`themes/ee/`.
#. If there is an SQL file located at :file:`system/user/cache/ee_update/database.sql`, import that into your database to rollback database changes.
#. Open :file:`system/user/config/config.php` and set the ``is_system_on`` config to ``y``.

At this point, your site should be restored and you should be able to re-enter your control panel.

If there are no files in your backup directory, it's likely the updater failed before it could make a backup and your files and database are still intact. You likely just need to remove the folder located at :file:`system/ee/updater/` to access your control panel again.

.. _manual_updating:

Manual Updating
---------------

If you cannot use the one-click updater, here is how you can manually perform an upgrade:

1. Backup and Prepare
^^^^^^^^^^^^^^^^^^^^^

#. :doc:`Back-up your ExpressionEngine database and files </operations/database_backup>`.

#. Download the latest release of ExpressionEngine (either :elstore:`ExpressionEngine Core </#ee-core>` or the :elstore:`standard edition </manage>`, whichever your site is currently running) and unzip the files to a folder on your computer.

2. Copy Files
^^^^^^^^^^^^^

Working either locally with your backed up files, or on the server (**not recommended**), **copy** the following files from the newly downloaded release to your site:

#. Copy :file:`system/ee/` to :file:`system/ee/`

#. Copy :file:`themes/ee/` to :file:`themes/ee/`

3. Run The Update Wizard
^^^^^^^^^^^^^^^^^^^^^^^^

Go to your site's control panel URL (typically found at ``http://example.com/admin.php`` or ``http://example.com/system/``) and follow the on-screen instructions to update ExpressionEngine.

.. _update_cleanup:

4. Clean up
^^^^^^^^^^^

You're Done! ExpressionEngine is now fully updated. But before you go...

- If the updater could not automatically rename the installer, rename or remove :file:`system/ee/installer/` directory manually. The installer directory can be safely removed after installing ExpressionEngine.

- Review the :doc:`Version Notes </installation/version_notes>` since they outline any version-specific changes that you may need to make to your installation.

- Review :ref:`file permissions <file_permissions>` if something isn't working quite right.
