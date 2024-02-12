<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Add-on Update File

## Overview

The `upd.[addon_name].php` file (commonly just called the `upd` file) is critical to ExpressionEngine knowing what to do with your add-on. Here we tell ExpressionEngine what actions to register, core hooks we want to use, database tables to update, and much more. We need to tell ExpressionEngine what to do when we install an add-on, update an add-on, and uninstall and add-on. Thankfully the CLI takes care of most of this for us.

TIP:When using the CLI, your add-on update file will automatically be created for you. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## Initial Setup

When you first create your add-on using the [`make:addon`](cli/built-in-commands/make-addon.md) command from the CLI, a `upd` file is created for you in the root of your add-on.

Here I have created an add-on called Amazing Add-on using the CLI.

```
<?php

if (! defined('BASEPATH')) {
    exit('No direct script access allowed');
}

use ExpressionEngine\Service\Addon\Installer;

class Amazing_add_on_upd extends Installer
{
    public $has_cp_backend = 'y';
    public $has_publish_fields = 'n';

    public function install()
    {
        parent::install();

        return true;
    }

    public function update($current = '')
    {
        // Runs migrations
        parent::update($current);

        return true;
    }

    public function uninstall()
    {
        parent::uninstall();

        return true;
    }
}
```

## Properties
The first thing you will notice in our `Amazing_add_on_upd` class is a list of properties that describe some specifics of our add-on to ExpressionEngine. There are two required properties to declare here:

```
    public $has_cp_backend = 'y'; // Shows the option to see addon’s settings.
    public $has_publish_fields = 'n'; // Whether module provides tab for entry edit page
```

## Install Your Add-On (`install()`)
The CLI automatically generates our install method. This method will ensure that all extensions and actions declared above will be properly installed. If you only need to install actions and/or extensions, then you can leave this method as is. Otherwise, use this section to add tabs to saved [publish layouts](), update the database, or do something else when the add-on is installed.


| Parameter | Type      | Description                                             |
| --------- | --------- | ------------------------------------------------------- |
| Returns   | `Boolean` | `TRUE` if everything installed properly, `FALSE` if not |


```
   public function install()
    {
        parent::install();

        // create a database table
        // notify mission control
        // add publish tabs

        return true;
    }
```

### Adding Publish Tabs
Optionally add the publish page tab fields to any saved publish layouts. This is ONLY used if the module adds a tab to the publish page and it requires the [`tabs()` function](#add-publish-tabs-with-your-add-on-tabs):

      ee()->load->library('layout');
      ee()->layout->add_layout_tabs($this->tabs(), 'module_name');


## Add Publish Tabs With Your Add-on (`tabs()`)

| Parameter | Type    | Description                                      |
| --------- | ------- | ------------------------------------------------ |
| Returns   | `Array` | Associative array of the tab name and tab fields |

An optional function included only if your add-on adds a tab to the publish page. This function should return a multidimensional associative array: the top array key consisting of the tab name, followed by any field names, with each field having a variety of default settings. Note that when the fields are added to the publish page, they are namespaced to prevent variable collisions:

    function tabs()
    {
        $tabs['tab_name'] = array(
            'field_name_one'=> array(
                'visible'   => 'true',
                'collapse'  => 'false',
                'htmlbuttons'   => 'true',
                'width'     => '100%'
                ),
            'field_name_two'=> array(
                'visible'   => 'true',
                'collapse'  => 'false',
                'htmlbuttons'   => 'true',
                'width'     => '100%'
                ),
            );

        return $tabs;
    }

Be sure that you also update your [`install()` function](#adding-publish-tabs) to add your specified tabs.





## Update Your Add-on (`update()`)
The `update` method will run code when a user installs an update to our add-on.

| Parameter | Type      | Description                                                        |
| --------- | --------- | ------------------------------------------------------------------ |
| \$current | `string`  | The last recorded version of the module in the `exp_modules` table |
| Returns   | `Boolean` | `FALSE` if no update is needed, `TRUE` otherwise

    public function update($current = '')
    {
        // Runs migrations
        parent::update($current);

        // only run the update if the user is currently running a version less than 2.0
        if (version_compare($current, '2.0', '<'))
        {
            // Do your update code here
            // update database
            // notify mission control of the update
        }


        return true;
    }

## Uninstall Your Add-On (`uninstall()`)
The CLI automatically generates our uninstall method. This method will ensure that all extensions and actions declared above will be properly uninstalled. Similarly to installation, if you just need to ensure your actions and extensions are uninstalled, you can leave this method as is. However, you added custom functionality in the `install()` method, then you need to also ensure you clean up after yourself here.

| Parameter | Type      | Description                                                  |
| --------- | --------- | ------------------------------------------------------------ |
| Returns   | `Boolean` | `TRUE` if everything uninstalled properly, `FALSE` otherwise |

    public function uninstall()
    {
        parent::uninstall();

        // remove my database tables
        // remove any publish tabs
        // turn off the lights

        return true;
    }

### Removing Tabs
Optionally delete any publish page tab fields saved in publish layouts. This is ONLY used if the module adds a tab to the publish page and it requires the `tabs()` function:

      ee()->load->library('layout');
      ee()->layout->delete_layout_tabs($this->tabs(), 'module_name');