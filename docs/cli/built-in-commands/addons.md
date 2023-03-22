# Addons Management

Set of CLI commands that allows listing, installing, updating and uninstalling add-ons

[TOC]

## `addons:list`

List all add-on available in the system

    php eecli.php addons:list

List add-ons that can be installed

    php eecli.php addons:list i
or
    php eecli.php addons:list installed

List add-ons that can be updated

    php eecli.php addons:list a
or
    php eecli.php addons:list update-available

List add-ons that can be uninstalled

    php eecli.php addons:list u
or
    php eecli.php addons:list uninstalled

## `addons:install`

Installs an add-on. Add-on name can be selected (typed) in dialog or provided with `--addon` or `-a` option

    php eecli.php addons:install
or
    php eecli.php addons:install --addon block_and_allow

## `addons:update`

Updates an add-on. Add-on name can be selected (typed) in dialog or provided with `--addon` or `-a` option.
You can also set `--all` flag to run all add-on updates that are available.

    php eecli.php addons:update
or
    php eecli.php addons:update --addon block_and_allow
or
    php eecli.php addons:update --all

## `addons:uninstall`

Uninstalls an add-on. Add-on name can be selected (typed) in dialog or provided with `--addon` or `-a` option

    php eecli.php addons:uninstall
or
    php eecli.php addons:uninstall --addon block_and_allow
