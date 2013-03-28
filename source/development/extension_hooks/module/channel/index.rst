Channel Module Extension Hooks
==============================

.. contents::
  :local:
  :depth: 1


channel_entries_query_result
----------------------------

.. function:: channel_entries_query_result($this, $query_result)

  Modify the channel entries query result array before the parsing loop
  starts.

  How it's called::

    $query_result = $this->extensions->call('channel_entries_query_result', $this, $query_result);
    if ($this->extensions->end_script === TRUE) return $this->TMPL->tagdata;

  :param object $this: Current Channel object
  :param array $query_result: Channel entries query result array
  :returns: Modified ``$query_result`` array
  :rtype: Array

  .. versionadded:: 1.6.7

channel_entries_tagdata
-----------------------

.. function:: channel_entries_tagdata($tagdata, $row, $this)

  Modify the tagdata for the channel entries before anything else is
  parsed.

  How it's called::

    $tagdata = $this->extensions->call('channel_entries_tagdata', $tagdata, $row, $this);
    if ($this->extensions->end_script === TRUE) return $tagdata;

  :param string $tagdata: Channel entries tagdata
  :param array $row: Current entry data
  :param object $this: Current Channel object
  :returns: Modified ``$tagdata``
  :rtype: String

  .. versionadded:: 1.4.0

channel_entries_row
-------------------

.. function:: channel_entries_row($this, $row)

  Modify the entry data for the channel entries before anything else is
  parsed.

  How it's called::

    $row = $this->extensions->call('channel_entries_row', $this, $row);
    if ($this->extensions->end_script === TRUE) return $tagdata;

  :param object $this: Current Channel object
  :param array $row: Current entry data
  :returns: Modified ``$row``
  :rtype: Array

  .. versionadded:: 1.6.7

channel_entries_tagdata_end
---------------------------

.. function:: function_name($tagdata, $row, $this)

  Take the final result from an entry's parsing and do what you will.

  How it's called::

    $tagdata = $this->extensions->call('channel_entries_tagdata_end', $tagdata, $row, $this);
    if ($this->extensions->end_script === TRUE) return $tagdata;

  :param string $tagdata: Channel entries tagdata
  :param array $row: Current entry data
  :param object $this: Current Channel object
  :returns: Modified ``$tagdata``
  :rtype: String

  .. versionadded:: 1.5.0
    Notes about addition

channel_module_calendar_start
-----------------------------

.. function:: channel_module_calendar_start()

  Rewrite the displaying of the calendar tag.

  How it's called::

    $edata = $this->extensions->call('channel_module_calendar_start');
    if ($this->extensions->end_script === TRUE) return $edata;

  :returns: Rendered calendar data
  :rtype: String

  .. versionadded:: 1.4.0

channel_module_categories_start
-------------------------------

.. function:: channel_module_categories_start()

  Rewrite the displaying of categories with the Category tag in the
  Channel module.

  How it's called::

    return $this->extensions->call('channel_module_categories_start');

  :returns: Rendered category tagdata
  :rtype: String

  .. versionadded:: 1.4.0

channel_module_category_heading_start
-------------------------------------

.. function:: channel_module_category_heading_start()

  Rewrite the displaying of category headings.

  How it's called::

    $this->EE->TMPL->tagdata = $this->extensions->call('channel_module_category_heading_start');
    if ($this->extensions->end_script === TRUE) return $this->EE->TMPL->tagdata;

  :returns: Rendered category heading tagdata
  :rtype: String

  .. versionadded:: 1.4.0
