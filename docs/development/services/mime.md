---
lang: php
---
<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2025, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# MimeType Service

[TOC]

The `MimeType` service in ExpressionEngine provides a robust way to detect and validate MIME types of files and data buffers. This service is essential for ensuring that uploaded files are of the expected type and safe for processing. It includes functionality to manage a whitelist of allowed MIME types, detect MIME types from files or buffers, and perform specific checks like determining if a file is an image.

## Overview

The `MimeType` class allows developers to:
- Detect MIME types of files and data buffers.
- Validate MIME types against a configurable whitelist.
- Check if a file is an image or safe for upload.
- Extend the whitelist with custom MIME types.

This service is particularly useful for handling file uploads securely and ensuring compliance with content policies by restricting file types.

## Usage Examples

Here are some common use cases for the `MimeType` service:

### Detecting MIME Type of a File

To determine the MIME type of a file at a given path:

    $mime = ee('MimeType')->ofFile($path);
    echo $mime; // Outputs something like 'image/jpeg' or 'application/pdf'

### Detecting MIME Type of a Data Buffer

To determine the MIME type of raw data:

    $data = file_get_contents($path);
    $mime = ee('MimeType')->ofBuffer($data);
    echo $mime; // Outputs the MIME type based on the buffer content

### Guessing MIME Type for Octet Stream

When a file is detected as a generic `application/octet-stream`, you can attempt to guess a more specific type:

    $opening = file_get_contents($path, false, null, 0, 50);
    $mime = ee('MimeType')->guessOctetStream($opening);
    echo $mime; // Might output 'image/webp' or 'application/pdf' if identifiable

### Checking if a MIME Type Matches a Specific Kind

To check if a MIME type belongs to a specific category or kind:

    $filePath = '/path/to/file';
    $allowed_type = 'image';
    if (ee('MimeType')->isOfKind(ee('MimeType')->ofFile($filePath), $allowed_type)) {
        echo 'This file is of the allowed type.';
    }

### Validating if a File is Safe for Upload

To ensure a file's MIME type is in the whitelist and safe for upload:

    $path = '/path/to/uploaded/file';
    if (ee('MimeType')->fileIsSafeForUpload($path)) {
        echo 'This file is safe to upload.';
    } else {
        echo 'This file type is not allowed.';
    }

### Checking if a MIME Type is Safe for Upload

To check a specific MIME type against the whitelist:

    $mime = 'image/png';
    $safeForUpload = ee('MimeType')->isSafeForUpload($mime) ? $mime : false;
    if ($safeForUpload) {
        echo 'This MIME type is safe for upload.';
    }

### Checking if a File is an Image

To determine if a file is an image based on its MIME type and content:

    $path = '/path/to/file';
    if (ee('MimeType')->fileIsImage($path)) {
        echo 'This file is an image.';
    }

## MimeType Methods

**class `ExpressionEngine\Library\Mime\MimeType`**

[TOC=3]

### `addMimeType($mime, $kind = null)`

Adds a single MIME type to the whitelist.

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$mime    | `String` | The MIME type to add                  |
| \$kind    | `String` | Optional category or kind of MIME type|
| Returns   | `Void`   |                                       |

### `addMimeTypes(array $mimes, $kind = null)`

Adds multiple MIME types to the whitelist.

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$mimes   | `Array`  | An array of MIME types to add         |
| \$kind    | `String` | Optional category or kind of MIME type|
| Returns   | `Void`   |                                       |

### `getWhitelist()`

Returns the current whitelist of MIME types.

| Parameter | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| Returns   | `Array` | An array of whitelisted MIME types    |

### `isOfKind($mime, $mimeTypeKind)`

Checks if a MIME type belongs to a specific kind or category.

| Parameter       | Type     | Description                           |
| --------------- | -------- | ------------------------------------- |
| \$mime          | `String` | The MIME type to check                |
| \$mimeTypeKind  | `String` | The kind or category to check against |
| Returns         | `Boolean`| TRUE if it matches the kind, FALSE otherwise |

### `ofFile($path)`

Determines the MIME type of a file.

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$path    | `String` | The full path to the file             |
| Returns   | `String` | The MIME type of the file             |

### `ofBuffer($buffer)`

Determines the MIME type of a data buffer.

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$buffer  | `String` | The data buffer to check              |
| Returns   | `String` | The MIME type of the buffer           |

### `guessOctetStream($contents)`

Attempts to guess a more specific MIME type for data identified as `application/octet-stream`.

| Parameter   | Type     | Description                           |
| ----------- | -------- | ------------------------------------- |
| \$contents  | `String` | The content to analyze                |
| Returns     | `String` | The guessed MIME type                 |

### `fileIsImage($path)`

Determines if a file is an image.

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$path    | `String` | The full path to the file             |
| Returns   | `Boolean`| TRUE if it is an image, FALSE otherwise |

### `isImage($mime)`

Checks if a MIME type is recognized as an image type.

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$mime    | `String` | The MIME type to check                |
| Returns   | `Boolean`| TRUE if it is an image type, FALSE otherwise |

### `fileIsSafeForUpload($path)`

Checks if a file's MIME type is safe for upload based on the whitelist.

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$path    | `String` | The full path to the file             |
| Returns   | `Boolean`| TRUE if safe for upload, FALSE otherwise |

### `isSafeForUpload($mime)`

Checks if a specific MIME type is safe for upload based on the whitelist.

| Parameter | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| \$mime    | `String` | The MIME type to check                |
| Returns   | `Boolean`| TRUE if safe for upload, FALSE otherwise |

### `whitelistMimesFromConfig()`

Loads MIME types from configuration files into the whitelist, including any additional MIME types specified in the configuration.

| Parameter | Type    | Description                           |
| --------- | ------- | ------------------------------------- |
| Returns   | `Void`  |                                       |
