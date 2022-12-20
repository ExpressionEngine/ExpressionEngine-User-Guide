<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Form Fields

[TOC]

Every Field Set consists of one or more Fields. The below covers everything about Fields.

## Usage

When working with Fields, you'll always request it from the [Field Set](development/services/cp-form/field-sets.md) object to request it, initially. Once you have it, you'll decorate it like everything else. For example: 

```
$form = ee('CP/Form');
$field_group = $form->getGroup('General Settings');
$field_set = $field_group->getFieldSet('First Name');

$field = $field_set->getField('first_name', 'text')
    ->setPlaceholder('First Name')
    ->setRequired(true);
```

The above will attach a `text` Input field onto the Field Set "First Name". 

Every existing Shared Form View input field is respected as are a couple additions exclusively through the [CP/Form](development/services/cp-form.md) layer:

- A simplified and streamlined Grid and Table layer
- Native ExpressionEngine Filepicker 
- Custom HTML Inputs

## First Party Fields

[TOC=3]

### `action_button`

**class `ExpressionEngine\Library\CP\Form\Fields\ActionButton`**

Adds a “pretty” button style link to your form.

[TOC=4]

#### `setLink($class)`

Returns URL you want to use (`link`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$link | `string` | The full URL you want to use	 |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

#### `getLink()`

Returns URL you want to use (`link`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

#### `setText($text)`

The copy to use for the button (`text`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The copy to use for the button |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

#### `getText()`

Returns URL you want to use (`text`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `checkbox`

**class `ExpressionEngine\Library\CP\Form\Fields\Checbox`**

Adds a specialized widget for checkbox

### `dropdown`

**class `ExpressionEngine\Library\CP\Form\Fields\Dropdown`**

Adds a fancy select input field especially useful for large data sets to choose from.

### `file`

**class `ExpressionEngine\Library\CP\Form\Fields\File`**

Adds a traditional file HTML field to your form.

### `file-picker`

**class `ExpressionEngine\Library\CP\Form\Fields\FilePicker`**

Adds a File Picker widget to your shared form

[TOC=4]

#### `withAll()`

Sets the allowed directory parameter to any upload location. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Fields\FilePicker` | `$this`, the FilePicker object to help in chaining |

#### `withDir($upload_dir)`

Sets the specific upload location to use

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$upload_dir | `int` | The file upload location ID |
| Returns | `Form\Fields\FilePicker` | `$this`, the FilePicker object to help in chaining |

#### `isAll()`

Determines whether an upload location has been set

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | Whether the upload location is set |

#### `asAny()`

Set the uploaded file type can be any mime type

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Fields\FilePicker` | `$this`, the FilePicker object to help in chaining |

#### `asImage()`

Set the uploaded file type to images only

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Fields\FilePicker` | `$this`, the FilePicker object to help in chaining |

#### `isImage()`

Determines whether the mime type is locked to images only

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | Whether the upload is images only |

### `grid`

**class `ExpressionEngine\Library\CP\Form\Fields\Grid`**

Allows for a more streamlined implementation of Grid within Shared Forms. Two important differences with this implementation is a simpler API and direct handling of POST values.

Note that the `Grid` Field inherits from the `Table` Field; as such there's really only a single method.

[TOC=4]

#### `defineRow($row)`

Determines whether the mime type is locked to images only

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$row | `array` | An array that represents how your rows should be created |
| Returns | `Form\Fields\Grid` | `$this`, the Grid object to help in chaining |

The `$row` array should be formatted as a simple 2 level, multidimensional, array with each child representing a column and it's fields. As of now, the Grid Field accommodates `select`, `text`, `checkbox`, `file`, `password`, and `textarea` fields natively. 

See the below example for a complete outline.

#### Example

```
$grid = $field_set->getField('my_grid_field', 'grid');

$grid->setOptions([
    'field_name' => $grid->getName(),
    'reorder'    => true,
]);

$grid->setColumns([
    'text example' => ['sort' => false],
    'select example' => ['sort' => false],
    'password example' => ['sort' => false],
    'checkbox example' => ['sort' => false],
    'textarea example' => ['sort' => false],
    'upload example' => ['sort' => false],
]);

$options = ['foo' => 'Foo', 'bar' => 'Bar'];
$cols = [
    ['name' => 'foo-text', 'type' => 'text', 'value' => ''],
    ['name' => 'barr-select', 'type' => 'select', 'value' => '', 'choices' => $options],
    ['name' => 'foo-password', 'type' => 'password', 'value' => ''],
    ['name' => 'bar-checkbox', 'type' => 'checkbox', 'value' => 1],
    ['name' => 'foo-textarea', 'type' => 'textarea', 'value' => '', 'cols' => 2, 'rows' => 5],
    ['name' => 'bar-upload', 'type' => 'file', 'value' => '', 'cols' => 2, 'rows' => 5],
];
$grid->defineRow($cols);
$grid->setData([
    ['foo-text' => 'bar', 'barr-select' => 'foo', 'foo-password' => 'fdsa', 'bar-checkbox' => 1, 'foo-textarea' => '', 'bar-upload' => ''],
    ['foo-text' => 'fdsafdsa', 'barr-select' => 'bar', 'foo-password' => 'fdsa', 'bar-checkbox' => true, 'foo-textarea' => '', 'bar-upload' => '']
]);

$grid->setNoResultsText(sprintf(lang('no_found'), lang('table-thing')), 'add');
$grid->setBaseUrl( ee('CP/URL')->make($this->base_url ));
```

### `hidden`

**class `ExpressionEngine\Library\CP\Form\Fields\Hidden`**

Adds a hidden field to your form

### `html`

**class `ExpressionEngine\Library\CP\Form\Fields\Html`**

Allows for putting raw (unformatted) HTML inside your form

[TOC=4]

#### `setContent($content)`

Sets the specific upload location to use

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$content | `string` | The HTML content you want to output |
| Returns | `Form\Fields\Html` | `$this`, the Html object to help in chaining |

#### `getContent()`

Returns the content (empty string by default)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The content |

### `multiselect`

**class `ExpressionEngine\Library\CP\Form\Fields\Multiselect`**

Deploys a series of select input fields together

[TOC=4]

#### `addDropdown($name, $value, $label, $options)`

Adds a single Dropdown element to your Field

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$name | `string` | The field name to use |
| \$value | `string` | The selected value for this field |
| \$label | `string` | The label element to use |
| \$options | `array` | The choices to use for the select box |
| Returns | `Form\Fields\Multiselect` | `$this`, the Multiselect object to help in chaining |

#### `removeDropdown($name)`

Returns the content (empty string by default)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$name | `string` | The field name to remove |
| Returns | `Form\Fields\Multiselect` | `$this`, the Multiselect object to help in chaining |

### `password`

**class `ExpressionEngine\Library\CP\Form\Fields\Password`**

Adds your run of the mill password input field wrapped in magic that puts an eye next to it.

### `radio`

**class `ExpressionEngine\Library\CP\Form\Fields\Radio`**

This behaves just like checkbox with the exception of being scalar so uses a scalar for the value. See checkbox for details.

### `select`

**class `ExpressionEngine\Library\CP\Form\Fields\Select`**

Adds a traditional select input field to your form.

### `short-text`

**class `ExpressionEngine\Library\CP\Form\Fields\ShortText`**

Adds a small input HTML field wrapped in a div with flex-input as the class. Useful for stacking fields horizontally.

[TOC=4]

#### `setLabel($label)`

Will place a bold string under the field for users to clickety clackity on

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$label | `string` | The label string |
| Returns | `Form\Fields\ShortText` | `$this`, the ShortText object to help in chaining |

#### `getLabel()`

Returns the label (empty string by default)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Fields\ShortText` | `$this`, the ShortText object to help in chaining |

### `slider`

**class `ExpressionEngine\Library\CP\Form\Fields\Slider`**

Puts a slider widget into your form

[TOC=4]

#### `setMin($min)`

The lowest value in the range of permitted values	

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$min | `int` | The minimum allowed value |
| Returns | `Form\Fields\Slider` | `$this`, the Slider object to help in chaining |

#### `getMin()`

Returns the minimum value to allow

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `int` | The minimum allowed value |

#### `setMax($max)`

The greatest value in the range of permitted values	

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$max | `int` | The maximum allowed value |
| Returns | `Form\Fields\Slider` | `$this`, the Slider object to help in chaining |

#### `getMax()`

Returns the maximum value to allow

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `int` | The maximum allowed value |

#### `setStep($step)`

Specifies the granularity that the value must adhere to (if any is used, no stepping is implied, and any value is allowed (barring other constraints, such as min and max)	

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$step | `mixed` | The value for the step parameter |
| Returns | `Form\Fields\Slider` | `$this`, the Slider object to help in chaining |

#### `getStep()`

Returns the step value

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `mixed` | The set value |

#### `setUnit($unit)`

The symbol your data can best be represented by (defaults to %)	

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$step | `unit` | The value for the unit parameter |
| Returns | `Form\Fields\Slider` | `$this`, the Slider object to help in chaining |

#### `getUnit()`

Returns the unit value

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `mixed` | The set value |

### `table`

**class `ExpressionEngine\Library\CP\Form\Fields\Table`**

Allows for a more streamlined implementation of tables within Shared Forms

[TOC=4]

#### `setColumns($cols)`

Sets the columns and options for the Table. Use this to outline how your columns are rendered and prepared. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$cols | `array` | The table column options |
| Returns | `Form\Fields\Table` | `$this`, the Table object to help in chaining |

#### `getColumns()`

Returns the column options

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` or `null` | Returns the column options|

#### `setOptions($cols)`

Sets the table options

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$cols | `array` | The table options |
| Returns | `Form\Fields\Table` | `$this`, the Table object to help in chaining |

#### `getOptions()`

Returns the table options

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` or `null` | Returns the table options|

#### `setNoResultsText($text, $action_text, $action_link, $external)`

Sets what the table displays if there isn't any data provided to it

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The string to display next to the action button |
| \$action_text | `string` | The string to display inside the action button |
| \$action_link | `Url` | The `ExpressionEngine\Library\CP\Url` object |
| \$external | `boolean` | Whether the `action_link` refers to an external link |
| Returns | `Form\Fields\Table` | `$this`, the Table object to help in chaining |

#### `getNoResultsText()`

Returns the no results details as an array

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` or `null` | Returns the table options |

#### `setData($data)`

Sets the table row data as an array. Note that this be a multidimensional array with each child element representing a column and each parent a row

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$cols | `array` | The table row data |
| Returns | `Form\Fields\Table` | `$this`, the Table object to help in chaining |

#### `getData()`

Returns the table row data

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` or `null` | Returns the table options |

#### `addRow($row)`

Adds a single row to the Table

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$row | `array` | The new row data |
| Returns | `Form\Fields\Table` | `$this`, the Table object to help in chaining |

#### `setBaseUrl($url)`

Sets the URL parameters will be based on 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$url | `Url` | The `ExpressionEngine\Library\CP\Url` object |
| Returns | `Form\Fields\Table` | `$this`, the Table object to help in chaining |

#### `getBaseUrl()`

Returns the `ExpressionEngine\Library\CP\Url` object

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Url` or `null` | Returns the base url |

#### Example

```
$table = $field_set->getField('my_table', 'table');

$table->setOptions([
    'lang_cols' => true,
    'class' => 'product_channels'
]);

$table->setColumns([
    'details' => ['sort' => false],
    'value' => ['sort' => false],
]);

$table->setNoResultsText(sprintf(lang('no_found'), lang('product_channels')));
$table->setBaseUrl( ee('CP/URL')->make($this->base_url ));
$data = [];
$data[] = [
    'Hello',
    'You',
];

$table->setData($data);
$table->addRow([
    'No, Hello',
    'To You!',
]);
```

### `text`

**class `ExpressionEngine\Library\CP\Form\Fields\Text`**

Adds a traditional input HTML field

### `textarea`

**class `ExpressionEngine\Library\CP\Form\Fields\Textarea`**

Adds a full textarea input field

[TOC=4]

#### `setKillPipes($kill)`

Flag to replace any ¦ delimiters with new lines (`\n`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$min | `boolean` | Whether to handle pipes |
| Returns | `Form\Fields\Textarea` | `$this`, the Textarea object to help in chaining |

#### `getKillPipes()`

Returns the minimum value to allow

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | Whether pipes will be translated |

#### `setCols($cols)`

Sets how many columns to set the field to use

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$cols | `int` | The total number of columns |
| Returns | `Form\Fields\Textarea` | `$this`, the Textarea object to help in chaining |

#### `getCols()`

Returns the number of columns

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | Returns the number of columns to use |

#### `setRows($rows)`

Sets how many rows to set the field to use

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$rows | `int` | The total number of rows |
| Returns | `Form\Fields\Textarea` | `$this`, the Textarea object to help in chaining |

#### `getRows()`

Returns the number of rows

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | Returns the number of rows to use |


### `toggle`

**class `ExpressionEngine\Library\CP\Form\Fields\Toggle`**

Adds a Toggle binary toggle

### `yes_no`

**class `ExpressionEngine\Library\CP\Form\Fields\YesNo`**

Adds a Toggle control that returns either y or n respectively.

## The `Input` Field

If you want to use a [native HTML5 input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) that is not already a Field, you can do so quite easily. IF a Field is requested that doesn't exist, a Field of the `Input` variety will be provided. The `Input` Field provides a single custom method that will allow you to craft custom HTML5 input elements. 

### `params($params)`

A key=>value array of parameters to be chained into a string internally 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$value | `array` | The params you want to use |
| Returns | `Form\Fields\Input` | `$this`, the Field object to help in chaining |

### Example

Here's a simple example building both `number` and `color` Input Fields.  

```
$field_set = $field_group->getFieldSet('color');
$field_set->getField('my_color_field', 'color')->setValue('#C86565');

$field_set = $field_group->getFieldSet('number');
$field_set->getField('my_number_field', 'number')->params(['min' => 100, 'max' => 1000])->setRequired(true);
```

## Field API Reference

**class `ExpressionEngine\Library\CP\Form\Field`**

All input fields are based on the `Field` object. Note that while every Field will have the below methods available, whether they're respected by the Shared Form View layer is a different matter. 

[TOC=3]

### `toArray()`

Returns the entire `CP\Form\Field` object into an array. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` | The Field as an array |

### `getName()`

Returns the name used upon creation for the Field. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The raw value used |

### `setClass($class)`

The class property to apply to the Field (`class`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$class | `string` | The value to use for the `class` parameter |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getClass()`

Returns the class property (`class`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `withMarginTop()`

The class `margin_top` is added to your input element. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `withOutMarginTop()`

Removes the `margin_top` from your input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `withMarginLeft()`

The class `margin_left` is added to your input element. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `withOutMarginLeft()`

Removes the `margin_left` from your input

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `setNote($note)`

The string you want to use for your Note (`note`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$note | `string` | The string to use for your note |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getNote()`

Returns the note string (`note`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setAttrs($attrs)`

Any custom input parameters you want to attach to your Field (`attrs`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$attrs | `string` | The attributes. Note they have to be in the form ' param="X" param2="y" ' |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getAttrs()`

Returns the attributes string (`attrs`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setDisabled($disabled)`

Whether the Field should be editable (`disabled`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$disabled | `boolean` | Simple boolean |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getDisabled()`

Whether the Field is disabled (`disabled`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `boolean` | Note that if this isn't set, it'll be null by default |

### `setValue($value)`

The value to use for the "value" parameter (`value`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$value | `mixed` | What you want to use. |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getValue()`

The value to use on the Field (`value`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `mixed` | The set value |

### `setGroup($group)`

The group you want to relate this Field to (`group`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$group | `string` | What group toggle this Field is a part of |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getGroup()`

The group this Field is related to (`group`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The set group |

### `setGroupToggle($group_toggle)`

The group toggle you want to relate this Field to (`group_toggle`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$group_toggle | `string` | What group toggle this Field controls |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getGroupToggle()`

The group toggle this Field controls (`group_toggle`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The set group |

### `setRequired($required)`

Whether the field can accept input/editing (`required`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$required | `boolean` | Whether the Field is required |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getRequired()`

Whether this Field is required (`required`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | Whether the Field is required |

### `setPlaceholder($required)`

The string to use for the input "placeholder" attribute (`placeholder`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$placeholder | `string` | The value to use |
| Returns | `Form\Field` | `$this`, the Field object to help in chaining |

### `getPlaceholder()`

Whether this Field is required (`placeholder`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The `placeholder` parameter |


## OptionsField API Reference

**class `ExpressionEngine\Library\CP\Form\OptionsField`**

Input Fields that allow for multiple options or set input parameters are based on the `OptionsField` abstract. Note that `OptionsField` extends from `Field` so you'll also have access to those parent methods, as well. 

[TOC=3]

### `withNoResults($text, $link_text, $link_href)`

Used to define quick links when choices are empty.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The value to display next to your action button |
| \$link_text | `string` | The text to display in the action button |
| \$link_href | `string` | The URL to direct useres to |
| Returns | `Form\OptionsField` | `$this`, the Field object to help in chaining |

### `withOutNoResults()`

Will remove the set no results details

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\OptionsField` | `$this`, the Field object to help in chaining |

### `setChoices($value)`

A simple key=>value array pair to populate options (`choices`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$choices | `array` | The array of options. |
| Returns | `Form\OptionsField` | `$this`, the Field object to help in chaining |

### `getChoices()`

The value to use on the Field (`choices`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `mixed` | The set choices |

### `setEncode($encode)`

Whether to format text so that it can be safely placed in a form field in the event it has HTML tags (`encode`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$encode | `boolean` | Whether the Field is encoded |
| Returns | `Form\OptionsField` | `$this`, the Field object to help in chaining |

### `getEncode()`

Whether this Field is encoded (`encode`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | Whether the Field is encoded |

### `setDisabledChoices($disabled_choices)`

A list of keys used in the options array to prevent selection	 (`disabled_choices`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$disabled_choices | `array` | The array of options to disable. |
| Returns | `Form\OptionsField` | `$this`, the Field object to help in chaining |

### `getDisabledChoices()`

The set disabled choices (`disabled_choices`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `mixed` | The set disabled choices |

### `setEmptyText($disabled_choices)`

The text to display if there are no options (`empty_text`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$empty_text | `string` | The text to display. |
| Returns | `Form\OptionsField` | `$this`, the Field object to help in chaining |

### `getEmptyText()`

The set text to display (`empty_text`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The set text (`null` if not set) |