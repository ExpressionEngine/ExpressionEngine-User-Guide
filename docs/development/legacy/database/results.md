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

# Query Results

**class `CI_DB_result`**

[TOC=2-3]

## Functions

### `result([$type = 'object'])`

| Parameter | Type                                      | Description                                                                                 |
| --------- | ----------------------------------------- | ------------------------------------------------------------------------------------------- |
| \$type    | `String`                                  | The type of result to pull, either `'object'` or `'array'`                                  |
| Returns   | `Array of Objects/multidimensional array` | An array of Objects representing database rows or a multidimensional array of database rows |

This function returns the query result as an array of `objects`, or an empty `array` on failure. Typically you'll use this in a `foreach` loop, like this:

    $query = $this->db->query("YOUR QUERY");

    foreach ($query->result() as $row)
    {
        echo $row->title;
        echo $row->name;
        echo $row->body;
    }

If you run queries that might **not** produce a result, you are encouraged to test the result first:

    $query = $this->db->query("YOUR QUERY");

    if ($query->num_rows() > 0)
    {
        foreach ($query->result() as $row)
        {
            echo $row->title;
            echo $row->name;
            echo $row->body;
        }
    }

You can also pass a string to result() which represents a class to instantiate for each result object (note: this class must be loaded):

    $query = $this->db->query("SELECT * FROM users;");

    foreach ($query->result('User') as $user)
    {
       echo $user->name; // call attributes
       echo $user->reverse_name(); // or methods defined on the 'User' class
    }

### `result_array()`

| Parameter | Type                     | Description                                |
| --------- | ------------------------ | ------------------------------------------ |
| Returns   | `Multidimensional array` | An multidimensional array of database rows |

This function returns the query result as a pure `array`, or an empty `array` when no result is produced. Typically you'll use this in a `foreach` loop, like this:

    $query = $this->db->query("YOUR QUERY");

    foreach ($query->result_array() as $row)
    {
        echo $row['title'];
        echo $row['name'];
        echo $row['body'];
    }

### `row([$n = 0[, $type = 'object']])`

| Parameter | Type           | Description                                                |
| --------- | -------------- | ---------------------------------------------------------- |
| \$n       | `Int`          | The specific row to return                                 |
| \$type    | `String`       | The type of result to pull, either `'object'` or `'array'` |
| Returns   | `Object/Array` | An object or array representing the row                    |

This function returns a single result row. If your query has more than one row, it returns only the first row. The result is returned as an `object`. Here's a usage example:

    $query = $this->db->query("YOUR QUERY");

    if ($query->num_rows() > 0)
    {
        $row = $query->row();

        echo $row->title;
        echo $row->name;
        echo $row->body;
    }

If you want a specific row returned you can submit the row number as a digit in the first parameter:

    $row = $query->row(5);

In addition, you can walk forward/backwards/first/last through your results using these variations:

    $row = $query->first_row();
    $row = $query->last_row();
    $row = $query->next_row();
    $row = $query->previous_row();

### `row_array([$n = 0])`

| Parameter | Type    | Description                   |
| --------- | ------- | ----------------------------- |
| \$n       | `Int`   | The specific row to return    |
| Returns   | `Array` | An array representing the row |

Identical to the above `row()` function, except it returns an array:

    $query = $this->db->query("YOUR QUERY");

    if ($query->num_rows() > 0)
    {
        $row = $query->row_array();

        echo $row['title'];
        echo $row['name'];
        echo $row['body'];
    }

If you want a specific row returned you can submit the row number as a digit in the first parameter:

    $row = $query->row_array(5);

Just like `row()`, you can walk through your results using these variations:

    $row = $query->first_row('array');
    $row = $query->last_row('array');
    $row = $query->next_row('array');
    $row = $query->previous_row('array');

## Result Helper Functions

### `num_rows()`

| Parameter | Type  | Description                              |
| --------- | ----- | ---------------------------------------- |
| Returns   | `Int` | The number or rows returned by the query |

The number of rows returned by the query. Note: In this example, \$query is the variable that the query result object is assigned to:

    $query = $this->db->query('SELECT * FROM my_table');
    echo $query->num_rows();

### `num_fields()`

| Parameter | Type  | Description                                |
| --------- | ----- | ------------------------------------------ |
| Returns   | `Int` | The number or fields returned by the query |

The number of `FIELDS` (columns) returned by the query. Make sure to call the function using your query result object:

    $query = $this->db->query('SELECT * FROM my_table');

    echo $query->num_fields();

### `free_result()`

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

It frees the memory associated with the result and deletes the result resource ID. Normally PHP frees its memory automatically at the end of script execution. However, if you are running a lot of queries in a particular script you might want to free the result after each query result has been generated in order to cut down on memory consumptions.

Example:

    $query = $this->db->query('SELECT title FROM my_table');

    foreach ($query->result() as $row)
    {
        echo $row->title;
    }
    $query->free_result();  // The $query result object will no longer be available

    $query2 = $this->db->query('SELECT name FROM some_table');

    $row = $query2->row();
    echo $row->name;
    $query2->free_result(); // The $query2 result object will no longer be available
