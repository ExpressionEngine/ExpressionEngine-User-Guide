Output and Debugging
====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> System Administration --> Output and Debugging`

This section of the Control Panel allows you to define how your site is
output from the server to the user. This includes how debugging
information is handled for your website. These are general settings that
apply throughout the website/system.

.. _generate-http-headers-label:

Generate HTTP Page Headers?
~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting determines whether or not the server should automatically
send HTTP page headers when it serves the pages to a user. Setting this
preference to "Yes" causes headers to be explicitly sent by the server.
Sending explicit headers is generally considered to be a good practice,
although in some cases it can cause some problems.

.. _output-enable-gzip-label:

Enable GZIP Output?
~~~~~~~~~~~~~~~~~~~

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

    http://example.com/index.php?/channel/joe/

This is necessary for only a few types of web servers to process
ExpressionEngine's URLs correctly. ExpressionEngine's default is a much
more search-engine friendly format::

    http://example.com/index.php/channel/joe/


In rare circumstances, you may need to use this variable in conjunction
with editing the ``$qtype`` variable in your main site ``index.php``
file.

.. _output-debug-redirect-method-label:

Redirection Method
~~~~~~~~~~~~~~~~~~

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

.. _output-debug-pref-label:

Debug Preference
~~~~~~~~~~~~~~~~

This setting determines how PHP or database error messages are displayed.
Error messages are often very useful during initial development, but
they can be very confusing to regular site visitors. There are two
options:

1. **PHP/SQL error messages shown only to Super Admins**: Error messages
and warnings are shown only to logged members of the Super Admin group.
All other users will not see anything.

2. **PHP/SQL error messages shown to anyone - NOT SECURE**: As the name
suggests, error messages and warnings are shown to all site visitors.
These messages can sometimes have configuration information in them,
making this option a security risk.

**Tip:** We recommend always keeping this Debug Preference set to "1:
PHP/SQL error messages shown only to Super Admins." This may greatly
reduce the time needed to troubleshoot issues as you will receive an
error instead of a blank screen. Furthermore, for those utilizing
Javascript that may resemble EE code, including curly brackets, this
setting **must** be 1 in order for the Javascript to function, or
ExpressionEngine will hide Javascript output believing it to be an error.

.. _output-debug-display-profiler-label:

Display Output Profiler?
~~~~~~~~~~~~~~~~~~~~~~~~

If enabled, Super Admins will see benchmark results, SQL queries, and
submitted form data displayed at the bottom of the browser window.
On the front end, this includes Global Variables,
Conditionals, Tags, PHP on Input/Ouput, Embeds, and Extension Hooks.
This is an excellent tool for debugging.

.. _output-debug-use-newrelic-label:

Enable New Relic RUM JavaScript?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This preference only appears when the New Relic PHP extension has
been installed on your server. For more details, please visit
:doc:`/monitoring/new-relic`.
