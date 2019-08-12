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

# File Grid Fieldtype

The File Grid field in ExpressionEngine provides a way to upload multiple files at once via drag-and-drop, and then have those files be populated into a [Grid field](fieldtypes/grid.md). It works by having a default, always-included File column. You can then add any additional columns available to a Grid field to easily associate more content with the file.

## Field Options

In addition to the options available to a regular Grid field, you also have the following options to configure the default File column:

### Allowed File Types

Gives the option to limit the File Grid to images only, or allow all safe file types.

### Allowed Directory

Gives the option to limit the File Grid's ability to browse and upload to certain directories. You can allow all directories, or only allow one directory to browse and upload to.

## Template Tags

Contents of a File Grid field are accessed just as a regular Grid field would be, refer to the [Grid field documentation](fieldtypes/grid.md) for a full reference. A notable difference is the default File column automatically has a short name of `file`:

    {gallery}
      <img src="{gallery:file}">
    {/gallery}
