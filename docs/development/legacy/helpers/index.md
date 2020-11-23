---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Helpers

[TOC]

A helper file is simply a collection of functions in a particular category. Helpers are not written in an Object Oriented format. They are simple, procedural functions. Each helper function performs one specific task, with no dependencies on other functions or classes. Helpers are stored in `system/ee/legacy/helpers` or in your addon's `helpers` directory.

## Loading a Helper

Loading a helper file is quite simple using the following method:

    ee()->load->helper('name');

Where `name` is the file name of the helper, without the .php file extension or the "helper" part. For example, to load the **URL Helper** file, which is named `url_helper.php`, you would do this:

    ee()->load->helper('url');

### Loading Multiple Helpers

If you need to load more than one helper you can specify them in an array, like this:

    ee()->load->helper(array('helper1', 'helper2', 'helper3'));

## Using a Helper

Once you've loaded the Helper File containing the function you intend to use, you'll call it the way you would a standard PHP function. For example, to create a link using the `anchor()` function in one of your view files you would do this:

    <?= anchor('blog/comments', 'Click Here'); ?>

## Creating a Helper

Creating a helper is pretty simple. Create a `helpers/` directory within your add-on's directory and create a file the ends in `_helper.php`. If you wanted to create a time helper, you might name the file `name_helper.php`. Within that file, simply add functions ensuring that there's no Class structure containing them. It's considered best practice to check to see if the function already exists, by using `function_exists()`:

    if ( ! function_exists('element'))
    {
        function element($item, $array, $default = FALSE)
        {
            if ( ! isset($array[$item]) OR $array[$item] == "")
            {
                return $default;
            }

            return $array[$item];
        }
    }
