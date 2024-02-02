<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Categories

**Control Panel Location: `Content > Categories`**

[TOC]

This section of the Control Panel is for the management of channel categories. It is where categories and category groups are created, deleted, and preferences are set. The main Categories screen shows a list of all current category groups in the left navigation and a sortable table of the categories in the currently selected category group.

Category groups are _collections_ of categories that can be assigned to channels. You can create a separate group for each channel or use the same group on multiple channels.

![Category Manager Control Panel Page](_images/cp-category-manager.png)

## Create/Edit Category

**Control Panel Location: `Content > Categories > New/Edit Category`**

Categories have the following settings:

- **Name** -- The name of the new category. The name may include spaces.
- **URL title** -- The human readable category name used in the URL when using [Category URL Titles in Links](control-panel/settings/content-design.md).
- **Description** -- A text description of your category.
- **Images** -- This field is designed to allow you to associate an image with the category.
- **Parent category** -- This drop-down list allows you to create a hierarchical relationship between categories. The list dynamically contains all existing categories for this category group. Selecting a parent category means that the new category will be a "child" of the parent in the hierarchy. The "None" option is available and will make the new category a "top level" category with no parent.
- **Custom Fields** -- Any [custom category fields](#fields-tab) that exist for this category group will be included in the form.

The categories can be saved by clicking "Save" button or pressing `Ctrl`+`s` (`cmd`+`s`) on keyboard. Upon saving, the category editing page remains open so you can make other changes.

Extra saving options are also available from the dropdown menu under "Save": 
- "Save & New" - opens a new category form after saving
- "Save & Close" - redirects to categories list after saving
- "Clone to New Category" - saves the changes into a new category. The current category is used as a "template" and remains unchanged.

Note that only members with appropriate permissions are able to perform actions on categories. The permissions are being set per Role globally as well as per each Category Group.

## Create/Edit Category Groups

**Control Panel Location: `Content > Categories > New/Edit Category Group`**

Access to this sections requires "Can edit category groups" permission to be set for the users member Role.

The category group form is broken out into 3 tabs:

### Details tab

**Control Panel Location: `Content > Categories > New/Edit Category Group > Details`**

The Details tab holds fields for the category group name (used only for display in the control panel), the HTML formatting options, and whether the category group is available in Files, Channels or both.

### Permissions tab

**Control Panel Location: `Content > Categories > New/Edit Category Group > Permissions`**

The Permissions tab controls which member roles have permission to edit or delete categories. The member role must have permission to edit categories in the [member role settings](control-panel/member-manager.md#member-roles) in order to be granted permission to edit a particular category group.

### Fields tab

**Control Panel Location: `Content > Categories > New/Edit Category Group > Fields`**

The Fields tab allow you to manage all custom fields for the category group, including deleting and creating new fields.

ExpressionEngine includes the following types of fields for use in your Category fields:

1. **Text Input**: This is a single input line for text. It is the type of field you might use for a title, name, or other short information.
2. **Textarea**: This is a standard text entry box with multiple lines. This is often used for the body text of entries.
3. **Select Dropdown**: This creates a standard HTML &lt;select&gt; drop-down list. You can define the contents of the list manually or pre-populate it from another field.
