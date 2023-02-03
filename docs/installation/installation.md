<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Installing ExpressionEngine

[TOC]

## Pre-Flight Check

NOTE: **Important:** If you need to **update** your installation from an earlier version, see the [Update Instructions](installation/updating.md) instead.

Before getting started, make sure your web host and your browser meet all the [System Requirements](installation/requirements.md) to run ExpressionEngine.

The following article assumes you are downloading Expressionengine from the [ExpressionEngine Wesbite](https://expressionengine.com/). If you would like to install ExpressionEngine from our [GitHub repository](https://github.com/ExpressionEngine/ExpressionEngine), be sure to follow the instructions found in the repo's [README](https://github.com/ExpressionEngine/ExpressionEngine/blob/stability/README.md#if-youre-installing-from-the-repository) file for repo specific instructions.

## 1. Prep the Database

You'll need an empty database and the following credentials handy to install ExpressionEngine. If you're not sure how to create a new database or find this information, ask your web host.

- MySQL Database Name
- MySQL Server Address _(often_ `127.0.0.1` _or_ `localhost` _or the server IP address)_
- MySQL Username
- MySQL Password

## 2. Upload the Files

[Download the latest release of ExpressionEngine](https://expressionengine.com/) and unzip the files to a folder on your computer. Then use your favorite FTP client to upload the files to a publicly-accessible directory on your server.

## 3. Set File Permissions

You need to enable write access to the following files and folders:

- `system/ee/`
- `system/ee/*` (only top-level files and directories need modifying)
- `system/user/config/config.php`
- `system/user/cache/`
- `system/user/templates/`
- `images/avatars/`
- `images/captchas/`
- `images/member_photos/`
- `images/pm_attachments/`
- `images/signature_attachments/`
- `images/uploads/`
- `themes/ee/`
- `themes/ee/*` (only top-level files and directories need modifying)
- `themes/user/`

For Apache, the permissions would be `644` for files and `755` for directories. For IIS, provide all permissions to the IIS user for these files and directories.

TIP: **Tip:** On a Unix based system, you can use the following pattern in your terminal to set permissions recursively to what you need for folders and files. In this example, we are setting all directories in _system/ee_ to **755** and all files therein to **644**, recursively:

    find system/ee \( -type d -exec chmod 755 {} \; \) -o \( -type f -exec chmod 644 {} \; \)

The **more restrictive permissions** should be used to allow PHP to write to files and directories. If your running into other issues related to file permissionsm take a look at [File Permissions](troubleshooting/general.md#file-permissions) in our trouble shooting section for additional details.


## 4. Run The Installation Wizard

1.  Point your browser to the URL of the `admin.php` file you uploaded. For example: `https://example.com/admin.php`.
2.  Follow the on-screen instructions to install ExpressionEngine.
3.  Once the Installation Wizard is finished, you _should_ rename or remove the `system/ee/installer/` directory from your server.

TIP: **Tip:** If you choose not to install the default theme, your site's homepage will appear blank because no templates or content has been created yet.

## Welcome to ExpressionEngine!

You can now log in to your Control Panel at `https://example.com/admin.php`!

If you're new to ExpressionEngine, get started with the [Ten Minute Primer](getting-started/ten-minute-primer.md).

### Post-Installation Best Practices

Once you are confident that ExpressionEngine is working normally on your server, we recommend a few [best practices](installation/best-practices.md) for protecting your installation against common security risks.

## Other Installation Options

### Install with Softaculous and cPanel

If your web host utilizes the cPanel admin tool with the Softaculous auto installer, you can one-click install ExpressionEngine. Simply navigate to Softaculous, search for ExpressionEngine under "Portal/CMS" and click "Install Now".

![Softaculous](/_images/softaculous2.png)

