########
Metadata
########

.. highlight:: php

.. class:: CI_DB_driver

.. method:: list_tables()

	Returns an array containing the names of all the tables in the database you are currently connected to. Example::

		$tables = ee()->db->list_tables();

		foreach ($tables as $table)
		{
			echo $table;
		}

	:returns: Array of table names
	:rtype: array

.. method:: table_exists($table_name)

	Sometimes it's helpful to know whether a particular table exists before running an operation on it. Returns a boolean ``TRUE``/``FALSE``. Usage example::

		if (ee()->db->table_exists('table_name'))
		{
			// some code...
		}

	:param string $table_name: The name of the table to check
	:returns: ``TRUE`` if the ``$table_name`` exists, ``FALSE`` otherwise
	:rtype: boolean

.. method:: list_fields($table_name)

	Returns an array containing the field names. This query can be called two ways:

	1. You can supply the table name and call it from the ``ee()->db->`` object::

		$fields = ee()->db->list_fields('table_name');

		foreach ($fields as $field)
		{
			echo $field;
		}

	2. You can gather the field names associated with any query you run by calling the function from your query result object::

		$query = ee()->db->query('SELECT * FROM some_table');

		foreach ($query->list_fields() as $field)
		{
			echo $field;
		}

	:param string $table_name: The name of the table to check
	:returns: Array of field names
	:rtype: array

.. method:: field_exists($field_name, $table_name)

	Sometimes it's helpful to know whether a particular field exists before performing an action. Returns a boolean ``TRUE``/``FALSE``. Usage example::

		if (ee()->db->field_exists('field_name', 'table_name'))
		{
			// some code...
		}

	:param string $field_name: The name of the field to look for
	:param string $table_name: The name of the table to look in
	:returns: ``TRUE`` if the ``$field_name`` exists within ``$table_name``, ``FALSE`` otherwise
	:rtype: boolean

.. method:: field_data($table_name)

	Returns an array of objects containing field information.

	Sometimes it's helpful to gather the field names or other metadata, like the column type, max length, etc.

	Usage example::

		$fields = ee()->db->field_data('table_name');

		foreach ($fields as $field)
		{
			echo $field->name;
			echo $field->type;
			echo $field->max_length;
			echo $field->primary_key;
		}

	If you have run a query already you can use the result object instead of supplying the table name::

		$query = ee()->db->query("YOUR QUERY");
		$fields = $query->field_data();

	:param string $table_name: The name of the table
	:returns: Object containing the following field data:

		- ``name`` - column name
		- ``max_length`` - maximum length of the column
		- ``primary_key`` - 1 if the column is a primary key
		- ``type`` - the type of the column

	:rtype: Object

.. method:: platform()

	Outputs the database platform you are running::

		echo ee()->db->platform();

	.. note:: This will only display MySQL since that's what ExpressionEngine requires, but is included for completeness.

	:returns: The name of the database platform you are running
	:rtype: string

.. method:: version()

	Outputs the database version you are running::

		echo ee()->db->version();

	:returns: The version of the database you're running
	:rtype: string
