<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Upgrading from EE2

[TOC]

In the move from EE2, you may want to adjust your folder structure to follow ExpressionEngine. The EECLI comes with a command that can assist with this.

**NOTE: This is an advanced command. It is highly recommended to back up both your database and files before attempting this. It is also greatly discouraged from running this command in your production environment.**

## Preparation

The Prepare Upgrade command has a number of variables that are set in order to move files to their designated places. Since this command involves greatly changing your file structure, it is of vital importance that you set these properly.

### upgrade.config.php

A base sample config exists in `system/user/config/upgrade.config.sample.php`.

```
<?php

// This is for advanced usage only. This custom config will be uploaded
return [
    // Your current EE version. We'll try and grab this from the config if you
    // leave this blank
    'ee_version'                => '',

    // Set our temporary caching directory
    'temp_directory'            => 'tmp',
    
    // Here we'll set some path variables. Include a trailing slash
    'old_base_path'             => '',
    'new_base_path'             => '',
    'old_public_path'           => '',
    'new_public_path'           => '',
    // Should the upgrader move the current system path. This is best used when
    // upgrading from EE2 to the current version. The installer will
    // automatically build your new file structure. Include a trailing slash.
    'should_move_system_path'   => false,
    'old_system_path'           => null,
    'new_system_path'           => null,
    // Should the upgrader move the current theme path. This is best used when
    // upgrading from EE2 to the current version. The installer will automatically
    // build your new file structure. Include a trailing slash.
    'should_move_theme_path'    => false,
    'old_theme_path'            => null,
    'new_theme_path'            => null,
    // Should the upgrader move your current template files. This is best used when
    // upgrading from EE2 to the current version. The installer will automatically
    // build your new file structure. Include a trailing slash.
    'should_move_template_path' => false,
    'old_template_path'         => '',
    'new_template_path'         => '',

    // Upgrade EE
    'upgrade_ee'                => false,

    'run_preflight_hooks'       => false,
    'run_postflight_hooks'      => false,

    // CUSTOM HOOKS
    // During the upgrader process, we'll run a preflight and postflight
    // Here you can include functions that will run during those calls
    'preflight_hooks'           => [
        // 'hook_name'          => function() { 
        // echo "Hello";
        // },
    ],
    'postflight_hooks'          => [
    ],

    // Upgrade map
    // If you have custom config files (i.e. Master Config) or custom paths,
    // Use this to map the appropriate folders. Otherwise, we'll try and 
    // load these via the standard EE paths.
    'upgrade_map'               => [
        'config_path'           => '',
        'database_path'         => '',
        'config_file'           => '',
        'database_file'         => '',
        'template_path'         => '',
        'index_file'            => 'index.php',
        'admin_file'            => 'admin.php',
        'index_file_old'        => 'index-old.php',
        'admin_file_old'        => 'admin-old.php',
    ],
];
```

Any variables that are not defined will be requested while initiating the command.

### Preflight and Postflight Hooks

The upgrade process can be interrupted to run arbitrary PHP closure functions by adding these to the `upgrade.config.php` file. These are run at the beginning and end, respectively, of the file moving process.

```
'preflight_hooks'           => [
    'slugified_module_name' => function() { 
    	echo "Hello";
    },
],
```

### Upgrade Maps

During the course of developing your ExpressionEngine site, you may have moved a file to a different location (i.e. moving the `admin.php` to `/cp`) or changed a filename (i.e. renaming `admin.php` to `control-panel.php`).

These file paths can specifically be changed in the `upgrade_map` associative array in the `upgrade.config.php`. Any value that is not defined in this array will automatically be fetched based on the expected path for the starting version.


## Command

The basic command can be executed by running:

	php eecli prepare-upgrade

The command will automatically try to find an `upgrade.config.php` file in your `system/user/config` folder. You can also add these parameters manually:

**upgrade-ee**: Start the upgrade after moving files
**force-add-on-upgrade**: After upgrading EE, runs addon upgrades
**old-base-path**: Absolute path of old site
**new-base-path**: Absolute path of new site
**old-public-path**: Absolute path of old site public path
**new-public-path**: Absolute path of new site public path
**no-config-file**: Ignores the config file and doesn't check for it
**ee-version**: The current site version
**should-move-system-path**: Whether the upgrade process should move the old theme folder to the new site
**old-system-path**: Absolute path of old site system folder
**new-system-path**: Absolute path of new site system folder
**should-move-template-path**: Whether the upgrade process should move the old template folder to the new site
**old-template-path**: Absolute path of old site template folder
**new-template-path**: Absolute path of new site template folder
**should-move-theme-path**: Whether the upgrade process should move the old theme folder to the new site
**old-theme-path**: Absolute path of old site user theme folder
**new-theme-path**: Absolute path of new site user theme folder
**run-preflight-hooks**: Whether the upgrade process should run defined preflight hooks
**run-postflight-hooks**: Whether the upgrade process should run defined postflight hooks
**temp-directory**: The directory we work magic in