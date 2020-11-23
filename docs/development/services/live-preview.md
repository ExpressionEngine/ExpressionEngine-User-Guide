---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# LivePreview Service

The LivePreview service provides a mechanism to check for, and fetch, preview data.

## Simple example

If your fieldtype add-on fetches data when rendering a front-end request, you will want to check and see if there is any Live Preview entry data. If there is you'll want to use that data instead of what you would fetch from the database:

    if (ee('LivePreview')->hasEntryData())
    {
      $data = ee('LivePreview')->getEntryData();
      $entry_id = $data['entry_id'];
      $my_data[$entry_id] = $data;
    }

## LivePreview Service Methods

**class `EllisLab\ExpressionEngine\Service\LivePreview\LivePreview`**

### `hasEntryData()`

Check if there is preview entry data.

| Parameter | Type      | Description                                     |
| --------- | --------- | ----------------------------------------------- |
| Returns   | `Boolean` | TRUE if it has preview entry data, FALSE if not |

### `getEntryData()`

Gets the preview entry data. This data matches the POST data when saving a Channel entry.

| Parameter | Type            | Description                                            |
| --------- | --------------- | ------------------------------------------------------ |
| Returns   | `Array/Boolean` | An array of entry data, or `FALSE` if there is no data |
