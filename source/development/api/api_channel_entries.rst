ExpressionEngine Channel Entries API
====================================

.. contents::
	:local:
	:depth: 1
                  
Calling the Class
-----------------

The Channel Entries class is called with the api->instantiate()
function. ::

	$this->EE->load->library('api'); $this->EE->api->instantiate('channel_entries');

**Note:** the API uses a Singleton pattern and does not currently
support nesting of calls. Thus instantiating a new call while in the
middle of a request may have unanticipated results.

Function Reference
------------------

.. contents::
	:local:

Submit New Entry
~~~~~~~~~~~~~~~~

This function will create a new channel entry. The data array must
contain a title, an entry date, and data for all required fields. ::

	$this->EE->api_channel_entries->submit_new_entry((int) $channel_id, (mixed) $data);

:returns:
    (bool) Successfully Created Entry

Example Usage::

	$this->EE->load->library('api');
	$this->EE->api->instantiate('channel_entries');
	$this->EE->api->instantiate('channel_fields');
	
	$this->EE->api_channel_fields->setup_entry_settings($data['channel_id'], $data);
	$result = $this->EE->api_channel_entries->submit_new_entry($data['channel_id'], $data);
	
	$data = array(
		'title'         => 'Breaking News Story!',
		'entry_date'    => '1256953732',
		'field_id_6'    => 'Some data',
		'field_ft_6'    => 'none',
		'field_id_19'   => 'More data',
		'field_ft_19'   => 'xhtml'
	);
	
	if ($this->EE->api_channel_entries->submit_new_entry(4, $data) === FALSE)
	{
		show_error('An Error Occurred Creating the Entry');
	}

See also `setup\_entry\_settings() <api_channel_fields.html#>`_ in the
Channel Fields API.

**Note:** as part of the data normalization, custom data with a value of
NULL is transformed to an empty string before database insertion.

Update Entry
~~~~~~~~~~~~

This function will update a channel entry. The data array must contain a
title, an entry date, and data for all required fields. ::

	$this->EE->api_channel_entries->update_entry((int) $entry_id, (mixed) $data);

:returns:
    (bool) Successfully Updated Entry

**Note:** as part of the data normalization, custom data with a value of
NULL is transformed to an empty string before database insertion.

Delete Entry
~~~~~~~~~~~~

This function will delete one or more entries as well as some of their
related data. The data array must contain an entry id, or an array of
entry ids. ::

	$this->EE->api_channel_entries->delete_entry((mixed) $entry_ids);

:returns:
    (bool) Successfully Deleted Entry

Entry Exists
~~~~~~~~~~~~

This function checks if an entry with a given id exists. ::

	$this->EE->api_channel_entries->entry_exists((int) $entry_id);

:returns:
    (bool) Entry Exists

Send Pings
~~~~~~~~~~

This function sends pings to a list of ping servers. The
submit\_new\_entry() and update\_entry() functions will automatically
send pings if given ping\_servers in their data array. $ping\_servers
should be a list of ping server ids from the exp\_ping\_servers database
table. ::

	$this->EE->api_channel_entries->send_pings((mixed) $ping_servers, (int) $channel_id, (int) $entry_id);

:returns:
    (bool) Pings Sent

Update Relationship Cache
~~~~~~~~~~~~~~~~~~~~~~~~~

This function updates the relationship cache table. You should only need
to use this function if you are manually changing relationship data,
submit\_new\_entry() and update\_entry() will automatically recompile
relationship data. ::

	$this->EE->api_channel_entries->update_related_cache((int) $entry_id);
