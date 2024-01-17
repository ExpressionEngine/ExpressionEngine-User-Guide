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

TIP: If you are working with an existing add-on, we recommend you start with [Modernizing add-ons](development/modernizing-existing-add-ons.md) 

## Creating your add-on jump file.
Jumps are created via the CLI by using the `make:jump` command. 

```
php eecli.php make:jump 
Let's create an add-on Jump File!
What add-on is the Jumps file being added to? (amazing_add_on, cron):  [amazing_add_on]
Building Add-on Jumps file now.
Jumps file successfully created! Please note: You may need to clear your browser cache before you can see the new jump menu items

``` 

Follow the prompts to add a jump file to your add-on. 
This will create a `jump.amazing_add_on.php` file in your add-on.

```
amazing_add_on
 ┣ jump.amazing_add_on.php
 ┗ ...
 ```

Please note, your jump file will contain of the following:

        use ExpressionEngine\Service\JumpMenu\AbstractJumpMenu;
    
        class [AddonName]_jump extends AbstractJumpMenu
        {

            protected static $items = array(
              'commandArrayTitle' => array(
                'icon' => 'fa-file',
                'command' => 'few lowercase words to be fuzzy-matched in jump menu',
                'command_title' => 'Displayed <b>command title upon match from above</b>',
                'dynamic' => false,
                'requires_keyword' => false,
                'target' => 'See Below. Behavior changes based on dynamic element above'
            ));

To Add Jump Menu commands to your add-on, you simply add array elements to the `$items` array in the example generated

The array of a Jump Menu command is comprised of the following keys:

- `commandArrayTitle` _(string)_ Unique command title used as key in global jumps array. Will be prefixed with the add-ons name so a command title in the add-on AmazingAddOn of `processData` will be `AmazingAddon:processData`
- `icon` _(string)_ FontAwesome format: `fa-file`
- `command` _(string)_ lowercase string to be fuzzy-matched when user is typing in jump menu: “edit external source”
- `command_title` _(string)_ Language file array key for Human-readable command title, shows up in results if fuzzy-matched.  *Please note, this should be in your Lang file.

NOTE: Style Note: We use bold, italics, and brackets to denote keywords and actions to the user and urge you to use keep your commands in line with this style:
“Edit &lt;b&gt;Your Object&lt;/b&gt; titled &lt;i&gt;[secondary keywords]&lt;/i&gt;”
“Edit Author titled [name]”


- `dynamic` _(bool)_ default: false, sets whether your command has secondary options in the jump menu
- `requires_keyword` _(bool)_ default: false, Used in conjunction with `dynamic`. Whether your command requires additional keywords to return results or not. An example of a `false` would be returning a list of channels. An example of `true` would be returning entries where you don’t want to prematurely return them before the user enters something to filter by.
- `target` (string) Can NOT be to an external link
  - If `dynamic` == true: method name in your add-on’s jump file that will be called. Will be passed an array of search keywords.
  - If `dynamic` == false: method name to redirect the user to in your add-on (ex: settings/license) 
  
  NOTE: This is currently hard-coded to `addons/settings/[addon_name]/X` but will most likely be changed to allow any CP URL path.

In addition to the required array elements above.  There are also the following array element that is optional.
```
'permission' => 'ban_users'

```
- `permission` _(string)_ ExpressionEngine Role permissions that has to be matched for a user to see this jump menu command.
