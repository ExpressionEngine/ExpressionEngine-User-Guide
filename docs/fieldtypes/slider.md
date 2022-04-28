<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Value Slider and Range Slider Fieldtypes

The Value Slider fieldtype allows the user to select numerical value. It is rendered as `range` HTML input type with some additional styling, allowing users to precisely select the value.   

The Range Slider fieldtype shows two sliders on the same scale, allowing to select a range of numbers (from...to).

![slider field](_images/field_slider.png)

<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/zPyPAmVQLNQ?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

## Field Settings

### Minimum value

The minimal value/number field can contain.

### Maximum value

The maximum value/number field can contain.

### Step

The step to increase/decrease the value when clicking arrow buttons in the field.

### Prefix

The prefix to be shown before the number

### Suffix

The prefix to be shown before the number

### Allowed Content

Restricts the field to certain data types. Changing this also changes the column type in database. This setting is only for Value Slider, because Range Slider has two values and is stored as string.

## Template Tags

### Value Slider

#### `{my_value_slider_field}`

**Parameters:**

`decimal_place="2"`
The number of decimal digits to show after the number

`prefix="yes"`
Include prefix before the value, as specified in field settings

`suffix="yes"`

#### `{my_value_slider_field:min}`

Field minimal possible value, as specified in settings.

#### `{my_value_slider_field:max}`

Field maximal possible value, as specified in settings.

#### `{my_value_slider_field:prefix}`

Field prefix, as specified in settings.

#### `{my_value_slider_field:suffix}`

Field suffix, as specified in settings.



### Range Slider

The Range Slider can be rendered as a single template tag as well as tag pair.

#### Single tag

`{my_range_slider_field}`

The output would be similar to 
```
12 &mdash; 43
```
The same parameters can be applied that exist for Value Slider fieldtype.

#### Tag pair

```
{my_range_slider_field}
between {from} and {to}
{/my_range_slider_field}
```

The output would be similar to 
```
between 12 and 43
```
The same parameters can be applied that exist for Value Slider fieldtype.

#### `{my_value_slider_field:from}`

First slider value. 
The same parameters can be applied that exist for Value Slider fieldtype.

#### `{my_value_slider_field:to}`

Second slider value. 
The same parameters can be applied that exist for Value Slider fieldtype.

Additionally, `:min`, `:max`, `:prefix` and `:suffix` modifiers can be used same way as for Value Slider fieldtype.
