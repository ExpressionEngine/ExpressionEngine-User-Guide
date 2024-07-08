<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Field Tag

[TOC]

## Overview

`{exp:channel:field}` tag allows displaying properties of [channel field](control-panel/field-manager/edit-field.md) irrespective of the context.

    {exp:channel:field field_name="department"}
        <div>
            <p>Choose <b>{field_label}</b>:</p>
            {field_options}
                <p><span class="value">{value}</span>: <span class="label">{label}</span></p>
            {/field_options}
        </div>
    {/exp:channel:field}

## Parameters

### `field_id=`

    field_id="2"

Specify field ID. It is required to have either field_id or field_name parameter. If both are specified, field_id will be used.

### `field_name=`

    field_name="body"

Specify field name. It is required to have either field_id or field_name parameter.

### `site_id=`

    site_id="2"

By default, the tag is looking for fields that are set up for current MSM site. If you need to display properties of field that belongs to other MSM site, you need to specify site_id parameter.


## Variables

[TOC=3]

### `{field_id}`

Field ID

### `{field_name}`

Field name

### `{field_label}`

Field label

### `{field_instructions}`

Field instructions for the CP

### `{field_type}`

Field type

### `{field_options}`

Tag pair that contains possible field options. It is used for fields like Radio Buttons, Checkboxes, Select Dropdown, etc.

Inside the tag pair you can use `{value}` and `{label}` variables:

    {field_options}
        {value} / {label}
    {/field_options}