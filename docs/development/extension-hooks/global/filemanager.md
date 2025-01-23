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

# Filemanager Library Extension Hooks

## `file_after_save($file_id, $data)`

| Parameter | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| \$file_id | `Int`   | File ID in the `exp_files` table             |
| \$data    | `Array` | Associative array containing data about file |
| Returns   | `Void`  |                                              |

Do additional processing after a file is saved.

How it's called:

    $this->extensions->call('file_after_save', $file_id, $data);
    if ($this->extensions->end_script === TRUE) return;

## `files_after_delete($deleted)`

| Parameter | Type    | Description                                                   |
| --------- | ------- | ------------------------------------------------------------- |
| \$deleted | `Array` | Array of database row objects for the files that were deleted |
| Returns   | `Void`  |                                                               |

Do additional processing after a file is removed.

How it's called:

    $edata = $this->extensions->call('files_after_delete', $deleted);
    if ($this->extensions->end_script === TRUE) return;
