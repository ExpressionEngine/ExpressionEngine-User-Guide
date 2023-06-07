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

# Language Class

[TOC]

## Calling the Language Class

**class `Language`**

ExpressionEngine uses the Language class for calling language files and making the Control Panel side of ExpressionEngine translatable into multiple languages. This class is initialized automatically, by the system so there is no need to do it manually.

ExpressionEngine also requires that every module have a file in the language directory (ex: /system/user/addons/language/english/ for third party modules) for the module with its filename in this form: `your_module_name_lang.php`. Contained in this file with be an array (`$lang`) of all the language variables for your module. Every module language file must contain _at least_ two values for the name and description of the module, which are displayed in the Module page in the Control Panel.

    <?php

    $lang = array(

    //----------------------------------------
    // Required for MODULES page
    //----------------------------------------

    "moblog_module_name" =>
    "Moblog",

    "moblog_module_description" =>
    "Moblogging Module",

    //----------------------------------------

    "moblog" =>
    "Moblogging",

    "edit_moblog" =>
    "Update Moblog",

    "view_moblogs" =>
    "Moblog Accounts",

    // END
    ''=>''
    );
    ?>

When adding text to your language file array, be careful when using non-alphanumeric characters such as quotes and monetary symbols. For such things we suggest that you convert them into HTML entities or escape them with a backslash.

## Calling a Language File

### `loadfile([$which = ''[, $package = ''[, $show_errors = TRUE]]])`

| Parameter     | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| \$which       | `String`  | Name of the language file to load                     |
| \$package     | `String`  | Name of the package where the language file exists    |
| \$show_errors | `Boolean` | Set to `FALSE` to ignore missing language pack errors |
| Returns       | `Void`    |                                                       |

A module's language file is automatically loaded whenever the module is accessed through the Module section of the Control Panel. There are also two other language files that will be loaded automatically by ExpressionEngine. The first, `core_lang.php`, is always available on both the user side and Control Panel side of ExpressionEngine. It contains many often used pieces of text and also Localization related lines of text. Second, if accessing any part of the Control Panel, then the values located in `cp_lang.php` are always available to you. On the user side of the site, the values located in `core_lang.php`.

Every so often, you might require or desire the language values from another language file. For example, you know that the `members_lang.php` file contains many member related pieces of text, and instead of duplicating those in your module's language file you could use the text in that language file. To load that language file and its values, you simply need to call the `ee()->lang->loadfile()` method with the name of the language file:

    ee()->lang->loadfile('members');

## Fetching a Line of Text

### `lang($line[, $id = ''])`

| Parameter | Type     | Description                                                                        |
| --------- | -------- | ---------------------------------------------------------------------------------- |
| \$line    | `String` | the key from the language file                                                     |
| \$id      | `String` | ID of the form element; if supplied will wrap the rendered text in a `<label>` tag |
| Returns   | `String` | Language value                                                                     |

A module's language file is automatically loaded whenever the module is accessed through the Module section of the Control Panel. So, in that instance, you simply need to call the piece of text you wish from the array contained in your module's language file. To do so, you simply use the `lang()` method and specify the key for that piece of text in the array:

    ee()->view->cp_page_title = lang('view_moblogs');
    // Returns "Moblog Accounts" as the page title;
