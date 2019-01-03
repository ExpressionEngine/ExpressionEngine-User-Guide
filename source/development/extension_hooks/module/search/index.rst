.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Search Module Extension Hooks
=============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

channel_search_modify_search_query
----------------------------------

.. function:: channel_search_modify_search_query($sql, $hash)

  Modify the query stored by the Search Module. When a new search is
  performed, the Search Module creates the query for searching the
  database and caches that query in the database for later retrievals.

  How it's called::

    $modified_sql = ee()->extensions->call('channel_search_modify_search_query', $sql, $this->hash);
    ...
    if (ee()->extensions->end_script === TRUE) return $sql;

  :param string $sql: Unmodified search query
  :param string $hash: Unique ID identifying this query in the database
  :returns: SQL query
  :rtype: String

  .. versionadded:: 2.8

channel_search_modify_result_query
----------------------------------

.. function:: channel_search_modify_result_query($sql, $hash)

  Modify the query retrieved by the Search Module. When search results
  are displayed, a cached query is retrieved from the database to
  perform the search.

  How it's called::

    $modified_sql = ee()->extensions->call('channel_search_modify_result_query', $sql, $search_id);

  :param string $sql: Unmodified search query
  :param string $search_id: Unique ID identifying this query in the
    database
  :returns: SQL query
  :rtype: String

  .. versionadded:: 2.8