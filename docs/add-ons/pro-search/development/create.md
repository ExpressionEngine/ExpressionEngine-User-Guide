<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Creating your own Pro Search Filter

Creating your own filter is easy. Pro Search boasts a simple custom filter API that you can use to create custom filters for your searching needs. These filters can be stand-alone, or you can add them to your own add-ons. Pro Search uses this API itself for its [native filters](/add-ons/pro-search/filters.md).

All filters are executed one after another and each filter passes its search results — consisting of Entry IDs — on to the next. As soon as a filter ends up with an empty set, No Results is triggered, skipping all next filters.

## File structure

Filters live in a `filters` folder inside your add-on package. So, say you’ve created a filter called _foo_, Pro Search will be looking for `/my_addon/filters/foo/lsf.foo.php`. That name should be unique, so be aware of already existing filters. You can have multiple custom filters in your `filters` folder.

## Naming convention

Inside the `lsf.foo.php` file should be a class called `Pro_search_filter_foo` which extends `Pro_search_filter`:

    class Pro_search_filter_foo extends Pro_search_filter {}