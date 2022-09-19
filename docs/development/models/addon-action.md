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

# Addon Action Model

**class `ExpressionEngine\Model\Addon\Action`**

[TOC]

## Properties

| Name             | Validation   | Type  | Description    |
| ---------------- | ------------ | ----- | -------------- |
| `action_id`      |              |       | ID used in the URL to call the method. |
| `class`          |              |       | Name of the addon's class |
| `method`         |              |       | Name of the method executed |
| `csrf_exempt`    | enum[0,1]    |       | Enable (0) or disable (1) the security token check.  Disabling is typically used with asynchronous operations. Default is `0` or check enabled |

## Relationships

This model has no relationships.

## Methods

This model has no additional methods.

## Events

This model has no events.

## Examples

### Get an Action ID by Method

```php
$action_id = ee('Model')
                ->get('Action')
                ->filter('method', 'your_addon_method')
                ->first()
                ->action_id;

// Create a URL to that action.
$action_url = ee()->functions->fetch_site_index(0, 0) . QUERY_MARKER . 'ACT=' . $action_id;
// Example returns: https://example.com/index.php?ACT=123
```
