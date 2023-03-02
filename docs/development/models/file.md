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

In ExpressionEngine 7 the `File` model is inheriting `FileSystemEntity` model, which is also parent of `Directory` model. They share same properties and most of the methods; different models are being used when there is need to distinguish between file and subfolder.

We recommend using `FileSystemEntity` when you need everything that is in certain Upload Directory, and use `File` or `Directory` when working specifically with files or folders within Upload Directory. When saving, the exact model (`File` or `Directory`) always needs to be used.

## `FileSystemEntity`

**class `ExpressionEngine\Model\File\FileSystemEntity`**

[TOC]

### Properties

| Name                | Validation           | Type       | Description     |
| ------------------- | -------------------- | ---------- | --------------- |
| `file_id` Key       |                      |            | Primary ID of file or subfolder |
| `site_id`           |                      |            | MSM site ID, default is 1 |
| `title`             | `xss`                |            | Title (can be different from file name, often used for alt text) |
| `upload_location_id`|                      |            | ID of Upload Directory that the file is in |
| `directory_id`      |                      |            | Sobfolder ID, if file is in subfolder |
| `mime_type`         |                      |            | Registered MIME type for the file. |
| `file_type`         |                      |            | File type. The built-in types are Image / Document / Archive / Audio / Video |
| `file_name`         |                      |            | Name of file on filesystem |
| `file_size`         |                      |            | File size |
| `description`       | `xss`                |            | Description |
| `credit`            | `xss`                |            | Credits |
| `location`          | `xss`                |            | Location where the photo was made |
| `uploaded_by_member_id`|                   |            | ID of member who initially uploaded the file |
| `upload_date`       |                      |            | Date when file was initially uploaded |
| `modified_by_member_id`|                   |            | ID of member who made last modification to the file |
| `modified_date`     |                      |            | Date when file was modified last time |
| `file_hw_original`  |                      |            | Height and width of the file when it was originally uploaded |
| `total_records`     |                      |            | Number of times the file is being used in entries & categories |

### Relationships

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

#### `FileCategories`

Categories that are using this file as category image

#### `FileEntries`

Entries that are using this file 

## Methods

#### `isFile()`

Returns `true` is entity is `File`, `false` otherwise

#### `isDirectory()`

Returns `true` is entity is `Directory` (subfolder), `false` otherwise

#### `isImage()`

Uses the file's mime-type to determine if the file is an image or not.

#### `isEditableImage()`

Uses the file's mime-type to determine if the file is an editable image or not.

#### `isSVG()`

Uses the file's mime-type to determine if the file is an SVG or not.

#### `getFilesystem()`

Get Filesystem object for the file's Upload Directory

#### `getSubfoldersPath()`

Get the subfolder path to the given file

#### `getBaseServerPath()`

Get base server path for file's upload location

#### `getBaseUrl()`

Get base url for upload location and folder

#### `getAbsolutePath()`

Get abolute path to the file on the filesystem

#### `getAbsoluteManipulationPath($manipulation = 'thumbs')`

Get absolute path to the file's pre-manipulated version on the filesystem. Accepts manipulation name as parameter

#### `getAbsoluteThumbnailPath()`

Uses the file's upload destination's server path to compute the absolute thumbnail path of the file

#### `getAbsoluteURL()`

Uses the file's upload destination's url to compute the absolute URL of the file

#### `getAbsoluteManipulationURL($manipulation = 'thumbs')`

Get URL for pre-manupuilated file version. Accepts manipulation name as parameter

#### `getAbsoluteThumbnailURL()`

Get URL of file's thumbnail

#### `getThumbnailUrl()`

Alias of `getAbsoluteThumbnailURL`

#### `deleteOriginalFile()`

Deletes the original file

#### `deleteGeneratedFiles()`

Deletes the file's manipulated versions

#### `deleteAllFiles()`

Deletes the original file and all of its manipulated versions

#### `memberHasAccess(Member $member)`

Determines if the member has access permission to file's upload destination.

#### `exists()`

Determines if the file exists

#### `isWritable()`

Determines if the file or subfolder is writable

#### `getChildIds()`

Get an array of IDs for files and folders that belong to this `FileSystemEntity`

#### `actLocally(callable $callback)`

Perform some action on the file in a local context

### Events

- `beforeDelete`
- `beforeInsert`
- `beforeSave`

## `File`

**class `ExpressionEngine\Model\File\File`**

Represents a file. Child of `FileSystemEntity` and is sharing all of it's properties and methods.
Defines some extra necessary 

## `Directory`

**class `ExpressionEngine\Model\File\Directory`**

Represents a folder. Child of `FileSystemEntity` and is sharing all of it's properties and methods. Has extra

## Examples

### Get a File

```php
$file = ee('Model')->get('File', 4)->first();
```
