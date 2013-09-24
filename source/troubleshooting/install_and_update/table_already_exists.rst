"Table already exists" error when upgrading
===========================================

You receive an error such as "Table 'exp\_snippets' already exists" when
performing an upgrade.

Troubleshooting
---------------

There are several possible reasons for a duplicate table, column or key
error:

-  If you had previously restored your database, ensure it was restored
   into a completely empty database. Otherwise there will be duplicate
   data.
-  Never use your browser's Back button during an upgrade, as that can
   cause actions to run twice.
-  Your server's PHP max\_execution\_time may be set too low, forcing
   the upgrade script to end prematurely. Check with your host about
   increasing this value from the typical default of 30 seconds.
-  If you're using Firefox to perform the upgrade, try using Chrome or
   Safari instead. In some cases Firefox can re-send requests following
   a server error, effectively preventing the error from being seen.


