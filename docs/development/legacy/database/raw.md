---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Raw Queries and Metadata

[TOC]

## Raw Queries

[TOC=3]

### `query($sql[, $binds = FALSE])`

| Parameter | Type           | Description                 |
| --------- | -------------- | --------------------------- |
| \$sql     | `String`       | The SQL query to run        |
| \$binds   | `Array`        | Array of query binding data |
| Returns   | `CI_DB_result` | The query result            |

To submit a query, use the following function:

    ee()->db->query('YOUR QUERY HERE');

The query() function returns a database result **object** when "read" type queries are run, which you can use to [show your results](development/legacy/database/results.md). When "write" type queries are run it simply returns `TRUE` or `FALSE` depending on success or failure. When retrieving data you will typically assign the query to your own variable, like this:

    $query = ee()->db->query('YOUR QUERY HERE');

**Query Bindings**

Bindings enable you to simplify your query syntax by letting the system put the queries together for you. Consider the following example:

    $sql = "SELECT * FROM some_table WHERE id = ? AND status = ? AND author = ?";
    ee()->db->query($sql, array(3, 'live', 'Rick'));

The question marks in the query are automatically replaced with the values in the array in the second parameter of the query function.

The secondary benefit of using binds is that the values are automatically escaped, producing safer queries. You don't have to remember to manually escape data; the engine does it automatically for you.

### `simple_query($sql)`

| Parameter | Type                   | Description                                           |
| --------- | ---------------------- | ----------------------------------------------------- |
| \$sql     | `String`               | The SQL query to run                                  |
| Returns   | `PDOStatement`/`FALSE` | A `PDOStatement` object on success, `FALSE` otherwise |

This is a simplified version of the `query()` method. It DOES NOT return a database result set, nor does it set the query timer, or compile bind data, or store your query for debugging. It simply lets you submit a query. Most users will rarely use this function.

It returns whatever the database drivers' "execute" function returns. That typically is `TRUE`/`FALSE` on success or failure for write type queries such as `INSERT`, `DELETE` or `UPDATE` statements (which is what it really should be used for) and a resource/object on success for queries with fetchable results.

    if (ee()->db->simple_query('YOUR QUERY'))
    {
        echo "Success!";
    }
    else
    {
        echo "Query failed!";
    }

### `protect_identifiers($item[, $prefix_single = FALSE])`

| Parameter       | Type      | Description                                       |
| --------------- | --------- | ------------------------------------------------- |
| \$item          | `Mixed`   | The item to escape                                |
| \$prefix_single | `Boolean` | Set to `TRUE` to add the prefix to the table name |
| Returns         | `String`  | The escaped item                                  |

In many databases it is advisable to protect table and field names - for example with backticks in MySQL. **Query Builder queries are automatically protected**, however if you need to manually protect an identifier you can use:

    ee()->db->protect_identifiers('table_name');

NOTE: **Important:** Although the Query Builder will try its best to properly quote any field and table names that you feed it, note that it is NOT designed to work with arbitrary user input. DO NOT feed it with unsanitized user data.

This function will also add a table prefix to your table, assuming you have a prefix specified in your database config file. To enable the prefixing set `TRUE` (boolean) via the second parameter:

    ee()->db->protect_identifiers('table_name', TRUE);

### `escape($str)`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$str     | `String` | The string to escape |
| Returns   | `String` | The escaped string   |

This function determines the data type so that it can escape only string data. It also automatically adds single quotes around the data so you don't have to:

    $sql = "INSERT INTO table (title) VALUES(".ee()->db->escape($title).")";

### `escape_str($str[, $like = FALSE])`

| Parameter | Type      | Description                                        |
| --------- | --------- | -------------------------------------------------- |
| \$str     | `String`  | The string to escape                               |
| \$like    | `Boolean` | Set to `TRUE` to escape `LIKE` condition wildcards |
| Returns   | `String`  | The escaped string                                 |

This function escapes the data passed to it, regardless of type. Most of the time you'll use the above function rather than this one. Use the function like this:

    $sql = "INSERT INTO table (title) VALUES('".ee()->db->escape_str($title)."')";

### `escape_like_str($str)`

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| \$str     | `String` | The string to escape |
| Returns   | `String` | The escaped string   |

This is just like `escape_str()` with the second parameter set as `TRUE` to escape `LIKE` condition wildcards:

    $search = '20% raise'; $sql = "SELECT id FROM table WHERE column LIKE '%".ee()->db->escape_like_str($search)."%'";

## Query Helpers

[TOC=3]

### `insert_id()`

| Parameter | Type  | Description                            |
| --------- | ----- | -------------------------------------- |
| Returns   | `Int` | The ID number of the row just inserted |

The insert ID number when performing database inserts.

### `affected_rows()`

| Parameter | Type  | Description                 |
| --------- | ----- | --------------------------- |
| Returns   | `Int` | The number of affected rows |

Displays the number of affected rows, when doing "write" type queries (insert, update, etc.).

NOTE: **Note:** In MySQL `DELETE FROM TABLE` returns 0 affected rows. The database class has a small hack that allows it to return the correct number of affected rows.

### `count_all($table)`

| Parameter | Type     | Description                              |
| --------- | -------- | ---------------------------------------- |
| \$table   | `String` | The table to check                       |
| Returns   | `Int`    | The number of rows in a particular table |

Permits you to determine the number of rows in a particular table. Submit the table name in the first parameter. Example:

    echo ee()->db->count_all('my_table');  // Produces an integer, like 25

### `last_query()`

| Parameter | Type     | Description           |
| --------- | -------- | --------------------- |
| Returns   | `String` | The last query as SQL |

Returns the last query that was run (the query string, not the result):

    $str = ee()->db->last_query();

    // Produces:  SELECT * FROM sometable....

### `insert_string($table, $data)`

| Parameter | Type     | Description                                                          |
| --------- | -------- | -------------------------------------------------------------------- |
| \$table   | `String` | The table for the query                                              |
| \$data    | `Array`  | The data for the query                                               |
| Returns   | `String` | A SQL string that has **not** been executed, use `query()` to run it |

This function simplifies the process of writing database inserts. It returns a correctly formatted SQL insert string. Example:

    $data = array('name' => $name, 'email' => $email, 'url' => $url);

    $str = ee()->db->insert_string('table_name', $data);

The first parameter is the table name, the second is an associative array with the data to be inserted. The above example produces:

    INSERT INTO table_name (name, email, url) VALUES ('Rick', 'rick@example.com', 'example.com')

### `update_string($table, $data, $where)`

| Parameter | Type     | Description                                                          |
| --------- | -------- | -------------------------------------------------------------------- |
| \$table   | `String` | The table for the query                                              |
| \$data    | `Array`  | The data for the query                                               |
| \$where   | `Array`  | The data for the `WHERE` clause                                      |
| Returns   | `String` | A SQL string that has **not** been executed, use `query()` to run it |

This function simplifies the process of writing database updates. It returns a correctly formatted SQL update string:

    $data = array('name' => $name, 'email' => $email, 'url' => $url);

    $where = "author_id = 1 AND status = 'active'";

    $str = ee()->db->update_string('table_name', $data, $where);

The first parameter is the table name, the second is an associative array with the data to be updated, and the third parameter is the `WHERE` clause. The above example produces:

    UPDATE table_name SET name = 'Rick', email = 'rick@example.com', url = 'example.com' WHERE author_id = 1 AND status = 'active'

## Metadata

[TOC=3]

### `list_tables()`

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| Returns   | `Array` | Array of table names |

Returns an array containing the names of all the tables in the database you are currently connected to. Example:

    $tables = ee()->db->list_tables();

    foreach ($tables as $table)
    {
        echo $table;
    }

### `table_exists($table_name)`

| Parameter    | Type      | Description                                           |
| ------------ | --------- | ----------------------------------------------------- |
| \$table_name | `String`  | The name of the table to check                        |
| Returns      | `Boolean` | `TRUE` if the `$table_name` exists, `FALSE` otherwise |

Sometimes it's helpful to know whether a particular table exists before running an operation on it. Returns a boolean `TRUE`/`FALSE`. Usage example:

    if (ee()->db->table_exists('table_name'))
    {
        // some code...
    }

### `list_fields($table_name)`

| Parameter    | Type     | Description                    |
| ------------ | -------- | ------------------------------ |
| \$table_name | `String` | The name of the table to check |
| Returns      | `Array`  | Array of field names           |

Returns an array containing the field names. This query can be called two ways:

1.  You can supply the table name and call it from the `ee()->db->` object:

        $fields = ee()->db->list_fields('table_name');

        foreach ($fields as $field)
        {
            echo $field;
        }

2.  You can gather the field names associated with any query you run by calling the function from your query result object:

        $query = ee()->db->query('SELECT * FROM some_table');

        foreach ($query->list_fields() as $field)
        {
            echo $field;
        }

### `field_exists($field_name, $table_name)`

| Parameter    | Type      | Description                                                      |
| ------------ | --------- | ---------------------------------------------------------------- |
| \$field_name | `String`  | The name of the field to look for                                |
| \$table_name | `String`  | The name of the table to look in                                 |
| Returns      | `Boolean` | `TRUE` if the `$field_name` exists within `$table_name`, `FALSE` |

Sometimes it's helpful to know whether a particular field exists before performing an action. Returns a boolean `TRUE`/`FALSE`. Usage example:

    if (ee()->db->field_exists('field_name', 'table_name'))
    {
        // some code...
    }

### `field_data($table_name)`

| Parameter    | Type           | Description                                                                                                                                                                                                       |
| ------------ | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$table_name | `String`       | The name of the table                                                                                                                                                                                             |
| Returns      | `CI_DB_result` | Object containing the following field data: <br> `name` - column name <br> `max_length` - maximum length of the column <br> `primary_key` - 1 if the column is a primary key <br> `type` - the type of the column |

Returns an array of objects containing field information.

Sometimes it's helpful to gather the field names or other metadata, like the column type, max length, etc.

Usage example:

    $fields = ee()->db->field_data('table_name');

    foreach ($fields as $field)
    {
        echo $field->name;
        echo $field->type;
        echo $field->max_length;
        echo $field->primary_key;
    }

If you have run a query already you can use the result object instead of supplying the table name:

    $query = ee()->db->query("YOUR QUERY");
    $fields = $query->field_data();

### `platform()`

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| Returns   | `String` | The name of the database platform you are running |

Outputs the database platform you are running:

    echo ee()->db->platform();

NOTE: **Note:** This will only display MySQL since that's what ExpressionEngine requires, but is included for completeness.

### `version()`

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| Returns   | `String` | The version of the database you're running |

Outputs the database version you are running:

    echo ee()->db->version();
