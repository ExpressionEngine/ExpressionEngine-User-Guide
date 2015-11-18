ExpressionEngine 3.x Change Log
===============================

.. contents::
   :local:
   :depth: 1

Version 3.0.4
-------------

Release Date: November 18, 2015

- Fixed a bug (#21099) where line breaks in member signatures were being converted to literal ``\n``. Literally.
- Fixed a bug (#21282) where publish tabs pulled a bait and switch and saved their defaults instead of your data. They are looking at hours of community service.
- Fixed a bug (#21289) where some JavaScript events didn't happen.
- Fixed a bug (#21295) where clicking, instead of dragging, on the move icon in Channel Layouts refreshed the page.
- Fixed a bug (#21305) where the button text on a Channel entry publish form would not be reset after a validation error when revisions were enabled.
- Fixed a bug (#21307) where LocalPath::__get generated PHP errors.
- Fixed a bug (#21308) where listing member groups couldn't handle large numbers of members.
- Fixed a bug (#21313) where submitting forms or clicking links would occasionally result in a blank page.
- Fixed a bug (#21320) where a PHP error would appear when using the `{member_search_path}` variable inside an Channel Entries tag pair.
- Fixed a bug (#21321) where empty relationship fields sometimes generated errors. Sometimes you just need a little alone time.
- Fixed a bug (#21325) where certain add-ons refused to acknowledge their new version number after they were updated.
- Fixed a bug (#21326) where the template manager was insensitive toward case sensitive file systems and you could not edit Forum Templates.
- Fixed a bug (#21328) where we still referenced the constant SYSTEM. It's now SYSPATH.
- Fixed a bug (#21332) where some template paths had double slashes (//) when saving as files.
- Fixed a bug (#21334) where template groups which were not the default template group bullied the default template group into renouncing its defaultness.
- Fixed a bug where categories could not be assigned via Channel Form.
- Fixed a bug where you couldn't Communicate if you had a large number of members.
- Fixed a bug where the CP complained with esoteric errors when you had enough members for pagination.
- Fixed a bug where membership was elitist and pending members could not be approved.
- Fixed a bug where the Forums fibbed about the Upload Directory being a URL when really it's a path.
- Fixed a bug where removing the Forum theme named "default" prevented the Template Manager from finding any Forum themes.
- Fixed a bug where some buttons were roguishly displaying a raw language key, rather than actual language data.
- Fixed a bug (#21283) where upload directory synchronization may not apply image manipulations to some files.
- Fixed a bug (#21259) in the Email mdoule where PHP errors were thrown after sending emails.
- Fixed a bug (#21274) where a member group with file access couldn't open the file picker.
- Fixed a bug where avatar images where showing up in the file picker.
- Fixed a bug where you couldn't upload images if the file picker only had one directory to choose from.
- Added site-wide yes/no settings for notifying pending members when they are approved or denied.

Version 3.0.3
-------------

Release Date: November 9, 2015

- Fixed a bug (#21272) where default field formatting was not respected when publishing. Chastised the offending code.
- Fixed a bug (#21286) where there was a syntax error in the file picker on lower versions of PHP.
- Fixed a bug (#21296) where new templates were shy and wouldn't let anyone but Super Admins view them.
- Fixed a bug (#21299) where a Grid-compatible fieldtype whose markup contained a table would make the Grid field behave incorrectly.
- Fixed a bug (#21301) where there was only one default template group per install, not per site.
- Fixed a bug (#21314) where the Discussion Forum front end was 404'ing. Where did it go?
- Fixed a bug with Discussion Forum theme image URLs
- Fixed a bug where some site settings did not save correctly.
- Added the SMTP port to the Outgoing Email settings page.

Version 3.0.2
-------------

Release Date: November 2, 2015

- Fixed a bug (#21214) where ExpressionEngine Core had Phantom Template Routes Syndrome which was causing PHP errors.
- Fixed a bug (#21217) where the "owned by" link in the License & Registration page resulted in a 404.
- Fixed a bug (#21222) where the CP was referencing "default.png" which retired and is on vacation in the south of France.
- Fixed a bug (#21223) where clicking on the sort handle in grid settings refreshed the page.
- Fixed a bug (#21225) where editing an entry with a file in a grid column could result in a PHP error.
- Fixed a bug (#21226) where field groups refused to be assigned to any site but your first one.
- Fixed a bug (#21228) where files could be uploaded to any upload destination via the publish form.
- Fixed a bug (#21236) where the Black/White List add-on generated errors when trying to download the EE Blacklist.
- Fixed a bug (#21239) where the IP to Nation add-on wouldn't let you unban all countries once you'd banned at least one.
- Fixed a bug (#21244 & #21198 & #21193) where field settings had a case of amnesia.
- Fixed a bug (#21248) where choosing a thumbnail in the filepicker did nothing.
- Fixed a bug (#21249) where the path of saved translations was incorrect.
- Fixed a bug (#21251) where creating an entry didn't set an `edit_date`.
- Fixed a bug (#21252) where adding a custom member field could result in an exception.
- Fixed a bug (#21253) where `{edit_date}` formatted dates incorrectly.
- Fixed a bug (#21264) where updating a member would sometimes cause PHP notices.
- Fixed a bug (#21266) where new channel entries ignored the Channel Settings for default status, category, entry title, and url title prefix.
- Fixed a bug (#21275) where under the right conditions a required custom field could be hidden on the Publish page.
- Fixed a bug (#21276) where categories had the option of setting themselves as their own parent; it was a genealogical nightmare.
- Fixed several bugs where certain relationship template tag combinations would result in a PHP error. You should see the therapy bill.
- Fixed a bug where some model validation errors tried to convert an array to a string.
- Fixed a bug where new sites could not be created via the Site Manager.
- Fixed a bug where PHP 5.3 objected to an array access in the Relationship fieldtype on the publish page.
- Fixed a bug where saving a custom member field wanted you to "Save Layout".
- Fixed a bug where long folder list names were overlapping the toolbars.
- Fixed a bug where remove tools would appear without a left border.
- Added blockquote support to in app add on docs.
- Changed bg color for login screens.

Version 3.0.1
-------------

Release Date: October 26, 2015

- Fixed a bug (#21191) where creating a layout for a channel without categories misbehaved.
- Fixed a bug (#21191) where moving a field into a new tab caused it's hidden tool to malfunction.
- Fixed a bug (#21196) where Core would report a PHP Notice when editing the profile of a member.
- Fixed a bug (#21199) where 404 pages were not seting a 404 header.
- Fixed a bug (#21199) where the "+ New Upload Directory" link resulted in a 404.
- Fixed a bug (#21204) where certain versions of PHP could not determine empty of a function.
- Fixed a bug (#21205) where the Filepicker wouldn't play nice with Core.
- Fixed a bug (#21206) where disabling comments still displayed comment data on the Overview page.
- Fixed a bug (#21213) where turning on "Save Templates as Files" was a little overprotective and rewrote the index template with "Directory access is forbidden."
- Fixed a bug (#21218) where Quick Links were permanent.
- Fixed a bug (#21219) where the template manager was too eager about keeping templates in sync across all sites instead of the current site.
- Fixed a bug (#21220) where moving a required field to a new tab removed the required class.
- Fixed a bug (#21221) where accessing the templates model during a session_start hook threw an exception.
- Fixed a bug (#21224) where PHP would sometimes generate a warning when it tried to delete a file.
- Fixed a bug (#21231) where members were being denied access to add-ons they had access to.
- Fixed a bug (#21233) where an empty line in the spam module caused PHP errors.
- Fixed a bug (#21233) where running apc_delete_file sometimes generated a warning.
- Fixed a bug (#21235) where static template route segments were not being included when using {route=...}
- Fixed a bug where creating a second layout for a channel would result in an Exception.
- Fixed a bug where adding and saving an empty tab to a channel layout prevented further editing of the tab.
- Fixed a bug where alerts were not being displayed while creating a layout and preforming unallowed actions.
- Fixed a bug where a required field could be dropped into a hidden tab.
- Fixed a bug where dismissing alerts on the Create/Edit Form Layout page refreshed the page.
- Fixed a bug where the thumbnail view of the filepicker was not responsive.
- Add-ons are no longer "Removed", they are "Uninstalled".
- Fixed a bug where 'yes' and 'no' weren't localizable. Lo siento.
- Removed CSS that forced capitalization on `.choice`

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
    - Improved behavior of entry filtering in Relationship fields on the publish form so it searches all entries.

  - Edit

	 - Content -> Edit has moved to the top level Edit tab.
	 - The search has live filtering, and you can now bookmark the results directly.

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

      - Consolidated several **Tools** sections: Communicate, Utilities and  Data.
      - Extension debugging section added here to allow disabling of  individual extensions.

    - Logs

      - Moved from Tools -> Logs

  - Settings

    - The new **Settings** page consolidates a number of settings that were scattered throughout the version 2 control panel.  Notably the **Global Template**, *Member message and avatar** and **Comment** preferences can be found here.  That's in addition to the other preferences that move over from the version 2 **Admin** tab.

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
  - A custom database port can be specified in the database configuration array

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

