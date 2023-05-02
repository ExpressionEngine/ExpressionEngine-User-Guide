<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Variable types


Pro Variables comes with **over a dozen variable types**. Each type has its own specific settings. You can select which types are available by (de)selecting them in the [settings](/add-ons/pro-variables/settings.md).

[TOC]

## Checkbox

Displays a single checkbox with optional _label_. Its value is either y (checked) or blank (unchecked).

### Settings

#### Label

Custom label added to a single checkbox.

## Checkbox Group

Displays multiple checkboxes, based on given _options_. Its value is a list of checked values, separated by the chosen _separator_.

### Settings

#### Options

A textarea field to list multiple options for selection. Put each option on a new line. Optionally use  `:`  (space colon space) to separate values and labels.

### Separator

Character to separate multiple values. Either a new line (`\n`), a pipe (`|`) or a comma (`,`). If your values contain one of these characters, don’t use that as separator.

## Date

Displays a date picker. To output anything other than a timestamp, use the `{exp:pro_variables:single}` tag. This takes the same parameters as the native Date field. Additionaly, use `modifier="relative"` to output a relative date string.

### Code examples

    {exp:pro_variables:single var="my_var" format="%Y-%m-%d"}

    {exp:pro_variables:single var="my_var" modifier="relative"}

## File

Uses the native [File field](/fieldtypes/file.md). To output the variable, always use the `{exp:pro_variables:pair}` or `{exp:pro_variables:single}` tag where appropriate. If you try to address the variable by name only, it will return the content unparsed, e.g. `{file:XX:url}`. You can use File field [parameters](/fieldtypes/file.md#template-tag-usage) and [variables](/fieldtypes/grid.md#template-tags) using these tags. Additionally, one more parameter is available:

### Parameters

#### `modifier`

Allows applying modifiers, which, among other, are used to apply [on-the-fly image manipulations](/fieldtypes/grid.md#on-the-fly-image-manipulations) to files

## Grid

Uses the native [Grid field](/fieldtypes/grid.md). All native types are available, _except for Relationships_. To output the variable, use the `{exp:pro_variables:pair}` or `{exp:pro_variables:single}` tag where appropriate. You can use any of Grid’s [parameters](/fieldtypes/grid.md#parameters) and [variables](/fieldtypes/grid.ms#variables) using these tags. Additionally, one more parameter is available:

### Parameters

#### `modifier`

Any of the available [modifiers](/fieldtypes/grid.md#modifiers), which will trigger the ouput the modifier provides.

### Code examples

    {exp:pro_variables:pair var="my_var"}
    	<figure>
    		<img src="{my_var:image}">
    		<figcaption>Photo by {my_var:credit}</figcaption>
    	</figure>
    	{my_var:description}
    {/exp:pro_variables:pair}

    {exp:pro_variables:single var="my_var" modifier="total_rows"}

## Radio Group

Displays multiple radio buttons, based on given _options_. Its value is the value of the checked item.

### Settings

#### Options

A textarea field to list multiple options for selection. Put each option on a new line. Optionally use  `:`  (space colon space) to separate values and labels.

## Textarea (Rich Text)

Uses the native [Rich Text Editor fieldtype](/fieldtypes/rte.md). The _height_ of the field can be set, as well as the _text direction_.

### Settings

#### Rows

Number of rows (height) of the textarea field.

#### Text direction

Left to Right or Right to Left.

#### Display wide field

If set to _Yes_, the field will be shown in full width.

NOTE: **Note:** always use the Tag syntax to output the formatted content.

## Select

Displays either a drop down list box or _multiple_ list box, based on given _options_. Its value is either the single selected item or a list of selected items, separated by the chosen _separator_. You can also select an _interface_ that is used for multiple selection.

### Settings 

#### Options

A textarea field to list multiple options for selection. Put each option on a new line. Optionally use  `:`  (space colon space) to separate values and labels.

#### Multiple

Option to allow multiple items to be selected.

#### Separator

Character to separate multiple values. Either a new line (`\n`), a pipe (`|`) or a comma (`,`). If your values contain one of these characters, don’t use that as separator.

#### Interface

For multiple selections, you can choose different interfaces. _Multiple Select element_ will show a regular select element. _Drag and drop lists_ will show two lists of unselected and selected items. You can drag items across these lists and put them in a preferred order as well.

## Select Categories

Displays either a drop down list box or _multiple_ list box of categories, based on the selected _Category Groups_. Its value is either the category id of the single selected item or a list of selected category ids, separated by the chosen _separator_. You can also select an _interface_ that is used for multiple selection.

### Settings

#### Category groups

Limit selectable categories to these category groups.

#### Multiple

Option to allow multiple items to be selected.

#### Separator

Character to separate multiple values. Either a new line (`\n`), a pipe (`|`) or a comma (`,`). If your values contain one of these characters, don’t use that as separator.

#### Interface

For multiple selections, you can choose different interfaces. _Multiple Select element_ will show a regular select element. _Drag and drop lists_ will show two lists of unselected and selected items. You can drag items across these lists and put them in a preferred order as well.

## Select Channels

Displays either a drop down list box or _multiple_ list box of weblogs/channels, based on the selected _weblogs/channels_. Its value is either the weblog/channel short name of the single selected item or a list of selected weblog/channel short names, separated by the chosen _separator_. You can also select an _interface_ that is used for multiple selection.

### Select Channels

Limit selectable channels to these channels.

### Settings

#### Multiple

Option to allow multiple items to be selected.

#### Separator

Character to separate multiple values. Either a new line (`\n`), a pipe (`|`) or a comma (`,`). If your values contain one of these characters, don’t use that as separator.

#### Interface

For multiple selections, you can choose different interfaces. _Multiple Select element_ will show a regular select element. _Drag and drop lists_ will show two lists of unselected and selected items. You can drag items across these lists and put them in a preferred order as well.

## Select Entries

Displays either a drop down list box or _multiple_ list box of entries, based on filters by _Future_ or _Expired_ entries, _Channels_, _Categories_ and _Statuses_. You can also set the _order_ of the entries and _limit_ them to a certain number. Its value is either the entry id of the single selected item or a list of selected entry ids, separated by the chosen _separator_. You can also select an _interface_ that is used for multiple selection.

### Settings

#### Future entries

Adds future entries to the entry list.

#### Expired entries

Adds expired entries to the entry list.

#### Channels

Select which channels the entry list is filtered by.

#### Categories

Select which categories the entry list is filtered by.

#### Statuses

Select which statuses the entry list is filtered by.

#### Order by

Sort entry list either by _Title_ or _Entry date_, in _ascending_ or _descending_ order.

#### Limit entries

Maximum number of entries to show in the entry list.

#### Multiple

Option to allow multiple items to be selected.

#### Separator

Character to separate multiple values. Either a new line (`\n`), a pipe (`|`) or a comma (`,`). If your values contain one of these characters, don’t use that as separator.

#### Interface

For multiple selections, you can choose different interfaces. _Multiple Select element_ will show a regular select element. _Drag and drop lists_ will show two lists of unselected and selected items. You can drag items across these lists and put them in a preferred order as well.

## Select Files

Displays either a drop down list box or _multiple_ list box of files, based on the selected _folders_. Its value is either the full URL of the single selected file or a list of selected files, separated by the chosen _separator_. You can also optionally define an _Upload Destination_ for new files. You can also select an _interface_ that is used for multiple selection.

### Settings

#### Folders

Limit selectable files to these upload destinations.

#### Upload folders

Select target folder for new files, or set to No uploads to hide the upload form.

#### Multiple

Option to allow multiple items to be selected.

#### Separator

Character to separate multiple values. Either a new line (`\n`), a pipe (`|`) or a comma (`,`). If your values contain one of these characters, don’t use that as separator.

#### Interface

For multiple selections, you can choose different interfaces. _Multiple Select element_ will show a regular select element. _Drag and drop lists_ will show two lists of unselected and selected items. You can drag items across these lists and put them in a preferred order as well. _Drag and drop lists with thumbnails_ will show a thumbnail for each image when available, and the field will be shown in full width.

### Parameters
When using the Tag syntax to display the variable, you can use additional parameters to further customize the output:

#### `manipulation`

The short name of the Image Manipulation you want to output. Alternatively, you can use `{var_name:manipulation}` in the tag pair.

### Code examples

    {exp:pro_variables:single var="lv_files_var" manipulation="squared"}

    {exp:pro_variables:pair var="lv_files_var"}
      <img src="{lv_files_var:squared}" alt="">
    {/exp:pro_variables:pair}

## Table

Displays a table of simple input fields, based on the amount of _columns_ given. You can add unlimited rows to the table. Remove rows by emptying its values. Use the `{exp:pro_variables:pair}` tag to output the content.

### Settings

#### Columns

A pipe-delimited list of column names for the table,  
eg. `URL | Link text`

#### Display wide field

If set to _Yes_, the field will be shown in full width.


### Parameters
When using the module tags to display the table variable, you can use additional parameters to further customize the output:

#### `sort`

`asc`, `desc` or `random`; Displays rows in ascending, descending or random order. Defaults to `asc`.

#### `limit`

Limit the number of rows displayed.

### Code examples

    {exp:pro_variables:pair var="lv_table_var"}
      {if count == 1}<ul>{/if}
        <li><a href="{cell_1}">{cell_2}</a></li>
      {if count == total_results}</ul>{/if}
    {/exp:pro_variables:pair}

    {exp:pro_variables:pair var="lv_table_var" sort="random" limit="1"}
      Random link: <a href="{cell_1}">{cell_2}</a>
    {/exp:pro_variables:pair}

## Text Input

Displays a single line edit input field. The _maxlength_ property can be set as well as the _size_ of the input fied. You can also define a regular expression _pattern_ to validate the value, and the _text direction_ of the input field.

### Settings

#### Maxlength

Maximum number of characters allowed in this input field.

#### Size

Width of the input field. Large, medium, small or x-small.

#### Pattern

Regular Expression used to validate the value of the variable.

#### Text direction

Left to Right or Right to Left.

## Textarea

Displays a multi-line edit input field (aka Textarea). The _height_ of the field can be set, as well as the _text direction_. You can also choose to apply _code formatting_, which will result in a monospaced, light-on-dark version of the textarea. Textarea is the default variable type.

### Settings

#### Text direction

Left to Right or Right to Left.

#### Code formatting

If enabled, it will display the textarea as a monospaced, light-on-dark input field.

#### Display wide field

If set to _Yes_, the field will be shown in full width.

### Parameters
When using the module tags to display a Textarea variable, you can use additional parameters to further customize the output:

#### `formatting`

Applies formatting to the variable content. You can use `xhtml`, `br` or any formatting plugin like `textile`. Defaults to `none`.

#### `html`

To be used in combination with `format`. Possible values: `none`, `safe` or `all`. Defaults to `safe`.

#### `preparse:_my_var_`

If the variable content contains variables that need to be parsed before it is put in the template, you can use this parameter, similar to [embed variables](/templates/embedding.md#embed-variables-for-the-embedded-template). For example: setting the parameter `preparse:foo="bar"` will replace the variable `{preparse:foo}` with `bar` in the variable content.

#### `preparse_prefix`

See above, change the default variable prefix from `preparse` to something else. For example, the parameters `preparse:foo="bar" preparse_prefix="lv"` will replace the variable `{lv:foo}` with `bar` inside the variable content.

### Code examples

    {exp:pro_variables:single var="my_var" formatting="xhtml" html="all"}

    {exp:pro_variables:single var="my_var" preparse:entry_id="12"}