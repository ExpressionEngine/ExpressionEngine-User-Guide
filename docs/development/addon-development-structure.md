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
 ┣ Commands
 ┃ ┣ CommandAnAmazingCommand.php 
 ┣ database
 ┃ ┣ migrations
 ┃ ┃ ┗ 2022_11_14_170449_amazing_migration.php
 ┣ Extensions
 ┃ ┣ TemplatePostParse.php
 ┃ ┗ TypographyParseTypeEnd.php
 ┣ Mcp
 ┃ ┣ Index.php
 ┃ ┗ Page2.php
 ┣ Module
 ┃ ┣ Actions
 ┃ ┃ ┗ ExampleAction.php
 ┃ ┗ Tags
 ┃ ┃ ┗ ExampleTag.php
 ┣ Model
 ┃ ┣ AmazingModel.php
 ┣ language
 ┃ ┣ english
 ┃ ┃ ┣ amazing_addon_lang.php
 ┃ ┃ ┗ index.html
 ┃ ┗ index.html
 ┣ widgets
 ┃ ┣ AnAmazingWidget.php
 ┣ views
 ┃ ┣ McpIndex.php
 ┃ ┗ Page2.php
 ┣ addon.setup.php
 ┣ ext.amazing_addon.php
 ┣ ft.amazing_addon.php
 ┣ icon.svg
 ┣ mcp.amazing_addon.php
 ┣ mod.amazing_addon.php
 ┣ pro.amazing_addon.php
 ┗ upd.amazing_addon.php
 ```

NOTE: **Note:** For filenames, hyphens and special characters are removed and spaces are replaced with underscores.

There's a lot in this structure, because this add-on can do a lot of things (it's amazing 😀)! Don't worry though, your add-on can be as simple or complex as you want to make it. This example just shows all the possiblites. Continue reading as we break down the parts of this add-on and then build it from scratch.


### `addon.setup.php`
Starting with version 3.0 each add-on in ExpressionEngine must have an `addon.setup.php` file in its package directory. This file provides descriptive data about a specific add-on such as author, name, and version. Reference the [The addon.setup.php File](development/addon-setup-php-file.html) for more information on the contents of this file.

### `upd.[addon_name].php`
The Update file for a module includes a class with a name that is a combination of the package’s name with a _upd suffix. This file manages the installtion and uninstallation of our add-on. Here we define extensions we will use, actions to be created, and other functionality that should be exectued on installtion and uninstallation.

### `ext.[addon_name].php`
The `ext` file is used to route ExpressionEngine to our `Extensions` Folder 

### `ft.[addon_name].php`
The `ft` file is used to create new fieldtypes in ExpressionEngine when your add-on is installed.

### `mcp.[addon_name].php`
The `mcp` file is used to route ExpressionEngine to our `Mcp` Folder which contains logic for our control panel views (settings or other pages you might want to add to the control panel for your users to interact with).

### `mod.[addon_name].php`
The `mod` file is used to route ExpressionEngine to our `Modules` Folder which contains any actions or template tags we are adding with our add-on.

### `pro.[addon_name].php`
The `pro.[addon_name].php` is used to create new Prolets with our add-on.

### `icon.svg`
The `icon.svg` is used both in the Add-on Manager and in the Dock on the front-end to distinguish your add-on from others.

### `/Extensions`
When we tell the CLI that we want to create an extension, classes are automatically created in the `Extensions` folder along with the above mentioned `ext.[addon_name].php` file. Interacting with hooks allow us to extend ExpressionEngine's functionality, thus we refer to these as "extensions". 

TIP: Reference the [Extensions](development/extensions.md) section of the docs for more information on using extensions in your add-on.

### `Module/Actions`
The `Module/Actions` folder stores all the business logic for any actions that we are adding to ExpressionEngine with our add-on. Each action will have a separate file and corresponding class created based information provided in the `$actions` array in the `upd` file.

### `Module/Tags`
The `Module/Tags` folder stores all the business logic for any template tags we are creating with our add-on. 

### `/views`
The `views` folder contains all of our control panel views which will be used to actuall render our add-on's control panel pages.

### `/language`
The `language` folder contains all of our lang files that will be used to display text on a page in whatever language is selected in the user’s account settings. 

### `/database/migrations`
The `/database/migrations` folder holds all migrations that will be ran on installation or updating of our add-on. Using the CLI, migrations can also be ran indepentantly.

### `Model`
The `Model` folder holds all models that we are creating with our add-on.

### `widgets`
The `widgets` folder holds all dashboard widgets that we are creating with our add-on.

