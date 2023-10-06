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

# Control Panel Access Log Model

**class `ExpressionEngine\Model\Log\CpLog`**

[TOC]

## Properties

- `id` Key
- `site_id`
- `member_id`
- `username`
- `ip_address`
- `act_date`
- `action`

## Relationships

- `Site`
- `Member`

## Methods

This model has no additional methods.

## Events

This model has no events.

## Examples

### Get Logs by Member ID

```php
$member_id = 1;

$super_admin_logs = ee('Model')->get('CpLog')->filter('member_id', $member_id)->all();
```

#### Create a new log

```php
$log             = ee('Model')->make('CpLog');
$log->member_id  = ee()->session->userdata('member_id');
$log->username   = ee()->session->userdata('username');
$log->ip_address = ee()->session->userdata('ip_address');
$log->act_date   = ee()->localize->now;
$log->action     = "Your Message!";

// Validate and Save.
$result = $log->validate();

if ($result->isValid())
{
  $log->save();
}
```
