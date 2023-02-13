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
For users with the appropriate level of access, ExpressionEngine Pro adds "front edit" links ( <img style="margin-bottom: 0px; vertical-align: middle; display:inline-block;" src="../../_images/pro_edit.png" alt="pro edit icon"> ) on the site's front-end that allow editing the contents of each entry field individually. This is done directly on front-end without going to the Control Panel.

Clicking the link opens a popup with the field that can be modified and saved. Along with editing, users can also use front edit popup to access the full entry for editing with live preview showing the current page you are on.

![edit popup](_images/ee-pro-window.png)

The links are being placed in your HTML right before the field's tag (or opening tag if field tag pair is used).

WARN:**Permissions:** Users must be logged-in on the front-end of your site and must have a role assigned to them which allows them to access and edit content for that entry's channel.

![channel access](_images/ee-role-channel-access.png).

## Saving Content
After editing data, content can be saved by one of two ways:
- Clicking on "Save", which will trigger a page reload

![save](_images/ee-pro-save.png)

- Clicking the alternate "Save without Reload", which will save the content without reloading the page. This would require a manual page refresh to see any updated content.

![save without reload](_images/ee-pro-save-reload.png)

## Unsaved Changes
When a user edits data and has unsaved changes, Pro will create an autosave of the entry and alert the user via a notification on the edit window with unsaved changes. The autosave is triggerd based on the default autosave interval of 60 seconds. If you want to ensure users do not accidentally lose unsaved changes adjust the `[autosave_interval_seconds]` system config override to a lower interval between autosaves. A setting of 10 seconds is the recommendation.

![unsaved changes](_images/pro_unsaved_changes.png)

NOTE: **Note:** If the `[autosave_interval_seconds]` system config value was not previously changed, Pro will set this value at 10 seconds upon install.

Example Usage:

```
$config['autosave_interval_seconds'] = '10'; 
```
## Conditional Tags

### `{if frontedit}`

```{if frontedit} content {/if}```

This special conditional allows you to display content if front-end editing is enabled.


## Enable/Disable The Front Edit Link

There are several ways to disable front-end editing links:
 - Globally with [configuration overrides](/general/system-configuration-overrides.md#enable_frontedit_links) or in [General Settings](/control-panel/settings/front-end-editing.md#enable-automatic-front-end-editing-links)
 - Per field in the [field settings](control-panel/field-manager/field-manager-settings.md)
 - Via the Dock on the front-end by toggling Edit Mode on/off.
 - In the template by using [ExpressionEngine template comments](#expressionengine-comment), [HTML comments](#html-comment), or [field parameter](#field-tag-parameter)

### Enable/Disable Front Edit Link in the template

#### ExpressionEngine Comment

Anything content wrapped in `{!-- disable frontedit --} ... {!-- //disable frontedit --}` HTML comment will not have edit links in it.

    <h1>{!-- disable frontedit --}{title}{!-- //disable frontedit --}</h1>

NOTE: **Hint:** If you need to disable front-end edit on large number of templates completely, you can wrap these comments around layout template.


#### HTML Comment

Anything content wrapped in `<!-- disable frontedit --> ... <!-- //disable frontedit -->` HTML comment will not have edit links in it.

    <h1><!-- disable frontedit -->{title}<!-- //disable frontedit --></h1>

NOTE: **Hint:** If you need to disable front-end edit on large number of templates completely, you can wrap these comments around layout template.

#### Field tag parameter
Use `disable="frontedit"` parameter on field tag to disable link for a certain field.

    {page_content disable="frontedit"}

## Customizing The Link Location

The edit link for each field can be placed manually using [**:frontedit** modifier](#frontedit) on the field or using the [**frontedit_link**](#frontedit_link) tag if you need to have a link in a different section of a template, custom styled, or you can even place a link for a field that is currently not on the page.

### `:frontedit`

Inside `{exp:channel:entries}` tag, using the field name postfixed with `:frontedit` will generate an edit link for that field within displayed entry.

You may find it useful if `disable_frontedit_links` configuration override is set and you need to place the links individually.

Example usage:

    {title:frontedit}

### `{frontedit_link}`

Can be used to place edit link in arbitrary place (also outside or `exp:channel:entries` tag). The link can have custom CSS class applied to it.

| Parameter  | Description |
| ---------- | ----------- |
| entry_id   | ID of entry to edit. Required. |
| field_name | Short name of field to edit. Required, unless `field_id` is specified. |
| field_id   | ID of field to edit. Required, unless `field_name` is specified. |
| site_id    | Extra CSS class to apply to link HTML. |
| class      | Extra CSS class to apply to link HTML. |

Example usage:

    <h1>
        <!-- disable frontedit -->{title}<!-- //disable frontedit -->
        {frontedit_link entry_id="{entry_id}" field_name="title"}
    </h1>

    {page_content disable="frontedit"}
    {frontedit_link entry_id="{entry_id}" field_name="page_content" class="extra-styles"}


### Label Custom Front-end Edit Links
When using custom links, it may be useful to label these links for the user. One way of accomplishing this is by using the special [`{if frontedit}` conditional](#if-frontedit)

Example:

```
{if frontedit}Edit Entry Title{/if}{frontedit_link entry_id="{entry_id}" field_name="title"}
```

## Reinitialize ExpressionEngine Pro Javascript
There may be times, such as when using AJAX, that page content is loaded after ExpressionEngine Pro has been initialized on a page. When this happens edit links may not work or even render. To fix this, you need to included `EE.pro.refresh();` in your script. 

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
