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

# Channel Fields API Extension Hooks

## `custom_field_modify_data(EE_Fieldtype $ft, $method, $data)`

| Parameter | Type     | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| \$ft      | `Object` | Fieldtype object that the method will be called on. |
| \$method  | `String` | Name of the method to be called                     |
| \$data    | `Mixed`  | Data passed to the fieldtype. Varies by method.     |
| Returns   | `Mixed`  | Modified \$data parameter                           |

Modify the main custom field data array before a custom field method is called.

How it's called:

    $data = ee()->extensions->universal_call('custom_field_modify_data', $obj, $method, $data);
