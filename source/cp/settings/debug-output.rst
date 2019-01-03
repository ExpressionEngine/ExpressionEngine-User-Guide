.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Debugging & Output
==================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Debugging & Output`

.. Overview

This section of the Control Panel allows you to define how your site is output
from the server to the user. This includes how debugging information is handled
for your website. These are general settings that apply throughout the
website/system.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: General Settings

Settings
--------

.. contents::
  :local:
  :depth: 1

.. Each Action/Section

.. _output-debug-pref-label:

Enable error reporting?
~~~~~~~~~~~~~~~~~~~~~~~

When set to "enable", super admins and member groups with permissions will see
PHP/MySQL errors when they occur.

.. _output-debug-display-profiler-label:

Enable debugging?
~~~~~~~~~~~~~~~~~

If enabled, Super Admins will see benchmark results, SQL queries, and
submitted form data displayed at the bottom of the browser window.
On the front end, this includes Global Variables,
Conditionals, Tags, PHP on Input/Ouput, Embeds, and Extension Hooks.
This is an excellent tool for debugging.

.. _output-enable-gzip-label:

Enable GZIP compression?
~~~~~~~~~~~~~~~~~~~~~~~~

Set the system to serve compressed front-end pages for faster load times
as long as the requesting browser supports gzip compression, PHP's zlib
extension is loaded, and the web server is not already serving
compressed pages.

.. note:: This setting only controls whether ExpressionEngine itself
    serves up compressed front-end pages. If the web server is
    configured to serve compressed pages, this setting will have no
    effect.

.. _output-force-query-strings-label:

Force URL query strings?
~~~~~~~~~~~~~~~~~~~~~~~~

If enabled, ExpressionEngine will render URLs with a question mark
following ``index.php`` in order to pass along segment information as a
standard query string::

    https://example.com?/channel/joe/

This is necessary for only a few types of web servers to process
ExpressionEngine's URLs correctly. ExpressionEngine's default is a much
more search-engine friendly format::

    https://example.com/channel/joe/


In rare circumstances, you may need to use this variable in conjunction
with editing the ``$qtype`` variable in your main site ``index.php``
file.

.. _generate-http-headers-label:

Use HTTP page headers?
~~~~~~~~~~~~~~~~~~~~~~

This setting determines whether or not the server should automatically
send HTTP page headers when it serves the pages to a user. Setting this
preference to "Yes" causes headers to be explicitly sent by the server.
Sending explicit headers is generally considered to be a good practice,
although in some cases it can cause some problems.

.. _output-debug-redirect-method-label:

Redirection type
~~~~~~~~~~~~~~~~

This setting determines what method is used for page redirections. These
redirections are used relatively frequently throughout the system,
especially with things like logging in/out and other membership related
functions. There are two options:

- **Location (faster)**: This is the preferred method, which uses PHP's
  "location" functionality.
- **Refresh (Windows servers)**: The "refresh" method is often necessary
  for windows-based servers due to the poor way they handle PHP's
  "location" functionality. This method is usually slightly slower than
  the other method.

Caching Driver
~~~~~~~~~~~~~~

The :ref:`caching driver <caching_drivers>` ExpressionEngine is set to
use.

Cachable URIs
~~~~~~~~~~~~~

If you cache your templates (pages), this preference limits the total
number of cache files in order to prevent them from taking up too much
disk space. 150 is a good number for a small site. If you have a large
site and disk space is not an issue you can set it higher (over 300).
There is an internal limit of 1000 regardless of your preference.

.. _output-debug-use-newrelic-label:

.. Enable New Relic RUM JavaScript?
.. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
..
.. This preference only appears when the New Relic PHP extension has
.. been installed on your server. For more details, please visit
.. :doc:`/monitoring/new-relic`.
..
.. New Relic application name
.. ~~~~~~~~~~~~~~~~~~~~~~~~~~
..
.. Changes the name of the application that appears in the New Relic dashboard for this installation of ExpressionEngine.