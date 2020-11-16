<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
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

TIP: **Feature Update:**  
As of ExpressionEngine 5.4, you may now upgrade directly from ExpressionEngine 2 to the current version. 

### 1. Backup and Prepare

1. [Back-up your ExpressionEngine database and files](general/database-backup.md).
2. [Download the latest release of ExpressionEngine](https://expressionengine.com) and unzip the files to a folder on your computer.

NOTE: **Note:** Check your third-party add-ons to see if you need updated versions for the latest version of ExpressionEngine. Most add-ons do not need major changes when updating from v3 or higher. Your add-on vendor(s) can let you know what, if anything, you need to do for your installed add-ons. **Any add-ons not compatible with the version you are upgrading to, should be uninstalled and removed before attempting the upgrade.**

### 2. Copy Files

Working either locally with your backed up files, or on the server (**not recommended**), **copy** the following files from the newly downloaded release to your site:

[TOC=4]

#### If updating from ExpressionEngine 2
Copy the following files from the backup of your current site to the new folder where you unzipped the new version of ExpressionEngine on your computer:

1. Copy `system/expressionengine/config/config.php` to `system/user/config/config.php`
2. Copy `system/expressionengine/config/database.php` to `system/user/config/database.php`
3. If you have any languages other than English in your Control Panel, copy all files and directories except english from `system/expressionengine/language/` to `system/user/language/`.
4. If you have the forum module installed, copy the directory `themes/forum_themes/` to `themes/user/forum/`.
5. If you have the wiki module installed, copy the directory `themes/wiki_themes/` to `themes/user/wiki_themes/`.
6. If you save templates as files, copy all files and directories from `system/expressionengine/templates/` to `system/user/templates/`.

NOTE: **Note:** If you’ve moved your system directory, make sure to change both `index.php` and `admin.php` to point to the correct directory. And don't forget to update **all** `admin.php` files if you're running your control panel from multiple Sites!

NOTE: **Note:** We recommend putting ExpressionEngine 6 compatible third-party add-ons into the `system/user/addons/` directory now.

On the server, rename the following files and directories:
- Rename `system/` to `system_old/`
- Rename `themes/` to `themes_old/`
- Rename `index.php` to `index.php.old`
- Rename `admin.php` to `admin.php.old`

Then upload the following files and directories:
- `system/`
- `themes/`
- `index.php`
- `admin.php`

#### If updating from ExpressionEngine 3 or higher
1.  Copy `admin.php` to `admin.php`
2.  Copy `index.php` to `index.php`
3.  Copy `system/ee/` to `system/ee/`
4.  Copy `themes/ee/` to `themes/ee/`

NOTE: **Note:** If you’ve moved your system directory, make sure to change both `index.php` and `admin.php` to point to the correct directory. And don't forget to update **all** `admin.php` files if you're running your control panel from multiple Sites!

NOTE: **Note:** We recommend putting ExpressionEngine 6 compatible third-party add-ons into the `system/user/addons/` directory now.

### 3. Run The Update Wizard

Go to your site's control panel URL (typically found at `https://example.com/admin.php` or `https://example.com/system/`) and follow the on-screen instructions to update ExpressionEngine.

### 4. Clean up

You're Done! ExpressionEngine is now fully updated. But before you go...

- If the updater could not automatically rename the installer, rename or remove `system/ee/installer/` directory manually. The installer directory can be safely removed after installing ExpressionEngine.
- To enable one-click updating, make sure your [file permissions](troubleshooting/general.md#file-permissions) are all set.
- Review [file permissions](troubleshooting/general.md#file-permissions) if something isn't working quite right.
