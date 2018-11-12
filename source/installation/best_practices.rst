.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Post-Installation Best Practices
================================

ExpressionEngine's first party files and directories in the system
folder on a properly configured server are typically safe from direct
HTTP access. However, for increased security in various environments, we
recommend that the system folder either be renamed or moved entirely
above the public site folder (commonly named public\_html or referred to
as simply "webroot") and that admin.php be renamed as well.

.. _rename-system-directory:

Renaming the System Directory
-----------------------------

This is an easily followed procedure that makes it difficult for the
location of your system folder to be known.

#. FTP to your server and change the name of the system folder to
   something else that is not easily guessed. For example, let's say
   you've renamed it to dazzle.
#. Open index.php **and** admin.php (both found in your site's root) and
   update the name of the system directory **in both files**:

::

	$system_path = './dazzle';

.. note:: There may also be some areas in the Control Panel where you
  will need to update the server path. For example:

  - :menuselection:`Settings --> URL and Path Settings`
  - :menuselection:`Files`

Moving the System Directory Above Webroot
-----------------------------------------

This is a more advanced procedure that provides even better security,
but is not supported in all environments.

#. FTP to your server and move the entire system folder above webroot,
   but still within your user's account folder.
#. Open index.php **and** admin.php (both found in your site's root) and
   update the relative path to the system directory **in both files**.
   Here's an example:

Before
~~~~~~

Your folder structure looked like...

::

    .
    └── public_html
        ├── admin.php
        ├── index.php
        ├── images
        ├── system
        └── themes

... with index.php and admin.php having::

	  $system_path = './system';

|

After
~~~~~

Now your your folder structure looks like...

::

    .
    ├── public_html
    |   ├── admin.php
    |   ├── index.php
    |   ├── images
    │   └── themes
    └── system

... so index.php and admin.php now have::

	  $system_path = '../system';

Note the extra period, indicating that the system folder is now one
level up, above webroot where it cannot be directly accessed from a web
browser.

.. note:: There may also be some areas in the Control Panel where you
  will need to update the server path. For example:

  - :menuselection:`Settings --> URL and Path Settings`
  - :menuselection:`Files`

Renaming admin.php
------------------

In the same way that we've renamed the system folder (or moved it above
webroot entirely) it is recommended that you rename admin.php to
something less obvious as well.

#. FTP to your server and change the name of the admin.php file to
   something else that is not easily guessed. For example, let's say
   you've renamed it to razzle.php.
#. Visit :menuselection:`Settings --> URL and Path Settings` and update the Control Panel URL setting. Alternatively you can open ``system/user/config/config.php`` (or whatever you have
   renamed the system folder to) and update the URL using the `cp_url` override::

	  $config['cp_url'] = "https://example.com/razzle.php";

Removing index.php from your URLs
---------------------------------

ExpressionEngine is a PHP application, so it is invoked whenever the web server requests the ``index.php`` file, e.g.: *https://example.com/some/url*. You can configure your server to invoke this file without having it appear in the URL. See :doc:`/urls/remove_index.php` for details on how to accomplish this.
