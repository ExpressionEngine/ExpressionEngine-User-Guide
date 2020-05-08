<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Moving ExpressionEngine to Another Server

[TOC]

This article outlines the basic procedure for moving ExpressionEngine to another server. Please note that you may need to perform additional steps if you are using any third-party add-ons that store their own path configurations.

## 1. Verify Server Compatibility

Upload the [Server Compatibility Wizard](installation/requirements.md#server-compatibility-wizard) to the new server and run it to verify basic compatibility with ExpressionEngine.

## 2. Clear Caches

Go to `Developer --> Utilities --> Cache Manager`. Select **All Caches** and click Submit.

## 3. Back-up Database and Files

- Back-up your existing ExpressionEngine database.
- Back-up all existing ExpressionEngine files and folders.

## 4. Import to the New Database

Create a new, empty database on the new server and import the back-up file you created in **Step 3** into it. Typically this will be a SQL file (or a ZIP file containing the SQL file).

## 5. Copy Files and Folders

Copy all ExpressionEngine files and folders from the old server to the new server. At a minimum, this will typically include:

- admin.php
- index.php
- images/
- system/
- themes/

Your folder structure may look a bit different if the site was configured to run with the system folder renamed or above web root.

## 6. Verify File Permissions

You need to enable write access to the following files and folders. In a worst-case scenario that would be `666` for files and `777` for directories. You should check with your web host to see if more restrictive permissions can be used to allow PHP to write to files and directories. See [File Permissions](troubleshooting/general.md#file-permissions) for details.

- Ensure the following file is writable:
  - system/user/config/config.php
- Ensure the following folders are writable:
  - system/user/cache/
  - system/user/templates/
  - images/avatars/
  - images/captchas/
  - images/member_photos/
  - images/pm_attachments/
  - images/signature_attachments/
  - images/uploads/

## 7. Update config.php

Open `system/user/config/config.php` and update the database settings to match those of the new server.

Since CSS and JavaScript cannot be loaded without access to the theme folder, it's best to override that setting now since you are already editing the config.php file:

    $config['theme_folder_url'] = "https://example.com/themes/";
    $config['theme_folder_path'] = "/home/user/example.com/themes/";

The other paths and folders you can update after logging in to the control panel in **Step 9**.

## 8. Verify index.php and admin.php

Verify that your site's root index.php and admin.php files have the correct `$system_path` for the new server.

## 9. Log In and Update Paths

At this point, you should be able to log in to the Control Panel using admin.php. If not, please verify that the settings made in **Step 7** and **Step 8** are correct.

There are typically several areas of the Control Panel in which paths may need to be updated, including:

- `Settings --> URL and Path Settings`
- `Settings --> CAPTCHA`
- `Settings --> Content & Design`
- `Settings --> Avatars`
- `Developer --> Channels`
- `Files`

You can also set many of these paths in your config.php file using configuration variables:

    $config['site_url'] = "https://example.com/";

    $config['theme_folder_url'] = "https://example.com/themes/";
    $config['theme_folder_path'] = "/home/user/example.com/themes/";

    $config['captcha_url'] = "https://example.com/images/captchas/";
    $config['captcha_path'] = "/home/user/example.com/images/captchas/";

    $config['emoticon_url'] = "https://example.com/images/smileys/";

    $config['avatar_url'] = "https://example.com/images/avatars/";
    $config['avatar_path'] = "/home/user/example.com/images/avatars/";

    $config['sig_img_url'] = "https://example.com/images/signature_attachments/";
    $config['sig_img_path'] = "/home/user/example.com/images/signature_attachments/";

    $config['upload_preferences'] = array(
        6 => array(                                                    // ID of upload destination
            'name'        => 'Image Uploads',                          // Display name in control panel
            'server_path' => '/home/user/example.com/images/uploads/', // Server path to upload directory
            'url'         => 'https://example.com/images/uploads/'      // URL of upload directory
        )
    );

## 10. Clear Caches (Again!)

Go to `Developer --> Utilities --> Cache Manager`. Select **All Caches** and click Submit.

## You're Done!

At this point, your site should be fully functional. Check to make sure that there are no links still pointing to the previous server. It is recommended that links be generated using the [{path}](templates/globals/path.md) or [{site_url}](templates/globals/single-variables.md#site_url) variables for maximum portability.
