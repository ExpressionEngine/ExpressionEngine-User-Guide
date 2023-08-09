---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Database Forge Class

**class `CI_DB_forge`**

[TOC]

The Database Forge Class contains methods that help you manage your database. Load the Forge Class as follows:

    ee()->load->dbforge()

Once initialized you will access the methods using the `ee()->dbforge` object:

    ee()->dbforge->some_method();

## Manipulating Databases

[TOC=3]

### `create_database($db_name)`

| Parameter | Type           | Description                               |
| --------- | -------------- | ----------------------------------------- |
| \$db_name | `String`       | The name of the database to create        |
| Returns   | `CI_DB_result` | The result of the `CREATE DATABASE` query |

Permits you to create the database specified in the first parameter. Returns `TRUE`/`FALSE` based on success or failure:

    if (ee()->dbforge->create_database('my_db'))
    {
        echo 'Database created!';
    }

### `drop_database($db_name)`

| Parameter | Type           | Description                             |
| --------- | -------------- | --------------------------------------- |
| \$db_name | `String`       | The name of the database to drop        |
| Returns   | `CI_DB_result` | The result of the `DROP DATABASE` query |

Permits you to drop the database specified in the first parameter. Returns `TRUE`/`FALSE` based on success or failure:

    if (ee()->dbforge->drop_database('my_db'))
    {
        echo 'Database deleted!';
    }

## Creating Tables

[TOC=3]

There are several things you may wish to do when creating tables. Add fields, add keys to the table, alter columns. CodeIgniter provides a mechanism for this.

### `add_field($field)`

| Parameter | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \$field   | `Array` | A multiddimensional associative array containing field names as the keys and an associative array of parameters for creating database fields: <br> `type`: The type of field to create (e.g. `INT`, `VARCHAR`, `TEXT`) <br> `constraint`: The length of the field <br> `unsigned`: Set to `TRUE` to generate `UNSIGNED` in the field definition. <br> `default`: Set to a value to generate a default value in the field definition. <br> `null`: Set to `TRUE` to generate `NULL` in the field definition. Without this, the field will default to `NOT NULL`. <br> `auto_increment`: Set to `TRUE` to generate an `auto_increment` flag on the field. Note that the field type must be a type that supports this, such as integer. |
| Returns   | `Void`  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

Fields are created via an associative array. Within the array you must include a `type` key that relates to the datatype of the field. For example, `INT`, `VARCHAR`, `TEXT`, etc. Many datatypes (for example `VARCHAR`) also require a `constraint` key.

    $fields = array(
        'users' => array(
            'type' => 'VARCHAR',
            'constraint' => '100',
        ),
    );
    // will translate to "users VARCHAR(100)" when the field is added.

Additionally, the following keys can be used:

- `unsigned`: Set to `TRUE` to generate `UNSIGNED` in the field definition.
- `default`: Set to a value to generate a default value in the field definition.
- `null`: Set to `TRUE` to generate `NULL` in the field definition. Without this, the field will default to `NOT NULL`.
- `auto_increment`: Set to `TRUE` to generate an `auto_increment` flag on the field. Note that the field type must be a type that supports this, such as integer.

<!-- -->

    $fields = array(
        'blog_id' => array(
            'type' => 'INT',
            'constraint' => 5,
            'unsigned' => TRUE,
            'auto_increment' => TRUE
        ),
        'blog_title' => array(
            'type' => 'VARCHAR',
            'constraint' => '100',
        ),
        'blog_author' => array(
            'type' =>'VARCHAR',
            'constraint' => '100',
            'default' => 'King of Town',
        ),
        'blog_description' => array(
            'type' => 'TEXT',
            'null' => TRUE,
        ),
    );

After the fields have been defined, they can be added using `ee()->dbforge->add_field($fields);` followed by a call to the `create_table()` method.

**Passing strings as fields**

If you know exactly how you want a field to be created, you can pass the string into the field definitions with `add_field()`:

    ee()->dbforge->add_field("label varchar(100) NOT NULL DEFAULT 'default label'");

NOTE: **Note:** Multiple calls to `add_field()` are cumulative.

**Creating an id field**

There is a special exception for creating id fields. A field with type id will automatically be assigned as an `INT(9) auto_incrementing` Primary Key:

    ee()->dbforge->add_field('id');
    // gives id INT(9) NOT NULL AUTO_INCREMENT

### `add_key($key[, $primary = FALSE])`

| Parameter | Type      | Description                                      |
| --------- | --------- | ------------------------------------------------ |
| \$key     | `String`  | The name of the field to create a key for        |
| \$primary | `Boolean` | Set this to `TRUE` to make the key a primary key |
| Returns   | `Void:`   |                                                  |

Generally speaking, you'll want your table to have Keys. This is accomplished with `add_key()`. An optional second parameter set to TRUE will make it a primary key. Note that `add_key()` must be followed by a call to `create_table()`.

Multiple column non-primary keys must be sent as an array. Sample output below is for MySQL.

    ee()->dbforge->add_key('blog_id', TRUE);
    // gives PRIMARY KEY `blog_id` (`blog_id`)

    ee()->dbforge->add_key('blog_id', TRUE);
    ee()->dbforge->add_key('site_id', TRUE);
    // gives PRIMARY KEY `blog_id_site_id` (`blog_id`, `site_id`)

    ee()->dbforge->add_key('blog_name');
    // gives KEY `blog_name` (`blog_name`)

    ee()->dbforge->add_key(array('blog_name', 'blog_label'));
    // gives KEY `blog_name_blog_label` (`blog_name`, `blog_label`)

### `create_table($table[, $if_not_exists = FALSE])`

| Parameter       | Type           | Description                                                     |
| --------------- | -------------- | --------------------------------------------------------------- |
| \$table         | `String`       | The name of the table to create                                 |
| \$if_not_exists | `Boolean`      | Set to `TRUE` to only create the table if it **does not** exist |
| Returns         | `CI_DB_result` | The result of the `CREATE TABLE` query                          |

After fields and keys have been declared, you can create a new table with:

    ee()->dbforge->create_table('table_name');
    // gives CREATE TABLE table_name

An optional second parameter set to `TRUE` adds an `IF NOT EXISTS` clause into the definition:

    ee()->dbforge->create_table('table_name', TRUE);
    // gives CREATE TABLE IF NOT EXISTS table_name

You could also pass optional table attributes, such as MySQL's `ENGINE`:

    $attributes = array('ENGINE' => 'InnoDB');
    ee()->dbforge->create_table('table_name', FALSE, $attributes);
    // produces: CREATE TABLE `table_name` (...) ENGINE = InnoDB DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci

NOTE: **Note:** Unless you specify the `CHARACTER SET` and/or `COLLATE` attributes, `create_table()` will always add them with your configured `char_set` and `dbcollat` values, as long as they are not empty (MySQL only).

## Manipulating Tables

[TOC=3]

### `drop_table($table_name)`

| Parameter | Type           | Description                                    |
| --------- | -------------- | ---------------------------------------------- |
| \$table   | `String`       | The name of the table to drop                  |
| Returns   | `CI_DB_result` | The result of the `DROP TABLE IF EXISTS` query |

Execute a `DROP TABLE` statement with an `IF EXISTS` clause:

    // Produces: DROP TABLE IF EXISTS table_name
    ee()->dbforge->drop_table('table_name');

### `rename_table($table_name, $new_table_name)`

| Parameter        | Type           | Description                                           |
| ---------------- | -------------- | ----------------------------------------------------- |
| \$table_name     | `String`       | The name of the table being renamed                   |
| \$new_table_name | `String`       | The new table name                                    |
| Returns          | `CI_DB_result` | The result of the `ALTER TABLE .. RENAME TO ..` query |

Executes a `TABLE` rename:

    ee()->dbforge->rename_table('old_table_name', 'new_table_name');
    // gives ALTER TABLE old_table_name RENAME TO new_table_name

### `add_column($table, array $field[, $after_field = ''])`

| Parameter     | Type           | Description                                                                        |
| ------------- | -------------- | ---------------------------------------------------------------------------------- |
| \$table       | `String`       | The table to add the column to                                                     |
| \$field       | `Array`        | The column definition (see `add_field()` for details)                             |
| \$after_field | `String`       | The field that should come before this new field, leave empty to be the last field |
| Returns       | `CI_DB_result` | The result of the `ALTER TABLE` query                                              |

The `add_column()` method is used to modify an existing table. It accepts the same field array as above, and can be used for an unlimited number of additional fields:

    $fields = array(
        'preferences' => array('type' => 'TEXT')
    );
    ee()->dbforge->add_column('table_name', $fields);
    // Executes: ALTER TABLE table_name ADD preferences TEXT

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
| \$column_name | `String`       | The name of the column to drop    |
| Returns       | `CI_DB_result` | The result of the `DROP` query    |

Used to remove a column from a table:

    ee()->dbforge->drop_column('table_name', 'column_to_drop');

### `modify_column($table, array $field)`

| Parameter | Type           | Description                                            |
| --------- | -------------- | ------------------------------------------------------ |
| \$table   | `String`       | The table to add the column to                         |
| \$field   | `Array`        | The column definition (see `add_field()` for details) |
| Returns   | `CI_DB_result` | The result of the `ALTER TABLE` query                  |

The usage of this method is identical to `add_column()`, except it alters an existing column rather than adding a new one. In order to change the name you can add a `name` key into the field defining array:

    $fields = array(
        'old_name' => array(
            'name' => 'new_name',
            'type' => 'TEXT',
        ),
    );
    ee()->dbforge->modify_column('table_name', $fields);
    // gives ALTER TABLE table_name CHANGE old_name new_name TEXT
