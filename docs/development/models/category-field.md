---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2022, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Category Field Model

**class `ExpressionEngine\Model\CategoryField`**

[TOC]

## Properties

| Name                      | Validation                        | Type       | Description  |
| -----------------------   |------------                       | ---------- | -----------  |
| `field_id`                |                                   |            | |
| `site_id`                 |                                   |            | |
| `group_id`                |                                   |            | |
| `field_name`              | required, alphaDash, unique[site_id], validateNameIsNotReserved, maxLength[32] | | |
| `field_label`             | required, xss, noHtml, maxLength[50] |          | |
| `field_type`              | required, enum[text,textarea,select] |         | |
| `field_list_items`        |                                   |            | |
| `field_maxl`              | integer                           | int        | |
| `field_ta_rows`           | integer                           | int        | |
| `field_default_fmt`       |                                   |            | |
| `field_show_fmt`          | enum[y,n]                         | boolString | |
| `field_text_direction`    |                                   |            | |
| `field_required`          | enum[y,n]                         | boolString | |
| `field_order`             | enum[y,n]                         | int        | |
| `field_settings`          |                                   | json       | |
| `legacy_field_data`       | enum[y,n]                         | boolString | True/false if field data is stored in columns instead of new tables. |

## Relationships

- CategoryGroup

## Methods

- `getSettingsValues()`
- `getContentType()`
- `getForeignKey()`
- `updateFormattingOnExisting()`
- `getStructure()`
- `getDataTable()`
- `validateNameIsNotReserved()`

## Events

- `beforeInsert`
