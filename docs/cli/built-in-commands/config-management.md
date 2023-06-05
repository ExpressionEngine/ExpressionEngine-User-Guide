# Config Management

Set of CLI commands that updates the config file values, as well as ENV values. These are commonly use to provision a site or as part of a deploy script.

[TOC]

## `config:config`

Updates values in the config.php file.

### Options list
    --config-variable=<value>
    -c <value>
        The config item to modify

    --value=<value>
    -v <value>
        The value to set the config item to

### Examples

Set system to offline:

    php eecli.php config:config -c is_system_on -v n

Set system to online:

    php eecli.php config:config -c is_system_on -v y


Set debug to 1:

    php eecli.php config:config -c debug -v 1


## `config:env`

Updates values in the .env.php file.

### Options list
    --env-variable=<value>
    -e <value>
        The env item to set/modify

    --value=<value>
    -v <value>
        The value to set the env item to

### Examples

Set system to offline:

    php eecli.php config:env -e IS_SYSTEM_ON -v n

Set system to online:

    php eecli.php config:env -e IS_SYSTEM_ON -v y

Set EE_INSTALL_MODE to false

    php eecli.php config:env -e EE_INSTALL_MODE -v FALSE


