<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# CP/Form Service

[TOC]

The CP/Form Service allows for the creation of Shared Form View data using an object oriented interface. 


## Usage

The below shows The CP/Form Service at its simplest; every form can contain multiple groups, which can contain multiple field sets, which can contain multiple fields.

### Basic 
```
$form = ee('CP/Form');
$field_group = $form->getGroup('General Settings');

$field_set = $field_group->getFieldSet('First Name');
$field_set->getField('first_name', 'text');

$field_set = $field_group->getFieldSet('Last Name');
$field_set->getField('last_name', 'text');

$form->toArray();
```

### Form Options
```
$form = ee('CP/Form');
$form->setCpPageTitle('My Custom Form')
    ->asFileUpload()
    ->asTab()
    ->addAlert('custom_alert');

$field_group = $form->getGroup('General Settings');

$field_set = $field_group->getFieldSet('First Name');
$field_set->getField('first_name', 'text');

$field_set = $field_group->getFieldSet('Last Name');
$field_set->getField('last_name', 'text');

$form->toArray();
```
## API Reference

**class `ExpressionEngine\Library\CP\Form`**

This object contains the complete outline for your Shared Form View array. For simple forms, all you'll have to do is call the Service using EE's loader, but for more complex Forms, you have quite a few options available. 

[TOC=3]

### `asTab()`

Will output the Form object as a Tabbed format array form. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `isTab()`

Determines if the Form is setup to be rendered as a Tabbed form

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | Whether the form is to be rendered as tabbed |

### `asHeading()`

Will output the Form object as a linear array form (the default)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `getGroup($group_name)`

Will return the Field Group if it exists, or prepare and return a new Field Group. See [`Field Groups`](development/services/cp-form/group.md)  for more details.


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$group_name | `string` | The name for the Form Group |
| Returns | `Form\Group` | A Form Group object ready for use |

### `removeGroup($group_name)`

Removes the specified group from the Form object

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$group_name | `string` | The name for the Form Group |
| Returns | `boolean` | On fail or success |

### `toArray()`

Returns the entire CP\Form object into an array compatible with the Shared Form View layer. Note that all child elements are converted to an array as well.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` | The complete Shared Form View array |

### `render()`

Returns the entire CP\Form object as a string for use within the Control Panel.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The Form object as a string |

### `asFileUpload()`

Sets the Shared Form View layer to set the form input's `enctype` to multipart/form-data

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `addAlert($alert_name)`

Sets the Form to render specific CP/Alert objects

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$alert_name | `string` | The name for the Alert |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `removeAlert($alert_name)`

Removes the specified group from the Form object

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$alert_name | `string` | The name for the Alert you want to remove |
| Returns | `boolean` | On fail or success |

### `getButton($name)`

Will return the specified `Form\Button` object if it exists, or prepare and return a new Button object. See [`Buttons`](development/services/cp-form/buttons.md)  for more details.


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$name | `string` | The name for the Button |
| Returns | `CP\Form\Button` | The Button object ready for use |

### `removeButton($name)`

Removes the specified Button from the Form object

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$name | `string` | The name for the Button you want to remove |
| Returns | `boolean` | On fail or success |

### `getHiddenField($name)`

Will return the specified `Form\Fields\Hidden` object if it exists, or prepare and return a new Field object.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$name | `string` | The name for the Button |
| Returns | `CP\Form\Fields\Hidden` | The Hidden Field object |

### `removeHiddenField($name)`

Removes the specified Hidden Field from the Form object

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$name | `string` | The name for the Hidden Field you want to remove |
| Returns | `boolean` | On fail or success |

### `withActionButton($text, $href, $rel = '')`

Will include a custom HTML button with a link in lieu of the top right button of your form.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The value to display on your custom button |
| \$href | `string` | What URL to send the user to |
| \$rel | `string` | For HTML directives |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `withOutActionButton()`

Will remove the set action button

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `setCpPageTitle($text)`

Sets the string to use for the Page Title within the Control Panel

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The name for the page |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `getCpPageTitle()`

Returns the Page title being used

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setCpPageTitleAlt($text)`

Sets the string to use for the Alternative Page Title within the Control Panel (`cp_page_title_alt`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The name for the page |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `getCpPageTitle()`

Returns the Alternative Page title being used (`cp_page_title_alt`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setAlertsName($text)`

Sets the internal Alerts ID to use specific to this Form (`alerts_name`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The name for the page |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `getAlertsName()`

Returns the internal Alerts ID to use specific to this Form (`alerts_name`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setBaseUrl($url)`

The URL to process the Form (`base_url`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$url | `string` | The URL the form should be processed at |
| Returns | `CP\Form` | `$this`, the Form object to help in chaining |

### `getBaseUrl()`

Returns the URL (`base_url`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

## A Complete Example

The below includes as many examples and should copy/paste into your project

```
$form = ee('CP/Form');
$form->asTab();
$form->asFileUpload();
$field_group = $form->getGroup('General Settings');
$field_set = $field_group->getFieldSet('First Name');
$field_set->getField('first_name', 'text')
    ->setDisabled(true)
    ->setValue('Eric');

$field_set = $field_group->getFieldSet('Last Name')->withButton('Click Me');
$field_set->getField('last_name', 'text')
    ->setPlaceholder('Last Name')
    ->setRequired(true);
$form->setCpPageTitle('Hello!');

$field_group = $form->getGroup('Custom Input Example');
$field_set = $field_group->getFieldSet('email');
$field_set->getField('email', 'email')
    ->setPlaceholder('Your Email Address')
    ->setValue('eric@mithra62.com')
    ->setRequired(true);

$field_set = $field_group->getFieldSet('color');
$field_set->getField('color', 'color')->setValue('#C86565');

$field_set = $field_group->getFieldSet('number');
$field_set->getField('number', 'number')->params(['min' => 100, 'max' => 1000])->setRequired(true);

$field_group = $form->getGroup('Contact details');
$field_set = $field_group->getFieldSet('Address');
$field_set->getField('address1', 'text');
$field_set->getField('address2', 'action_button')->setText('Hello');
$field_set->getField('state', 'dropdown')->withNoResults('Nothing Here', 'fdsa', 'fdsa');

$form->withActionButton('My Action Button', 'https://google.com');
$button = $form->getButton('button_1');
$button->setType('submit')->setText('Submit Button')->setWorking('Submitting...');

$form->getButton('button_2');
$form->removeButton('button_2');

$hidden_field = $form->getHiddenField('my_hidden_field');
$hidden_field->setValue('my_value');

$field_group = $form->getGroup('Table Example');
$field_set = $field_group->getFieldSet('My Table Data');
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

$field_group = $form->getGroup('Filepicker Example');
$field_set = $field_group->getFieldSet('My Filepicker');
$file_picker = $field_set->getField('my_file_picker', 'file-picker');
$file_picker->asImage()->withDir(7)->setValue('{filedir_7}path.jpg');

$field_group = $form->getGroup('Grid Example');
$field_set = $field_group->getFieldSet('My Grid')->withGrid();
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

$vars = $form->toArray();**

```