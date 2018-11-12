.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

######################
Database Utility Class
######################

.. highlight:: php

.. class:: CI_DB_utility

	The Database Utility Class contains methods that help you manage your database. Load the Utility Class as follows::

		ee()->load->dbutil()

	Once initialized you will access the methods using the ``ee()->dbutil`` object::

		ee()->dbutil->some_method()

.. method:: list_databases()

	Returns an array of database names::

		$dbs = ee()->dbutil->list_databases();

		foreach ($dbs as $db)
		{
			echo $db;
		}

	:returns: Array of database names
	:rtype: array

.. method:: database_exists($database_name)

	Sometimes it's helpful to know whether a particular database exists. Returns a boolean ``TRUE``/``FALSE``. Usage example::

		if (ee()->dbutil->database_exists('database_name'))
		{
			// some code...
		}

	:param string $database_name: The name of the database
	:returns: ``TRUE`` if ``$database_name`` exists, ``FALSE`` otherwise
	:rtype: boolean

.. method:: optimize_table($table_name)

	Permits you to optimize a table using the table name specified in the first parameter. Returns ``TRUE``/``FALSE`` based on success or failure::

		if (ee()->dbutil->optimize_table('table_name'))
		{
			echo 'Success!';
		}

	:param string $table_name: The name of the table
	:returns: Result of the ``OPTIMIZE TABLE`` command
	:rtype: array

.. method:: repair_table($table_name)

	Permits you to repair a table using the table name specified in the first parameter. Returns ``TRUE``/``FALSE`` based on success or failure::

		if (ee()->dbutil->repair_table('table_name'))
		{
			echo 'Success!';
		}

	:param string $table_name: The name of the table
	:returns: Result of the ``REPAIR TABLE`` command
	:rtype: array

.. method:: optimize_database()

	Permits you to optimize the database your DB class is currently connected to. Returns an array containing the DB status messages or ``FALSE`` on failure::

		$result = ee()->dbutil->optimize_database();

		if ($result !== FALSE)
		{
			print_r($result);
		}

	:returns: Results of the ``REPAIR TABLE`` command
	:rtype: array

.. method:: csv_from_result($query[, $delim = ','[, $newline = '\n'[, $enclosure = '"']]])

	Permits you to generate a CSV file from a query result. The first parameter of the method must contain the result object from your query. Example::

		ee()->load->dbutil();

		$query = ee()->db->query("SELECT * FROM mytable");

		echo ee()->dbutil->csv_from_result($query);

	The second, third, and fourth parameters allow you to set the delimiter newline, and enclosure characters respectively. By default commas are used as the delimiter, "\n" is used as a new line, and a double-quote is used as the enclosure. Example::

		$delimiter = ",";
		$newline = "\r\n";
		$enclosure = '"';

		echo ee()->dbutil->csv_from_result($query, $delimiter, $newline, $enclosure);

	.. important:: This method will NOT write the CSV file for you. It simply creates the CSV layout. If you need to write the file use the :doc:`/development/legacy/helpers/file_helper`.

	:param CI_DB_result $query: The result object from your query
	:param string $delim: The CSV delimiter characters
	:param string $newline: The CSV newline characters
	:param string $enclosure: The CSV enclosure characters
	:returns: The CSV as a string
	:rtype: string

.. method:: xml_from_result($query[, $params = array()])

	Permits you to generate an XML file from a query result. The first parameter expects a query result object, the second may contain an optional array of config parameters. Example::

		ee()->load->dbutil();

		$query = ee()->db->query("SELECT * FROM mytable");

		$config = array (
			'root'		=> 'root',
			'element'	=> 'element',
			'newline'	=> "\n",
			'tab'		=> "\t"
		);

		echo ee()->dbutil->xml_from_result($query, $config);

	.. important:: This method will NOT write the XML file for you. It simply creates the XML layout. If you need to write the file use the :doc:`/development/legacy/helpers/file_helper`.

	:param CI_DB_result $query: The result object from your query
	:param array $config: Associative array of XML preferences:

		- ``root``: the name of the root element
		- ``element``: the name of the elements
		- ``newline``: the new line character
		- ``tab``: the tab character

	:returns: The XML as a string
	:rtype: string

.. method:: backup([$params = array()])

	Permits you to backup your full database or individual tables. The backup data can be compressed in either Zip or Gzip format.

	.. note:: Due to the limited execution time and memory available to PHP, backing up very large databases may not be possible. If your database is very large you might need to backup directly from your SQL server via the command line, or have your server admin do it for you if you do not have root privileges.

	**Usage Example**

	::

		// Load the DB utility class
		ee()->load->dbutil();

		// Backup your entire database and assign it to a variable
		$backup =& ee()->dbutil->backup();

		// Load the file helper and write the file to your server
		ee()->load->helper('file');
		write_file('/path/to/mybackup.gz', $backup);

		// Load the download helper and send the file to your desktop
		ee()->load->helper('download');
		force_download('mybackup.gz', $backup);

	**Setting Backup Preferences**

	Backup preferences are set by submitting an array of values to the first parameter of the ``backup()`` method. Example::

		$prefs = array(
			'tables'	=> array('table1', 'table2'),	// Array of tables to backup.
			'ignore'	=> array(),			// List of tables to omit from the backup
			'format'	=> 'txt',			// gzip, zip, txt
			'filename'	=> 'mybackup.sql',		// File name - NEEDED ONLY WITH ZIP FILES
			'add_drop'	=> TRUE,			// Whether to add DROP TABLE statements to backup file
			'add_insert'	=> TRUE,			// Whether to add INSERT data to backup file
			'newline'	=> "\n"				// Newline character used in backup file
		);

		ee()->dbutil->backup($prefs);

	:param array $params: Associative array of preferences

		======================= ======================= =================================== ========================================================================
		Preference              Default Value           Options                              Description
		======================= ======================= =================================== ========================================================================
		``tables``               empty array             None                                An array of tables you want backed up. If left blank all tables will be exported.
		``ignore``               empty array             None                                An array of tables you want the backup routine to ignore.
		``format``               gzip                    gzip, zip, txt                      The file format of the export file.
		``filename``             the current date/time   None                                The name of the backed-up file. The name is needed only if you are using zip compression.
		``add_drop``             ``TRUE``                ``TRUE``/``FALSE``                  Whether to include DROP TABLE statements in your SQL export file.
		``add_insert``           ``TRUE``                ``TRUE``/``FALSE``                  Whether to include INSERT statements in your SQL export file.
		``newline``              ``"\\n"``               ``"\\n"``, ``"\\r"``, ``"\\r\\n"``  Type of newline to use in your SQL export file.
		``foreign_key_checks``   ``TRUE``                ``TRUE``/``FALSE``                  Whether output should keep foreign key checks enabled.
		======================= ======================= =================================== ========================================================================

	:rtype: void
