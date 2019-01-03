.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

##############################
Comment Module Extension Hooks
##############################

.. contents::
  :local:
  :depth: 2

.. highlight:: php

*************************************
Control Panel Hooks (mcp.comment.php)
*************************************

delete_comment_additional
-------------------------

.. function:: delete_comment_additional($comment_ids)

  Allows additional processing after a comment is deleted.

  How it's called::

    ee()->extensions->call('delete_comment_additional', $comment_ids);
    if (ee()->extensions->end_script === TRUE) return;

  :param array $comment_ids: Comment IDs being deleted
  :rtype: Void

  .. versionadded:: 1.4.0

update_comment_additional
-------------------------

.. function:: update_comment_additional($comment_id, $data)

  Allows additional processing when a comment is updated, executed after
  the comment is updated.

  How it's called::

    ee()->extensions->call('update_comment_additional', $comment_id, $data);
    if (ee()->extensions->end_script === TRUE) return;

  :param int $comment_id: ID of the comment being modified
  :param array $data: Comment data
  :rtype: Void

  .. versionadded:: 1.4.0

****************************************
Frontend Comment Hooks (mod.comment.php)
****************************************

comment_entries_query_result
----------------------------

.. function:: comment_entries_query_result($results)

  Take the result of the query that gathers the data to display in the Comment Entries tag and modify it.

  How it's called::

    $results = ee()->extensions->call('comment_entries_query_result', $results);
    if (ee()->extensions->end_script === TRUE) return ee()->TMPL->tagdata;

  :param array $results: Database result array
  :returns: Modified ``$results``
  :rtype: Array

  .. versionadded:: 3.1.0

comment_entries_comment_ids_query
---------------------------------

.. function:: comment_entries_comment_ids_query($db)

  Take the database query object that is building the query to gather IDs for comments to be shown via the Comment Entries tag and manipulate it with your own ``->where()`` clauses. No need to return the object after use.

  How it's called::

    ee()->extensions->call('comment_entries_comment_ids_query', ee()->db);
    if (ee()->extensions->end_script === TRUE) return ee()->TMPL->tagdata;

  :param Database object $db: Query builder instance for the comment IDs query
  :rtype: Void

  .. versionadded:: 3.1.0

comment_entries_comment_format
------------------------------

.. function:: comment_entries_comment_format($row)

  Do whatever you want to the comment variable

  How it's called::

    $comment = ee()->extensions->call('comment_entries_comment_format', $row);
    if (ee()->extensions->end_script === TRUE) return;

  :param array $row: Data for current comment
  :returns: Rendered comment
  :rtype: String

  .. versionadded:: 1.4.0

comment_entries_tagdata
-----------------------

.. function:: comment_entries_tagdata($tagdata, $row)

  Modify and play with the comment entries tagdata before everyone else.

  How it's called::

    $tagdata = ee()->extensions->call('comment_entries_tagdata', $tagdata, $row);
    if (ee()->extensions->end_script === TRUE) return $tagdata;

  :param string $tagdata: Tagdata within comment entries tag
  :param array $row: Data for current comment
  :returns: Modified ``$tagdata``
  :rtype: String

  .. versionadded:: 1.4.0

comment_form_end
----------------

.. function:: comment_form_end($res)

  Modify, add, etc. something to the comment form at end of processing.

  How it's called::

    $res = ee()->extensions->call('comment_form_end', $res);
    if (ee()->extensions->end_script === TRUE) return $res;

  :param string $res: Current tagdata for form
  :returns: Modified ``$res`` (tagdata)
  :rtype: String

  .. versionadded:: 1.5.2

comment_form_hidden_fields
--------------------------

.. function:: comment_form_hidden_fields($hidden_fields)

  Add/Remove Hidden Fields for Comment Form.

  How it's called::

    $hidden_fields = ee()->extensions->call('comment_form_hidden_fields', $hidden_fields);
    if (ee()->extensions->end_script === TRUE) return;

  :param array $hidden_fields: Current hidden fields for the comment
    form
  :returns: Modified ``$hidden_fields``
  :rtype: Array

  .. versionadded:: 1.4.0

comment_form_tagdata
--------------------

.. function:: comment_form_tagdata($tagdata)

  Modify, add, replace anything in the Comment Form tag.

  How it's called::

    $tagdata = ee()->extensions->call('comment_form_tagdata', $tagdata);
    if (ee()->extensions->end_script === TRUE) return;

  :param string $tagdata: Comment form tagdata
  :returns: Modified ``$tagdata``
  :rtype: String

  .. versionadded:: 1.4.0

comment_preview_comment_format
------------------------------

.. function:: comment_preview_comment_format($row)

  Play with the tagdata contents of the comment preview.

  How it's called::

    $data = ee()->extensions->call('comment_preview_comment_format', $query->row());
    if (ee()->extensions->end_script === TRUE) return;

  :param array $row: Data for the comment being previewed
  :returns: Rendered comment preview
  :rtype: String

  .. versionadded:: 1.4.0

comment_preview_tagdata
-----------------------

.. function:: comment_preview_tagdata($tagdata)

  Play with the tagdata contents of the comment preview.

  How it's called::

    $tagdata = ee()->extensions->call('comment_preview_tagdata', $tagdata);
    if (ee()->extensions->end_script === TRUE) return;

  :param string $tagdata: Comment preview tagdata
  :returns: Modified ``$tagdata``
  :rtype: String

  .. versionadded:: 1.4.0

insert_comment_start
----------------------

.. function:: insert_comment_start()

  Allows complete rewrite of comment submission routine, or could be
  used to modify the POST data before processing.

  How it's called::

    ee()->extensions->call('insert_comment_start');
    if (ee()->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.4.0

insert_comment_end
------------------

.. function:: insert_comment_end($data, $comment_moderate, $comment_id)

  More emails, more processing, different redirect at the end of the
  comment inserting routine.

  How it's called::

    ee()->extensions->call('insert_comment_end', $data, $comment_moderate, $comment_id);
    if (ee()->extensions->end_script === TRUE) return;

  :param array $data: Data for the new comment
  :param boolean $comment_moderate: ``TRUE`` if the comment is going to
    be moderated
  :param int $comment_id: ID of comment
  :rtype: Void

  .. versionadded:: 1.6.1

insert_comment_insert_array
---------------------------

.. function:: insert_comment_insert_array($data)

  Modify any of the soon to be inserted values for a new comment.

  How it's called::

    $data = ee()->extensions->call('insert_comment_insert_array', $data);
    if (ee()->extensions->end_script === TRUE) return;

  :param array $data: Data for the new comment
  :returns: Modified ``$data``
  :rtype: Array

  .. versionadded:: 1.5.0

insert_comment_preferences_sql
------------------------------

.. function:: insert_comment_preferences_sql($sql)

  Rewrite or add to the comment preference sql query - Could be handy
  for comment/weblog restrictions.

  How it's called::

    $sql = ee()->extensions->call('insert_comment_preferences_sql', $sql);
    if (ee()->extensions->end_script === TRUE) return;

  :param string $sql: Current query to return preferences for a comment
    insert
  :returns: Modified ``$sql``
  :rtype: String

  .. versionadded:: 1.4.0

