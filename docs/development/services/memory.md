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

# Memory Service

[TOC]

The Memory service provides some handy methods revolving around PHP's memory usage.

## Usage

### Get Memory Limit

PHP's ini setting for `memory_limit` could be in a variety of formats. This method standardizes the value and provides it to you in bytes:

    $current_limit = ee('Memory')->getMemoryLimitBytes();
    // e.g. 536870912

### Set Memory For Image Manipulations

When processing an uploaded image, the compressed filesize for the most part doesn't matter, as the PHP image libraries will create an uncompressed representation of the image for processing. So the physical dimensions and color space are a large determining factor for how much memory PHP will need to crop, resize, etc.

This method attempts to guess how much memory will be needed by examining some of the image's properties, and then set the memory limit for the current request to a high enough value to allow PHP to do its work:

    try
    {
      ee('Memory')->setMemoryForImageManipulation($file_path);
    }
    catch (\Exception $e)
    {
      show_error($e->getMessage());
    }

If the environment doesn't allow the memory limit to be increased, this method will throw an Exception that you can handle however you need in your code, avoiding a fatal memory error in PHP.

## Memory Methods

**class `EllisLab\ExpressionEngine\Service\Memory\Memory`**

### `getMemoryLimitBytes()`

Gets the current memory limit, in bytes.

| Parameter | Type  | Description                                             |
| --------- | ----- | ------------------------------------------------------- |
| Returns   | `Int` | Current memory limit, in bytes. (int -1 means no limit) |

### `setMemoryForImageManipulation($file_path, $tweak_multiplier = 1.8)`

Sets memory needed for image manipulations of a given file.

| Parameter          | Type     | Description                                |
| ------------------ | -------- | ------------------------------------------ |
| \$file_path        | `String` | The server path to the file                |
| \$tweak_multiplier | `Float`  | Multiplier used for estimated memory usage | void, throws an Exception on failure |
