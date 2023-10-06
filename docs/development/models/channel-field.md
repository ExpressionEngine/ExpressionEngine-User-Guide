---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2022, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Channel Field Model

**class `ExpressionEngine\Model\Channel\ChannelField`**

[TOC]

## Properties

### Required

- `site_id`
- `field_name`
- `field_label`
- `field_type`
- `field_list_items` (can be empty)
- `field_order`

### Optional

- `field_id` Key
- `field_instructions`
- `field_pre_populate`
- `field_pre_channel_id`
- `field_pre_field_id`
- `field_ta_rows`
- `field_maxl`
- `field_required`
- `field_text_direction`
- `field_search`
- `field_is_hidden`
- `field_fmt`
- `field_show_fmt`
- `field_content_type`
- `field_settings`
- `legacy_field_data`

## Relationships

- `ChannelFieldGroups`
- `Channels`
- `SearchExcerpts`

## Methods

- `getStructure`
- `getDataTable`
- `getContentType`
- `getSettingsValues`
- `getAllChannels`
- `validateNameIsNotReserved`
- `validateIsCompatibleWithPreviousValue`

## Events

- `beforeInsert'`
- `afterInsert'`
- `beforeDelete'`

## Examples

### Get a Channel Field

Field #4 is the "About Images" field in the sample installation.

```php
ee('Model')->get('ChannelField', 4)->first();
```

### Change a field name

```php
// Get the field object.  #4 is the About Images field.
$field = ee('Model')->get('ChannelField', 4)->first();

// Change the title using the parameter.
$field->field_name = 'new_field_name';

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}
```

### Get the Channels the Field is used in

Note that this only finds channels where fields were assigned individually and not when included within a field group.

```php
// Get the field object.  #4 is the About Images field.
$field = ee('Model')->get('ChannelField', 4)->first();

// Get the Channel's object using the Channel relationship.
$channels = $field->Channels;

// Returns an array of channel IDs.
$channel_ids = $channels->pluck('channel_id');

// As one line:
 $channel_ids = ee('Model')->get('ChannelField', 4)->first()->Channels->pluck('channel_id');
```

### Create a Basic New Field

```php
$field = ee('Model')->make('ChannelField');

// Set required fields.
$field->site_id     = ee()->config->item('site_id');
$field->field_name  = 'my_field_name';
$field->field_label = 'Field Label';
$field->field_type  = 'text';
$field->field_list_items  = '';
$field->field_order = 1;

// Set field-specific settings
$settings = $field->getSettingsValues();
$settings['field_settings']['field_show_file_selector'] = 'y';
$field->setProperty('field_settings', $settings['field_settings']);

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}

// Field ID is now available.
$field->field_id;
```

Field types `Relationships`, `Grid` and `Fluid` require additional steps. Their data will be `NULL`.

### Add Field to a Field Group

```php
// Get an existing field.
$field = ee('Model')->get('ChannelField', 4)->first();

// Add the field groups by ID.  Note the plural differences. This overwrites any existing assigments.
$field->ChannelFieldGroups = ee('Model')->get('ChannelFieldGroup', array(1,2))->all();

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}
```
