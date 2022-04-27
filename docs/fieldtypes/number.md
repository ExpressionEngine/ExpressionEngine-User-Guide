<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Number Input Fieldtype

Number Input is a single-lined field where you can enter a number. Its also shows up and down arrows to change the value as provided by HTML `number` input rendered in browser.


![number field](_images/field_number.png)

<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/84i7HlkRxfg?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>


## Field Options

### Minimum value

The minimal value/number field can contain.

### Maximum value

The maximum value/number field can contain.

### Step

The step to increase/decrease the value when clicking arrow buttons in the field.

### Data List items

Values that will be shown as recommended options

### Allowed Content

Restricts the field to certain data types. Changing this is also changing the column type in database.

## Template Tags

### Value Slider

#### `{my_number_field}`

**Parameters:**

`decimal_place="2"`
The number of decimal digits to show after the number. Optional.
