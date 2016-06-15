Control Panel Menu Extension Hooks
==================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

cp_custom_menu
--------------

.. function:: cp_custom_menu($menu)

  Add menu items to the secondary navigation area specifically reserved for custom links.

  How it's called::

    ee()->extensions->call('cp_custom_menu', $menu);

  The ``$menu`` object is of type ``EllisLab\ExpressionEngine\Service\CustomMenu\Menu`` and implements the following API::

    // call addItem to create a link in this menu
    $menu->addItem('Title', ee('CP/URL')->make('/myaddon'));

    // call addSubmenu to create a dropdown menu
    // this returns a submenu object
    $sub = $menu->addSubmenu('Title');

  The submenu object is of type ``EllisLab\ExpressionEngine\Service\CustomMenu\Submenu`` and implements the following API::

    // call addItem to create a link in this menu
    $sub->addItem('Title', ee('CP/URL')->make('/myaddon'));

    // call withAddLink to add a new/create link to the menu
    $sub->withAddLink('Title', ee('CP/URL')->make('/myaddon/create'));

    // call withFilter to add a create fuzzy filter searchbox inside the menu
    // the first and only parameter is the input's placeholder text
    $sub->withFilter('find entries ...');

  .. versionadded:: 3.4.0
