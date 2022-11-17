<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# `upd.[addon_name].php`

The `upd.[addon_name].php` file (commonly just called the `upd` file) is critical to ExpressionEngine knowing what to do with your add-on. Here we tell ExpressionEngine what actions to register, core hooks we want to use, database tables to update, and much more. We need to tell ExpressionEngine what to do when we install and add-on, update an add-on, and uninstall and add-on. Thankfully the CLI takes care of most of this for us. 

## Initial Setup

When you first create your add-on using the [`make:addon`](/cli/built-in-commands/make-addon.md) command from the CLI, a `upd` file is created for you in the root of your add-on.

Here I have created an Amazing Add-on which currently has a module and has some extensions that interact with the core hooks.

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

    public $actions = [
        [
            'class' => 'Amazing_add_on',
            'method' => 'ExampleAction'
        ]
    ];
    public $methods = [
        [
        [
            'class' => 'Typography_parse_type_end_ext',
            'method' => 'typography_parse_type_end',
            'hook' => 'typography_parse_type_end'
        ],
        [
            'class' => 'Template_post_parse_ext',
            'method' => 'template_post_parse',
            'hook' => 'template_post_parse'
        ]
    ];


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

## Actions (`array $actions`)
 there is an array of [actions](development/actions.md). The CLI has created a sample action for us and added it to the array in our update class. If you don't need to use any actions you can remove the `$actions` array from your file.

```
public $actions = [
        [
            'class' => 'Amazing_add_on',
            'method' => 'ExampleAction'
        ]
    ];
```

Create by the CLI, this tells ExpressionEngine that we have a class called `ExampleAction` which will be located in `Module/Actions/ExampleAction.php`. 

TIP:For more information on using actions, reference the [Actions](development/actions.md) section of the docs.

## Methods (`array $methods`)
Below the `$actions` array, you will see the `$methods` array. This is created if you choose to add any extensions to your add-on.

    public $methods = [
        [
        [
            'class' => 'Typography_parse_type_end_ext',
            'method' => 'typography_parse_type_end',
            'hook' => 'typography_parse_type_end'
        ],
        [
            'class' => 'Template_post_parse_ext',
            'method' => 'template_post_parse',
            'hook' => 'template_post_parse'
        ]
    ];

Here you can see that we added two [extension hooks](/development/extensions.md) to our add-on using the [`make:extension-hook`](cli/built-in-commands/make-extension-hook.md) command in the CLI. We are choosing to hook into the `typography_parse_type_end` and `template_post_parse` hooks. 

## Install Your Add-On (`install()`)
The CLI automatically generates our install method. This method will ensure that all extensions and actions declared above will be properly installed. If you just need to install actions and/or extensions, then you can leave this method as is. Otherwise use this section to add tabs to saved [publish layouts](), update the database, or do something else when the add-on is installed.


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

### Adding Tabs
Optionally add the publish page tab fields to any saved publish layouts. This is ONLY used if the module adds a tab to the publish page and it requires the `tabs()` function:

      ee()->load->library('layout');
      ee()->layout->add_layout_tabs($this->tabs(), 'module_name');


## Update Your Add-on (`update()`)
The `update` method is will run code when a user installs an update to our add-on. 

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