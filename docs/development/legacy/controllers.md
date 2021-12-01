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

# Controllers

[TOC]

Controllers are the heart of your application, as they determine how HTTP requests should be handled.

## What is a Controller?

**A Controller is simply a class file that is named in a way that can be associated with a URI.** ExpressionEngine uses Controllers for all of its Control Panel pages. An `mcp` file within a module is a controller as well and typically what you'll be dealing with.

Consider this URI:

    example.com/system/index.php?/cp/addons/settings/my_addon

In the above example, ExpressionEngine would attempt to find a controller named `mcp.my_addon.php` within the `system/ee/user/addons/my_addon/` directory and load it.

## Let's try it

First, ensure that your add-on has `settings_exist` set to true in its [addon.setup.php file](development/addon-setup-php-file.md). Then create a simple module control panel so you can see it in action. Using your text editor, create a file called `mcp.my_addon.php`, and put the following code in it:

    <?php

    class My_addon_mcp {

        public function index()
        {
            return 'Hello World!';
        }
    }

Then save the file to your `system/ee/user/addons/my_addon/` directory.

NOTE: **Important:** The file must be called `mcp.my_addon.php` and be placed in the `system/ee/user/addons/my_addon/` directory. You can change `my_addon` to whatever you want, but both the directory and file must match.

Now visit the Add-on Manager and click on the cog next to your add-on's name. If you did it right, you should see:

> Hello World!

NOTE: **Important:** Class names must start with an uppercase letter.

This is valid:

    class My_addon_mcp {

This is **not** valid:

    class my_addon_rte {

## Methods

In the above example the method name is `index()`. The "index" method is always loaded by default if there is no segment after your add-on's name. Another way to show your "Hello World" message would be this:

    example.com/system/index.php?/cp/addons/settings/my_addon/index

**The second segment of the URI determines which method in the controller gets called.**

Let's try it. Add a new method to your controller:

    <?php
    class My_addon_mcp {

        public function index()
        {
            return 'Hello World!';
        }

        public function comments()
        {
            return 'Look at this!';
        }
    }

Now load the following URL to see the comment method:

    example.com/system/index.php?/cp/addons/settings/my_addon/comments

You should see your new message.

## Passing URI Segments to your methods

You can pass additional URI segments to your methods when [creating URLs](development/services/url.md) like so:

    example.com/system/index.php?cp/addons/settings/my_addon/comments/asc/10

Then back in your controller:

    public function comments($direction = 'desc', $limit = '25')
    {
        ...

If you want to use this functionality for the `index()` method, be sure to specify `index` in your URLs:

    example.com/system/index.php?cp/addons/settings/my_addon/index/asc/10

## Remapping Method Calls

As noted above, the second segment of the URI typically determines which method in the controller gets called. ExpressionEngine permits you to override this behavior through the use of the `_remap()` method:

    public function _remap()
    {
        // Some code here...
    }

NOTE: **Important:** If your controller contains a method named `_remap()`, it will **always** get called regardless of what your URI contains. It overrides the normal behavior in which the URI determines which method is called, allowing you to define your own method routing rules.

The overridden method call (typically the second segment of the URI) will be passed as a parameter to the `_remap()` method:

    public function _remap($method)
    {
        if ($method === 'some_method')
        {
            return $this->$method();
        }
        else
        {
            returtn $this->default_method();
        }
    }

Any extra segments after the method name are passed into `_remap()` as an optional second parameter. This array can be used in combination with PHP's [call_user_func_array()](https://php.net/call_user_func_array) to emulate ExpressionEngine's default behavior.

Example:

    public function _remap($method, $params = array())
    {
        $method = 'process_'.$method;
        if (method_exists($this, $method))
        {
            return call_user_func_array(array($this, $method), $params);
        }
        show_404();
    }

## Private methods

In some cases you may want certain methods hidden from public access. In order to achieve this, simply declare the method as being private or protected and it will not be served via a URL request. For example, if you were to have a method like this:

    private function utility()
    {
        // some code
    }

Trying to access it via the URL, like this, will not work:

    example.com/system/index.php?/cp/addons/settings/my_addon/utility
