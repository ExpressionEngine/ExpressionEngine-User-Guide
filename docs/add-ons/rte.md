<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Rich Text Editor

[TOC]

ExpressionEngine's built-in Rich Text Editor (RTE) is built upon [CKEditor 5](https://ckeditor.com/ckeditor-5/) and is a fieldtype that can be used for entry editing in the Control Panel as well as frontend Channel Forms.

NOTE: **Note:** If you're looking for how to use RTE fields in your channel entries loops, you should look at [the RTE field variable usage documentation](fieldtypes/rte.md) in the channel fields documentation.

**Control Panel Location:** `Developer --> Add-Ons --> Rich Text Editor`

## Tool Sets

Tool Sets are essentially pre-created configurations that can be used by particular RTE fields. Tool sets includes settings for upload directory, enabled toolbar elements, and initial field height.

Initially RTE installs 2 tool sets:
- **Basic:** has buttons for bold, italic, underline, link, and ordered/unordered lists
- **Full:** offers full set of editor features

### Creating a Tool Set

- Click the **Create New** button and the tool set creation form will appear.
- Enter a tool set name.
- Select the tools you wish to have in your new tool set.
- Click **Save Tool Set** to save your changes.

### Editing a Tool Set

- Click a tool set's name or pencil icon to open the tool set Editor.
- Modify the tool set's name, if desired.
- Select the tools you wish to have in this tool set.
- Click **Save Tool Set** to save your changes.

### Cloning a Tool Set

- Click a tool set's clone icon to create copy of tool set and open it for editing
- Modify the tool set's name.
- Select the tools you wish to have in this tool set.
- Click **Save Tool Set** to save your changes.


### Deleting a Tool Set

To delete a tool set, check the tool set's checkbox in the tool set table listing. Once one or more tool sets are selected, the bulk action control will appear below the table where you can perform bulk actions on the tool sets. Click the drop down to choose delete and then click Submit.

### Toolbar elements

The following are the buttons that can be enabled in tool set to manipulate the data within an RTE field.

- Bold
- Italic
- Strikethrough
- Underline
- Subscript
- Superscript
- Code
- Block quote
- Heading
- Remove formatting
- Undo
- Redo
- Numbered list
- Bulleted list
- Decrease indent
- Increase indent
- Link
- Image
- Table
- Media
- Align left
- Align right
- Align center
- Justify
- Horizontal line
- Special characters
- "Read More" separator
- Font color
- Font background

## RTE Configuration

- **Default RTE tool set** - select the tool set that will be selected by default when creating a field.
- **File Browser** - select file browser that will be used when browsing for images and files from RTE fields. ExpressionEngine's FilePicker is used by default, third-party add-ons can provide their own filepickers

NOTE: **Note:** If using the [Multiple Site Manager](msm/overview.md), this preference is per-site.

