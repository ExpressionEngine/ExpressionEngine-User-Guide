SUMMARY
    Backup Database -- Backup the ExpressionEngine database

USAGE
    Backup Database php eecli.php backup:database

DESCRIPTION
    Backup the database

OPTIONS
    --relative_path=<value>
    -p <value>
        Path to database backup, relative to the cache folder

    --absolute_path=<value>
    -a <value>
        Absolute path to the directory the database backup will be stored

    --file_name=<value>
    -f <value>
        Name of sql file to be saved

    --speed=<value>
    -s <value>
        Speed of database backup (between 1-10). Setting a lower speed allows for more time between database commands. Default speed is 5.

