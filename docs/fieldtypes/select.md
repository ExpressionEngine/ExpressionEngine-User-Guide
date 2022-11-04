<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Select Dropdown Fieldtypes

[TOC]

Select Dropdown fields allow publishers to choose a single item from a dropdown list.

![select field](_images/field_select.png)

## Field Settings

{{embed:fieldtypes/_fieldtype-settings.md}}

### Text Formatting

Specifies how the entered-text will be formatted when rendered on the front-end. Most items will be entered will be single-lined and thus treated as a single paragraph by most text-processing plugins.

### Select Menu Options

This is where the list of items to select from is created. You have several ways to populate these items.

{{embed:fieldtypes/_selectable_field_value_pair_options.md}}

![](_images/valuelabel2.png)

`1`, `2`, or `3` is what gets stored in the database and is then the value used for the Channel Entries' tag [search parameter](channels/entries.md#searchfield_name). But both the value and the label are accessible via the field's template tags, which is outlined below.

#### Manual population

You may also enter each item in the provided textarea, separating each item on a single line. Each line will represent the choice's value AND label.

![](_images/cp-select-manual.png)

#### Populate from channel field

Or, the list may be populated by the contents of another channel field from your site.

![](_images/cp-select-channel.png)

## Template Tags

A Select Dropdown field's value can be rendered in a template using a single variable with the field's name. To specifically display the field's value or label, use the respective modifier.

    Value: {field_name}<br>
    Value: {field_name:value}<br>
    Label: {field_name:label}<br>

These variables are also available as conditionals. Let's say you had the following value/label options:

| Value | Label |
| :---- | :---- |
| 1     | One   |
| 2     | Two   |
| 3     | Three |

Given that the selection option is 2/Two:

    {if field_name == 2}Yep!{/if}
    {if field_name:value == 2}Yep!{/if}
    {if field_name:label == 'Two'}Yep!{/if}

TIP: **Tip:** It is recommended that you use the value in conditionals, as it typically will not change over time. That way, if you ever need to change the wording, spelling, or even casing of labels in your publish/edit UI, you will not need to modify your templates.

TIP: **Tip:** Checkboxes, Multiselect and Selectable Buttons all default to showing the label. Radio Buttons and Selects default to showing the value. 

NOTE: **NOTE:** For Select fields used in [Custom Member Fields](control-panel/member-manager.md#custom-member-fields) and [Category Group Details Tab](control-panel/categories.md#details-tab), the modifiers are not currently available in conditionals, and _must_ be based on the value, e.g. `{if some_cat_field == 2}`