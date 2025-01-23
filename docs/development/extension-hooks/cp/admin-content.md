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

# Admin Content Controller Extension Hooks

[TOC=2]

## `category_delete($cat_ids)`

| Parameter | Type    | Description                         |
| --------- | ------- | ----------------------------------- |
| \$cat_ids | `Array` | Array of category IDs being deleted |
| Returns   | `Void`  |                                     |

This hook is executed when a category is deleted via the control panel. It can be used to perform additional actions before the category is deleted.

How it's called:

    ee()->extensions->call('category_delete', $cat_ids);

## `category_save($cat_id, $data)`

| Parameter       | Type    | Description          |
| --------------- | ------- | -------------------- |
| \$cat_id        | `Int`   | ID of category saved |
| \$category_data | `Array` | Category meta data   |
| Returns         | `Void`  |                      |

This hook is executed when a new category is saved or an existing category was edited via the control panel. It can be used to perform additional actions after the category is saved.

How it's called:

    ee()->extensions->call('category_save', $cat_id, $category_data);

## `foreign_character_conversion_array`

See Content_publish's `foreign_character_conversion_array`.
