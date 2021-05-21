<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# ExpressionEngine v6 Change Log
## Version 6.0.6 (Release: May 21, 2021)
- **Bug Fixes** 💃🐛 
  - Resolved [#1091](https://github.com/ExpressionEngine/ExpressionEngine/issues/1091) where the field type dropdown when creating a new field was not displaying correctly in Firefox.

## Version 6.0.5 (Release: May 20, 2021)
- **Bug Fixes** 💃🐛 
  - Resolved [#323](https://github.com/ExpressionEngine/ExpressionEngine/issues/323) where the Redis Cache driver was using a deprecated command.
  - Resolved [#709](https://github.com/ExpressionEngine/ExpressionEngine/issues/709) where long labels in select fields caused wrapping issues.
  - Resolved [#1087](https://github.com/ExpressionEngine/ExpressionEngine/issues/1087) where roles did not have access to entries after saving role preferences on other MSM site.
  - Resolved issue where a PHP 7.3+ warning that occurred when non-members triggered email notifications.
  - Resolved issue where the search input in entry manager would loose focus after returning results.
  - Resolved issue with styles for Entries Bulk Edit modal
  - Resolved issue with modal overlay colors
  - Resolved issue with positioning of alert banner on Entries Screen.

# ExpressionEngine v6 Change Log
## Version 6.0.4 (Release: May 18, 2021)
- **Bug Fixes** 💃🐛 
  - Resolved [#173](https://github.com/ExpressionEngine/ExpressionEngine/issues/173) where Live Preview was not triggered when changing order of related entries in a Relationship Fieldtype.
  - Resolved [#207](https://github.com/ExpressionEngine/ExpressionEngine/issues/207) which prevented the the new file/upload button to be usable in a Textarea Fieldtype after a new Textarea was created in a Fluid Field
  - Resolved [#233](https://github.com/ExpressionEngine/ExpressionEngine/issues/233) where Template Route could be accidentally erased.
  - Resolved [#347](https://github.com/ExpressionEngine/ExpressionEngine/issues/347) where radio field label and values were swapped in channel form.
  - Resolved [#908](https://github.com/ExpressionEngine/ExpressionEngine/issues/908) where a non-superadmin could not switch MSM sites within the Control Panel
  - Resolved [#910](https://github.com/ExpressionEngine/ExpressionEngine/issues/910) where the Date Picker Fieldtype was adding an extra month when clicking on the last day of the month of months with more days than the next or previous.
  - Resolved [#911](https://github.com/ExpressionEngine/ExpressionEngine/issues/911) where some style assets did not load for the debugger.
  - Resolved [#922](https://github.com/ExpressionEngine/ExpressionEngine/issues/922) where creating rows in a Fluid Field which contained a File fieldtype would result in the file already being chosen and also updating all previous rows.
  - Resolved [#936](https://github.com/ExpressionEngine/ExpressionEngine/issues/936) where some data were erased when saving member role.
  - Resolved [#939](https://github.com/ExpressionEngine/ExpressionEngine/issues/939) where longer channel names could overlap in the side navigation.
  - Resolved [#941](https://github.com/ExpressionEngine/ExpressionEngine/issues/994) where the UI let users attempt to delete entries for which they didn't have permission to delete.
  - Resolved [#995](https://github.com/ExpressionEngine/ExpressionEngine/issues/995) where switching between multi-select fieldtypes could result in options being lost.
  - Resolved [#986](https://github.com/ExpressionEngine/ExpressionEngine/issues/937) where a MySQL error was sometimes thrown when creating new template.
  - Resolved [#998](https://github.com/ExpressionEngine/ExpressionEngine/issues/998) where the `{exp:member:edit_profile}` threw an error when the user accessed the page and was not logged in.
  - Resolved [#1044](https://github.com/ExpressionEngine/ExpressionEngine/issues/1044) where the search parameter applied to a grid loop wasn't being applied in Live Preview.
  - Resolved an issue where the initial sorting of content when populating a custom field based on other fields was incorrect.
  - Resolved an issue which prevented new posts to be published via the Metaweblog API.
  - Resolved an issue where creating a new Quick Link could generate an error.
  - Removed "export" options from template options dropdown when bulk selecting templates in the Template Manager. Export templates always results in exporting all templates.


## Version 6.0.3 (Release: February 17, 2021)
NOTE: **Important:** This version includes important security updates.

- **Bug Fixes** 💃🐛 
  - Resolved [#629](https://github.com/ExpressionEngine/ExpressionEngine/issues/629) where CP styles were broken by browser extension.
  - Resolved [#800](https://github.com/ExpressionEngine/ExpressionEngine/issues/800) where File Picker was not shown for Text fields.
  - Resolved [#824](https://github.com/ExpressionEngine/ExpressionEngine/issues/824) where channel entry stats numbers were not consistent.
  - Resolved [#871](https://github.com/ExpressionEngine/ExpressionEngine/issues/871) where some channel access checkboxes were still selected on Role edit page after 
  - Resolved [#885](https://github.com/ExpressionEngine/ExpressionEngine/issues/885) where checking for template access was creating unnecessary server load.
  - Resolved [#888](https://github.com/ExpressionEngine/ExpressionEngine/issues/888) where PHP notice was shown when viewing front-end of fresh EE6 installation without templates.
  - Resolved bug where removing avatars in legacy member templates was throwing PHP error.
  removing all permissions.
  - Resolved bug where Template Profiler might throw PHP error when checking for memory.
  - Resolved bug with file upload not working on entry edit page after invoking file browser in thumb view.
  - Resolved bug when JavaScript warning was thrown when file was uploaded and name conflict resolved.
  - Resolved bug where database may not have existed in backup during update
  - Resolved bug where Theme Folder Path may not have been correct causing errors during updates.
  - Resolved but where some 3rd party add-on icons where not properly fetched.
  - Security: Fixed a potential remote code execution vulnerability
  - Security: Fixed a potential directory traversal vulnerability

- **Enhancements** 🚀
  - Added `PrimaryMembers` relationship for Role model.
  
  
## Version 6.0.2 (Release: February 5, 2021)
- **Bug Fixes** 💃🐛 
  - Resolved [#192](https://github.com/ExpressionEngine/ExpressionEngine/issues/192) where keywords filter was not always working in Entries Manager when using Safari browser.
  - Resolved [#812](https://github.com/ExpressionEngine/ExpressionEngine/issues/812) where SuperAdmin could not log in after editing its role.
  - Resolved [#817](https://github.com/ExpressionEngine/ExpressionEngine/issues/817) where it was not possible to add new items in Simple Commerce.
  - Resolved a bug where no icons where displaying for missing files in file field.
  - Resolved display issues in file browser for files that have been physically deleted.
  - Resolved [#847](https://github.com/ExpressionEngine/ExpressionEngine/issues/847) where parent_id key was missing on exp_categories table.
  - Resolved bug with system not being reset to previous online/offline state when performing 1-Click update.
  - Resolved bug with Debug Tools banner and version info popup not being shown after 1-Click update.

- **Enhancements** 🚀
  - Added extension hooks for Role Model
  - `index.php` and `admin.php` are now updated automatically when performing 1-Click update.

## Version 6.0.1 (Release: January 22, 2021)
- **Bug Fixes** 💃🐛 
  - Resolved [#783](https://github.com/ExpressionEngine/ExpressionEngine/issues/783) where an exception could be thrown when deleting users with long user names.
  - Resolved [#768](https://github.com/ExpressionEngine/ExpressionEngine/issues/768) where some buttons on the "forgot password" screen where not translated.
  - Resolved [#730](https://github.com/ExpressionEngine/ExpressionEngine/issues/730) where a link was invalid.
  - Resolved [#744](https://github.com/ExpressionEngine/ExpressionEngine/issues/744) where the incorrect file upload directory was selected in an RTE field.
  - Resolved [#733](https://github.com/ExpressionEngine/ExpressionEngine/issues/733) where jump menu was not changing correctly when a user choose a different language for the Control Panel.
  - Resolved [#753](https://github.com/ExpressionEngine/ExpressionEngine/issues/753) where debug was set to automatically set to `1` on new install.
  - Resolved [#737](https://github.com/ExpressionEngine/ExpressionEngine/issues/737) where images uploaded to a file grid field did not always show as added to the entry.
  - Resolved [#713](https://github.com/ExpressionEngine/ExpressionEngine/issues/713) where site was set to "offline" after upgrading to EE6.
  - Resolved [#693](https://github.com/ExpressionEngine/ExpressionEngine/issues/693) where only 5 images were added to an entry when adding more than 5 images to a file grid within a fluid field.
  - Resolved [#735](https://github.com/ExpressionEngine/ExpressionEngine/issues/735) where installer could not finish on some shared hosting environments.
  - Resolved [#740](https://github.com/ExpressionEngine/ExpressionEngine/issues/740) where on-the-fly manipulations were not updated when an image is replaced.
  - Resolved [#714](https://github.com/ExpressionEngine/ExpressionEngine/issues/714) where Color Picker events are not fired on Grid settings page
  - Resolved [#742](https://github.com/ExpressionEngine/ExpressionEngine/issues/742) where `logged_in_primary_role_id` was not parsing in templates.
  - Resolved [#725](https://github.com/ExpressionEngine/ExpressionEngine/issues/725) where a language key was missing for the Jump Menu.
  - Resolved [#721](https://github.com/ExpressionEngine/ExpressionEngine/issues/721) where channels named with numbers where not shown correctly in main navigation.
  - Resolved [#708](https://github.com/ExpressionEngine/ExpressionEngine/issues/708) where MySQL's join limit could be reached and cause errors.
  - Resolved [#717](https://github.com/ExpressionEngine/ExpressionEngine/issues/717) where new user roles where not being shown in the main navigation.
  - Resolved [#572](https://github.com/ExpressionEngine/ExpressionEngine/issues/572) where the main navigation flyout menu could not accommodate long list of channels.
  - Resolved [#696](https://github.com/ExpressionEngine/ExpressionEngine/issues/696) where the EECLI was not installed via 1-Click update.
  - Resolved [#703](https://github.com/ExpressionEngine/ExpressionEngine/issues/703) where channel form could not upload files to other site.
  - Resolved [#691](https://github.com/ExpressionEngine/ExpressionEngine/issues/691) where add-on classes were not properly aliased.
  - Resolved [#705](https://github.com/ExpressionEngine/ExpressionEngine/issues/705) where an incorrect tag was added to docs.

- **Enhancements** 🚀
  - EE Core code is now formatted for PSR-12!
  - Select buttons in Relationship fields can now be customized.
  - Add cache clearing option for the JumpMenu [#623](https://github.com/ExpressionEngine/ExpressionEngine/issues/623)
  - Removed Channel options in relationship field when there is only one channel to choose from [#684](https://github.com/ExpressionEngine/ExpressionEngine/issues/684).
  - Added more heading options to the RTE field [#695](https://github.com/ExpressionEngine/ExpressionEngine/issues/695).

## Version 6.0.0 (Release: December 17, 2020)
- **New Control Panel Design** 🎨
  - Added Jump Menu. Navigate ExpressionEngine fast
  - Many new changes and improvements that make the control panel cleaner, and more delightful to use
  - Brand new dark theme.
  - New sidebar navigation
  - New Account Menu
  - Create and Edit navigation items have been merged
  - Better navigation. Navigation buttons are now in a more consistent location. The member account menu shows the member's primary role. "Manager" has been removed from most of the page names, e.g "Entry Manager" is now - "Entries". Navigation works better on mobile.
  - Add-ons and categories have been moved out of the dev menu and into the sidebar
  - The files page has a new thumbnail view
  - Collapsible sidebar navigation
  - Editing and preview files is now easier in the files manager
  - “Sticky entries” is now optional feature that can be turned on in preferences for each channel
  - You can now drag to change the width of the live preview panes
  - The add-ons page uses a new card view, shows add-on icons, and has a separate tab for updates
  - The SQL query form has new buttons to insert common used SQL snippets
  - The tabs and save buttons on the edit entry page are now sticky
  - The date picker has a new today button, and days are easier to click.
  - The grid field now collapses on mobile
  - The dashboard has been upgraded to be more useful.
  - "Remove" wording has been changed to the more appropriate "delete" for destructive actions.
  - Deletion confirm dialogs are more scary
  - Pagination improvements. Pagination shows 8 pages, instead of 3.
  - You can now tab to toggle buttons
  - Added support for third-party add-on icons to Add-on Manager
  - Changed sidebar copyright company name
  - Default avatars have been removed
  - UX Updates to encourage CMS integrators to take the appropriate next steps while using the CMS
  - And many more changes!
  - Template editor improvements
    - You can now comment EE code with command + / in the template editor
    - You can now select a single line of text when clicking on a gutter number in the template editor
    - Improved EE syntax highlighting
  - New Member Template examples have been added
  - New entry manager (Entries listing page) with filters bar, better layout, simpler search, and individual filter clearing!
  - Live preview has been modified to make add-on support easier
  - New Variable modifiers to crop, resize, and rotate images
  - Member Groups have been replaced with member roles.
    - Members have one primary roles, and can also can have multiple other roles
    - Role permissions are additive
  - New Field Types
    - New RTE
    - New Color Picker Field
    - New Relationship field
  - Began working toward ADA compliance
  - Users can now upload [WebP](https://developers.google.com/speed/webp) images via the File Manager [#304](https://github.com/ExpressionEngine/ExpressionEngine/issues/304)
  - The Blacklist/Whitelist Module for ExpressionEngine has been renamed to Block and Allow Module.
  - Upload Directory and Upload Path are now populated with `{base_url}` and `{base_path}` by default when creating new Upload Directories.
  - The success notification for a saved entry now links back to the saved entry.
  - Improved error message for removed models and tables.
  - Updated default system error messages to use new v6 design.
  - Updated styles for 1-Click Updater and Installer Screens



- **Bug Fixes** 💃🐛 
  - Resolved bugs in the updaters where MySQL errors could be triggered.
  - Fixed Live Preview functionality with Grid and Fluid Fields
  - Fixed a bug where the debugger code highlighter would also highlight and overwrite other code blocks on a site's page
  - Resolved issue where new template groups were not recognized on a blank install until the user also creates a new template group in the Template Manager.
  - Resolved [#431](https://github.com/ExpressionEngine/ExpressionEngine/issues/431) where the EE Block/Allow list was not able to be downloaded from within the Block/Allow Module.
    

- **Developers** 💻
  - Moved tests to use [Cypress](https://www.cypress.io/)
  - Add-ons that use Members must use Roles in place of MemberGroups
  - Removed EllisLab from Namespace and EllisLab folders
  - Updated CodeMirror to version 5.48
  - Deprecated the Channel Status controller `getForegroundColor()`
  - The member property `display_avatars` has been removed
  - The config options `enable_avatars` and `allow_avatar_uploads` have been removed
  - Removed the deprecated jQuery add-on
  - Removed the deprecated Emoticon add-on
  - Forgot Password emails will now respect your "Mail Format" preference (essentially enabling the ability to use - HTML in Forgot Password emails).
  - Fixed a bug where table bulk selections can be saved by the browser on page reload, but don't show in the UI.
  - New base classes can be extended as part of add-ons (setting the stage for future functionality (migrations etc.- )  Not a required change to add-ons but encouraged. 
  - [`allow_php` config override](general/system-configuration-overrides.md#allow_php) now needs to be set in config.php to be able to enable [PHP in templates](templates/overview.md#php-in-templates).
  - `upload_file_name_blacklist` config override renamed to `upload_blocked_file_names`
  - `exp_sites.site_pages` data type has been changed to MEDIUMTEXT.
  - Moved language files from `system/ee/legacy` folder to `system/ee/language`.
  - Added `$config['legacy_member_templates'] = 'y';` to allow legacy member functionality which is now not allowed by default [see System Config Overrides](general/system-configuration-overrides.md#legacy_member_templates).    
  - New member groups no longer have access to HTTP-protected templates by default [#279](https://github.com/ExpressionEngine/ExpressionEngine/issues/279).
