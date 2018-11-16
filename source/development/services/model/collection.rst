.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Collections
===========

.. contents::
  :local:
  :depth: 1

.. highlight:: php

Simple Example
--------------

The collection class is a list-style container for composite datatypes that adds
more utility than storing them in a simple PHP array. It can store both arrays
and objects::

  use EllisLab\ExpressionEngine\Library\Data\Collection;

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

For basic interactions a collection can be treated as a regular array::

  foreach ($collection as $person)
  {
    echo $person['age']; // or $person->age if your collection contains objects
  }

  $collection[] = array('name' => 'Savannah', 27);

.. Note:: Indices are always uninterrupted numeric sequences starting at 0. Do
  not use string keys.

Method Reference
----------------

.. class:: EllisLab\\ExpressionEngine\\Library\\Data\\Collection

.. method:: asArray()

  Turn the collection into an array

  :returns: The collection items
  :rtype: Array

.. method:: first()

  Get the first element in the collection

  :returns: The first element in the collection (or NULL if empty)
  :rtype: Mixed

.. method:: last()

  Get the last element in the collection

  :returns: The last element in the collection (or NULL if empty)
  :rtype: Mixed

.. method:: pluck($key)

  Extract a value from all elements of the collection

  :param string $key: The key or property name to pluck
  :returns: Array of values for the key
  :rtype: Array

.. method:: collect($collector)

  Extract a value from all elements of the collection using a keyname or
  callback.

  :param string|Closure $extractor: The name of the property or a closure
    that returns a value for an item.
  :returns: Array of values for the key
  :rtype: Array

.. method:: sortBy($column, $flags = SORT_REGULAR)

  Sort a collection by a certain element key. Returns a new collection.

  :param string $key: The key or property to sort by
  :param int $flags: A `PHP sort flag <http://php.net/sort>`_
  :returns: A new collection
  :rtype: Collection

.. method:: reverse()

  Reverse the elements in the collection. Returns a new collection.

  :returns: A new collection with the elements in reverse
  :rtype: Collection

.. method:: indexBy($extractor)

  Return an associative array of all items indexed by a given element.

  It is up to you to ensure that the index keys are unique. If
  ``$extractor`` is a closure it will be passed each element in the
  collection and should return the value to use.

  :param string|Closure $extractor: The name of the property or a closure
    that returns a value for an item.
  :returns: Associative array of elements
  :rtype: Array

.. method:: getDictionary($key, $value)

  Return a key-value array composed of two items in each collection element.

  It is up to you to ensure that the index keys are unique.

  :param string|Closure $extractor: The name of the property or a closure
    that returns a value for an item.
  :returns: Associative key-value array
  :rtype: Array


.. method:: map($callback)

  Applies the given callback to the collection and returns an array
  of the results.

  :param string $key: The name of the property
  :returns: The value of the property
  :rtype: Array

.. method:: filter($callback)

  Filter elements of a collection using a callback function. If the callback
  returns ``TRUE`` the current value from the collection is returned in the
  result Collection.

  :param Closure $callback: The callback function to use
  :returns: New collection of filtered elements.
  :rtype: Collection

.. method:: each($callback)

  Iterates over all the elements in the Collection and passes them to them
  to the Callback one at a time.

  :param Closure $callback: The callback to pass each element to
  :returns: The original collection
  :rtype: Collection

.. method:: count()

  Count the elements in the Collection

  :returns: The number of items in the Collection
  :rtype: int
