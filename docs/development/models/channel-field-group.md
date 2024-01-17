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

# Channel Field Group Model

**class `ExpressionEngine\Model\Channel\ChannelFieldGroup`**

[TOC]

## Properties

### Required

- `site_id`
- `group_name`

### Optional

- `group_id` Key

## Relationships

- `ChannelFields`
- `Channels`

## Methods

- `createChannelField`
- `validateName`
- `onAfterUpdate`

## Events

This model has no events.

## Examples

### Get a Channel Field

```php
ee('Model')->get('ChannelFieldGroup', 2)->first();
```

### Change a Field Group Name

```php
$group = ee('Model')->get('ChannelFieldGroup', 2)->first();

$group->group_name = 'A New Group Name';

// Validate and Save.
$result = $group->validate();

if ($result->isValid())
{
  $group->save();
}
```

### Create a Field Group

```php
$group = ee('Model')->make('ChannelFieldGroup');

// Set Required Fields
$group->site_id     = ee()->config->item('site_id');
$group->group_name  = 'A New Group';

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}
```

### Add Fields to Group

```php
$group = ee('Model')->get('ChannelFieldGroup', 2)->first();

// Get the Field Objects.  Note the plural differences.
$group->ChannelFields = ee('Model')->get('ChannelField', array(4,5,6))->all();

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}
```

### Assign a group to a Channel

```php
// Get the Field Group object.
$group = ee('Model')->get('ChannelFieldGroup', 2)->first();

// Get the Channel object for each channel and assign using the Relationship.
$group->Channels = ee('Model')->get('Channel', array(2))->all();

// Validate and Save.
$result = $field->validate();

if ($result->isValid())
{
  $field->save();
}
```
