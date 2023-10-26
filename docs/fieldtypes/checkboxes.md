<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Checkboxes Fieldtype

[TOC]

Checkboxes allow publishers to choose multiple items from a list. 

![multiselect field](_images/cp-field-multiselect.png)

## Field Settings

{{embed:fieldtypes/_fieldtype-settings.md}}

### Text Formatting

Specifies how the entered-text will be formatted when rendered on the front-end. Most items will be entered will be single-lined and thus treated as a single paragraph by most text-processing plugins.

### Options

This is where the list of items to select from is created. You have several ways to populate these items.

{{embed:fieldtypes/_selectable_field_value_pair_options.md}}

![multiselect field](_images/cp-field-multiselect.png)

`1`, `2`, or `3` is what gets stored in the database and is then the value used for the Channel Entries tag [search parameter](channels/entries.md#searchfield_name). But both the value and the label are accessible via the field's template tags, which is outlined below.

{{embed:fieldtypes/_selectable_field_options.md}}

## Template Tags

Checkbox Field values and labels can be displayed in templates using a single variable or a variable pair for more control of the output.

### Single Variable

You can use a single variable for Checkboxes to render a comma-separated list of the labels.

```
{field_name} {!-- One,Two,Three --}
```

### Variable Pair

Using a variable pair of field name, allows for customization of the output.

    {field_name}
        {item}<br>
    {/field_name}

The above snippet will render as:

```
One
Two
Three
```

The following variables are available inside field's tags pair:

| Variable        | Description                                         |
| --------------- | --------------------------------------------------- |
| `{item}`        | Label of selected item                              |
| `{item:label}`  | Label of selected item                              |
| `{item:value}`  | Value of selected item                              |
| `{count}`       | Counter for each of selected items, starting with 1 |
| `{index}`       | Counter for each of selected items, starting with 0 |
| `{total_items}` | Total number of selected items                      |

By default, `{item}` will render the item's label.

To access the value and label separately, simply add a `:value` or `:label` modifier to the `{item}` variable:

    {field_name}
        Label: {item}<br> {!-- 1 --}
        Value: {item:value}<br> {!-- 1 --}
        Label: {item:label}<br> {!-- One --}
    {/field_name}


These variables are also available as conditionals. Let's say you had the following value/label options:

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

### Parameters

#### `limit`

This parameter limits the number of selected items output by the tag. It works for both the single variable, as well as the tag pair.

```
{field_name limit="2"} {!-- One,Two --}
```

#### `markup`

As a single tag, a checkbox will display a comma separated list of values. If you want an HTML list, you can use markup="ul" or markup="ol" to change the output to the equivalent html list

    {field_name markup='ul'}

Which will render as

    <ul>
        <li>Green</li>
        <li>Blue</li>
        <li>Orange</li>
    </ul>

#### `backspace`

When used as a tag pair, checkboxes are a looping pair. Backspacing removes characters (including spaces and line breaks) from the last iteration of the loop. For example, if you put a `<br>` tag after each item you'll have this

    {field_name backspace='5'}
        {item}<br>
    {/field_name}

Which will render as

    Green<br>
    Blue<br>
    Orange

In this example, we do not want the `<br>` tag after the final item. Simply count the number of characters (including spaces, tabs, and line breaks) you want to remove and add the backspace parameter to the tag. The `<br>` tag has 4 characters plus a new line character between it and the closing tag.
