<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# ExpressionEngine v6 Change Log
## Version 6.2.0 (Release: January 13, 2022)

NOTE: **Important:** This version includes important security updates.

- **Contributors** 🙌   

- **Enhancements** 🚀

  - Added PHP 8.1 support.
  - Added counter for total members in a Role [#1582](https://github.com/ExpressionEngine/ExpressionEngine/issues/1582), [#1467](https://github.com/ExpressionEngine/ExpressionEngine/issues/1467).
  - Added `ignore_member_stats` to increase performance on sites with a large number of members. 
  - Added the use of `{if no_results}` to the Request module [#1559](https://github.com/ExpressionEngine/ExpressionEngine/issues/1559).
  - Added the ability to disable the CLI via settings toggle or System Config Overrides.
  - Added improved password validation when users create, edit, or reset their password.
  - Added the ability for users to toggle the password input on the login screen, so that users can choose to view their passwords as they type.
  - Added ability to assign users a role when using front-end Member Form tags.
  - Added a min/max number of relationships to the Relationship field settings [#40](https://github.com/ExpressionEngine/ExpressionEngine/issues/40).
  - Added ability to assign previously created field groups when importing Channel Sets [#1288](https://github.com/ExpressionEngine/ExpressionEngine/issues/1288).
  - Added more links between comment page and Comments Jump menu [#1359](https://github.com/ExpressionEngine/ExpressionEngine/issues/1359).
  - Added ability for modules to be used in the Menu Manager [#54](https://github.com/ExpressionEngine/ExpressionEngine/issues/54).
  - Added `sticky` column to Entry Manager in the Control Panel [#1293](https://github.com/ExpressionEngine/ExpressionEngine/issues/1293).
  - Added `sticky="none"` parameter for `exp:channel:entries` [#488](https://github.com/ExpressionEngine/ExpressionEngine/issues/488).
  - Added `entry_id` and `url_title` as searchable fields in the Control Panel Entry Manager [#1259](https://github.com/ExpressionEngine/ExpressionEngine/issues/1259).
  - Added `sticky` parameter and `most_used_categories` value to `orderby` parameter to `exp:channel:category_archive` [#1256](https://github.com/ExpressionEngine/ExpressionEngine/issues/1256).
  - Added new `:trim` variable modifier [#1182](https://github.com/ExpressionEngine/ExpressionEngine/issues/1182)
  - Added the ability to use `exp:category_heading` without specifying the category in the URL. [#1181](https://github.com/ExpressionEngine/ExpressionEngine/issues/1181).
  - Added the entry_id along with the channel name in Relationship field UI.
  - Added warning when wrong cookie domain is being used and preventing users from logging into the Control Panel.
  - Improved performance of queries and caching [#751](https://github.com/ExpressionEngine/ExpressionEngine/issues/751) , [#1280](https://github.com/ExpressionEngine/ExpressionEngine/issues/1280).
  - Improved cookie registration [#1427](https://github.com/ExpressionEngine/ExpressionEngine/issues/1427).
  - Improved the add-on namespace generator of the CLI. 
  - Improved the Model Generator when using `make:model` in the CLI.
  - Improved UI of the the Entry Manager.
  - Improved performance when using the Search Module [#1403](https://github.com/ExpressionEngine/ExpressionEngine/issues/1403).
  - Updated password security options.

- **Bug Fixes** 💃🐛 

  - Resolved [#367](https://github.com/ExpressionEngine/ExpressionEngine/issues/367) where turning on channel entry revision For existing channels did not turn it on for existing entries.
  - Resolved [#1434](https://github.com/ExpressionEngine/ExpressionEngine/issues/1434) where using exact keyword search on `exp:channel:entries` could trigger PHP errors in Live Preview.
  - Resolved [#1468](https://github.com/ExpressionEngine/ExpressionEngine/issues/1468) where the File Upload modal could make it impossible to Create/Edit a new entry.
  - Resolved [#1509](https://github.com/ExpressionEngine/ExpressionEngine/issues/1509) where templates with duplicate names from MSM sites were not being synchronized.
  - Resolved [#1569](https://github.com/ExpressionEngine/ExpressionEngine/issues/1569) where Shared Form View: 'short-text' type inputs throws E-Notice if 'label' parameter not specified.
  - Resolved [#1588](https://github.com/ExpressionEngine/ExpressionEngine/issues/1588) where non-superadmins could not upload avatars.
  - Resolved [#1491](https://github.com/ExpressionEngine/ExpressionEngine/issues/1491) where mod_security could trigger a 406 error in the Control Panel. 
  - Resolved [#1604](https://github.com/ExpressionEngine/ExpressionEngine/issues/1604) where the `{member_profile_link}` variable could be incorrect
  - Resolved [#1628](https://github.com/ExpressionEngine/ExpressionEngine/issues/1628) where italic styling was broken in the RTE when using Channel Forms.
  - Resolved [#1689](https://github.com/ExpressionEngine/ExpressionEngine/issues/1689) where the close button for template settings modal window was not positioned correctly.
  - Resolved bug where if the search input is empty and loses focus, the dropdown buttons become undefined when using some search forms in the Control Panel.
  - Resolved issue where the user could be prevented from updating value/label pairs when editing certain field types. 
  - Resolved bug where CLI `update` command could result in PHP error.
  - Resolved bug where users couldn't select column type for new grid field.
  - Resolved bug where the wrong last-modified header was sent with CSS requests.
  - Resolved bug where sorting filters were being reset when using pagination with the File Manager.
  - Fixed required field error message for a Grid inside a Fluid field that was triggered erroneously.
  - Resolved a maximum row size MySQL error that could be triggered when upgrading from v5 to v6.
  - Resolved bug in the updater script to remove orphan publish layouts.


- **Developers** 💻

  - Updated `template_post_parse` hook [#1195](https://github.com/ExpressionEngine/ExpressionEngine/issues/1195).

## Version 6.1.6 (Release: November 11, 2021)
- **Contributors** 🙌   
 
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17011377?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bradford Akin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=bakin1999" target="_BLANK">@bakin1999</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  
  - Resolved [#1421](https://github.com/ExpressionEngine/ExpressionEngine/issues/1421) where column header was not localized in Translate utility.
  - Resolved [#1485](https://github.com/ExpressionEngine/ExpressionEngine/issues/1485) where H2 header was not styled correctly in RTE field using Redactor.
  - Resolved [#1495](https://github.com/ExpressionEngine/ExpressionEngine/issues/1495) where using regular expressions in templates could cause PHP errors.
  - Resolved [#1518](https://github.com/ExpressionEngine/ExpressionEngine/issues/1518) where not all header variables were passed to add-on settings pages.
  - Resolved issue where debug bar was breaking some pages in Control Panel
  - Improved UI in several areas of Control Panel

## Version 6.1.5 (Release: October 22, 2021)
- **Contributors** 🙌   
 
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/13821249?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">JCOGS Design</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=jcogs-design" target="_BLANK">@jcogs-design</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  
  - Resolved [#1402](https://github.com/ExpressionEngine/ExpressionEngine/issues/1402) where using dynamic parameters in channel form could result in PHP deprecation errors.
  - Resolved [#1459](https://github.com/ExpressionEngine/ExpressionEngine/issues/1459) where Access Overview page was throwing error if the assigned add-on was removed without uninstall.
  - Updated the example URLs in index.php to use `https`.
  - Resolved [#1460](https://github.com/ExpressionEngine/ExpressionEngine/issues/1460) where searching by role in CP if no members have this role was throwing SQL error.
  - Resolved issue when sorting in Relationship column inside File grid could result in JavaScript error after file upload.
  - Resolved issue with ExpressionEngine Pro where "Login" button was not shown on prolets after logout from CP.
  - Resolved [#1462](https://github.com/ExpressionEngine/ExpressionEngine/issues/1462) where using Grid field with jQuery 3 in Channel Form caused JavaScript errors.
  - Resolved [#1466](https://github.com/ExpressionEngine/ExpressionEngine/issues/1466) where URL input could be confused with password input on "Login as..." page.
  - Improved PHP8 compatibility.

## Version 6.1.4 (Release: October 18, 2021)
- **Contributors** 🙌   
 
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Mc</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  
  - Resolved [#1345](https://github.com/ExpressionEngine/ExpressionEngine/issues/1345) where redirect of banned visitor was throwing an error.
  - Resolved [#1411](https://github.com/ExpressionEngine/ExpressionEngine/issues/1411) where length of Grid column name and label were not validated.
  - Resolved [#1426](https://github.com/ExpressionEngine/ExpressionEngine/issues/1426) where Request plugin did not handle arrays properly.
  - Resolved [#1439](https://github.com/ExpressionEngine/ExpressionEngine/issues/1439) where the list of member's Roles was not fully populated on CP page.

  - Resolved issue where sufficient error message was not provided when 1-click update was failing.
  - Resolved issue where style of Channel Form could be broken under certain conditions.
  - Resolved issue where forum message attachments were not being filtered properly.
  - Resolved issue where 'Login' button was not showing up on prolets after logout.

## Version 6.1.3 (Release: October 15, 2021)
- **Contributors** 🙌   
 
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Mc</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  
  - Resolved issue with 1-Click Updater not working if `cookie_secure`was set to `y`.
  - Resolved issue where template for 'Forgot Username' email message was missing.
  - Resolved [#959](https://github.com/ExpressionEngine/ExpressionEngine/issues/959) where link to the custom CP homepage was not showing in navigation.

## Version 6.1.2 (Release: October 13, 2021)
- **Contributors** 🙌   

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    

<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17011377?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bradford Akin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=bakin1999" target="_BLANK">@bakin1999</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/53965?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Brian Litzinger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=litzinger" target="_BLANK">@litzinger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Robin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/931642?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Sobral</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=robsonsobral" target="_BLANK">@robsonsobral</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  
  - Resolved [#209](https://github.com/ExpressionEngine/ExpressionEngine/issues/209) where `autocomplete` parameter was not correct for some password inputs.
  - Resolved [#371](https://github.com/ExpressionEngine/ExpressionEngine/issues/371) where reserved words were not fully respected when creating Template Partials and Variables.
  - Resolved [#375](https://github.com/ExpressionEngine/ExpressionEngine/issues/375) where creating a checkboxes with populating from another channel field was causing JavaScript error.
  - Resolved [#387](https://github.com/ExpressionEngine/ExpressionEngine/issues/387) where Select field inside Grid could be not correctly parsed in template.
  - Resolved [#460](https://github.com/ExpressionEngine/ExpressionEngine/issues/460) where Duration field was not validated correctly.
  - Resolved [#489](https://github.com/ExpressionEngine/ExpressionEngine/issues/489) where files in File Grid field were uploaded twice when using Channel Form.
  - Resolved issue where it was not possible to use space in comparison operator when searching with `exp:channel:entries`.
  - Resolved [#884](https://github.com/ExpressionEngine/ExpressionEngine/issues/884) where `{if no_results}` was not working in `{exp:channel:next_entry}` and `prev_entry` tags.
  - Resolved [#1058](https://github.com/ExpressionEngine/ExpressionEngine/issues/1058) where search was not working on Relationships field outside of initial list of entries
  - Resolved [#1070](https://github.com/ExpressionEngine/ExpressionEngine/issues/1070), [#298](https://github.com/ExpressionEngine/ExpressionEngine/issues/298) where tags with varibale modifiers were not parsed when separated on multiple lines.
  - Resolved [#1100](https://github.com/ExpressionEngine/ExpressionEngine/issues/1100) where 'Show formatting buttons' setting was not respected when duplicating Grid fields with Textarea.
  - Resolved [#1101](https://github.com/ExpressionEngine/ExpressionEngine/issues/1101), [#845](https://github.com/ExpressionEngine/ExpressionEngine/issues/845) where UI of Publish Layout editing was not correct.
  - Resolved [#1108](https://github.com/ExpressionEngine/ExpressionEngine/issues/1108), [#854](https://github.com/ExpressionEngine/ExpressionEngine/issues/854) where on-the-fly image manipulations were not always giving expected results.
  - Resolved [#1125](https://github.com/ExpressionEngine/ExpressionEngine/issues/1125), [#1399](https://github.com/ExpressionEngine/ExpressionEngine/issues/1399) where Translation Utility was not saving all changes correctly.
  - Resolved [#1172](https://github.com/ExpressionEngine/ExpressionEngine/issues/1172) where Select fields inside Grid did not have empty value
  - Resolved issue with member Role change in Simple Commerce module
  - Resolved [#1135](https://github.com/ExpressionEngine/ExpressionEngine/issues/1135) where check for HTTPS connection was not consistent
  - Fixed JavaSript errors in Channel Form
  - Resolved [#1140](https://github.com/ExpressionEngine/ExpressionEngine/issues/1140) where selected checkbox options were not showing as checked in Channel Form.
  - Resolved [#1153](https://github.com/ExpressionEngine/ExpressionEngine/issues/1153) where permissions to delete entries were not always respected
  - Resolved [#1184](https://github.com/ExpressionEngine/ExpressionEngine/issues/1184) where non-English characters were not displayed properly in channel names and author names inside entries listing
  - Resolved issue where Toggle field was not rendered correctly as an Entry Manager column.
  - Resolved [#1224](https://github.com/ExpressionEngine/ExpressionEngine/issues/1224) where validation of fields submitted as arrays was not treating empty values correctly.
  - Resolved [#1231](https://github.com/ExpressionEngine/ExpressionEngine/issues/1231) where "include in memberlist/authorslist" checkboxes were not un-selectable.
  - Resolved [#1232](https://github.com/ExpressionEngine/ExpressionEngine/issues/1232) where `None` option was not displayed for Moblog author field.
  - Resolved [#1240](https://github.com/ExpressionEngine/ExpressionEngine/issues/1240) where `channel_url` was not set to correct value when creating channel.

  - Resolved [#1284](https://github.com/ExpressionEngine/ExpressionEngine/issues/1284) where Textarea was blocking common keyboard shortcut
  - Resolved [#1309](https://github.com/ExpressionEngine/ExpressionEngine/issues/1309) where the folders dropdown could be clipped on Files modal
  - Resolved [#1356](https://github.com/ExpressionEngine/ExpressionEngine/issues/1356) where first visit to template that exists only in files could throw an error
  - Resolved [#1402](https://github.com/ExpressionEngine/ExpressionEngine/issues/1402) where deprecation error was shown on PHP 7.4 when using dynamic parameters with channel form.
  - Resolved the issue when CP URL could be incorrect after showing idle modal.
  - Resolved support for `{if frontedit}` conditional in templates.


## Version 6.1.1 (Release: October 7, 2021)
- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  - Resolved issue when Live Preview was not always triggered during changes in RTE field.
  - Resolved [#1199](https://github.com/ExpressionEngine/ExpressionEngine/issues/1199) where it was not always possible to change field population method for Dropdown inside Grid.
  - Resolved issue with typography filtering being too strict.
  - Resolved minor CSS issue on Addons page for mobile screens.
  - Resolved minor JS issue when saving cookie consent in Control Panel.

## Version 6.1.0 (Release: October 6, 2021)

NOTE: **Important:** This version includes important security updates.

- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/194579?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ajohnson" target="_BLANK">@ajohnson</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Mc</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17011377?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bradford Akin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=bakin1999" target="_BLANK">@bakin1999</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/53965?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Brian Litzinger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=litzinger" target="_BLANK">@litzinger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/6020323?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Doug Black</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=dougblackjr" target="_BLANK">@dougblackjr</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/163302?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Geoff Cowan</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=geoffcowan" target="_BLANK">@geoffcowan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/35812875?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Gilbert</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=gilbert-hop" target="_BLANK">@gilbert-hop</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2587?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">John Fuller</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=johnfuller" target="_BLANK">@johnfuller</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Robin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/12945835?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Zaccaeus</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=zdehkordi" target="_BLANK">@zdehkordi</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  - Resolved [#179](https://github.com/ExpressionEngine/ExpressionEngine/issues/179) where an image thumbnail could be given an incorrect path.
  - Resolved [#463](https://github.com/ExpressionEngine/ExpressionEngine/issues/463) where `sanitize_filename()` method to incorrectly return empty strings.
  - Resolved [#536](https://github.com/ExpressionEngine/ExpressionEngine/issues/536) where Control Panel users were not notified when a "resend activation email" failed.
  - Resolved issues in the Control Panel when use the Safari web browser [#702](https://github.com/ExpressionEngine/ExpressionEngine/issues/702) [#851](https://github.com/ExpressionEngine/ExpressionEngine/issues/851) [#965](https://github.com/ExpressionEngine/ExpressionEngine/issues/965)
  - Resolved [#682](https://github.com/ExpressionEngine/ExpressionEngine/issues/682) where the description for "Save Template Revisions" setting was not accurate
  - Resolved [#724](https://github.com/ExpressionEngine/ExpressionEngine/issues/724) where .`index.html` files where listed in folders that only allowed images.
  - Resolved [#746](https://github.com/ExpressionEngine/ExpressionEngine/issues/746), [#837](https://github.com/ExpressionEngine/ExpressionEngine/issues/837) where option fieldtypes were not working correctly in Channel Form using PHP8.
  - Resolved [#785](https://github.com/ExpressionEngine/ExpressionEngine/issues/785) where users could inadvertently leave an entry publish page without warning while there were unsaved changes.
  - Resolved [#951](https://github.com/ExpressionEngine/ExpressionEngine/issues/951) where users could see channels they didn't have access to.
  - Resolved [#957](https://github.com/ExpressionEngine/ExpressionEngine/issues/957) where RTE configs were not properly saving.
  - Resolved [#996](https://github.com/ExpressionEngine/ExpressionEngine/issues/996) where resizing textareas beyond the parent element was breaking other children of that parent.
  - Removed extra quote in breadcrumbs [#1015](https://github.com/ExpressionEngine/ExpressionEngine/issues/1015)
  - Resolved [#1016](https://github.com/ExpressionEngine/ExpressionEngine/issues/1016) where turning on cookie consents could throw javascript warning.
  - Resolved [#1017](https://github.com/ExpressionEngine/ExpressionEngine/issues/1017) where variable modifiers were not applied to`{count}` variable inside Grid field
  - Resolved [#1045](https://github.com/ExpressionEngine/ExpressionEngine/issues/1045) where Live Preview requests could be cached.
  - Resolved [#1078](https://github.com/ExpressionEngine/ExpressionEngine/issues/1078) where SVGs were not allowed to be uploaded as images.
  - Resolved [#1102](https://github.com/ExpressionEngine/ExpressionEngine/issues/682) where entries from other MSM sites were shown on dashboard
  - Resolved [#1130](https://github.com/ExpressionEngine/ExpressionEngine/issues/1130) where Log class was throwing error in PHP8 during system update
  - Resolved [#1149](https://github.com/ExpressionEngine/ExpressionEngine/issues/1149) where channel description character limit is not checked in form.
  - Resolved [#1154](https://github.com/ExpressionEngine/ExpressionEngine/issues/1154) where some links in Jump Menu were poiting to wrong pages
  - Resolved [#1212](https://github.com/ExpressionEngine/ExpressionEngine/issues/1212) which caused errors in PHP 8.
  - Resolved [#1242](https://github.com/ExpressionEngine/ExpressionEngine/issues/1242) where HTML entites in RTE settings were parsed incorrectly. 
  - Resolved [#1264](https://github.com/ExpressionEngine/ExpressionEngine/issues/1264) where the `{comment}` variable within `{exp:comment:entries}` tag did not work with variable modifiers
  - Resolved [#1278](https://github.com/ExpressionEngine/ExpressionEngine/issues/1278) where relationship fields could throw errors after upgrading versions.
  - Resolved bug where live preview failed when cross-domain requests were being made.
  - Resolved a bug where the Communicate page would not load on sites with extremely large numbers of members.

- **Enhancements** 🚀
  - Many UI improvements across the Control Panel
  - Introduced [ExpressionEngine Pro](/pro/overview.md)!
  - Major updates to [CLI](/cli/intro.md).
    - New commands: `make:addon`,`make:command`,`make:migration`,`make:model`,`make:prolet`,`make:widget`,`migrate`, `migrate:addon`,`migrate:all`,`migrate:core`,`migrate:reset`,`migrate:rollback` .
    - Modified commands: `prepare-upgrade` is now `update:prepare`, `run-update-hook` is now `update:run-hook`
  - Brought back more details to breadcrumbs [#573](https://github.com/ExpressionEngine/ExpressionEngine/issues/573), [#1159](https://github.com/ExpressionEngine/ExpressionEngine/issues/1159)
  - Added Category Group ID to the Category group listing [#698](https://github.com/ExpressionEngine/ExpressionEngine/issues/698)
  - Resolved [#927](https://github.com/ExpressionEngine/ExpressionEngine/issues/927) to add clarification.
  - Added number of primary role members on roles listing page [#569](https://github.com/ExpressionEngine/ExpressionEngine/issues/569)
  - Added `preserve_words` parameter for `:limit` modifier. [#171](https://github.com/ExpressionEngine/ExpressionEngine/issues/171)
  - Users can now use CMD/Ctrl + S to save entries in the Control Panel
  - Improved functionality of RTE [#669](https://github.com/ExpressionEngine/ExpressionEngine/issues/669), [#1006](https://github.com/ExpressionEngine/ExpressionEngine/issues/1006)
  - Added "Insert HTML" button for RTE fields using CKEditor.
  - Added Redactor as an editor type in the RTE.
  - Major updates to cookies and GDPR functionality.  
    - Adding logging of all consents, including guests [#271](https://github.com/ExpressionEngine/ExpressionEngine/issues/271)
    - Removed unused cookies [#955](https://github.com/ExpressionEngine/ExpressionEngine/issues/955)
    - Added ability to change cookies lifetime value
    - Converted all front-end cookies to be session cookies. [#955](https://github.com/ExpressionEngine/ExpressionEngine/issues/955)
    - Added consent version to audit log.
    - Show alert in CP if consent is required but not signed
    - Consents are now invalidated when new cookies are added.
    - Added ability to change cookies lifetime value 
  - Added `{if no_results}` to Grid Field for use when using the search to limit rows. [#894](https://github.com/ExpressionEngine/ExpressionEngine/issues/894)
  - Added `form_class` parameter to the member registration form. [#716](https://github.com/ExpressionEngine/ExpressionEngine/issues/716) [Docs Link](https://docs.expressionengine.com/latest/member/registration.html#parameters)
   - Made status column in entry list respect the status text case [#246](https://github.com/ExpressionEngine/ExpressionEngine/issues/246)
  - Added ability to disable Live Preview per channel. [#1012](https://github.com/ExpressionEngine/ExpressionEngine/issues/1012) [Docs Link](https://docs.expressionengine.com/latest/control-panel/channels.html#settings-tab)
  - Added `allowed_preview_domains` configuration override.
  - Added support for image modifiers when using category images [#942](https://github.com/ExpressionEngine/ExpressionEngine/issues/716)
  - Added ability to disable Google FLoC [#1027](https://github.com/ExpressionEngine/ExpressionEngine/issues/1027) [Docs Link](https://docs.expressionengine.com/latest/add-ons/http-header.html)
  - Added ability to upload m4a files by default [#699](https://github.com/ExpressionEngine/ExpressionEngine/issues/699)
  - Added new core add-on: [Request](https://docs.expressionengine.com/latest/add-ons/request.html) [#413](https://github.com/ExpressionEngine/ExpressionEngine/issues/413)
  - Added option to use Google reCAPTCHA in addition to previous captcha option. [#822](https://github.com/ExpressionEngine/ExpressionEngine/issues/822) [Docs Link](https://docs.expressionengine.com/latest/control-panel/settings/captcha.html#recaptcha-v3-settings)
  - Added noindex,nofollow to template used by `?URL` redirect warning page.
  - Added tel scheme option to URL fieldtype. [#96](https://github.com/ExpressionEngine/ExpressionEngine/issues/96), [#1097](https://github.com/ExpressionEngine/ExpressionEngine/issues/1097)
  - Enabled adding link to an image in RTE [#1082](https://github.com/ExpressionEngine/ExpressionEngine/issues/1082)
  - Improved fieldtype loading in Entry Manager [#1129](https://github.com/ExpressionEngine/ExpressionEngine/issues/1129)



- **Developers** 💻
  - Added ability to define rows and columns in a textarea when using a shared view. [#988](https://github.com/ExpressionEngine/ExpressionEngine/issues/988) [Docs Link](https://docs.expressionengine.com/latest/development/shared-form-view.html)
  - Added new extension hooks to Fluid Fields [#58](https://github.com/ExpressionEngine/ExpressionEngine/issues/58) [Docs Link](https://docs.expressionengine.com/latest/development/extension-hooks/model/fluid-field.html)
  - Updated URLs in core files that led to 404s
  - Updated implementation of `usort` in system/ee/ExpressionEngine/Model/Member/Display/MemberFieldLayout.php


## Version 6.0.6 (Release: May 21, 2021)
- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/194579?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ajohnson" target="_BLANK">@ajohnson</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Mc</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  - Resolved [#1091](https://github.com/ExpressionEngine/ExpressionEngine/issues/1091) where the field type dropdown when creating a new field was not displaying correctly in Firefox.

## Version 6.0.5 (Release: May 20, 2021)
- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/194579?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ajohnson" target="_BLANK">@ajohnson</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/35812875?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Gilbert</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=gilbert-hop" target="_BLANK">@gilbert-hop</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Robin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">andy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛 
  - Resolved [#323](https://github.com/ExpressionEngine/ExpressionEngine/issues/323) where the Redis Cache driver was using a deprecated command.
  - Resolved [#709](https://github.com/ExpressionEngine/ExpressionEngine/issues/709) where long labels in select fields caused wrapping issues.
  - Resolved [#1087](https://github.com/ExpressionEngine/ExpressionEngine/issues/1087) where roles did not have access to entries after saving role preferences on other MSM site.
  - Resolved issue where a PHP 7.3+ warning that occurred when non-members triggered email notifications.
  - Resolved issue where the search input in entry manager would loose focus after returning results.
  - Resolved issue with styles for Entries Bulk Edit modal
  - Resolved issue with modal overlay colors
  - Resolved issue with positioning of alert banner on Entries Screen.

## Version 6.0.4 (Release: May 18, 2021)
- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/6020323?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Doug Black Jr</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=dougblackjr" target="_BLANK">@dougblackjr</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/18269476?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jordan Ellis</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Jordan-Ellis" target="_BLANK">@Jordan-Ellis</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Robin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Tom Jaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">andy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
    </ul>
</div>
</div>

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

- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

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
- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">andy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
    </ul>
</div>
</div>

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
- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/6020323?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Doug Black Jr</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=dougblackjr" target="_BLANK">@dougblackjr</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/18269476?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jordan-Ellis</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Jordan-Ellis" target="_BLANK">@Jordan-Ellis</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Robin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

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

- **Contributors** 🙌    

<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
    
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/194579?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=ajohnson" target="_BLANK">@ajohnson</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="null" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Derek Jones</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=null" target="_BLANK">@null</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/2160089?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jace Richardson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=obfuscode" target="_BLANK">@obfuscode</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/18269476?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jordan Ellis</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=Jordan-Ellis" target="_BLANK">@Jordan-Ellis</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/93695?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Kevin Cupp</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=kevincupp" target="_BLANK">@kevincupp</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Robin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/4808?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Seth Croston Barber</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=scbarber" target="_BLANK">@scbarber</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

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
