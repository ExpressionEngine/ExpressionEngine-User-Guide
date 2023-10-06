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

# Comment Subscription Model

**class `ExpressionEngine\Model\Comment`**

A model representing user subscriptions to the comment thread on a particular entry. Used by the legacy `subscriptions` library.

[TOC]

## Properties

| Name                  | Validation           | Type       | Description     |
| --------------------- | -------------------- | ---------- | --------------- |
| `subscription_id` Key |                      |            |                 |
| `entry_id`            |                      |            |                 |
| `member_id`           |                      |            | EE Member ID. |
| `email`               |                      |            | Required if no member ID is passed. |
| `subscription_date`   |                      |            | The date the subscription was created. |
| `notification_sent`   |                      |            | `n`/`y` if a notification has been sent.  Default should be set to `n` |
| `hash`                |                      |            | A unique identifier used in email notifications. |

## Relationships

- `Entry`
- `Member`

## Methods

This model has no additional methods.

## Events

This model has no additional events.

## Examples

### Add a subscription

Add a subscription using the currently logged-in user.

```php
$entry_id = 1;
$entry = ee('Model')->get('ChannelEntry', $entry_id)->first();

$sub = ee('Model')->make('CommentSubscription');
$sub->entry_id          = $entry->getId();
$sub->member_id         = ee()->session->userdata['member_id'];
$sub->email             = ee()->session->userdata['email']; // Normally omitted if member ID is included.
$sub->subscription_date = ee()->localize->now;
$sub->notification_sent = 'n';
$sub->hash              = ee()->session->userdata['member_id'] . ee()->functions->random('alnum', 8);
$sub->save();
```

Legacy:

```php
$entry_id = 4;

ee()->load->library('subscription');
// @params module, publisher array, anonymous
ee()->subscription->init('comment', array('entry_id' => $entry_id), true);

if ($member_id = ee()->session->userdata('member_id')) {
    ee()->subscription->subscribe($member_id);
} else {
    ee()->subscription->subscribe($guest_email);
}
```
