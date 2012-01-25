Blank Pages
===========

Blank pages in ExpressionEngine, where the source is also empty, are
usually the result of a suppressed PHP error.

**Tip:** If you have just installed ExpressionEngine and chose the "None
- Empty Installation" Site Theme, your site's homepage will appear blank
because no templates or data have been created yet.

Troubleshooting
---------------

Follow these instructions until you are able to see the error message(s)
being output by your server:

* Open your site's main index.php file and under the Error Reporting section
  change:

::

		$debug = 0;
	
to:

::

		$debug = 1;

* Go to :menuselection:`Admin > System Administration > Output and Debugging` and ensure that
  Debug Preference is set to 1: PHP/SQL error messages shown only to Super
  Admins
* Go to :menuselection:`Tools > Utilities > PHP Info` and search the page for "display\_errors".
  Ensure it is set to "On" under the Local column. If it is not then your host
  can help change this setting for you.
* Check your server's error logs or contact your host to assist you in cases
  where errors are being output to logs and not to the screen.


