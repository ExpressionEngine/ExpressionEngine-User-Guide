<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Updating ExpressionEngine

[TOC]

## One Click Updating

ExpressionEngine supports one-click updating as of **Version 4.0** or newer. If you are running a version older than 4, then you must perform a [manual update](#updating-manually).

When an update is available, you'll see the version number in the control panel footer turn yellow or red. Click the version number, then click "Update Now".

In the rare case an update fails, please read [Troubleshooting Automatic Updates](troubleshooting/general.md#troubleshooting-automatic-updates).

## Updating Via Command Line

You can also update ExpressionEngine via the command line on your server. This allows you to keep your installation's files only writable by your user and not also by your web service.

To update via the command line, execute the tool located at `system/ee/eecms`:

    php system/ee/eecms upgrade

Add a `-v` flag for verbose output:

    ./eecms upgrade -v

If you encounter a problem that requires rolling back the upgrade, you can run this command:

    ./eecms --rollback

If you cannot use the one-click updater or command-line updater, you can still do a [manual update](#updating-manually).

**Note:** If you have code in your `config.php` that relies on `$_SERVER` variables or anything else not available in a command-line environment, you can check for `REQ == 'CLI'` to set alternate values, e.g.:

    if (REQ == 'CLI')
    {
      $config['site_url'] = 'https://mysite.dev';
      // ...
    }
    else
    {
      // Set config via environment variables
    }

## Updating Manually

This document describes how to manually update ExpressionEngine 3.0 or later.

Note that ExpressionEngine supports [One Click Updates](#one-click-updating) as of **version 4.0** or later.

NOTE: **Important:** If you are upgrading from ExpressionEngine 2, you must first upgrade to ExpressionEngine 3 using version 3 files and instructions. Once you have completed that update, you may return to this page and upgrade to the latest version. Please visit [Upgrading from ExpressionEngine 2](https://docs.expressionengine.com/v3/installation/upgrade_from_2.x.html).

### 1. Backup and Prepare

1. [Back-up your ExpressionEngine database and files](general/database-backup.md).
2. [Download the latest release of ExpressionEngine](https://expressionengine.com) and unzip the files to a folder on your computer.

NOTE: **Note:** Check your third-party add-ons to see if you need updated versions for v4. Most add-ons do not need updating from v3/v4, or only need minor changes. Your add-on vendor(s) can let you know what, if anything, you need to do for your installed add-ons.

### 2. Copy Files

Working either locally with your backed up files, or on the server (**not recommended**), **copy** the following files from the newly downloaded release to your site:

1.  Copy `admin.php` to `admin.php`
2.  Copy `index.php` to `index.php`
3.  Copy `system/ee/` to `system/ee/`
4.  Copy `themes/ee/` to `themes/ee/`

NOTE: **Note:** If you’ve moved your system directory, make sure to change both `index.php` and `admin.php` to point to the correct directory. And don't forget to update **all** `admin.php` files if you're running your control panel from multiple Sites!

### 3. Run The Update Wizard

Go to your site's control panel URL (typically found at `https://example.com/admin.php` or `https://example.com/system/`) and follow the on-screen instructions to update ExpressionEngine.

### 4. Clean up

You're Done! ExpressionEngine is now fully updated. But before you go...

- If the updater could not automatically rename the installer, rename or remove `system/ee/installer/` directory manually. The installer directory can be safely removed after installing ExpressionEngine.
- To enable one-click updating, make sure your [file permissions](troubleshooting/general.md#file-permissions) are all set.
- Review [file permissions](troubleshooting/general.md#file-permissions) if something isn't working quite right.
