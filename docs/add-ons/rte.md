<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Rich Text Editor

[TOC]

ExpressionEngine's built-in Rich Text Editor (RTE) is a fieldtype that can be used for entry editing in the Control Panel as well as frontend Channel Forms. It is offering [CKEditor 5](https://ckeditor.com/ckeditor-5/) and [Redactor](https://imperavi.com/redactor/) as editing engine.

NOTE: **Note:** If you're looking for how to use RTE fields in your channel entries loops, you should look at [the RTE field variable usage documentation](fieldtypes/rte.md) in the channel fields documentation.

**Control Panel Location:** `Developer --> Add-Ons --> Rich Text Editor`

## Tool Sets

Tool Sets are essentially pre-created configurations that can be used by particular RTE fields. Tool sets includes settings for upload directory, enabled toolbar elements, and initial field height.

Initially RTE installs 4 tool sets:
- **CKEditor Basic:** is based on CKEditor and  has buttons for bold, italic, underline, link, and ordered/unordered lists
- **CKEditor Full:** offers full set of CKEditor features
- **Redactor Basic:** is based on Redactor and  has buttons for bold, italic, underline, link, and ordered/unordered lists
- **Redactor Full:** offers full set of Redactor features

### Creating a Tool Set

- Click the **Create New** button and the tool set creation form will appear.
- Enter a tool set name.
- Select tool set type (CKEditor or Redactor)
- Select the toolbar buttons and plugins you wish to have in your new tool set.
- Click **Save Tool Set** to save your changes.

### Editing a Tool Set

- Click a tool set's name or pencil icon to open the tool set Editor.
- Modify the tool set's name, if desired.
- Change the tool set type, if desired.
- Select the tools you wish to have in this tool set.
- Click **Save Tool Set** to save your changes.

[TOC=3]

### Toolbar elements

#### Editor Type

Rich Text Editor comes with [CKEditor](https://ckeditor.com/) v5 and [Redactor](https://imperavi.com/redactor/) v3 support. Both are great, pick the one that fits your needs best.

#### Upload Directory

The file management features in RTE field can be allowed to access all upload directories (default) or limited to certain one.

#### Text direction

Choose between "Left to right" and "Right to left"

#### Tool Set Buttons

The following are the buttons that can be enabled in tool set to manipulate the data within an RTE field.

- HTML (Redactor only)
- Bold
- Italic
- Strikethrough / Deleted
- Underline
- Subscript
- Superscript
- Block quote
- Code
- Heading / Format
- Remove formatting (CKEditor only)
- Style (Redactor only)
- Properties (Redactor only)
- Undo
- Redo
- Numbered list
- Bulleted list
- Decrease indent
- Increase indent
- Link
- Image / File Browser
- Table
- Media / Video
- Embed HTML / Widget
- Align (left / right / center)
- Justify
- Horizontal line
- Special characters
- "Read More" separator
- Font color / background
- Fullscreen (Redactor only)

#### Custom Stylesheet
CSS template with styles to be applied to fields using this tool set. All styles will be automatically prefixed with toolset class, which means that the template should hold rather generic styles for the elements.

#### Minimal height

The minimal height for the field in pixels

#### Maximal height

The maximum height for the field in pixels (Redactor only).

#### Limit characters

Limits the number of character that can be entered into the field (Redactor only).

#### Advanced configuration

Toggling this button hides the visual constructor for toolbar and enables editing the configuration directly in JSON format.

#### Configuration JSON

Allows overriding visually constructed tool set with [JSON](https://www.json.org/) object. Please be careful with using this feature and check your work. Remember that all properties need to be quoted.

Initially the field is loaded with the saved configuration of tool set being edited.

Consult [Redactor Docs](https://imperavi.com/redactor/docs/settings/) or [CKEDitor Docs](https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/configuration.html) for the list of properties. Note that not all features might be supported by ExpressionEngine implementation.

#### Extra JavaScript
JavaScript template to be included with fields using this tool set. Typically used to include extra plugins when using advanced configuration with Redactor.

### Cloning a Tool Set

- Click a tool set's clone icon to create copy of tool set and open it for editing
- Modify the tool set's name.
- Select the tools you wish to have in this tool set.
- Click **Save Tool Set** to save your changes.


### Deleting a Tool Set

To delete a tool set, check the tool set's checkbox in the tool set table listing. Once one or more tool sets are selected, the bulk action control will appear below the table where you can perform bulk actions on the tool sets. Click the drop down to choose delete and then click Submit.

## RTE Configuration

- **Default RTE tool set** - select the tool set that will be selected by default when creating a field.
- **File Browser** - select file browser that will be used when browsing for images and files from RTE fields. ExpressionEngine's FilePicker is used by default, third-party add-ons can provide their own filepickers

NOTE: **Note:** If using the [Multiple Site Manager](msm/overview.md), this preference is per-site.

## Custom plugins

### Redactor

When using Redactor, the javascript for the plugin can be placed in the template, which then needs to be selected in "Extra JavaScript" field for the tool set.
Then enable extended configuration, add the plugin name to list of plugins and provide plugin config if necessary.
If the plugin needs extra styling, it can be placed in CSS Templates selected in "Custom Stylesheet" field for the tool set. If the CSS is targeting buttons, the selectors need to be prefixed with `.redactor-toolbar`.

### CKEditor

Because ExpressionEngine is using custom build of CKEditor, you would need to recompile the editor if you need to add third-party or your own plugin.

If the plugin needs extra styling, it can be placed in CSS Templates selected in "Custom Stylesheet" field for the tool set. If the CSS is targeting buttons, the selectors need to be prefixed with `.ck-toolbar`.

NOTE: **Warning** Doing this requires advanced development skills.

In order to create custom CKEditor build:
 - Clone [GitHub repo](https://github.com/ExpressionEngine/ExpressionEngine/)
 - Install NPM packages by runnin `npm install`
 - Follow the installation instructions for the plugin itself
 - Make your changes to `js-src\ckeditor5-build-classic\src\ckeditor.js` and other files as necessary.
 - Run the command `npm run build:ckeditor`
 - Copy the files from `themes/ee/asset/javascript/src/fields/rte/ckeditor` to same folder on your EE installation
