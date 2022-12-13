---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Plugins

[TOC]

## Overview

Plugins are used within Expression Engine Templates.  Once a plugin is made, its tags can be used anywhere in templates to help edit content. Below, tags and plugins are described as well as a walkthrough of how to build your own plugin.

NOTE: Plugins can also be **generated quickly by the Command Line Interface (CLI)**. Refer to the [make:addon command](cli/built-in-commands/make-addon.md) for more information.

## Tag Construction

A typical ExpressionEngine tag looks like this:

    {exp:channel:entries}

The first segment is the tag identifier: {exp:. It tells the template engine that it has just encountered a tag.

The second segment is the "family" name: `{exp:channel`. There are different families of tags: channel, comments, members, email, stats, etc. In programming terms, the second segment is the name of the 'class' that is instantiated by the tag.

The above example would tell the template engine to dynamically instantiate the "channel" class.

The third segment indicates the 'function' from within a particular family of tags: `{exp:channel:entries}`. This example would tell ExpressionEngine you want to use the "entries" method in the "channel" class.

A tag, therefore, mirrors an object oriented approach: `Class->method`:

    {exp:class_name:method_name}

NOTE: **Note:** Tags are not always required to have three segments. If your plugin is very simple you might opt to only use the class constructor. In this case you can get by only using two segments:

    {exp:class_name}

### Two Kinds of Tags

There are two kinds of tags: Single tags and tag pairs. A single tag does not have a closing tag:

    {exp:randomizer:set_one}

Single tags are designed to return a single value.  Tag pairs look like this:

    {exp:xml_encode}
        Stuff between the tags
    {/exp:xml_encode}

Tag pairs allow you to process the information contained between the tags. In the above example, the text between the pairs would be encoded with XML entities.

## Anatomy of a Plugin

A plugin consists of a class and at least one function:

    <?php

    class Plugin_name {

        public function __construct()
        {

        }
    }
    // END Class

    // EOF

Your plugin's name and other details are provided by your [addon.setup.php file](development/addon-setup-php-file.md).

## Creating a Plugin

The best way to learn how a plugin is created is to walk you through the process of creating one. For this example, we will create a plugin that prints "Hello World". Our example plugin will have this syntax:

    {exp:hello_world}

You will be able to use this plugin anywhere in a Template.

## Creating the Plugin File

Once you've decided on a name for your plugin you will create a text file for it. The file name must be the same as the class name and it must have `pi.` as the prefix. We will name our file: `pi.hello_world.php`.

Plugin file names are always lower case and they must be identical to the name of the second segment of the tag:

    {exp:hello_world}

NOTE: **Note:** The file should be saved in the folder that the `addon.setup.php` will later reference in the namespace key.  The root of this folder is system/user/addons.

So for this example, the pi.hello_world.php should be located at system\user\addons\HelloWorld\pi.hello_world.php

## Creating the Class

In the new file you've created add this class and constructor:

    class Hello_world
    {
        public function __construct()
        {

        }
    }

NOTE: **Note:** Class name must always be capitalized. This is the one exception to the rule. Tag names and file names are always lowercase, while the class name is capitalized.

And we'll create our `addon.setup.php` file to tell ExpressionEngine a bit about our plugin, which will also allow it to be installed in the Add-on Manager:

NOTE: **Note:** Once your plugin is complete the Add-on Manager will need to be used to install it before the plugin's tags can be used

    <?php
    return [
      'author'         => 'Developer James',
      'author_url'     => 'https://example.com/',
      'name'           => 'Hello World',
      'description'    => 'Outputs a simple "Hello World" message to test plugins!',
      'version'        => '1.0.0',
      'namespace'      => 'HelloWorld',
      'settings_exist' => FALSE,
    ];

Similar to above, the `addon.setup.php` file should be located at system\user\addons\HelloWorld\addon.setup.php

### Returning a Value

Your new class is useless unless it can return a value. There are two ways to return a value depending on whether your tag has three segments or two.

### Two Segments

The above tag only provides the plugin class, and no method, so it will use a constructor. Since constructors in PHP do not have return values, we will assign it to a public class property called: `$return_data`:

    class Hello_world
    {
        public $return_data = '';

        public function __construct()
        {
            $this->return_data = 'Hello World';
        }
    }

### Three Segments

With tags that use three segments you can return directly since a class method is being called. Consider a tag with this syntax:

    {exp:hello_world:bold}

The third segment represents a method called `bold()`, which can return a value directly:

    class Hello_world
    {
        public function bold()
        {
            return '<b>Hello World</b>';
        }
    }

You could create a class with several methods this way:

    class Hello_world
    {
        public function normal()
        {
            return 'Hello World';
        }

        public function bold()
        {
            return '<b>Hello World</b>';
        }

        public function italic()
        {
            return '<i>Hello World</i>';
        }
    }

Each function would be accessible using these tags:

    {exp:hello_world:normal}
    {exp:hello_world:bold}
    {exp:hello_world:italic}



### Processing Content Within Tag Pairs

Often you will want to process content contained between a pair of tags. Let's create a simple tag that makes text bold to illustrate how this is done. Our example plugin will have this syntax:

    {exp:bold}
        Some text we want to process.
    {/exp:bold}

You will be able to use this plugin anywhere in a Template. You can even put this tag within another tag in order to affect a variable:

    {exp:channel:entries}
        {exp:bold}{title}{/exp:bold}
    {/exp:channel:entries}

In following our naming rules, we will create a plugin file named: `pi.bold.php`. And we will create a class with this syntax:

    class Bold
    {
        public $return_data = '';

        public function __construct()
        {

        }
    }

So how do we fetch the content contained within the tag pairs? Using the following variable:

    ee()->TMPL->tagdata;

Here is how the variable is used:

    class Bold
    {
        public $return_data = '';

        public function __construct()
        {
            $this->return_data = ee()->TMPL->tagdata;
        }
    }

Of course you'll want to do something with the data before you return it, so let's make it bold:

    class Bold
    {
        public $return_data = '';

        public function __construct()
        {
            $this->return_data = '<b>'.ee()->TMPL->tagdata.'</b>';
        }
    }

### Parameters

Since tags will often have parameters, the template engine makes it easy to fetch them using the following variable:

    ee()->TMPL->fetch_param('param_name');

To see how this is used, let's create a plugin that lets you format text based on the parameter. Our new plugin will have this syntax:

    {exp:format type="uppercase"}
        Some text to process.
    {/exp:format}

We will allow the following parameter choices:

- `type="uppercase"`
- `type="lowercase"`
- `type="bold"`
- `type="italic"`

Create a plugin file named pi.format.php and in it put this:

    class Format
    {
        public $return_data = '';

        public function __construct()
        {
            $parameter = ee()->TMPL->fetch_param('type');
            $this->return_data = ee()->TMPL->tagdata;

            switch ($parameter)
            {
                case "uppercase":
                    $this->return_data = strtoupper(ee()->TMPL->tagdata);
                    break;
                case "lowercase":
                    $this->return_data = strtolower(ee()->TMPL->tagdata);
                    break;
                case "bold" :
                    $this->return_data = "<b>".ee()->TMPL->tagdata."</b>";
                    break;
                case "italic":
                    $this->return_data = "<i>".ee()->TMPL->tagdata."</i>";
                    break;
            }
        }
    }

### Passing Data Directly

ExpressionEngine allows any plugin to be assigned as a text formatting choice in the Publish page of the Control Panel. In order to allow a plugin to be used this way it needs to be able to accept data directly. This is how it's done.

Add a parameter to the function. It's best to make the parameter conditional so it will know whether it's being used in a template or directly as a formatting choice:

    class Bold
    {
        public $return_data = '';

        function __construct($str = NULL)
        {
            if (empty($str))
            {
                $str = ee()->TMPL->tagdata;
            }

            $this->return_data = "<b>".$str."</b>";
        }
    }

The above tag can then be assigned in the Publish page, allowing you to run your channel entries through it.

## Database Access

ExpressionEngine makes it easy to access your database using the [Model Service](development/services/model.md). You can also execute SQL statements by using the legacy [Database Driver](development/legacy/database/index.md):

    $member = ee('Model')->get('Member')->first();

Let's use a real example to show how you might use this.

We will use the Member model to show a list of members. For this we will create a plugin called `pi.memberlist.php`. The tag syntax will be this:

    {exp:memberlist}

Here is the class syntax:

    class Memberlist
    {
        public $return_data = '';

        public function __construct()
        {
            $members = ee('Model')->get('Member')->all();

            foreach($members as $member)
            {
                $this->return_data .= $member->screen_name."<br>";
            }
        }
    }

## Where do you go from here?

Now that you understand the anatomy of a plugin, you can do whatever task you need. Your plugin can even have its own variables. For more information about this, and manipulating the tagdata in your plugin, check out the [Template Class](development/legacy/libraries/template.md).

## Debugging

Below are some possible errors you could be getting and how you can fix them.  Before anything else be sure that your plugin is installed from the Add-On manager.  In the control panel go to Developer --> Add-ons and check that your plugin is installed.

#### Problem: The following tag has a syntax error: 

   - Possible Solution: Check the spelling of your pi.nameofaddon.php and addon.settup.php file names. Both of these files need to be saved under system\user\addons\nameofplugin

    

#### Problem: The following tag cannot be processed:

   - Possible Solution: Check the tag used in the template if it has three segments to it as in `exp:nameofplugin:function` make sure that the last segment is a function that exists in your pi. file.
