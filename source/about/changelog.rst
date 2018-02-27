ExpressionEngine v4 Change Log
==============================

.. contents::
   :local:
   :depth: 1

Version 4.1.0
-------------

Release Date: ?

- Security enhancement: Members are now emailed a confirmation when when their password is changed. See the new email notification template, "User — Password changed notification"
- Security enhancement: Members are now emailed a confirmation to their old address when their email is changed. See the new email notification template, "User — Email changed notification"
- Security: Fixed a bug where new template access restrictions redirects were saved incorrectly.
- Added Live Preview to the Channel entry publish form.
- Added Bulk Edit to bulk options menu in Entry Manager.
- Added Add Categories to bulk options menu in Entry Manager.
- Added Remove Categories to bulk options menu in Entry Manager.
- Added timestamp variables to the default date fields in the channel form for better date format compatibility in the datepicker.
- Added the ``show`` and ``show_group`` parameters to the channel form's ``category_menu`` tag (see bug #23459).
- Altered the behavior of template access restrictions so redirecting to a template that is restricted results in a 404.
- Added tips to Email notification templates to better describe their purpose.
- Improved header and breadcrumbs on the publish page for clarity and consistency.
- Fixed a bug (#23399) where images with very large dimensions could cause a fatal PHP error when processing.
- Fixed a bug (#23463) where EE may generate faulty ``CREATE TABLE`` syntax.
- Fixed a bug (#23467) where fetching partial data from model wielded inconsistent results.
- Fixed a bug (#23476) where the control panel allowed assigning illegal category relationships.
- Fixed a bug (#23482) where creating a field with value/label pairs would create an extra empty pair.
- Fixed a bug (#23494) where sorting templates in the Template Manager by "hits" resulted in PHP error.
- Fixed a bug where Channel Entry notification emails were ignoring the Mail Format email preference.
- Fixed a bug where doing a keyword search containing dobule quotes could trigger invalid GET data errors.
- Fixed a bug where duplicating templates would sometimes throw an error.
- Fixed a bug where some member fields didn't parse in the member templates.
- Fixed a bug where a period would appear in empty toolbar cells.
- Fixed a bug where repeat grid tags in a template could throw PHP errors.
- Fixed a bug where phantom validation erorrs appeared on Grids with required columns in Fluid fields.
- Fixed a bug where member custom field conditionals did not parse on the member profile page.
- Fixed a bug where some private message pages failed to display in the frontend member pages.
- Fixed a bug where template access redirect options were not 'ajaxified'.
- Fixed a bug where template debugging wasn't showing for superadmins 'logged in' as non-superadmins.
- Fixed a bug where a PHP error occured when submitting a channel form with a category tag pair on it and no category selected.
- **Developers**

  - Added docs for :ref:`Live Preview compatibilty <live_preview_compatibilty>`.
  - Added a new alert style: ``tip``. See the documentation for details.
  - Added a new :doc:`Memory service </development/services/memory>`.


Version 4.0.9
-------------

Release Date: February 5, 2018

- Fixed a bug (#23445) where multiple Fluid field tags in a template would multiply results.
- Fixed a bug (#23447) where a PHP error could occur creating new channels and duplicating an existing channel that had already been duplicated.
- Fixed a bug where a PHP error could occur when using relationship tags if parameter filters resulted in no valid relationships to return.
- Fixed a bug where custom member fields didn't parse in the member profile templates.
- Fixed a bug where member field conditionals were not properly parsed in the custom profile data tag.
- Fixed a bug where updating ExpressionEngine via the command line may not work.
- Fixed a bug with localization of placeholder text in the Duration fieldtype.
- Fixed a fatal PHP error when manually constructing Grid fields in a Channel Form (``{field:my_grid_field}`` is recommended over manual construction, incidentally).
- Fixed the Channel URL setting for the Blog channel when installing the default theme.
- Prevented a potential memory exhaustion error on the Profile page when you have hundreds of thousands of member records.


Version 4.0.8
-------------

Release Date: January 25, 2018

- A warning has been added if you've upgraded but forgotten to update your software license.
- Fixed a bug (#23433) where an external link did not open in a new window.
- Fixed a bug where the list of changed values passed to ``after`` model event hooks may not be complete.
- Fixed a bug where Textareas in Fluid fields didn't show their formatting bar on edit.
- Fixed a bug (#23435) where Channel Form would throw a fatal PHP error when using tag pairs instead of the standard `{field:fieldname}` Channel Form syntax.
- Fixed a bug (#23443) where `y-axis` was not translated in non-English language packs.
- Fixed a bug (#23427) where BBCode was being parsed in fields with formatting set to "None".
- Fixed a bug where there were errors on the frontend member registration page if custom date fields were on the form.
- Fixed a bug on the frontend member profile editor where superadmins could properly see fields not included publically but their edits didn't 'stick'.
- Fixed a bug (#23425) where file size limitation for uploads was not being enforced properly.
- Fixed a bug where validation did not force selecting an heir when deleting a member and ‘Reassign’ entries was selected.
- Fixed a bug where a PHP error could occur deleting a member who had entries if you chose to delete those entries too, resulting in the member not being deleted.


Version 4.0.7
-------------

Release Date: January 19, 2018

- Improved the OPcache conditional check to include opcache.restrict_api path restrictions so you don't get an anoying PHP error on oddly configured hosts.
- Core version: Fixed a missing Spam module error in comment moderation.
- Eliminated a PHP warning when deleting Grid fields that contain a Toggle column.
- Fixed a bug where variable modifiers didn't work with option field value and label variables.
- Fixed a bug (#23428) where one couldn't save a new Channel if there were more than eight existing Channels.
- Fixed a bug (#23431) where some Relationship field settings may not appear to stick.


Version 4.0.6
-------------

Release Date: January 16, 2018

- Changed the location on the toggle arrow in the publish form, to better show which field it works on.
- Tweaked spacing of section header
- Fixed the Contact Us page in the default theme for the Core version.
- Replaced fatal PHP error on PHP 7.1+ with a 404 page when fiddling around with some URLs in the control panel.
- Fixed a bug where the channel form could fail to display for non-logged in members despite allowing guest posting.
- Fixed a bug where the control panel may zoom when filling in forms on iOS.
- Fixed a bug where Checkboxes or Multi Select fields may save their selections out of order.
- Fixed a bug (#23397) where going to a member's publishing settings would show an error if the RTE wasn't installed.
- Fixed a bug (#23400) where parsing custom category fields may not work in certain Channel module tags.
- Fixed a bug (#23403) where the language in the "show" filter were not consistently pulled from language files.
- Fixed a bug (#23404) where front-end template error messages might parse tag samples (``{exp:email:contact_form}``) as emoji short codes. Though the ``{exp✉️}`` module is pretty rad.
- Fixed a bug (#23406) where some variables could not be used inside a Fluid field tag pair.
- Fixed a bug (#23407) where the Member module's member list may show an error if an invalid ``memberlist_order_by`` is set.
- Fixed a bug (#23408) where Channel Layouts got a bit dizzy and lightheaded and couldn't remember how you organized your fields.
- Fixed a bug (#23409) where custom field tags inside a Relationship field may show errors if the custom field doesn't belong to the related entry's channel.
- Fixed a bug (#23410) where the Auto Saved publish form tab was not appearing for new entries.
- Fixed a bug (#23412) where errors may show when saving an empty Fluid field.
- Fixed a bug (#23413) where the SMTP connection type option may have the wrong value selected.
- Fixed a bug when "Enable emoticons?" is enabled, and an HTML entity is immediately followed by a closing parenthesis (``&entity;)`` would become ``&entity:wink:``)
- Fixed a deprecation notice in the developer log for Fluid fields (#23418).


Version 4.0.5
-------------

Release Date: January 09, 2018

- Changed template selection UI for template routes to a dropdown.
- Made toggle fields accessible to screen readers.
- When editing a field, the groups the field is in now show as active in the field group navigation menu.
- Fixed a bug (#23372) where adding a Grid row may also alter the markup of some third-party fieldtypes within the Grid.
- Fixed a bug (#23368) where Grid variable modifiers may not render.
- Fixed a bug (#23364) where the Member Import utility would not import data into custom fields.
- Fixed a bug (#23376) where pressing the escape key to dismiss a modal may not always work.
- Fixed a bug where a template with conditionals may show an error under PHP 7.2.
- Fixed a bug where the filter on the Fluid field's Add button was not working.
- Fixed a bug (#23380) where saving a category field without entering a name would show a PHP error.
- Fixed a bug (#23380) where deleting a category group that has category fields may show an error.
- Fixed a bug (#23379) where saving a channel saved in EE 3 may show an error regarding the search excerpt.
- Fixed a bug (#23383) where the button text on the idle login modal may disappear.
- Fixed a bug (#23391) where you may not be able to limit a File field to a specific upload directory in a Grid.
- Fixed a bug (#23393) where applying a new field format to existing entries may fail.
- Fixed a bug where multi-channel Channel Entry tags would sometimes show a PHP error.
- Fixed a bug where Grid couldn't add new rows in Channel Form.
- Fixed a bug in the manual updater where the displayed update step was actually one step behind what it was running.
- Fixed a reference in the RSS module to the legacy Member "URL" field.
- Fixed a SQL error in Channel Form when using Dropdown fields pre-populated by newly created custom fields.
- Fixed a bug (#23375) where the Search and Replace utility was not saving Template changes to the filesystem.
- Fixed a bug (#23384) where accented characters (ä, ö, ü, ß, etc.) in Channel or Field names were not being translated to their ascii equivalents (ae, oe, ue, ss, etc.).
- Fixed a username length validation message (bug #23288).
- Fixed a bug (#23388) where a validation error was wrongly triggered when editing a Metaweblog configuration.
- Fixed a bug where a PHP error occurred when non-superadmins filtered the templates by a specific template group, even though they had permission to access the group.
- Fixed a bug (#23386) where new fields were not always assigned to a group when using 'Save & New' to create multiple fields in a group.
- Removed usage of PHP 7.2's deprecated ``each()`` function in the XSS library.
- **Developers:** Fixed some erroneous, old, hand-written SQL references to field groups in the legacy API. You won't notice, because you're using ExpressionEngine's modern APIs.

Version 4.0.4
-------------

Release Date: December 22, 2017

- Fixed a PHP error in the Metaweblog control panel where it erroneously tried to use a field group id to populate the fields.
- Fixed a PHP warning that could occur if you tried to update ExpressionEngine while unable to connect to the internet.
- Fixed a bug (#23353) where it may not be clear which site a template belongs to in the Duplicate Template list.
- Fixed a bug (#23354) where the first variable in a Layout list may not parse.
- Fixed a bug (#23357) where the Entry Manager listing may load in the wrong scroll position in Firefox.
- Fixed a bug (#23358) where Channels may have malformed category group associations saved to them.
- Fixed a bug (#23360) where the `base_path` config override may not be applied in some cases.
- Fixed a bug (#23365) where the 4.0.1 update routine may fail if there are orhpaned Channel layout records.
- Fixed a bug (#23367) where the Search module may show an SQL error if the `search_in=` parameter was set.
- Fixed a bug in the control panel member profile page, where the Avatar path was not correctly filtered for the current Site's preferences.
- Fixed a bug where Channel preferences like "Render URLs and Email addresses as links?" were not respected in Relationship variables.
- Fixed a bug where some third-party tables could cause an error when importing SQL backups made with the Database Backup utility.
- Fixed a bug where submitting the channel form could show an error if the URL title field was not included on the form.
- Fixed a bug where the Pages template dropdown may break if there is a numerically-named template group.
- Fixed some PHP warnings in the Comment module when certain variables were accessed (e.g. ``{comment_url_title_auto_path}``)
- **Developers:** Fixed a bug where the ``parseTagParameters()`` method returned an empty array rather than the default parameter array when there were no parameters set in the tag.


Version 4.0.3
-------------

Release Date: December 15, 2017

- Version checks are still cached if caching is disabled.
- Fixed a bug where the installer may not properly determine the correct database collation to use.
- Fixed a bug (#23340) where the Menu Manager would show JSON output when adding a menu item in Firefox.
- Fixed a bug where some drop down menus might have two scroll bars.
- Fixed a bug where deleting a Grid column that contained validation errors would not re-enable the Save buttons.
- Fixed a bug (#23346) where submitting the Fluid field settings form while the field list is filtered would show a field removal warning.
- Fixed a bug (#23347) where the Quick Links management page would show an error under PHP 7.2.
- Fixed a bug where a relationship to an entry with a Fluid field didn't parse the Fluid field tags.
- Fixed a bug (#23339) where a PHP warning was issued in the CP Logs utility.
- Fixed a bug in SimplePie that prevented the RSS Parser (and ExpressionEngine news feed) from working in CentOS 6 and other environments with outdated cURL libs. (Hey CentOS, they fixed that in 2010...)
- Fixed a bug where a channel form posting to a channel not on the current site could trigger an author validation error if guest posting was enabled.


Version 4.0.2
-------------

Release Date: December 13, 2017

- Increased security against potential environment information leakage.
- Adjusted the ``return=`` parameter of the contact form to accept template_group/template paths.
- Fixed a bug (#23318) where hiding the Channel selection field in an Entry would trigger a validation error on save.
- Fixed a bug (#23319) where a single relationship field could not have its selection deselected.
- Fixed a bug (#23320) where certain grid fields didn't always parse their variables.
- Fixed a bug (#23321) where the contact form would sometimes submit to an invalid URL.
- Fixed a bug (#23322) where members could not assign an RTE toolset.
- Fixed a bug (#23325) where an RTE field may appear twice inside a Grid inside a Fluid field.
- Fixed a bug (#23326) where hiding the author field in a layout could make autosaves throw an error on edit.
- Fixed a bug (#23327) where an empty custom layout tab refused to be deleted.
- Fixed a bug (#23329) where the sticky toggle in channel entries didn't stick.
- Fixed a bug in Channel Form where ``{status_menu}`` wouldn't include custom statii (as they say in dog-latin).
- Fixed a bug where populating fields with content from another channel could produce fatal errors.
- Fixed a bug where some tags were left unparsed in PHP 5.x.
- Fixed a fatal PHP error in the Core version that could occur when submitting a comment.


Version 4.0.1
-------------

Release Date: December 8, 2017

- The thumbnail view of the file picker now defaults to showing 25 at a time.
- Fixed a bug with ordering channel entries by custom fields.
- Fixed a bug where some file tags were left unparsed.
- Fixed a bug where relationshp fields threw errors when sorting by a relationship field.
- Fixed a bug (#23308) where settings for new channels had the wrong defaults applied, causing some entries to encode their HTML.
- Fixed a bug (#23307) where adding a field to an existing channel then editing an entry woudln't save the new field data.
- Fixed a bug where adding a field to an existing channel with a layout wouldn't always let you move that field in the layout.
- Fixed a bug where pagination forgot your filters in the Field Manager.
- Fixed a bug (#23313) where resolving a filename conflict on upload didn't work.
- Fixed a bug (#23303) where there was an HTML encoding issue on the CP Settings member profile page.
- Fixed a bug (#23309) where a textarea inside a Grid inside a Fluid field with formatting buttons showing would show an error on field render.
- Fixed a bug (#23312) where there might be an undefined constant error on some environments.


Version 4.0.0
--------------

Release Date: December 6, 2017

- One-click Updater

  - Simple, reliable, in-app updates let you easily keep up-to-date with the latest features, bug fixes, and security patches.
  - Get notifications right in your control panel, click update, blink, and enjoy the latest version!
  - Backs up your data before updating for safety.
  - Handles server issues or unanticipated problems gracefully, giving you a one-click restoration option.
  - Includes a command-line interface utility for scripting or performing updates without using the control panel.
  - Manual updates are still easy if needed, using the same two-folder replacement method as v3.

- Fluid Fieldtype

  - Added the :doc:`Fluid Fieldtype </fieldtypes/fluid>`, a special fieldtype that can contain multiple instances of other Fieldtypes!
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
  - Smart, filterable, ajaxified select fields everywhere you need them.
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
  - Layout Variables can now append and prepend to existing Layout Variables, opening up a new world of staying DRY!
  - Layout and embed variables that contain dates can now accept all parameters and modifiers available to date variables.
  - Added ``title`` as a valid option to the File Entries tag ``orderby=`` parameter.
  - ``{if toggle_field}`` conditionals now work as expected regardless of MySQL environment issues.
  - ``{if relationship_field}`` conditionals also now work as expected in all cases.
  - Channel Entries tag

    + Added ``show_expired="only"`` option to the Channel Entry ``show_expired`` parameter, which will bring back only expired entries.
    + Added ``sticky="only"`` option to the Channel Entry ``sticky`` parameter, which will bring back only entries marked sticky.
    + ``search:field=`` for numeric fields now supports piped values to allow ranges, e.g. ``search:year_discovered='>=1970|<1980'``
  - The search module now supports the site parameter, allowing searching across site.
  - Added ``{username}`` and ``{screen_name}`` variables to the Member Reset Password Form template.

- Emoji 😀🌐

  - Increased MySQL requirements to fully supports emoji. If you are upgrading, please see the :doc:`/installation/version_notes_4.0.0` for details.
  - Added support for emoji codes wherever Typography is performed (``:joy:`` becomes 😂). See `Emoji Catalog <https://unicodey.com/emoji-data/table.htm>`_ for a full list of supported short names.
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
  - Email module :doc:`Contact Form </add-ons/email/contact_form>` now has the ability to include a file attachment.
  - Eliminated some redundant queries when Channel Entries are saved.
  - Debugging errors no longer require an extra click to display the stack trace.
  - Error reporting can now be enabled for *all* site visitors from the control panel.
  - The :doc:`cookie path setting </cp/settings/security-privacy>` now defaults to ``/`` on new installations.
  - Removed the following default member fields, creating custom fields for any that had content: URL, location, occupation, interests, birthday, AOL IM, Yahoo IM, MSM IM, ICQ, bio.
  - Added the date field type to available member field types.
  - Channel display names now must be unique per-site.

- Security

  - Added an ``.htaccess`` file to the ``user/config`` folder to deny any web requests. But you've moved your system folder :doc:`above webroot </installation/best_practices>` anyway, right?

- Bug Fixes (only itemized bugs fixed in v4 that were *not* already backported to v3)

  - Fixed a bug (#22800) where the text fieldtype set to a number content type would not display its content if its value was zero.
  - Fixed a bug where entry comment stats could be incorrect.
  - Fixed a PHP error if the CP/URL service is called during an update.

- **Developers**

  + Please refer to :doc:`/development/v4_addon_migration` for details.

.. [#fields_all_sites] Applies to **new sites/fields only**. Upgrades from v3 will need to use a separate migration utility (coming soon) to allow existing fields to be shared across Sites.
