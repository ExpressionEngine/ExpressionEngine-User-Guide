System Requirements
===================

We have created a `Server Wizard <http://ellislab.com/asset/file/ee_server_wizard.zip>`_ that
will verify whether your server is compatible with ExpressionEngine. To
use the Wizard:

-  `Download <http://ellislab.com/asset/file/ee_server_wizard.zip>`_
   and unzip the archive.
-  Upload the folder to your server.
-  Point your web browser to the folder. For example:
   http://example.com/ee_wizard

Server Requirements
-------------------

-  `PHP <http://www.php.net/>`_ version 5.1.6 or newer
-  `MySQL <http://www.mysql.com/>`_ version 4.1 or newer
-  32M memory allocated to PHP
-  Your hosting account must have the following minimum MySQL grant
   privileges for database tables:

   -  SELECT
   -  INSERT
   -  UPDATE
   -  DELETE
   -  CREATE
   -  INDEX
   -  ALTER
   -  DROP

-  10 MB of free space on your server for the ExpressionEngine software
   and modules.
-  2 MB of Database space. Note: The database will increase in size as
   you add new content.
-  The `GD (or GD 2) <http://www.php.net/manual/en/ref.image.php>`_
   library compiled into PHP.

Browser Requirements
---------------------

The ExpressionEngine Control Panel is tested extensively with the
final-release versions of the web browsers listed here. Please note that
these are the minimum browser requirements necessary to use the Control
Panel. These requirements do not necessarily apply to an
ExpressionEngine-powered website's front-end pages.

- Internet Explorer 8 and above
- Firefox 13
- Safari 5.1
- Chrome 19
- Opera 11.64

.. note:: JavaScript must be enabled to use the Control Panel.


Optional Requirements
---------------------

Some features of ExpressionEngine are optional to use. However, in order
to be able to use them you will need to meet their requirements.

-  **Pings** Your server must have XML support compiled into PHP in
   order to send pings.
-  **Spell Checking.** In order to be able to use the spell check
   feature in ExpressionEngine, your server must have PHP compiled with
   `pspell <http://us2.php.net/pspell>`_ support **or** be able to
   contact remote servers though PHP. If you are unsure if this is the
   case, contact your Host or server admin.
-  **Multibyte Support**  For full support of multibyte encodings you must 
   set mbstring.func_overload to 6 in your server configuration.  This may 
   be done by editing your  your php.ini file as per the below and then 
   restarting:

::

	; overload(replace) single byte functions by mbstring functions.
	; mail(), ereg(), etc are overloaded by mb_send_mail(), mb_ereg(),
	; etc. Possible values are 0,1,2,4 or combination of them.
	; For example, 7 for overload everything.
	; 0: No overload
	; 1: Overload mail() function
	; 2: Overload str*() functions
	; 4: Overload ereg*() functions
	mbstring.func_overload = 6
	

Notes
-----

Apache Server
~~~~~~~~~~~~~

If you are hosted on an Apache server it needs to be configured with
AcceptPathInfo On for the URLs to work with the default settings. Most
server are configured this way, but if yours is **not** then there are
three options:

#. Manually turn that feature on using a .htaccess file.
#. Contact your Host or server admin to have them enable the option.
#. Run your site using query strings. See the "Query String" section of
   the :doc:`/general/urls` page for details.

URL Segment Support
~~~~~~~~~~~~~~~~~~~

If the Server Wizard lists URL Segment Support as *Unsupported*, you
will need to run your ExpressionEngine site using query strings. The
"Query String" section of the :doc:`/general/urls`
page contains more information.

Getting Started
---------------

Once you're sure that your server is compatible,
:doc:`install ExpressionEngine</installation/installation>` and 
:doc:`get started!</getting_started/index>`
