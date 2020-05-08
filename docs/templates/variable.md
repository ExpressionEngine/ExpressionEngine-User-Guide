<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Variables

**Control Panel Location:** `Developer --> Templates --> Template Variables`

Custom, user-defined template variables can be created for use in any Template.

Template variables can hold any **static** information. These variables can be useful for things like site header, footers, copyright notices, etc. Since these variables can go in any template it makes the information very portable and simple to update.

Once you've created a variable you can use it in any template simply by surrounding the variable name with curly braces. For example, if you create a variable called "copyright", you'll use it in your template this way:

    {copyright}

**Important:** You cannot give a template variable the same name as an existing variable. This includes variables native to ExpressionEngine such as other Global Variables. Please see the list of [Reserved Words](general/reserved-words.md) for details.

## Template Variable vs. Template Partial

In both cases, ExpressionEngine is simply swapping out a tag with the contents of that tag. However, there is a big difference in **when** that swap takes place,

Template variables are one of the last tags on the template that are parsed, so they are great for static content, meaning content that does not contain other tags.

Template partials are one of the first tags parsed, so if you want to put other tags in a Template partial, those tags will still be seen and parsed just fine.

For instance, if you wanted to store a channel name in a tag called "tp_special_channel" and use it as a parameter in a channel entry tag, you would want to use a Template partial:

    {exp:channel:entries channel="{tp_special_channel}" limit="10"}

The tag would use the value of the Template partial "tp_special_channel" as the value of that channel parameter.

If you used a Template variable "tv_special_channel" instead, the channel entry tag would would look for a channel with the short name "{tv_special_channel}".
