<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Simple Commerce – Managing Store Items

[TOC]

**Control Panel Location:** `Developer --> Add-Ons --> Simple Commerce`

The Items screen gives you at a glance an overview of your store items, their price, sale status, and number of purchases. You may select items to edit or delete by checking the boxes on the right and selecting the appropriate action from the drop-down menu next to the Submit button. Items may be added by clicking the **Create New** button on the top right.

## Items Home Page Options

### Create New Item

The **Create New** button allows you to select channel entries to add as items to your store.

### Edit Items

To edit items, click the edit button in the toolbar next to the name of the item you wish to edit.

### Export Items

To export items, click the export button next to "All Items" to export and download a tab-delimited file of all of your store items, for easy import into other applications.

## Adding Items

To add a new item, click **Create New** from the Items screen. You will be presented with a familiar looking screen, one that looks much like the [Edit section of the Control Panel](control-panel/entry-manager.md), and can in fact perform searches here using the same methods.

To add Store Items, simply check the boxes to the right of the items you wish to add to your store, make sure **Add Item** is selected in the bulk action drop-down menu, and then click Submit.

## Adding / Editing Item Details

When editing a store item or adding a new one, you will be presented with the following form. If you selected multiple items, you will be able to see and edit the details for each item all from the same page.

### Enable Item?

When checked, the item will be enabled and available for purchase. If unchecked, the `simple_commerce_purchase_tag` will not show details, purchase links, or buttons for this item.

### Regular Price

This is the price the item will normally be sold for. Required.

### Sale Price

When on sale, the item will be sold for this price. Required, even if the price is the same as the regular price.

### Use Sale Price?

When checked, the item will be sold at the Sale Price instead of the Regular Price

### Admin Email Address

Send administrator email notifications for this item to the specified email address.

### Admin Email Template

The [email template](add-ons/simple-commerce/email-templates.md) that will be used to generate administrator notification emails for this item.

### Customer Email Template

The [email template](add-ons/simple-commerce/email-templates.md) that will be used to generate customer notification emails for this item.

### New Member Group

If selected, a member who purchases this item will automatically be moved to the designated member role for this item.

For example, you could have a member role called "member_paid" and when a current registered member purchases an item called "Yearly Membership" the member primary role would be automatically switched to the "member_paid" role.

### Admin Cancel Email Template

For subscription items only, this is the [email template](add-ons/simple-commerce/email-templates.md) that will be used to generate administrator notification when a subscription runs out.

### Customer Cancel Email Template

For subscription items only, this is the [email template](add-ons/simple-commerce/email-templates.md) that will be used to generate customer notification e-mails when their subscription runs out for this item.

### Unsubscribe Member Group

For subscription items, you can designate a primary role to move the member to if their subscription runs out.

For example, if you move members to the 'member_paid' group when the purchase a 'Yearly Membership', you could have a member role 'member_unpaid' selected here. Once their subscription runs out, they will automatically be switched to the unpaid role.

### Recurring Subscription?

If checked, the item is designated as a [recurring payment](add-ons/simple-commerce/index.md#recurring-payments).

### Frequency of Subscription

The number of time periods between each recurrence of a subscription. If you set a recurring payment time period, this value is required.

For example, if the subscription payment unit is 'Weeks' and the subscription frequency is '2', purchasers will be billed by PayPal every 2 weeks.

For subscription items, you must set the time period used to calculate the duration of the subscription. In conjunction with the subscription frequency setting, this determines the automatic billing cycle for subscription items.
