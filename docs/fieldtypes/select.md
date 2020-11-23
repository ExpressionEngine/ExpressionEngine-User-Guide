<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Checkboxes, Radio Buttons, Select, and Multiselect Fieldtypes

[TOC]

Checkboxes, Radio Buttons, Select, and Multiselect fields are all ways to allow publishers to choose items from a list. Radio Buttons and Select fields only allow the users to choose one item, while Checkboxes and Multiselects allow multiple items to be chosen from the list.

## Field Options

### Text Formatting

Specifies how the entered-text will be formatted when rendered on the front-end. Most items will be entered will be single-lined and thus treated as a single paragraph by most text-processing plugins.

### Options

This is where the list of items to select from is created. You have several ways to populate these items.

#### Value/Label pairs

The default choice is to enter a series of values and labels separately. Typically when constructing an HTML form, fields will have a different value than their presentation label. For example, if you want to enable the author to choose from a list of numbers, you might want the database to represent the actual numerical value:

![](_images/valuelabel1.png)

For a Radio Buttons field, for example, this results in an interface with only the labels visible:

![](_images/valuelabel2.png)

But the markup looks like this:

    <label><input type="radio" name="field_name" value="1"> One</label>
    <label><input type="radio" name="field_name" value="2"> Two</label>
    <label><input type="radio" name="field_name" value="3"> Three</label>

`1`, `2`, or `3` is what gets stored in the database and is then the value used for the Channel Entries tag [search parameter](channels/entries.md#searchfield_name). But both the value and the label are accessible via the field's template tags, which is outlined below.

#### Manual population

You may also enter each item in the provided textarea, separating each item on a single line. Each line will represent the choices value AND label.

#### Populate from channel field

Or, the list may be populated by the contents of another channel field from your site.

## Template Tags

Checkboxes and Multiselect can have multiple items selected, whereas Select and Radio Buttons only allow a single item selection.

### Multiple Items

Fields where multiple items can be selected (Checkboxes and Multiselect) will usually be rendered using a variable pair.

    {field_name}
        {item}<br>
    {/field_name}

By default, `{item}` will render the item's value. To access the value and label separately, simply add a `:value` or `:label` modifier to the `{item}` variable:

    {field_name}
        Value: {item}<br>
        Value: {item:value}<br>
        Label: {item:label}<br>
    {/field_name}

TIP: **Tip:** You can use a single variable for Checkboxes and Multiselect, e.g. _{field_name}_, and you will get a comma-separated list of the labels.

### Single Items

Single-choice fields, such as Select and Radio Buttons, just use the modifier to the single variable name, and do not use a variable pair:

    Value: {field_name}<br>
    Value: {field_name:value}<br>
    Label: {field_name:label}<br>

In all cases, these variables are also available as conditionals. Let's say you had the following value/label options:

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

NOTE: **NOTE:** For Select fields used in [Custom Member Fields](control-panel/member-manager.md#custom-member-fields) and [Category Group Details Tab](control-panel/categories.md#details-tab), the modifiers are not currently available in conditionals, and _must_ be based on the value, e.g. `{if some_cat_field == 2}`

### Limit Parameter

This parameter limits the number of selected items output by the tag. It works for both the single variable, as well as the tag pair.

### Markup Parameter

As a single tag, the multi option fields will display a comma seperated list of values. If you want an HTML list, you can use markup="ul" or markup="ol" to change the output to the equivalent html list

    {field_name markup='ul'}

Which will render as

    <ul>
        <li>Green</li>
        <li>Blue</li>
        <li>Orange</li>
    </ul>

### Backspace Parameter

When used as a tag pair, the multi option fields are a looping pair. Backspacing removes characters (including spaces and line breaks) from the last iteration of the loop. For example, if you put a `<br>` tag after each item you'll have this

    {field_name backspace='5'}
        {item}<br>
    {/field_name}

Which will render as

    Green<br>
    Blue<br>
    Orange

In this example, we do not want the `<br>` tag after the final item. Simply count the number of characters (including spaces, tabs, and line breaks) you want to remove and add the backspace parameter to the tag. The `<br>` tag has 4 characters plus a new line character between it and the closing tag.
