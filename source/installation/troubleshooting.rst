Troubleshooting
===============

Main page content appears on every page / I get 404s except on the main page / "No Input File Specified"
--------------------------------------------------------------------------------------------------------

Running PHP as CGI
------------------

People using servers that run PHP as a CGI process tend to encounter
more difficulties than those with servers running PHP as a web server
module. Here are some additional things you can try.

Typically, these tips will **not** apply to people on servers running
PHP as a web server module. Usually, they only apply to people on
servers running PHP as a CGI process and even then not every user will
need to do any of these.

Add "shebangs"
--------------

This tip will only apply to **some** people on web servers running PHP
as a CGI process. Please consult your Host or server admin to determine
if you will need to perform this.

On some servers, you will need to add a "shebang" line to two files in
order to have ExpressionEngine work. **The actual syntax of the line can
vary from server to server**, so be sure to consult your Host or server
admin for the correct syntax.

In the following two files:

#. index.php
#. system/index.php

You will need to add the following "shebang" line immediately before the
opening PHP code. The top of your files will look similar to::

	#!/usr/bin/php <?php

File Permissions
----------------

Some "PHP as CGI" servers automatically set uploaded files so that they
do not have permission to "execute", which can cause problems with
ExpressionEngine. Make sure that all of your .php files are set to 755
(except those that are specifically mentioned as having other
permissions in the instructions above).

HTTP Headers
------------

Some "PHP as CGI" servers also do not like it if ExpressionEngine
explicitly sends its own HTTP Headers. In this case, try setting 
:doc:`Generate HTTP Page Headers? </cp/admin/output_and_debugging_preferences>`
to "No".

If you cannot log into the Control Panel, then you can manually
change the setting via system/expressionengine/config/config.php::

	$config['send_headers'] = 'n';
