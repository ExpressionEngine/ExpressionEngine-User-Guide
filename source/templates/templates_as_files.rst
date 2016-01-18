Saving Templates as Text Files
==============================

ExpressionEngine supports saving Template Groups, Templates, Global Variable, and
Template Partials as regular folders and files on your server, so that you can
use your preferred text editor (e.g. Dreamweaver, Coda, BBEdit, etc.) to edit
Templates and then FTP the changes to the server.

-  Template Group folder names must end with *.group* and the preceding
   name must be URL safe (contain only letters, numbers, dashes,
   underscores and dots).
-  Template Files must be in an appropriately named group folder. They
   must end with an approved extension and must be URL safe. Approved
   extensions and the associated template type they will result in are:

   -  *.html* creates a 'webpage' template type
   -  *.feed* creates an 'rss' template type
   -  *.css* creates a 'css' template type
   -  *.js* creates a 'js' template type
   -  *.xml* creates an 'xml' template type

Enabling Saving Templates as Files
----------------------------------

All templates will be saved to the ``system/user/templates`` directory.

1. Set folder permissions
~~~~~~~~~~~~~~~~~~~~~~~~~

Make the ``system/user/templates`` folder writable by setting its permissions to
777 (or equivalent) so that ExpressionEngine will be allowed to save the files
as well as recreate your Template\_Group/Template structure.

2. Set Template Preferences
~~~~~~~~~~~~~~~~~~~~~~~~~~~

From the Control Panel, go to :menuselection:`Settings --> Template Settings`.

#. Set **Allow templates to be saved as files?** to *Yes*.

Creating and Synchronizing Templates and Files
----------------------------------------------

Once your site is set up to save templates as text files, the files and the
database will be kept in sync automatically. An edited or newly created template
file is synced when it is used in any way; this includes loading it on the frontend
or opening it in the Template Editor.

.. note:: The templates are kept in sync based on their edit date. If the
   flat file has been edited more recently than the database, then its contents
   will be copied to the database. Similarly, if the database version is newer
   than the file, or a file does not exist, then the file will be written from
   the information in the database.

Deleting Templates Saved as Files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Templates can only be deleted in the :doc:`Template Manager </cp/design/index>`.
Deleting a template file will not remove it from the database and the file will
be recreated the next time that database entry is seen.

Saved Templates and the Multiple Site Manager
---------------------------------------------

Sites under the Multiple Site Manager have their own preferences for
saving templates as text files. As such, when setting up a new Site
under the Multiple Site Manager, you must set up a new location for
saving those templates.

When importing or duplicating to a new Site in the Multiple Site
Manager, if you wish to use existing templates which are saved as text
files, then the template directory must be manually copied to the
directory for the new Site.
