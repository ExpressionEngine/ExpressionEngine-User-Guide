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

# Template Model

**class `ExpressionEngine\Model\FileSyncedModel\Template`**

[TOC]

## Properties

### Required

- `site_id`
- `group_id`
- `template_name`
- `template_type`

### Optional

- `template_id` Key
- `template_data`
- `template_notes`
- `edit_date`
- `last_author_id`
- `cache`
- `refresh`
- `no_auth_bounce`
- `enable_http_auth`
- `allow_php`
- `php_parse_location`
- `hits`
- `protect_javascript`

## Relationships

- `Site`
- `TemplateGroup`
- `LastAuthor`
- `Roles`
- `TemplateRoute`
- `DeveloperLogItems`
- `Versions`

## Methods

### `getPath`

Returns the `group name/template name` path.

### `getFilePath`

Returns the full server path.

### `getModificationTime`

Returns the edit date of the template.

### `setModificationTime`

### `getFileExtension`

Returns the template's file extension, such as `html` `css` or `js`.

### `saveNewTemplateRevision`

Saves the template as a revision.

### `validateTemplateName`

Returns `true` if the template name is not a reserved name.

## Events

- `beforeInsert`
- `afterSave`

## Examples

#### Get a Template

```php
$template = ee('Model')->get('Template')->filter('template_id', 6)->first();
```

#### Modify the Template Data

```php
// Get the template object.
$template = ee('Model')->get('Template')->filter('template_id', 6)->first();

// Add the template code (html, EE tags...etc)
$template->template_data = "<html>....</html>";

// Validate and Save the template.
$result = $template->validate();

if ($result->isValid())
{
  $template->save();
}
```

#### Create a new Template and add to a template group

```php
// Make a new template object.
$template = ee('Model')->make('Template');

// Add the required fields.
$template->site_id       = ee()->config->item('site_id');
$template->group_id      = 1; // Must be an existing group.
$template->template_name = 'My New Template';
$template->template_type = 'webpage';

// Validate and Save the new template.
$result = $template->validate();

if ($result->isValid())
{
  $template->save();
}
```

#### Restrict a Template to Members

```php
// Get the template object.
$template = ee('Model')->get('Template')->filter('template_id', 6)->first();

// Assign the Role Models.
$template->Roles = ee('Model')->get('Role', array(5))->all();

// Validate and Save the new template.
$result = $template->validate();

if ($result->isValid())
{
  $template->save();
}
```
