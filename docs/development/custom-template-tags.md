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
TIP: If your working with an existing add-on we recommend you start with [Modernizing add-ons](development/modernizing-existing-add-ons.md) 

[TOC]

## Overview

TIP:If you are unfamiliar with Template Tags be sure to read the docs on [ExpressionEngine's template language](/templates/language.md) first. 

Creating your own custom template tags allows you to display dynamic data from your add-on anywhere you want, in any template.

NOTE:Before adding a template tag to your add-on, you need to already have an add-on in place. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## Creating An Amazing Template Tag
Tags are created via the CLI by using the `make:template-tag` command. 

```
php system/ee/eecli.php make:template-tag
Let's build a new tag!
What is the tag name? Amazing
What add-on is the tag being added to? [amazing_add_on]:  amazing_add_on
Building Tag.
Tag created successfully!
``` 

Follow the prompts to add a tag file to your add-on. 

This will create a `Tags` folder in your add-on.

```
amazing_add_on
 ┣ Tags
 ┃ ┗ AmazingTag.php
 ┗ ...
 ```

## Anatomy of A Template Tag

**class** `class [TagName]`

Inside `Tags/ExampleTag.php` we see the following code generated for us:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Tags;

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


Inside of our class is the `process()` method. Anything we want to happen when our template tag is used should be placed inside this `process()` function.

After your tag is created, you can use your tag by just using `{exp:[addon_name][tag_name]}`.    

In the example above, we created a tag named "Example Tag". We can now use the tag `{exp:amazing_add_on:example_tag}` and the text "My Tag" will be outputted to my template.


## Tag Construction

A typical custom add-on tag looks like this:

    {exp:amazing_add_on:bold}

The first segment is the tag identifier: {exp:. It tells the template engine that it has just encountered a tag.

The second segment is the add-on's name all lowercase and with no spaces or special characters. In this case, we're telling ExpressionEngine to look inside of the Amazing Add-On add-on.

The third segment indicates the tag from inside the add-on to use. In this case it is the `bold` tag.


### Two Kinds of Tags

There are two kinds of tags: Single tags and tag pairs. A single tag does not have a closing tag:

    {exp:randomizer:set_one}

Single tags are designed to return a single value.  Tag pairs look like this:

    {exp:xml_encode}
        Stuff between the tags
    {/exp:xml_encode}

Tag pairs allow you to process the information contained between the tags. In the above example, the text between the pairs would be encoded with XML entities.

## Creating Single Template Tags
Single Tags are the easiest template tags to create and process. Here we'll add a single tag to our add-on using the CLI. We'll name the tag Amazing Text.

```
php system/ee/eecli.php make:template-tag
What is the tag name? Amazing Text
What add-on is the tag being added to? [amazing_add_on,...]: amazing_add_on
Tag created successfully!
```

This generates the class for our add-on:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Tags;

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

## Do Something - Create A Tag Pair Template Tag

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
php system/ee/eecli.php make:template-tag
What is the tag name? bold
What add-on is the tag being added to? [amazing_add_on,...]: amazing_add_on
Tag created successfully!
```

Now we have our template tag's class located at `Tags/Bold.php`:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Tags;

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

Now We need to capture the content between our opening and closing tags, and return that context as bold text. In ExpressionEngine, this is called fetching tagdata.


### Fetching Tagdata
In our class, we use `ee()->TMPL->tagdata;` to capture the template data that is between our opening and closing tag.

Let's update our example to capture the text we want to make bold in our template and render it back to the browser.

Our tag's class:

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

In our template:

```
We want to bold {exp:amazing_add_on:bold}this text{/exp:amazing_add_on:bold}.
```

Page source code after our template is rendered in the browser:

```
We want to bold <b>this text</b>.
```

As you can see, any template data between our opening and closing tags is captured using `ee()->TMPL->tagdata`.

## Do Something - Create A Template Tag With Parameters
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
php system/ee/eecli.php make:template-tag
What is the tag name? format
What add-on is the tag being added to? [amazing_add_on,...]: amazing_add_on
Tag created successfully!
```

Now we have our template tag's class located at `Tags/Format.php`:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Tags;

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

## Using Variables In Your Template Tag
With variables, we can take our tag a step further. Imagine that you have tag pair that you want to use to return data based on some parameters. We can do that using variables inside of our tag.

We all know and love [`{exp:channel:entries}`](channels/entries.md). We use the Channel Entries tag by opening and closing the tag, passing some parameters, and then placing some template tags in our template that we know the tag will replace when rendered. 

This typically looks something like this:

```
{exp:channel:entries channel="news" limit="10"}
    <h2>{title}</h2>
    {body}
{/exp:channel:entries}
```

In the snippet above, we're passing in the `channel` and `limit` as parameters. We're then expecting the Channel Entries tag to replace the `{title}` and `{body}` **variables** when the tag is parsed. Now, let's do something similar to our add-on.


## Do Something - Create A Tag With Variables
Let's add a tag to our add-on that will render the current date and time. The user can pass in their timezone and the tag will return the current Date and time.

First, generate the tag (we're calling our tag "date and time" and adding it to our Amazing Add-On):

```
php system/ee/eecli.php make:template-tag
What is the tag name? date and time
What add-on is the tag being added to? [amazing_add_on,...]: amazing_add_on
Tag created successfully!
``` 

Now, let's update the `DateAndTime` class (`Tags/DateAndTime.php`) to read the timezone that is passed in:

```
namespace ExpressionengineDeveloper\AmazingAddOn\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

class DateAndTime extends AbstractRoute
{
    // Example tag: {exp:amazing_add_on:date_and_time}
    public function process()
    {
        $userTimeZone = ee()->TMPL->fetch_param('timezone');

        // return something;
    }
}
```

Now we drop in some magic using the `TMPL::parse_variables` method that's provided by the [`Template Class`](development/legacy/libraries/template.md). Here we'll get the current date and time, then create an array of variables the user can use in their template to show the current date and time.

```
namespace ExpressionengineDeveloper\AmazingAddOn\Tags;

use ExpressionEngine\Service\Addon\Controllers\Tag\AbstractRoute;

use DateTime;
use DateTimeZone;

class DateAndTime extends AbstractRoute
{
    // Example tag: {exp:amazing_add_on:date_and_time}
    public function process()
    {
        //check if the user set a timezone. If not just
        //use the `America/New_York` timezone
        $userTimeZone = empty(ee()->TMPL->fetch_param('timezone')) ? 'America/New_York' : ee()->TMPL->fetch_param('timezone');

        //get the DateTime object
        $currentDateTime = new DateTime("now", new DateTimeZone('America/New_York') );

        //assign value to our array that will match
        //the variables in our template.
        $variables[] = array(
            'timezone' => $userTimeZone,
            'date' => $currentDateTime->format("F d, Y"),
            'time' => $currentDateTime->format("h:i A")
        );

        //use parse_variables method to parse our array as variables
        return ee()->TMPL->parse_variables(ee()->TMPL->tagdata, $variables);
    }
}
```

Putting this into practice, let's create a new template and add the following to our template:

```
{exp:amazing_add_on:date_and_time timezone="Europe/London"}
    In the {timezone} timezone: <br>
    The current date is: {date} <br>
    The current time is: {time}

{/exp:amazing_add_on:date_and_time}
```

This will render the following in our browser:

```
In the Europe/London timezone:
The current date is: November 15, 2022
The current time is: 02:40 PM
```

TIP: Of course, this is only the beginning of what you can do with variables in your tag. We created single variables here, but you can create pair variables and much more. For more information about this, and manipulating the tagdata in your plugin, check out the [Template Class](development/legacy/libraries/template.md).