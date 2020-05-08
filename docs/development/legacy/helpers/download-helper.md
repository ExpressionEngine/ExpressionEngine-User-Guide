---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Download Helper

The Download Helper lets you download data to your desktop. This helper is loaded using the following code:

    ee()->load->helper('download');

## Available Functions

### `force_download([$filename = ''[, $data = ''[, $set_mime = FALSE]]])`

| Parameter  | Type     | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| \$filename | `String` | Filename                                    |
| \$data     | `Mixed`  | File contents                               |
| \$set_mime | `Bool`   | Whether to try to send the actual MIME type |
| Returns    | `Void`   |                                             |

Generates server headers which force data to be downloaded to your desktop. Useful with file downloads. The first parameter is the **name you want the downloaded file to be named**, the second parameter is the file data.

If you set the second parameter to NULL and `$filename` is an existing, readable file path, then its content will be read instead.

If you set the third parameter to boolean TRUE, then the actual file MIME type (based on the filename extension) will be sent, so that if your browser has a handler for that type - it can use it.

Example:

    $data = 'Here is some text!';
    $name = 'mytext.txt';
    force_download($name, $data);

If you want to download an existing file from your server you'll need to do the following:

    // Contents of photo.jpg will be automatically read
    force_download('/path/to/photo.jpg', NULL);
