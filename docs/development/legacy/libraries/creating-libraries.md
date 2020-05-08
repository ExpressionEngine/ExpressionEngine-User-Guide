---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Creating Libraries

[TOC]

When we use the term "Libraries" we are normally referring to the classes that are located in the [Libraries](development/legacy/libraries/index.md) directory. In this case, however, we will instead describe how you can create your own libraries within your `system/ee/user/addons/addon_name/libraries` directory in order to maintain separation between your local resources and the global framework resources.

## Storage

Your library classes should be placed within your `system/ee/user/addons/addon_name/libraries` directory, as this is where ExpressionEngine will look for them.

## Naming Conventions

- File names must be capitalized. For example: `Myclass.php`
- Class declarations must be capitalized. For example: `class Myclass`
- Class names and file names **must** match.

## The Class File

Classes should have this basic prototype:

    <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Someclass {

        public function some_method()
        {
        }
    }

    // EOF

## Using Your Class

Within your code initialize your library using:

    ee()->load->library('someclass');

Where `someclass` is the file name, without the `.php` file extension. You can submit the file name capitalized or lower case. Once loaded you'll access your class using the lower case name:

    ee()->someclass->some_method(); // Object instances will always be lower case

## Passing Parameters When Initializing Your Class

In the library loading method you can dynamically pass data as an array via the second parameter and it will be passed to your class constructor:

    $params = array('type' => 'large', 'color' => 'red');
    ee()->load->library('someclass', $params);

If you use this feature you must set up your class constructor to expect data:

    <?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

    class Someclass {

        public function __construct($params)
        {
            // Do something with $params
        }
    }
