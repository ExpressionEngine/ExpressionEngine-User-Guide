---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2023, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Category Group Settings Model

**class `ExpressionEngine\Model\CategoryGroupSettings`**

[TOC]

## Properties

| Name                         | Validation   | Type       | Description  |
| ---------------------------- |------------- | ---------- | -----------  |
| `category_group_settings_id` |              |            | the primary key |
| `site_id`                    |              |            | the site id |
| `group_id`                   | required     |            | the category group id |
| `channel_id`                 | required     |            | the channel id |
| `cat_required`               |              | boolString | whether or not having a category in this group is required for this channel |
| `cat_allow_multiple`         |              | boolString | whether or not having multiple selections is allowed in this category group for this channel |

## Relationships

### `Site`

The MSM Site for which the Category Group belongs to.

### `Channel`

Channel for which these settings are defined

### `CategoryGroup`

Category Group for which these settings are defined


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
