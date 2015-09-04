###########################################
ExpressionEngine 3.0 Public Beta User Guide
###########################################

.. note:: The ExpressionEngine 3.0 docs are a work in progress, we have a lot left to do! Please excuse the ongoing construction and dust as we continue to work on ExpressionEngine itself as well as reorganizing and rewriting much of the documentation.

Welcome to the ExpressionEngine 3.0 Public Beta User Guide.

The user guide is incomplete. Currently the documentation focuses on the :ellislab:`Developer Preview </expressionengine/user-guide/development/developer_preview_program.html>`, for writing or converting add-ons to be compatible with ExpressionEngine 3. Currently the table of contents on the left will only take you to areas that are relevant to goals of the Developer Preview, namely the Add-on Developer section of the User Guide. The objective is to answer the following questions for you:

- What are the over-arching things I need to know?
- What's new, what's deprecated, and what's gone?
- What steps do I need to take to convert my existing add-ons?

Full reference API documentation auto-generated from our docblocks is coming soon.

Installation steps are essentially unchanged from 2.0, though we've simplified the installer itself quite a bit. Simply unzip the package, place it in a local vhost directory of your choice, and point your browser at `/system/` or `/admin.php`.

Known Issues
============

- Spam module learning is currently disabled.
- Template groups are not reorderable.
- Some member permission settings may not be reflected in the UI it's supposed to affect.
- Editing an email template will not have a default enabled state selected.
- Template manager is using an incorrect language key for messages in the sidebar.
- The date picker on the publish form may be using non-existent language keys.
- The "new comments since your last login" link on the homepage may not go to a properly date-filtered view.
- The Grid field on the publish form will not validate properly via AJAX validation.
- The idle modal will not redirect you to the login screen if you close the modal.
- Adding a template route via the template settings modal will not validate via AJAX.
- You can delete the last Super Admin account.
- Having multiple Grid fields on a publish page may cause the add button not to display on some of them.
- There is currently no built in method for importing data in the Spam Module. You will need to manually import the SQL we provide after you install the Spam Module to get everything up and running.
- Relationships don't save on new entries
- Grid file field content may show up in a different file field on publish page
- Modals can open such that all you see is a black screen.
- File browser on publish page still shows system default directories.
- The create bookmarklets form is not displaying the "Create New ..." button when there are no channels or channel fields available.
- The login view when no site name has an incorrect header.
- Installer may not redirect to login screen.
- Installer browser title is incorrect.
- Cannot unassign a category from an entry on publish form.
- Quick links are being altered after entered, and cause a disallowed key characters error.
- Save button does not appear until required field loses focus on some forms.
- Models: Channel -> CategoryGroups relationship not working with multiple category groups.
- Filepicker modal doesn't select already chosen file when launched from the Publish page.
- Converting from Textarea to RTE generates errors.
- Route paths don't work across MSM sites.
- MSM will no longer offer to duplicate a site.
- Forum module themes are not yet implemented.
- In-app documentation for native add-ons is incomplete.


.. toctree::
  :glob:
  :hidden:
  :titlesonly:

  development/index

  about/index
  about/license
  about/changelog
  installation/index
  cp/index
  general/index
  how_to/index
  intro/index
  bugs_and_security_reports/index
  add-ons/index
  operations/index
  optimization/index
  monitoring/index
  security/index
  templates/index
  troubleshooting/index
  urls/index
  development/index
