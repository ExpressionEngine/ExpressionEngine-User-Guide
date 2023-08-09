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

# Path Helper

The Path Helper file contains functions that permits you to work with file paths on the server. This helper is loaded using the following code:

    ee()->load->helper('path');

## Available Functions

### `set_realpath($path[, $check_existence = FALSE])`

| Parameter         | Type     | Description                                  |
| ----------------- | -------- | -------------------------------------------- |
| \$path            | `String` | Path                                         |
| \$check_existence | `Bool`   | Whether to check if the path actually exists |
| Returns           | `String` | An absolute path                             |

This function will return a server path without symbolic links or relative directory structures. An optional second argument will cause an error to be triggered if the path cannot be resolved.

Examples:

    $file = '/etc/php5/apache2/php.ini';
    echo set_realpath($file); // Prints '/etc/php5/apache2/php.ini'

    $non_existent_file = '/path/to/non-exist-file.txt';
    echo set_realpath($non_existent_file, TRUE);    // Shows an error, as the path cannot be resolved
    echo set_realpath($non_existent_file, FALSE);   // Prints '/path/to/non-exist-file.txt'

    $directory = '/etc/php5';
    echo set_realpath($directory);  // Prints '/etc/php5/'

    $non_existent_directory = '/path/to/nowhere';
    echo set_realpath($non_existent_directory, TRUE);   // Shows an error, as the path cannot be resolved
    echo set_realpath($non_existent_directory, FALSE);  // Prints '/path/to/nowhere'
