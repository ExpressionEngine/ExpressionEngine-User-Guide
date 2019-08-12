<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Converting to InnoDB

Starting with version 3.2, ExpressionEngine's database tables use the InnoDB storage engine instead of MyISAM. InnoDB has stronger support for write heavy loads, which makes it optimal for sites with a lot of user submitted content. It has also seen fairly active development in the past few years and has become the default of choice for many applications.

If you have an existing site and wish to convert it to use InnoDB, please read this document carefully before beginning.

NOTE: **Note:** This guide is for ExpressionEngine 3.2 and higher. Please update before following these directions.

## Create a Backup

Before beginning, please make sure you have a full backup of your database. Refer to the [backup documentation](general/database-backup.md) for a step-by-step guide to creating good backups.

After converting your database, your backup strategy may need to be reviewed. Some backup scripts will only handle specific database engines.

## Talk to your Hosting Provider

Different storage engines have different configuration requirements. Please talk to your hosting provider or dev-ops team to make sure your environment is set up to support this transition. This is especially important if you run a busy site that is already tuned for your current environment. As a rule of thumb, if your site is working well a transition is not required.

## Check for Fulltext Indexes

Some third party tables may be using fulltext indexes, which are only available to very recent versions of InnoDB. An easy way to find these indexes is to use this query, `where database_name`:

    SELECT TABLE_SCHEMA, TABLE_NAME
    FROM information_schema.statistics
    WHERE TABLE_SCHEMA = 'database_name' AND index_type LIKE 'FULLTEXT%'

If you find any fulltext tables you will not be able to proceed with the conversion. Contact the developer of the add-on for alternative options.

## Convert the Tables

Finally you can run the conversion. For each table in the database run this query:

    ALTER TABLE table_name ENGINE=InnoDB;

We recommend doing this one table at a time. This process may take several minutes to complete.
