<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Updating ExpressionEngine

[TOC]

## When To Update
It is recommended that you always update your installation of ExpressionEngine when a new version is released to ensure that you have all bug fixes, security updates, and new features.

NOTE: **Note:** Shortly after a major version is released, the previous major version will become a legacy product. Once a product is designated a legacy product, it will only receive security updates and will automatically become a retired product 1 year later (meaning no updates of any kind). Reference the [Version Support](https://expressionengine.com/support/version-support) page of the ExpressionEngine website for more information.


## Upgrading Major Versions
WARN: **Important** Upgrading major version (example from v5.x to v6.x) typically includes major updates and breaking changes. Do not upgrade major version manually or via 1-click without testing in a test or development environment first. Always following best practices when Upgrading ExpressionEngine
- Backup files
- Backup Database
- Update Add-ons (confirm they support new major version)


## One Click Updating

ExpressionEngine supports one-click updating as of **Version 4.0** or newer. If you are running a version older than 4, then you must perform a [manual update](#updating-manually).

NOTE: **Note:** If updating from a version prior to ExpressionEngine 6, you may need to rename or remove `system/ee/EllisLab` directory manually. You will also need to manually copy the [latest index.php and admin.php files](_downloads/EE6_Index_Admin.zip) to your site's root folder.

When an update is available, you'll see the version number in the control panel footer turn yellow or red. Click the version number, then click "Update Now".

**Upgrade Steps**
1. Backup files and Database
2. Confirm all add-ons are updated and compatible with new major ExpressionEngine version
3. Test in staging environment
4. Review the [Version Notes](installation/version-notes.md) for any version-specific changes that you may need to make to your installation.

In the rare case an update fails, please read [Troubleshooting Automatic Updates](troubleshooting/general.md#troubleshooting-automatic-updates).

NOTE: **Website Online Status:** In some versions of ExpressionEngine the current [Website Online](control-panel/settings/general.md#website-online) status is not available to the updater. In this instance an alert will be displayed post-update with the current [Website Online](control-panel/settings/general.md#website-online) status and the option to turn the system on or off. Please make sure to review this alert and your [Website Online](control-panel/settings/general.md#website-online) status to ensure your website is working as expected.
![system status](/_images/ee6-offline.png)

## Updating Via EECLI

You can also update ExpressionEngine via the command line on your server. This allows you to keep your installation's files only writable by your user and not also by your web service.

To update via the [eecli](cli/intro.md) tool, run:

    php eecli.php update

#### Options

- **rollback**: Rollsback last update
- **verbose,v**: Verbose output
- **force-addon-upgrades**: Automatically runs all addon updaters at end of update (advanced)
- **y**: Skip all confirmations. (advanced)

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
- Review the [Version Notes](installation/version-notes.md) for any version-specific changes that you may need to make to your installation.
- Review [file permissions](troubleshooting/general.md#file-permissions) if something isn't working quite right.
