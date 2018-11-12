.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Grid Fieldtype Extension Hooks
==============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

grid_query
----------

.. function:: grid_query($entry_ids, $field_id, $content_type, $data_table, $sql)

  Allows developers to modify and run the query that gathers Grid row
  data for both the publish form and the front-end tag rendering.

  How it's called::

    if (ee()->extensions->active_hook('grid_query') === TRUE)
    {
      $rows = ee()->extensions->call(
        'grid_query',
        $entry_ids,
        $field_id,
        $content_type,
        $this->_data_table($content_type, $field_id),
        ee()->db->_compile_select(FALSE, FALSE)
      );
    }
    else
    {
      $rows = ee()->db->get(
        $this->_data_table($content_type, $field_id)
      )->result_array();
    }

  :param int $entry_ids: Entry IDs to gather data for.
  :param int $field_id: Field ID of field currently being queried.
  :param string $content_type: The name of the content type this Grid
    field lives in, such as 'channel'.
  :param string $data_table: Name of the table to query the data from.
  :param string $sql: Compiled SQL about to be run to gather Grid row
    data.
  :returns: Result Array of query result.
  :rtype: Array

  .. versionadded:: 2.7.0

grid_save
---------

.. function:: grid_save($entry_id, $field_id, $content_type, $data_table, $data)

  Allows developers to modify or add to the Grid data array before
  saving.

  How it's called::

    $data = ee()->extensions->call(
      'grid_save',
      $entry_id,
      $field_id,
      $content_type,
      $table_name,
      $data
    );

  :param int $entry_id: Entry ID of entry being saved.
  :param int $field_id: Field ID of field being saved.
  :param string $content_type: The name of the content type this Grid
    field lives in, such as 'channel'.
  :param string $data_table: Name of the Grid data table to modify.
  :param array $data: Array of data with keys for ``new_rows``,
    ``updated_rows`` and ``deleted_rows``.
  :returns: Array of data with aforementioned keys intact.
  :rtype: Array

  .. versionadded:: 2.7.0