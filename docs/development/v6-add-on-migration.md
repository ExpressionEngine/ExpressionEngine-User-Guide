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

ExpressionEngine 6 offers a rather large codebase update. While we have aimed to make the transition as smooth as possible, some add-ons will need to get their code updated. 

[TOC]

## What's changed?

- `EllisLab` has been removed from the file structure and namespace.
- Member groups have been replaced with Roles. Remember that a member can have multiple Roles.
- With the introduction of the [Jump Menu](development/jump-menu.md), add-ons can provide their own Jump Menu items.
- The system by which permissions were stored for upload directories and templates has been reversed. Previously, we saved information in the database on member groups that are **forbidden** to access given upload directories or templates. Starting with v6, we store info on member roles that are **allowed** to access given objects.
- Control panel layout changes. Certain HTML selectors have been replaced with the new ones.
- Columns in the Entry Manager are now customizable. Fieldtypes can provide their data to be displayed in the column.
- Add-ons can have icons.


## Required Changes

### Replace calls to `MemberGroup` model with `Role` model

ExpressionEngine 6 introduces the concept of Roles for members. Members are now assigned to one or more roles, one of them being primary role. On sites that have been upgraded from a previous version of ExpressionEngine a member's group will become their primary role.

The `MemberGroup` model has been completely removed. Therefore, if you have any direct calls to `MemberGroup`, those needs to be replaced with `Role`.

    ee()->session->getMember()->PrimaryRole->name;
    // name of member's primary role
    ee('Model')->get('Role')->all()->getDictionary('role_id', 'name');
    // get all roles present in the system

## Other Changes

### Displaying custom fields in entry manager

ExpressionEngine 6 supports displaying custom field data in the Entry Manager table. Please see [Displaying field data in Entry Manager](development/fieldtypes/enhanced.md#displaying-field-data-in-entry-manager) for more details.

### Base classes for add-on installation

While the legacy methods for installing modules and extensions are still supported, we’ve also made it easier by using the new [Add-on Installer](development/modernizing-existing-add-ons.md).


### Namespace change

In v6, `EllisLab` has been removed from the file structure and namespace.

It is recommended to use `ExpressionEngine` instead of `EllisLab\ExpressionEngine` in `use` and `namespace` definitions.

However, if you need your add-on to be compatible with older versions of EE, you may as well keep using `EllisLab\ExpressionEngine` namespace - the class names would still be loaded properly

### HTML changes in the Control Panel

The HTML layout for v6 has been changed, and some element selectors are now different. If you have custom CSS or Javascript and need to target v6 specifically, you can perform check of `data-ee-version` attribute on `<body>`.

### Add-on icons

Add-ons can now have icons that are displayed on the Add-ons page in the Control Panel and also inside Fluid field (for fieldtypes). To add an icon, place `icon.svg` or `icon.png` file inside add-on's folder in `system/user/addons/<add-on-name>`

## What's been removed?

- `MemberGroup` model has been completely removed.
- Deprecated `ee()->member_model` and `ee()->member_group_model`
- Deprecated `getForegroundColor()` method in `Status` controller
- Usage of PHP constant `SELF` deprecated, use `EESELF` instead
