SUMMARY
    Migrate -- Loops through the core migrations folder, and add-on migrations folder and executes all migrations that have not previously been run. If running all migrations, core migrations will all execute first, then add-on migrations. When migrations are being run for multiple add-ons, all migrations for each add-on are grouped together and ran together

USAGE
    Migrate php eecli.php migrate

DESCRIPTION
    Runs specified migrations (all, core, or add-ons)

OPTIONS
    --steps=<value>
    -s <value>
        Specify the number of migrations to run

    --everything
    -e
        Run all migrations. Core runs first, all add-on migrations, one at a time.

    --all
        Run all migrations. Alias for --everything

    --core
    -c
        Run only core migrations. This excludes all add-on migrations.

    --addon=<value>
    -a <value>
        Run migration only for specified addon.

    --addons
        Run migration only for specified addon.

