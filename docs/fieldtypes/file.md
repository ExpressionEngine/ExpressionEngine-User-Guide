---
lang: ee
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# File Fieldtype

[TOC]

File fields store uploaded files and images, and utilize the built-in file browser for your publishers to upload and insert files. Your site must have at least one upload directory before you can create a file field.

## Field Options

### Allowed File Types

Gives the option to limit the file field to images only, or allow all safe file types.

### Allowed Directory

Gives the option to limit the file field's ability to browse and upload to certain directories. You can allow all directories, or only allow one directory to browse and upload to.

### Show Existing Files?

When the form is rendered on the front-end using [Channel Form](channels/channel-form/overview.md), this setting allows you to specify whether or not you'd like to show existing files in the selected upload directory and allow the user to choose from those in addition to being able to upload a new file, or do not show existing files and only allow the user to upload a new file.

### Existing Files Limit

Regarding the **Show Existing Files?** option above, allows you to limit the number of files that appear in the existing files drop down.

## Template Tag Usage

### Single Variable Usage

In its most basic form, a File field can be used as a single tag that simply outputs the URL of the file:

    {news_image}

If you have defined any [image manipulations](control-panel/file-manager.md#constrain-or-crop) you can modify the tag with the Short Name of the manipulation. For example, if you've defined a "small" manipulation, the following will output the URL to that version:

    {news_image:small}

### Wrap Parameter

You will frequently want to link to the file in your entry. Using the wrap parameter can simplify this process:

    {news_image wrap="link"}

Will render as:

    <a href="https://example.com/dir/filename.ext">filename</a>

It can also be used to create image tags. In this case the filename will be used to create the alt parameter.

    {news_image wrap="image"}

Which will output as:

    <img src="https://example.com/dir/filename.ext" alt="filename" />

### Variable Pair Usage

You can show detailed information about the file by using it as a tag pair and then referencing any of the available variables:

    {news_image}
      This file is a {extension} and was uploaded on {upload_date format="%Y %m %d"}
      <a href="{url}">View it now</a>
    {/news_image}

## Template Tags

[TOC=3]

### `{credit}`

The credit assigned to the file.

### `{description}`

The description assigned to the file.

### `{directory_id}`

The ID number of the file upload directory

### `{directory_title}`

This variable simply displays the content from the "Descriptive name of upload directory" setting for the directory that the file is in.

### `{extension}`

The file's extension, if it has one.

### `{file_id}`

The unique id of the file.

### `{file_name}`

The full name of the file (including its extension).

### `{file_size}`

The size of the file (in bytes). To display the size in a human friendly manner, (e.g. `147KB`) use:

    {file_size:human}

This includes the appropriate `<abbr>` HTML tag. Or, if you prefer to have the units spelled out, (e.g. `147 kilobytes`), use:

    {file_size:human_long}

If you have defined any [image manipulations](control-panel/file-manager.md#constrain-or-crop) you can modify this tag with the Short Name of the manipulation. For example, if you've defined a "small" manipulation, the following will output the file size of that version:

    {file_size:small}
    {file_size:small:human}
    {file_size:small:human_long}

### `{height}`

The height of the image (in pixels) if applicable.

If you have defined any [image manipulations](control-panel/file-manager.md#constrain-or-crop) you can modify this tag with the Short Name of the manipulation. For example, if you've defined a "small" manipulation, the following will output the height of that version:

    {height:small}

### `{id_path}`

    {id_path='gallery/full_image'}

The URL to the specified template. The ID number of the entry will be automatically added. For example, this:

    <a href="{id_path='gallery/full_image'}">my picture</a>

Would be rendered like this:

    <a href="https://example.com/gallery/full_image/234/">my picture</a>

### `{location}`

The location assigned to the file.

### `{mime_type}`

The automatically-detected MIME type of the file.

### `{modified_date}`

    {modified_date format="%Y %m %d"}

The date the file was last modified. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{path}`

The URL to the folder containing the file, including a trailing slash.

### `{title}`

The title assigned to the file.

### `{upload_date}`

    {upload_date format="%Y %m %d"}

The date the file was first uploaded. See [Date Variable Formatting](templates/date-variable-formatting.md) for more information.

### `{url}`

The full URL to the file.

If you have defined any [image manipulations](control-panel/file-manager.md#constrain-or-crop) you can modify this tag with the Short Name of the manipulation. For example, if you've defined a "small" manipulation, the following will output the URL to that version:

    {url:small}

### `{width}`

The width of the image (in pixels) if applicable.

If you have defined any [image manipulations](control-panel/file-manager.md#constrain-or-crop) you can modify this tag with the Short Name of the manipulation. For example, if you've defined a "small" manipulation, the following will output the width of that version:

    {width:small}
