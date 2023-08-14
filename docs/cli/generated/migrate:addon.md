SUMMARY
    Migrate Addon -- Loops through the add-on folders and runs all migrations that have not previously been run. If running all addons, migrations will be grouped by add-on and run together

USAGE
    Migrate Addon php eecli.php migrate:addon

DESCRIPTION
    Runs add-on migrations

OPTIONS
    --steps=<value>
    -s <value>
        Specify the number of migrations to run

    --everything
    -e
        Run all addn-on migrations

    --all
        Run all addn-on migrations. Alias for --everything

    --addon=<value>
    -a <value>
        Run migration only for specified addon.

