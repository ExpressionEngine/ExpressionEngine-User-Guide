.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Blank Pages
===========

Blank pages in ExpressionEngine, where the source is also empty, are
usually the result of a suppressed PHP error.

.. tip:: If you have just installed ExpressionEngine and chose the
   "None- Empty Installation" Site Theme, your site's homepage will
   appear blank because no templates or data have been created yet.

Troubleshooting
---------------

Follow these instructions until you are able to see the error message(s)
being output by your server:

* Open your site's main index.php file and under the Error Reporting
  section change:

::

		$debug = 0;

to:

::

		$debug = 1;

* Go to :menuselection:`Settings --> Debugging & Output` and ensure that **Debug Preference** is set to *1: PHP/SQL
  error messages shown only to Super Admins*.
* Go to :menuselection:`Developer --> Utilities --> PHP Info` and search the
  page for "display\_errors". Ensure it is set to *On* under the Local
  column. If it is not, your host can help change this setting for you.
* Check your server's error logs or contact your host to assist you in
  cases where errors are being output to logs and not to the screen.


