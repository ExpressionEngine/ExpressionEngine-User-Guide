---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2025, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Database SmartForge Class

**class `Smartforge`**

[TOC]

The Smartforge Class contains utility methods to help you manage your database. Load the Forge Class as follows:

    ee()->load->library('smartforge')

Once initialized you will access the methods using the `ee()->smartforge` object:

    ee()->smartforge->some_method();

Some Smartforge class functions duplicate similar dbforge class functions but adds more intelligence to these transaction - for example by checking that the
table / column / index actually exist before executing the function. The other Smartforge functions are novel to the class.

## Utility functions

[TOC=3]

### `create_table($table)`

| Parameter | Type           | Description                               |
| --------- | -------------- | ----------------------------------------- |
| \$table   | `String`       | The name of the table to create           |
| Returns   | `CI_DB_result` | The result of the `CREATE TABLE` query    |

Creates a table within the current EE database. Function will check to make sure the existing table doesn't exist before creating it.

    ee()->smartforge->create_table('cat_watch_list');

### `rename_table($table, $new_table)`

| Parameter   | Type                   | Description                                                    |
| ----------- | ---------------------- | -------------------------------------------------------------- |
| \$table     | `String`               | The name of the table to rename                                |
| \$new_table | `String`               | The new name for the table.                                    |
| Returns     | `CI_DB_result| bool`   | The result of the `ALTER TABLE .. RENAME TO ..` query or false |

Renames a table. Function will check to make sure the existing table name actually exists and the new table name doesn't.

    ee()->smartforge->rename_table('cat_watch_list','malicious_feline_ids');

### `add_column($table = '', $field = array(), $after_field = '')`

| Parameter      | Type                   | Description                                                    |
| -------------- | ---------------------- | -------------------------------------------------------------- |
| \$table        | `String`               | The name of the table to add a column to                       |
| \$field        | `Array`                | A multiddimensional associative array containing field names as the keys and an associative array of parameters for creating database fields: <br> `type`: The type of field to create (e.g. `INT`, `VARCHAR`, `TEXT`) <br> `constraint`: The length of the field <br> `unsigned`: Set to `TRUE` to generate `UNSIGNED` in the field definition. <br> `default`: Set to a value to generate a default value in the field definition. <br> `null`: Set to `TRUE` to generate `NULL` in the field definition. Without this, the field will default to `NOT NULL`. <br> `auto_increment`: Set to `TRUE` to generate an `auto_increment` flag on the field. Note that the field type must be a type that supports this, such as integer. |
| \$after_field | `String`                | The field that should come before this new field, leave empty to be the last field |
| Returns     | `bool`                    | True if the column add succeeds, otherwise false               |

Adds one or more columns to a table, optionally starting the insertion after a nominated column. For each column to add it checks to see if column already exists in the DB; if it does it skips adding that column.

    ee()->smartforge->add_column('cat_watch_list','malicious_feline_ids');
    $fields = array(
        'preferences' => array('type' => 'TEXT')
    );
    ee()->smartforge->add_column('table_name', $fields);

You can also take advantage of MySQL's `AFTER` and `FIRST` clauses to position the new column:

    // Will place the new column after the `another_field` column:
    $fields = array(
        'preferences' => array('type' => 'TEXT', 'after' => 'another_field')
    );

    // Will place the new column at the start of the table definition:
    $fields = array(
        'preferences' => array('type' => 'TEXT', 'first' => TRUE)
    );

### `drop_column($table, $column_name)`

| Parameter     | Type           | Description                       |
| ------------- | -------------- | --------------------------------- |
| \$table       | `String`       | The table to drop the column from |
| \$column_name | `String`       | The name of column to drop  |
| Returns       | `CI_DB_result|bool` | The result of the `DROP` query or false if it fails    |

Drop a column in the given database table if it already exists.

    ee()->smartforge->drop_column('table_name', 'name_of_col_7');

### `drop_column_batch($table, $column_names)`

| Parameter     | Type           | Description                       |
| ------------- | -------------- | --------------------------------- |
| \$table       | `String`       | The table to drop the column from |
| \$column_names | `Array`        | An array of column names to drop  |
| Returns       | `CI_DB_result|bool` | The result of the `DROP` query or false if it fails    |

Drop multiple columns in the given database table if they already exists.

    ee()->smartforge->drop_column('table_name', ['name_of_col_11','name_of_col_33']);

### `drop_table($table)`

| Parameter | Type           | Description                                    |
| --------- | -------------- | ---------------------------------------------- |
| \$table   | `String`       | The name of the table to drop                  |
| Returns   | `CI_DB_result|bool` | The result of the `DROP TABLE IF EXISTS` query or false if it fails|

Drops a table from the database if it exists.

    ee()->smartforge->drop_table('table_name');

### `modify_column($table = '', $field = array())`

| Parameter | Type           | Description                                            |
| --------- | -------------- | ------------------------------------------------------ |
| \$table   | `String`       | The table to add the column to                         |
| \$field   | `Array`        | The column definition (see `add_column()` for details) |
| Returns   | `bool` | True if it succeeds, false otherwise                  |

 Modify a database column (if it exists) with the added check that if the column is being renamed and both current column (A) and proposed column (B) names exist, drop column A and leave column B.
     
If both columns exist, it's likely this update is being run again from a version further back than the point the DB is actually at (an overlay, if you will). Therefore, column B is probably the one with all the data in it, and column A has only very recently (as in, within seconds) been created.

    $fields = array(
        'old_name' => array(
            'name' => 'new_name',
            'type' => 'TEXT',
        ),
    );
    
    ee()->smartforge->modify_column('table_name', $fields);

### `insert_set($table = '', $values = array(), $unique = array())`

| Parameter | Type           | Description                                            |
| --------- | -------------- | ------------------------------------------------------ |
| \$table   | `String`       | The table to add the column to                         |
| \$values  | `Array`        | An associative array of column names => row values     |
| \$unique  | `Array`        | An associative array of column names => row values (can only include key/value pairs from $values)    |
| Returns   | `bool`         | True if it succeeds, false otherwise                  |

Insert values into the database, with optional unique column name/values in a given column(s).
     
If the unique field content already exists in the column in the DB, function return FALSE since this set of values cannot be inserted into the column without breaking the uniqueness test.
  
    ee()->smartforge->insert_set('table_name', $values, $unique);

### `add_key($table = '', $col_name = '', $key_name = '')`

| Parameter    | Type           | Description                                      |
| ------------ | -------------- | ------------------------------------------------ |
| \$table      | `String`       | The name of the table to drop                    |
| \$col_name   | `String|array` | The name(s) of the column(s) to include in index |
| \$key_name   | `String`       | The name for the new key (optional)              |
| Returns      | `bool`         | True if it succeeds, false otherwise             |

Add a new key to the given database table if it doesn't already exist. Will create a composite primary key if `$col_name` is array and key name is PRIMARY.

    ee()->smartforge->add_key('table_name', 'name_of_column_22', 'index_for_22');

### `drop_key($table = '', $key_name = '')`

| Parameter    | Type           | Description                                      |
| ------------ | -------------- | ------------------------------------------------ |
| \$table      | `String`       | The name of the table to drop                    |
| \$key_name   | `String`       | The name of the key to drop                      |
| Returns      | `bool`         | True if it succeeds, false otherwise             |

Add a new key to the given database table if it doesn't already exist. Will create a composite primary key if `$col_name` is array and key name is PRIMARY.

    ee()->smartforge->drop_key('table_name', 'index_for_22');

