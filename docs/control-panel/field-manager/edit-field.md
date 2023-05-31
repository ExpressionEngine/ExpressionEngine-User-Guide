<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Create/Edit Field

**Control Panel Location: `Developer > Fields > New/Edit Field`**

This section of the control panel allows you to create and edit [Fields](/fieldtypes/overview.md) to be used in channel entries.

New field can be added by clicking "New Field" button, or by picking "Clone to New Field" from the existing field's "Save" dropdown - in that case, the original field will serve as "template" and the changes would be applied to new field only.

If you are viewing certain field group when clicking "New Field" button, the field will be assigned to that group. The existing fields can be assigned to multiple field groups by editing the Field Group.

Fields have the following settings:

- **Type** -- The type of field. [List of available fieldtypes](fieldtypes/overview.md).
- **Name** -- The descriptive name for the field which is displayed in the publish form. Unlike the Short Name, the Name (you can think of it as a label) does not need to be unique within the system, so you can use the same name on multiple fields in different field groups.
- **Short Name** -- This is the internal or "short name" for the field. The field name must be unique within the system, which means that you cannot have two field groups each containing a field with the field name of "body". The short name is typically used as the variable name in your [Channel Entries Tag](channels/entries.md)
- **Instructions** -- These are instructions for authors on how or what to enter into the field when submitting an entry. The instructions will appear below the Field Label in your publish page.
- **Require field?** -- If the field is required and the user leaves it blank, upon submission they will receive an error message prompting them to correct it. Required fields are only required when not [conditionally hidden](control-panel/field-manager/conditional-fields.md).
- **Include in search?** -- This determines whether the contents of this field will be included in searches that are within the entry content.
- **Hide field?** -- Shows or hides the field on the publish page. When hidden, the field will be collapsed by default.
- **Enable front-end editing?** -- Enable/disable [frontedit](/advanced-usage/front-end/frontend.md) links for this field.
- **Make Conditional?** -- Shows or hides the field on the publish page based on [conditional settings](control-panel/field-manager/conditional-fields.md). Fields which are conditionally hidden are not shown at all on the publish page until conditions are met.
- **Channels** -- Read-only list of [channels](control-panel/channels.md) this field is assigned to. The field can be assigned to channel in several ways:
    - By editing channel and assigning field directly
    - By editing channel and assigning field group, which in turn has been edited and assigned this field
    - When a field is used in [Fluid field](fieldtypes/fluid.md) which is assigned to a channel, the field is also assigned to the channel (though not available outside of Fluid)

- **Field Options** -- Each fieldtype may have additional options. See the [individual field types](fieldtypes/overview.md) for details.

![](_images/cp_fields_edit.png)