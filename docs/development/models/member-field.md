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

# Member Field Model

**class `ExpressionEngine\Model\member\memberField`**

[TOC]

## Properties

### Required

- `m_field_name`
- `m_field_label`
- `m_field_type`

### Optional

- `m_field_id` Key
- `m_field_description`
- `m_field_list_items`
- `m_field_ta_rows`
- `m_field_maxl`
- `m_field_width`
- `m_field_search`
- `m_field_required`
- `m_field_public`
- `m_field_reg`
- `m_field_cp_reg`
- `m_field_fmt`
- `m_field_show_fmt`
- `m_field_exclude_from_anon boolString`
- `m_field_order`
- `m_field_text_direction`
- `m_field_settings json`
- `m_legacy_field_data boolString`

## Relationships

No Relationships.

## Methods

#### `getSettingsValues`

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `array` | Returns the member field's settings. |

#### `getValues`

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `array` | Returns an array of field values for the member. |

#### `getStructure`

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `object` | A link back to the Structure object that defines this Content's structure. |

#### `getContentType`

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `string` | Returns the content type `member`. |

#### `getDataTable`

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `string` | Returns the name of the table, `member_data`. |

#### `getColumnPrefix`

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `string` | Returns the prefix for member fields, `m_`. |

## Events

Saving with this model will trigger the following events:

- `beforeInsert`

## Examples

### Get All Custom Member Fields

```php
$all_member_fields = ee('Model')
        ->get('MemberField')
        ->fields('m_field_label','m_field_id')
        ->all()
        ->getDictionary('m_field_id', 'm_field_label');

// Example return: [4 => 'My Field Name']
```

### Create a member field

```php
$new_field = ee('Model')->make('MemberField');
$new_field->m_field_type        = 'text';
$new_field->m_field_label       = 'My Member Field';
$new_field->m_field_name        = 'my_member_field';
$new_field->m_field_description = 'A custom member field example';
$new_field->m_field_settings    = array();
$new_field->m_field_show_fmt    = 'n';

// Validate and Save.
$result = $new_field->validate();

if ($result->isValid())
{
  $new_field->save();
}

// The field ID is now available.
$field_id = $new_field->m_field_id;
```

### Accessing a custom member field from a member model instance by member field ID

Please note, this is the way to access custom member fields. To access built-in member fields, see below.

```php
$member_id = 3;  // Example member ID
$field_column_name = 'm_field_id_1';  // Based on the field ID being 1

$member = ee('Model')->get('Member', $member_id)->first();
echo $member->$field_column_name;
```

### Accessing a custom member field from a member model instance by member field short name

Please note, this is the way to access custom member fields. To access built-in member fields, see below.

```php
$member_id = 3;  // Example member ID

// Based on the member field short name being `first_name`
$field = ee('Model')->get('MemberField')->filter('m_field_name', 'first_name')->first();
$field_column_name = 'm_field_id_'.$field->m_field_id;

$member = ee('Model')->get('Member', $member_id)->first();
echo $member->$field_column_name;
```


### Accessing built-in member fields from a member model instance

```php
$member_id = 3;  // Example member ID

$member = ee('Model')->get('Member', $member_id)->first();
echo $member->screen_name;
```
