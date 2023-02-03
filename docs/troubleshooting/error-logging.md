<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2023, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Error Logging

[TOC]

### Error Logging

When debugging is disabled, there can be situations where PHP errors can cause a white screen, or there can be errors that are completley invisable to the user, but result in incorrect execution of a given page.

To find these errors, it's recommended to enabled logging in ExpressionEngine.

To enable error logging, you need to do the following:

1. Create `logs` folder inside your `system/user` folder and make sure it's writable
2. Open `config.php` file and add following config overrides
    - [`log_threshold`](general/system-configuration-overrides.md#log_threshold) (required)
    - [`log_date_format`](general/system-configuration-overrides.md#log_date_format) (optional)

Example:
```
    $config['log_date_format'] = 'Y-m-d H:i:s';
    $config['log_threshold'] = '1';
```
After adding the two config file items above, PHP errors, warnings etc. will be added logged to a file with the corresponding date inside `system/user/logs` folder.
