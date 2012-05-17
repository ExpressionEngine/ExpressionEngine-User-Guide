Requirements
============

We have created a `Server Wizard <http://expressionengine.com/files/ee_server_wizard.zip>`_ that
will verify whether your server is compatible with ExpressionEngine. To
use the Wizard:

-  `Download <http://expressionengine.com/files/ee_server_wizard.zip>`_
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
