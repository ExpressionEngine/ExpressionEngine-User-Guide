---
lang: ee
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Jump Menu

Add-ons can easily add custom items for the Jump Menu.

NOTE: Sample File: https://gist.github.com/obfuscode/77d0135970c9ce8bc84139c127507bb1

1. Create a `jump.[addon_name].php` file in your add-on folder

2. Your jump file MUST have the following:

        use ExpressionEngine\Service\JumpMenu\AbstractJumpMenu;
    
        class [AddonName]_jump extends AbstractJumpMenu
        {

        protected static $items = [];

3. Add commands for your custom items.   
Item commands are comprised of the following:

- `[commandTitle]` _(string)_ Unique command title used as key in global jumps array. Will be prefixed with `[addonName]:` so a command title in Assets of `editS3Source` will be `Assets:editS3Source`
- `icon` _(string)_ FontAwesome format: `fa-file`
- `command` _(string)_ lowercase fuzzy-matched search text: `edit external source`
- `command_title` _(string)_ Human-readable command title, shows up in results

NOTE: Style Note: We use bold, italics, and brackets to denote keywords and actions to the user and urge you to use keep your commands in line with this style:
“Edit &lt;b&gt;Your Object&lt;/b&gt; titled &lt;i&gt;[secondary keywords]&lt;/i&gt;”
“Edit Author titled [name]”
- `dynamic` _(bool)_ default: false, whether your command has secondary results
- `requires_keyword` _(bool)_ default: false, Used in conjunction with `dynamic`. Whether your command requires additional keywords to return results or not. An example of a `false` would be returning a list of channels. An example of `true` would be returning entries where you don’t want to prematurely return them before the user enters something to filter by.
- `target` (string)
  - If `dynamic` == true: method name in your add-on’s jump file that will be called. Will be passed an array of search keywords.
  - If `dynamic` == false: method name to redirect the user to in your add-on (ex: settings/license) 
  
  NOTE: This is currently hard-coded to `addons/settings/[addon_name]/X` but will most likely be changed to allow any CP URL path.

