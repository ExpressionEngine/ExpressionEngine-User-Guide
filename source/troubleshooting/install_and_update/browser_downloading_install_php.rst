Browser downloading install.php
===============================

When attempting to install the browser tries to download install.php
instead of run it.

Troubleshooting running PHP files
---------------------------------

This behavior is usually an indication that PHP is either not running or
not properly configured on the account or server. Check with the
admin/Host to see if the account has PHP available. If it does, then
make sure it is set to process .php files (as opposed - or in addition -
to something like .php4).

**Note:** This problem can also be caused by memory leaks in the
browser. Close all browser windows and try again.


