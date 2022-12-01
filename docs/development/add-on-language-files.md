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

# The Language File (addon_name_lang.php)

The Language file contains an array named `$lang`, which is used along with the Language class to display text on a page in whatever language is selected in the user's account settings. 

## Required Fields
There are two required lines in the language file for each add-on, which allows the name and description of the add-on to be viewable on the MODULES page:

    $lang = array(

    // Required for MODULES page

    'my_module_module_name'     => 'Module Name',
    'my_module_module_description'  => 'Brief description of the module- displayed on the Modules page',

    //----------------------------------------

    // Additional Key => Value pairs go here

    // END
    ''=>''
    );

If the ExpressionEngine core language files contains string with the same key, it will be used in favor of add-on specified string. If an add-on needs to override that string, that can be done by adding it to `$ee_lang` array in the add-on's language file.

## Publish Form Tab Label

In addition to the two required fields you can have a custom tab label for your publish fields. Just assign the desired label to a key which shares the name of your module name:

    // Additional Key => Value pairs go here

    /**
     * Tab Label for publish fields
     *
     * Assign the label you wish to use to the module_name array key
     * Remember only alphanumeric characters, underscores, dashes and spaces are allowed.
     */

    'module_name' => 'Tab label'