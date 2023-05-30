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

# v3 Add-on Migration

[TOC]

This guide is an overview of the changes you will need to make to have your add-ons up and running under 3.0. The most notable changes to add-ons are the [addon.setup.php file](development/addon-setup-php-file.md) and the new [Control Panel Style Reference](#control-panel-styles).

There are some deprecated features and code, so be sure to check the [Developer Logs](control-panel/system-logs.md#developer-logs) in the control panel for messages regarding method deprecation to make sure your add-on is not calling any deprecated code.

If you're just getting started, we recommend reviewing some of the new service documentation as well as the following pages:

- [The addon.setup.php File](development/addon-setup-php-file.md)
- [General Syntax Changes](#syntax-changes)
- [Control Panel Pages](#control-panel-styles)

## Required Changes

### Create an `addon.setup.php` File

In ExpressionEngine 3.0, all add-ons must have a file called `addon.setup.php`. It defines basic information about your add-on, such as its name, version, and some namespace. It is a **required** file, without it your add-on will not be recognized.

To get started, create a file called _addon.setup.php_ in the main directory of your add-on. Then fill it in with this template, changing the values to match your add-on:

    <?php

    return array(
      'author'      => 'Example, Inc',
      'author_url'  => 'https://example.com',
      'name'        => 'Hello World',
      'description' => 'Displays a friendly "Hello world!" message.',
      'version'     => '2.0.0',
      'namespace'   => 'Example\HelloWorld'
    );

Your add-on should now be visible in the Add-Ons section of the control panel. See [addon.setup.php file](development/addon-setup-php-file.md) for full documentation of available keys.

### Component Changes

Depending on what parts your add-on has, you should also review the following pages:

- [Extension Specific Changes](#extension-changes)
- [Plugin Specific Changes](#plugin-changes)
- [Module Specific Changes](#module-changes)
- [Fieldtype Specific Changes](#fieldtype-changes)

## In-App Documentation

Add-ons can now provide some in-app documentation by including a `README.md` file in the main directory of the add-on. This file will be parsed as markdown. Please note that the first h1 heading will be ignored. All other headings will automatically be listed in the sidebar.

## Extension Changes

Before going to update your extension, please check the Extension Hooks listing and check for any changes to the hooks you're using. There are several new hooks in ExpressionEngine 3, as well as some changes and removals.

### Custom Settings Pages

If you are using the `settings` method to show your extension settings you should not need to make any changes. However, if you're using the `settings_form` method then you will need to update your extension to the new control panel style.

Please refer to the [Module Control Panel](#module-changes) changes for details on how to create these. The form should submit to `addons/settings/<addonName>/save`, where `<addonName>` is the folder name of your add-on.

## Plugin Changes

### Remove Plugin Info

The `$plugin_info` array is no longer needed and will be ignored by 3.0. All of this data should already be in your [addon.setup.php file](development/addon-setup-php-file.md) and will be read from there.

### Typography Flag

To make your plugin available as a typography plugin, you must add a `plugin.typography` key to your [addon.setup.php file](development/addon-setup-php-file.md) array, and assign it a value of `TRUE`:

    'plugin.typography' => TRUE

### Install Plugin

All plugins must be installed via the Add-On Manager before they can be used. If your plugin is not working as expected, double check to make sure it is installed.

## Syntax Changes

This section is an overview of syntax changes for third party integration with the new ExpressionEngine.

### General Syntax Changes

ExpressionEngine 3.0 adopts [PSR-1](https://www.php-fig.org/psr/psr-1/) and [PSR-4](https://www.php-fig.org/psr/psr-4/), which means `StudlyCaps` for class names, `camelCase` for method names, [namespaces](https://php.net/namespace), and [autoloading](https://php.net/autoload).

#### CP URLs

`cp_url(...)` has been deprecated, please use `ee('CP/URL', '...')`. For the full documentation see [Control Panel Styles](#control-panel-styles).

#### Model Service

The model service helps smooth out interacting with ExpressionEngine's data types by providing an API that mimics their natural language description as closely as is feasible. You do not query for `channel_data` joined on `channel_titles`; instead, you simply get a channel entry:

    $oscar = ee('Model')->get('Member')
      ->filter('screen_name’, ‘Oscar')
      ->first();

    $oscar->bio = 'I got this.';
    $oscar->save();

For the full documentation see [Model Service](development/services/model.md).

## Fieldtype Changes

### Add Fieldtypes to addon.setup.php

For ExpressionEngine 3, you should enumerate your fieldtypes in your `addon.setup.php` file. To start, create a new 'fieldtypes' array in you addon.setup.php file. For each fieldtype, list its shortname as a key and then an array of its name:

    'fieldtypes' => array(
      'rte' => array(
        'name' => 'Rich Text Editor'
      )
    )

### Define Compatibility

Changing from one field type to another can lead to unexpected results, as for example switching from a file field to a date field. On the other hand, many fieldtypes contain similar data, such as text.

If your fieldtypes stores a common datatype, you should list it in its compatibility field:

    'fieldtypes' => array(
      'rte' => array(
        'name' => 'Rich Text Editor',
        'compatibility' => 'text'
      )
    )

Compatibility can be any string values, the commonly used ones are listed in [this section](development/addon-setup-php-file.md#fieldtypes) of the addon.setup.php documentation.

### Update Settings Format

The format for the fieldtype settings pages has been changed to the more consistent [Shared Form View](development/shared-form-view.md) format. Please refer to the [Fieldtype Settings](development/fieldtypes/example.md#individual-settings) documentation for an example.

### Use the Validation Service in Settings

ExpressionEngine 3.0 comes with a new [Validation Service](development/services/validation.md). Your fieldtypes settings validation should return a result object from this service:

    function validate_settings($settings)
    {
      $validator = ee('Validation')->make(array(
          'size' => 'required|numeric'
      ));

      return $validator->validate($settings);
    }

## Module Changes

[TOC=3]

Most of the changes to modules in ExpressionEngine 3 will be in the control panel files. All parsing code should be backwards compatible.

A fictional Fortune Cookies module is used in the following examples.

### 3.0 Module Overview

The module changes in ExpressionEngine 3 are mostly related to the control panel redesign. Your parsing code should remain identical, which means you can focus just on updating the control panel.

#### New URL Logic

The Control Panel URLs for your module follow the pattern:

    addons/settings/package_name/method_name/arguments

For example, if we had a fortune cookie module with a method to list our cookies its URL might be:

    addons/settings/fortune_cookie/cookies

Like 2.x the routing is automatic; all public methods in your `mcp.package_name.php` are automatically routed. We will also pass any arguments to your method found in the url. For this URL:

    addons/settings/fortune_cookie/edit_cookie/3

We would need to have the following method signature:

    public function edit_cookie($id) {...}

### Control Panel File (`mcp.package_name.php`)

If your module does not have a control panel, you still need an blank mcp file in the format:

    <?php

    class Package_name_mcp
    {
        var $version = '1.0';

    }

#### Control Panel Output, Breadcrumbs, and Headings

There are two ways to output your control panels. You may either return an HTML string, or you may return an associative array.

If you return a string that data will be used in the "body" section of the Control Panel layout inside our Add-On Manager. The breadcrumb will default to `Add-On Manager / Your Add-On Name` and the heading will default to `Your Add-On Name Configuration`. In our fortune cookie module example we would have `Add-On Manager / Fortune Cookies` as the breadcrumb and `Fortune Cookie Configuration` as the heading.

If you return an associative array it must contain the key `body` and may contain the keys `breadcrumb`, and `heading`. The `body` key should contain an HTML string which will be used in the "body" section of the Control Panel layout inside our Add-On Manager. The `breadcrumb` key should contain an associative array of URLs as keys and strings for the bodies. The header value will be added as the final segment in the breadcrumb. The `heading` key should contain a string for use as the heading (i.e. `Fortune Cookie Management`).

If your add-on needs a sidebar use the [Sidebar Service](development/services/sidebar.md).

##### Example

    $url = ee('CP/URL', 'addons/settings/fortune_cookie')->compile();

    return array(
      'body'       => ee('View')->make('fortune_cookie:index')->render($vars),
      'breadcrumb' => array(
        $url => lang('fortune_cookie_management')
      ),
      'heading'  => lang('edit_fortune_cookie'),
    );

### Publish Tab File (`tab.package_name.php`)

We have made a few changes to the Publish Tab API. We have renamed the methods we call within the class, and a few have changes to their parameters:

- `publish_tabs()` has been renamed to `display()` and now returns an associative array using the `field_id` as the key.
- `validate_publish()` has been renamed to `validate()`. It is now passed two arguments (in order): a `ChannelEntry` instance and an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'All your hard work will soon pay off.'))`. The keys are derived from the data returned by `display()`.
- `publish_data_db()` has been renamed to `save()`. It is now passed two arguments (in order): a `ChannelEntry` instance and an associative array with field names as keys and form submission data as the value (i.e. `array('fortune' => 'Do not make extra work for yourself.'))`. The keys are derived from the data returned by `display()`.
- `publish_data_delete_db()` has been renamed to `delete()`. It is now passed an indexed array of Entry IDs that have been deleted.

A tab's `save()` method is called during a `ChannelEntry` entity's `afterSave` event. Likewise a tab's `delete()` method is called during a `ChannelEntry` entity's `beforeDelete` event.

### Display Tools

We have a few display tools available that are useful when creating your output.

#### The Table Service

Tables are the most common way to view and navigate data in the ExpressionEngine control panel. Since tables share a lot of common functionality, we've abstracted most of it out to a Table service to handle tasks such as displaying the table markup, and sorting and filtering tabular content:

    $table = ee('CP/Table', array('autosort' => TRUE, 'autosearch' => FALSE, 'limit' => 20));
    $table->setColumns(
      array(
        'tool_set',
        'status',
        'manage' => array(
          'type'  => Table::COL_TOOLBAR
        ),
        array(
          'type'  => Table::COL_CHECKBOX
        )
      )
    );

    $table->setData($data);

See [CP/Table Service](development/services/table.md) for full documentation.

#### The Pagination Service

Adding pagination to the control panel is a common task and we created a pagination service to assist. This service handles all the mathematical calculations. All you need is the number of items you are going to paginate and a URL object:

    $base_url = ee('CP/URL', 'publish/edit');
    $pagination = ee('CP/Pagination')->make($total_count)
      ->render($base_url);

See [CP/Pagination Service](development/services/pagination.md) for full documentation.

#### The CP/Alert Service

Alerts are for providing feedback on an action and calling attention to warnings or errors. We have created an Alert Service for creating alerts in your code. For example:

    ee('CP/Alert')->makeInline('fortune-cookie-form')
      ->asIssue()
      ->withTitle(lang('fortune_cookie_save_error'))
      ->addToBody(lang('fortune_cookie_save_error_desc'))
      ->now();

And:

    <?=ee('CP/Alert')->get('fortune-cookie-form')?>

See [CP/Alert Service](development/services/alert.md) for full documentation.

#### The Shared Settings Form

Forms are created by creating an array of field descriptions. This keeps the view code consistent and modular. Below is an example of a simple form with a text input and a checkbox:

    $vars['sections'] = array(
      array(
          array(
              'title' => 'tool_set_name',
              'desc' => 'tool_set_name_desc',
              'fields' => array(
                  'toolset_name' => array(
                      'type' => 'text',
                      'value' => $toolset_name,
                      'required' => TRUE
                  )
              )
          ),
          array(
              'title' => 'choose_tools',
              'desc' => 'choose_tools_desc',
              'fields' => array(
                  'tools' => array(
                      'type' => 'checkbox',
                      'choices' => $tools,
                      'value' => $toolset['tools'],
                      'wrap' => FALSE
                  )
              )
          )
      )
    );

And:

    <?php $this->embed('ee:_shared/form')?>

See [Shared Form View](development/shared-form-view.md) for full documentation.

#### Modals

Under 3.0 modals belong to a specific spot in the Control Panel's DOM, and that place isn't accessible from a module's view. To solve that we have created a modal service. There are two basic calls to use it within your view files, `ee('CP/Modal')->startModal($name);` and `ee('CP/Modal')->endModal();`. Everything between those two lines will be be stored in the modals block and output in the correct spot of the DOM.

    <?php ee('CP/Modal')->startModal($name); ?>
    <div class="modal-wrap modal-test">
      <div class="modal">
          <div class="col-group">
              <div class="col w-16">
                  <div class="box">
                      ...
                  </div>
              </div>
          </div>
      </div>
    </div>
    <?php ee('CP/Modal')->endModal(); ?>

See [CP/Modal Service](development/services/modal.md) for full documentation.

### PHP Related Guidelines

#### External Links

To protect the users control panel URL from ending up in web server referrer logs, use `Cp::masked_url` from the Control Panel Class:

    ee()->cp->masked_url('https://www.google.com');

Will result in:

    https://example.com?URL=https://www.google.com

#### Internal Links

Internal control panel links should be generated with the `ee('CP/URL')` helper function which generates control panel URLs based on parameters passed in.

For example, to link to the `publish` controller, pass it in as the first parameter to `ee('CP/URL')`:

    ee('CP/URL', 'publish');

To link to a particular method in a controller, add it to the parameter with a slash:

    ee('CP/URL', 'publish/method_name');

If the method accepts arguments, they can be passed in cleanly by adding them on the end separated by a slash:

    ee('CP/URL', 'publish/method_name/5');

If the link requires any other GET parameters, they can be passed in via an associative array in the second parameter:

    ee('CP/URL', 'publish/edit', array('filter_by_channel' => $channel_id));

See [CP/URL Service](development/services/url.md) for the full documentation.

#### Control Panel Constants

- `BASE` - Name of control panel file with the users session id
- `AMP` - Will render `&amp;`
- `AJAX_REQUEST` - Returns Boolean TRUE if a request was made via an Ajax Request
- `QUERY_MARKER` - Renders a query marker (`?`)
- `APPPATH` - Server path to the `system/ee/legacy` directory
- `PATH_ADDONS` - Server path to the first-party add-ons directory
- `PATH_THIRD` - Server path to the third-party add-ons directory
- `PATH_JQUERY` - Server path to jQuery files at `themes/ee/javascript/compressed/jquery`
