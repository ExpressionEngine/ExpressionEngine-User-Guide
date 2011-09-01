Forum Module Extension Hooks
============================

.. contents::
	:local:
	:depth: 1



forum_post_vote_start
---------------------

Allows rewrite or modification of post vote data before updating votes

::

	$data = $this->extensions->universal_call('forum_post_vote_start', $data, $vote);
	if ($this->extensions->end_script === TRUE) return;

$data
~~~~~

An associative array including the user's existing vote status, the post_id, and the member_id of the person voting

$vote
~~~~~

-1 for a vote down, 1 for a vote up

thread_rows

:returns:
    Array

Added in v4.0

forum_post_solution_start
-------------------------

Allows rewrite or modification of post solution data before updating topic solution

::

	$edata = $this->extensions->universal_call('forum_post_solution_start', $tquery, $post_id);
	if ($this->extensions->end_script === TRUE) return;

$tquery
~~~~~~~

The existing data for the topic

$post_id
~~~~~~~~

The new post_id specified as the solution_post_id

thread_rows

:returns:
    Void

Added in v4.0

forum_submission_form_start
---------------------------

Allows rewrite or modify of Submission form template before processing

::

	$str = $this->extensions->universal_call('forum_submission_form_start', $this, $str);
	if ($this->extensions->end_script === TRUE) return $str;

$this
~~~~~

The current Forum Core object

$str
~~~~

Submission form template

:returns:
    String

Added in v1.4.0

forum_submission_form_end
-------------------------

Final chance to modify the submission form before it is displayed

::

	$str = $this->extensions->universal_call('forum_submission_form_end', $this, $str);
	if ($this->extensions->end_script === TRUE) return $str;

$this
~~~~~

The current Forum Core object

$str
~~~~

Submission form template

:returns:
    String

Added in v1.4.0

forum_submission_page
---------------------

- Allows usurping of forum submission forms
- More error checking and permissions, too

::

	$edata = $this->extensions->universal_call('forum_submission_page', $this, $type);
	if ($this->extensions->end_script === TRUE) return $edata;

$this
~~~~~

The current Forum Core object

$type
~~~~~

new\_topic, edit\_topic, new\_reply, edit\_reply

:returns:
    void

Added in v1.4.0

forum_submit_post_start
-----------------------

Allows usurping of forum submission routine or possible adding more
checks and permissions

::

	$edata = $this->extensions->universal_call('forum_submit_post_start', $this);
	if ($this->extensions->end_script === TRUE) return $edata;

$this
~~~~~

The current Forum Core object

:returns:
    void

Added in v1.4.0

forum_submit_post_end
---------------------

Do more processing after the post is submitted. ::

	$edata = $this->extensions->universal_call('forum_submit_post_end', $this, $data);
	if ($this->extensions->end_script === TRUE) return $edata;

$this
~~~~~

The current Forum Core object

$data
~~~~~

the forum post data array

:returns:
    void

Additional Notes
^^^^^^^^^^^^^^^^

Note that user notifications have not been sent at this point. The $data
array was added in build 20080626

Added in v1.5.2

forum_threads_template
----------------------

Allows modifying of the Threads display template before it is processed

::

	$str = $this->extensions->universal_call('forum_threads_template', $this, $str, $tquery);
	if ($this->extensions->end_script === TRUE) return $str;

$this
~~~~~

The current Forum Core object

$str
~~~~

The topics thread template

$tquery
~~~~~~~

The data for this thread

:returns:
    String

Added in v1.4.0

forum_thread_rows_absolute_end
------------------------------

Take the processed thread rows and do what you wish

::

	$thread_rows = $this->extensions->universal_call('forum_thread_rows_absolute_end', $this, $data, $thread_rows);
	if ($this->extensions->end_script === TRUE) return $thread_rows;

$this
~~~~~

The current Forum Core object

$data
~~~~~
Information about the current group of thread\_rows (announcement,
topic, all posts, etc.)

$thread_rows
~~~~~~~~~~~~

The fully processed thread row template

:returns:
    String

Added in v1.5.1

forum_thread_rows_loop_start
----------------------------

Modify the thread row template and data before any processing takes
place

::

	$temp = $this->extensions->universal_call('forum_thread_rows_loop_start', $this, $data, $row, $temp);
	if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Forum Core object

$data
~~~~~

The data for all thread rows

$row
~~~~

The data for this thread row (post)

$temp
~~~~~

The processed thread row

:returns:
    String

Added in v1.5.1

forum_thread_rows_loop_end
--------------------------

Modify the processed row before it is appended to the template output

::

	$temp = $this->extensions->universal_call('forum_thread_rows_loop_end', $this, $data, $row, $temp);
	if ($this->extensions->end_script === TRUE) return;

$this
~~~~~
The current Forum Core object

$data
~~~~~

The data for all thread rows

$row
~~~~

The data for this thread row (post)

$temp
~~~~~

The processed thread row

:returns:
    String

Added in v1.5.1

forum_thread_rows_start
-----------------------

Allows modifying of the thread rows template

::

	$template = $this->extensions->universal_call('forum_thread_rows_start', $this, $template, $data, $is_announcement, $thread_review);
	if ($this->extensions->end_script === TRUE) return $template;

$this
~~~~~

The current Forum Core object

$template
~~~~~~~~~

The topics thread row template

$data
~~~~~

The data for this thread row (post)

$is_announcement
~~~~~~~~~~~~~~~~

TRUE/FALSE

$thread_review
~~~~~~~~~~~~~~

TRUE/FALSE

:returns:
    String

Added in v1.4.0

forum_topics_absolute_end
-------------------------

Modify the finalized topics template and do what you wish

::

	$str = $this->extensions->universal_call('forum_topics_absolute_end', $this, $query->result, $str);
	if ($this->extensions->end_script === TRUE) return $str;

$this
~~~~~

The current Forum Core object

$query->result
~~~~~~~~~~~~~~

Array of all of the displayed topics

$str
~~~~

The finalized topics template

:returns:
    String

Added in v1.5.1

forum_topics_loop_start
-----------------------

Modify the topic row template and data before any processing takes place

::

	$temp = $this->extensions->universal_call('forum_topics_loop_start', $this, $query->result, $row, $temp);
	if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Forum Core object

$query->result
~~~~~~~~~~~~~~

Array of all of the topics

$row
~~~~

The data for this topic

$temp
~~~~~

The yet-to-be-processed template

:returns:
    String

Added in v1.5.1

forum_topics_loop_end
---------------------

Modify the processed topic row before it is appended to the template
output

::

	$temp = $this->extensions->universal_call('forum_topics_loop_end', $this, $query->result, $row, $temp);
	if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

The current Forum Core object

$query->result
~~~~~~~~~~~~~~

Array of all of the topics

$row
~~~~

The data for this topic

$temp
~~~~~

The yet-to-be-processed template

:returns:
    String

Added in v1.5.1

forum_topics_start
------------------

Allows modifying of the Topics display template before it is processed

::

	$str = $this->extensions->universal_call('forum_topics_start', $this, $str);
	if ($this->extensions->end_script === TRUE) return $str;

$this
~~~~~

The current Forum Core object

$str
~~~~

The topics template

:returns:
    String

Added in v1.4.0

main_forum_table_rows_template
------------------------------

Allows modifying of the forum\_table\_rows template

::

	$table_rows = $this->extensions->universal_call('main_forum_table_rows_template', $this, $query->result, $row, $temp);
	if ($this->extensions->end_script === TRUE) return $table_rows;

$this
~~~~~

The current Forum Core object

$table_rows
~~~~~~~~~~~

The unparsed forum table rows template

$row
~~~~
Array of data for the current row

$markers
~~~~~~~~

Array of topic markers

$read_topics
~~~~~~~~~~~~

Array of topics read by current visitor

:returns:
    Array

Added in v1.6.8
