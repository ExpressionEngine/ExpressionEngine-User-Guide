<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Front-end Editing

[TOC]

## Overview 
For any user logged in with a sufficient level of access permissions, ExpressionEngine Pro adds "front edit" links ( <img style="margin-bottom: 0px; vertical-align: middle; display:inline-block;" src="../../_images/pro_edit.png" alt="pro edit icon"> ) that allow editing an entry's data field by field. When enabled, editing (with live preview!) can be done directly on front-end without needing to go to the Control Panel.

Clicking the link icon opens a popup for that specific field so that its content can be modified and saved. The user can also switch to a full entry interface for editing with live preview functionality that shows the changes dynamically affecting the page they are currently on.

![edit popup](_images/ee-pro-window.png)

By default, edit links are added into the HTML right before where the field tag is called (the opening tag if a field tag pair is used).

WARN:**Permissions:** Users must be: a) logged-in on the front-end of the site and b) must have a role assigned to them which allows them to access and edit content for that entry's channel.

![channel access](_images/ee-role-channel-access.png).

## Saving Content

After editing data, content can be saved in one of two ways:
- Clicking directly on "Save", which will trigger a page reload

![save](_images/ee-pro-save.png)

- Clicking the alternate "Save without Reload" choice, which will save the content but will not reload the page. This choice requires a manual page refresh to see any updated content but is quicker, especially if you are planning to edit multiple fields or entries on a page.

![save without reload](_images/ee-pro-save-reload.png)

## Unsaved Changes

When a user has edited data and has unsaved changes, Pro will create an autosave of the entry and display an alert notification on the edit window with the unsaved changes. The autosave is triggered based on the autosave interval setting. If you want to ensure users do not accidentally lose unsaved changes, adjust the `[autosave_interval_seconds]` [system config override](general/system-configuration-overrides.md#autosave_interval_seconds) to a shorter interval between autosaves. A setting of 10 seconds is recommended.

![unsaved changes](_images/pro_unsaved_changes.png)

NOTE: **Note:** If the `[autosave_interval_seconds]` system config value was not previously set, upon install, Pro will set this value in the config file to be 10 seconds. However, if for some reason this value is not set explicitly, the default value is 60 seconds.

NOTE: **Note:** Autosave data is kept for a default of 6 hours. This can be adjusted via the [`[autosave_prune_hours]` system config value](general/system-configuration-overrides.md#autosave_prune_hours).

Example Usage:

```
$config['autosave_interval_seconds'] = '10';
$config['autosave_prune_hours'] = '6';
```

## Enable/Disable the Front Edit Links

There are multiple ways to enable or disable front-end editing links:
 - Globally with [configuration overrides](/general/system-configuration-overrides.md#enable_frontedit_links)
 - In the [Front-End Editing Settings](/control-panel/settings/front-end-editing.md#enable-automatic-front-end-editing-links) where you control the Dock overall.
 - Per field in the [field settings](control-panel/field-manager/edit-field.md)
 - By the user on the front-end [via the Dock](advanced-usage/front-end/dock.md#edit-toggle), by toggling Edit Mode on/off.
 - In the [Template Settings](control-panel/template-manager.md#settings) of an [individual template](/troubleshooting/front-end-content-management.html#dock-shows-everywhere-while-front-edit-links-only-show-some-places)
 - In the template by using [ExpressionEngine template comments](#expressionengine-comment), [HTML comments](#html-comment), or the [`disable` field parameter](#field-tag-parameter)
 - By granting or removing editing access to a user role

### Enable/Disable the Front Edit Link in the Template

#### Using ExpressionEngine Comments

Any content wrapped in these EE comments will not have edit links in it.

    <h1>{!-- disable frontedit --}{title}{!-- //disable frontedit --}</h1>

NOTE: **Hint:** If you need to disable front-end edit on large number of templates completely,  wrap these comments around content using a layout template.


#### Using HTML Comments

Any content wrapped in these HTML comments will not have edit links in it.

    <h1><!-- disable frontedit -->{title}<!-- //disable frontedit --></h1>

NOTE: **Hint:** If you need to disable front-end edit on large number of templates completely, wrap these comments around content using a layout template.

#### Field Tag Parameter

Use the `disable="frontedit"` parameter on a field tag to disable the edit link for a specific field.

    {page_content disable="frontedit"}

## Customizing the Link

The edit link icon for each field can be output in another part of the HTML by using [**:frontedit** modifier](#frontedit) on the field tag. Or, by using the [**frontedit_link**](#frontedit_link) tag, you can have a raw link in a different section of a template which can be custom styled. You can also use this to place an edit icon or link for a field that is currently not on the page.

### `:frontedit`

Inside `{exp:channel:entries}` tag, using a field name postfixed with `:frontedit` will generate an edit link icon for that field, regardless of that field's usual setting.

This is additionally useful if `disable_frontedit_links` configuration override is set and you need to place the links individually.

Example usage:

    {title:frontedit}

### `{frontedit_link}`

Can be used to place edit link in arbitrary place (also outside or `exp:channel:entries` tag). The link can have custom CSS class applied to it.

| Parameter  | Description |
| ---------- | ----------- |
| entry_id   | ID of entry to edit. Required. |
| field_name | Short name of field to edit. Required unless `field_id` is specified. |
| field_id   | ID of field to edit. Required unless `field_name` is specified. |
| site_id    | Required when using MSM and a field name that is not unique. |
| class      | Extra CSS class to apply to link. |

Example usage:

    <h1>
        <!-- disable frontedit -->{title}<!-- //disable frontedit -->
        {frontedit_link entry_id="{entry_id}" field_name="title"}
    </h1>

    {page_content disable="frontedit"}
    {frontedit_link entry_id="{entry_id}" field_name="page_content" class="extra-styles"}


## Conditional Tags

### `{if frontedit}`

```{if frontedit} content {/if}```

This conditional will display content if front-end editing is enabled overall for the current user. 

### Label Custom Front-end Edit Links

When using custom edit links, it may be useful to label these links for the user. One way of accomplishing this is by using the special [`{if frontedit}` conditional](#if-frontedit)

Example:

```
{if frontedit}Edit Entry Title{/if}{frontedit_link entry_id="{entry_id}" field_name="title"}
```

## Reinitialize ExpressionEngine Pro Javascript

There may be times, such as when using AJAX, that page content is loaded after ExpressionEngine Pro has already initialized on a page. When this happens, edit links may not work or even render. To fix this, you can include `EE.pro.refresh();` in your script. 

Example usage:

```
function getData() {
    $.ajax({
        url : 'example.com',
        type: 'GET',
        success : reInitPro
    })
}

function reInitPro(){
    EE.pro.refresh();
}
```
