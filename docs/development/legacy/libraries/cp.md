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

# CP Class

[TOC]

## Calling the CP Class

**class `Cp`**

This class is initialized automatically in the control panel.

## Breadcrumbs

### `set_breadcrumb($link, $title)`

| Parameter | Type   | Description                     |
| --------- | ------ | ------------------------------- |
| \$link    | `Type` | URL the breadcrumb should go to |
| \$title   | `Type` | Text to go in the link          |
| Returns   | `Void` |                                 |

Adds a new breadcrumb to the initial breadcrumb array. The system will automatically output the final array:

    ee()->cp->set_breadcrumb($link, $title);

## Sub Navigation

### `set_right_nav($nav = array())`

| Parameter | Type    | Description                                                                            |
| --------- | ------- | -------------------------------------------------------------------------------------- |
| \$nav     | `Array` | Associative array containing pairs of language keys as the keys and URLs as the values |
| Returns   | `Void`  |                                                                                        |

The right hand subnavigation can be used as the main navigation for a module. This method takes an associative array where the keys are language keys and the values are the full url to link to:

    ee()->cp->set_right_nav(array(
        'edit_avatar' => BASE.AMP.'C=my_account'.AMP.'M=edit_avatar',
        'edit_profile' => BASE.AMP.'C=my_account'.AMP.'M=edit_profile'
    ));

## Adding Header Data

### `add_to_head($data)`

| Parameter | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| \$data    | `String` | String to add to the `<head>` of the control panel |
| Returns   | `Void`   |                                                    |

The `<head>` tag of the control panel can be extended with new styles, meta tags, and other data. Multiple calls to this method are additive:

    ee()->cp->add_to_head('<style type="text/css" media="screen">div { display: none; }</style>');

## Add JavaScript Files to the JavaScript Combo Loader

### `add_js_script($script_type, $script_name)`

| Parameter     | Type     | Description                          |
| ------------- | -------- | ------------------------------------ |
| \$script_type | `String` | Type of script to load               |
| \$script_name | `String` | Name of script to load               |
| Returns       | `Array`  | Associative array of loaded js files |

This method allows you to include scripts found in the main JavaScript directory in the combo load routine, thus reducing HTTP requests. As an example, the call to load `filename.js` file from the `themes/javascript` directory would look like this:

    ee()->cp->add_js_script('file', 'filename');

NOTE: **Note:** This method will only load files from the `themes/javascript` directory. To load a third-party add-on package's JavaScript files, use `Cp::load_package_js`.

Several custom jQuery plugins are included with ExpressionEngine and available for third-party developers to use. Plugins available include [ee_interact.event](development/control-panel-js/events.md#form-interaction-event), [tablesorter](https://mottie.github.io/tablesorter/docs/), [ee_table](development/control-panel-js/table.md), and [wysihat](development/control-panel-js/wysihat-api.md).

An example call to load one of the jQuery plugins:

    ee()->cp->add_js_script('plugin', 'tablesorter');

The [jQuery UI](https://jqueryui.com) interactions and widgets are also included with ExpressionEngine for third-party developers to use. The call to load the jQuery UI Autocomplete plugin would look like this, for example:

    ee()->cp->add_js_script('ui', 'autocomplete');

### `add_js_script([$script = array()[, $in_footer = TRUE]])`

| Parameter   | Type      | Description                                                               |
| ----------- | --------- | ------------------------------------------------------------------------- |
| \$script    | `Array`   | Associative array containing the scripts you need to load                 |
| \$in_footer | `Boolean` | Adds to the footer if set to `TRUE`, otherwise it's added to the `<head>` |
| Returns     | `Array`   | Associative array of loaded js files                                      |

Several scripts can be included in a single call as an array:

    ee()->cp->add_js_script(
        array(
            'ui'      => array('widget', 'position', 'autocomplete'),
            'plugins'  => array('ee_notice', 'ee_table')
        )
    );

## Loading Third-Party JavaScript Files

### `load_package_js($file)`

| Parameter | Type     | Description                                                                          |
| --------- | -------- | ------------------------------------------------------------------------------------ |
| \$file    | `String` | JavaScript file to load, path relative to the current package's JavaScript directory |
| Returns   | `Void`   |                                                                                      |

Use this method to load a third-party add-on package's JavaScript files:

    ee()->cp->load_package_js('my_file');

This will load from the current package's `javascript` directory:

    system/user/addons/my_package/javascript/my_file.js

## Masking the Control Panel URL in links

### `masked_url($url)`

| Parameter | Type     | Description    |
| --------- | -------- | -------------- |
| \$url     | `String` | URL to mask    |
| Returns   | `String` | The masked URL |

When creating external links in the users Control Panel, the system folder should not show in server referral logs:

    ee()->cp->masked_url('https://example.com');

Creates the a the following link: `https://example.com?URL=https://example.com`

## Allowed Group

### `allowed_group($which)`

| Parameter | Type     | Description                                                                          |
| --------- | -------- | ------------------------------------------------------------------------------------ |
| \$which   | `String` | permission string to check for                                                       |
| Returns   | `String` | `TRUE` if they have access, `FALSE` if they don't or if the permission doesn't exist |

When a user or logged in member visits an EE site, the Session class ascribes user data to them that, among other things, pertains to their member role's access to various parts of the site. Returns `FALSE` if they have access, `TRUE` if they do:

    if ( ! ee()->cp->allowed_group('can_delete_all_entries'))
    {
        show_error(lang('unauthorized_to_delete_others'));
    }

## Safe Refresh

### `get_safe_refresh()`

| Parameter | Type     | Description                                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------------------------- |
| Returns   | `String` | URL to the current page unless `POST` data exists, in that case it goes to the root controller |

Some pages of the control panel can only be reached after the user submits a form. If you need to perform an action elsewhere and the redirect to the current page, `get_safe_refresh()` will return a url that takes these considerations into account. To use the result, prefix it with `BASE.AMP`:

    <?=form_open(
        'C=myaccount'.AMP.'M=notepad_update',
        array('id' => 'notepad_form'),
        array('redirect_to' => $this->cp->get_safe_refresh())
    )?>

## Fetch an Action ID

### `fetch_action_id($class, $method)`

| Parameter | Type      | Description                    |
| --------- | --------- | ------------------------------ |
| \$class   | `String`  | Class that contains the method |
| \$method  | `String`  | Name of the method             |
| Returns   | `Integer` | Action ID                      |

Modules have certain actions for forms, links, etc. that are recognized via an action ids that are inserted into the database upon installation of that module. This method returns the action id number from the database. (See also [functions->fetch_action_id](development/legacy/libraries/functions.md#fetch_action_idclass-method)):

    $aid = $this->EE->cp->fetch_action_id($class, $method);

## Publish Page Layout Methods

Administrators may extensively customize publish pages on a per member role and per channel basis. Since these custom layouts are saved as a serialized array in the database, any additions or deletions to publish page tabs and fields must be synced to any saved layouts. The control panel library provides 4 methods to facilitate custom layout updates. (See also [Tab File Reference](development/tab-files.md)
