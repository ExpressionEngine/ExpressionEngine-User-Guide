SUMMARY
    Extension Hook Generator -- This interactively implements an EE extension hook in an existing third-party addon

USAGE
    Extension Hook Generator php eecli.php make:extension-hook sessions_start --addon=my_existing_addon

DESCRIPTION
    Implements an EE extension hook in an add-on

OPTIONS
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add extension hook to.

    --install
    -i
        Install this extension hook after creating it. This runs all current migrations for the specified add-on. Add-on must first be installed.

