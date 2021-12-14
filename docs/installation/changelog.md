<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine v5 Change Log

## Version 5.4.3
Release Date: December 14, 2021

NOTE: **Important:** This version includes important security updates.

- **Enhancements** 🚀
  - Added noindex,nofollow to template used by ?URL redirect warning page.

- **Security** 🔒
  - Removed user's name from default email templates.
  - Updated functions with additional sanitization and XSS filtering.
  - Removed potential SQL injection vulnerabilities.




## Version 5.4.2
Release Date: March 4, 2021

NOTE: **Important:** This version includes important security updates.
- **Bug Fixes** 💃🐛
  - Fixed a bug [#347](https://github.com/ExpressionEngine/ExpressionEngine/issues/347) where radio field label and values were swapped in channel form.
  - Security: Fixed a potential directory traversal vulnerability

## Version 5.4.1
Release Date: February 8, 2021

- **Bug Fixes** 💃🐛

  - Fixed a bug where saving template revisions after system upgrade might have caused PHP error
  - Fixed a bug where categories in related entries were not eager loaded when using `{exp:channel:entries}` tag.
  - Fixed a bug [#474](https://github.com/ExpressionEngine/ExpressionEngine/issues/582) where entry body could be empty when using Moblog.
  - Fixed a bug with system not being reset to previous online/offline state when performing 1-Click update.
  - Fixed a bug with Debug Tools banner not being shown after 1-Click update.

- **Enhancements** 🚀
  - Updated Xmlrpc and Xmlrpcs libraries for PHP8 support.

## Version 5.4.0
Release Date: November 23, 2020
- **Enhancements** 🚀
  - Added relationship_entries_tagdata hook, which is functionally identical to the channel_entries_tagdata hook
  - Added support for [SameSite cookies via config override](general/system-configuration-overrides.md#cookie_samesite)
  - Added [config override to ignore channel stats](general/system-configuration-overrides.md#ignore_entry_stats), which can lead to improved performance when using models.
  - Add stats module action to run stats
  - Added database column type selector for textarea and RTE fields ([#464](https://github.com/ExpressionEngine/ExpressionEngine/issues/464))
  - Added post-upgrade and utility check for broken template tags and missing fieldtypes.
  - Added [Debug Tools utility](control-panel/utilities.md#debug-tools).
  - Added confirmation screen when attempting to update major versions.
  - Adds namespacing to v2 upgrades for ease of upgrading from v2 to v5
  - Added support to be able to upgrade directly from v2 to v5
  - Improved [XSS filtering for CP alerts](development/services/alert.md#addtobodyitem-class--null-xss_filter--true)
  - Added support for PHP 8
  - Added support for MySQL 8
  - Implemented different approach to trigger `before_channel_entry_delete` extension hook. 


- **Bug Fixes** 💃🐛

  - Fixed a bug [#589](https://github.com/ExpressionEngine/ExpressionEngine/issues/589) where putting line breaks in the `{pagination_links}` tag would cause rendering issues.
  - Fixed an inconsistency [#582](https://github.com/ExpressionEngine/ExpressionEngine/issues/582) in the toggle fieldtype properties.
  - Fixed a bug ([#480](https://github.com/ExpressionEngine/ExpressionEngine/issues/480)) where there has been no notice when extensions are disabled.
  - Fixed a bug ([#499](https://github.com/ExpressionEngine/ExpressionEngine/issues/499)) where categories hidden from channel layout might get lost upon saving the entry.
  - Fixed a bug ([#496](https://github.com/ExpressionEngine/ExpressionEngine/issues/496)) where file was sent twice when using drag&drop upload.
  - Fixed a bug ([#487](https://github.com/ExpressionEngine/ExpressionEngine/issues/487)) where custom fields data were not available for extensions when deleting entry.
  - Fixed a bug (#[457](https://github.com/ExpressionEngine/ExpressionEngine/issues/457)) where accented characters in variables were not truncated properly
  - Fixed a bug ([#450](https://github.com/ExpressionEngine/ExpressionEngine/issues/450)) where pagination on tables was not working correctly when performing search for html tags.
  - Fixed a bug ([#438](https://github.com/ExpressionEngine/ExpressionEngine/issues/438)) where JS combo loader was throwing error if extra `v` was passed into URL.
  - Fixed a bug ([#432](https://github.com/ExpressionEngine/ExpressionEngine/issues/432)) where parent entries were not fetched for relationship field inside grid.
  - Fixed a bug [#431](https://github.com/ExpressionEngine/ExpressionEngine/issues/431) where the EE Block/Allow list was not able to be downloaded from within the Block/Allow Module.
  - Fixed a bug ([#428](https://github.com/ExpressionEngine/ExpressionEngine/issues/428)) where Grid was throwing error PHP with certain fieldtypes.
  - Fixed a bug ([#421](https://github.com/ExpressionEngine/ExpressionEngine/issues/421)) where attachments were not sent from Communicate page.
  - Fixed a bug ([#419](https://github.com/ExpressionEngine/ExpressionEngine/issues/419)) where deprecated pagination code in member templates could cause a PHP error.
  - Fixed a bug ([#416](https://github.com/ExpressionEngine/ExpressionEngine/issues/416)) which prevented the version check in the CP footer from working properly.
  - Added validation for category parent ([#411](https://github.com/ExpressionEngine/ExpressionEngine/issues/411))
  - Fixed a bug ([#383](https://github.com/ExpressionEngine/ExpressionEngine/issues/383)) where Moblog wasn't functioning.
  - Fixed a bug ([#379](https://github.com/ExpressionEngine/ExpressionEngine/issues/379)) where comment subscription emails contained an invalid unsubscribe link.
  - Fixed a bug ([#283](https://github.com/ExpressionEngine/ExpressionEngine/issues/283)) where "field required" indicator was not showing a Grid column.
  - Fixed a bug ([#230](https://github.com/ExpressionEngine/ExpressionEngine/issues/230)) where accepting checksum in CP might result in wrong redirect when session type is "Session ID only".
  - Fixed a bug ([#91](https://github.com/ExpressionEngine/ExpressionEngine/issues/91), [#417](https://github.com/ExpressionEngine/ExpressionEngine/issues/417)) where link button was not working and formatting not displayed in RTE field on frontend.
  - Fixed a bug ([#72](https://github.com/ExpressionEngine/ExpressionEngine/issues/72)) where Maximum rows limit was not respected in File Grid field.
  - Fixed a bug ([#53](https://github.com/ExpressionEngine/ExpressionEngine/issues/53)) where previous month link was not clickable in Channel Form datepicker.
  - Fixed a bug where unsaved entries were not pulled in for live preview when using `status="open|closed"` parameter.
  - Fixed a bug where checking for updates might produce an error.
  - Fixed a bug where removing database record for template that is used as "No access redirect" would cause error
  - Fixed a bug where searching entries in CP in content only could produce SQL error.
  - Fixed a PHP error that could occur on publish if Pages was installed and hidden via layouts.
  - Fixed a rare PHP warning in the typography class.
  - Fixed a bug where some member pages did not display in the forums when using the forum tag on regular templates.
  - Fixed a PHP warning in the control panel when IDN variants weren't available on the server.
  - Fixed a bug where a query string could be added to URLs erroneously.
  - Altered a JavaScript filename that mod_security tended to object to.
  - Fixed a bug where input data were assumed to be URL encoded, causing certain character sequences to be stripped when cleaned.

## Version 5.3.2
 
Release Date: April 22, 2020
- **Updated support for PHP 7.4**
- Fixed a bug ([#399] (https://github.com/ExpressionEngine/ExpressionEngine/issues/399)) where a user was required to enter a Pages URI when selecting a default template.
- Fixed a bug ([#404] (https://github.com/ExpressionEngine/ExpressionEngine/issues/404)) where removing a database record for a template that is used would cause an error.
- Fixed a bug where some installations on Windows OS were unable to upgrade via the 1 Click Updater.
- Fixed a bug where selecting the first checkbox in a table's row which contains multiple checkboxes, the last checkbox would also automatically be selected.
- Fixed a bug ([#406] (https://github.com/ExpressionEngine/ExpressionEngine/issues/406)) where an error was thrown if EE was installed on a server that did not have the `iconv` PHP extension installed.
- Fixed a bug where if cURL failed during a 1 Click Update, no error was thrown to let the user know what happened.


## Version 5.3.1

Release Date: April 9, 2020

- **Added support for PHP 7.4**
- Fixed a bug ([#147](https://github.com/ExpressionEngine/ExpressionEngine/issues/147)) where `is_system_on` was changed to `y` when updating the CMS.
- Fixed a bug ([#188](https://github.com/ExpressionEngine/ExpressionEngine/issues/188)) where image uploads where failing because of missing integer casting.
- Fixed a bug ([#190](https://github.com/ExpressionEngine/ExpressionEngine/issues/190)) where omitting the return parameter for the `{exp:consent:form}` tag didn't redirect to same page as it was submitted on per the [docs](https://docs.expressionengine.com/latest/add-ons/consent.html#return).
- Fixed a bug ([#248](https://github.com/ExpressionEngine/ExpressionEngine/issues/248)) where the `after_channel_entry_save` extension hook would run twice when saving a new channel entry.
- Fixed a bug ([#292](https://github.com/ExpressionEngine/ExpressionEngine/issues/292)) where a user was unable to delete page uri or page template with default theme installed.
- Fixes a bug ([#321](https://github.com/ExpressionEngine/ExpressionEngine/issues/321)) where a warning was not being displayed when an entry was saved if a URI was entered in the Pages module without also selecting a template.
- Fixed a bug ([#337](https://github.com/ExpressionEngine/ExpressionEngine/issues/337)) where an entry with a URL title of `n` was being ignored.
- Fixed a bug ([#346](https://github.com/ExpressionEngine/ExpressionEngine/issues/346)) where strpos Non-string needles will be interpreted as strings in the future.
- Fixed a bug ([#382](https://github.com/ExpressionEngine/ExpressionEngine/issues/382)) where drag and drop fields were producing errors in MSM sites.


## Version 5.3.0

Release Date: September 28, 2019

- Added a [category_group parameter](channels/category-archive.md#category_group) to the Category Archive tag.
- Added a check to ensure proper image rotation on image upload.
- Added a config override [`save_tmpl_globals`](general/system-configuration-overrides.md#save_tmpl_globals) to allow separate saving behavior for global variables
- Added event hooks to the: 

    - [Channel](development/extension-hooks/model/channel.md),
    - [ChannelFormSettings](development/extension-hooks/model/channel-form-settings.md),
    - [ChannelLayout](development/extension-hooks/model/channel-layout.md),
    - [Site](development/extension-hooks/model/site.md),
    - [Snippet](development/extension-hooks/model/template-snippet.md),
    - and [Specialty Template](development/extension-hooks/model/template-specialty-template.md) models.

- Fixed Bug ([#139](https://github.com/ExpressionEngine/ExpressionEngine/issues/139)) where on some servers the mime type of SVG is different then we expected.
- Fixed Bug ([#143](https://github.com/ExpressionEngine/ExpressionEngine/issues/143)) where dbforge->add_key(array()) would create individual, non-sequenced keys rather than make a multi-column key.
- Fixed a bug ([#178](https://github.com/ExpressionEngine/ExpressionEngine/issues/178)) where the table row tools were not present when managing Pending members with a non-Super Admin.
- Fixed a bug ([#299](https://github.com/ExpressionEngine/ExpressionEngine/issues/299)) where search strings with quotes in the Search and Replace utility would not be replaced in certain circumstances.
- Fixed a bug ([#306](https://github.com/ExpressionEngine/ExpressionEngine/issues/306)] where {encode} variable output didn't pass the WC3 validator.
- Fixed a bug in the Channel Form where the unique_url_title and dynamic_title parameters did not work properly together.
- Fixed a bug in the forum RSS feed where a PHP error caused an invalid feed.
- Fixed a bug where the current entry revision did not always show the correct revision author.
- Fixed a bug where the lowercase parameter of the :url_slug variable modifier wasn't being applied.

## Version 5.2.6

Release Date: July 30, 2019

- Fixed a bug ([\#268](https://github.com/ExpressionEngine/ExpressionEngine/issues/268)) where legacy member fields might not display in some circumstances.

## Version 5.2.5

Release Date: July 25, 2019

- Added validation to template variable and template partial labels.
- Optimized Member model to reduce potential duplicate queries setting up field structure.
- Added `disable_emoji_shorthand` [system configuration override](general/system-configuration-overrides.md#disable_emoji_shorthand) to disable Emoji shorthand parsing, e.g. `:rocket:` to 🚀
- Fixed a bug([\#234](https://github.com/ExpressionEngine/ExpressionEngine/issues/234))  where deleting a category from the entry form forced a logout if sessions were being used.
- Fixed a bug([\#235](https://github.com/ExpressionEngine/ExpressionEngine/issues/235)) where template variable files with long names could cause the creation of duplicate variables.
- Fixed a bug in the member manager where an error occured when viewed by member groups without member edit permission.
- Fixed a bug([\#247](https://github.com/ExpressionEngine/ExpressionEngine/issues/247)) where relationship entry_ids single tags were not parsed.

## Version 5.2.4

Release Date: June 24, 2019

- Tighten validation of Comment form return parameter.
- Fixed a bug where relationship fields with parameters were not always parsed.
- Fixed a bug where relationships in Grid fields could prevent parsing of standalone relationship fields.
- Fixed a bug in the Channel Form where posting to a different Site could corrupt Site Pages.
- Fixed a bug([\#212](https://github.com/ExpressionEngine/ExpressionEngine/issues/212)) where the search module did not validate the maximum keyword length.
- Fixed a bug([\#224](https://github.com/ExpressionEngine/ExpressionEngine/issues/224)) where several links in the control panel linked to the EE4 docs.
- Fixed a bug where a PHP error occured searching for 'All posts by this member'.

## Version 5.2.3

Release Date: May 27, 2019

- Fixed a bug ([\#168](https://github.com/ExpressionEngine/ExpressionEngine/issues/168)) where validation errors did not clear in the template partial editor.
- Fixed a bug ([\#86](https://github.com/ExpressionEngine/ExpressionEngine/issues/86)) where the template editor would not highlight EE comment tags correctly on newlines.
- Fixed a bug ([\#180](https://github.com/ExpressionEngine/ExpressionEngine/issues/180)) where the Query Form would run a query two extra times.
- Fixed a bug ([\#170](https://github.com/ExpressionEngine/ExpressionEngine/issues/170)) where member imports with text passwords triggered a password change email upon login.
- Fixed a bug ([\#182](https://github.com/ExpressionEngine/ExpressionEngine/issues/182)) where Nested relationship fields inside of fluid fields go unparsed in some circumstances.
- Fixed a bug where logins to the control panel were not always redirected to the proper page.
- Fixed a bug where Live Preview threw errors if the template used a category parameter in the channel entry tag.
- Fixed a bug in the spam module where approving a Channel Entry that has categories generated PHP errors.

## Version 5.2.2

Release Date: March 28, 2019

- Security: Fixed a potential remote template code execution bug.
- Added a `channel_form_overwrite` [system configuration override](general/system-configuration-overrides.md#channel_form_overwrite) that allows Channel Form authors to replace files that they have uploaded, if they upload one with the same name as an existing file. No warnings, use with caution!
- Increased size of the the comment edit and template notes textareas.
- Fixed a bug where searching an AJAX-filtered list in the control panel by something other than its label may not return the expected result.
- Fixed a bug where default value selection of a Select list might show an empty selected value.
- Fixed a bug([\#150](https://github.com/ExpressionEngine/ExpressionEngine/issues/150)) where the Search Module may not filter by category.
- Fixed a bug([\#158](https://github.com/ExpressionEngine/ExpressionEngine/issues/158)) where a link to create new content would appear on the homepage despite content creation permissions.
- Fixed a bug([\#160](https://github.com/ExpressionEngine/ExpressionEngine/issues/160)) where a PHP error may appear on the Search Module's no-results screen.
- Fixed a bug([\#161](https://github.com/ExpressionEngine/ExpressionEngine/issues/161)) where searching for terms wrapped in quotes using the Search Module would return all entries.
- Fixed a bug([\#162](https://github.com/ExpressionEngine/ExpressionEngine/issues/162)) where the `{switch=}` variable would not parse inside the Comment Entries tag.
- Fixed a bug where Channel Form edit forms might not respect the `channel=` parameter.
- Fixed a bug([\#140](https://github.com/ExpressionEngine/ExpressionEngine/issues/140)) where channel field pagination did not recognize fields using the new table structure.
- Fixed a bug([\#164](https://github.com/ExpressionEngine/ExpressionEngine/issues/164)) where upload directories were not ordered alphabetically in the upload modal filter.
- Fixed a bug([\#166](https://github.com/ExpressionEngine/ExpressionEngine/issues/166)) where creating a template group with a period in the name would show an error.
- Fixed a bug where submitting a Channel Form containing a category menu would show an error if there were no category groups assigned to the channel.

## Version 5.2.1

Release Date: March 11, 2019

- Fixed a bug where RTE fields did not display properly in the channel form for non-logged in users.
- Fixed a bug ([\#152](https://github.com/ExpressionEngine/ExpressionEngine/issues/152), [\#154](https://github.com/ExpressionEngine/ExpressionEngine/issues/154)) where some Relationship fields may not parse.
- Fixed a bug ([\#153](https://github.com/ExpressionEngine/ExpressionEngine/issues/153)) where Channel settings could not save if there were no authors.

## Version 5.2.0

Release Date: March 7, 2019

- Added `:number_format` to [Variable Modifiers](templates/variable-modifiers.md#number_format)
- Added [`db_backup_row_limit` config](general/system-configuration-overrides.md#db_backup_row_limit) to help the [Database Backup Utility](control-panel/utilities.md#database-backup-utility) complete on limited resources.
- Improved revision listings ([\#87](https://github.com/ExpressionEngine/ExpressionEngine/pull/87)) for entry and template versioning, to sort in reverse chronological order.
- Database connection and SQL errors are now hidden if debug levels aren't sufficient.
- Changed hard-coded system paths to be dynamic in some error messages. ([\#126](https://github.com/ExpressionEngine/ExpressionEngine/pull/126))
- Fixed a bug ([\#55](https://github.com/ExpressionEngine/ExpressionEngine/issues/55)) where fields may parse incorrectly if they shared similar names.
- Fixed a bug ([\#119](https://github.com/ExpressionEngine/ExpressionEngine/issues/119)) where Simple Commerce subscription end date was not correctly formatted before output.
- Fixed a bug ([\#114](https://github.com/ExpressionEngine/ExpressionEngine/issues/114)) where dates may be incorrectly localized.
- Fixed a bug ([\#124](https://github.com/ExpressionEngine/ExpressionEngine/issues/124)) where new Channels could not be saved if there were a large number of authors.
- Fixed a bug ([\#134](https://github.com/ExpressionEngine/ExpressionEngine/issues/134)) where Channel Entries tag queries could be malformed if searching by custom field contents across multiple sites.
- Fixed a bug ([\#133](https://github.com/ExpressionEngine/ExpressionEngine/issues/133)) where Channel Entries tag queries could be malformed if ordering by custom field contents across multiple sites.
- Fixed a bug ([\#138](https://github.com/ExpressionEngine/ExpressionEngine/issues/138)) where the JavaScript date picker bind function ignored its elements parameter.
- Fixed a bug ([\#128](https://github.com/ExpressionEngine/ExpressionEngine/issues/128)) where upload directories were not alphabetized in File Manager upload button dropdown.
- Fixed a bug ([\#121](https://github.com/ExpressionEngine/ExpressionEngine/issues/121)) where the date picker would stay overlayed when switching tabs.
- Fixed a bug ([\#118](https://github.com/ExpressionEngine/ExpressionEngine/issues/118)) where using the Search and Replace utility on templates would escape quotes in the replacement text.
- Fixed a bug ([\#117](https://github.com/ExpressionEngine/ExpressionEngine/issues/117)) where Relationship fields may not parse if using hypens in the field name and similarly-named fields exist.
- Fixed a bug ([\#132](https://github.com/ExpressionEngine/ExpressionEngine/issues/132)) where the smiley picker would not work in Fluid or Grid.
- Fixed a bug ([\#144](https://github.com/ExpressionEngine/ExpressionEngine/issues/144)) where the Save & New button was visible without entry creation permissions.
- Fixed a bug where POST detection of the Channel Form that fixed [\#70](https://github.com/ExpressionEngine/ExpressionEngine/issues/70) would fail if ACTion IDs were not already inserted.
- Fixed a bug ([\#145](https://github.com/ExpressionEngine/ExpressionEngine/issues/145)) where Live Preview wouldn't work without entry creation permissions.
- Fixed a bug ([\#146](https://github.com/ExpressionEngine/ExpressionEngine/issues/146)) where Relationship fields that shared field IDs with Grid Relationship columns may clash.
- Fixed a bug ([\#141](https://github.com/ExpressionEngine/ExpressionEngine/issues/141)) in the search module where the absolute count variable and the total result tag were incorrect.

## Version 5.1.3

Release Date: January 24, 2019

- Added the ability for URL fields to accept the `mailto:` protocol. Or fixed that bug, depending on your 🏔🔭.
- Fixed a bug where some member validation language keys may appear unparsed in some third-party contexts.
- Fixed a potential issue ([\#76](https://github.com/ExpressionEngine/ExpressionEngine/issues/76)) where some jQuery selectors weren't specific enough.
- Fixed a bug where some SVGs in File fields would not render a preview on the publish form.
- Fixed a bug ([\#64](https://github.com/ExpressionEngine/ExpressionEngine/issues/64)) where the `absolute_count` variable in the File Entries tag did not show the correct number.
- Fixed a bug ([\#23587](https://expressionengine.com/support/bugs/23587)) where Markdown links with inline title attributes would not parse correctly.
- Fixed a bug ([\#94](https://github.com/ExpressionEngine/ExpressionEngine/issues/94)) where the `:limit` modifier would not preserve whole words as documented.
- Fixed a bug ([\#101](https://github.com/ExpressionEngine/ExpressionEngine/issues/101)) where there may be errors on a member profile page after creating a new MSM site.
- Fixed a bug ([\#104](https://github.com/ExpressionEngine/ExpressionEngine/issues/104)) where pipe characters would not be stripped in the Text formatter's `urlSlug()` method.
- Fixed a bug where Relationship fields may appear unparsed.
- Fixed a bug where required Grid columns may not have the proper styling on the publish form.

## Version 5.1.2

Release Date: January 3, 2019

- **Security** 🔒

  - Fixed a potential SQL injection vulnerability.
  - Fixed a potential remote code execution vulnerability in PHP 5.

- **Bug Fixes** 🐛

  - Fixed a bug where the Member Auth module could run queries on Forum tables if Forum was not installed.
  - Fixed a bug where stringified numbers could be inserted into some queries.
  - Fixed a bug ([\#70](https://github.com/ExpressionEngine/ExpressionEngine/issues/70)) where a template rendered on a POST submission could break Channel Form behavior on that template.
  - Fixed a bug ([\#74](https://github.com/ExpressionEngine/ExpressionEngine/issues/74)) where File Grid might not parse when used inside a Fluid field.

- **Developers** 💻
  - Added the [Cookie Service](development/services/cookie.md)

## Version 5.1.1

Release Date: December 21, 2018

- Fixed a bug where File Grid may not work in a Fluid field.
- Fixed a bug ([\#60](https://github.com/ExpressionEngine/ExpressionEngine/issues/60)) where the one-click updater could not back up database tables with a custom prefix.

## Version 5.1.0

Release Date: December 20, 2018

- _Security:_ Fixed a privilege escalation bug for members with member administration access.
- Added PHP 7.3 compatibility
- File fields now support drag and drop uploading!
- Brand new fieldtype, [File Grid](fieldtypes/file-grid.md), for uploading multiple files at once and populating them into a Grid. Perfect for product photos and galleries!
- Fixed a bug ([\#34](https://github.com/ExpressionEngine/ExpressionEngine/issues/34)) where `.app-about-info` would sometimes appear under some content elements.
- Fixed a possible undefined index error in the members section of the control panel.
- Fixed some typos in some field descriptions.

## Version 5.0.2

Release Date: December 13, 2018

- Optimized the member delete routine's heir assignments.
- Fixed a bug where a PHP error may appear when the CP homepage newsfeed cannot be fetched.
- Fixed a bug where extension hooks may run during a one-click upgrade.
- Fixed a bug ([\#18](https://github.com/ExpressionEngine/ExpressionEngine/pull/18)) where a supplied class was not added to "select" fields in the shared form view.
- Fixed a potential malformed query issue ([\#24](https://github.com/ExpressionEngine/ExpressionEngine/pull/24)) in the relationships_query hook.
- Fixed a potential PHP error ([\#21](https://github.com/ExpressionEngine/ExpressionEngine/issues/21)) when saving option-type Grid columns.
- Fixed a bug ([\#20](https://github.com/ExpressionEngine/ExpressionEngine/issues/20)) where the installer checks if the user theme directory is writable even when not installing the default theme.
- Fixed a bug ([\#13](https://github.com/ExpressionEngine/ExpressionEngine/issues/13)) where `{if fluid_field}` conditionals would not work as expected.
- Fixed a bug ([\#14](https://github.com/ExpressionEngine/ExpressionEngine/issues/14)) where entries would fail to save when a Toggle field was hidden and MySQL was in strict mode.
- Fixed a bug ([\#22](https://github.com/ExpressionEngine/ExpressionEngine/issues/22)) where the JavaScript-based URL title generation did not match the PHP version.
- Fixed a bug ([\#37](https://github.com/ExpressionEngine/ExpressionEngine/issues/37)) where Channel settings could not be saved if the default Channel Form author didn't exist.
- Fixed a bug ([\#36](https://github.com/ExpressionEngine/ExpressionEngine/issues/36)) where deleting multiple statuses would not reset the confirmation modal button state.
- Fixed a bug ([\#29](https://github.com/ExpressionEngine/ExpressionEngine/issues/29)) where curly-braced quantifiers could not be used in regular expression conditionals.
- Fixed a bug ([\#41](https://github.com/ExpressionEngine/ExpressionEngine/issues/41)) where text formatting buttons would not appear in Channel Form.
- Fixed a bug ([\#42](https://github.com/ExpressionEngine/ExpressionEngine/issues/42)) where the `rte_toolset_id=` parameter in Channel Form wouldn't work.
- Fixed a bug ([\#31](https://github.com/ExpressionEngine/ExpressionEngine/issues/31)) where the Model service could not eager-load third-party inverse relationships.
- Fixed a bug ([\#11](https://github.com/ExpressionEngine/ExpressionEngine/pull/11)) where HasAndBelongstoMany relationships wouldn't work properly.
- Fixed a bug in the installer where a MySQL error could occur in update 4.0.1 if the layout model was used.

## Version 5.0.1

Release Date: November 18, 2018

- Fixed a bug ([\#5](https://github.com/ExpressionEngine/ExpressionEngine/issues/5)) where non-repo downloads could not install or update via admin.php.

## Version 5.0.0

Release Date: November 16, 2018

- **Free Open-Source Software!** 👐🤝🤗
  - **Licensing** 👩‍⚖️📜
    - FOSS is boss! ExpressionEngine is now free open-source software!
    - Licensed with the permissive [Apache License, Version 2.0](https://expressionengine.com/license).
  - **Application Changes** 🛠
    - ExpressionEngine now requires PHP 5.6+.
    - The ExpressionEngine news feed on the control panel homepage is now opt-in.
    - Sharing of diagnostic and usage data to expressionengine.com is now opt-in.
    - Removed license checks and restrictions from the Site Manager. You can haz All The Sites!
    - Removed the license page from the control panel.
    - Removed license validation.
    - Removed "Core" version feature restrictions.
- **Bug Fixes** 💃🐛
  - Fixed a rendering bug and potential XSS issue.
  - Fixed a bug where in rare circumstances, a relationship tag was left unparsed.
  - Fixed a bug where a Channel entries tag with a categories parameter could generate errors when the tag returned no entries.
- **Developers** 💻
  - Development is now taking place in public [on GitHub](https://github.com/ExpressionEngine/ExpressionEngine). Get involved!
  - Removed unused Javascript plugins:
