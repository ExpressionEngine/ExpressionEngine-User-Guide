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

# Simple Commerce Module Extension Hooks

[TOC=2]

## `simple_commerce_evaluate_ipn_response($this, $result)`

| Parameter | Type     | Description                                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------------------------- |
| \$this    | `Object` | The current Simple Commerce object including all data relating to the purchase and debug state |
| \$result  | `String` | PayPal's response to the IPN confirmation                                                      |
| Returns   | `String` | Modified IPN response (`$result`)                                                              |

Take over processing of PayPal's response to an IPN confirmation.

How it's called:

    $result = ee()->extensions->universal_call('simple_commerce_evaluate_ipn_response', $this, $result);
    if (ee()->extensions->end_script === TRUE) return;

## `simple_commerce_perform_actions_end($this, $row)`

| Parameter | Type     | Description                                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------------------------- |
| \$this    | `Object` | The current Simple Commerce object including all data relating to the purchase and debug state |
| \$row     | `Array`  | The database record for the store item                                                         |
| Returns   | `Void`   |                                                                                                |

After a purchase is recorded, do more processing.

How it's called:

    ee()->extensions->universal_call('simple_commerce_perform_actions_end', $this, $query->row());
    if (ee()->extensions->end_script === TRUE) return;

Useful object variables:

- `$this->post` - array of information about the purchase
- `$this->debug` - whether or not debug mode is enabled

## `simple_commerce_perform_actions_start($this, $row)`

| Parameter | Type     | Description                                                                                    |
| --------- | -------- | ---------------------------------------------------------------------------------------------- |
| \$this    | `Object` | The current Simple Commerce object including all data relating to the purchase and debug state |
| \$row     | `Array`  | The database record for the store item                                                         |
| Returns   | `Void`   |                                                                                                |

After a purchase is recorded, do more processing before EE's processing.

How it's called:

    ee()->extensions->universal_call('simple_commerce_perform_actions_start', $this, $query->row());
    if (ee()->extensions->end_script === TRUE) return;
