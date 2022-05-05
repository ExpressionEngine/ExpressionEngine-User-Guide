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

## Create/Edit Field

**Control Panel Location: `Developer > Fields > New/Edit Field`**

This section of the control panel allows you to create and edit [Fields](/fieldtypes/overview.md) and Field Groups.

Fields have the following settings:

- **Type** -- The type of field. [List of available fieldtypes](fieldtypes/overview.md).
- **Name** -- The descriptive name for the field which is displayed in the publish form. Unlike the Field Name, the label does not need to be unique within the system, so you can use the same label on multiple fields in different field groups.
- **Short Name** -- This is the internal or "short name" for the field. The field name must be unique within the system, which means that you cannot have two field groups each containing a field with the field name of "body". The short name is typically used as the variable name in your [Channel Entries Tag](channels/entries.md)
- **Instructions** -- These are instructions for authors on how or what to enter into the field when submitting an entry. The instructions will appear below the Field Label in your publish page.
- **Require field?** -- If the field is required and the user leaves it blank, upon submission they will receive an error message prompting them to correct it. Required fields are only required when not [conditionally hidden](control-panel/field-manager/conditional-fields.md).
- **Include in search?** -- This determines whether the contents of this field will be included in searches that are within the entry content.
- **Hide field?** -- Shows or hides the field on the publish page. When hidden, the field will be collapsed by default.
- **Make Conditional?** -- Shows or hides the field on the publish page based on [conditional settings](control-panel/field-manager/conditional-fields.md). Fields which are conditionally hidden are not shown at all on the publish page until conditions are met.
- **Enable front-end editing?** -- If [ExpressionEngine Pro](pro/overview.md) is installed this setting will enable/disable frontedit links for this field. This field will not show at all if Pro is not installed.
- **Field Options** -- Each fieldtype may have additional options. See the [individual field types](fieldtypes/overview.md) for details.

## Create/Edit Field Group

**Control Panel Location: `Developer > Fields > Field Groups > New/Edit Field Group`**

This section allows you to create and edit field groups. Field Groups are collections of fields which can then be related to one or more [Channels](control-panel/channels.html#fields-tab).