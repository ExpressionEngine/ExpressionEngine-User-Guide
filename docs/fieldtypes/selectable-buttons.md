<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Selectable Buttons Fieldtype

[TOC]

Selectable Button fields allow publishers to choose either multiple or single items from a list depending on the setting.

![selectable buttons field](_images/field_selectable_buttons.png)

<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/8UUh91hWPOs?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

## Field Settings

{{embed:fieldtypes/_fieldtype-settings.md}}

### Allow multiple selections?

Selectable Buttons allow switching between single selection and multiple selection mode. Enable this option to allow publishers to choose multiple options. Disabling this option (default) will allow publishers to only choose a single option.

### Text Formatting

Specifies how the entered-text will be formatted when rendered on the front-end. Most items will be entered will be single-lined and thus treated as a single paragraph by most text-processing plugins.

### Buttons Options

This is where the list of items to select from is created. You have several ways to populate these items.

#### Value/Label pairs

The default choice is to enter a series of values and labels separately. Typically when constructing an HTML form, fields will have a different value than their presentation label. For example, if you want to enable the author to choose from a list of numbers, you might want the database to represent the actual numerical value:

![value label pair option](_images/valuelabel1.png)

For a Selectable Buttons field this results in an interface with only the labels visible:

![selectable buttons with values](_images/cp-field-selectable.png)


`1`, `2`, or `3` is what gets stored in the database and is then the value used for the Channel Entries tag [search parameter](channels/entries.md#searchfield_name). But both the value and the label are accessible via the field's template tags, which is outlined below.

{{embed:fieldtypes/_selectable_field_options.md}}

## Template Tags

### Multiple Items

When allowing multiple items to be selected, Selectable Buttons will usually be rendered using a variable pair.

    {field_name}
        {item}<br>
    {/field_name}

By default, `{item}` will render the item's value. To access the value and label separately, simply add a `:value` or `:label` modifier to the `{item}` variable:

    {field_name}
        Value: {item}<br>
        Value: {item:value}<br>
        Label: {item:label}<br>
    {/field_name}

TIP: **Tip:** You can use a single variable, e.g. _{field_name}_, and you will get a comma-separated list of the labels.

### Single Items

If "allow multiple selection" setting is turned off, just use the modifier to the single variable name, and do not use a variable pair:

    Label: {field_name}<br>
    Value: {field_name:value}<br>
    Label: {field_name:label}<br>

In all cases, these variables are also available as conditionals. Let's say you had the following value/label options:

| Value | Label |
| :---- | :---- |
| 1     | One   |
| 2     | Two   |
| 3     | Three |

Given that the selection option is 2/Two:

    {if field_name == 'Two'}Yep!{/if}
    {if field_name:value == 2}Yep!{/if}
    {if field_name:label == 'Two'}Yep!{/if}

TIP: **Tip:** It is recommended that you use the value in conditionals, as it typically will not change over time. That way, if you ever need to change the wording, spelling, or even casing of labels in your publish/edit UI, you will not need to modify your templates.

TIP: **Tip:** Checkboxes, Multiselect and Selectable Buttons all default to showing the label. Radio Buttons and Selects default to showing the value.

NOTE: **NOTE:** For Select fields used in [Custom Member Fields](control-panel/member-manager.md#custom-member-fields) and [Category Group Details Tab](control-panel/categories.md#details-tab), the modifiers are not currently available in conditionals, and _must_ be based on the value, e.g. `{if some_cat_field == 2}`

### Limit Parameter

This parameter limits the number of selected items output by the tag. It works for both the single variable, as well as the tag pair.

### Markup Parameter

When allowing for multiple selections, a single tag will display a comma separated list of values. If you want an HTML list, you can use markup="ul" or markup="ol" to change the output to the equivalent html list

    {field_name markup='ul'}

Which will render as

    <ul>
        <li>Green</li>
        <li>Blue</li>
        <li>Orange</li>
    </ul>

### Backspace Parameter

Backspacing removes characters (including spaces and line breaks) from the last iteration of the loop when using a variable pair. For example, if you put a `<br>` tag after each item you'll have this

    {field_name backspace='5'}
        {item}<br>
    {/field_name}

Which will render as

    Green<br>
    Blue<br>
    Orange

In this example, we do not want the `<br>` tag after the final item. Simply count the number of characters (including spaces, tabs, and line breaks) you want to remove and add the backspace parameter to the tag. The `<br>` tag has 4 characters plus a new line character between it and the closing tag.
