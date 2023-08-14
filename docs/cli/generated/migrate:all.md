SUMMARY
    Migrate -- Loops through the core migrations folder, and add-on migrations folder and executes all migrations that have not previously been run. Core migrations will all execute first, then add-on migrations. When migrations are being run for multiple add-ons, all migrations for each add-on are grouped together and ran together

USAGE
    Migrate php eecli.php migrate:all

DESCRIPTION
    Runs core migrations, then each add-on's migrations

OPTIONS
    --steps=<value>
    -s <value>
        Specify the number of migrations to run

