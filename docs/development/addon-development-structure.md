<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Add-on Structure

With custom add-ons you can new fieldtypes, features, template tags, and much more. Let's look at the different parts of an add-on and how define just what our add-on is going to do.

TIP: In this section we're explainging the parts of an add-on. No need to memorize everything though, the [CLI](/cli/intro.html) will generate all the pieces we need based on what functions our add-on needs.

Here's the complete structure of an add-on that we'll call "Amazing Add-on".

```
amazing_addon
 ┣ Extensions
 ┃ ┣ CoreBoot.php
 ┃ ┗ SessionsStart.php
 ┣ Mcp
 ┃ ┣ Index.php
 ┃ ┗ Page2.php
 ┣ Module
 ┃ ┣ Actions
 ┃ ┃ ┗ ExampleAction.php
 ┃ ┗ Tags
 ┃ ┃ ┗ ExampleTag.php
 ┣ language
 ┃ ┣ english
 ┃ ┃ ┣ amazing_addon_lang.php
 ┃ ┃ ┗ index.html
 ┃ ┗ index.html
 ┣ views
 ┃ ┣ McpIndex.php
 ┃ ┗ Page2.php
 ┣ addon.setup.php
 ┣ ext.amazing_addon.php
 ┣ ft.amazing_addon.php
 ┣ index.html
 ┣ mcp.amazing_addon.php
 ┣ mod.amazing_addon.php
 ┗ upd.amazing_addon.php
 ```

NOTE: **Note:** For filenames, hyphens and special characters are removed and spaces are replaced with underscores.

There's a lot in this structure, because this add-on can do a lot of things (it's amazing 😀)! Continue reading as we break down the parts of this add-on and then build it from scratch.

### `addon.setup.php`
Starting with version 3.0 each add-on in ExpressionEngine must have an `addon.setup.php` file in its package directory. This file provides descriptive data about a specific add-on such as author, name, and version. Reference the [The addon.setup.php File](development/addon-setup-php-file.html) for more information on the contents of this file.

### `upd.[addon_name].php`
The Update file for a module includes a class with a name that is a combination of the package’s name with a _upd suffix. This file manages the installtion and uninstallation of our add-on. Here we define extensions we will use, actions to be created, and other functionality that should be exectued on installtion and uninstallation.


## Create an Amazing Add-on

Well create the initial structure of our add-on by utilizing the [`make:addon`](/cli/built-in-commands/make-addon.md) command from the CLI. We'll name our add-on "Amazing Add-on"

```
php system/ee/eecli.php make:addon "Amazing Add-on"
```

The CLI will now ask us a few questions about our add-on.

```
What type of add-on would you like to create? [extension, plugin, fieldtype, module]
```

Plugin functionality are a nice and easy way to quickly add template tags. Let's start with that!

```
php system/ee/eecli.php make:addon "Amazing Add-on"
Let's build your add-on!
What type of add-on would you like to create? [extension, plugin, fieldtype, module] plugin
Plugin description? This is an amazing add-on that will deomonstrate how add-ons are built
Plugin version? [1.0.0]0.0.1
Plugin author? ExpressionEngine Developer
Plugin author URL? https://www.expressionengine.com
Let's build!
Your add-on has been created successfully!
```

