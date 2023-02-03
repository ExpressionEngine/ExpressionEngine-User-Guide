<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Error Logging

[TOC]

### Error Logging

There could be situations when there is PHP error that is invisible to the user, but is preventing the code logic to be executed properly.

To help finding those out, error logging could be enabled in ExpressionEngine.

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

Now, when a code issue is encountered within ExpressionEngine, error or warning message is added to the file for corresponding date inside `system/user/logs` folder.