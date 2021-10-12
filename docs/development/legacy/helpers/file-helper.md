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

# File Helper

The File Helper file contains functions that assist in working with files. This helper is loaded using the following code:

    ee()->load->helper('file');

## Available Functions

[TOC=3]

### `read_file($file)`

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| \$file    | `String` | File path                         |
| Returns   | `String` | File contents or FALSE on failure |

Returns the data contained in the file specified in the path.

Example:

    $string = read_file('./path/to/file.php');

The path can be a relative or full server path. Returns FALSE (boolean) on failure.

WARN: This function is DEPRECATED. Use the native `file_get_contents()` instead.

NOTE: **Note:** The path is relative to your main site index.php file, NOT your controller or view files. CodeIgniter uses a front controller so paths are always relative to the main site index.

NOTE: **Important:** If your server is running an **open_basedir** restriction this function might not work if you are trying to access a file above the calling script.

### `write_file($path, $data[, $mode = 'wb'])`

| Parameter | Type     | Description                                                 |
| --------- | -------- | ----------------------------------------------------------- |
| \$path    | `String` | File path                                                   |
| \$data    | `String` | Data to write to file                                       |
| \$mode    | `String` | `fopen()` mode                                              |
| Returns   | `Bool`   | TRUE if the write was successful, FALSE in case of an error |

Writes data to the file specified in the path. If the file does not exist then the function will create it.

Example:

    $data = 'Some file data';
    if ( ! write_file('./path/to/file.php', $data))
    {     
        echo 'Unable to write the file';
    }
    else
    {     
        echo 'File written!';
    }

You can optionally set the write mode via the third parameter:

    write_file('./path/to/file.php', $data, 'r+');

The default mode is 'wb'. Please see the [PHP user guide](http://php.net/fopen) for mode options.

NOTE: **Note:** The path is relative to your main site index.php file, NOT your controller or view files. CodeIgniter uses a front controller so paths are always relative to the main site index.

NOTE: **Note:** This function acquires an exclusive lock on the file while writing to it.

### `delete_files($path[, $del_dir = FALSE[, $htdocs = FALSE]])`

| Parameter | Type     | Description                                             |
| --------- | -------- | ------------------------------------------------------- |
| \$path    | `String` | Directory path                                          |
| \$del_dir | `Bool`   | Whether to also delete directories                      |
| \$htdocs  | `Bool`   | Whether to skip deleting .htaccess and index page files |
| Returns   | `Bool`   | TRUE on success, FALSE in case of an error              |

Deletes ALL files contained in the supplied path.

Example:

    delete_files('./path/to/directory/');

If the second parameter is set to TRUE, any directories contained within the supplied root path will be deleted as well.

Example:

    delete_files('./path/to/directory/', TRUE);

NOTE: **Note:** The files must be writable or owned by the system in order to be deleted.

### `write_index_html($path)`

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| \$path    | `String` | Directory path to write an index.html to   |
| Returns   | `Bool`   | TRUE on success, FALSE in case of an error |

Writes an index.html file to a specified path to ensure directories cannot be indexed:

    write_index_html('./path/to/directory');

### `get_filenames($source_dir[, $include_path = FALSE])`

| Parameter      | Type     | Description                                          |
| -------------- | -------- | ---------------------------------------------------- |
| \$source_dir   | `String` | Directory path                                       |
| \$include_path | `Bool`   | Whether to include the path as part of the filenames |
| Returns        | `Array`  | An array of file names                               |

Takes a server path as input and returns an array containing the names of all files contained within it. The file path can optionally be added to the file names by setting the second parameter to TRUE.

Example:

    $controllers = get_filenames(APPPATH.'controllers/');

### `get_dir_file_info($source_dir, $top_level_only)`

| Parameter        | Type     | Description                                                                 |
| ---------------- | -------- | --------------------------------------------------------------------------- |
| \$source_dir     | `String` | Directory path                                                              |
| \$top_level_only | `Bool`   | Whether to look only at the specified directory (excluding sub-directories) |
| Returns          | `Array`  | An array containing info on the supplied directory's contents               |

Reads the specified directory and builds an array containing the filenames, filesize, dates, and permissions. Sub-folders contained within the specified path are only read if forced by sending the second parameter to FALSE, as this can be an intensive operation.

Example:

    $models_info = get_dir_file_info(APPPATH.'models/');

### `get_file_info($file[, $returned_values = array('name', 'server_path', 'size', 'date')])`

| Parameter         | Type     | Description                                                        |
| ----------------- | -------- | ------------------------------------------------------------------ |
| \$file            | `String` | File path                                                          |
| \$returned_values | `Array`  | What type of info to return                                        |
| Returns           | `Array`  | An array containing info on the specified file or FALSE on failure |

Given a file and path, returns (optionally) the _name_, _path_, _size_ and _date modified_ information attributes for a file. Second parameter allows you to explicitly declare what information you want returned.

Valid `$returned_values` options are: `name`, `size`, `date`, `readable`, `writable`, `executable` and `fileperms`.

### `get_mime_by_extension($filename)`

| Parameter  | Type     | Description                          |
| ---------- | -------- | ------------------------------------ |
| \$filename | `String` | File name                            |
| Returns    | `String` | MIME type string or FALSE on failure |

Translates a filename extension into a MIME type based on _config/mimes.php_. Returns FALSE if it can't determine the type, or read the MIME config file:

    $file = 'somefile.png';
    echo $file.' is has a mime type of '.get_mime_by_extension($file);

NOTE: **Note:** This is not an accurate way of determining file MIME types, and is here strictly for convenience. It should not be used for security purposes.

### `symbolic_permissions($perms)`

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| \$perms   | `Int`    | Permissions                 |
| Returns   | `String` | Symbolic permissions string |

Takes numeric permissions (such as is returned by `fileperms()`) and returns standard symbolic notation of file permissions:

    echo symbolic_permissions(fileperms('./index.php'));  // -rw-r--r--

### `octal_permissions($perms)`

| Parameter | Type     | Description              |
| --------- | -------- | ------------------------ |
| \$perms   | `Int`    | Permissions              |
| Returns   | `String` | Octal permissions string |

Takes numeric permissions (such as is returned by `fileperms()`) and returns a three character octal notation of file permissions:

    echo octal_permissions(fileperms('./index.php')); // 644
