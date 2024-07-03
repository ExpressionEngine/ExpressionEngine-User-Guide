<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Menu Manager

**Control Panel Location: `Settings > Menu Manager`**

The menu manager allows you to create customized third tier menus for display in the control panel.

You may create multiple menu sets and assign them to show for specific member roles. A member role may only be assigned a single menu set.

## Create/Edit Menu Sets

**Control Panel Location: `Settings > Menu Sets`**

This section of the Control Panel allows you to define your menu sets and assign them to member roles. Existing menus can be duplicated by choosing "Clone to New Menu Set" from an existing menu's "Save" dropdown.

### Fields

#### Name

The name of the menu set.

#### Member Roles

The member role(s) the menu set is assigned to. Only members in the specified groups will see this menu.

NOTE: **Note:** Be careful not to create links to pages the assigned member role does not have access to or they will end up on an error page with a denied access message.

#### Menu Items

View, edit, set the sort order and delete all existing menu items in this set.

#### Add Menu Items

Clicking the **Add Menu Item** button or the edit link next to an existing menu item will bring up the menu item's `modal`.

## Create/Edit Menu Item Modal

**Control Panel Location: `Settings > Menu Sets`**

This section of the Control Panel allows you to define your menu sets and assign them to member roles.

### Fields

You will first need to specify the type of menu item you are creating.

### Add-On

ExpressionEngine add-ons may include their own pre-set menu items. This is often the case when it's useful to have ready access to multiple sections of the add-on. If any installed add-ons include a pre-set menu section, it will be selectable under the 'Add-on' menu type.

### Single Link

This option allows you to add a single link, either to an external URL or to a page in the control panel.

#### Name

The text to display in the menu.

#### URL

The URL for the menu item. This may be an external or an internal URL.

### Dropdown

With complex menus, you may want to break your navigation up into nested subsections. The dropdown menu type allows you to do this.

#### Name

The top level name for this section to display in the menu.

#### Submenu

The name and url for each sub-menu item. This list is drag and drop sortable, and existing items may be deleted by clicking the trash icon.
