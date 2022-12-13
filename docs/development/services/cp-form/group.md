<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Field Groups

[TOC]

Every Form consists of Field Groups that contain Field Sets. The below covers everything about Field Groups and how they work with Field Sets. 

## Usage

When working with Field Groups, you'll always request it from the [`Cp\form`](development/services/cp-form.md) object to request it, initially. Once you have a Field Group, you'll decorate it like everything else. For example:

```
$form = ee('CP/Form');
$field_group = $form->getGroup('General Settings');
```

In the above, `$field_group` will contain our Field object. Once we have it, we can start adding Field Sets to it and really craft our Form. 

```
$field_set = $field_group->getFieldSet('First Name');
```

TIP: If your Form object is set to be a Tabbed form, it's the Groups that make up the Tab layer

## API Reference

**class `ExpressionEngine\Library\Cp\Form\Group`**

The Group object consists of only a couple methods of use. 

[TOC=3]

### `getName()`

Returns the name used upon creation for the Field Group. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The raw value used |

### `toArray()`

Returns the entire `Cp\Form\Group` object into an array. Note that all child elements are converted to an array as well.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` | The Group as an array |

### `getFieldSet($name)`

Will return the Field Group if it exists, or prepare and return a new Field Group. See [`Field Sets`](development/services/cp-form/field-sets.md)  for more details.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$name | `string` | The name for the Field Set |
| Returns | `Form\Set` | A Field Set object ready for use |

### `removeFieldSet($name)`

Removes the specified Field Set from the Form Group

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The name used for the Field Set |