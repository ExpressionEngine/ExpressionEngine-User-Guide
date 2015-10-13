ExpressionEngine 3.x Change Log
===============================

.. contents::
   :local:
   :depth: 1

Version 3.0.0
-------------

Release Date: October 13, 2015

- Control Panel

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
  - Updating is much easier thanks to the new user servicable directory. Just replace `` system/ee`` and ``themes/ee`` and update.
  - Third-party add-ons are no longer updated during the EE update.

- General Changes

  - Removed Referrer module.
  - Removed Mailing List module.
  - Removed Wiki module.
  - Control Panel landing pages are customizable per member group, or even per member
  - In-app links to the documentation, support, and bug tracker are visible to member groups of your choice
  - Many application defaults have been modified to reflect how people most often use ExpressionEngine
  - Enabling/disabling CAPTCHA has been consolidated to a single site-wide setting.
  - Unified Upload Directories: Everything that used to be a special folder (Member photos, avatars, etc..) is now available in the File Manager and can use the usual file manipulations and other upload preferences.
  - Template routes can now be set in the config file.
  - Improved template route parsing.
  - Improved Profiler and Debugging.
  - Screen Names no longer have to be unique.
  - Updated Markdown Extra to v1.5.0.
  - Changed password maximum length to 72 characters.
  - Added ``{if no_results}`` to ``{categories}`` tag pair in ``{exp:channel:entries}`` loop
  - Added ``{if no_results}`` to ``{exp:channel:categories}``

- Developers

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

