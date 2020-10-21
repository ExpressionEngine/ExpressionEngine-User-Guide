<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine v6 Change Log

## Version 6.0.0

### Beta 2 (Release: October 20, 2020)
- **Enhancements** 🚀
  - Updated the Members File Converter Utility to help users understand what it does.
  - Updated styling for the SQL Manager Utility.
  - Updated styling for results being displayed in the SQL Query Utility
  - Added "Make Sticky" to the bulk edit options for entires.
  - Updated styles for the Template Partial editor which was previously set to a small max-height. [#568](https://github.com/ExpressionEngine/ExpressionEngine/issues/568)
  - Updated styles for the RTE field to better represent paragraph spacing and other block elements. [#562](https://github.com/ExpressionEngine/ExpressionEngine/issues/562)
  - Added more editor buttons to RTE field


- **Documentation** 📝
  - Added new RTE Docs. [Extension Hooks](development/extension-hooks/global/rte.md), [RTE Fieldtype](fieldtypes/rte.md), [RTE Addon](add-ons/rte.md)
  - Updated docs for using the File field as a tag pair. [File Fieldtype](fieldtypes/file.md#using-as-modifier-tags-pairs)
  - Updated docs for upgrading from v2 to v6. [User Guide #92](https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/issues/92)
  - Added more documentation to Member Management tags. [Member Management](member/index.md)
  - General editorial updates

- **Bug Fixes** 💃🐛
  - Fixed a bug where Member template tags were not respecting `site_url` setting.
  - Fixed a bug where `{path='logout'}` caused too many redirects.
  - Fixed [#563](https://github.com/ExpressionEngine/ExpressionEngine/issues/563) where toggling the selector to allow multiple relationships on a Relationship field had no effect.
  - Fixed a bug where there was no "No Results" message in the File Manager when thumbnail view was activated and there where no files to display.
  - Fixed a bug where a user may not be able to get back to the Login screen after a required password reset.
  - Fixed [#551](https://github.com/ExpressionEngine/ExpressionEngine/issues/551) where the new RTE field did not work within a grid field.
  - Fixed [#546](https://github.com/ExpressionEngine/ExpressionEngine/issues/546) where the Color Picker field's color selector overflowed the row when in a grid.
  - Fixed [#553](https://github.com/ExpressionEngine/ExpressionEngine/issues/553) where a grid row was not added by default when the field's settings required 1 row minimum.
  - Fixed [#545](https://github.com/ExpressionEngine/ExpressionEngine/issues/545) where a grid row was only removed by clicking the delete icon and not by clicking elsewhere in the button.
  - Fixed [#545](https://github.com/ExpressionEngine/ExpressionEngine/issues/545) where a grid row was only removed by clicking the delete icon and not by clicking elsewhere in the button.
  - Fixed [#578](https://github.com/ExpressionEngine/ExpressionEngine/issues/545) where the outline of a grid row delete icon was still shown even though you could not delete the row based on minimum row settings in the field.
  - Fixed [#544](https://github.com/ExpressionEngine/ExpressionEngine/issues/544) where the Date tab in the entry rendered lowercase after saving the entry.
  - Fixed [#567](https://github.com/ExpressionEngine/ExpressionEngine/issues/567) where CSS was not being loaded on the installation page in some environments.
  - Fixed [#456](https://github.com/ExpressionEngine/ExpressionEngine/issues/456) where error was displayed when reloading the Control Panel after a session timeout.
  - Fixed [#565](https://github.com/ExpressionEngine/ExpressionEngine/issues/565) where an entry modal did not respect the dark mode setting.
  - Fixed [#574](https://github.com/ExpressionEngine/ExpressionEngine/issues/574), a typo in `utilites_lang.php`


### Beta 1 (Release: October 14, 2020)
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
  <!-- - **FOR REVIEW Made it easier to create Custom System Messages** -->
  - New Member Template examples have been added
  - New entry manager (Entries listing page)
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

- **Bug Fixes** 💃🐛 
  - Resolved bugs in the updaters where MySQL errors could be triggered.
  - Fixed Live Preview functionality with Grid and Fluid Fields
  - Fixed a bug where the debugger code highlighter would also highlight and overwrite other code blocks on a site's page    

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