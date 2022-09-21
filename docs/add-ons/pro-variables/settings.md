<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Settings

## Settings for Pro Variables  


### License key

Enter your purchased license key here. The module won’t work without one.

### Select Variable Managers

Select the member groups that are allowed to manage the variables, rather than just editing their contents.

### Clear cache

If set to Yes, all native cache will be cleared after variables are saved. If set to Ask, a checkbox will appear next to the Save Changes button to optionally clear the cache. It will be unchecked by default with opt-in, checked by default with opt-out.

### Enable early parsing?

Choose if variables can be parsed early in the parsing order; before or after existing Snippets and config-variables. Yes, before Snippets will parse early parsed Pro Variables before Snippets and variables set in config.php; Yes, after Snippets will parse them after. **Use caution when turning on this feature, as users could potentially break your templates!**


### Variable types

Here you can find a list of available Variable Types and Pro Variables compatible Field Types. Select which types you want to enable. Disabled types will not appear in the module.

## Config overrides

Four of the extension settings – _License key_, _Save as files_, _One way sync_, and _File path_ – can be overridden by setting them in the config.php file. If you do so, the values in the extension settings will be shown as disabled input fields. You’ll need to update the config.php file itself if you want to change the values of these settings.

    $config['pro_variables_license_key'] = '12345';
    $config['pro_variables_save_as_files'] = 'y';
    $config['pro_variables_one_way_sync'] = 'n';
    $config['pro_variables_file_path'] = '/var/www/htdocs/my_vars/';

NOTE: **Note:** all file syncing options were removed in v3.2.0. As Pro Variables extends native Global Variables, EE handles syncing to file natively.
