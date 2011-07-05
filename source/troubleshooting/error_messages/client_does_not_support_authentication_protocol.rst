Client does not support authentication protocol requested by server
===================================================================

ExpressionEngine returns the following error: **"Client does not support
authentication protocol requested by server."**

Troubleshooting
---------------

Running MySQL v4.1 or newer, the follow error is returned::

	Warning: mysql_pconnect(): Client does not support authentication protocol requested by server; consider upgrading MySQL client

New versions of MySQL use an **authentication protocol** based on a
password hashing algorithm that is **incompatible** with that used by
older (pre-4.1) clients. MySQL can be configured to use the old
algorithm, however. The MySQL documentation has `more information on the
issue <http://dev.mysql.com/doc/refman/5.1/en/old-client.html>`_.
