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

# Category Group Model

**class `ExpressionEngine\Model\CategoryGroup`**

[TOC]

## Properties

| Name                      | Validation                 | Type       | Description  |
| -----------------------   |------------                | ---------- | -----------  |
| `group_id`key             |                            |            |              |
| `site_id`                 |                            |            |              |
| `group_name`              | required, unique[site_id]  |            |              |
| `sort_order`              | enum[a,c]                  |            |              |
| `exclude_group`           | enum[0,1,2]                |            |              |
| `field_html_formatting`   | enum[all,safe,none]        |            |              |
| `can_edit_categories`     |                            |            |              |
| `can_delete_categories`   |                            |            |              |

## Relationships

- `CategoryField`
- `Category`

## Methods

- `getAllCustomFields()`
- `createCategoryField()`
- `getContentType()`
- `getCategoryTree()`
- `getFieldMetadata()`
- `populateCategories()`
- `buildCategoryOptionsTree()`
- `buildCategoryList($categories, $sort_column)`

## Events

- `afterDelete`
