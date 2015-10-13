ExpressionEngine 3.x Change Log
===============================

.. contents::
   :local:
   :depth: 1

Version 3.0.0
-------------

Release Date: October 13, 2015

- Control Panel

  - General

    - Responsive design is a pleasure on mobile devices.
    - 100% image free, fast and beautiful on regular and high density displays
    - Inline error messages consistently used on all forms.
    - The control panel navigation and logic is now based on the idea of **Content Creators** and **Site Builders**, with navigation related to content creators on the left and site builders on the right.
    - Many application defaults have been modified to reflect how people most often use ExpressionEngine.
    - Control Panel landing pages are customizable per member group, or even per member
    - In-app links to the documentation, support, and bug tracker are visible to member groups of your choice.
    - Improved contextual search in the control panel.
    - Uses a consistent visual language across the board.
    - Enabling/disabling CAPTCHA has been consolidated to a single site-wide setting.
    - Unified Upload Directories: Everything that used to be a special folder (Member photos, avatars, etc..) is now available in the File Manager and can use the usual file manipulations and other upload preferences.
    - Smart interactions (for example, if you have no channels, then clicking **Create** will take you to the channel manager to make one).
    - Bulk actions don't clutter the UI, they onlyappear only when needed.
    - The new style guide allows both 1st and 3rd party to build awesome UX.
    - The new design will allow simple iterative niceties in the future, such as adding some minimal color and branding for your clients.
    - Comments are no longer a separate module. Comments can be accessed from the Overview page.
    - Accessories no longer exist.
    - Quicklinks and custom tabs were consolidated into only Quicklinks.
    - Table zebra-striping JS has been removed. Zebra-striping is handled automatically by the CSS.
    - Pre-populating the Name and URL fields of quicklinks when the ‘+ New Link’ button is clicked.
    - Added a default modal view setting to upload destinations.

  - Overview Page

	 - The **Home Page** is now the overview page.
	 - Completely rewritten to show a quick overview of your content, including  recent comments, member counts and latest entry information.

  - Create

	 - Content -> Publish has moved to the top level Create tab.
	 - Improved category create modal.
    - The Publish Layout manager has moved to its own page in the Channel  Manager.
    - Titles can now have different labels, set in the Channel Manager.

  - Edit

	 - Content -> Edit has moved to the top level Edit tab.

  - Files

	 - Content -> Files has moved to the top level Edit tab.

  - Members

	 - Member Group permissions are now more granular.

  - Developer Tools

    - Channel Manager

      - Admin -> Channel Administration is now a subsection under developer tools. All Channel, Status, Category and Field settings are accessed here.
      - Channel layouts have a dedicated form for managing the publish/edit layouts.
      - Categories have drag and drop sorting and nesting.

	 - Template Manager

      - Moved from Design -> Templates -> Template Manager
      - Snippets were renamed **Template Partials**
      - Global variables were renamed **Template Variables**
      - Synchronization page removed as this is now fully automated.
      - Consistency in the display of any **System templates** (Email, Members, Forums, etc.).

	 - Site Manager

      - Access to the manager moved from the site title dropdown.
      - Removed the ability to duplicate existing sites.

	 - Add-On Manager

      - Add-ons are no longer a top level menu tab.
      - Add-ons are all on one page.
      - Third party plugins are grouped together.
      - Plugins must now be installed as part of the move toward more consistent behavior.
      - Built-in non-optional add-ons are hidden from the table

	 - Utilities

      - Consolidated several **Tools* sections: Communicate, Utilities and  Data.
      - Extension debugging section added here to allow disabling of  individual extensions.

	 - Logs

      - Moved from Tools -> Logs

  - Settings

      -The new **Settings** page consolidates a number of settings that were scattered throughout the version 2 control panel.  Notably the **Global Template**, *Member message and avatar** and **Comment** preferences can be found here.  That's in addition to the other preferences that move over from the version 2 **Admin* tab.

- Multiple Site Manager

  - Now included with ExpressionEngine.
  - All ExpressionEngine licenses come with one site and you only pay for additional sites, not the ability to add additional sites.
  - When you upgrade your ExpressionEngine license, you can merge in a Multiple Site Manager license to add sites to that license.

- Discussion Forums

  - Now included with ExpressionEngine.

- Spam Module

  - Unified anti-spam service for first and third party code.
  - Comes pre-trained for common spam, but can be further trained your site's specific content.
  - No subscription needed and all data remains on your site.
  - Training data is exportable for sharing with others and future site builds.

- Installer

  - One-page installation.
  - Updating is much easier thanks to the new user servicable directory. Just replace ``system/ee`` and ``themes/ee`` and update.
  - Third-party add-ons are no longer updated during the EE update.

- General Changes

  - Removed Referrer module.
  - Removed Mailing List module.
  - Removed Wiki module.
  - Template routes can now be set in the config file.
  - Improved template route parsing.
  - Improved Profiler and Debugging.
  - Screen Names no longer have to be unique.
  - Updated Markdown Extra to v1.5.0.
  - Changed password maximum length to 72 characters.
  - Added ``{if no_results}`` to ``{categories}`` tag pair in ``{exp:channel:entries}`` loop
  - Added ``{if no_results}`` to ``{exp:channel:categories}``

- Developers

  - All new :doc:`Model Service </development/services/model/index>` which replaces our APIs.
  - Added a :doc:`Dependency Injection Container </development/core/dependencies>`.
  - Channel fields, Member fields, and Category fields now all use the same API
  - New FilePicker service for displaying file browser modals
  - Use the `require_captcha` setting to determine whether to require CAPTCHA or not for your front-end forms.
  - Module tab API has changed. See `tab.pages.php` for a working example. In short, the methods are now `display($channel_id, $entry_id)`, `validate($entry, $data)`, `save($entry, $data)`, `delete($entry_ids)`.
  - Deleted:

    - ``Api_channel_entries::send_pings()``
    - ``DB_Cache::delete()``
    - ``Filemanager::frontend_filebrowser()``
    - ``Functions::clear_spam_hashes()``
    - ``Functions::set_cookie()``
    - ``Member_model::get_localization_default()``
    - File helper's `get_mime_by_extension()`
    - Magpie plugin
    - Version helper
    - Channels-specific pagination hooks
    - SafeCracker hooks
    - ``edit_template_start`` hook
    - ``update_template_end`` hook

  - Deprecated:

    - ``cp_url()`` helper method, use ``ee('CP/URL')`` instead.
    - Extension's ``universal_call()``, use ``call()`` instead.

