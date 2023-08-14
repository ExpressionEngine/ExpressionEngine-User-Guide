SUMMARY
    Make migration -- This generates a new migration for the core or for an add-on

USAGE
    Make migration php eecli.php make:migration --name create_myaddon_table

DESCRIPTION
    Creates a new migration

OPTIONS
    --name=<value>
    -n <value>
        Name of migration

    --table=<value>
    -t <value>
        Table name

    --status=<value>
    -s <value>
        Status name

    --location=<value>
    -l <value>
        Migration location. Current options are ExpressionEngine or shortname of an add-on that is currently installed. Defaults to ExpressionEngine.

    --create
    -c
        Specify command is a create command

    --update
    -u
        Specify command is an update command

