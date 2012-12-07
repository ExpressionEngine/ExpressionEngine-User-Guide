Supplied argument is not a valid MySQL-Link resource
====================================================

ExpressionEngine returns the following warning: **"Supplied argument is
not a valid MySQL-Link resource."**

Troubleshooting
---------------

This error is usually returned in one of two cases:

The MySQL server is down
~~~~~~~~~~~~~~~~~~~~~~~~

This can only be resolved by the database administrator who should be
contacted immediately.

MySQL has run out of database connections
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the server is working properly, MySQL might be running out of
database connections. If that's the case, ensure that the database is
using non-persistent connections by checking that **Persistent Database
Connection** is set to *No* under :menuselection:`Admin --> System
Administration --> Database Settings`, or by adding the following line
to config.php::

	$config['db_conntype'] = "0";
