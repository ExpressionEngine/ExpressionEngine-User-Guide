##############################
Comment Module Extension Hooks
##############################

.. contents::
	:local:
	:depth: 2

                                 
*************************************
Control Panel Hooks (mcp.comment.php)
*************************************

delete\_comment\_additional
---------------------------

Allows additional processing after a comment is deleted. ::

	$edata = $this->extensions->call('delete_comment_additional', $comment_ids); if ($this->extensions->end_script === TRUE) return;

$comment\_ids
~~~~~~~~~~~~~

Array of comment ids being deleted

:returns:
    void

Added in v1.4.0

update\_comment\_additional
---------------------------

Allows additional processing when a comment is updated, executed after
the comment is updated. ::

	$edata = $this->extensions->call('update_comment_additional', $comment_id, $data); if ($this->extensions->end_script === TRUE) return;

$comment\_id
~~~~~~~~~~~~

comment\_id of the comment being modified

$data
~~~~~

Array of data used to update the comment.

:returns:
    void

Added in v1.4.0

****************************************
Frontend Comment Hooks (mod.comment.php)
****************************************

comment\_entries\_comment\_format
---------------------------------

Do whatever you want to the comment variable

::

	$comment = $this->extensions->call('comment_entries_comment_format', $row); if ($this->extensions->end_script === TRUE) return;

$row
~~~~

The data for the current comment

:returns:
    String

Added in v1.4.0

comment\_entries\_tagdata
-------------------------

Modify and play with the comment entries tagdata before everyone else

::

	$tagdata = $this->extensions->call('comment_entries_tagdata', $tagdata, $row); if ($this->extensions->end_script === TRUE) return $tagdata;

$tagdata
~~~~~~~~

The tag data

$row
~~~~

The data for the current comment

:returns:
    String

Added in v1.4.0

comment\_form\_end
------------------

Modify, add, etc. something to the comment form at end of processing

::

	$res = $this->extensions->call('comment_form_end', $res); if ($this->extensions->end_script === TRUE) return $res;

$res
~~~~

The current tag data for the form

:returns:
    String

Added in v1.5.2

comment\_form\_hidden\_fields
-----------------------------

Add/Remove Hidden Fields for Comment Form

::

	$hidden_fields = $this->extensions->call('comment_form_hidden_fields', $hidden_fields); if ($this->extensions->end_script === TRUE) return;

$hidden\_fields
~~~~~~~~~~~~~~~

The current array of hidden fields for the comment form

:returns:
    Array

Added in v1.4.0

comment\_form\_tagdata
----------------------

Modify, add, replace anything in the Comment Form tag

::

	$tagdata = $this->extensions->call('comment_form_tagdata', $tagdata); if ($this->extensions->end_script === TRUE) return;

$tagdata
~~~~~~~~

The tag data for the Comment Form tag

:returns:
    Array

Added in v1.4.0

comment\_preview\_comment\_format
---------------------------------

Play with the tagdata contents of the comment preview

::

	$data = $this->extensions->call('comment_preview_comment_format', $query->row()); if ($this->extensions->end_script === TRUE) return;

$query->row()
~~~~~~~~~~~~~

The data for the comment being previewed

:returns:
    String

Added in v1.4.0

comment\_preview\_tagdata
-------------------------

Play with the tagdata contents of the comment preview

::

	$tagdata = $this->extensions->call('comment_preview_tagdata', $tagdata); if ($this->extensions->end_script === TRUE) return;

$tagdata
~~~~~~~~

The tagdata for the comment preview tag

:returns:
    String

Added in v1.4.0

insert\_comment\_end
--------------------

More emails, more processing, different redirect at the end of the
comment inserting routine

::

	$edata = $this->extensions->call('insert_comment_end', $data, $comment_moderate, $comment_id); if ($this->extensions->end_script === TRUE) return;

$data
~~~~~

Array of the data for the new comment

$comment\_moderate
~~~~~~~~~~~~~~~~~~

Whether the comment is going to be moderated

$comment\_id
~~~~~~~~~~~~

the ID of the comment (added 1.6.1)

:returns:
    void

Added in v1.6.1

insert\_comment\_insert\_array
------------------------------

Modify any of the soon to be inserted values for a new comment

::

	$data = $this->extensions->call('insert_comment_insert_array', $data); if ($this->extensions->end_script === TRUE) return;

$data
~~~~~

Array of the data for the new comment

:returns:
    Array

Added in v1.5.0

insert\_comment\_preferences\_sql
---------------------------------

Rewrite or add to the comment preference sql query - Could be handy for comment/weblog restrictions

::

	$sql = $this->extensions->call('insert_comment_preferences_sql', $sql); if ($this->extensions->end_script === TRUE) return;

$sql
~~~~

The current query to return preferences for a comment insert

:returns:
    String

Added in v1.4.0

insert\_comment\_start
----------------------

Allows complete rewrite of comment submission routine, or could be used
to modify the POST data before processing

::

	$edata = $this->extensions->call('insert_comment_start'); if ($this->extensions->end_script === TRUE) return;

:returns:
    void

Added in v1.4.0
