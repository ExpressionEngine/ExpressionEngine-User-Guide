<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Form Buttons

[TOC]

Every Form defaults to rendering 2 buttons for submission (one at top and one at the bottom of the form). You can customize them completely though using the `Button` object.  

## Usage

To add custom buttons to your Form:

```
$form = ee('CP/Form');
$button = $form->getButton('button_1');
$button->setType('submit')->setText('Submit Button')
    ->setWorking('Submitting...');
```

## API Reference

**class `ExpressionEngine\Library\CP\Form\Button`**

[TOC=3]

### `getName()`

Returns the name used upon creation for the Button and the id. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `string` | The raw value used |

### `toArray()`

Returns the entire `CP\Form\Button` object into an array. 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `array` | The Button as an array |

### `setShortcut($shortcut)`

Sets the `data-shortcut` attribute on the Button

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$title | `shortcut` | The value to use for the `data-shortcut` parameter|
| Returns | `Form\Button` | `$this`, the Button Set object to help in chaining |

### `getShortcut()`

Returns the `data-shortcut` attribute on the Button

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setAttrs($attrs)`

Any custom input parameters you want to attach to your button (`attrs`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$attrs | `string` | The attributes. Note they have to be in the form ' param="X" param2="y" ' |
| Returns | `Form\Button` | `$this`, the Button object to help in chaining |

### `getAttrs()`

Returns the attributes string (`attrs`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setType($type)`

The type of button to render. Either `button`, `reset`,  or `submit`; defaults to `button`. (`type`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$attrs | `string` | The type of button' |
| Returns | `Form\Button` | `$this`, the Button object to help in chaining |

### `getType()`

Returns the button type (`type`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setValue($value)`

The value to use for the "value" parameter (`value`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$value | `mixed` | What you want to use. |
| Returns | `Form\Button` | `$this`, the Button object to help in chaining |

### `getValue()`

The value to use on the Field (`value`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `mixed` | The set value |

### `setClass($class)`

The class property to apply to the Button (`class`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$class | `string` | The value to use for the `class` parameter |
| Returns | `Form\Button` | `$this`, the Button object to help in chaining |

### `getClass()`

Returns the class property (`class`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setText($text)`

A language file compatible key to render a single line of text for your Button (`text`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$text | `string` | The value to use |
| Returns | `Form\Button` | `$this`, the Button object to help in chaining |

### `getText()`

Returns the set value (`text`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setHtml($html)`

A raw HTML string placed within the Button (`html`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$html | `string` | The value to use |
| Returns | `Form\Button` | `$this`, the Button object to help in chaining |

### `getHtml()`

Returns the set value (`text`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |

### `setWorking($working)`

A language compatible string used when button is pressed (`html`). 

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| \$working | `string` | The value to use |
| Returns | `Form\Button` | `$this`, the Button object to help in chaining |

### `getWorking()`

Returns the set value (`text`)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| Returns | `null` or `string` | The value to use |