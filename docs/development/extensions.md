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

# Extensions and Hooks
TIP: If you are working with an existing add-on, we recommend you start with [Modernizing add-ons](development/modernizing-existing-add-ons.md) 

[TOC]

## Overview

Within ExpressionEngine are what is known as "hooks"; little snippets of code in over 100 strategic places that allow the calling of third-party scripts that can rewrite and modify the inner workings of the program. By hooking into the core, you can do things like modify an entire Control Panel page, add/remove functionality, and modify the appearance of certain page elements. Hooks enable third party developers to modify aspects of ExpressionEngine without hacking the core.

NOTE:Before adding an extension hook to your add-on, you need to already have an add-on in place. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## Creating An Amazing Extension

We can give our add-on the ability to hook into the core of ExpressionEngine by using the CLI:

```
$ php system/ee/eecli.php make:extension-hook -i
Let's implement an extension hook!
What hooks would you like to use? (Read more: https://docs.expressionengine.com/latest/development/extensions.html) typography_parse_type_end
What add-on is the extension hook being added to? [amazing_add_on]:  amazing_add_on
Building Extension hook.
Extension hook created successfully!

```

NOTE: If you are using the command above to add an extention to an existing add-on, please see the [Updating Existing Add-ons](development/modernizing-existing-add-ons.md)

TIP: Files that interact with ExpressionEngine core hooks are referred to as "extensions" because they extend the functionality of ExpressionEngine.

This will create an `ext.[addon_name].php` file in our add-on along with an `Extensions` folder where we will build out the code we want to run when we interact with a core hook. 

Inside our `Extensions` folder the CLI will create a file with the same name as the core hook we plan to use.

```
amazing_add_on
 ┣ Extensions
 ┃ ┣ [HookName].php
 ┃ ...
 ┗ ext.amazing_add_on.php
 ```

TIP: A single add-on can interact with as many hooks as you want.

TIP: Extensions need to be enabled to work. When you create an extension, a migration is added which will enable the extension on install. However if you need it immediately available, you can use the `--install` or `-i` flag when creating your extension. This would look like `make:extension-hook --install`.

## Anatomy Of An Extension
Once we've added the ability to hook into the core with our add-on, an `Extensions` folder is created. The CLI will generate a class and a respective file for each core hook we wish to use.

Here we have added the ability to interact with the [`typography_parse_type_end()`](/development/extension-hooks/global/typography.html#typography_parse_type_endstr-this-prefs) hook.

So our add-on structure now looks like this:

```
amazing_add_on
 ┣ Extensions
 ┃ ┣ TypographyParseTypeEnd.php
 ┣ addon.setup.php
 ┣ ext.amazing_add_on.php
 ┗ upd.amazing_add_on.php
 ```


### `class [HookName]`

Inside `Extensions\TypographyParseTypeEnd.php` we see the following code generated for us:

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Extensions;

use ExpressionEngine\Service\Addon\Controllers\Extension\AbstractRoute;

class TypographyParseTypeEnd extends AbstractRoute
{
    public function process($str, $obj, $prefs)
    {
    }
}

```

As we can see, the CLI has correctly created a new class using our core hook in PascalCase as the name.

Inside our class is the `process()` function. Again the CLI has already added all parameters that will be passed in from the core hook.  

TIP:Reference the [Available Core Hooks](development/extension-hooks/extension-hooks-overview.md) section of the docs to read on what parameters your hook uses.

From the [`typography_parse_type_end()`](/development/extension-hooks/global/typography.html#typography_parse_type_endstr-this-prefs) docs we can see that this hook modifies a string after all other typography is processed. Thus we should be able to take a string, manipulate it, then pass it back to ExpressionEngine to be rendered in the template.

We know that we should expect the following parameters for this hook:


| Parameter | Type     | Description                                              |
| --------- | -------- | -------------------------------------------------------- |
| \$str     | `String` | The string currently being parsed                        |
| \$this    | `Object` | The Typography library object                            |
| \$prefs   | `Array`  | Array of preferences sent to `EE_Typography::parse_type` |

We also know that we should be returning a string from our `process()` function.


## Do Something - Create An Extension Hook

Let's do something with our hook to demonstrate how this would work. We're going to continue working with the `typography_parse_type_end()` hook by replacing "e" with "EE" everywhere in our templates (because EE is amazing!)

Using the CLI to generate the extension hook (notice the `-i` flag to immediately enable the extension hook):

```
$ php system/ee/eecli.php make:extension-hook -i
Let's implement an extension hook!
What is the extension hook name? Amazing Hook
What hooks would you like to use? (Read more: https://docs.expressionengine.com/latest/development/extensions.html) typography_parse_type_end
What add-on is the extension hook being added to? [amazing_add_on]:  amazing_add_on
Building Extension hook.
Extension hook created successfully!
Installing extension hook...
Extension hook installed!
```

This creates our `Extensions/TypographyParseTypeEnd.php` file for us. This file will initially look like this:

```

<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Extensions;

use ExpressionEngine\Service\Addon\Controllers\Extension\AbstractRoute;

class TypographyParseTypeEnd extends AbstractRoute
{
    public function process()
    {
    }
}
```

All the functionality we want to include when our hook is executed needs to go inside our `process()` method. Here we are going to take the string passed in by the `TypographyParseTypeEnd()` core hook, replace all instances of `e` with `EE`, and then return the updated string.

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Extensions;

use ExpressionEngine\Service\Addon\Controllers\Extension\AbstractRoute;

class TypographyParseTypeEnd extends AbstractRoute
{
    public function process($str, $obj, $prefs)
    {
        //check if $str has content, if so replace
        //all "e" with "EE"
        if(!is_null($str) ){
            $str = str_replace("e","EE",$str);
        }
        return $str;
    }
}

```

Now when we render our site using fields like textarea or other fields that use the Typography Library, our users will see how amazing EE is. 

NOTE:**NOTE:** Although ExpressionEngine is amazing, we do not suggest using the above example in production.

## Multiple Extensions, Same Hook

When an extension hook is called, ExpressionEngine checks the database to see if there are any extensions available for the hook. If there are extensions, then it processes them in order based on their priority level with the lower the priority number the sooner the extension is called. Because of priority, add-ons that use extensions might interfere with each other, so we have provided two variables for helping with that.

### `ee()->extensions->last_call`

There will be rather popular hooks being used by multiple extensions and some hooks will expect you to return data to the extension hook. Because of that, there is a variable available from the Extensions class (`ee()->extensions`) that will contain the returned data of any prior extensions for that hook. Say, there is a hook for formatting text and an extension before yours is called. That extension will be returning the text formatted in its own way, but then your extension is called with the original text details being sent. In such an instance of data being returned and possible prior extensions, there is a variable available to retrieve that already formatted text: `ee()->extensions->last_call`. This variable will return whatever the last extension returned to this hook. If there was no prior extension, then the value of this variable is `FALSE`.

### `ee()->extensions->end_script`

Many extension hooks exist for the express purpose of totally controlling a page or script in the Control Panel. They are meant for redesigning the appearance of a form or perhaps usurping a script for processing form data. In those instances you want your extension to be the last thing called for that extension hook so that nothing else is processed after that point. The `ee()->extensions->end_script` exists solely for that purpose. If you set this value to TRUE, then once your extension is done being processed the execution of the hook is finished, as is the script that the extension hook is contained within.
