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

# Collections

[TOC]

## Simple Example

The collection class is a list-style container for composite datatypes that adds more utility than storing them in a simple PHP array. It can store both arrays and objects:

    use ExpressionEngine\Library\Data\Collection;

    $collection = new Collection(array(
      array('name' => 'Anne', 'age' => 47),
      array('name' => 'Bob', 'age' => 32),
      array('name' => 'Julie', 'age' => 14),
      array('name' => 'Jack', 'age' => 86)
    ));

    $collection->count(); // 4
    $collection->first(); // Anne's array

    $sorted = $collection->sortBy('age');
    $sorted->first(); // Julie's array

For basic interactions a collection can be treated as a regular array:

    foreach ($collection as $person)
    {
      echo $person['age']; // or $person->age if your collection contains objects
    }

    $collection[] = array('name' => 'Savannah', 27);

NOTE: **Note:** Indices are always uninterrupted numeric sequences starting at 0. Do not use string keys.

## Method Reference

**class `ExpressionEngine\Library\Data\Collection`**

[TOC=3]

### `asArray()`

Turn the collection into an array

| Parameter | Type    | Description          |
| --------- | ------- | -------------------- |
| Returns   | `Array` | The collection items |

### `first()`

Get the first element in the collection

| Parameter | Type    | Description                                            |
| --------- | ------- | ------------------------------------------------------ |
| Returns   | `Mixed` | The first element in the collection (or NULL if empty) |

### `last()`

Get the last element in the collection

| Parameter | Type    | Description                                           |
| --------- | ------- | ----------------------------------------------------- |
| Returns   | `Mixed` | The last element in the collection (or NULL if empty) |

### `pluck($key)`

Extract a value from all elements of the collection

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| \$key     | `String` | The key or property name to pluck |
| Returns   | `Array`  | Array of values for the key       |

### `collect($collector)`

Extract a value from all elements of the collection using a keyname or callback.

| Parameter   | Type             | Description                                                             |
| ----------- | ---------------- | ----------------------------------------------------------------------- |
| \$extractor | `String\|Closure` | The name of the property or a closure that returns a value for an item. |
| Returns     | `Array`          | Array of values for the key                                             |

### `sortBy($column, $flags = SORT_REGULAR)`

Sort a collection by a certain element key. Returns a new collection.

| Parameter | Type         | Description                            |
| --------- | ------------ | -------------------------------------- |
| \$key     | `String`     | The key or property to sort by         |
| \$flags   | `Int`        | A [PHP sort flag](https://php.net/sort) |
| Returns   | `Collection` | A new collection                       |

### `reverse()`

Reverse the elements in the collection. Returns a new collection.

| Parameter | Type         | Description                                   |
| --------- | ------------ | --------------------------------------------- |
| Returns   | `Collection` | A new collection with the elements in reverse |

### `indexBy($extractor)`

Return an associative array of all items indexed by a given element.

It is up to you to ensure that the index keys are unique. If `$extractor` is a closure it will be passed each element in the collection and should return the value to use.

| Parameter   | Type             | Description                                                             |
| ----------- | ---------------- | ----------------------------------------------------------------------- |
| \$extractor | `String\|Closure` | The name of the property or a closure that returns a value for an item. |
| Returns     | `Array`          | Associative array of elements                                           |

### `getDictionary($key, $value)`

Return a key-value array composed of two items in each collection element.

It is up to you to ensure that the index keys are unique.

| Parameter   | Type             | Description                                                             |
| ----------- | ---------------- | ----------------------------------------------------------------------- |
| \$extractor | `String\|Closure` | The name of the property or a closure that returns a value for an item. |
| Returns     | `Array`          | Associative key-value array                                             |

### `map($callback)`

Applies the given callback to the collection and returns an array of the results.

| Parameter | Type     | Description               |
| --------- | -------- | ------------------------- |
| \$key     | `String` | The name of the property  |
| Returns   | `Array`  | The value of the property |

### `filter($callback)`

Filter elements of a collection using a callback function. If the callback returns `TRUE` the current value from the collection is returned in the result Collection.

| Parameter  | Type         | Description                          |
| ---------- | ------------ | ------------------------------------ |
| \$callback | `Closure`    | The callback function to use         |
| Returns    | `Collection` | New collection of filtered elements. |

### `each($callback)`

Iterates over all the elements in the Collection and passes them to them to the Callback one at a time.

| Parameter  | Type         | Description                          |
| ---------- | ------------ | ------------------------------------ |
| \$callback | `Closure`    | The callback to pass each element to |
| Returns    | `Collection` | The original collection              |

### `removeElement($model)`

Removes an element from the Collection and returns the reduced Collection.

| Parameter  | Type         | Description                                                   |
| ---------- | ------------ | ------------------------------------------------------------- |
| \$model    | `Model`      | An instance of the Model element held in the collection.      |
| Returns    | `Collection` | The updated collection without the $model element (if found). |

**Note:** This is a handy way to correct for an issue with the EE Model search method which performs `%search_term%` searches rather than literal searches, so you get back all the records that contain the search term in the nominated field rather than those that match the search term. For example, if $collection is a Collection object, this code **removes** any elements that fail to meet a conditional test - so if it had 100 elements to begin with and 5 fail the test, after the code `$collection->count()` will return 95:

```
foreach($collection as $element) {
    if($element->field != 'reference_value') {
        $collection->removeElement($element);
    }
}
```

### `count()`

Count the elements in the Collection

| Parameter | Type  | Description                           |
| --------- | ----- | ------------------------------------- |
| Returns   | `Int` | The number of items in the Collection |
