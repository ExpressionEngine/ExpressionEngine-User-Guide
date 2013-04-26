Forum Module Extension Hooks
============================

.. contents::
  :local:
  :depth: 1

.. highlight:: php

forum_add_template
------------------

.. function:: forum_add_template($which, $classname)

  Allows the addition and loading of entirely new templates.

  How it's called::

    $classname = ee()->extensions->call('forum_add_template', $which, $classname);

  :param string $which: The name of the template to be loaded.
  :param string $classname: The name of the class and thus folder
    associated with the template name or ``FALSE``.
  :returns: Modified ``$classname``
  :rtype: String

  .. versionadded:: 2.5.0

forum_include_extras
--------------------

.. function:: forum_include_extras($this, $function, $element)

  Allows additional processing of forum templates that are not
  associated with an existing forum method call. Can be used in
  conjunction with the forum_add_template hook to parse entirely new
  templates.

  How it's called::

    $element = ee()->extensions->call('forum_include_extras', $this, $function, $element);

  :param object $this: The current Forum object
  :param string $function: The name of the template being parsed.
  :param string $element: A string containing the contents of the template.
  :returns: Modified temlate (``$element``)
  :rtype: String

  .. versionadded:: 2.5.0

forum_submission_form_start
---------------------------

.. function:: forum_submission_form_start($this, $str)

  Allows rewrite or modify of Submission form template before processing

  How it's called::

    $str = ee()->extensions->universal_call('forum_submission_form_start', $this, $str);
    if (ee()->extensions->end_script === TRUE) return $str;

  :param object $this: The current Forum Core object
  :param string $str: Submission form template
  :returns: Modified forum template (``$str``)
  :rtype: String

  .. versionadded:: 1.4.0

forum_submission_form_end
-------------------------

.. function:: forum_submission_form_end($this, $str)

  Final chance to modify the submission form before it is displayed

  How it's called::

    $str = ee()->extensions->universal_call('forum_submission_form_end', $this, $str);
    if (ee()->extensions->end_script === TRUE) return $str;

  :param object $this: The current Forum Core object
  :param string $str: Submission form template
  :returns: Modified form template (``$str``)
  :rtype: String

  .. versionadded:: 1.4.0

forum_submission_page
---------------------

.. function:: forum_submission_page($this, $type)

  Allows usurping of forum submission forms and more error checking and
  permissions, too.

  How it's called::

    $edata = $this->extensions->universal_call('forum_submission_page', $this, $type);
    if ($this->extensions->end_script === TRUE) return $edata;

  :param object $this: The current Forum Core object
  :param string $type: ``new_topic``, ``edit_topic``, ``new_reply``,
    ``edit_reply``
  :rtype: Void

  .. versionadded:: 1.4.0

forum_submit_post_start
-----------------------

.. function:: forum_submit_post_start($this)

  Allows usurping of forum submission routine or possible adding more
  checks and permissions.

  How it's called::

    $edata = ee()->extensions->universal_call('forum_submit_post_start', $this);
    if (ee()->extensions->end_script === TRUE) return $edata;

  :param object $this: The current Forum Core object
  :rtype: Void

  .. versionadded:: 1.4.0

forum_submit_post_end
---------------------

.. function:: forum_submit_post_end($this, $data)

  Do more processing after the post is submitted.

  How it's called::

    $edata = ee()->extensions->universal_call('forum_submit_post_end', $this, $data);
    if (ee()->extensions->end_script === TRUE) return $edata;

  :param object $this: The current Forum Core object
  :param array $data: the forum post data array
  :rtype: Void

  .. note:: User notifications have not been sent at this point.

  .. versionadded:: 1.5.2

forum_threads_template
----------------------

.. function:: forum_threads_template($this, $str, $tquery)

  Allows modifying of the Threads display template before it is
  processed.

  How it's called::

    $str = ee()->extensions->universal_call('forum_threads_template', $this, $str, $tquery);
    if (ee()->extensions->end_script === TRUE) return $str;

  :param object $this: The current Forum Core object
  :param string $str: The topics thread template
  :param object $tquery: Thread database object
  :returns: Modified threads template (``$str``) before processing
  :rtype: String

  .. versionadded:: 1.4.0

forum_thread_rows_absolute_end
------------------------------

.. function:: forum_thread_rows_absolute_end($this, $data, $thread_rows)

  Take the processed thread rows and do what you wish

  How it's called::

    $thread_rows = ee()->extensions->universal_call('forum_thread_rows_absolute_end', $this, $data, $thread_rows);
    if (ee()->extensions->end_script === TRUE) return $thread_rows;

  :param object $this: The current Forum Core object
  :param array $data: Information about the current group of thread_rows
    (announcement, topic, all posts, etc.)
  :param string $thread_rows: The fully processed thread row template
  :returns: Modified thread row template (``$thread_rows``)
  :rtype: String

  .. versionadded:: 1.5.1

forum_thread_rows_loop_start
----------------------------

.. function:: forum_thread_rows_loop_start($this, $data, $row, $temp)

  Modify the thread row template and data before any processing takes
  place.

  How it's called::

    $temp = ee()->extensions->universal_call('forum_thread_rows_loop_start', $this, $data, $row, $temp);
    if (ee()->extensions->end_script === TRUE) return;

  :param object $this: The current Forum Core object
  :param array $data: The data for all thread rows
  :param array $row: The data for this thread row (post)
  :param string $temp: The processed thread row
  :returns: Modified thread row (``$temp``)
  :rtype: String

  .. versionadded:: 1.5.1

forum_thread_rows_loop_end
--------------------------

.. function:: forum_thread_rows_loop_end($this, $data, $row, $temp)

  Modify the processed row before it is appended to the template output.

  How it's called::

    $temp = ee()->extensions->universal_call('forum_thread_rows_loop_end', $this, $data, $row, $temp);
    if (ee()->extensions->end_script === TRUE) return;

  :param object $this: The current Forum Core object
  :param array $data: The data for all thread rows
  :param array $row: The data for this thread row (post)
  :param string $temp: The processed thread row
  :returns: Modified thread row (``$temp``)
  :rtype: String

  .. versionadded:: 1.5.1

forum_thread_rows_start
-----------------------

.. function:: forum_thread_rows_start($this, $template, $data, $is_announcement, $thread_review)

  Allows modifying of the thread rows template.

  How it's called::

    $template = ee()->extensions->universal_call('forum_thread_rows_start', $this, $template, $data, $is_announcement, $thread_review);
    if (ee()->extensions->end_script === TRUE) return $template;

  :param object $this: The current Forum Core object
  :param string $template: The topics thread row template
  :param array $data: The data for this thread row (post)
  :param boolean $is_announcement: ``TRUE`` if announcement
  :param boolean $thread_review: ``TRUE`` if thread review
  :returns: Modified thread rows template (``$template``)
  :rtype: String

  .. versionadded:: 1.4.0

forum_topics_absolute_end
-------------------------

.. function:: forum_topics_absolute_end($this, $result, $str)

  Modify the finalized topics template and do what you wish.

  How it's called::

    $str = ee()->extensions->universal_call('forum_topics_absolute_end', $this, $query->result(), $str);
    if (ee()->extensions->end_script === TRUE) return $str;

  :param object $this: The current Forum Core object
  :param array $result: Array of all of the displayed topics
  :param string $str: The finalized topics template
  :returns: Modified topics template (``$str``)
  :rtype: String

  .. versionadded:: 1.5.1

forum_topics_loop_start
-----------------------

.. function:: forum_topics_loop_start($this, $result, $row, $temp)

  Modify the topic row template and data before any processing takes
  place.

  How it's called::

    $temp = ee()->extensions->universal_call('forum_topics_loop_start', $this, $query->result(), $row, $temp);
    if (ee()->extensions->end_script === TRUE) return;

  :param object $this: The current Forum Core object
  :param array $result: Array of all of the topics
  :param array $row: The data for this topic
  :param string $temp: The yet-to-be-processed template
  :returns: Modified topic row template (``$temp``)
  :rtype: String

  .. versionadded:: 1.5.1

forum_topics_loop_end
---------------------

.. function:: forum_topics_loop_end($this, $result, $row, $temp)

  Modify the processed topic row before it is appended to the template
  output.

  How it's called::

    $temp = ee()->extensions->universal_call('forum_topics_loop_end', $this, $query->result(), $row, $temp);
    if (ee()->extensions->end_script === TRUE) return;

  :param object $this: The current Forum Core object
  :param array $result: Array of all of the topics
  :param array $row: The data for this topic
  :param string $temp: The yet-to-be-processed template
  :returns: Modified topic row (``$temp``)
  :rtype: String

  .. versionadded:: 1.5.1

forum_topics_start
------------------

.. function:: forum_topics_start($this, $str)

  Allows modifying of the Topics display template before it is
  processed.

  How it's called::

    $str = ee()->extensions->universal_call('forum_topics_start', $this, $str);
    if (ee()->extensions->end_script === TRUE) return $str;

  :param object $this: The current Forum Core object
  :param string $str: The topics template
  :returns: Modified topics template (``$str``)
  :rtype: String

  .. versionadded:: 1.4.0

.. _forum_dev_main_forum_table_rows_template:

main_forum_table_rows_template
------------------------------

.. function:: main_forum_table_rows_template()

  Allows modifying of the forum_table_rows template

  How it's called::

    $table_rows = ee()->extensions->universal_call('main_forum_table_rows_template', $this, $table_rows, $row, $markers, $read_topics);
    if (ee()->extensions->end_script === TRUE) return $table_rows;

  :param object $this: The current Forum Core object
  :param string $table_rows: The unparsed forum table rows template
  :param array $row: Array of data for the current row
  :param array $markers: Array of topic markers
  :param array $read_topics: Array of topics read by current visitor
  :returns: Modified and parsed forum table rows template
    (``$table_rows``)
  :rtype: Array

  .. versionadded:: 1.6.8
