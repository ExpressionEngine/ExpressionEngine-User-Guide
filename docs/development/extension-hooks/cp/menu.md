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

# Control Panel Menu Extension Hooks

## `cp_custom_menu($menu)`

Add menu items to the secondary navigation area specifically reserved for custom links.

How it's called:

    ee()->extensions->call('cp_custom_menu', $menu);

The `$menu` object is of type `ExpressionEngine\Service\CustomMenu\Menu` and implements the following API:

    // call addItem to create a link in this menu
    $menu->addItem('Title', ee('CP/URL')->make('addons/settings/myaddon'));

    // call addSubmenu to create a dropdown menu
    // this returns a submenu object
    $sub = $menu->addSubmenu('Title');

The submenu object is of type `ExpressionEngine\Service\CustomMenu\Submenu` and implements the following API:

    // call addItem to create a link in this menu
    $sub->addItem('Title', ee('CP/URL')->make('addons/settings/myaddon'));

    // call withAddLink to add a new/create link to the menu
    $sub->withAddLink('Title', ee('CP/URL')->make('addons/settings/myaddon/create'));

    // call withFilter to add a create fuzzy filter searchbox inside the menu
    // the first and only parameter is the input's placeholder text
    $sub->withFilter('find entries ...');
