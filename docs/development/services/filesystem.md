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

# Filesystem Service

[TOC]

The EE Filesystem Class provides a broad range of file system related methods.

    $directory_list = ee('Filesystem')->getDirectoryContents($path, true);

Many of the methods are near aliases of php methods, but several include additional code to address
common issues (e.g. `isWritable()` works on both Unix and Windows servers, `mkDir()` confirms 
the access privileges of the created directory etc.).

The Filesystem Class is automatically loaded by EE.

## Methods

### `append($path, $data)`

Appends the content of `$data` to the end of the file referenced by `$path`.

| Parameter        | Type        | Description                    |
| ---------------- | ----------- | ------------------------------ |
| \$path           | `string`    | Path to the file to append to. |
| \$data           | `string`    | The data to write.             |
| Returns          | `bool`      | TRUE if operation succeeded    |

### `attemptFastDelete($path)`

Attempt to delete a directory and its contents using the OS method.
When it works, this approach is much faster than iterating over directories with many children.

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to the directory to delete           |
| \$data           | `string`    | The data to write.                        |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `basename($path)`

Get the filename and extension from a path.

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to extract basename from             |
| Returns          | `string`    | Filename with extension                   |

### `chmod($path, $mode)`

Change the access mode of a file.

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to Change                            |
| \$path           | `string`    | Mode, please provide an octal             |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `copy($source, $dest)`

Copy a file or directory.

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$source         | `string`    | File or directory to copy                 |
| \$dest           | `string`    | Path to the duplicate                     |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `delete($path)`

Delete a file or directory.

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | File or directory to delete               |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `deleteDir($path, $leave_empty = false)`

Delete a directory. 

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Directory to delete                       |
| \$leave_empty    | `bool`      | Keep the empty root directory?            |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `deleteFile($path)`

Delete a file or directory.

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | File to delete               |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `dirname($path)`

Get the path to the parent directory

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to extract dirname from              |
| Returns          | `string`    | Path to the parent directory              |

### `emptyDir($path, $add_index = true)`

Empty a directory, and optionally add back EE's default index.html file. 

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Directory to empty                        |
| \$add_index      | `bool`      | Add back the EE index.html file?          |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `exists($path)`

Check if a path exists

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to check                             |
| Returns          | `bool`      | TRUE if path exists, FALSE if not         |

### `extension($path)`

Get the extension of a file from path

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to extract extension from            |
| Returns          | `string`    | The extension                             |

### `filename($path)`

Get the filename without extension of a file from path

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to extract filename from             |
| Returns          | `string`    | The filename without extension            |

### `findAndReplace($file, $search, $replace)`

Finds string and replaces it in either a nominated file, or recursively for all the files within a nominated directory

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$file           | `string`    | File or Directory to operate on           |
| \$search         | `string`    | What to search for                        |
| \$replace        | `string`    | What to replace search string with        |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `getDirectoryContents($path, $recursive = false)`

Gets the contents of a directory as a flat array, with the option of returning a recursive listing.

| Parameter        | Type        | Description                                             |
| ---------------- | ----------- | ------------------------------------------------------- |
| \$path           | `string`    | Directory to search                                     |
| \$add_index      | `bool`      | Whether or not to do a recursive search?                |
| Returns          | `array`     | Array of all paths found inside the specified directory |

### `getFreeDiskSpace($path = '/')`

Returns the amount of free bytes at a given path.  If $path is omitted the root directory is used.

| Parameter        | Type           | Description                                     |
| ---------------- | -------------- | ----------------------------------------------- |
| \$path           | `string`       | Path to check                                   |
| Returns          | `float\|false` | Number of bytes as a float, or FALSE on failure |

### `getUniqueFilename($path)`

Given a path this returns a unique filename by appending "_n" (where "n" is a number) if a file by the same name already exists, i.e. "image002_1.jpg".

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to make unique                       |
| Returns          | `string`    | The path to the filename                  |

### `hashFile($algo, $filename)`

Returns a hash based on content of a given file using a nominated hashing algorithm.

A list of supported hashing algorithms can be found [here](http://www.php.net/manual/en/function.hash-algos.php).

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$algo           | `string`    | PHP hashing algorithm                     |
| \$filename       | `string`    | The path to the file to   hash            |
| Returns          | `string`    | The hash created                          |

### `include_file($filename)`

Given a path this returns a unique filename by appending "_n" (where "n" is a number) if a file by the same name already exists, i.e. "image002_1.jpg".

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$filename       | `string`    | Full path to file to include              |
| Returns          | `bool`      | TRUE if operation succeeded               |

### `isDir($path)`

Check if a given path is a directory

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to check                             |
| Returns          | `bool`      | TRUE if directory, FALSE if not           |

### `isFile($path)`

Check if a given path is a file

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to check                             |
| Returns          | `bool`      | TRUE if file, FALSE if not                |

### `isReadable($path)`

Check if a given file or directory exists and is a readable

| Parameter        | Type        | Description                                  |
| ---------------- | ----------- | -------------------------------------------- |
| \$path           | `string`    | Path to check                                |
| Returns          | `bool`      | TRUE if exists and is readable, FALSE if not |

### `isWritable($path)`

Check if a given file or directory exists and is a writeable

| Parameter        | Type        | Description                                   |
| ---------------- | ----------- | --------------------------------------------- |
| \$path           | `string`    | Path to check                                 |
| Returns          | `bool`      | TRUE if exists and is writeable, FALSE if not |

### `mkDir($path, $with_index = true)`

Make a new directory, and optionally include EE's default index.html file. 

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to the directory to create           |
| \$with_index     | `bool`      | Add the EE index.html file?               |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not |

### `mtime($path)`

Get the last modified time for a directory or file.

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$path           | `string`    | Path to directory or file                 |
| Returns          | `int\|false` | Unix timestamp for time file or directory was last modified, or FALSE on failure |

### `read($path)`

Read the content of a file from disk.

| Parameter        | Type           | Description                               |
| ---------------- | -------------- | ----------------------------------------- |
| \$path           | `string`       | Path to file to read                      |
| Returns          | `string\|false` | Content of file, or FALSE on failure      |

### `readLineByLine($path, callable $callback)`

Read a file from disk line-by-line, good for large text files.

This method does not directly return the content of the file, rather it simply calls the function specified in `$callback` once per line read, passing only the content of that line to the callback. Any useful work relating to the reading of the file needs to done within the callback.

Note: The status returned by this function relates simply to the success or otherwise of the closing of the file after it has been read, it does not provide any information about whether the callback function operated successfully or not.

| Parameter        | Type           | Description                               |
| ---------------- | -------------- | ----------------------------------------- |
| \$path           | `string`       | Path to file to read                      |
| Returns          | `bool`         | TRUE if operation succeeded, FALSE if not |

### `recursiveCopy($source, $dest)`

Copies a directory to another directory by recursively iterating over its files.  Will create the destination directory if it does not exist.  Does not return a status for the operation.

| Parameter        | Type        | Description                               |
| ---------------- | ----------- | ----------------------------------------- |
| \$source         | `string`    | Directory to copy                         |
| \$dest           | `string`    | Path to the duplicate                     |

### `touch($path, $time = null)`

Touch a directory or file.

If $time is omitted then the current server time is used instead.

| Parameter        | Type        | Description                                      |
| ---------------- | ----------- | ------------------------------------------------ |
| \$path           | `string`    | Path to directory or file                        |
| \$time           | `int`       | Unix timestamp for last modified time (optional) |
| Returns          | `bool`      | TRUE if operation succeeded, FALSE if not        |

### `write($path, $data, $overwrite = false, $append = false)`

Write a file to disk.

| Parameter        | Type         | Description                                      |
| ---------------- | ------------ | ------------------------------------------------ |
| \$path           | `string`     | Path to the file to write to                     |
| \$data           | `string`     | The data to write to the file                    |
| \$overwrite      | `true\|false` | Overwrite existing file?                         |
| \$append         | `true\|false` | Append to existing file?                         |
| Returns          | `bool`       | TRUE if operation succeeded, FALSE if not        |
