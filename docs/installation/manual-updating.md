<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Updating ExpressionEngine Manually

[TOC]

## General Information

This document describes how to manually update ExpressionEngine 3.0 or later.

Note that ExpressionEngine supports [One Click Updates](installation/one-click-updating.md) as of version 4.0 or later.

NOTE: **Important:** If you are upgrading from ExpressionEngine 2, you must first upgrade to ExpressionEngine 3 using version 3 files and instructions. Once you have completed that update, you may return to this page and upgrade to the latest version. Please visit [Upgrading from ExpressionEngine 2](https://docs.expressionengine.com/v3/installation/upgrade_from_2.x.html).

## 1. Backup and Prepare

1.  [Back-up your ExpressionEngine database and files](general/database-backup.md).
2.  [Download the latest release of ExpressionEngine](https://expressionengine.com) and unzip the files to a folder on your computer.

NOTE: **Note:** Check your third-party add-ons to see if you need updated versions for v4. Most add-ons do not need updating from v3/v4, or only need minor changes. Your add-on vendor(s) can let you know what, if anything, you need to do for your installed add-ons.

## 2. Copy Files

Working either locally with your backed up files, or on the server (**not recommended**), **copy** the following files from the newly downloaded release to your site:

1.  Copy `admin.php` to `admin.php`
2.  Copy `index.php` to `index.php`
3.  Copy `system/ee/` to `system/ee/`
4.  Copy `themes/ee/` to `themes/ee/`

NOTE: **Note:** If you’ve moved your system directory, make sure to change both `index.php` and `admin.php` to point to the correct directory. And don't forget to update **all** `admin.php` files if you're running your control panel from multiple Sites!

## 3. Run The Update Wizard

Go to your site's control panel URL (typically found at `https://example.com/admin.php` or `https://example.com/system/`) and follow the on-screen instructions to update ExpressionEngine.

## 4. Clean up

You're Done! ExpressionEngine is now fully updated. But before you go...

- If the updater could not automatically rename the installer, rename or remove `system/ee/installer/` directory manually. The installer directory can be safely removed after installing ExpressionEngine.
- To enable one-click updating, make sure your [file permissions](troubleshooting/general.md#file-permissions) are all set.
- Review [file permissions](troubleshooting/general.md#file-permissions) if something isn't working quite right.
