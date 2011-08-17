Channel Module Extension Hooks
==============================

.. contents::
	:local:
	:depth: 1


channel\_entries\_query\_result
-------------------------------

Modify the channel entries query result array before the parsing loop
starts

::

	$query_result = $this->extensions->call('channel_entries_query_result', $this, $query_result);
	if ($this->extensions->end_script === TRUE) return $this->TMPL->tagdata;

$this
~~~~~

The current Channel object

$query\_result
~~~~~~~~~~~~~~

The Channel Entries query result array

:returns:
    Array

Added in v1.6.7

channel\_entries\_tagdata
-------------------------

Modify the tagdata for the channel entries before anything else is
parsed

::

	$tagdata = $this->extensions->call('channel_entries_tagdata', $tagdata, $row, $this); if ($this->extensions->end_script === TRUE) return $tagdata;

$tagdata
~~~~~~~~

The Channel Entries tag data

$row
~~~~

Array of data for the current entry

$this
~~~~~
The current Channel object including all data relating to categories
and fields

:returns:
    String

Added in v1.4.0

channel\_entries\_row
---------------------

Modify the entry data for the channel entries before anything else is
parsed

::

	$row = $this->extensions->call('channel_entries_row', $this, $row); if ($this->extensions->end_script === TRUE) return $tagdata;

$row
~~~~

Array of data for the current entry

$this
~~~~~

The current Channel object including all data relating to categories
and fields

:returns:
    Array

Added in v1.6.7

channel\_entries\_tagdata\_end
------------------------------

Take the final result from an entry's parsing and do what you will. ::

	$tagdata = $this->extensions->call('channel_entries_tagdata_end', $tagdata, $row, $this); if ($this->extensions->end_script === TRUE) return $tagdata;

$tagdata
~~~~~~~~

The Channel Entries tag data

$row
~~~~

Array of data for the current entry

$this
~~~~~

The current Channel object including all data relating to categories
and fields

:returns:
    String

Added in v1.5.0

channel\_module\_calendar\_start
--------------------------------

Rewrite the displaying of the calendar tag

::

	$edata = $this->extensions->call('channel_module_calendar_start'); if ($this->extensions->end_script === TRUE) return $edata;

:returns:
    void

Added in v1.4.0

channel\_module\_categories\_start
----------------------------------

Rewrite the displaying of categories with the Category tag in the
Channel module

::

	return $this->extensions->call('channel_module_categories_start');

:returns:
    String

Added in v1.4.0

channel\_module\_category\_heading\_start
-----------------------------------------

Rewrite the displaying of category headings

::

	$this->EE->TMPL->tagdata = $this->extensions->call('channel_module_category_heading_start'); if ($this->extensions->end_script === TRUE) return $this->EE->TMPL->tagdata;

:returns:
    String

Added in v1.4.0

channel\_module\_create\_pagination
-----------------------------------

Rewrite the pagination function in the Channel module and possible
expand the types of pagination available

::

	$edata = $this->extensions->call('channel_module_create_pagination', $this); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

Currently instantiated object for Channel class, remember to call
this with a reference if you want to modify the object

:returns:
    void

Added in v1.4.0

channel\_module\_fetch\_pagination\_data
----------------------------------------

- Works with the 'channel\_module\_create\_pagination' hook

::

	$edata = $this->extensions->call('channel_module_fetch_pagination_data', $this); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

Currently instantiated object for Channel class, remember to call
this with a reference if you want to modify the object

:returns:
    void

Added in v1.4.0
