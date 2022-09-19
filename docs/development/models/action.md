---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Action Model

**class `ExpressionEngine\Model\Addon\Action`**

[TOC]

## Properties

#### `action_id` Key
#### `class`
#### `method`
#### `csrf_exempt`

## Relationships
This model has no relationships.

## Methods
This model has no additional methods.

## Events
This model has no events.

## Examples

#### Get an Action ID by Method
```
$action_id = ee('Model')
                ->get('Action')
                ->filter('method', 'your_addon_method')
                ->first()
                ->action_id;
                
// Create a URL to that action.
$action_url = ee()->functions->fetch_site_index(0, 0) . QUERY_MARKER . 'ACT=' . $action_id;
```
