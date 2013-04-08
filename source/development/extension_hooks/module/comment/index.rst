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

    $this->EE->extensions->call('delete_comment_additional', $comment_ids);
    if ($this->EE->extensions->end_script === TRUE) return;

  :param array $comment_ids: Comment IDs being deleted
  :rtype: Void

  .. versionadded:: 1.4.0

update_comment_additional
-------------------------

.. function:: update_comment_additional($comment_id, $data)

  Allows additional processing when a comment is updated, executed after
  the comment is updated.

  How it's called::

    $this->EE->extensions->call('update_comment_additional', $comment_id, $data);
    if ($this->EE->extensions->end_script === TRUE) return;

  :param int $comment_id: ID of the comment being modified
  :param array $data: Comment data
  :rtype: Void

  .. versionadded:: 1.4.0

****************************************
Frontend Comment Hooks (mod.comment.php)
****************************************

comment_entries_comment_format
------------------------------

.. function:: comment_entries_comment_format($row)

  Do whatever you want to the comment variable

  How it's called::

    $comment = $this->EE->extensions->call('comment_entries_comment_format', $row);
    if ($this->EE->extensions->end_script === TRUE) return;

  :param array $row: Data for current comment
  :returns: Rendered comment
  :rtype: String

  .. versionadded:: 1.4.0

comment_entries_tagdata
-----------------------

.. function:: comment_entries_tagdata($tagdata, $row)

  Modify and play with the comment entries tagdata before everyone else.

  How it's called::

    $tagdata = $this->EE->extensions->call('comment_entries_tagdata', $tagdata, $row);
    if ($this->EE->extensions->end_script === TRUE) return $tagdata;

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

    $res = $this->EE->extensions->call('comment_form_end', $res);
    if ($this->EE->extensions->end_script === TRUE) return $res;

  :param string $res: Current tagdata for form
  :returns: Modified ``$res`` (tagdata)
  :rtype: String

  .. versionadded:: 1.5.2

comment_form_hidden_fields
--------------------------

.. function:: comment_form_hidden_fields($hidden_fields)

  Add/Remove Hidden Fields for Comment Form.

  How it's called::

    $hidden_fields = $this->EE->extensions->call('comment_form_hidden_fields', $hidden_fields);
    if ($this->EE->extensions->end_script === TRUE) return;

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

    $tagdata = $this->EE->extensions->call('comment_form_tagdata', $tagdata);
    if ($this->EE->extensions->end_script === TRUE) return;

  :param string $tagdata: Comment form tagdata
  :returns: Modified ``$tagdata``
  :rtype: String

  .. versionadded:: 1.4.0

comment_preview_comment_format
------------------------------

.. function:: comment_preview_comment_format($row)

  Play with the tagdata contents of the comment preview.

  How it's called::

    $data = $this->EE->extensions->call('comment_preview_comment_format', $query->row());
    if ($this->EE->extensions->end_script === TRUE) return;

  :param array $row: Data for the comment being previewed
  :returns: Rendered comment preview
  :rtype: String

  .. versionadded:: 1.4.0

comment_preview_tagdata
-----------------------

.. function:: comment_preview_tagdata($tagdata)

  Play with the tagdata contents of the comment preview.

  How it's called::

    $tagdata = $this->EE->extensions->call('comment_preview_tagdata', $tagdata);
    if ($this->EE->extensions->end_script === TRUE) return;

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

    $this->EE->extensions->call('insert_comment_start');
    if ($this->EE->extensions->end_script === TRUE) return;

  :rtype: Void

  .. versionadded:: 1.4.0

insert_comment_end
------------------

.. function:: insert_comment_end($data, $comment_moderate, $comment_id)

  More emails, more processing, different redirect at the end of the
  comment inserting routine.

  How it's called::

    $this->EE->extensions->call('insert_comment_end', $data, $comment_moderate, $comment_id);
    if ($this->EE->extensions->end_script === TRUE) return;

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

    $data = $this->EE->extensions->call('insert_comment_insert_array', $data);
    if ($this->EE->extensions->end_script === TRUE) return;

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

    $sql = $this->EE->extensions->call('insert_comment_preferences_sql', $sql);
    if ($this->EE->extensions->end_script === TRUE) return;

  :param string $sql: Current query to return preferences for a comment
    insert
  :returns: Modified ``$sql``
  :rtype: String

  .. versionadded:: 1.4.0

