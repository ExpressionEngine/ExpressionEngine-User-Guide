---
lang: ee
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# v6 Add-on Migration

ExpressionEngine 6 offers dractic codebase update. While we have aimed to make transition as smooth as possible, some add-ons will need to get their code updated. 

[TOC]

## What's changed?

- ExpressionEngine now requires at least PHP 5.6.
- We took `EllisLab` out of folder structure and also out of namespace.
- Member groups has been replaced with Roles. A member can have multiple Roles.
- With the introduction of Jump Menu, the add-ons can provide their own Jump Menu items.
- System of storing access permission for upload directories and templates has been reversed. Previously, we saved in database info on member groups that are forbidden to access given upload directories or templates. Starting with v6, we store info on member roles that are allowed to access given objects.
- Control panel layout changes. Certain HTML selectors have been replaced with the new ones.
- Columns in Entry Manager are now customizable. Fieldtypes can provide their data to be displayed in the column.
- Add-ons can have icons.


## Required Changes

### Replace calls to `MemberGroup` model with `Role` model

ExpressionEngine 6 intrduces the concept of Roles for members. Member can be part of multiple groups, one of them being primary role. On sites that have been upgraded from previous version of ExpressionEngine member's group will become their primary role.

`MemberGroup` model has been completely taken out of the system, therefore if you have any direct calls to it, those needs to be replaced with updated calls to `Role` model.

    ee()->session->getMember()->PrimaryRole->name;
    // name of member's primary role
    ee('Model')->get('Role')->all()->getDictionary('role_id', 'name');
    // get all roles present in the system

## Other Changes

### Displaying custom fields in entry manager

ExpressionEngine 6 support displaying custom field data in Entry Manager table. Please see [Displaying field data in Entry Manager](development/fieldtypes.md#displaying-field-data-in-entry-manager) for more details.

### Base classes for addon installing

We are still supporting the current way of installing addons, we’ve also made it easier. Please see [Add-on Installer](development/addon-installer.md) for more details.


### Namespace change

In v6, we got rid of `EllisLab` folder in files structure, so also the namespace have been updated.

It is recommended to use `ExpressionEngine` instead of `EllisLab\ExpressionEngine` in `use` and `namespace` definitions.

However if you need your add-on to be compatible with older versions of EE, you may as well keep using `EllisLab\ExpressionEngine` namespace - the class names would still be loaded properly

### HTML changes in Control Panel

The HTML layout for v6 has been changed, and some element selectors are now different. If you have custom CSS or Javascript and need to target v6 specifically, you can perform check of `data-ee-version` attribute on `<body>`.

### Add-on icons

Add-ons can now have icons that are displayed on Add-ons page in control panel and also inside Fluid field (for fieldtypes). To add an icon, place `icon.svg` or `icon.png` file inside add-on's folder in `system/user/addons/<add-on-name>`

## What's been removed?

- `MemberGroup` model has been completely removed.
- Deprecated `ee()->member_model` and `ee()->member_group_model`
- Deprecated `getForegroundColor()` method in `Status` controller
- Usage of PHP constant `SELF` deprecated, use `EESELF` instead
