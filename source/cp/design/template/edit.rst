Edit Template
=============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Template Manager --> Edit`

.. Overview


.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Template Management Allowed actions: Manage Template Settings
* Template Management Allowed actions: Edit Templates
* Template Management Allowed template groups

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Edit
~~~~

The content of the Template.

Notes
~~~~~

The Template Notes tab enables you to save notes and information about your
template. This information is available only in this page.

Settings
~~~~~~~~

Template Name
^^^^^^^^^^^^^

The name of the Template. This must be a single word with no spaces. You may
use the letters a-z, the numbers 0-9, and the underscore and hyphen/dash
characters. You should refrain from creating all-numeric Template names as they
can cause confusion with Entry IDs used in URLs.

.. _template-type:

Type
^^^^

Here you may specify the type of Template:

-  **Webpage**: This is the most common type of Template. Unless you
   specifically need one of the other two types you should use this one.
-  **CSS**: This type is used for Stylesheets. It tells
   ExpressionEngine to serve the Template as "text/css" MIME type.
   Further, the Template will *not* be parsed for EE Tags like normal.
   The Template is served "as-is".
-  **RSS Page**: Used for RSS and Atom syndication feeds. It tells
   ExpressionEngine to serve the Template as "text/xml" MIME type.
-  **JavaScript**: Used for outputting JavaScript code. It tells
   ExpressionEngine to send "text/javascript" MIME type server headers
   when being viewed.
-  **Static**: Used for static content with absolutely no
   ExpressionEngine rendered tags. Useful for HTML design elements
   embedded in other templates.
-  **XML**: Used for outputting XML pages with EE. It tells
   ExpressionEngine to send "text/xml" MIME type server headers when
   being viewed.

Enable Caching?
^^^^^^^^^^^^^^^

This determines whether or not Template Caching is enabled for the Template. This is used together with the following preference.

Refresh Interval
^^^^^^^^^^^^^^^^

If the previous preference is enabled, then this specifies how long (in minutes) the Template cache should active. The next time the Template is requested after the time interval has expired, a new cache will be created.

Allow PHP?
^^^^^^^^^^

Here you specify whether or not the Template will parse PHP expressions. If the preference is set to "no", then any PHP in the Template will be output as plain text.

PHP Parsing Stage
^^^^^^^^^^^^^^^^^

If the previous preference is enabled, this sets whether PHP is parsed on "input" or "output" in the Template. See :doc:`Using PHP in Templates </templates/php>` for more information.

Hit Counter
^^^^^^^^^^^

If you wish to manually revise the hit counter for a Template you may do so.

Access
~~~~~~

Allowed member groups
^^^^^^^^^^^^^^^^^^^^^

Choose which member groups are allowed to access the template.

No access redirect
^^^^^^^^^^^^^^^^^^

Page to redirect users without permissions to.

Enable HTTP Authentication?
^^^^^^^^^^^^^^^^^^^^^^^^^^^

When set to enable, users with permissions will have to login to view this template.

.. note::

  If you are running PHP-FPM / FastCGI, you will probably need to add this to your ``.htaccess`` so the server makes the necessary environment variables available to PHP & ExpressionEngine.

  .. code-block:: apache

    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

Template route override
^^^^^^^^^^^^^^^^^^^^^^^

Overrides the ExpressionEngine standard group/template routing.

Require all segments?
^^^^^^^^^^^^^^^^^^^^^

When set to yes, all segments must be present in the request URI.

