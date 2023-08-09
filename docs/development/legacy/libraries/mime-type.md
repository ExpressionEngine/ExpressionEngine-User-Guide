---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Mime Type Class

## Calling the Mime Type Class

**class `Mime_type`**

ExpressionEngine uses the Mime Type class whenever a file's, or buffer's, Mime type needs to be determined. Additionally, it is used to determine if a file is an image, and to determine if a file is safe for uploading. This class is a library, so you have to load the Mime Type library before using it:

    ee()->load->library('mime_type');

NOTE: **Note:** The Mime Type library uses the Mime Type at `system/ee/legacy/config/mimes.php` when determining if a file is safe for uploading or is an image.

NOTE: **Note:** There is a `mime_whitelist_additions` [config override](general/system-configuration-overrides.md#mime_whitelist_additions) for adding installation specific Mime Types to the allow list.

NOTE: **Note:** There is a `mime_whitelist_member_exception` [config override](general/system-configuration-overrides.md#mime_whitelist_member_exception) and a `mime_whitelist_member_group_exception` [config override](general/system-configuration-overrides.md#mime_whitelist_member_group_exception) which will bypass the whitelist for those members and/or member roles.

## Methods

[TOC=3]

### `getWhitelist()`

| Parameter | Type    | Description                                      |
| --------- | ------- | ------------------------------------------------ |
| Returns   | `Array` | An array of Mime types that are on the whitelist |

Returns the whitelist of Mime Types

### `ofFile($path)`

| Parameter  | Type     | Description                             |
| ---------- | -------- | --------------------------------------- |
| \$path     | `String` | The full path to the file being checked |
| Returns    | `String` | The Mime type of the file               |
| **Throws** |          | Exception If the file does not exist    |

Determines the Mime type of a file

### `ofBuffer($buffer)`

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| \$buffer  | `String` | The buffer/data to check    |
| Returns   | `String` | The Mime type of the buffer |

Determines the Mime type of a buffer

### `fileIsImage($path)`

| Parameter  | Type     | Description                             |
| ---------- | -------- | --------------------------------------- |
| \$path     | `String` | The full path to the file being checked |
| Returns    | `Bool`   | TRUE if it is an image; FALSE if not    |
| **Throws** |          | Exception If the file does not exist    |

Determines if a file is an image or not.

### `isImage($mime)`

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| \$mime    | `String` | The mime to check                    |
| Returns   | `Bool`   | TRUE if it is an image; FALSE if not |

Determines if a Mime type is in our list of valid image Mime types.

### `fileIsSafeForUpload($path)`

| Parameter  | Type     | Description                             |
| ---------- | -------- | --------------------------------------- |
| \$path     | `String` | The full path to the file being checked |
| Returns    | `Bool`   | TRUE if it safe; FALSE if not           |
| **Throws** |          | Exception If the file does not exist    |

Gets the Mime type of a file and compares it to our whitelist to see if it is safe for upload.

### `isSafeForUpload($mime)`

| Parameter | Type     | Description                          |
| --------- | -------- | ------------------------------------ |
| \$mime    | `String` | The mime to check                    |
| Returns   | `Bool`   | TRUE if it is an image; FALSE if not |

Checks a given Mime type against our whitelist to see if it is safe for upload
