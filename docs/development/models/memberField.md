---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# MemberField Model

**class `ExpressionEngine\Model\member\memberField`**

[TOC]

## Properties

### Required:
#### m_field_name Required
#### m_field_label Required
#### m_field_type Required

### Optional:
#### m_field_id
#### m_field_description
#### m_field_list_items
#### m_field_ta_rows
#### m_field_maxl
#### m_field_width
#### m_field_search
#### m_field_required
#### m_field_public
#### m_field_reg
#### m_field_cp_reg
#### m_field_fmt
#### m_field_show_fmt
#### m_field_exclude_from_anon
#### m_field_order
#### m_field_text_direction
#### m_field_settings
#### m_legacy_field_data

## Relationships

No Relationships.

## Methods

#### `getSettingsValues`

Returns the member field's settings.

#### `getValues`

Returns an array of field values for the member.

#### `getStructure`

A link back to the Structure object that defines this Content's structure.

#### `getContentType`

Returns the content type `member`.

#### `getDataTable`

Returns the name of the table, `member_data`.

#### `getColumnPrefix`

Returns the prefix for member fields, `m_`.

## Examples:

#### Get All Custom Member Fields
`
$all_member_fields = ee('Model')
        ->get('MemberField')
        ->fields('m_field_label','m_field_id')
        ->all()
        ->getDictionary('m_field_id', 'm_field_label');

// Example return: [4 => 'My Field Name']
` 

#### Create a member field:
`
$new_field = ee('Model')->make('MemberField');
$new_field->m_field_type        = 'text';
$new_field->m_field_label       = 'My Member Field';
$new_field->m_field_name        = 'my_member_field';
$new_field->m_field_description = 'A custom member field example';
$new_field->m_field_settings    = array();
$new_field->m_field_show_fmt    = 'n';
$new_field->save(); 
$field_id = $new_field->m_field_id;
`                           