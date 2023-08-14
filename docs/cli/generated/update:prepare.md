SUMMARY
    Prepare Update -- This command copies all files necessary for upgrading into a different ExpressionEngine site and restructures it

USAGE
    Prepare Update php eecli.php update:prepare

DESCRIPTION
    Prepare a site to be upgraded using these files

OPTIONS
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
        Ignores the config file and doesn't check for it

    --ee-version
        The current site

    --should-move-system-path
        Whether the upgrade process should move the old system folder to the new site

    --old-system-path=<value>
        Absolute path of old site system folder

    --new-system-path=<value>
        Absolute path of new site system folder

    --should-move-template-path
        Whether the upgrade process should move the old template folder to the new site

    --old-template-path=<value>
        Absolute path of old site template folder

    --new-template-path=<value>
        Absolute path of new site template folder

    --should-move-theme-path
        Whether the upgrade process should move the old theme folder to the new site

    --old-theme-path=<value>
        Absolute path of old site user theme folder

    --new-theme-path=<value>
        Absolute path of new site user theme folder

    --run-preflight-hooks
        Whether the upgrade process should run defined preflight hooks

    --run-postflight-hooks
        Whether the upgrade process should run defined postflight hooks

    --temp-directory
        The directory we work magic in

