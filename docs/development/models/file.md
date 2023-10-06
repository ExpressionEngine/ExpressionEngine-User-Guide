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

# File Model

**class `ExpressionEngine\Model\File\File`**

[TOC]

## Properties

- `file_id` Key
- `site_id`
- `title`
- `upload_location_id`
- `mime_type`
- `file_name`
- `file_size`
- `description`
- `credit`
- `location`
- `uploaded_by_member_id`
- `upload_date`
- `modified_by_member_id`
- `modified_date`
- `file_hw_original`

## Relationships

#### `UploadDestination`

The location the file is uploaded to.

#### `UploadAuthor`

The user who uploaded the file.

#### `ModifyAuthor`

The last user to modify the file.

#### `Categories`

Selected categories the file has.

#### `Site`

The site the file is apart of.

## Methods

- `isImage`
- `isEditableImage`
- `isSVG`
- `getAbsolutePath`
- `getAbsoluteThumbnailPath`
- `getAbsoluteURL`
- `getAbsoluteThumbnailURL`
- `memberHasAccess`
- `exists`
- `isWritable`
- `setCategoriesFromPost`

## Events

- `beforeDelete`

## Examples

### Get a File

```php
$file = ee('Model')->get('File', 4)->first();
```
