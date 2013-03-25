ExpressionEngine Channel Entries API
====================================

.. contents::
	:local:
	:depth: 1
                  
Calling the Class
-----------------

.. class:: Api_channel_entries

The Channel Entries class is called with the api->instantiate()
function. ::

	$this->EE->load->library('api');
	$this->EE->api->instantiate('channel_entries');

.. note:: The API uses a Singleton pattern and does not currently support
   nesting of calls. Thus instantiating a new call while in the middle of a
   request may have unanticipated results.

Function Reference
------------------

.. contents::
	:local:

Save Entry
~~~~~~~~~~

.. method:: save_entry($data[, $channel_id = NULL[, $entry_id = 0[, $autosave = FALSE]]])

	Saves a new or existing channel entry::

		$this->EE->api_channel_entries->save_entry($data, $channel_id, $entry_id, $autosave);

	:param array $data: Entry data to submit
	:param int $channel_id: The channel ID for the new entry
	:param int $entry_id: The entry ID to update
	:param boolean $autosave: Whether the entry is being autosaved or not
	:returns: Whether the new entry was successfully created or updated
	:rtype: Boolean

Submit New Entry
~~~~~~~~~~~~~~~~

.. method:: submit_new_entry($channel_id, $data[, $autosave = FALSE])

	.. deprecated:: 2.6
		Use :meth:`Api_channel_entries::save_entry` instead.

	This function will create a new channel entry. The data array must contain a
	title and data for all required fields. If the entry date or edit date are not
	included in the data array, current time will be used instead. ::

		$this->EE->api_channel_entries->submit_new_entry((int) $channel_id, (array) $data);

	:param int $channel_id: The channel ID for the new entry
	:param array $data: Entry data to submit
	:param boolean $autosave: Whether the entry is being autosaved or not
	:returns: Whether the new entry was successfully created
	:rtype: Boolean

	Example Usage::

		$this->EE->load->library('api');
		$this->EE->api->instantiate('channel_entries');
		$this->EE->api->instantiate('channel_fields');
		
		$data = array(
			'title'         => 'Breaking News Story!',
			'entry_date'    => '1256953732',
			'edit_date'     => '1351653729',
			'field_id_6'    => 'Some data',
			'field_ft_6'    => 'none',
			'field_id_19'   => 'More data',
			'field_ft_19'   => 'xhtml'
		);
		
		$this->EE->api_channel_fields->setup_entry_settings($channel_id, $data);

		if ($this->EE->api_channel_entries->submit_new_entry($channel_id, $data) === FALSE)
		{
			show_error('An Error Occurred Creating the Entry');
		}

	.. todo:: Change to method reference.

	See also :doc:`setup_entry_settings() <api_channel_fields>` in
	the Channel Fields API.

	.. note:: As part of the data normalization, custom data with a value of NULL is
	   transformed to an empty string before database insertion.

Update Entry
~~~~~~~~~~~~

.. method:: update_entry($entry_id, $data[, $autosave = FALSE])

	.. deprecated:: 2.6
		Use :meth:`Api_channel_entries::save_entry` instead.

	This function will update a channel entry. The data array must contain a title
	and data for all required fields. If the entry date or edit date are not
	included in the data array, current time will be used instead. ::

		$this->EE->api_channel_entries->update_entry((int) $entry_id, (array) $data);

	:param int $entry_id: The entry ID to update
	:param array $data: Entry data to submit
	:param boolean $autosave: Whether the entry is being autosaved or not
	:returns: Whether an entry was successfully updated
	:rtype: Boolean

	.. note:: As part of the data normalization, custom data with a value of NULL is
	   transformed to an empty string before database insertion.

Delete Entry
~~~~~~~~~~~~

.. method:: delete_entry($entry_ids)

	This function will delete one or more entries as well as some of their
	related data. The data array must contain an entry id, or an array of
	entry ids. ::

		$this->EE->api_channel_entries->delete_entry((mixed) $entry_ids);

	:param mixed $entry_ids: Integer or array of integers containing ``entry_ids`` to delete
	:returns: Whether an entry was successfully deleted
	:rtype: Boolean

Entry Exists
~~~~~~~~~~~~

.. method:: entry_exists($entry_id)

	This function checks if an entry with a given id exists. ::

		$this->EE->api_channel_entries->entry_exists((int) $entry_id);

	:param int $entry_id: Entry ID to be verified
	:returns: Whether an entry exists
	:rtype: Boolean

Send Pings
~~~~~~~~~~

.. method:: send_pings($ping_servers, $channel_id, $entry_id[, $send_now = TRUE])

	This function sends pings to a list of ping servers. The
	``submit_new_entry()`` and ``update_entry()`` functions will automatically
	send pings if given ping\_servers in their data array. ``$ping_servers``
	should be a list of ping server ids from the ``exp_ping_servers`` database
	table. ::

		$this->EE->api_channel_entries->send_pings((array) $ping_servers, (int) $channel_id, (int) $entry_id);

	:param array $ping_servers: Array of IDs of ping servers in the database
	:param int $channel_id: ID of the channel that contains the ``$entry_id``
	:param int $entry_id: ID of the entry you want to send pings for
	:param boolean $send_now: Set to ``FALSE`` to prevent pings from being sent
	:returns: Whether pings were sent
	:rtype: Boolean

Update Relationship Cache
~~~~~~~~~~~~~~~~~~~~~~~~~

.. method:: update_related_cache($entry_id)

	This function updates the relationship cache table. You should only need
	to use this function if you are manually changing relationship data,
	submit\_new\_entry() and update\_entry() will automatically recompile
	relationship data. ::

		$this->EE->api_channel_entries->update_related_cache((int) $entry_id);
