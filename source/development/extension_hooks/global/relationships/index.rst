.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Relationships Fieldtype Extension Hooks
=======================================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

relationships_display_field
---------------------------

.. function:: relationships_display_field($entry_id, $field_id, $sql)

  Allows developers to modify the existing query that retrieves related
  entries for the publish field or to perform their own queries to
  return related entries.

  How it's called::

    if (ee()->extensions->active_hook('relationships_display_field') === TRUE)
    {
        $related = ee()->extensions->call(
            'relationships_display_field',
            $entry_id,
            $this->field_id,
            ee()->db->_compile_select()
        );
    }
    else
    {
        $related = ee()->db->get()->result_array();
    }

  .. note:: To use this hook, you can either add to the existing Active
    Record call, or call ``ee()->db->_reset_select()`` to cancel the
    Active Record call and start your own, or modify the passed compiled
    SQL.

  :param int $entry_id: Entry ID of entry being edited.
  :param int $field_id: Field ID of field currently being loaded.
  :param string $sql: Compiled SQL about to be run to gather related
    entries.
  :returns: Result Array of query result.
  :rtype: Array

  .. versionadded:: 2.6.0


relationships_display_field_options
-----------------------------------

.. function:: relationships_display_field_options($entry_id, $field_id, $sql)

  Allows developers to add additional filters to the entries that populate the
  select options available to the relationship field.

  How it's called::

    if (ee()->extensions->active_hook('relationships_display_field_options') === TRUE)
    {
        ee()->extensions->call(
            'relationships_display_field_options',
            $entries,
            $this->field_id,
            $this->settings
        );
    }

  :param object $entries: ChannelEntry model object.
  :param int $field_id: Field ID of field currently being loaded.
  :param array $settings: The field settings for the field being loaded.
  :rtype: Void

  .. versionadded:: 3.3.0

relationships_post_save
-----------------------

.. function:: relationships_post_save($ships, $entry_id, $field_id)

  Allows developers to modify or add to the relationships array before
  saving.

  How it's called::

    $ships = ee()->extensions->call('relationships_post_save', $ships, $entry_id, $field_id);

  :param array $ships: Array of entry IDs to be related to the entry.
  :param int $entry_id: Entry ID of entry being saved.
  :param int $field_id: Field ID of field currently being saved.
  :returns: Array of relationships.
  :rtype: Array

  .. versionadded:: 2.6.0

relationships_query
-------------------

.. function:: relationships_query($field_name, $entry_ids, $depths, $sql)

  Allows developers to modify the existing query that retrieves related
  entries for front end tag parsing or to perform their own queries to
  return related entries.

  How it's called::

    if (ee()->extensions->active_hook('relationships_query') === TRUE)
    {
        $result = ee()->extensions->call(
            'relationships_query',
            $node->field_name(),
            $entry_ids,
            $depths,
            $db->_compile_select()
        );
    }
    else
    {
        $result = $db->get()->result_array();
    }

  .. note:: To use this hook, you can either add to the existing Active
    Record call, or call ``ee()->db->_reset_select()`` to cancel the
    Active Record call and start your own, or modify the passed compiled
    SQL.

  :param string $field_name: Name of current node being parsed.
  :param int $entry_ids: Entry IDs of entries being queried for.
  :param array $depths: Depth of branches.
  :param string $sql: Compiled SQL about to be run to gather related
    entries.
  :returns: Result Array of query result.
  :rtype: Array

  .. versionadded:: 2.6.0

relationships_query_result
--------------------------

.. function:: relationships_query_result($entry_lookup)

  Allows developers to modify or add columns to the relationships array.
  Do not use this hook to remove elements.

  How it's called::

    $entry_lookup = ee()->extensions->call('relationships_query_result', $entry_lookup);

  :param array $entry_lookup: Array of entry IDs to rows for all relationship tags.
  :returns: Array of entry IDs to rows.
  :rtype: Array

  .. versionadded:: 2.7.1

relationships_modify_rows
-------------------------

.. function:: relationships_modify_rows($rows, $node)

  Allows developers to modify or add to the relationship rows right before
  parsing happens.

  How it's called::

    $rows = ee()->extensions->call('relationships_modify_rows', $rows, $node);

  :param array $rows: Array of entry IDs to rows for this tag.
  :param ParseNode $node: Parse node for the current relationships tag.
  :returns: Array of entry ids to rows for this tag.
  :rtype: Array

  .. versionadded:: 2.7.1
