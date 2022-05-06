<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Value Slider

The Value Slider fieldtype allows the user to select a numerical value. It is rendered as `range` HTML input type with some additional styling, allowing users to precisely select the value.   

![value field](_images/cp-fieldtype-value-slider.png)

<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/zPyPAmVQLNQ?vq=HD1080" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

## Field Settings

{{embed:fieldtypes/_fieldtype-settings.md}}

{{embed:fieldtypes/_slider_field_settings.md}}

## Template Tags

The Value Slider can only be rendered as a single template tag.

### Single tag

`{my_value_slider_field}`

#### Single Tag Parameters:

`decimal_place="2"`
The number of decimal digits to show after the number

`prefix="yes"`
Include prefix before the value, as specified in field settings

`suffix="yes"`

#### Single Tag Modifiers

##### `{my_value_slider_field:min}`

Field minimal possible value, as specified in settings.

##### `{my_value_slider_field:max}`

Field maximal possible value, as specified in settings.

##### `{my_value_slider_field:prefix}`

Field prefix, as specified in settings.

##### `{my_value_slider_field:suffix}`

Field suffix, as specified in settings.