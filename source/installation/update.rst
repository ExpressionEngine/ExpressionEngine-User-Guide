Updating ExpressionEngine 2
===========================

This guide will help you update your site from a previous version of
ExpressionEngine 2 to the latest version of ExpressionEngine 2.

.. important:: If you are upgrading from ExpressionEngine 1 to
   ExpressionEngine 2, see :doc:`Upgrading from ExpressionEngine 1 </installation/upgrade_from_1.x>`.


1. Prepare and Back-up
----------------------

#. Download the most recent release of ExpressionEngine (either
   `ExpressionEngine Core <https://store.ellislab.com/#ee-core>`__ or
   the `standard edition <https://store.ellislab.com/manage>`__,
   whichever your site is currently running) and unzip the files to a
   folder on your computer.

#. In your ExpressionEngine Control Panel, go to :menuselection:`Tools
   --> Data --> Clear Caching`. Select **All Caches** and click Submit.

#. Back-up your ExpressionEngine database.

#. Back-up all your ExpressionEngine files and directories:

#. Find these files and directories and add ``_old`` to the name:

   -  Rename :file:`admin.php` to :file:`admin.php_old`
   -  Rename :file:`index.php` to :file:`index.php_old`
   -  Rename :file:`system/` to :file:`system_old/`
   -  Rename :file:`themes/` to :file:`themes_old/`

#. We strongly encourage taking your site offline for the duration of
   the update so that people visiting your site won't see any PHP errors
   or other anomalies that may occur while you are uploading files:

   #. Copy :file:`system_old/expressionengine/utilities/offline.html` to
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
add-ons installed in your ExpressionEngine installation, including
:doc:`Discussion Forum </modules/forum/forum_update>` and :doc:`Multiple
Site Manager </cp/sites/install>`. Consult the documentation for each
add-on for any particular steps necessary to upgrade that add-on.


3. Restore From Backup
----------------------

#. Restore these files from your backup:

   - Copy :file:`system_old/expressionengine/config/config.php` to
     :file:`system/expressionengine/config/`
   - Copy :file:`system_old/expressionengine/config/database.php` to
     :file:`system/expressionengine/config/`

#. Restore these directories from your backup:

   - Copy all non-English language files from
     :file:`system_old/expressionengine/language/` to
     :file:`system/expressionengine/language/`
   - Copy all files and directories from
     :file:`system_old/expressionengine/third\_party/` to
     :file:`system/expressionengine/third\_party/`
   - Copy all files and directories from
     :file:`system_old/expressionengine/templates/` to
     :file:`system/expressionengine/templates/`
   - Copy all files and directories from
     :file:`themes_old/third\_party/` to
     :file:`themes/third\_party/`


4. Restore File Changes
-----------------------

Restore any modifications made to these files, such as updating the
system directory name or path:

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

Set these directories to 777:

- :file:`system/expressionengine/cache/` *(and subdirectories)*
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


6. Run The Update Wizard
------------------------

Point your browser to your Control Panel, and follow the on-screen
instructions to update ExpressionEngine.

Once the Update Wizard is finished, you **must** remove the
:file:`system/installer/` directory from your server.


.. _update_cleanup:

7. Cleanup
----------

#. Remove the offline :file:`index.html` file that was added to your web
   root in Step 1.

#. Review the :doc:`Version Notes </installation/version_notes>` since
   they outline any version-specific changes that you may need to make
   to your installation.

You're Done! ExpressionEngine is now fully updated.