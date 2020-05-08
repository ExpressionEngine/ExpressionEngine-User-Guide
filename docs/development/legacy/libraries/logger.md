---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Logger Class

## Calling the Logger Class

**class `Logger`**

Load the Logger library.

    ee()->load->library('logger');

## Developer Log

The control panel contains a developer log, which is a log for ExpressionEngine and its third-party developers to bring notices or warnings to the attention of the Super Admin.

**Control Panel Location:** `Developer --> Logs --> Developer`

For example, EllisLab uses the developer log to warn developers if a core function that is planned to be deprecated is being used by any third-party add-ons.

### `developer($data[, $update = FALSE[, $expires = 0]])`

| Parameter | Type      | Description                                                                                                                                                                                                                 |
| --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$data    | `String`  | Message to send to the developer log                                                                                                                                                                                        |
| \$update  | `Boolean` | `TRUE` if you want to update a previous message instead of creating a new one. This is good for situations where a notice does not need to be logged each time it's triggered, but still needs the Super Admin's attention. |
| \$expires | `Integer` | Amount of time where you should only show one meessage. For example, if an item should only show once per week, an item is logged with an expires time of 604800 seconds.                                                   |
| Returns   | `Array`   | Array of data for the log message                                                                                                                                                                                           |

To use the developer log to log your own events, notices or warnings that need to be brought to the attention of the Super Admin, call this method and pass the string of the notice:

    ee()->logger->developer('Log message.');

NOTE: **Note:** Be conscious of how often the developer() method is used so as not to clutter the developer log and run unnecessary queries.
