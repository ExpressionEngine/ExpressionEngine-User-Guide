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

# Hook Into The Core

[TOC]

## Overview

Within ExpressionEngine are what is known as 'hooks'; little snippets of code in over 100 strategic places that allow the calling of third-party scripts that can rewrite and modify the inner workings of the program. By hooking into the core, you can do things like modify an entire Control Panel page, add/remove functionality, and modify the appearance of certain page elements. Hooks enable third party developers to modify aspects of ExpressionEngine without hacking the backend scripts.

## Generate Our Files

We can give our add-on the ability to hook into the core of ExpressionEngine by using the CLI:

```
php system/ee/eecli.php make:extension-hook
```

Follow the prompts to add an extension file to your add-on. 

TIP: Files that interact with ExpressionEngine core hooks are referred to as "extensions" because they extend the functionality of ExpressionEngine.

This will create an `ext[addon_name].php` file in our add-on along with an `Extensions` folder where will build out the code we want to run when we interact with a core hook. Inside our `Extensions` folder the CLI will crate a file with the same name as the core hook we plan to use.

```
amazing_addon
 ┣ Extensions
 ┃ ┣ [HookName].php
 ┣ addon.setup.php
 ┣ ext.amazing_addon.php
 ┗ upd.amazing_addon.php
 ```

TIP: A single add-on can interact with as many hooks as you want.

## `ext.[addon_name].php`

Prior to ExpressionEngine 6.4.0 and 7.2.0, all code that was used to hook into the core was placed in our `ext.[addon_name].php` file. However, now that file mainly just extends the `Extension` service and routes ExpressionEngine to reference the `Extensions` folder in our add-on.

## `AddonName\Extensions`
Once we've added the abillity to hook into the core with our add-on, an `Extensions` folder is created. The CLI will generate a class and a respective file for each core hook we wish to use.

Here we have added the ability to interact with the [`typography_parse_type_end()`](/development/extension-hooks/global/typography.html#typography_parse_type_endstr-this-prefs) hook.

So our add-on structure now looks like this:

```
amazing_addon
 ┣ Extensions
 ┃ ┣ TypographyParseTypeEnd.php
 ┣ addon.setup.php
 ┣ ext.amazing_addon.php
 ┗ upd.amazing_addon.php
 ```

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

### `class [HookName]`

As we can see, the CLI has correctly created a new class using our core hook in PascalCase as the name.

Inside our class is the `process()` function. Again the CLI has already added all parameters that will be passed in from the core hook.  Reference the Available Core Hooks section of the docs to read on what parameters your hook uses.

From the [`typography_parse_type_end()`](/development/extension-hooks/global/typography.html#typography_parse_type_endstr-this-prefs) docs we can see that this hook modifies string after all other typography is processed. Thus we should be able to take a string, manipulate it, then pass it back to ExpressionEngine to be rendered in the template.

We know that we should expect the following parameters for this hook:

- `string //The string currently being parsed`
- `object //The Typography library object`
- `array //Array of preferences sent to EE_Typography::parse_type`

We also know that we should be returning a string from our `process()` function.



## Do Something

Let's do something with our hook to demonstrate how this would work. We're going to continue working with the `typography_parse_type_end()` hook by replacing "e" with "EE" everywhere in our templates (because EE is amazing!)

```
<?php

namespace ExpressionengineDeveloper\AmazingAddOn\Extensions;

use ExpressionEngine\Service\Addon\Controllers\Extension\AbstractRoute;

class TypographyParseTypeEnd extends AbstractRoute
{
    public function process($str, $obj, $prefs)
    {
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