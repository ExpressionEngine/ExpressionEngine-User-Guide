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

# Category Model

**class `ExpressionEngine\Model\Category`**

[TOC]

## Properties

| Name                      | Validation                            | Type       | Description  |
| -----------------------   |------------                           | ---------- | -----------  |
| `cat_id`                  |                                       |            |              |
| `site_id`                 |                                       |            |              |
| `group_id`                |                                       |            |              |
| `parent_id`               | validateParentCategory                |            |              |
| `cat_name`                | required, noHtml, xss                 |            |              |
| `cat_url_title`           | required, alphaDash, unique[group_id] |            |              |
| `cat_description`         | xss                                   |            |              |
| `cat_image`               |                                       |            |              |
| `cat_order`               | isNaturalNoZero                       |            |              |

## Relationships

- `CategoryGroup`
- `ChannelEntries`
- `Files`
- `Parent`
- `Children`

## Methods

- `getStructure()`
- `getDisplay()`
- `getAllChildren()`
- `validateParentCategory()`

## Events

- `beforeInsert`
- `beforeDelete`
