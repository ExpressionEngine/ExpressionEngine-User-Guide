<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Simple Commerce – Email Templates

[TOC]

**Control Panel Location:** `Developer --> Add-Ons --> Simple Commerce --> Email Templates`

Email templates allow you to create highly customized notification templates that you can associate with store items. Email templates can be created and used for both administrator notifications and customer notifications.

## Email Templates Home Page Options

### Add Email Template

The **Create New** button allows you to create email notification templates.

### Edit Email Templates

To edit email templates, click the edit button in the toolbar next to the name of the email template you wish to edit.

## Add / Edit Email Template

Below is an example of a typical administrator purchase notification email.

    Purchase completed!  QTY {quantity} - {item_name}
    Total Payment: {payment_gross}
    PayPal TransactionFee: {payment_fee}
    --------------------------
    Buyer ({payer_status}): {first_name} {last_name} {payer_business_name}
    Address ({address_status}): {address_name} {address_street} {address_city}, {address_state}  {address_zip} {address_country}

### Name

A descriptive name for the email template. This will be shown in the email template drop-down menus of the store [item creation](add-ons/simple-commerce/items.md) form.

### Email Subject

The subject that will be used for the notification email.

### Email Body

The message body that will be used for the notification email.

### Available Variables

The following variables can be used anywhere in either the email subject or the email body.

- {address_city}
- {address_country}
- {address_name}
- {address_state}
- {address_status}
- {address_street}
- {address_zip}
- {business}
- {custom}
- {exchange_rate}
- {first_name}
- {invoice}
- {item_name}
- {item_number}
- {last_name}
- {mc_currency}
- {mc_fee}
- {mc_gross}
- {memo}
- {notify_version}
- {num_cart_items}
- {option_name1}
- {option_name2}
- {option_selection1}
- {option_selection2}
- {payer_business_name}
- {payer_email}
- {payer_id}
- {payer_status}
- {payment_date}
- {payment_fee}
- {payment_status}
- {payment_type}
- {pending_reason}
- {quantity}
- {reason_code}
- {receiver_email}
- {receiver_id}
- {settle_amount}
- {settle_currency}
- {tax}
- {txn_id}
- {txn_type}
- {verify_sign}
