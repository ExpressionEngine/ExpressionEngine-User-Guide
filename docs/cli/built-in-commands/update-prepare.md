# `update:prepare`

Prepare Update -- Prepares a site for an ExpressionEngine upgrade by moving/copying files and optionally running the upgrade.

Use this for upgrade preparation workflows driven by `upgrade.config.php` and/or CLI flags.

## Syntax

`php eecli.php update:prepare`

## Options list:

```
    --upgrade-ee
        Start the upgrade after moving files

    --force-add-on-upgrade
        After upgrading EE, runs add-on upgrades

    --old-base-path=<value>
        Absolute path of old site

    --new-base-path=<value>
        Absolute path of new site

    --old-public-path=<value>
        Absolute path of old site public path

    --new-public-path=<value>
        Absolute path of new site public path

    --no-config-file
        Ignore upgrade.config.php and use interactive/CLI values

    --ee-version
        Current site version source flag used by the upgrade preparer

    --should-move-system-path
        Move old system folder to the new site

    --old-system-path=<value>
        Absolute path of old site system folder

    --new-system-path=<value>
        Absolute path of new site system folder

    --should-move-template-path
        Move old template folder to the new site

    --old-template-path=<value>
        Absolute path of old site template folder

    --new-template-path=<value>
        Absolute path of new site template folder

    --should-move-theme-path
        Move old theme folder to the new site

    --old-theme-path=<value>
        Absolute path of old site user theme folder

    --new-theme-path=<value>
        Absolute path of new site user theme folder

    --run-preflight-hooks
        Run preflight hooks defined in upgrade config

    --run-postflight-hooks
        Run postflight hooks defined in upgrade config

    --temp-directory
        Temporary working directory flag used by the upgrade preparer
```

## Examples:

Prepare upgrade interactively:

`php eecli.php update:prepare`

Prepare upgrade and run ExpressionEngine upgrade after file operations:

`php eecli.php update:prepare --upgrade-ee`

Prepare upgrade using explicit old/new base paths:

`php eecli.php update:prepare --old-base-path=/var/www/old-site --new-base-path=/var/www/new-site`
