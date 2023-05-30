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

# Config Class

[TOC]

The Config class provides a means to retrieve configuration preferences. These preferences can come from the system's config file (`system/user/config/config.php`) or from your add-on's custom config files.

NOTE: **Note:** This class is initialized automatically by the system so there is no need to do it manually.

## Working with the Config Class

[TOC=3]

### Anatomy of a Config File

ExpressionEngine has one primary config file, located at `sysem/user/config/config.php` and add-ons can also contain additional config files located inside their directory. Make sure that you only use the primary configuration file when the config is on a per-install basis.

NOTE: **Note:** If you do create your own config files use the same format as the primary one, storing your items in an array called \$config. ExpressionEngine will intelligently manage these files so there will be no conflict even though the array has the same name (assuming an array index is not named the same as another).

### Loading a Config File

NOTE: **Note:** ExpressionEngine automatically loads the primary config file, so you will only need to load a config file if you have created your own.

There are two ways to load a config file:

#### Manual Loading

To load one of your custom config files you will use the following function within the [controller](development/legacy/controllers.md) that needs it:

    ee()->config->load('filename');

Where filename is the name of your config file, without the `.php` file extension.

If you need to load multiple config files normally they will be merged into one master config array. Name collisions can occur, however, if you have identically named array indexes in different config files. To avoid collisions you can set the second parameter to `TRUE` and each config file will be stored in an array index corresponding to the name of the config file. Example:

    // Stored in an array with this prototype: ee()->config['blog_settings'] = $config
    ee()->config->load('blog_settings', TRUE);

Please see the section entitled Fetching Config Items below to learn how to retrieve config items set this way.

The third parameter allows you to suppress errors in the event that a config file does not exist:

    ee()->config->load('blog_settings', FALSE, TRUE);

### Fetching Config Items

To retrieve an item from your config file, use the following function:

    ee()->config->item('item name');

Where item name is the \$config array index you want to retrieve. For example, to fetch your language choice you'll do this:

    $lang = ee()->config->item('language');

The function returns `NULL` if the item you are trying to fetch does not exist.

If you are using the second parameter of the `ee()->config->load` function in order to assign your config items to a specific index you can retrieve it by specifying the index name in the second parameter of the `ee()->config->item()` function. Example:

    // Loads a config file named blog_settings.php and assigns it to an index named "blog_settings"
    ee()->config->load('blog_settings', TRUE);

    // Retrieve a config item named site_name contained within the blog_settings array
    $site_name = ee()->config->item('site_name', 'blog_settings');

    // An alternate way to specify the same item:
    $blog_config = ee()->config->item('blog_settings');
    $site_name = $blog_config['site_name'];

### Setting a Config Item

If you would like to dynamically set a config item or change an existing one, you can do so using:

    ee()->config->set_item('item_name', 'item_value');

Where item_name is the `$config` array index you want to change, and item_value is its value.

## Class Reference

**class `EE_Config`**

[TOC=3]

### property `$config`

Array of all loaded config values

### property `$is_loaded`

Array of all loaded config files

### `item($item[, $index=''])`

| Parameter | Type     | Description                            |
| --------- | -------- | -------------------------------------- |
| \$item    | `String` | Config item name                       |
| \$index   | `String` | Index name                             |
| Returns   | `Mixed`  | Config item value or NULL if not found |

Fetch a config file item.

### `set_item($item, $value)`

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| \$item    | `String` | Config item name  |
| \$value   | `String` | Config item value |
| Returns   | `Void`   |                   |

Sets a config file item to the specified value.

### `slash_item($item)`

| Parameter | Type     | Description                                                          |
| --------- | -------- | -------------------------------------------------------------------- |
| \$item    | `String` | config item name                                                     |
| Returns   | `Mixed`  | Config item value with a trailing forward slash or NULL if not found |

This method is identical to `item()`, except it appends a forward slash to the end of the item, if it exists.

### `load([$file = ''[, $use_sections = FALSE[, $fail_gracefully = FALSE]]])`

| Parameter         | Type     | Description                                                                                   |
| ----------------- | -------- | --------------------------------------------------------------------------------------------- |
| \$file            | `String` | Configuration file name                                                                       |
| \$use_sections    | `Bool`   | Whether config values should be loaded into their own section (index of the main config array) |
| \$fail_gracefully | `Bool`   | Whether to return FALSE or to display an error message                                        |
| Returns           | `Bool`   | TRUE on success, FALSE on failure                                                             |

Loads a configuration file.

### `site_url()`

| Parameter | Type     | Description |
| --------- | -------- | ----------- |
| Returns   | `String` | Site URL    |

This method retrieves the URL to your site, along with the "index" value you've specified in the config file.

This method is normally accessed via the corresponding functions in the [URL Helper](development/legacy/helpers/url-helper.md).

### `update_site_prefs([$new_values = array()[, $site_ids = array()[, $find = ''[, $replace = '']]]])`

| Parameter    | Type     | Description                                                                                                                  |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| \$new_values | `Array`  | Associative array of keys and values to add to the config file                                                               |
| \$site_ids   | `Array`  | Array of site IDs to update. If left empty, uses current site ID. Alternatively, you can supply `'all'` to update all sites. |
| \$find       | `String` | String to find in site name (must not be using MSM).                                                                         |
| \$replace    | `String` | String to replace with in site name (must not be using MSM).                                                                 |

Update the Site Preferences. Parses through an array of values and sees if they are valid site preferences. If so, we update the preferences in the database for this site. Anything left over is updated within the config files.

NOTE: **Note:** If the new values passed via the first parameter are not found in the config file we will add them to the file. Effectively this lets us use this function instead of the "append" function used previously.
