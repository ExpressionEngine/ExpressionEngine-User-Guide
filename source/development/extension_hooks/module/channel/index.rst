Channel Module Extension Hooks
==============================

.. contents::
	:local:
	:depth: 1


channel_entries_query_result
----------------------------

Modify the channel entries query result array before the parsing loop
starts

::

	$query_result = $this->extensions->call('channel_entries_query_result', $this, $query_result);
	if ($this->extensions->end_script === TRUE) return $this->TMPL->tagdata;

$this
~~~~~

The current Channel object

$query_result
~~~~~~~~~~~~~~

The Channel Entries query result array

:returns:
    Array

Added in v1.6.7

channel_entries_tagdata
-----------------------

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

channel_entries_row
-------------------

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

channel_entries_tagdata_end
---------------------------

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

channel_module_calendar_start
-----------------------------

Rewrite the displaying of the calendar tag

::

	$edata = $this->extensions->call('channel_module_calendar_start'); if ($this->extensions->end_script === TRUE) return $edata;

:returns:
    void

Added in v1.4.0

channel_module_categories_start
-------------------------------

Rewrite the displaying of categories with the Category tag in the
Channel module

::

	return $this->extensions->call('channel_module_categories_start');

:returns:
    String

Added in v1.4.0

channel_module_category_heading_start
-------------------------------------

Rewrite the displaying of category headings

::

	$this->EE->TMPL->tagdata = $this->extensions->call('channel_module_category_heading_start'); if ($this->extensions->end_script === TRUE) return $this->EE->TMPL->tagdata;

:returns:
    String

Added in v1.4.0

channel_module_create_pagination
--------------------------------

Rewrite the pagination function in the Pagination library and possible expand
the types of pagination available

::

	$edata = $this->extensions->call('channel_module_create_pagination', $this, $count); 
	if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

Currently instantiated object for EE_Pagination class, remember to call this
with a reference if you want to modify the object.

$count
~~~~~~

The number of items the pagination library is paginating over.

:returns:
    void

Added in v1.4.0

channel_module_fetch_pagination_data
------------------------------------

- Works with the 'channel_module_create_pagination' hook

::

	$edata = $this->extensions->call('channel_module_fetch_pagination_data', $this); if ($this->extensions->end_script === TRUE) return;

$this
~~~~~

Currently instantiated object for Channel class, remember to call
this with a reference if you want to modify the object

:returns:
    void

Added in v1.4.0
