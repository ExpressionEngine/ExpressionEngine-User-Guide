ExpressionEngine v4 Change Log
==============================

.. contents::
   :local:
   :depth: 1

Version 4.0.0
--------------

Release Date: December 5, 2017

- One-click Updater

  - Simple, reliable, in-app updates let you easily keep up-to-date with the latest features, bug fixes, and security patches.
  - Get notifications right in your control panel, click update, blink, and enjoy the latest version!
  - Backs up your data before updating for safety.
  - Handles server issues or unanticipated problems gracefully, giving you a one-click restoration option.
  - Includes a command-line interface utility for scripting or performing updates without using the control panel.
  - Manual updates are still easy if needed, using the same two-folder replacement method as v3.

- Fluid Fieldtype

  - Added the Fluid Fieldtype, a special fieldtype that can contain multiple instances of other Fieldtypes!
  - Gives content authors 100% control over the order and types of content used to build an entry, while the site builder retains 100% control over the layout and markup. Goodbye WYSIWYG tag soup!
  - Yes, Fluid fields can contain Grids and Relationships. 😉

- Channel Fields, Unleashed!

  - Fields can now be assigned to Channels à la carte.
  - Field Groups are now optional and serve as an organizational convenience.
  - Channel Fields can be reused by multiple Channels and even in multiple Field Groups.
  - Channel Fields can be reused across all Sites when using the Site Manager. [#fields_all_sites]_
  - You can now have as many Channel Fields as you can dream up instead of having your database server complain about some esoteric limit.

- Control Panel

  - Polish, polish everywhere!
  - Channel Manager

    + Intuitively create your Channels all from one screen. No more waterfalls when designing your information architecture.
    + Add individual fields to a Channel, field groups, or a mix of both.
    + Create and assign fields and statuses seamlessly in one spot.
    + "Save & New" functionality allows you to quickly design new Channels that need many fields.

  - Menu Manager

    + Added a handy optional menu for Comments
    + When changing a Single Link menu set item to Dropdown, the first row will be auto-filled with the Single Link data.

  - Added a new utility for backing up your database.
  - Radio fields now display with the first option selected by default on new entries.
  - Added a :ref:`CodeMirror height <codemirror_height>` config override to customize the height of the Template Editor.
  - Enable/disable settings now all use a toggle UI for a simpler, unified experience administrating preferences.
  - Dozens and dozens of UX refinements to the fully-responsive control panel.

- Templating

  - Custom fields and add-on variables have some new :doc:`global modifiers </templates/variable_modifiers>`, reducing the need for plugins!

    + ``:attr_safe``
    + ``:censor``
    + ``:currency``
    + ``:decrypt``
    + ``:encrypt``
    + ``:form_prep``
    + ``:json``
    + ``:length``
    + ``:limit``
    + ``:ordinal``
    + ``:raw_content``
    + ``:replace``
    + ``:rot13``
    + ``:spellout``
    + ``:url_decode``
    + ``:url_encode``
    + ``:url_slug``

  - Added an :doc:`{exp:http_header} </add-ons/http_header/index>` native plugin allowing you to set custom headers in your templates.
  - Layout and embed variables that contain dates can now accept all parameters and modifiers available to date variables.
  - Added ``title`` as a valid option to the File Entries tag ``orderby=`` parameter.
  - ``{if toggle_field}`` conditionals now work as expected regardless of MySQL environment issues.
  - ``{if relationship_field}`` conditionals also now work as expected in all cases.
  - Channel Entries tag

    + Added ``show_expired="only"`` option to the Channel Entry ``show_expired`` parameter, which will bring back only expired entries.
    + Added ``sticky="only"`` option to the Channel Entry ``sticky`` parameter, which will bring back only entries marked sticky.
    + ``search:field=`` for numeric fields now supports piped values to allow ranges, e.g. ``search:year_discovered='>=1970|<1980'``
  - Added ``{username}`` and ``{screen_name}`` variables to the Member Reset Password Form template.

- Emoji 😀🌐

  - Increased MySQL requirements to fully supports emoji. If you are upgrading, please see the :doc:`/installation/version_notes_4.0.0` for details.
  - Added support for emoji codes (``:joy:`` becomes 😂) wherever Typography is performed. See `Emoji Catalog <https://unicodey.com/emoji-data/table.htm>`_ for a full list of supported short names.
  - Added an Emoji module. If you are using the Emoticon module, you should modernize and use the ``{exp:emoji}`` tags instead. The Emoticon module will be removed in the next major version. See the :doc:`/installation/version_notes_4.0.0` for details.

- Spam Module Improvements

  + Added a Spam overview section to the control panel Homepage for spam moderators.
  + Added a Spam Queue menu option to the Menu Manager.
  + Notifications are now sent when spam-trapped comments are approved.
  + Spam Queue is simpler to use and more clear on the actions that have taken place.
  + Fixed PHP errors in the spam Queue (#21917, #21911).
  + Fixed a PHP 7.1 incompatibility when training the Spam module.

- General Changes

  - Added the ability to set the image quality when specifying a resize or crop on your upload destinations.
  - User-level errors on the front end are now sent with 403 status codes.
  - Email module Contact Form now has the ability to include a file attachment.
  - Eliminated some redundant queries when Channel Entries are saved.
  - Debugging errors no longer require an extra click to display the stack trace.
  - Error reporting can now be enabled for *all* site visitors from the control panel.
  - The :doc:`cookie path setting </cp/settings/security-privacy>` now defaults to ``/`` on new installations.
  - Removed the following default member fields, creating custom fields for any that had content: URL, location, occupation, interests, birthday, AOL IM, Yahoo IM, MSM IM, ICQ, bio.
  - Added the date field type to available member field types.
  - Channel display names now must be unique per-site.

- Security

  - Added an ``.htaccess`` file to the ``user/config`` folder to deny any web requests.

- Bug Fixes (only itemized bugs fixed in v4 that were *not* already backported to v3)

  - Fixed a bug (#22800) where the text fieldtype set to a number content type would not display its content if its value was zero.
  - Fixed a bug where entry comment stats could be incorrect.
  - Fixed a PHP error if the CP/URL service is called during an update.

- **Developers**

  + Please refer to :doc:`/development/v4_addon_migration` for details.

.. [#fields_all_sites] Applies to **new sites/fields only**. Upgrades from v3 will need to use a separate migration utility (coming soon) to allow existing fields to be shared across Sites.
