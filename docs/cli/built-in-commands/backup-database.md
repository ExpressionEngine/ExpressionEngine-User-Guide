# backup:database

Database backups

## Options list:

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


## Examples:

### Backup the database to the default path, at the default speed

    php eecli.php backup:database

    # Example backup path and filename:
    system/user/cache/eedatabase_2023-05-30_18h05m39sUTC.sql

### Backup the database to the to an absolute path, with a custom filename

    php eecli.php backup:database --file_name=deploy_backup.sql --absolute_path='/home/forge/backups'

### Backup the database at a slow speed, to help with the potential to lock up the database.

    php eecli.php backup:database --speed=1
