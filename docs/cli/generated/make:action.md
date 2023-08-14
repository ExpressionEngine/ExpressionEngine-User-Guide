SUMMARY
    Action Generator -- This interactively generates an EE Action for an existing third-party addon

USAGE
    Action Generator php eecli.php make:action MyNewAction --addon=my_existing_addon

DESCRIPTION
    Creates a new action for an add-on

OPTIONS
    --addon=<value>
    -a <value>
        Folder for third-party add-on you want to add action to.

    --install
    -i
        Install this action after creating it. This runs all current migrations for the specified add-on. Add-on must first be installed.

    --csrf_exempt
    -c
        command_make_action_option_csrf_exempt

