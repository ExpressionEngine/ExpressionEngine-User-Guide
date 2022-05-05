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

{{embed:fieldtypes/_fieldtype-settings.md}}

{{embed:fieldtypes/_slider_field_settings.md}}

## Template Tags

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

#### `{my_range_slider_field:from}`

First range slider value. 

#### `{my_range_slider_field:to}`

Second range slider value.

Additionally, `:min`, `:max`, `:prefix` and `:suffix` modifiers can be used
