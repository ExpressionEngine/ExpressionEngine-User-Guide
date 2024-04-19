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

# Active Record

**class `CI_DB_active_record`**

[TOC]

ExpressionEngine gives you access to a Active Record class. This pattern allows information to be retrieved, inserted, and updated in your database with minimal scripting. In some cases only one or two lines of code are necessary to perform a database action. It also allows for safer queries, since the values are escaped automatically by the system.

## Selecting Data

[TOC=3]

### `get([$table = ''[, $limit = NULL[, $offset = NULL]]])`

| Parameter | Type           | Description                         |
| --------- | -------------- | ----------------------------------- |
| \$table   | `String`       | The table name to pull results from |
| \$limit   | `Int`          | The number of rows to pull          |
| \$offset  | `Int`          | The number of rows to offset        |
| Returns   | `CI_DB_result` | A query result object               |

Runs the selection query and returns the result. Can be used by itself to retrieve all records from a table:

    $query = ee()->db->get('mytable');  // Produces: SELECT * FROM mytable

The second and third parameters enable you to set a limit and offset clause:

    $query = ee()->db->get('mytable', 10, 20);
    // Produces: SELECT * FROM mytable LIMIT 20, 10 (in MySQL. Other databases have slightly different syntax)

You'll notice that the above function is assigned to a variable named `$query`, which can be used to show the results:

    $query = ee()->db->get('mytable');

    foreach ($query->result() as $row)
    {
        echo $row->title;
    }

Please visit the [result functions](development/legacy/database/results.md) page for a full discussion regarding result generation.

### `get_where([$table = ''[, $where = NULL[, $limit = NULL[, $offset = NULL]]]])`

| Parameter | Type           | Description                                                        |
| --------- | -------------- | ------------------------------------------------------------------ |
| \$table   | `String`       | The table name to pull results from                                |
| \$where   | `Mixed`        | Either a string or associative array containing a `where()` clause |
| \$limit   | `Int`          | The number of rows to pull                                         |
| \$offset  | `Int`          | The number of rows to offset                                       |
| Returns   | `CI_DB_result` | A query result object                                              |

Identical to the above function except that it permits you to add a `WHERE` clause in the second parameter, instead of using the `where()` function:

    $query = ee()->db->get_where('mytable', array('id' => $id), $limit, $offset);

Please read the about the `where()` function below for more information.

### `select([$select = '*'[, $escape = NULL]])`

| Parameter | Type                  | Description                                                                                  |
| --------- | --------------------- | -------------------------------------------------------------------------------------------- |
| \$select  | `String`              | The columns to select, omit to `SELECT *`                                                    |
| \$escape  | `Boolean`             | Set to `FALSE` to prevent `CI_DB_driver::protect_identifiers()` and `CI_DB_driver::escape()` |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                     |

Permits you to write the `SELECT` portion of your query:

    ee()->db->select('title, content, date');
    $query = ee()->db->get('mytable');  // Produces: SELECT title, content, date FROM mytable

`select()` accepts an optional second parameter. If you set it to `FALSE`, your field or table names will not be escaped or protected. This is useful if you need a compound select statement:

    ee()->db->select('(SELECT SUM(payments.amount) FROM payments WHERE payments.invoice_id=4') AS amount_paid', FALSE);
    $query = ee()->db->get('mytable');

### `select_max($select[, $alias = ''])`

| Parameter | Type                  | Description                            |
| --------- | --------------------- | -------------------------------------- |
| \$select  | `String`              | The field to `SELECT`                  |
| \$alias   | `String`              | The alias for the `MAX($select)` query |
| Returns   | `CI_DB_active_record` | The Active Record object               |

Writes a `SELECT MAX(field)` portion for your query. You can optionally include a second parameter to rename the resulting field.

    ee()->db->select_max('age');
    $query = ee()->db->get('members');  // Produces: SELECT MAX(age) as age FROM members

    ee()->db->select_max('age', 'member_age');
    $query = ee()->db->get('members'); // Produces: SELECT MAX(age) as member_age FROM members

### `select_min($select[, $alias = ''])`

| Parameter | Type                  | Description                            |
| --------- | --------------------- | -------------------------------------- |
| \$select  | `String`              | The field to `SELECT`                  |
| \$alias   | `String`              | The alias for the `MIN($select)` query |
| Returns   | `CI_DB_active_record` | The Active Record object               |

Writes a `SELECT MIN(field)` portion for your query. As with `select_max()`, You can optionally include a second parameter to rename the resulting field.

    ee()->db->select_min('age');
    $query = ee()->db->get('members'); // Produces: SELECT MIN(age) as age FROM members

### `select_avg($select[, $alias = ''])`

| Parameter | Type                  | Description                            |
| --------- | --------------------- | -------------------------------------- |
| \$select  | `String`              | The field to `SELECT`                  |
| \$alias   | `String`              | The alias for the `AVG($select)` query |
| Returns   | `CI_DB_active_record` | The Active Record object               |

Writes a `SELECT AVG(field)` portion for your query. As with `select_max()`, You can optionally include a second parameter to rename the resulting field.

    ee()->db->select_avg('age');
    $query = ee()->db->get('members'); // Produces: SELECT AVG(age) as age FROM members

### `select_sum($select[, $alias = ''])`

| Parameter | Type                  | Description                            |
| --------- | --------------------- | -------------------------------------- |
| \$select  | `String`              | The field to `SELECT`                  |
| \$alias   | `String`              | The alias for the `SUM($select)` query |
| Returns   | `CI_DB_active_record` | The Active Record object               |

Writes a `SELECT SUM(field)` portion for your query. As with `select_max()`, You can optionally include a second parameter to rename the resulting field.

    ee()->db->select_sum('age');
    $query = ee()->db->get('members'); // Produces: SELECT SUM(age) as age FROM members

### `from($from)`

| Parameter | Type                  | Description                                                                   |
| --------- | --------------------- | ----------------------------------------------------------------------------- |
| \$from    | `Mixed`               | The table to pull `FROM`, can either be a `string` or an `array` of `strings` |
| Returns   | `CI_DB_active_record` | The Active Record object                                                      |

Permits you to write the `FROM` portion of your query:

    ee()->db->select('title, content, date');
    ee()->db->from('mytable');
    $query = ee()->db->get();  // Produces: SELECT title, content, date FROM mytable

NOTE: **Note:** As shown earlier, the `FROM` portion of your query can be specified in the `get()` function, so use whichever method you prefer.

### `join($table, $cond[, $type = ''])`

| Parameter | Type                  | Description                                                                                   |
| --------- | --------------------- | --------------------------------------------------------------------------------------------- |
| \$table   | `String`              | The table to `JOIN`                                                                           |
| \$cond    | `String`              | The condition to join `ON`                                                                    |
| \$type    | `String`              | The type of `JOIN` to perform: `LEFT`, `RIGHT`, `OUTER`, `INNER`, `LEFT OUTER`, `RIGHT OUTER` `STRAIGHT`|
| Returns   | `CI_DB_active_record` | The Active Record object                                                                      |

Permits you to write the `JOIN` portion of your query:

    ee()->db->select('*');
    ee()->db->from('blogs');
    ee()->db->join('comments', 'comments.id = blogs.id');
    $query = ee()->db->get();

    // Produces:
    // SELECT * FROM blogs JOIN comments ON comments.id = blogs.id

Multiple function calls can be made if you need several joins in one query.

If you need a specific type of JOIN you can specify it via the third parameter of the function. Options are: left, right, outer, inner, left outer, and right outer.

    ee()->db->join('comments', 'comments.id = blogs.id', 'left');
    // Produces: LEFT JOIN comments ON comments.id = blogs.id

### `where($key[, $value = NULL[, $escape = TRUE]])`

| Parameter | Type                  | Description                                                                                                                                                                                                                                               |
| --------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$key     | `String`              | Either the field to compare or an `array` containing the fields as keys and the value as the value. The field will contain the comparison operators (e.g. `<`, `<=`, `>`, `>=`, `!=`, `=`). By default `=` is used if no comparison operator is provided. |
| \$value   | `String`              | The value to compare to                                                                                                                                                                                                                                   |
| \$escape  | `Boolean`             | Set to `FALSE` to prevent `CI_DB_driver::protect_identifiers()` and `CI_DB_driver::escape()`                                                                                                                                                              |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                                                                                                                                                  |

This function enables you to set `WHERE` clauses using one of four methods:

NOTE: **Note:** All values passed to this function are escaped automatically, producing safer queries.

1.  **Simple key/value method:**

    >     ee()->db->where('name', $name); // Produces: WHERE name = 'Joe'
    >
    > Notice that the equal sign is added for you.
    >
    > If you use multiple function calls they will be chained together with `AND` between them:
    >
    >     ee()->db->where('name', $name);
    >     ee()->db->where('title', $title);
    >     ee()->db->where('status', $status);
    >     // WHERE name = 'Joe' AND title = 'boss' AND status = 'active'

2.  **Custom key/value method:** You can include an operator in the first parameter in order to control the comparison:

        ee()->db->where('name !=', $name);
        ee()->db->where('id <', $id); // Produces: WHERE name != 'Joe' AND id < 45

3.  **Associative array method:**

    >     $array = array('name' => $name, 'title' => $title, 'status' => $status);
    >     ee()->db->where($array);
    >     // Produces: WHERE name = 'Joe' AND title = 'boss' AND status = 'active'
    >
    > You can include your own operators using this method as well:
    >
    >     $array = array('name !=' => $name, 'id <' => $id, 'date >' => $date);
    >     ee()->db->where($array);

4.  **Custom string:** You can write your own clauses manually:

        $where = "name='Joe' AND status='boss' OR status='active'";
        ee()->db->where($where);

`where()` accepts an optional third parameter. If you set it to `FALSE`, your field or table names will not be escaped or protected:

    ee()->db->where('MATCH (field) AGAINST ("value")', NULL, FALSE);

### `or_where($key[, $value = NULL[, $escape = TRUE]])`

| Parameter | Type                  | Description                                                                                                                                                                                                                                               |
| --------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$key     | `String`              | Either the field to compare or an `array` containing the fields as keys and the value as the value. The field will contain the comparison operators (e.g. `<`, `<=`, `>`, `>=`, `!=`, `=`). By default `=` is used if no comparison operator is provided. |
| \$value   | `String`              | The value to compare to                                                                                                                                                                                                                                   |
| \$escape  | `Boolean`             | Set to `FALSE` to prevent `CI_DB_driver::protect_identifiers()` and `CI_DB_driver::escape()`                                                                                                                                                              |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                                                                                                                                                  |

This function is identical to the one above, except that multiple instances are joined by `OR`:

    ee()->db->where('name !=', $name);
    ee()->db->or_where('id >', $id);  // Produces: WHERE name != 'Joe' OR id > 50

### `where_in($key, $values)`

| Parameter | Type                  | Description                             |
| --------- | --------------------- | --------------------------------------- |
| \$key     | `String`              | The field for the `WHERE ... IN` clause |
| \$values  | `Array`               | The array of values                     |
| Returns   | `CI_DB_active_record` | The Active Record object                |

Generates a `WHERE field IN ('item', 'item')` SQL query joined with `AND` if appropriate:

    $names = array('Frank', 'Todd', 'James');
    ee()->db->where_in('username', $names);
    // Produces: WHERE username IN ('Frank', 'Todd', 'James')

### `or_where_in($key, $values)`

| Parameter | Type                  | Description                                |
| --------- | --------------------- | ------------------------------------------ |
| \$key     | `String`              | The field for the `OR WHERE ... IN` clause |
| \$values  | `Array`               | The array of values                        |
| Returns   | `CI_DB_active_record` | The Active Record object                   |

Generates a `WHERE field IN ('item', 'item')` SQL query joined with `OR` if appropriate:

    $names = array('Frank', 'Todd', 'James');
    ee()->db->or_where_in('username', $names);
    // Produces: OR username IN ('Frank', 'Todd', 'James')

### `where_not_in($key, $values)`

| Parameter | Type                  | Description                                 |
| --------- | --------------------- | ------------------------------------------- |
| \$key     | `String`              | The field for the `WHERE NOT ... IN` clause |
| \$values  | `Array`               | The array of values                         |
| Returns   | `CI_DB_active_record` | The Active Record object                    |

Generates a `WHERE field NOT IN ('item', 'item')` SQL query joined with `AND` if appropriate:

    $names = array('Frank', 'Todd', 'James');
    ee()->db->where_not_in('username', $names);
    // Produces: WHERE username NOT IN ('Frank', 'Todd', 'James')

### `or_where_not_in($key, $values)`

| Parameter | Type                  | Description                                    |
| --------- | --------------------- | ---------------------------------------------- |
| \$key     | `String`              | The field for the `OR WHERE NOT ... IN` clause |
| \$values  | `Array`               | The array of values                            |
| Returns   | `CI_DB_active_record` | The Active Record object                       |

Generates a `WHERE field NOT IN ('item', 'item')` SQL query joined with `OR` if appropriate:

    $names = array('Frank', 'Todd', 'James');
    ee()->db->or_where_not_in('username', $names);
    // Produces: OR username NOT IN ('Frank', 'Todd', 'James')

### `like($field[, $match = ''[, $side = 'both']])`

| Parameter | Type                  | Description                                                                                                                           |
| --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| \$field   | `Mixed`               | Either the field name for the `WHERE ... LIKE` clause, or an associative array where the keys are fields and the values are the match |
| \$match   | `String`              | The value to match against                                                                                                            |
| \$side    | `String`              | Controls where the wildcard (`%`) is placed, by default uses `'both'` for both sides, but you can also use `left` or `right`          |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                              |

This method enables you to generate `LIKE` clauses, useful for doing searches.

1.  **Simple key/value method**

    >     ee()->db->like('title', 'match');
    >     // Produces: WHERE `title` LIKE '%match%' ESCAPE '!'
    >
    > If you use multiple method calls they will be chained together with `AND` between them:
    >
    >     ee()->db->like('title', 'match');
    >     ee()->db->like('body', 'match');
    >     // WHERE `title` LIKE '%match%' ESCAPE '!' AND  `body` LIKE '%match% ESCAPE '!'
    >
    > If you want to control where the wildcard (`%`) is placed, you can use an optional third argument. Your options are `'before'`, `'after'`, and `'both'` (which is the default):
    >
    >     ee()->db->like('title', 'match', 'before'); // Produces: WHERE `title` LIKE '%match' ESCAPE '!'
    >     ee()->db->like('title', 'match', 'after');  // Produces: WHERE `title` LIKE 'match%' ESCAPE '!'
    >     ee()->db->like('title', 'match', 'both');   // Produces: WHERE `title` LIKE '%match%' ESCAPE '!'

2.  **Associative array method**

    >     $array = array('title' => $match, 'page1' => $match, 'page2' => $match);
    >     ee()->db->like($array);
    >     // WHERE `title` LIKE '%match%' ESCAPE '!' AND  `page1` LIKE '%match%' ESCAPE '!' AND  `page2` LIKE '%match%' ESCAPE '!'

### `or_like($field[, $match = ''[, $side = 'both']])`

| Parameter | Type                  | Description                                                                                                                        |
| --------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| \$field   | `Mixed`               | Either the field name for the `OR ... LIKE` clause, or an associative array where the keys are fields and the values are the match |
| \$match   | `String`              | The value to match against                                                                                                         |
| \$side    | `String`              | Controls where the wildcard (`%`) is placed, by default uses `'both'` for both sides, but you can also use `left` or `right`       |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                           |

This method is identical to the one above, except that multiple instances are joined by `OR`:

    ee()->db->like('title', 'match'); ee()->db->or_like('body', $match);
    // WHERE `title` LIKE '%match%' ESCAPE '!' OR  `body` LIKE '%match%' ESCAPE '!'

### `not_like($field[, $match = ''[, $side = 'both']])`

| Parameter | Type                  | Description                                                                                                                               |
| --------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| \$field   | `Mixed`               | Either the field name for the `WHERE ... NOT LIKE` clause, or an associative array where the keys are fields and the values are the match |
| \$match   | `String`              | The value to match against                                                                                                                |
| \$side    | `String`              | Controls where the wildcard (`%`) is placed, by default uses `'both'` for both sides, but you can also use `left` or `right`              |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                                  |

This method is identical to `like()`, except that it generates `NOT LIKE` statements:

    ee()->db->not_like('title', 'match');   // WHERE `title` NOT LIKE '%match% ESCAPE '!'

### `or_not_like($field[, $match = ''[, $side = 'both']])`

| Parameter | Type                  | Description                                                                                                                            |
| --------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| \$field   | `Mixed`               | Either the field name for the `OR ... NOT LIKE` clause, or an associative array where the keys are fields and the values are the match |
| \$match   | `String`              | The value to match against                                                                                                             |
| \$side    | `String`              | Controls where the wildcard (`%`) is placed, by default uses `'both'` for both sides, but you can also use `left` or `right`           |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                               |

This method is identical to `not_like()`, except that multiple instances are joined by `OR`:

    ee()->db->like('title', 'match');
    ee()->db->or_not_like('body', 'match');
    // WHERE `title` LIKE '%match% OR  `body` NOT LIKE '%match%' ESCAPE '!'

### `group_by($by)`

| Parameter | Type                  | Description                                                          |
| --------- | --------------------- | -------------------------------------------------------------------- |
| \$by      | `Mixed`               | Either the field or an array of fields for the `GROUP BY ...` clause |
| Returns   | `CI_DB_active_record` | The Active Record object                                             |

Permits you to write the `GROUP BY` portion of your query:

    ee()->db->group_by("title"); // Produces: GROUP BY title

You can also pass an array of multiple values as well:

    ee()->db->group_by(array("title", "date"));  // Produces: GROUP BY title, date

### `distinct([$val = TRUE])`

| Parameter | Type                  | Description                                       |
| --------- | --------------------- | ------------------------------------------------- |
| \$val     | `Boolean`             | _Optionally_ set to `FALSE` to disable `DISTINCT` |
| Returns   | `CI_DB_active_record` | The Active Record object                          |

Adds the `DISTINCT` keyword to a query:

    ee()->db->distinct();
    ee()->db->get('table'); // Produces: SELECT DISTINCT * FROM table

### `having($key[, $value = ''[, $escape = TRUE]])`

| Parameter | Type                  | Description                                                                                                                     |
| --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| \$key     | `Mixed`               | Either the field for the `HAVING` clause or an associative array containing the field as the key and the condition as the value |
| \$value   | `String`              | The condition to check for                                                                                                      |
| \$escape  | `Boolean`             | Set to `FALSE` to prevent `CI_DB_driver::protect_identifiers()` and `CI_DB_driver::escape()`                                    |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                        |

Permits you to write the `HAVING` portion of your query. There are 2 possible syntaxes, 1 argument or 2:

    ee()->db->having('user_id = 45');  // Produces: HAVING user_id = 45
    ee()->db->having('user_id',  45);  // Produces: HAVING user_id = 45

You can also pass an array of multiple values as well:

    ee()->db->having(array('title =' => 'My Title', 'id <' => $id));
    // Produces: HAVING title = 'My Title', id < 45

You can prevent escaping content by passing an optional third argument, and setting it to `FALSE`:

    ee()->db->having('user_id',  45);  // Produces: HAVING `user_id` = 45 in some databases such as MySQL
    ee()->db->having('user_id',  45, FALSE);  // Produces: HAVING user_id = 45

### `or_having($key[, $value = ''[, $escape = TRUE]])`

| Parameter | Type                  | Description                                                                                                                     |
| --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| \$key     | `Mixed`               | Either the field for the `HAVING` clause or an associative array containing the field as the key and the condition as the value |
| \$value   | `String`              | The condition to check for                                                                                                      |
| \$escape  | `Boolean`             | Set to `FALSE` to prevent `CI_DB_driver::protect_identifiers()` and `CI_DB_driver::escape()`                                    |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                        |

Identical to `having()`, only separates multiple clauses with `OR`.

### `order_by($orderby[, $direction = ''[, $escape = NULL]])`

| Parameter   | Type                  | Description                                                                                  |
| ----------- | --------------------- | -------------------------------------------------------------------------------------------- |
| \$orderby   | `Mixed`               | The field to `ORDER BY`                                                                      |
| \$direction | `String`              | The direction to `ORDER BY`: `ASC`, `DESC`, or `RANDOM`                                      |
| \$escape    | `Boolean`             | Set to `FALSE` to prevent `CI_DB_driver::protect_identifiers()` and `CI_DB_driver::escape()` |
| Returns     | `CI_DB_active_record` | The Active Record object                                                                     |

Lets you set an `ORDER BY` clause.

The first parameter contains the name of the column you would like to order by.

The second parameter lets you set the direction of the result. Options are `ASC`, `DESC` AND `RANDOM`.

    ee()->db->order_by('title', 'DESC');
    // Produces: ORDER BY `title` DESC

You can also pass your own string in the first parameter:

    ee()->db->order_by('title DESC, name ASC');
    // Produces: ORDER BY `title` DESC, `name` ASC

Or multiple function calls can be made if you need multiple fields.

    ee()->db->order_by('title', 'DESC');
    ee()->db->order_by('name', 'ASC');
    // Produces: ORDER BY `title` DESC, `name` ASC

If you choose the `RANDOM` direction option, then the first parameters will be ignored, unless you specify a numeric seed value:

    ee()->db->order_by('title', 'RANDOM');
    // Produces: ORDER BY RAND()

    ee()->db->order_by(42, 'RANDOM');
    // Produces: ORDER BY RAND(42)

### `limit($value[, $offset = ''])`

| Parameter | Type                  | Description                   |
| --------- | --------------------- | ----------------------------- |
| \$value   | `Int`                 | The number of rows to `LIMIT` |
| \$offset  | `Int`                 | The number of rows to offset  |
| Returns   | `CI_DB_active_record` | The Active Record object      |

Lets you limit the number of rows you would like returned by the query:

    ee()->db->limit(10);  // Produces: LIMIT 10

The second parameter lets you set a result offset:

    ee()->db->limit(10, 20);  // Produces: LIMIT 20, 10 (in MySQL.  Other databases have slightly different syntax)

### `ffset($offset)`

| Parameter | Type                  | Description                  |
| --------- | --------------------- | ---------------------------- |
| \$offset  | `Int`                 | The number of rows to offset |
| Returns   | `CI_DB_active_record` | The Active Record object     |

Lets you set the offset separately from `limit()`:

    ee()->db->offset(10);  // Produces: LIMIT n, 10

### `count_all_results([$table = ''])`

| Parameter | Type     | Description                                                                       |
| --------- | -------- | --------------------------------------------------------------------------------- |
| \$table   | `String` | The table to count results `FROM`, can be omitted if you've used `from()` already |
| Returns   | `Int`    | The number of rows for a particular Active Record query                           |

Permits you to determine the number of rows in a particular Active Record query. Queries will accept Active Record restrictors such as `where()`, `or_where()`, `like()`, `or_like()`, etc. Example:

    echo ee()->db->count_all_results('my_table');  // Produces an integer, like 25
    ee()->db->like('title', 'match');
    ee()->db->from('my_table');
    echo ee()->db->count_all_results(); // Produces an integer, like 17

## Inserting Data

[TOC=3]

### `insert([$table = ''[, $set = NULL]])`

| Parameter | Type           | Description                                                          |
| --------- | -------------- | -------------------------------------------------------------------- |
| \$table   | `String`       | The name of the table to `INSERT INTO`                               |
| \$set     | `Array`        | An associative array of field names as keys and the values as values |
| Returns   | `CI_DB_result` | A query result object                                                |

Generates an insert string based on the data you supply, and runs the query. You can either pass an `array` or an `object` to the function. Here is an example using an array:

    $data = array(
        'title' => 'My title',
        'name' => 'My Name',
        'date' => 'My date'
    );

    ee()->db->insert('mytable', $data);
    // Produces: INSERT INTO mytable (title, name, date) VALUES ('My title', 'My name', 'My date')

The first parameter will contain the table name, the second is an associative array of values.

Here is an example using an object:

    /*
    class Myclass {
        public $title = 'My Title';
        public $content = 'My Content';
        public $date = 'My Date';
    }
    */

    $object = new Myclass;
    ee()->db->insert('mytable', $object);
    // Produces: INSERT INTO mytable (title, content, date) VALUES ('My Title', 'My Content', 'My Date')

The first parameter will contain the table name, the second is an object.

### `insert_batch([$table = ''[, $set = NULL]])`

| Parameter | Type      | Description                                                          |
| --------- | --------- | -------------------------------------------------------------------- |
| \$table   | `String`  | The name of the table to `INSERT INTO`                               |
| \$set     | `Array`   | An associative array of field names as keys and the values as values |
| Returns   | `Boolean` | `TRUE` if successful, `FALSE` otherwise                              |

Generates an insert string based on the data you supply, and runs the query. You can either pass an `array` or an `object` to the function. Here is an example using an array:

    $data = array(
        array(
            'title' => 'My title',
            'name' => 'My Name',
            'date' => 'My date'
        ),
        array(
            'title' => 'Another title',
            'name' => 'Another Name',
            'date' => 'Another date'
        )
    );

    ee()->db->insert_batch('mytable', $data);
    // Produces: INSERT INTO mytable (title, name, date) VALUES ('My title', 'My name', 'My date'),  ('Another title', 'Another name', 'Another date')

The first parameter will contain the table name, the second is an associative array of values.

### `replace([$table = ''[, $set = NULL]])`

| Parameter | Type           | Description                                                          |
| --------- | -------------- | -------------------------------------------------------------------- |
| \$table   | `String`       | The name of the table to `REPLACE INTO`                              |
| \$set     | `Array`        | An associative array of field names as keys and the values as values |
| Returns   | `CI_DB_result` | A query result object                                                |

This method executes a `REPLACE` statement, which is basically the SQL standard for (optional) `DELETE` + `INSERT`, using `PRIMARY` and `UNIQUE` keys as the determining factor. In our case, it will save you from the need to implement complex logics with different combinations of `select()`, `update()`, `delete()` and `insert()` calls.

Example:

    $data = array(
        'title' => 'My title',
        'name'  => 'My Name',
        'date'  => 'My date'
    );

    ee()->db->replace('table', $data);

    // Executes: REPLACE INTO mytable (title, name, date) VALUES ('My title', 'My name', 'My date')

In the above example, if we assume that the `title` field is our primary key, then if a row containing 'My title' as the `title` value, that row will be deleted with our new row data replacing it.

Usage of the `set()` method is also allowed and all fields are automatically escaped, just like with `insert()`.

### `set($key[, $value = ''[, $escape = TRUE]])`

| Parameter | Type                  | Description                                                                                                              |
| --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| \$key     | `Mixed`               | Either the field for the `SET` clause or an associative array containing the field as the key and the value as the value |
| \$value   | `String`              | The value to `SET`                                                                                                       |
| \$escape  | `Boolean`             | Set to `FALSE` to prevent `CI_DB_driver::protect_identifiers()` and `CI_DB_driver::escape()`                             |
| Returns   | `CI_DB_active_record` | The Active Record object                                                                                                 |

This function enables you to set values for inserts or updates. **It can be used instead of passing a data array directly to the insert or update functions**:

    ee()->db->set('name', $name);
    ee()->db->insert('mytable');  // Produces: INSERT INTO mytable (name) VALUES ('{$name}')

If you use multiple function called they will be assembled properly based on whether you are doing an insert or an update:

    ee()->db->set('name', $name);
    ee()->db->set('title', $title);
    ee()->db->set('status', $status);
    ee()->db->insert('mytable');

`set()` will also accept an optional third parameter (_\$escape_), that will prevent data from being escaped if set to `FALSE`. To illustrate the difference, here is set() used both with and without the escape parameter:

    ee()->db->set('field', 'field+1', FALSE);
    ee()->db->insert('mytable'); // gives INSERT INTO mytable (field) VALUES (field+1)
    ee()->db->set('field', 'field+1');
    ee()->db->insert('mytable'); // gives INSERT INTO mytable (field) VALUES ('field+1')

You can also pass an associative array to this function:

    $array = array(
        'name' => $name,
        'title' => $title,
        'status' => $status
    );

    ee()->db->set($array);
    ee()->db->insert('mytable');

Or an object:

    /*
    class Myclass {
        public $title = 'My Title';
        public $content = 'My Content';
        public $date = 'My Date';
    }
    */

    $object = new Myclass;
    ee()->db->set($object);
    ee()->db->insert('mytable');

## Updating Data

[TOC=3]

### `update([$table = ''[, $set = NULL[, $where = NULL[, $limit = NULL]]]])`

| Parameter | Type           | Description                                                           |
| --------- | -------------- | --------------------------------------------------------------------- |
| \$table   | `String`       | The name of the table to `UPDATE`                                     |
| \$set     | `Array`        | An associative array with fields as the keys and values as the values |
| \$where   | `Array`        | An associative array representing the `where()` clause                |
| \$limit   | `Int`          | Set to a numerical value to `LIMIT` the `UPDATE`                      |
| Returns   | `CI_DB_result` | A query result object                                                 |

Generates an update string and runs the query based on the data you supply. You can pass an `array` or an `object` to the function. Here is an example using an array:

    $data = array(
        'title' => $title,
        'name' => $name,
        'date' => $date
    );

    ee()->db->where('id', $id);
    ee()->db->update('mytable', $data);
    // Produces: // UPDATE mytable  // SET title = '{$title}', name = '{$name}', date = '{$date}' // WHERE id = $id

Or you can supply an object:

    /*
    class Myclass {
        public $title = 'My Title';
        public $content = 'My Content';
        public $date = 'My Date';
    }
    */

    $object = new Myclass;
    ee()->db->where('id', $id);
    ee()->db->update('mytable', $object);
    // Produces: // UPDATE mytable  // SET title = '{$title}', name = '{$name}', date = '{$date}' // WHERE id = $id

You'll notice the use of the `where()` function, enabling you to set the `WHERE` clause. You can optionally pass this information directly into the update function as a string:

    ee()->db->update('mytable', $data, "id = 4");

Or as an array:

    ee()->db->update('mytable', $data, array('id' => $id));

You may also use the `set()` function described above when performing updates.

### `update_batch([$table = ''[, $set = NULL[, $index = NULL]]])`

| Parameter | Type      | Description                                                           |
| --------- | --------- | --------------------------------------------------------------------- |
| \$table   | `String`  | The name of the table to `UPDATE`                                     |
| \$set     | `Array`   | An associative array with fields as the keys and values as the values |
| \$index   | `String`  | The `WHERE` key                                                       |
| Returns   | `Boolean` | `TRUE` if successful, `FALSE` otherwise                               |

Generates an update string based on the data you supply, and runs the query. You can either pass an `array` or an `object` to the function. Here is an example using an array:

    $data = array(
       array(
          'title' => 'My title' ,
          'name' => 'My Name 2' ,
          'date' => 'My date 2'
       ),
       array(
          'title' => 'Another title' ,
          'name' => 'Another Name 2' ,
          'date' => 'Another date 2'
       )
    );

    ee()->db->update_batch('mytable', $data, 'title');

    // Produces:
    // UPDATE `mytable` SET `name` = CASE
    // WHEN `title` = 'My title' THEN 'My Name 2'
    // WHEN `title` = 'Another title' THEN 'Another Name 2'
    // ELSE `name` END,
    // `date` = CASE
    // WHEN `title` = 'My title' THEN 'My date 2'
    // WHEN `title` = 'Another title' THEN 'Another date 2'
    // ELSE `date` END
    // WHERE `title` IN ('My title','Another title')

The first parameter will contain the table name, the second is an associative array of values, the third parameter is the where key.

NOTE: **Note:** `CI_DB_driver::affected_rows()` won't give you proper results with this method, due to the very nature of how it works. Instead, `update_batch()` returns the number of rows affected.

## Deleting Data

[TOC=3]

### `delete([$table = ''[, $where = ''[, $limit = NULL[, $reset_data = TRUE]]]])`

| Parameter    | Type           | Description                                                |
| ------------ | -------------- | ---------------------------------------------------------- |
| \$table      | `String`       | The name of the table to `DELETE` from                     |
| \$where      | `Array`        | An associative array representing the `where()` clause     |
| \$limit      | `Int`          | Set to a numerical value to `LIMIT` the `DELETE`           |
| \$reset_data | `Boolean`      | Set to `FALSE` to not reset Active Record's "write" values |
| Returns      | `CI_DB_result` | A query result object                                      |

Generates a delete SQL string and runs the query:

    ee()->db->delete('mytable', array('id' => $id));
    // Produces:
    // DELETE FROM mytable
    // WHERE id = $id

The first parameter is the table name, the second is the where clause. You can also use the `where()` or `or_where()` functions instead of passing the data to the second parameter of the function:

    ee()->db->where('id', $id);
    ee()->db->delete('mytable');

    // Produces:
    // DELETE FROM mytable
    // WHERE id = $id

An array of table names can be passed into `delete()` if you would like to delete data from more than 1 table:

    $tables = array('table1', 'table2', 'table3');
    ee()->db->where('id', '5');
    ee()->db->delete($tables);

If you want to delete all data from a table, you can use the `truncate()` function, or `empty_table()`.

### `empty_table([$table = ''])`

| Parameter | Type           | Description                            |
| --------- | -------------- | -------------------------------------- |
| \$table   | `String`       | The name of the table to `DELETE FROM` |
| Returns   | `CI_DB_result` | A query result object                  |

Generates a delete SQL string and runs the query:

    ee()->db->empty_table('mytable'); // Produces: DELETE FROM mytable

### `truncate([$table = ''])`

| Parameter | Type           | Description                         |
| --------- | -------------- | ----------------------------------- |
| \$table   | `String`       | The name of the table to `TRUNCATE` |
| Returns   | `CI_DB_result` | A query result object               |

Generates a truncate SQL string and runs the query:

    ee()->db->from('mytable');
    ee()->db->truncate();

    // or

    ee()->db->truncate('mytable');

    // Produce:
    // TRUNCATE mytable

NOTE: **Note:** If the `TRUNCATE` command isn't available, `truncate()` will execute as `DELETE FROM table`.

## Query Grouping

[TOC=3]

Query grouping allows you to create groups of `WHERE` clauses by enclosing them in parentheses. This will allow you to create queries with complex `WHERE` clauses. Nested groups are supported. Example:

    ee()->db->select('*')->from('my_table')
        ->start_group()
            ->where('a', 'a')
            ->or_start_group()
                ->where('b', 'b')
                ->where('c', 'c')
            ->end_group()
        ->end_group()
        ->where('d', 'd')
    ->get();

    // Generates:
    // SELECT * FROM (`my_table`) WHERE ( `a` = 'a' OR ( `b` = 'b' AND `c` = 'c' ) ) AND `d` = 'd'

NOTE: **Note:** groups need to be balanced, make sure every `start_group()` is matched by a `end_group()`.

### `start_group()`

| Parameter | Type                  | Description           |
| --------- | --------------------- | --------------------- |
| Returns   | `CI_DB_active_record` | A query result object |

Starts a new group by adding an opening parenthesis to the `WHERE` clause of the query.

### `or_start_group()`

| Parameter | Type                  | Description           |
| --------- | --------------------- | --------------------- |
| Returns   | `CI_DB_active_record` | A query result object |

Starts a new group by adding an opening parenthesis to the `WHERE` clause of the query, prefixing it with `OR`.

### `end_group()`

| Parameter | Type                  | Description           |
| --------- | --------------------- | --------------------- |
| Returns   | `CI_DB_active_record` | A query result object |

Ends the current group by adding an closing parenthesis to the `WHERE` clause of the query.

## Method Chaining

Method chaining allows you to simplify your syntax by connecting multiple functions. Consider this example:

    $query = ee()->db->select('title')
            ->where('id', $id)
            ->limit(10, 20)
            ->get('mytable');

## Caching

[TOC=3]

While not "true" caching, Active Record enables you to save (or "cache") certain parts of your queries for reuse at a later point in your script's execution. Normally, when an Active Record call is completed, all stored information is reset for the next call. With caching, you can prevent this reset, and reuse information easily.

Cached calls are cumulative. If you make 2 cached `select()` calls, and then 2 uncached `select()` calls, this will result in 4 `select()` calls.

### `start_cache()`

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

This function must be called to begin caching. All Active Record queries of the correct type (see below for supported queries) are stored for later use.

### `stop_cache()`

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

This function can be called to stop caching.

### `flush_cache()`

| Parameter | Type   | Description |
| --------- | ------ | ----------- |
| Returns   | `Void` |             |

This function deletes all items from the Active Record cache.

Here's a usage example:

    ee()->db->start_cache();
    ee()->db->select('field1');
    ee()->db->stop_cache();
    ee()->db->get('tablename');
    //Generates: SELECT `field1` FROM (`tablename`)

    ee()->db->select('field2');
    ee()->db->get('tablename');
    //Generates:  SELECT `field1`, `field2` FROM (`tablename`)

    ee()->db->flush_cache();
    ee()->db->select('field2');
    ee()->db->get('tablename');
    //Generates:  SELECT `field2` FROM (`tablename`)

NOTE: **Note:** The following statements can be cached: `select()`, `from()`, `join()`, `where()`, `like()`, `group_by()`, `having()`, `order_by()`, `set()`.
