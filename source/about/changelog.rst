ExpressionEngine 3.x Change Log
===============================

.. contents::
   :local:
   :depth: 1

Version 3.3.0
-------------

Release Date: April 19, 2016

- **NEW**: Added :doc:`Channel Sets </channel/sets>`.
- **NEW**: Added the default theme.
- **NEW**: Added the ability to add language information to a bbcode block (e.g. ``[code="php"]``).
- **NEW**: ``{logged_in_...}`` :ref:`Member variables <member_variables>` are now parsed early.
- **NEW**: Super Admins using "Login as" retain debugging information.
- **NEW**: Member localization will now "stick" with the site's preferences unless they have specified localization settings for their own account.
- **NEW**: Added FontAwesome to the Control Panel.
- **NEW**: Added a ``{site_description}`` global variable.
- **NEW**: Added an unordered list button to the predefined HTML buttons.
- **NEW**: Comments column on control panel entries listing will not show if comments are disabled and no comments are present on the site.
- **NEW**: Added variables to the following email templates:

  - 'User - Account declined notification' (``{username}``)
  - 'User - Account validation notification' (``{username}``, ``{email}``)

- The RTE fieldtype no longer manipulates the HTML it generates. What you save is what you get.
- Changed the email setting's SMTP password field and the moblog setting's email account password fields from plain text to password fields.
- Linked category group and field group names in the control panel now link to their respective category and field listings.
- Optimized relationship parent tag query.
- Updated `PHP Markdown <https://michelf.ca/projects/php-markdown/>`_ to 1.6.0.
- Removed code highlighting in ``[code]`` blocks.
- Removed Glyphicons from the Control Panel.
- Fixed a bug (#21697) where an error may show when an exception is thrown in PHP 7.
- Fixed a bug (#21696) where the Manage Categories toggle was unstyled.
- Fixed a bug (#21667) where the image formatting button on a textarea did not use the file picker.
- Fixed a bug (#21688) where validation errors set via AJAX on Grid fields would sometimes be unresolvable.
- Fixed a bug where channel form could sometimes overwrite fields that were not in the form.
- Fixed a bug (#21644) where the file manager did not load for users with a lot of files.
- Fixed a bug where grid with more than one relationship could not parse all of them.
- Fixed a bug where the RTE fieldtype wasn't always installed.
- Fixed a bug (#21582) where layouts missing the Categories tab would generate errors on the publish page.
- Fixed a bug (#21733) where layouts missing the Publish tab would generate errors on the publish page.
- Fixed a bug (#21677) where recalcuatling statistics didn't recalculate the comment counts.
- Fixed a bug (#21682) where the list for duplicating an existing template, when creating a new template, was unsorted.
- Fixed a bug (#21704) where Firefox wouldn't scroll to top in the CP.
- Fixed a bug (#21705) where saving an entry could trigger a PHP error.
- Fixed a bug (#21710) where the file modal's table did not sort.
- Fixed a bug (#21619) where ``[code]`` blocks and Markdown codeblocks did not properly add ``<pre>`` tags.
- Fixed a bug where the Channel Form would inadvertently remove add-on tags when editing entries.
- Fixed a MySQL error that would occur on invalid forum feed requests.
- Fixed a stray PHP 7 incompatibility in Channel Form
- Fixed a bug (#21711) where CSS assets were not being delivered in ``{path='css/_ee_channel_form_css'}`` requests.
- Fixed a bug where ``layout:`` globals were parsed in content.
- Fixed a bug in site settings where the HTML button form required a closing tag.
- Fixed a bug (#21699) where a PHP error occurred when editing an entry via the channel form if the instructions or label tags were present.
- Fixed a bug (#21671) where a 'Disallowed Key Characters' error occurred when saving the channel_lang.php translation file.
- Fixed a bug (#21700) where a PHP error occurred on the member group page in the control panel when pagination was present.
- Fixed a bug (#21755) where there were unused language keys.
- Fixed a few bugs (#21756, #21757, #21758, #21761, #21760, #21762, #21759, #21774) with duplicate language keys.
- Fixed a bug (#21765) where some language keys had grammar issues.
- Fixed a few bugs (#21766, #21767) where we weren't using language keys.
- Fixed a bug (#21768) where HTML button names were not being translated.
- Fixed a bug (#21769) where we had a small typo in new member notifications language.
- Fixed a bug (#21770) where a language key wasn't getting the proper substitution.
- Fixed a bug (#21771) where a language key wasn't in our language files.
- Fixed some langauge string bugs (#21754 and #21753).
- Fixed a bug (#21707) where some old auto saved entries refused to go away.
- Fixed a bug (#21750) where the File field could show an undefined index error if its data wasn't pre-cached.
- Fixed a bug where the default CP homepage could not be saved for members other than the logged-in member.
- Fixed a bug (#21683) where URL titles had to be unique site-wide instead of per-Channel.
- Fixed a number of display bugs (#21671) in the translator.
- Fixed a MySQL error when recounting statistics and the Forum was installed (#21780).
- Fixed a bug where the comment form could show despite comments being globally disabled.
- Fixed a bug on the member profile page where the link to the member group form did not show for superadmins.
- Reduced the password reset token's timeout. (thanks to security researcher |sjibe_kanti|)

.. |sjibe_kanti| raw:: html

  <a class="reference external" href="https://twitter.com/Sajibekantibd" rel="nofollow">Sjibe Kanti</a>

- Developers:

  - **NEW**: Added ``relationships_display_field_options`` hook to allow additional filters on the options in the publish field.
  - **NEW**: Added extension hooks for CategoryField, CategoryGroup, ChannelField, ChannelFieldGroup, File, MemberField, MemberGroup, Template, TemplateGroup, TemplateRoute models.



Version 3.2.1
-------------

Release Date: March 16, 2016

- Fixed a bug (#21679) where the file field could lose content when saving existing entries.
- Fixed a bug where apostrophes were not escaped in the Translation Utility.
- Fixed a bug where entries without authors would generate a PHP error.
- Fixed a bug where using channel form with a channel that has no channel form settings would generate PHP errors.
- Fixed a bug (#20554) where the RTE stored full URLs instead of ``{filedir_n}`` tags.
- Fixed a bug where usage of ``CI_DB_active_rec::distinct()`` would cause an exception.
- Fixed bugs (#21544, #21353) with uploading and assigning avatars.

- Developers:

  - Added member_ids to ``cp_members_validate_members`` hook.

Version 3.2.0
-------------

Release Date: March 8, 2016

- **NEW:** Added template tags for modified image file dimensions i.e. ``{image}{width:small}{/image}``.
- **NEW:** Added a Toggle Fieldtype for all your on/off and yes/no needs.
- **NEW:** Added URL Field Type
- **NEW:** Added Email Address Field Type
- The default database engine is now InnoDB
- Added Forum Aliases.
- Added the Forum Publish Tab back in.
- Added global template variable/conditional ``is_ajax_request``
- Yay: we deprecated the jQuery module! Boo: we made it installable so you can still use it. Really, just use their CDN and include it yourself.
- Added a notice to the Site Manager when the site limit has been reached.
- Changed the file display to use the file's name for non-images instead of the missing image thumbnail. (Bug #21270)
- Changed the behavior of the "Any ..." options in the Relationship settings such that it and the specific options are mutually exclusive, i.e. "Any channel" or a specific channel, but not both. (Bug #21659)
- Fixed a bug (#21250) where sidebar items could not be marked inactive. Now they can.
- Fixed a bug where the Core version tried to use the Spam service.
- Fixed a bug where the comment module could throw a PHP error for guest posts.
- Fixed a bug (#21650) where one could not remove all rows in a Grid field.
- Fixed a bug (#21647) where there could be an undefined variable error on the Publish screen.
- Fixed a bug (#21628) where categories would not maintain their selection on the Publish form when there was a validation error.
- Fixed a bug (#21626) where the path for the passwords dictionary file was pointing to the wrong location.
- Fixed a bug where formatting buttons on textareas would not work on new Grid rows.
- Fixed a bug (#21638) where textareas with a file chooser available would have non-images inserted as an image tag.
- Fixed a bug (#21567) where sites with OPcache enabled can result in a false erorr after a fresh install.
- Fixed a bug (#21555) where empty tabs could not be removed from a layout.
- Fixed a bug (#21545) where email templates could not be edited.
- Fixed a bug (#21655) where template versions could sometimes generate erorrs.
- Fixed a bug (#21656) where Template Revisions were displayed unsorted, rather than sorted by date.
- Fixed a bug (#21565) where channel field text formatting could not update existing entries.
- Fixed a bug (#21103) where installing from https would configure the site for http instead of https.
- Fixed a bug (#21187) where Channel Form would sometimes be a little too strict about required fields.
- Fixed a bug (#21215) where updating a site with template routes from a version before 2.9.3 would generate errors.
- Fixed a bug (#21651) where we had a spelling mistake in an language key.
- Fixed a bug (#21561) where the translation utitliy would truncate some HTML when saving.
- Fixed a bug (#21293) where the translation utility would break the form if the translation contained a quotation mark.
- Fixed a bug (#21648) where the last field in a layout would sometimes refuse to move.
- Fixed a bug (#21587) where removing custom fields that were in a layout could break the layout.
- Fixed a bug (#21487) where enabling versioning after creating a layout would generate errors.
- Fixed a bug (#21329) where sending HTML email via the Communicate utility could add non breaking spaces.
- Fixed a bug (#21318) where partial translations could not be saved.
- Fixed a bug (#21335) where channel form couldn't tell if an option was checked or not.
- Fixed a bug where Grid column clones were jealous and quietly assumed the identity of the original.
- Fixed a bug where you could not erase the contents of RTE field once it had been saved.
- Fixed a bug where commenting as a Guest generated an error.
- Fixed a bug (#21577) where the RTE would grow when switching from WYSIWYG to Source View.
- Fixed a bug where the front-end email settings page didn't require a password when you weren't changing your email address.
- Fixed a bug (#21287) where RTE fields could not be resized.
- Fixed a bug where database errors could sometimes not be displayed.
- Fixed a bug (#21601) where extension settings were only saved to the first method in the database.
- Fixed a bug (#21599) where the no_results conditional on nested relationship tags would have some of the initial characters cut off.
- Fixed a bug (#21584) where you couldn't properly duplicate the Super Admin member group.
- Fixed a bug (#21627) where the comment form didn't work when using Session or Session and Cookie front-end session types.


- Developers:

  - Added `output_show_message` hook for modifying the output of front-end system messages.
  - Added an ``$antipool`` parameter to ``random_string()`` in the string helper, to blacklist characters from the alphanumeric-type pools. Uses are for unambiguous strings for humans, i.e. order numbers, coupon codes, etc: ``$secret_code = strtoupper(random_string('alnum', 8, '0OoDd1IiLl8Bb5Ss2Zz'));``
  - The `cp_search_index` table was removed.
  - The VariableColumnModel no longer marks properties as dirty when filling.

Version 3.1.4
-------------

Release Date: February 26, 2016

- Fixed a **CRITICAL** bug where saving or deleting comments may cause data loss in certain areas of the associated Channel entries, caused by a change in 3.1.3. Only installations of 3.1.3 were affected.

Version 3.1.3
-------------

Release Date: February 25, 2016

- Added visual indicators to required grid columns.
- Grid's data type options now use the same names as the custom field's type options.
- When editing a grid column's data type the options are now filtered based on field type compatibility.
- Member listing setting "Sort By" choices now match available columns.
- Made some parameters in some Active Record methods required.
- Our CodeMirror linter had an epiphany and now realizes that installed plugins can have underscores in their tag names.
- Tweaked Performance tab of the Profiler for clearer display.
- Fixed a bug (#21457) where unchecked checkboxes in a publish form didn't stay unchecked.
- Fixed a bug (#21558) where some Pages module variables were empty (and potentially some other items if retrieved with ``config_item()``).
- Fixed a bug (#21566) where the `beforeSort` and `afterSort` Grid publish form events were not working.
- Fixed a bug (#21569) where categories of the same name thought they were all selected when only some of them were.
- Fixed a bug (#21581) where a MySQL error occured on the publish page if no member groups were included in the author list.
- Fixed a bug (#21593) where a front-end logout link may show a warning in PHP 7.
- Fixed a bug (#21594) where `number` input types were not bound to AJAX form validation and had no styling.
- Fixed a bug (#21595) where categories created under another MSM site could not be assigned to an entry.
- Fixed a bug (#21603) where Grid's JavaScript may try to manipulate table elements that are part of custom fieldtype markup.
- Fixed a bug (#21604) where relationships inside grid fields did not work consistently on MSM sites.
- Fixed a bug (#21605) where the documentation link for the "Suspend threshold" setting was broken.
- Fixed a bug (#21606) where the units used for the Lockout Time setting were not specified in the field description.
- Fixed a bug (#21609) where errors may appear when downloading a new blacklist under PHP 7.
- Fixed bugs (#21612 & #21616) where entry comment counts where not updated when adding or deleting comments.
- Fixed a bug (#21614) where one could not delete the last image manipulation for an upload directory.
- Fixed a bug (#21615) where there were a few misspellings of "entries" in the CP.
- Fixed a bug where Relationship fields could not be filtered when using session IDs for control panel sessions.
- Fixed a bug where the header search box did not repopulate correctly.
- Fixed a bug where a control panel search in the channel section could throw a PHP error.
- Fixed a bug where some default avatars were no longer displayed on the frontend.
- Fixed a bug where accepting the core file change notice resulted in a 404.
- Fixed a bug where custom fields could use reserved words as their short name.
- Fixed a bug where a Super Admin could delete his/her own account.
- Fixed a bug where installing an add-on with a publish tab would break existing publish form layouts.
- Fixed a bug where under the right conditions a member group that should have permissions to a forum doesn't.
- Fixed a bug where `glob()` could return `FALSE` and cause all manner of errors in the Add-On Manager.
- Fixed a bug where saving a template did not clear any of the caches.
- Fixed a bug where the Revisions tab on the publish entry form only showed two versions instead of all your versions.
- Fixed a bug where the profiler did not display the URI of the current page call.
- Fixed a bug on the Superadmin group edit page, where the checkboxes for including in the author list and member list were incorrect.
- Fixed a bug where the confirmation notice would not be shown after deleting a large number of entries.

Version 3.1.2
-------------

Release Date: January 28, 2016

- Fixed a bug (#21408) where the Show File Chooser checkbox would not save for text input fields.
- Fixed a bug (#21488) where updating your member password could result in a PHP error.
- Fixed a bug (#21493) where a "more info" link in the Security & Privacy settings 404d.
- Fixed a bug (#21498) where using `dynamic_parameters` resulted in a PHP error.
- Fixed a bug (#21505) where the template creation form would not have its submit buttons re-enabled after a validation error.
- Fixed a bug (#21508) where form validation messages were not presented properly when editing a member's profile.
- Fixed a bug (#21515) where the file upload modal didn't work when opened from the Rich Text Editor or the Textarea fields.
- Fixed a bug (#21520) where the installer did not use the system config override for theme URL.
- Fixed a bug (#21521) where extension settings were not wrapped in the proper markup.
- Fixed a bug (#21523) where member groups listing in channel layouts table was missing a space.
- Fixed a bug (#21526) where an error would appear when saving a category field.
- Fixed a bug (#21532) where accessing some files wrongly accused you of attempting to access files outside of a directory.
- Fixed a bug (#21537) where PHP 5.3 didn't like something the Pages module was doing and complained loudly.
- Fixed a bug (#21546) where one could not delete more than one category at a time via the category manager.
- Fixed a bug where the moblog settings page could run out of memory on large sites.
- Fixed a bug where `upload_directory` config overrides weren't overriding on error display in the File Manager
- Fixed a bug where relationship parsing could result in conditional errors.
- Fixed a bug where channel form did not work without a url title field.
- Fixed a bug in channel form where the validation parameters could be ignored.
- Fixed a bug where deleting a field group didn't delete its fields.
- Fixed a bug where Site filters never showed.
- Fixed a bug where uploading an avatar could result in an error about unlinking a directory.
- Fixed a bug where the installer incorrectly showed errors when moving avatars.
- Fixed a bug in the Channel form where non-superadmins did not always have access to all of their allowed channels.
- Added a warning to the File Manager when the upload directory you are browsing at is not on the file system.

Version 3.1.1
-------------

Release Date: January 20, 2016

- Fixed a bug (#21460) where interacting with a Relationship field's filter inside a new Grid row would cause an error on entry save.
- Fixed a bug where the contact form could throw a PHP error.
- Fixed a bug (#21507) where creating template groups with save as files would throw PHP errors.
- Fixed a bug (#21512) where using the filepicker in the publish form could result in an "Invalid selection" error.
- Fixed a bug where the filepicker for file fields forgot about the default modal view setting.
- Fixed a bug (#21511) where the status filter on the Entry Manager ignored your selected channel.
- Fixed a bug where Template Variables would not automatically sync from files.
- Fixed a bug where the Metaweblog API errored when attempting to send or receive data.

Version 3.1.0
-------------

Release Date: January 18, 2016

- Compatible with PHP 7 and MySQL 5.7
- Snippets and Global Variables can now be saved as files.
- Added the ability to manage categories from the Channel entry publish form.
- CodeMirror textareas (think Templates) are now resizable.
- Channel entries now default sort by entry date with the newest at the top.
- New member groups default to allowing online website access.
- Updated language in the installer to identify the directory that needs to be deleted if we can't automatically rename the installer directory.
- Template groups can be reordered in the sidebar again.
- Removed duplicate queries when displaying multiple relationship fields on the publish form.
- Changed File listing to sort by date by default.
- Changed Add-on listings so the add-on name always links to the module control panel or settings if they exist.
- Changed wording of File field button on Publish page.
- Fixed a bug where the Filepicker could run out of memory.
- Fixed a bug where ``load_package_js`` did not work on fieldtype publish pages.
- Fixed a bug where validation did not work consistently on some numeric types.
- Fixed a bug (#21255) where the "Assign category parents?" setting had no effect.
- Fixed a bug where the JavaScript for the Rich Tech Editor could not be loaded on the front-end.
- Fixed a bug (#21118) where custom member fields could not be populated.
- Fixed a bug (#21309) where custom member fields could not be rendered in a template.
- Fixed a bug where a PHP error would appear in the control panel if the `cp_css_end` hook was active.
- Fixed a bug where using the `logged_out_member_id=` parameter on Channel Form would throw an exception for logged-out users.
- Fixed a bug where duplicating a template group would not reset the hit counts for those templates or copy template permissions.
- Fixed a bug where new installs may be tracking template hits despite the setting appearing disabled.
- Fixed a bug (#21157) where files sizes could not be less than 1MB.
- Fixed a bug where bulk action checkboxes failed to work in the Entry Manager after searching.
- Fixed a bug (#21104) where add-ons with mutliple fieldtypes couldn't use their fieldtypes.
- Fixed a bug where the installer wouldn't automatically rename if you still had the mailing list export in your cache.
- Fixed a bug (#21458) where file uploads did not work in the Channel form.
- Fixed a bug (#21442) in the Channel form where PHP errors occurred when editing an entry with a file.
- Fixed a bug in the Channel form where PHP errors could occur when submitting an entry with no category assigned.
- Fixed a bug where CAPTCHA was not working properly on the Channel form.
- Fixed a bug where ENTRY_ID was not properly replaced on return after submitting the Channel form.
- Fixed a bug where the default status was not being used by the Channel form.
- Fixed a bug where new sites could not be created via the Site Manager.
- Fixed a bug (#21491) where the Grid model's cache could not be cleared on subsequent data queries.
- Fixed a bug (#21464) where removing a file didn't remove it's manipulated copies. It's hard saying good-bye.
- Fixed a bug (#21482) where templates were jealous and refused to show you their previous revisions.
- Fixed a bug (#21472) where checkboxes, radio buttons, and multiselect fieldtypes didn't pay attention when given their menu options on create.
- Fixed a bug where adding category groups to a channel that had a layout wouldn't let you move that category group in the layout.
- Fixed a bug (#21490) where "Populate the menu from another channel field" option in Channel Fields forgot which field you wanted to use.
- Fixed some language keys.
- Fixed a PHP warning when editing the Developer Forum theme templates.
- Fixed a bug where a duplicated Grid column would create two copies when duplicated.
- Fixed a Markdown bug with URLs that contain spaces when using Safe HTML.
- Fixed a bug (#21462) for PHP 5.3 which would lead to a fatal ``Using $this when not in object context...`` error. Time to upgrade PHP!
- Fixed a bug where stop word removal in the search module was not UTF-8 compatible. Zaro Ağa is no longer Zaro Ğ.
- Fixed an obscure URI detection bug that could lead to duplicate content duplicate content.
- Fixed a bug in Template Routes where it was ignoring the "Require all Segments" setting.
- Renamed Template Route's "Require all Segments" setting to "Require all Variables" to match its behavior.

- Developers:

  - Changed the event emitter to trigger subscriber events before manually bound ones
  - Model events will no longer trigger if the described event does not take place (no ``onAfterSave`` if save is called on an unchanged model)
  - Added ``less_than`` and ``greater_than`` validation rules
  - ``string_override`` key in publish form tab definitions works again.
  - Fixed a bug where asking a model query to return columns that didn't include the primary key would only return one result.
  - Class names can now be set on fieldsets via the shared form attributes array.
  - Fixed a bug in the legacy Addons library where incorrect paths would be returned from the `get_installed()` method.
  - Fixed a bug where alerts that were deferred would not carry over their manually-set close/cannot close setting.
  - Date fields with the date picker bound to them can set a custom date format via a `data-date-format` parameter on the text input.
  - The date picker can be bound to a text input using `EE.cp.datePicker.bind(element)`.
  - Added `comment_entries_query_result` hook for modifying the query result set for `{exp:comment:entries}`.
  - Added `comment_entries_comment_ids_query` hook for modifying the query that selects the IDs for comments to display in `{exp:comment:entries}`.
  - Added the ability for Folder List sidebars to be reordered.
  - Added a pause and resume method to the form validation JS.
  - Added: Channel Fields can now declare their compatibility type allowing editing of the type itself (i.e. RTE to Textarea).
  - Added a number of hooks to the following models:

    - Channel Entry
    - Member
    - Category
    - Comment

Version 3.0.6
-------------

Release Date: December 17, 2015

- Fixed a bug (#21240) where some templates rendered with errors relating to "protect_javascript".
- Fixed a bug (#21310) where Channel Layouts did not allow you to reposition fields that were added after the layout was created.
- Fixed a bug (#21400) where the Contact Form generated errors.
- Fixed a bug (#21400) where the Contact Form returned a white screen when the Spam module was enabled.
- Fixed a bug (#21412) where some categories appeared on the Publish tab.
- Fixed a bug (#21420) where the Relationship field could no longer organize its related items after searching.
- Fixed a bug (#21436) where RTEs were named inconsistently as fields vs. Grid columns.
- Fixed a bug where some elseif branches in template conditionals were not pruned correctly.
- Fixed a bug where searching withing a Relationship field would unsort your related entries.
- Fixed a bug where publish forms with large Relationship fields could overflow the POST data and result in data loss.
- Fixed a bug where new rows added to a Grid with a Relationship column could have pre-populated Relationship fields.
- Fixed a bug where filtering or searching a Relationship inside a Grid caused that Relationship to ignore the selection.
- Fixed a bug with some overzealous Markdown parsing.
- Fixed a bug where the Member module would not be installed when upgrading a Core installation to Standard.
- Fixed the ``{cp_edit_entry_url}`` variable.
- Fixed a bug where forum previews did not fall back to using the default index template if running the forums through the templates.
- Adjusted sub menus to scroll when they are long.
- Improved New Relic transaction reporting.
- Pre-release versions now include a visual indication that they're pre-release and also include the version identifier (e.g. ``dp.4``) in the extended version information.
- The installer has been calmed down a bit and won't skip showing you error messages when they exist.
- Added a check for the required PHP Fileinfo extension to the installer.
- Added a feature (#21418): duplicating a Template did not duplicate its allowed member groups.
- Added a feature (#21427): the Edit Manager's category filter is now populated based on the channel filter.
- Added a feature: comments can be formatted with any formatter you have installed. EE, we have Markdown!

Version 3.0.5
-------------

Release Date: December 2, 2015

- Fixed a bug (#21338) where categories with an ampersand in the title would not maintain its selection state on the entry publish form.
- Fixed a bug (#21300) where the RTE's image tool may place the selected image in another RTE when there are multiple on a publish form.
- Fixed a bug where a PHP error would appear in the control panel if the ``cp_css_end`` hook was active.
- Fixed a bug where some Channel entry date variables would not work in conditionals without having brackets around them.
- Fixed a bug (#21378) where the ``cp_css_end`` hook was never fired.
- Fixed a bug (#21394) where an incorrect language key was used for the working state of some buttons in the Members section.
- Fixed a bug (#21395) where a PHP error may appear on some actions dealing with file thumbnails.
- Fixed a bug (#21389) where some OGV files would not be accepted for upload.
- Fixed a bug (#21388) where validation for URL titles in Channel entries would incorrectly flag periods as not allowed.
- Fixed a bug where global snippets could not be edited.
- Fixed a bug where saving entries did not clear caches if that setting was enabled.
- Fixed a bug where the default homepage could be set to the publish page of no channel.
- Fixed a bug where only super admins could edit status groups.
- Fixed a bug where form success messages were removed too eagerly.
- Fixed a bug where modals were shy and did not scroll into view when using Firefox.
- Fixed a bug (#21380) where logging in as another member from the control panel would show a PHP error.
- Fixed a bug where channel layouts did not play nicely with the profiler.
- Fixed a bug (#21387, #21273) where the File module was not installed.
- Fixed a bug (#21373) where two file fields in one Channel would not work on the Publish page.
- Fixed a bug (#21344) where the file modal would not restrict you to the allowed directory when switching filters.
- Fixing a bug where no notice was shown when deleting a newly created publish layout tab with a field in it.
- Fixed a bug (#21406) where the "view" link in the CP for your MSM site did not open in a new tab.
- Fixed a bug (#21407) where extending the Category class revealed a PHP Runtime error.
- Fixed a bug (#21342) where CSV exports were really Comma-and-Space Separated Values.

Version 3.0.4
-------------

Release Date: November 18, 2015

- Fixed a bug that allowed `.codemirror` to stand on top of `.sub-menu`
- Fixed a bug that prevented grid column widths from affecting the publish UI. (note: column widths will not affect grid columns with RTE, Relationships or Textarea fields)
- Fixed a bug where run-on sentences made the RTE puff up with pride inside grid fields, we pulled him aside and set him straight.
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
