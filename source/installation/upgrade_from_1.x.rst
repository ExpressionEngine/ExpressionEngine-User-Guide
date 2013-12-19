Upgrading from ExpressionEngine 1
=================================

This guide will help you upgrade your site from ExpressionEngine 1
to ExpressionEngine 2.

.. important:: Third-party add-ons from version 1.x will not work with
   ExpressionEngine 2. Please contact each add-on's author for a
   2.x-compatible version before upgrading, or your site may not
   function properly. The installer will automatically disable all
   extensions as part of the upgrade process.

1. Prepare and Back-up
----------------------

#. Download the most recent release of ExpressionEngine (either
   `ExpressionEngine Core <https://store.ellislab.com/#ee-core>`__ or
   the `standard edition <https://store.ellislab.com/manage>`__,
   whichever your site is currently running) and unzip the files to a
   folder on your computer.

#. In your ExpressionEngine Control Panel, go to
   :menuselection:`Admin --> Utilities --> Clear Cached Data Files`.
   Select **All Caches** and click Submit.

#. Back-up your ExpressionEngine database.

#. Back-up all your ExpressionEngine files and directories:

   Find these files and directories and add ``_old`` to the name:

    -  Rename :file:`index.php` to :file:`index.php_old`
    -  Rename :file:`system/` to :file:`system_old/`
    -  Rename :file:`themes/` to :file:`themes_old/`

#. We strongly encourage taking your site offline for the duration of
   the update so that people visiting your site won't see any PHP errors
   or other anomalies that may occur while you are uploading files:

   #. Copy :file:`system/utilities/offline.html` to
      your web root directory (the same place you have your
      main :file:`index.php` file).
   #. Rename :file:`offline.html` to :file:`index.html`. Now your
      visitors will see the "offline" page while you update your site.


2. Upload New Files
-------------------

Using your favorite FTP client, upload these files and directories to
your server:

-  :file:`admin.php`
-  :file:`index.php`
-  :file:`system/`
-  :file:`themes/`

During this step, you should also upload the most recent version of all
add-ons installed in your ExpressionEngine installation. Consult the
documentation for each add-on for any particular steps necessary to
upgrade that add-on.

.. important:: If you have :doc:`Discussion Forum
   </addons/forum/forum_update>` or :doc:`Multiple Site Manager
   </cp/sites/install>` installed, be sure to update them to the latest
   versions whenever you update ExpressionEngine.


3. Restore Select 1.x Files
---------------------------

#. Restore the config file from your backup:

   - Copy :file:`system_old/config.php` to
     :file:`system/expressionengine/config/`

#. If you saved your templates as flat files in ExpressionEngine 1,
   restore this directory from your backup:

   - Copy all files and directories from
     :file:`system_old/templates/` to
     :file:`system/expressionengine/templates/`


.. important:: If you're running Multiple Site Manager and saving
   templates as files, you will need to create template directories for
   each site and and copy your 1.x templates into the proper
   directories. The directories should reside in :file:`system/expressionengine/templates` and named following the
   format :file:`system/expressionengine/templates/site\_short\_name/`


4. Restore File Changes
-----------------------

Copy over to these files any modifications that had been made to
ExpressionEngine 1's :file:`path.php` file, such as updating the system
directory name or path:

   -  :file:`admin.php`
   -  :file:`index.php`

.. note:: If you are using
   :doc:`Multiple Site Manager </cp/sites/index>`, the same should be
   done for each MSM site's :file:`index.php` and :file:`admin.php`
   file.


5. Verify File Permissions
--------------------------

Apache
^^^^^^

These permissions are typical for PHP-based applications running on
Apache, though you may want to check with your web host to see if more
restrictive permissions can be used to allow PHP to write to files and
directories.

Set these files to 666:

- :file:`system/expressionengine/config/config.php`
- :file:`system/expressionengine/config/database.php`

Set these directories (and their subdirectories) to 777:

- :file:`system/expressionengine/cache/`
- :file:`system/expressionengine/templates/`
- :file:`images/avatars/uploads/`
- :file:`images/captchas/`
- :file:`images/member\_photos/`
- :file:`images/pm\_attachments/`
- :file:`images/signature\_attachments/`
- :file:`images/uploads/`

IIS
^^^

Provide all permissions to the IIS user for these directories:

- :file:`system/expressionengine/cache/` *(and subdirectories)*
- :file:`images/avatars/uploads/`
- :file:`images/captchas/`
- :file:`images/member\_photos/`
- :file:`images/pm\_attachments/`
- :file:`images/signature\_attachments/`
- :file:`images/uploads/`


6. Run The Upgrade Wizard
-------------------------

Point your browser to the URL of the :file:`admin.php` file you
uploaded. For example: ``http://example.com/admin.php``

Follow the on-screen instructions to upgrade ExpressionEngine. Once the
Update Wizard is finished, you **must** remove the
:file:`system/installer/` directory from your server.


.. _update_cleanup:

7. Cleanup
----------

#. Remove the offline :file:`index.html` file that was added to your web
   root in Step 1.

#. Review the :doc:`Version Notes </installation/version_notes>` since
   they outline any version-specific changes that you may need to make
   to your installation.

You're Done! ExpressionEngine is now fully upgraded.


Post-Installation Best Practices
--------------------------------

Once you are confident that ExpressionEngine 2 is working normally on
your server, we recommend a few :doc:`best practices
</installation/best_practices>` for protecting your installation against
common security risks.
