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

# Status Model

**class `ExpressionEngine\Model\Status\Status`**

[TOC]

## Properties

#### `status` Required, unique
#### `highlight` Required, hex color
#### `status_id`
#### `status_order`

## Relationships

#### `Channels`
Related channels the status is assigned to.

#### `ChannelEntries`
Related channel entries the status is used in.

#### `Site`
Sites the status is used in.

#### `Roles`
Roles with permissions to use the status.


## Methods

### `onBeforeInsert()`

New statuses get appended roles assigned

### `getSelectOptionComponent()`

Returns the value and rendered label for option select input display

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| use_ids   | `array` | ID of status, otherwise uses the status name.  Default is `false` |
| Returns   | `array` | Array of value, and rendered label using `renderTag()` method.|

### `renderTag()`

Renders the tag with styles using the `_shared/status-tag` view.

### `validateUnique()`

Override of the parent validateUnique to alter the language key if it is a failure.  Validates true if the status is unique.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| key   | `string` | Property name |
| value   | `string` | Property value |
| params   | `array` | Rule parameters |
| Returns   | `string` | option component array |