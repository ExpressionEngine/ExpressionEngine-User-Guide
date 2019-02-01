<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Updating Via The Command Line

You can also update ExpressionEngine via the command line on your server. This allows you to keep your installation's files only writable by your user and not also by your web service.

To update via the command line, execute the tool located at `system/ee/eecms`:

    php system/ee/eecms upgrade

If you give executable permissions to the `eecms` file (`chmod +x eecms`), you can also execute it directly:

    system/ee/eecms upgrade

Or if executing from the `ee` directory:

    ./eecms upgrade

Add a `-v` flag for verbose output:

    ./eecms upgrade -v

If you encounter a problem that requires rolling back the upgrade, you can run this command:

    ./eecms upgrade --rollback

If you cannot use the one-click updater or command-line updater, you can still do a [manual update](installation/manual-updating.md).

NOTE: **Note:** If you have code in your `config.php` that relies on `$_SERVER` variables or anything else not available in a command-line environment, you can check for `REQ == 'CLI'` to set alternate values, e.g.:

    if (REQ == 'CLI')
    {
      $config['site_url'] = 'https://mysite.dev';
      // ...
    }
    else
    {
      // Set config via environment variables
    }
