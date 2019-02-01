<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# One-Click Updates

[TOC]

ExpressionEngine supports one-click updating as of **Version 4.0** or newer.

NOTE: **Note:** If you are running a version older than 4, then you must perform a [manual update](installation/manual-updating.md).

## How to Update

When an update is available, you'll see the version number in the control panel footer turn yellow or red. Click the version number, then click "Update Now".

## Troubleshooting automatic updates

Below are potential issues you may run into while using ExpressionEngine's automatic update methods.

### "The following paths are not writable:"

This error occurs when the process running the updater does not have proper filesystem permissions to move the new ExpressionEngine files into place. Take a look at the [Set File Permissions](troubleshooting/general.md#file-permissions) section of the installation guide to make sure correct permissions are set.

### Cannot rollback a failed upgrade

If an error occurs while ExpressionEngine is updating its files or database, the updater should provide a link to rollback to your previous installation. But in the rare case that doesn't work, here is how you can get back up and running again.

1.  Navigate to `system/user/cache/ee_update/backups/` and check to make sure there are backups in the `system_ee` folders and `themes_ee` folders.
2.  Delete the contents of `system/ee/` and move the contents of `system_ee` to `system/ee/`.
3.  Delete the contents of `themes/ee/` and move the contents of `themes_ee` to `themes/ee/`.
4.  If there is an SQL file located at `system/user/cache/ee_update/database.sql`, import that into your database to rollback database changes. This is only a partial backup to restore what the updater has changed, so do NOT delete the contents of your database first.
5.  Open `system/user/config/config.php` and set the `is_system_on` config to `y`.

At this point, your site should be restored and you should be able to re-enter your control panel.

If there are no files in your backup directory, it's likely the updater failed before it could make a backup and your files and database are still intact. You likely just need to remove the folder located at `system/ee/updater/` to access your control panel again.

If you hit an error you cannot resolve there should be a log file located at `system/user/cache/ee_update/update.log` that may contain helpful information to help diagnose the issue.
