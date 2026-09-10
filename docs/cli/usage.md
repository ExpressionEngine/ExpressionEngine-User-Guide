# CLI Usage

Commands to control and report on many of the core operations of ExpressionEngine can be issued via the terminal of your choice in the format of:

`$ php system/ee/eecli.php version`

Assuming you're in the directory that contains the system folder, this will have `php` use ExpressionEngine's Command Line Interface tool, `eecli`, to run the `version` command. 

This is the most basic of ExpressionEngine commands, and will display something similar to:

```
ExpressionEngine Version: 7.5.25
Build: 20260623
PHP Version: 8.2.32
```
You may also be able to use the CLI with PHP implied. Command line usage is a broad topic, and the details of your system may vary.

`$ ./system/ee/eecli.php version`

Commands can be interactive and ask you questions as they run. For example, this command will walk you through setting up the files and framework for a custom EE add-on:

```
$ php system/ee/eecli.php make:addon

Let's build your add-on!
What is the name of your add-on? 
etc.
```

## List All Commands

To view a list of all available commands, use the list command:

`php system/ee/eecli.php list`

This will return a basic list of all available system and user-generated commands.

```
$ php system/ee/eecli.php list

------------------------------------------------------------------
| Command             | Description                              |
------------------------------------------------------------------
| list                | Lists all available commands             |
| addons:install      | Installs add-on and all its components   |
| backup:database     | Backup the database                      |
| channels:list       | Lists all channels in the system         |
| cache:clear         | Clears all ExpressionEngine caches       |
| config:config       | Updates config values in config.php file |
...
```

## Command Line Security

WARN: **Important:** Unless disabled, the CLI is enabled by default and available to any person who has SSH or terminal access to your site's web server and who can run PHP scripts. The CLI does not handle authorization using ExpressionEngine's member system. It relies entirely on your server's authorization methods and simply treats a CLI user as a generic superuser.

EE is available via the CLI even when EE is set to offline mode -- this mirrors a superadmin's access permissions in the control panel and makes it possible to perform maintenance and upgrades when a site is offline.

If you want to disable CLI globally, this can be done by setting `cli_enabled` [configuration override](general/system-configuration-overrides.md#cli_enabled) to `n` or by running the following command:

`$ php eecli.php config:config -c cli_enabled -v n` 

(This would be a poor choice of command to use to test the CLI.)

You can also enable and disable the CLI from [Security & Privacy Settings](control-panel/settings/security-privacy.md#enable-the-command-line-interface) in the Control Panel.

## Get Help

You can get help information for any command by using the `--help` or `-h` parameter

```
$ php system/ee/eecli.php config:config -h

SUMMARY
    Update Config Values -- Gives the ability to update config values

USAGE
    Update Config Values php eecli.php config:config -c is_system_on -v n

DESCRIPTION
    Updates config values in config.php file

OPTIONS
    --config-variable=<value>
    -c <value>
        The config item to modify

    --value=<value>
    -v <value>
        The value to set the config item to
```

Additional details may also be available here in the ExpressionEngine Docs or on the add-on developer's website.
