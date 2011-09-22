Requirements
============

We have created a `Server Wizard <http://expressionengine.com/files/ee_server_wizard.zip>`_ that
will verify whether your server is compatible with ExpressionEngine. To
use the Wizard:

-  `Download <http://expressionengine.com/files/ee_server_wizard.zip>`_
   and unzip the archive.
-  Upload the folder to your server.
-  Point your web browser to the folder. Example:
   http://example.com/ee\_server\_wizard/

To create a site with ExpressionEngine, you must have at least minimal
experience with HTML and understand how to create a website. Further,
you must be familiar with the process of uploading files to your server
via FTP.

To experience the full functionality of ExpressionEngine you must use a
web browser with Javascript enabled. If Javascript is disabled, then
some dynamic functionality in the Control Panel and other areas of the
site may not function.

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
   -  ALTER
   -  DROP

-  10 MB of free space on your server for the ExpressionEngine software
   and modules.
-  2 MB of Database space. Note: The database will increase in size as
   you add new content.

Optional Requirements
---------------------

Some features of ExpressionEngine are optional to use. However, in order
to be able to use them you will need to meet their requirements.

-  **CAPTCHAs and Watermarking.** Your server must have the `GD (or GD
   2) <http://www.php.net/manual/en/ref.image.php>`_ library compiled
   into PHP in order to use the `CAPTCHAs <./general/captchas.html>`_
   feature or the
-  **Image Thumbnailing.** To take advantage of the image thumbnailing
   feature your server must support one of these image manipulation
   protocols:

   #. `GD (or GD 2) <http://www.php.net/manual/en/ref.image.php>`_
   #. ImageMagick
   #. NetPBM

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
