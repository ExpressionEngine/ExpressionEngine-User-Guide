<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Add-on Development Overview

With custom add-ons you can add new fieldtypes, features, template tags, and much more to ExpressionEngine. Here we are going to look at different parts of an add-on, and how to define just what our add-on is going to do.

TIP: In this section, we're explaining the parts of an add-on. No need to memorize everything though, the [CLI](cli/intro.html) will generate all the pieces we need based on what functions we want our add-on to have.

[TOC]

## Why Create A Custom Add-On
While ExpressionEngine offers a lot of functionality right out of the box, sometimes you want more power or to do things that ExpressionEngine doesn't natively do.

Here are some ideas of what you can accomplish with a custom add-on:

- Add custom [template tags](development/custom-template-tags.md) like `{exp:amazing_add_on:member_info}`.
- Run functions or return data when someone reaches a specific URL using [URL endpoints (called Actions)](development/actions.md).
- Add custom [fieldtypes](development/fieldtypes/fieldtypes.md) for content editors when creating channel entries.
- Add custom [CLI commands](cli/creating-a-command.md) like `$ eecli.php amazing_add_on:do_something_amazing`
- Add custom [Publish Form tabs](development/tab-files.md) to help organize entry fields for content editors.
- Hook into ExpressionEngine and run [custom functions (called Extensions)](development/extensions.md) when ExpressionEngine does certain actions, like emailing your team whenever a post is created or manipulating text when a template is rendered.
- Display information from your add-on to content editors on the front-end by adding a [Prolet](/development/prolets.md) to the [ExpressionEngine Dock](/advanced-usage/front-end/dock.md).
- Display information in the [Control Panel Dashboard](/control-panel/dashboard_management.md) using a [custom Dashboard Widget](/development/widgets.md).

These are just a few ideas of what you can do with custom add-ons. The possibilities are almost endless.

## Getting Started
Getting started making an add-on is incredibly easy with the CLI. To begin making an add-on, simply use the [`make:addon` command](/cli/built-in-commands/make-addon.md) from the [CLI](/cli/intro.html).

TIP: If you are working with an existing add-on, we recommend you start with [Modernizing add-ons](development/modernizing-existing-add-ons.md)

```
$ php system/ee/eecli.php make:addon
Let's build your add-on!
What is the name of your add-on? Amazing Add-On
Add-on description? [Amazing Add-on description] This add-on does amazing things!
Add-on version? [1.0.0]1.0.0
Add-on author? ExpressionEngine Developer
Add-on author URL? www.expressionengine.com
Let's build!
Your add-on has been created successfully!

```

This will create an add-on named Amazing Add-On in your `system/user/addons` folder with a skeleton file structure like below:

```
amazing_add_on/
┣ language/
┃ ┣ english/
┃ ┃ ┣ amazing_add_on_lang.php
┣ addon.setup.php
┣ mod.amazing_add_on.php
┗ upd.amazing_add_on.php
```

At this point, your add-on can't really do anything other than be installed. However, from here, you can add more functionality to your add-on via the CLI depending on your needs.

Here's a list of functionality that can be added to your add-on and the corresponding CLI command if applicable:

- [Extension hooks (`make:extension-hook`)](development/extensions.md)
- [Control Panel Pages (`make:cp-route`)](development/modules.md)
- [Actions (`make:action`)](development/actions.md)
- [Fieldtypes (`make:fieldtype`)](development/fieldtypes/fieldtypes.md)
- [CLI Commands (`make:command`)](cli/creating-a-command.md)
- [Template Tags (`make:template-tag`)](development/custom-template-tags.md)
- [Language Files](development/add-on-language-files.md)
- [Publish Form Tabs](development/tab-files.md)
- [Prolets (`make:prolet`)](development/prolets.md)
- [Dashboard Widgets (`make:widget`)](development/widgets.md)

Continue reading below to understand all the files and folders found in the structure of an add-on.

## Add-On Structure

Below is the complete structure of an add-on that we'll call "Amazing Add-on". There's a lot in this structure because this add-on can do many things (it's amazing 😀)! Don't worry though; your add-on can be as simple or complex as you want to make it. This example just shows all the possibilities. Continue reading as we break down the parts of this add-on.

```
amazing_add_on
 ┣ Commands
 ┃ ┗ CommandAnAmazingCommand.php
 ┣ database
 ┃ ┣ migrations
 ┃ ┃ ┗ 2022_11_14_170449_amazing_migration.php
 ┣ Extensions
 ┃ ┣ TemplatePostParse.php
 ┃ ┗ TypographyParseTypeEnd.php
 ┣ ControlPanel
 ┃ ┣ Routes
 ┃ ┃ ┣ Index.php
 ┃ ┃ ┗ Page2.php
 ┃ ┣ Sidebar.php
 ┣ Actions
 ┃ ┗ ExampleAction.php
 ┣ Tags
 ┃ ┗ ExampleTag.php
 ┣ Model
 ┃ ┗ AmazingModel.php
 ┣ language
 ┃ ┣ english
 ┃ ┃ ┣ amazing_add_on_lang.php
 ┃ ┃ ┗ index.html
 ┃ ┗ index.html
 ┣ widgets
 ┃ ┗ AnAmazingWidget.php
 ┣ views
 ┃ ┣ Index.php
 ┃ ┗ Page2.php
 ┣ addon.setup.php
 ┣ ext.amazing_add_on.php
 ┣ ft.amazing_add_on.php
 ┣ icon.svg
 ┣ mcp.amazing_add_on.php
 ┣ tab.amazing_add_on.php
 ┣ mod.amazing_add_on.php
 ┣ pro.amazing_add_on.php
 ┗ upd.amazing_add_on.php
 ```

NOTE: **Note:** Pay attention to how these filenames are structured. For filenames, hyphens and special characters are removed, and spaces are replaced with underscores.


### The Add-on Setup File (`addon.setup.php`)
Starting with version 3.0 each add-on in ExpressionEngine must have an `addon.setup.php` file in its package directory. This file provides descriptive data about a specific add-on, such as author, name, and version.
Reference [The Add-on Setup File](development/addon-setup-php-file.md) for more information on the contents of this file.

### The Update File (`upd.[addon_name].php`)
**class `Add_on_name_upd extends Installer`**
The Update file for an add-on includes a class with a name that is a combination of the add-on's name with a `_upd` suffix. Here you define functionality that should be executed on installation, update, and uninstallation of your add-on.
Reference [The Add-on Update File](development/add-on-update-file.md) for more information on this file.


### The Extension File (`ext.[addon_name].php`)
**class `Add_on_name_upd extends Extension`**
The extension file is used to route ExpressionEngine to our `Extensions` Folder.
Reference [Extending The Core](development/extensions.md) for more information on how to use core hooks to extend what ExpressionEngine can do.

### The Fieldtype File (`ft.[addon_name].php`)
**class `Add_on_name_ft extends EE_Fieldtype`**
The fieldtype file is used to create new [fieldtypes](/fieldtypes/overview.md) in ExpressionEngine when your add-on is installed.
Reference [Adding Fieldtypes](development/fieldtypes/fieldtypes.md) for more information on adding fieldtypes with your add-on.

### The Mcp File (`mcp.[addon_name].php`)
**class `Add_on_name_upd extends Mcp`**
The Mcp file is used to route ExpressionEngine to our `ControlPanel` Folder, which contains logic for your Control Panel pages (settings or other pages you might want to add to the Control Panel for your users to interact with).
Reference [Adding Control Panel Pages](development/modules.md) for more information on adding Control Panel pages with your add-on.

### The Module File `mod.[addon_name].php`
**class `Add_on_name_upd extends Module`**
The module file is used to route ExpressionEngine to our `Modules` Folder, which contains any actions or template tags you are adding with your add-on.
Reference [Adding Template Tags](development/custom-template-tags.md) for more information on adding template tags with your add-on or [Adding Actions](development/actions.md) for more information on creating URL endpoints (actions) with your add-on.

### The Tab File (`tab.[addon_name].php`)
**class `Module_name_tab`**
The tab file is used to create tabs that are visible in [Publish Layouts](control-panel/channels.md#publish-layouts). Respectively, these tabs would also be visible on the Entry Publish/Edit page if selected in the publish layout.
Reference [Adding Publish Form Tabs](development/tab-files.md) for more information on adding Publish Form Tabs with your add-on.

### The Prolet File `pro.[addon_name].php`
**class `Add_on_name_upd extends AbstractProlet implements ProletInterface`**
The Prolet file is used to create new [Prolets](/development/prolets.md) with our add-on.
Reference [Adding Prolets](development/prolets.md) for more information on adding prolets to your add-on.

### The Add-on Icon File `icon.svg`
The add-on icon folder is used both in the Add-on Manager and in the Dock on the front-end to distinguish your add-on from others.

### Extensions - `/Extensions`
When we tell the CLI that we want to create an extension, classes are automatically created in the `Extensions` folder along with the above mentioned `ext.[addon_name].php` file. Interacting with hooks allows us to extend ExpressionEngine's functionality, thus we refer to these as "extensions".

TIP: Reference the [Extensions](development/extensions.md) section of the docs for more information on using extensions in your add-on.

### Actions - `/Actions`
The `/Actions` folder stores all the business logic for any actions that we are adding to ExpressionEngine with our add-on. Each action will have a separate file and corresponding class created based on information provided in the `$actions` array in the `upd` file.
Reference [Adding Actions](development/actions.md) for more information on creating URL endpoints (actions) with your add-on.

### Control Panel Routes - `/ControlPanel`
The `ControlPanel` folder contains all the Control Panel routes and we create for our add-on as well as our sidebar.
Reference [Adding Control Panel Pages](development/modules.md) for more information on adding Control Panel routes and pages with your add-on.

### `/Tags`
The `/Tags` folder stores all the business logic for any template tags we create with our add-on.
Reference [Adding Template Tags](development/custom-template-tags.md) for more information on adding template tags with your add-on.

### `/views`
The `views` folder contains all of our Control Panel views which will be used to render our add-on's control panel pages.

### `/language`
The `language` folder contains all of our language files that will be used to display text on a page in whatever language is selected in the user’s account settings.
Reference [Using Language Files](development/add-on-language-files.md) for more information on using language files with your add-on.

### `/database/migrations`
The `/database/migrations` folder holds all migrations that will be ran on installation or updating of our add-on. Using the CLI, migrations can also be ran independently.

### `Model`
The `Model` folder holds all models that we are creating with our add-on.
Reference [Building Your Own Models](/development/services/model/building-your-own.md) for more information on creating your own models with your add-on.

### `widgets`
The `widgets` folder holds all dashboard widgets we create with our add-on.
Reference [Developing Dashboard Widgets](development/widgets.md) for more information on creating widgets with your add-on.

## Setting Default CLI Config Values

When creating an add-on via the CLI you will be asked for author and the author's URL. If you'd like to skip these questions when creating an add-on, you can set default values in your [config](/general/system-configuration-overrides.md#main-configuration-file) file like so:

```
...
$config['cli_default_addon_author'] = 'ExpressionEngine Developer';
$config['cli_default_addon_author_url'] = 'https://expressionengine.com';
...
```

## A Word About Legacy Add-On Development
In the past, add-ons were often categorized based on their functionality. We identified our add-on to ExpressionEngine as a fieldtype, extension, module, or plug-in. Thus there was never a straightforward process on structuring one add-on that contained all these categories in one.

With the release of 6.4.x and 7.2.x this paradigm has been updated to reflect the idea that we are just creating add-ons, and those add-ons can have multiple types of functionality. The CLI has also been updated to make creating add-ons and adding functionality incredibly easy. We have also updated the docs to reflect the ideal workflow of creating an add-on.

While the latest changes shift our view of add-ons and how developers will create add-ons, you may still come across add-ons using the old methodology. We have left much of the old methods and structure in place in the core so that older add-ons will continue to work. However, we are choosing to not actively update the documentation for the old methods because we feel it's no longer in the best interest of the community to develop add-ons in this way. If you need to access how the docs once were regarding add-ons, you can reference the [legacy docs in GitHub](https://github.com/ExpressionEngine/ExpressionEngine-User-Guide/releases/tag/legacy-add-on-structure) (note that v7 and v6 were the same in these regards).
