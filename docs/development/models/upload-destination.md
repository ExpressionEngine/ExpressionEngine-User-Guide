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

# Upload Destination Model

**class `ExpressionEngine\Model\File\UploadDestination`**

[TOC]

## Properties

### Required

- `name`
- `server_path`
- `url`

### Optional

- `id` Key
- `site_id`
- `allowed_types`
- `default_modal_view`
- `max_size`
- `max_height`
- `max_width`
- `properties`
- `pre_format`
- `post_format`
- `file_properties`
- `file_pre_format`
- `file_post_format`
- `cat_group`
- `batch_location`
- `module_id`

## Relationships

#### `UploadDestination`

The location the file is uploaded to.

#### `Roles`

The roles that have access to the upload destination.

#### `Module`

Modules that have access to the upload destination.

#### `Files`

Files in the upload destination.

#### `FileDimensions`

Resize dimensions for images.

#### `Site`

The site the destination is apart of.

## Methods

- `parseConfigVars`
- `fetchOverride`
- `getProperty`
- `getConfigOverriddenProperty`
- `hasOverride`
- `validateUrl`
- `getFilesystem`
- `memberHasAccess`
- `exists`
- `isWritable`

## Events

This model has no events.
