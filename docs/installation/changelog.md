<!--
    This source file is part of the open-source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->
# ExpressionEngine v7 Change Log

## Version 7.2.0
(Release: October 26, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1008036?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Eric Lamb</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=mithra62" target="_BLANK">@mithra62</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/48652147?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">CreepCaster</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=CreepCaster" target="_BLANK">@CreepCaster</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/25546953?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Thomas</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=tknaller" target="_BLANK">@tknaller</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Enhancements** 🚀
  - Added ability to edit related entries content from relationship field; [#656](https://github.com/ExpressionEngine/ExpressionEngine/issues/656)
  - Added extra confirmation toggle when deleting fieldtype that is used by fields; [#484](https://github.com/ExpressionEngine/ExpressionEngine/issues/484)
  - Added visual indication when viewing entry version; [#1897](https://github.com/ExpressionEngine/ExpressionEngine/issues/1897)
  - Show in which channels field is used on field edit page; [#919](https://github.com/ExpressionEngine/ExpressionEngine/issues/919)
  - Enabled entering HTML line break tags into Entry Title fiels; [#1633](https://github.com/ExpressionEngine/ExpressionEngine/issues/1633)
  - Added "Upload Directory" column for File Manager table; [#98](https://github.com/ExpressionEngine/ExpressionEngine/issues/98)
  - Added "ungrouped" as a filter to the list of Fields; [#516](https://github.com/ExpressionEngine/ExpressionEngine/issues/516)
  - Changed the redirect upon field edit to field group list, if the field is in group; [#258](https://github.com/ExpressionEngine/ExpressionEngine/issues/258)
  - Updated CKEditor and Redactor to recent versions
  - Enabled extended configuration of RTE toolsets using JSON; [#1465](https://github.com/ExpressionEngine/ExpressionEngine/issues/1465)
  - Enable using external stylesheet in RTE fields; [#1425](https://github.com/ExpressionEngine/ExpressionEngine/issues/1425)
  - Support RTL text direction in Rich Text fields; [#1981](https://github.com/ExpressionEngine/ExpressionEngine/issues/1981)
  - Moved the selected checkboxes to the top of the list if the list is too long; [#653](https://github.com/ExpressionEngine/ExpressionEngine/issues/653)
  - Enable including database views into backups

- **Bug Fixes** 💃🐛
  - Resolved [#2438](https://github.com/ExpressionEngine/ExpressionEngine/issues/2438) where Low Variable types were not migrated properly to Pro Variable types
  - Resolved [#1249](https://github.com/ExpressionEngine/ExpressionEngine/issues/1249) where image was not inserted into correct place in textarea field
  - Resolved [#2431](https://github.com/ExpressionEngine/ExpressionEngine/issues/2431) where Image HTML button should not have been editable
  - Resolved [#2430](https://github.com/ExpressionEngine/ExpressionEngine/issues/2430) where editing template by member without settings & access permission was resetting allowed roles
  - Resolved [#2410](https://github.com/ExpressionEngine/ExpressionEngine/issues/2410) where some fieldtypes could not be used as columns in Entry Manager
  - Resolved [#2361](https://github.com/ExpressionEngine/ExpressionEngine/issues/2361) where Redactor toolbar was hidden behind entry tabs when sticked to the top of the screen
  - Resolved [#2403](https://github.com/ExpressionEngine/ExpressionEngine/issues/2403) where clickable area for checkboxes was too large
  - Resolved [#2411](https://github.com/ExpressionEngine/ExpressionEngine/issues/2411), [#2412](https://github.com/ExpressionEngine/ExpressionEngine/issues/2412) where filepicker was not always working outside of File field
  - Resolved issue where File link was not in navigation sidebar for some members with proper permissions
  - Resolved issue where empty edit buttons were present for sidebar elements that member does not have access to edit
  - Resolved [#2437](https://github.com/ExpressionEngine/ExpressionEngine/issues/2437) where horizontal grid fields could go outside the container
  - Resolved [#2435](https://github.com/ExpressionEngine/ExpressionEngine/issues/2435) when having two Pro Search results tags with `keywords:stem` parameter on same page caused PHP error
  - Resolved issue where reCaptcha threshold was not checked correctly


- **Developers** 💻
  - Added [Add-on Controllers](development/addon-controllers/about.md) classes

## Version 7.1.6
(Release: September 26, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Resolved issue when saving some member profile settings could show PHP error when using PHP 8
  - Resolved [#2363](https://github.com/ExpressionEngine/ExpressionEngine/issues/2363) where reordering fields in Channel Layouts did not work properly 
  - Resolved [#2390](https://github.com/ExpressionEngine/ExpressionEngine/issues/2390) where File Picker was not working if no file field was present on page 
  - Resolved [#2393](https://github.com/ExpressionEngine/ExpressionEngine/issues/2393) where replacing file with existing manipulations could generate PHP error 
  - Resolved issue where entries could be not displayed on front-end if channel name also existed on other MSM site
  - Resolved [#2395](https://github.com/ExpressionEngine/ExpressionEngine/issues/2395) where deleting directory might not work correctly on some environments
  - Resolved issue where PHP error could be shown after update if templates are not synchronized
  - Resolved issue where `search` parameter on `exp:channel:entries` tag could only be used once

## Version 7.1.5
(Release: September 13, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17239151?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">igreil</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=igreil" target="_BLANK">@igreil</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Resolved issue where File Manager page was not updated after uploading SVG file 
  - Resolved [#2375](https://github.com/ExpressionEngine/ExpressionEngine/issues/2375) where Profiler section in CP had some English words hardcoded
  - Resolved [#2366](https://github.com/ExpressionEngine/ExpressionEngine/issues/2366) where is was not possible to use title in search parameter of `exp:channel:entries` tag 
  - Resolved [#1651](https://github.com/ExpressionEngine/ExpressionEngine/issues/1651) where dropdowns in File field were showing the directories that member was not allowed to access
  - Resolved issue where displaying entry with file fields could be slow
  - Resolved issue where file management on servers with `open_basedir` restrictions could give PHP errors
  - Resolved issue where Grid fields with many columns were not rendered properly on page load

## Version 7.1.4
(Release: September 6, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17011377?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bradford Akin</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bakin1999" target="_BLANK">@bakin1999</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
    </ul>
</div>
</div>


- **Bug Fixes** 💃🐛
  - Resolved [#2298](https://github.com/ExpressionEngine/ExpressionEngine/issues/2298) where Publish Layouts were not accessible for member via secondary role
  - Resolved [#2104](https://github.com/ExpressionEngine/ExpressionEngine/issues/2104) where opening link in new tab could falsely alert about leaving the page 
  - Resolved [#2135](https://github.com/ExpressionEngine/ExpressionEngine/issues/2135) where categories were not parsed in related categories mode
  - Resolved [#1541](https://github.com/ExpressionEngine/ExpressionEngine/issues/1541) where some fields connected to toggle button were not showing or hiding accordingly
  - Resolved [#185](https://github.com/ExpressionEngine/ExpressionEngine/issues/185) where anchor "name" attribute was getting incorrect prefix in third-party textareas inside Grid
  - Resolved [#2128](https://github.com/ExpressionEngine/ExpressionEngine/issues/2128) where settings of Checkboxes column in Grid field were not saved
  - Resolved [#2348](https://github.com/ExpressionEngine/ExpressionEngine/issues/2348) where saving entry could show PHP error when using PHP 8.1 
  - Resolved [#2360](https://github.com/ExpressionEngine/ExpressionEngine/issues/2360), [#2303](https://github.com/ExpressionEngine/ExpressionEngine/issues/2303) where certain server configuration were giving PHP error that caused file management to not function properly
  - Resolved [#2122](https://github.com/ExpressionEngine/ExpressionEngine/issues/2122) where Live Preview was not working correctly when template was using search on checkboxes column in Grid
  - Resolved [#2285](https://github.com/ExpressionEngine/ExpressionEngine/issues/2285) where exception shown after creating select field populating from other field, but no source field selected

## Version 7.1.3
(Release: September 1, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
    </ul>
</div>
</div>


- **Bug Fixes** 💃🐛
  - Resolved [#2331](https://github.com/ExpressionEngine/ExpressionEngine/issues/2331) where saving template revision was causing SQL error when using long table prefix
  - Resolved [#2335](https://github.com/ExpressionEngine/ExpressionEngine/issues/2335) where having references to non-existing files in File field could case PHP error in Entry Manager listing
  - Resolved [#2116](https://github.com/ExpressionEngine/ExpressionEngine/issues/2116) where disabling MFA globally could cause redirect loop on login for some users
  - Resolved [#2279](https://github.com/ExpressionEngine/ExpressionEngine/issues/2279) where ColorPicker dropdown was not visible in new Grid rows
  - Resolved [#2131](https://github.com/ExpressionEngine/ExpressionEngine/issues/2131), [#913](https://github.com/ExpressionEngine/ExpressionEngine/issues/913) where moving fields between tabs in Channel Layouts did not work well
  - Resolved [#2121](https://github.com/ExpressionEngine/ExpressionEngine/issues/2121) where hitting esc in New Entry slideout modal could case data loss
  - Resolved [#2338](https://github.com/ExpressionEngine/ExpressionEngine/issues/2338) where vertical layout was not fully supported by Grid in Pro Variables
  - Resolved [#2340](https://github.com/ExpressionEngine/ExpressionEngine/issues/2340) where Pro Variables of Grid type could show PHP notice on frontend
  - Resolved issue when files could not be uploaded on certain server configurations

## Version 7.1.2
(Release: August 22, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/17785714?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Jonathan Hardisty</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=jHards" target="_BLANK">@jHards</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Enhancements** 🚀
  - Added support for `form_class` parameter in legacy Forgot Password Form

- **Bug Fixes** 💃🐛
  - Resolved issue when member role record was not deleted after deleting member
  - Resolved issue when URLs to files with special characters in name were not properly encoded
  - Resolved [#2126](https://github.com/ExpressionEngine/ExpressionEngine/issues/2126) where "add field" button was present for field groups that are not saved yet
  - Resolved [#2076](https://github.com/ExpressionEngine/ExpressionEngine/issues/2076), [#2141](https://github.com/ExpressionEngine/ExpressionEngine/issues/2141) where button to update template routes was missing some functionality
  - Resolved [#1901](https://github.com/ExpressionEngine/ExpressionEngine/issues/1901) where add-ons with related models were not properly uninstalled
  - Resolved [#2109](https://github.com/ExpressionEngine/ExpressionEngine/issues/2109) where loading third-party dashboard widgets could cause PHP error
  - Resolved [#2255](https://github.com/ExpressionEngine/ExpressionEngine/issues/2255) where "Anonymize Consent Logs" feature was not fully functional
  - Resolved [#2297](https://github.com/ExpressionEngine/ExpressionEngine/issues/2297) where deferring relationship field was not working for fields with data
  - Resolved [#2279](https://github.com/ExpressionEngine/ExpressionEngine/issues/2279) where ColorPicker field did not display saved values


## Version 7.1.1
(Release: August 19, 2022)

- **Bug Fixes** 💃🐛
  - Resolved issue where license check could return incorrect results
  - Resolved [#2263](https://github.com/ExpressionEngine/ExpressionEngine/issues/2208) where the instructions for adding IP to Blocked list were not correct
  - Minor UI updates

## Version 7.1.0
(Release: August 18, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/13821249?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Gavin * JCOGS</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=jcogs-design" target="_BLANK">@jcogs-design</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/53965?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Brian Litzinger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=litzinger" target="_BLANK">@litzinger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/35812875?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Gilbert</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=gilbert-hop" target="_BLANK">@gilbert-hop</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/931642?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Sobral</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robsonsobral" target="_BLANK">@robsonsobral</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/14606?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Daniel Jalkut</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=danielpunkass" target="_BLANK">@danielpunkass</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/194579?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=ajohnson" target="_BLANK">@ajohnson</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
    </ul>
</div>
</div>


- **Enhancements** 🚀
  - Added Structure as first-party add-on, shipped with ExpressionEngine
  - Added indicator to display number of installed add-ons, [#1944](https://github.com/ExpressionEngine/ExpressionEngine/issues/1944)
  - Added `edit_date` column in Entry Manager, [#1850](https://github.com/ExpressionEngine/ExpressionEngine/issues/1850)
  - Added possibility to defer initialization of Relationship field
  - Added support for table alias in SQL joins when using Active Record, [#2096](https://github.com/ExpressionEngine/ExpressionEngine/issues/2096)
  - Enable `exp:search:total_results` to be parsed as tag pair, [#1193](https://github.com/ExpressionEngine/ExpressionEngine/issues/1193)
  - Added `has_children` variable to category tags, [#1726](https://github.com/ExpressionEngine/ExpressionEngine/issues/1726)
  - Various UI improvements

- **Bug Fixes** 💃🐛
  - Resolved [#1561](https://github.com/ExpressionEngine/ExpressionEngine/issues/1561) where file column in file grid field was not searchable
  - Resolved issue when PHP error was shown for non-existing addons
  - Resolved [#2157](https://github.com/ExpressionEngine/ExpressionEngine/issues/2157) where Color Picker field was cut off when used inside Grid field
  - Resolved [#2279](https://github.com/ExpressionEngine/ExpressionEngine/issues/2279) where ColorPicker fields were not initialized on page load
  - Resolved [#2115](https://github.com/ExpressionEngine/ExpressionEngine/issues/2115) where conditional validation did not work properly on existing objects
  - Resolved [#2136](https://github.com/ExpressionEngine/ExpressionEngine/issues/2136) where formatters for duration field set to hours type were not parsed properly
  - Resolved [#2105](https://github.com/ExpressionEngine/ExpressionEngine/issues/2105) where adding new row for File Grid inside Fluid could cause validation error
  - Resolved issue where PHP notice could be shown when calling Template library from an add-on
  - Resolved [#2127](https://github.com/ExpressionEngine/ExpressionEngine/issues/2117) where there was a typo in definition of Extension model
  - Resolved [#2248](https://github.com/ExpressionEngine/ExpressionEngine/issues/2248) where emphasized markdown was placed in separate line inside Notes field
  - Resolved [#2103](https://github.com/ExpressionEngine/ExpressionEngine/issues/2103) where value column of conditional field settings could be populated with wrong values
  - Resolved [#2228](https://github.com/ExpressionEngine/ExpressionEngine/issues/2228) where dropdown to create entry inside Relationship field was not positioned properly
  - Resolved [#2063](https://github.com/ExpressionEngine/ExpressionEngine/issues/2063) where outdated resources could be served
  - Resolved issue where MetaWeblog could not post if channel_id is not available
  - Resolved [#1358](https://github.com/ExpressionEngine/ExpressionEngine/issues/1358) where setting CP Homepage for member could cause PHP error on large sites using MSM
  - Resolved issue when sometimes avatar could not be uploaded on frontend

- **Developers** 💻
  - Added extension hook to be executed upon cache clearing, [#1762](https://github.com/ExpressionEngine/ExpressionEngine/issues/1762)

## Version 7.0.3
(Release: August 8, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Fixed issue where Update File Usage utility was not always giving correct results.
  - Resolved issue where files in subfolder were not stored properly in RTE field using Redactor.
  - Resolved [#2208](https://github.com/ExpressionEngine/ExpressionEngine/issues/2208) where language files for some add-ons were not placed in correct location.
  - Resolved issue where Grid inside Fluid was not empty initially
  - Resolved issue where filtering by member group in channel form could result in SQL error

## Version 7.0.2
(Release: August 4, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
    </ul>
</div>
</div>

- Temporarily disabled Update File Usage utility due to a bug that affected some users. Utility will be re-enabled in 7.0.3

- **Bug Fixes** 💃🐛
  - Fixed issue with file usage stats.

## Version 7.0.1
(Release: August 4, 2022)

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy McCormick</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **Bug Fixes** 💃🐛
  - Resolved issue where Update File Usage utility did not provide correct results when run for second time.
  - Resolved issue where URLs to files in subfolder were not parsed in {exp:file:entries} tag.
  - Resolved issue where Pro Variables and Pro Search could not be installed on some PHP versions.


## Version 7.0.0
(Release: August 3, 2022)

NOTE:**Note:** If multiple members are needed, an ExpressionEngine Pro license is now required.

- **Contributors** 🙌
<div class="max-w-7xl mx-autotext-center">
<div class="space-y-8 sm:space-y-12">
    <ul role="list" class="mx-auto grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-1 xl:grid-cols-5">
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/194579?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=ajohnson" target="_BLANK">@ajohnson</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/55093827?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Andy McCormick</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=ops-andy" target="_BLANK">@ops-andy</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/563996?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Bryan Nielsen</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=bryannielsen" target="_BLANK">@bryannielsen</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/11818941?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Matt Johnson</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=matthewjohns0n" target="_BLANK">@matthewjohns0n</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/422821?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">TomJaeger</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=TomJaeger" target="_BLANK">@TomJaeger</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/23382425?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yulya Lebed</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=Yulyaswan" target="_BLANK">@Yulyaswan</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/752126?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Yuri Salimovskiy</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=intoeetive" target="_BLANK">@intoeetive</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1181219?v=4" /><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">robinsowell</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=robinsowell" target="_BLANK">@robinsowell</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/13821249?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Gavin * JCOGS</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=jcogs-design" target="_BLANK">@jcogs-design</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/1008036?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Eric Lamb</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=mithra62" target="_BLANK">@mithra62</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/45797159?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Stephen G</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=stephengalbraith" target="_BLANK">@stephengalbraith</a></p></div></div></div></li>
<li><div class="space-y-4 text-center"><img class="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src="https://avatars.githubusercontent.com/u/4128963?v=4"><div class="space-y-2"><div class="text-xs font-medium lg:text-sm"><p class="mb-1">Blair</p><p class="text-indigo-600"><a href="https://github.com/ExpressionEngine/ExpressionEngine/commits?author=blairliikala" target="_BLANK">@blairliikala</a></p></div></div></div></li>
    </ul>
</div>
</div>

- **New File Manager** 🗃️
  - New File Manager design including the additions to [Filters](/control-panel/file-manager/file-manager.md#filters) and [Views](/control-panel/file-manager/file-manager.md#view-options)
  - Added utility action menu to files in the File Manager, allowing for quicker actions to be taken on individual files
  - Added Pop-up preview to thumbnails when viewing files in list view
  - Ability to upload files with drag and drop.
  - Bulk upload files using drag and drop or standard file sytem upload
  - Ability to organize content into [subfolders](/control-panel/file-manager/subfolders.md)
  - Folders can now be created directly on the filesystem through the File Manager
  - Implemented [FlySystem PHP library](https://flysystem.thephpleague.com/docs/) to add more extensiblity to the File Manager.
  - Added support for cloud based file storage through [Adapters](/control-panel/file-manager/adapters.md)
  - Changed how files are referenced in the database. Previously files were referenced using `{filedir_X}filename.ext`. Files are now referenced using `{file:XX:url}`. [Compatiblity Mode](/control-panel/file-manager/file-manager.md#compatibility-mode) is recommended for upgrades until there is confirmation that all add-ons will work with new file data format.
  - File usage is now available in the File Manager to display where a file is used throughout the Control Panel as well as notify users if a file is in use before deleting the file

- **Enhancements** 🚀
  - Added [Front-End Content Management](/advanced-usage/front-end/overview.md) (including Front-End Editing, the Dock, and Prolets)
  - Added [Multi-Factor Authentication](/member/mfa.md)
  - Added Cookie Management and template tags
  - Added [Entry Cloning](/channels/entry_cloning.md)
  - Added the ability to create [Custom Dashboard Widgets](/control-panel/dashboard_management.md#dashboard-management)
  - Added the ability to upload a [Logo and Favicon](/control-panel/settings/branding.md) for the Control Panel.
  - Added Pro Search (formerly Low Search)
  - Added Pro Variables (form Low Variables)
  - Major Performance enhancements across the Control Panel and Front-End
  - Added `CP/Form` object layer to generate Shared Form arrays; [#2101](https://github.com/ExpressionEngine/ExpressionEngine/issues/2101)
  

- **Design** 🎨
  - Added new light theme. ExpressionEngine 6 theme is still available as the "slate" theme using the Jump Menu
  - Added the option to display Grid fields vertically
  - Added the ability to position Entry Editor fields side-by-side using Publish Layouts
  - Made the secondary sidebar collapsable throughout the Control Panel



- **Bug Fixes** 💃🐛

- **Developers** 💻
  - Forum Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Forum Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - Simple Commerce Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Simple Commerce Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - Ip to Nation Add-on has now been removed from ExpressionEngine and made a downloadable add-on from the ExpressionEngine Store. On upgrades which use the Ip to Nation Add-on, the add-on will be moved from the `ee/addons` folder to `user/addons` and considered a user installed add-on.
  - The included version of jQuery used in the Control Panel has been updated to v3.6.0
  - Added the option to [globablly cache](/channels/entries.html#cache-refresh-cache_prefix) Channel Entries tag results
  - Added [ENV File Support](/advanced-usage/env-support.md)
  - Added new Shared Form View 
