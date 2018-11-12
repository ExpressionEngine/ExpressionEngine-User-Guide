.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

###########
CSV Library
###########

.. contents::
  :local:
  :depth: 1

.. highlight:: php

**************
Simple Example
**************

The CSV library is built to take in rows of data as either associative arrays or as objects and either save the data as a file or return it as a string. Each row of data is added one at a time, but you can provide any combination of associaitve arrays and objects and they can have differing keys and property names::

  $csv = ee('CSV');
  $csv->addRow(array(
    'email' => 'team at ellislab dot com',
    'title' => 'EllisLab Team'
  ))->addRow(array(
    'email' => 'hello at ellislab dot com',
    'name' => 'Hello to EllisLab'
  ));
  echo (string) $csv;

Would result in::

  "email", "title", "name"
  "team at ellislab dot com", "EllisLab Team", ""
  "hello at ellislab dot com", "", "Hello to EllisLab"

Alternatively you could save the resulting data to a file::

  $csv->save('/path/to/file.csv');

*******
Methods
*******

.. namespace:: EllisLab\ExpressionEngine\Library\Data

.. class:: CSV

.. method:: addRow($rowData)

  Add a row of data to the CSV instance::

    $csv->addRow(array(
      'email' => 'team at ellislab dot com',
      'title' => 'EllisLab Team'
    ));

    OR

    $row = new \stdClass();
    $row->email = 'team at ellislab dot com';
    $row->name = 'EllisLab Team';
    $result = $csv->addRow($row);

  :param array/object $rowData: A single row of data passed in as an object or as an associaitve array
  :returns: ``$this``, the CSV object itself so you can chain ``->addRow()`` and ``->save()`` calls.
  :rtype: Object

.. method:: save($filename)

  Save the csv data to a file::

    $csv->save('/path/to/file.csv');

  :param string $filename: The path to the file
  :returns: ``TRUE`` if the file was saved, ``FALSE`` if there was a failure
  :rtype: Boolean

.. method:: __toString()

  String representation of the csv data::

    echo (string) $csv;

  :returns: String representation of the csv data
  :rtype: String
