.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Troubleshooting
===============

Main page content appears on every page / I get 404s except on the main page / "No Input File Specified"
--------------------------------------------------------------------------------------------------------

The main/first page of your site works fine.  When you go to another page, the URL changes but the content is still from your main page OR all pages but your main page display 404 errors.

The problem here is that your server isn’t correctly supporting the ”path_info” server variable.  You might want to contact your Host or server admin about having it supported, since that would be the ideal way to run ExpressionEngine.  However, you can also run EE without that setting.  In the Control Panel Settings, turn on the “Force Query String” preference in the Debugging and Output section.

When you force query strings, ExpressionEngine will add a '?' to system generated frontend URLs::

	https://example.com?/blog/11245/

If you are using .htaccess to remove the index.php from your URLs, don't force query strings.  Instead, :doc:`add the query string to your htaccess code </urls/remove_index.php>`


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
:doc:`Generate HTTP Page Headers? </cp/settings/debug-output>`
to "No".

If you cannot log into the Control Panel, then you can manually
change the setting via system/user/config/config.php::

	$config['send_headers'] = 'n';
