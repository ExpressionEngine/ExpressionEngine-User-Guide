<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Rich Text Editor

[TOC]

ExpressionEngine's built-in Rich Text Editor (RTE) is usually used inside the Control Panel. This module allows you to also use the RTE outside of the Control Panel, in your site's front-end templates.

Its primary purpose is to output the URL of the RTE's JavaScript and apply it to the desired elements (usually textareas) in your templates. For example, to load the RTE's JavaScript via a template and apply it to all elements with the class "my-class", you would place this inside your document's **head** element:

    <script type="text/javascript" src="{exp:rte:script_url selector=".my-class"}"></script>

NOTE: **Important:** If you're using the [Channel Form](channels/channel-form/overview.md), it's preferable to use the [channel_form_rte_selector](channels/channel-form/overview.md#rte_selector) parameter instead of this module's tag.

## Parameters

### `include_jquery=`

    include_jquery="no"

The versions of jQuery and jQuery UI that ship with ExpressionEngine are loaded by default since the RTE depends on them. If you are already loading these libraries separately, you may set this to "no".

### `selector=`

    selector=".my-custom-class"

The jQuery selector that determines which element(s) the RTE will be applied to. Any valid jQuery selector is acceptable. If this parameter is not specified, it will default to ".rte", selecting all elements having "rte" as a class.

### `toolset_id=`

    toolset_id="1"

The id of the toolset to use. If this parameter is not specified, the RTE will attempt to load the Toolset preference of the currently logged-in user as chosen in [RTE tool set](control-panel/member-profile.md#publishing-settings). If the user has not chosen a Toolset or is not logged in, the site's [Default Tool Sets](#default-tool-sets) will be used.

## Control Panel

**Control Panel Location:** `Developer --> Add-Ons --> Rich Text Editor`

This page allows you to configure ExpressionEngine's built-in Rich Text Editor (RTE).

## General Preferences

### Enable the Rich Text Editor

If "Yes", the Rich Text Editor will be applied to any Channel Fields of the [Textarea (Rich Text)](control-panel/field-manager.md#createedit-field) fieldtype. If "No", the field will appear as a normal textarea instead.

NOTE: **Note:** If using the [Multiple Site Manager](msm/overview.md), this preference is per-site.

### Default Tool Sets

Determines which tool set will be shown for any member that has not specifically chosen one in [RTE tool set](control-panel/member-profile.md#publishing-settings).

NOTE: **Note:** If using the [Multiple Site Manager](msm/overview.md), this preference is per-site.

## Tool Sets

This section allows you to create, edit, enable, disable and delete tool sets. Each tool set listed will be available (unless it is disabled) to all members of your ExpressionEngine installation, even across [Multiple Site Manager](msm/overview.md) sites.

### Creating a Tool Set

- Click the **Create New** button and the tool set creation form will appear.
- Enter a tool set name.
- Select the tools you wish to have in your new tool set.
- Click **Save Tool Set** to save your changes.

### Editing a Toolset

- Click a tool set's name to open the tool set Editor.
- Modify the tool set's name, if desired.
- Select the tools you wish to have in this tool set.
- Click **Save Tool Set** to save your changes.

### Enabling and Disabling Tool Sets

To enable or disable a tool set, check the tool set's checkbox in the tool set table listing. Once one or more tool sets are selected, the bulk action control will appear below the table where you can perform bulk actions on the tool sets. Click the drop down to choose enable or disable and then click Submit.

A disabled tool set will not appear as a choice to members, but can still be referred to by ID. This is useful in combination with the Channel Form's [rte_selector=](channels/channel-form/overview.md#rte_selector) and [rte_toolset_id=](channels/channel-form/overview.md#rte_toolset_id) parameters, for example.

### Deleting a Tool Set

To delete a tool set, check the tool set's checkbox in the tool set table listing. Once one or more tool sets are selected, the bulk action control will appear below the table where you can perform bulk actions on the tool sets. Click the drop down to choose delete and then click Submit.

## Tools

This section lists the Tools that are currently installed and allows you to enable or disable them. Disabled Tools will not appear as part of any Toolset.

See [RTE Tools API](development/rte-tools.md) for information on developing your own Tools.
