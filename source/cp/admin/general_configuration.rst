General Configuration
=====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> General Configuration`

This section of the Control Panel allows you to define the basic
settings of your site. If you are using the :doc:`/cp/sites/index`, note that
these settings are per-site.

.. _general-config-system-on-label:

Is system on?
~~~~~~~~~~~~~

This indicates whether or not your site is "live" and displayed to the
public. If you set this preference to "No" only members of the Super
Admin group will be able to see the site. All other users will be shown
the System Offline page, which you can edit at :menuselection:`Design
--> Message Pages --> System Offline Template`.

Name of your site
~~~~~~~~~~~~~~~~~

This is the name of your website. It may contain spaces and punctuation.
This name is available in your Templates by using the {site\_name}
Global Variable.

.. note:: If you are using the :doc:`/cp/sites/index` this setting will
   be found in the :doc:`/cp/sites/managesites` section.

.. _general-config-index-name-label:

Name of your site's index page
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This is the filename of your site's "index" page. By default, this will
be index.php, which is located in the base folder. You will only need to
alter this setting if you have changed the filename.

.. _general-config-url-root-label:

URL to the root directory of your site
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The full URL to the folder containing your site's index page. For
example, if your index file is located at:

http://example.com/index.php

Then the correct setting would be:

http://example.com/

.. _general-config-url-cp-label:

URL to your Control Panel index page
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The full URL to your ExpressionEngine Control Panel. In most cases, this
will be similar to:

http://example.com/admin.php

.. _general-config-theme-url-label:

URL to your "themes" folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The full URL to your "themes" folder. In most cases, this will be
similar to:

http://example.com/themes/

.. _general-config-theme-path-label:

Theme Folder Path
~~~~~~~~~~~~~~~~~

The *server path* to the "themes" folder. A server path often looks
similar to::

	/home/usr/domain.com/public_html/themes/

Server paths will vary from server to server, so you should contact your
Host or server admin if you are unsure of what your setting should be.

.. _general-config-cp-theme-label:

Default Control Panel Theme
~~~~~~~~~~~~~~~~~~~~~~~~~~~

The theme that members will see when logged in to the Control Panel.
They are able to override this setting in :doc:`/cp/my_account/index`.

Default Language
~~~~~~~~~~~~~~~~

The language pack that members will see when logged in to the Control
Panel. This only affects the Control Panel.
Members are able to override this setting in :doc:`/cp/my_account/index`.

.. _general-config-default-xml-label:

Default XML Language
~~~~~~~~~~~~~~~~~~~~

This setting is typically used when outputting RSS feeds. Your feed will
identify itself as having the language specified here.

Caching Driver
~~~~~~~~~~~~~~

The :ref:`caching driver <caching_drivers>` ExpressionEngine is set to
use.

Maximum Number of Cachable URIs
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you cache your templates (pages), this preference limits the total
number of cache files in order to prevent them from taking up too much
disk space. 150 is a good number for a small site. If you have a large
site and disk space is not an issue you can set it higher (over 300).
There is an internal limit of 1000 regardless of your preference.

.. _general-config-new-version-label:

New Version Auto Check
~~~~~~~~~~~~~~~~~~~~~~

Enabling this feature will cause a message to be displayed in the
Control Panel when a new version of ExpressionEngine is available. It
will **not** automatically download and install a new version.

.. _general-config-URL-docs-label:

URL to Documentation Directory
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The full URL to location of the ExpressionEngine User Guide. This URL is
used to create the User Guide link at the top of your Control Panel.
