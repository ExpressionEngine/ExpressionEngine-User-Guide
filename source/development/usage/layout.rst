Layout Class
============


Calling the Layout Class
------------------------

::

	$this->EE->load->library('layout');

Publish Page Layout Functions
-----------------------------

Administrators may extensively customize publish pages on a per member
group and per channel basis. Since these custom layouts are saved as a
serialized array in the database, any additions or deletions to publish
page tabs and fields must be synced to any saved layouts. The control
panel library provides 4 functions to facilitate custom layout updates.
(See also `Module Tutorial: Update
file. <../module_tutorial.html#update_file>`_)

Add Tabs
~~~~~~~~

Adds tabs and any associated fields to currently saved publish layouts.
If there is an existing tab with the same name, the function will return
false

::

	$this->EE->layout->add_layout_tabs($tabs);

$tabs must be an associative array where the top level array(s) is the
name of the tab. If the tab contains any fields, as it likely does,
include them as elements of their tab's array, with the field name as a
key and containing the required elements: visible, collapse, htmlbuttons
and width. ::

	$tabs['pages'] = array(     'pages_uri' => array(                 'visible'   => 'true',                 'collapse'  => 'false',                 'htmlbuttons'   => 'true',                 'width'     => '100%'                 ),     'pages_template_id' => array(                 'visible'   => 'true',                 'collapse'  => 'false',                 'htmlbuttons'   => 'true',                 'width'     => '100%'                 )     );

Delete Tabs
~~~~~~~~~~~

This function will remove tabs and all associated fields from the saved
publish page layouts. The $tabs variable must be an associative array,
with the top level array's key the name of the tab. As in the
add\_layout\_tabs() function, any associated fields should be included
as keys within the tab's array. ::

	$this->EE->layout->delete_layout_tabs($tabs);

Add Fields
~~~~~~~~~~

Used to add new fields to an already existing tab. Because custom
layouts may have moved the field(s) to a different tab and deleted the
tab originally associated with the fields, a new tab will be created if
none exists in the layout. The $tabs array takes the same format as the
add\_layout\_tabs() function, while $channel\_id is an optional
parameter that limits the update to layouts associated with a given
channel and should generally be omitted from third party usage. ::

	$this->EE->layout->add_layout_fields($tabs, $channel_id);

Delete Fields
~~~~~~~~~~~~~

Used to delete fields without removing the existing tab. This function
removes all matching field names from the saved layouts, regardless of
the tab they are currently saved in. The $tabs array takes the same
format as the add\_layout\_tabs() function, while $channel\_id is an
optional parameter that limits the update to layouts associated with a
given channel and should generally be omitted from third party usage. ::

	$this->EE->layout->delete_layout_fields($tabs, $channel_id);
