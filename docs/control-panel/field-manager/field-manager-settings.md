<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Field Manager

**Control Panel Location: `Developer > Fields`**

[TOC]

This section of the Control Panel is where custom fields are created, edited and deleted.

![](_images/cp-field-manager.png)

Tip: How to Find Where a Field Is Used
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/vXbm9aoOQXU?si=VoUJjU-9gvsNKHT7" title="How to Determine Where Channel Fields are Used in ExpressionEngine" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

## Create/Edit Field

**Control Panel Location: `Developer > Fields > New/Edit Field`**


This section of the control panel allows you to create and edit [Fields](/fieldtypes/overview.md) to be used in channel entries.

Visit the [**Create/Edit Field**](control-panel/field-manager/edit-field.md) page for detailed information.


## Create/Edit Field Group

**Control Panel Location: `Developer > Fields > Field Groups > New/Edit Field Group`**

This section allows you to create and edit field groups. Field Groups are collections of fields which can then be related to one or more [Channels](control-panel/channels.md#fields-tab) as well as used in [Fluid fields](fieldtypes/fluid.md).

The field group details and assigned fields can be edited by clicking pencil icon next to field group name.

Tip: An Overlooked Way to Order Fields
<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/V19lwKciDDU?si=kbmd8xvwT2YjlZb0" title="An Overlooked Way to Order Fields" width="1920" height="1080" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>


Clicking on the group name will show the list of fields assigned to this group.

Fields groups have following properties:

- **Name** -- Name of field group displayed in Control Panel
- **Short Name** -- The short name of field group, used in Fluid fields when looping through the group's fields
- **Description** -- Description of field group
- **Fields** -- The fields can be reordered by drag and drop, and the fields order will be respected on [Entry Publish page](control-panel/create.md) (unless [Publish Layouts](control-panel/channels.md#publish-layouts) are used) as well as in [Fluid field custom field groups](fieldtypes/fluid.md#custom-field-groups).