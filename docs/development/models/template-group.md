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

# Template Group Model

**class `ExpressionEngine\Model\Template\TemplateGroup`**

[TOC]

## Properties

### Required

- `group_name`
- `site_id`

### Optional

- `group_id` Key
- `group_order`
- `is_site_default`

## Relationships

#### `Roles`

Roles with access to the group.

#### `Templates`

Templates in the Template Group

#### `Site`

The site the group belongs to.

## Methods

- `ensureFolderExists`
- `getFolderPath`
- `validateTemplateGroupName`
- `validateUnique`

## Events

- `beforeInsert`
- `afterDelete`
- `afterInsert`
- `afterUpdate`
- `afterSave`

## Examples

#### Get a Template Group

```php
$group = ee('Model')->get('TemplateGroup')->filter('group_name', 'about')->first();
```

#### Modify the Group Name

```php
// Get the group object.
$group = ee('Model')->get('TemplateGroup')->filter('group_name', 'about')->first();

// Change the name.
$group->group_name = 'newgroupname';

// Validate and Save the template.
$result = $group->validate();

if ($result->isValid())
{
  $group->save();
}
```

#### Create a New Template Group

```php
// Make a new template object.
$group = ee('Model')->make('TemplateGroup');

// Add the required fields.
$group->group_name = 'mytemplates';
$group->site_id    = ee()->config->item('site_id');

// Validate and Save the template.
$result = $group->validate();

if ($result->isValid())
{
  $group->save();
}
```
