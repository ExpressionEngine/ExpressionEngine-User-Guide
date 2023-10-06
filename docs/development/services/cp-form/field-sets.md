<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Form Field Sets

[TOC]

Every Field Group consists of Field Sets that contain Fields. The below covers everything about Field Sets and how they work with Fields. 

## Usage

When working with Field Sets, you'll always request it from the [Field Group](development/services/cp-form.md) object to request it, initially. Once you have it, you'll decorate it like everything else. For example:

```
$form = ee('CP/Form');
$field_group = $form->getGroup('General Settings');
$field_set = $field_group->getFieldSet('Field Set Name');
```

In the above, `$field_set` will contain our Field Set object. Once we have it, we can start adding Fields to it as well as set the decorators the surround it. 

```
$field = $field_set->getField('first_name', 'text');
```

It's important to note that while Field Sets are built to contain multiple Fields per Set, in most cases you'll find a single Field suffices.

## API Reference

**class `ExpressionEngine\Library\CP\Form\Set`**

[TOC=3]

### `toArray()`

Returns the entire `CP\Form\Set` object into an array. Note that all child elements are converted to an array as well.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` | The Field Set as an array |

### `getField($name, $type = '')`

Will return the Field Group if it exists, or prepare and return a new Field Group. See [`Field`](development/services/cp-form/fields.md) for more details.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$name | `string` | The name for the Field |
| \$type | `string` (optional) | The short name for the input field type you want to use (`text` by default) |
| Returns | `Form\Field` | A Field object ready for use |

### `removeField($name)`

Removes the specified Field Set from the Form Group

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `boolean` | On fail or success |

### `withButton($text, $rel = '', $for = '')`

Adds a single Button to the Field Set. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The value to use for the button |
| \$rel | `string` (optional) | The HTML `rel` attribute value |
| \$for | `string` (optional) | The HTML `for` attribute value |
| Returns | `Form\Set` | A Field Set object to help in chaining |

### `withOutButton()`

Removes the button from the Field Set 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Set` | `$this`, the Field Set object to help in chaining |

### `setTitle($title)`

The Title element to use for your Field Set (`title`). Defaults to the `$name` value if not set.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$title | `string` | The value to use for the `title` parameter|
| Returns | `Form\Set` | `$this`, the Field Set object to help in chaining |

### `getTitle()`

Returns the title (`title`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setDesc($desc)`

The Description element to use for your Field Set (`desc`).

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$desc | `string` | The value to use |
| Returns | `Form\Set` | `$this`, the Field Set object to help in chaining |

### `getDesc()`

Returns the Field Set Description (`desc`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setDescCont($desc_cont)`

The Continued Description element to use for your Field Set (`desc_cont`).

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$desc_cont | `string` | The value to use |
| Returns | `Form\Set` | `$this`, the Field Set object to help in chaining |

### `getDescCont()`

Returns the Field Set Continued Description (`desc_cont`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setExample($example)`

The Continued Description element to use for your Field Set (`example`).

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$example | `string` | The value to use |
| Returns | `Form\Set` | `$this`, the Field Set object to help in chaining |

### `getExample()`

Returns the Field Set Example (`example`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setExample($example)`

The Continued Description element to use for your Field Set (`example`).

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$example | `string` | The value to use |
| Returns | `Form\Set` | `$this`, the Field Set object to help in chaining |

### `getExample()`

Returns the Field Set Example (`example`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `withGrid()`

Sets the Field Set as being used for Grid (there's some magic that has to happen).

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Set` | `$this`, the Field Set object to help in chaining |

### `withoutGrid()`

Will remove the Field Set as being used by Grid.

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `Form\Set` | `$this`, the Field Set object to help in chaining |
