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

# The Add-On Setup File

[TOC]

## Overview

Starting with version 3.0 each add-on in ExpressionEngine must have an `addon.setup.php` file in its package directory. This file provides descriptive data about a specific add-on, such as author, name, and version. Below we walk through the format and available keys. However, most of the time, the CLI will take care of generating and updating this file as needed for you.


TIP:When using the CLI, your add-on setup file will automatically be created for you. See [Building An Add-On: Getting Started](development/addon-development-overview.md#getting-started) for how to generate the starter files for your add-on.

## Anatomy Of The Add-On Setup File

The file must return an associative array. For example:

    <?php

    return array(
      'author'      => 'Example, Inc',
      'author_url'  => 'https://example.com',
      'name'        => 'Hello World',
      'description' => 'Displays a friendly "Hello world!" message.',
      'version'     => '2.0.0',
      'namespace'   => 'Example\HelloWorld'
    );

## Available Keys

[TOC=3]

### `author`

    'author' => 'Example, Inc'

This is the name of the company or individual responsible for the add-on. This value is used in the Add-On Manager for attribution as well as filtering. This a **required** key.

### `author_url`

    'author_url' => 'https://example.com'

This is the URL associated with the add-on. This value is used in manual display for add-ons, as such this is a **required** key for all add-ons.

### `name`

    'name' => 'Hello World'

This is the name of the add-on. This value is used in the Add-On Manager as the display name for the add-on. This is a **required** key.

### `description`

    'description' => 'Displays a friendly "Hello world!" message.'

This is a brief description of the add-on. This value is used in the manual display for add-ons, as such this is a **required** key for all add-ons.

### `version`

    'version' => '2.0.0'

This is the version number of the add-on. We recommend using [Semantic Versioning](https://semver.org). This is a **required** key.

### `namespace`

    'namespace' => 'Example\HelloWorld'

This is the [PHP namespace](https://php.net/namespace) for your add-on. This is a **required** key.

This key associates your add-on directory with a namespace. ExpressionEngine will look inside your add-on directory any time it encounters a class name that begins with this namespace.

### `settings_exist`

    'settings_exist' => TRUE

This indicates whether or not the add-on exposes settings to the Add-On Manager. The default is `FALSE`.

### `docs_url`

    'docs_url' => 'https://example.com/hello_world/docs'

This is an external URL for additional documentation.

### `plugin.typography`

    'plugin.typography' => TRUE

This indicates whether or not the add-on provides a plugin that should be made available as a text formatter to some Channel Fields. The default is `FALSE`.

### `fieldtypes`

    'fieldtypes' => array(
      'hello_world' => array(
        'name' => 'Hello World',
        'compatibility' => 'text'
      )
    )

This is an associative array of the fieldtypes the add-on contains where the key corresponds to the fieldtype, `ft.hello_world.php` in the above example. Each fieldtype defines its name, which is used when creating or editing Channel Fields.

As of 3.1.0 fieldtypes can specify their compatibility. When editing a Channel Field the fieldtype options will be restricted to those fieldtypes that have the same compatibility. ExpressionEngine's native fieldtypes have the following compatibilities:

| Compatibility | Fieldtypes                                                                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date          | [Date](fieldtypes/date.md)                                                                                                                                                         |
| file          | [File](fieldtypes/file.md)                                                                                                                                                         |
| grid          | [Grid](fieldtypes/grid.md)                                                                                                                                                         |
| list          | [Checkboxes, Radio Buttons, Select, Multiselect](fieldtypes/select.md)                                                                                                             |
| relationship  | [Relationships](https://docs.expressionengine.com/latest/fieldtypes/relationships.html)                                                                                            |
| text          | [Email Address](fieldtypes/email-address.md), [Rich Text Editor](fieldtypes/rte.md), [Text Input](fieldtypes/text.md), [Textarea](fieldtypes/textarea.md),[URL](fieldtypes/url.md) |

### `modifiers`

    'modifiers' => array(
      'modifier_name',
      'another_modifier_name'
    )

This property lists the [variable modifiers](development/modifiers.md) that the add-on provides.

### `services`

    'services' => array(
      'MyService' => function($addon)
      {
        $dependency = new SupportingClass();
        return new ServiceClass(dependency);
      }
    )

This is an associative array of services to register on the [Dependency Injection Container](development/architecture.md#dependencies). This is typically used to help you place class construction code in a single place that can be easily called throughout your app. If your service code is written to be unit-testable, you may have several classes you need to insert through dependency injection. Instead of having to copy and paste boilerplate code to set up your service throughout your add-on, you can just register it in the Dependency Injection Container and call it from your add-on like this:

    ee('example:MyService');

Where `example` is the short package name of your add-on.

NOTE: **Note:** You may need to include your service code's namespace in the addon.setup.php file. Assuming it's stored in a Service directory in your addon, it may look like: `use Example\HelloWorld\Service\ServiceClass;`

### `models`

    'models' => array(
      'Name' => 'Model\ClassName'
    )

This is an associate array of models exposed by this add-on. The class name should be relative to the add-on namespace. Typically add-ons will be in a `Model` directory in the add-on's folder.

### `consent.requests`

    'consent.requests' => [
      'do_stuff' => [
        'title' => 'Do Stuff',
        'request' => 'We will *do stuff* with your data, okay?',
        'request_format' => 'markdown',
      ],
      'do_some_other_stuff' => [
        'title' => 'Do Some Other Stuff',
        'request' => 'We will *do some other stuff* with your data, okay?',
        'request_format' => 'markdown',
        'double_opt_in' => TRUE,
      ],
    ],

This will register your consent requests with your add-on namespace, and you can now grant and withdraw consent using your add-on's prefix (e.g. `my_addon`) and a colon(`:`):

    ee('Consent')->grant('my_addon:do_stuff');

NOTE: **Note:** Consent requests in your `addon.setup.php` file will automatically be created when your add-on is installed. If you modify your `consent.requests` in your setup file, any **new** consent requests that do not already exist will automatically be created when the user updates your add-on. So make sure you increment your app version if you add new consent requests.

| Key            | Definition                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title          | (required) The display name for the consent request                                                                                                                                                                                                  |
| request        | (required) The explanatory text for the consent request. After installation, a site admin can modify this text as necessary to fit their needs, but you should provide a clear and direct explanation of what consenting to this request will allow. |
| request_format | (optional) Any valid format that will be used to parse your request text. (e.g. br, markdown, none, xhtml)                                                                                                                                           |
| double_opt_in  | (optional) Boolean value, whether or not this consent requests requires a double opt-in (e.g. checking a checkbox and clicking a verification link sent by email)                                                                                    |

NOTE: **Note:** The short name will also be used by a site builder in `{exp:consent}` tag parameters.

NOTE: **Note:** `double_opt_in` will soon be handled automatically by this service. But if you choose to use this now (v4.3.0), you will need to build your own mechanism for the second verification before granting consent.

### `cookies`

    'cookies.necessary' => [
      'unique_id',
    ],
    'cookies.functionality' => [
      'font_size',
    ],
    'cookies.performance' => [
      'analytics_id',
    ],
    'cookies.targeting' => [
      'advertising_tracker',
    ],

If your add-on sets any custom cookies, you must register the name of the cookie here within the array(s) of the appropriate type. This way if the site requires consent for cookies, the user's preferences can be respected. If you set a cookie that is not registered with your add-on, it will still set, but a warning will be generated in the Developer Log detailing the non-compliant cookie. The ExpressionEngine cookie prefix will be appended to cookie names automatically and should not be included in the registered name.

| Type                  | Purpose                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| cookies.necessary     | Required to function properly. Does not contain personally identifiable information.                                                                               |
| cookies.functionality | Enhances functionality, such as remembering a user's preferences or settings.                                                                                      |
| cookies.performance   | Analytics, statistics, etc. Data should be aggregated and anonymous.                                                                                               |
| cookies.targeting     | Typically the only cookie type that can contain personally identifiable information. Marketing cookies that help establish profiles for ad delivery, for instance. |

### `cookie_settings`

    'cookie_settings' => [
        'forum_theme' => [
            'description' => 'lang:forum_theme_desc'
            'lifetime_changeable' => false,
        ]
    ]

NOTE: **Note:** Cookie settings are only applicable for users running ExpressionEngine Pro.

If your add-on sets any custom cookies, you can provide default settings for each those.

In the above example, `forum_theme` is the cookie name, `description` sets default description for cookie to string referenced by `forum_theme_desc` key in add-on's language file and `lifetime_changeable` indicates that cookie's lifetime cannot be changed by site administrator.

| Type                  | Purpose                |
| --------------------- | ---------------------- |
| description           | Default cookie description. String or reference to key in language file (prefixed with `lang:`)                                |
| lifetime_changeable   | Boolean to indicate whether cookie lifetime can be changes by site admin                                   |

### `aliases`

    'aliases' => [
      'ExpressionEngine\Model\Channel\ChannelEntry',
    ],

The above will set up `EllisLab\ExpressionEngine\Model\Channel\ChannelEntry` as a class alias for `ExpressionEngine\Model\Channel\ChannelEntry`. This might be useful for add-ons that need to work both in ExpressionEngine v5 and ExpressionEngine v6, and that also use type hinting for ExpressionEngine classes. If you do not type hint ExpressionEngine classes or your add-on is just for ExpressionEngine v6 then this is not needed. Otherwise, the `aliases` key needs a full list of classes you need for type hinting.

It is also possible to set up class aliases to an arbitrary FQCN. The example below will set up `AnotherVendor\Services\ClassName` as a class alias for `MyVendor\Services\ClassName`.

    'aliases' => [
      'MyVendor\Services\ClassName' => 'AnotherVendor\Services\ClassName',
    ],

### `requires`

    'requires'       => [
        'php'   => '8.0',
        'ee'    => '7.2.0'
    ],

If your add-on requires a particular version of ExpressionEngine, or a minimum version of PHP, adding `requires` to your addon.setup.php will check for minimum versions of the specified framework, and will stop installation if the minimum requirement is not meant.

## Accessing Add-On Information From Another Add-on
See the [Addon Service](development/services/addon.md) for API access.