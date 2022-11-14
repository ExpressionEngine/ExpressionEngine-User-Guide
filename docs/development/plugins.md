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

# Adding Template Tags

[TOC]

## Overview

An add-on's template tags can be used anywhere in templates to help edit content.

## Creating Template Tags
Tags are created via the CLI by using the `make:template-tag` command. 

```
php system/ee/eecli.php make:template-tag
``` 

Follow the prompts to add an extension file to your add-on. 

This will create an `Models/Actions` folder in your add-on.

```
amazing_addon
 ┣ Module
 ┃ ┗ Tags
 ┃ ┃ ┗ ExampleTag.php
 ┗ ...
 ```

## `class [TagName]`
Inside `Modules/Actions/ExampleTag.php` we see the following code generated for us:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Module\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class ExampleTag extends AbstractRoute
{
    // Example tag: {exp:amazing_add_on:example_tag}
    public function process()
    {
        return "My tag";
    }
}
```

As we can see, the CLI has correctly created a new class using our tag's name in PascalCase as the class name.

Inside of our class is the `process()` method. Anything we want to happen when our template tag is used should be placed inside this `process()` function.

After your tag is created, you can use your tag by just using `{exp:[tag_name]}`. In the example above, we created a tag named "Example Tag". We can now use the tag `{exp:amazing_add_on:example_tag}` and the text "My Tag" will be outputted to my template.


## Tag Construction

A typical ExpressionEngine tag looks like this:

    {exp:channel:entries}

The first segment is the tag identifier: {exp:. It tells the template engine that it has just encountered a tag.

The second segment is the "family" name: `{exp:channel`. There are different families of tags: channel, comments, members, email, stats, etc. In programming terms, the second segment is the name of the 'class' that is instantiated by the tag.

The above example would tell the template engine to dynamically instantiate the "channel" class.

The third segment indicates the 'function' from within a particular family of tags: `{exp:channel:entries}`. This example would tell ExpressionEngine you want to use the "entries" method in the "channel" class.

A tag, therefore, mirrors an object oriented approach: `Class->method`:

    {exp:class_name:method_name}

### Two Kinds of Tags

There are two kinds of tags: Single tags and tag pairs. A single tag does not have a closing tag:

    {exp:randomizer:set_one}

Single tags are designed to return a single value.  Tag pairs look like this:

    {exp:xml_encode}
        Stuff between the tags
    {/exp:xml_encode}

Tag pairs allow you to process the information contained between the tags. In the above example, the text between the pairs would be encoded with XML entities.

## Creating Single Tags
Single Tags are the easiest template tags to create and process. Here we'll add a single tag to our add-on using the CLI. We'll name the tag Amazing Text.

```
php system/ee/eecli.php make:tag
What is the tag name? Amazing Text
What add-on is the tag being added to? amazing_add_on
Tag created successfully!
```

This generates the class for our add-on:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Module\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class AmazingText extends AbstractRoute
{
    // Example tag: {exp:amazing_add_on:amazing_text}
    public function process()
    {
        return "ExpressionEngine is the best CMS in the world!";
    }
}
```

Now in my template I can use my tag as such:

```
Here is some amazing text: {exp:amazing_add_on:amazing_text}

```

This would render in the browser as:

```
Here is some amazing text: ExpressionEngine is the best CMS in the world!
```

## Creating Tag Pairs

Often you will want to process content contained between a pair of tags. Let's create a simple tag that makes text bold to illustrate how this is done. Our example plugin will have this syntax:

    {exp:amazing_add_on:bold}
        Some text we want to process.
    {/exp:amazing_add_on:bold}

You will be able to use this plugin anywhere in a Template. You can even put this tag within another tag in order to affect a variable:

    {exp:channel:entries}
        {exp:amazing_add_on:bold}{title}{/exp:amazing_add_on:bold}
    {/exp:channel:entries}

To create this tag pair, we'll use the CLI similarly to how we created a single tag.

```
php system/ee/eecli.php make:tag
What is the tag name? bold
What add-on is the tag being added to? amazing_add_on
Tag created successfully!
```

Now we have our template tag's class located at `Modules/Tags/Bold.php`:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Module\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class Bold extends AbstractRoute
{
    // Example tag: {exp:amazing_add_on:bold}
    public function process()
    {
        return "My tag";
    }
}

```


### Fetching Tagdata
In our class, we use `ee()->TMPL->tagdata;` to capture the template data that is between our opening and closing tag.

```
class Bold extends AbstractRoute
{
    // Example tag: {exp:amazing_add_on:bold}
    public function process()
    {
        return ee()->TMPL->tagdata;
    }
}
```

```
class Bold extends AbstractRoute
{
    // Example tag: {exp:amazing_add_on:bold}
    public function process()
    {
        return '<b>'.ee()->TMPL->tagdata.'</b>';
    }
}
```

## Parameters
Both single tags and tag pairs can accept parameters. The template engine makes it easy to fetch them using the following variable:

    ee()->TMPL->fetch_param('param_name');

To see how this is used, let's create a plugin using the CLI that lets you format text based on the parameter. Our new plugin will have this syntax:

    {exp:amazing_add_on:format type="uppercase"}
        Some text to process.
    {/exp:amazing_add_on:format}

We will allow the following parameter choices:

- `type="uppercase"`
- `type="lowercase"`
- `type="bold"`
- `type="italic"`

```
php system/ee/eecli.php make:tag
What is the tag name? format
What add-on is the tag being added to? amazing_add_on
Tag created successfully!
```

Now we have our template tag's class located at `Modules/Tags/Format.php`:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Module\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class format extends AbstractRoute
{
    // Example tag: {exp:amazing_add_on:format}
    public function process()
    {
        $parameter = ee()->TMPL->fetch_param('type');

            switch ($parameter)
            {
                case "uppercase":
                    return strtoupper(ee()->TMPL->tagdata);
                    break;
                case "lowercase":
                    return strtolower(ee()->TMPL->tagdata);
                    break;
                case "bold" :
                    return "<b>".ee()->TMPL->tagdata."</b>";
                    break;
                case "italic":
                    return "<i>".ee()->TMPL->tagdata."</i>";
                    break;
            }

    }
}

```

## Passing Data Directly

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
