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

# Model Query Builder

Model Query Builder class is providing a bridge between Model instance and the database by transforming PHP code into SQL queries.

In order to use methods of this class, you need to have a [Model](development/services/model.html) instance. You can get a Model instance by using `ee('Model')` service and getting or making a new model.

    $existingTemplate = ee('Model')->get('Template');

    $newTemplate = ee('Model')->make('Template');

## Method Reference

**class `ExpressionEngine\Service\Model\Query\Builder`**

[TOC=3]

### `first($cache = FALSE)`

Run the query limited to one result and return the first element in the [Collection](development/services/model/collection.md)

| Parameter | Type    | Description                                            |
| --------- | ------- | ------------------------------------------------------ |
| \$cache   | `Bool`  | Whether the query results should be cached. Defaults to `false` |
| Returns   | `Mixed` | The first element in the collection (or NULL if empty) |

### `all($cache = FALSE)`

Run the query and return the results as a [Collection](development/services/model/collection.md)

| Parameter | Type    | Description                                            |
| --------- | ------- | ------------------------------------------------------ |
| \$cache   | `Bool`  | Whether the query results should be cached. Defaults to `false` |
| Returns   | `Mixed` | All elements in the collection (or NULL if empty) |

### `update()`

Updates the model(s) data by running SQL `UPDATE` query.
NOTE: It's not recommended to use this method directly. Use `save()` method of the model instead.

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| Returns   | `Void`  |                      |

### `insert()`

Inserts new database record for model by running SQL `INSERT` query.
NOTE: It's not recommended to use this method directly. Use `save()` method of the model instead.

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| Returns   | `Void`  |                      |

### `delete()`

Delete the model(s) from database by running SQL `DELETE` query.

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| Returns   | `Void`  |                      |

### `count()`

Get the number of records that match criterias by running SQL `COUNT` query

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| Returns   | `Int`   | The number of matching models |

### `search($properties, $value)`

Performs search using `LIKE` operator on specified columns.
Subsequent calls to this method will be chained with `AND` operator.

| Parameter | Type      | Description          |
| --------- | --------- | -------------------- |
| \$properties | `String|Array`  | Model property name, or array of property names |
| \$value | `String`  | String value to search |
| Returns   | `Builder` | Modified instance of Query Builder |

### `filter($property, $operator = '==', $value = NULL)`

Filter the query by adding a `WHERE` clause to the SQL query.
Note: when third parameter is omited, second parameter is used as value and `==` operator is used.
Subsequent calls to this method will be chained with `AND` operator.

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| \$property | `String`  | Model property name |
| \$operator | `String`  | Comparison operator. (List of supported operators)[development/services/model/fetching.md#available-filters]. Defaults to `==` |
| \$value | `String`  | Value to compare to |
| Returns   | `Builder` | Modified instance of Query Builder |

### `orFilter()`

Same as `filter()` but chained with `OR` operator.

### `filterGroup()`

Used to group filters with `AND` operator. Should be closed with `endFilterGroup()` method.

### `orFilterGroup()`

Used to group filters with `OR` operator. Should be closed with `endFilterGroup()` method.

### `endFilterGroup()`

Indicates the end of filter group.

### `fields($field1, $field2, ...)`

Limits the `SELECT` part of SQL query to only fetch certain model properties.

### `set($property, $value)`

Sets the model property with SQL `SET` so it could be saved to database later

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| \$property | `String`  | Model property name |
| \$value | `String`  | New property value |
| Returns   | `Builder` | Modified instance of Query Builder |

### `with($relationship)`

Adds [related model](development/services/model/fetching.md#relationships) to the query by performing SQL `JOIN`

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| \$property | `String|Array`  | Name of model relatioship, or deeply nested array of relationship names |
| Returns   | `Builder` | Modified instance of Query Builder |

### `order()`

Name of property to order by, converted to SQL `ORDER BY` clause

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| Returns   | `Builder` | Modified instance of Query Builder |

### `limit($limit)`

Limit the query by applying SQL `LIMIT` clause

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| \$limit | `Int`  | Number to limit by. Defaults to 2^64 |
| Returns   | `Builder` | Modified instance of Query Builder |

### `offset($offset)`

Limit the query by applying offset to SQL `LIMIT` clause

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| \$offset | `Int`  | Number to offset. Defaults to 0 |
| Returns   | `Builder` | Modified instance of Query Builder |
