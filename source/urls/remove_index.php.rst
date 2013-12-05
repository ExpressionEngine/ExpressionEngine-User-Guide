Removing index.php from URLs
============================

.. versionadded:: 2.2
   Official support, limited to the scope of the recommendations
   provided here, if now available for removing index.php from your
   URLs.

The "index.php" appears in your URLs because it is the file responsible
for processing all requests to the system. In a URL such as
http://yourdomain.com/index.php/template\_group/template the
template\_group/template segments are simply information passed to
index.php and do not refer to actual files or folders on the server.

Many servers support a technique called URL rewriting, which allows you
to hide the index.php portion of the URL behind the scenes.

Requirements
------------

-  UNIX-based hosting
-  Apache 2.x or later with **mod\_rewrite** installed and enabled
-  ExpressionEngine 2.2 or later

1. Create an .htaccess file
---------------------------

Using your FTP client, create a new file named .htaccess (including the
leading period) in the same folder as your site's main index.php file.

.. note:: Files beginning with a period are hidden by default on some
   operating systems, including Mac OS X. Ensure your FTP client is set
   to show **all** files, including hidden ones.

Then add the following code to this newly created .htaccess file::

	<IfModule mod_rewrite.c>
		RewriteEngine On
		RewriteBase /

		# Removes index.php from ExpressionEngine URLs
		RewriteCond %{THE_REQUEST} ^GET.*index\.php [NC]
		RewriteCond %{REQUEST_URI} !/system/.* [NC]
		RewriteRule (.*?)index\.php/*(.*) /$1$2 [R=301,L]

		# Directs all EE web requests through the site index file
		RewriteCond %{REQUEST_FILENAME} !-f
		RewriteCond %{REQUEST_FILENAME} !-d
		RewriteRule ^(.*)$ /index.php/$1 [L]
	</IfModule>

Exceptions
^^^^^^^^^^

-  If you are running EE from a sub-directory rather from the root of
   your domain (e.g. http://example.com/myeesite/ instead of
   http://example.com/), just remove the slash    preceeding index.php
   in the RewriteRule line above, like so::

    RewriteRule ^(.*)$ index.php/$1 [L]

-  If your host requires forcing query strings, try adding a question
   mark following index.php in the RewriteRule line above, like so::

	RewriteRule ^(.*)$ /index.php?/$1 [L]

2. Update General Configuration
-------------------------------

In the Control Panel, go to :menuselection:`Admin --> General
Configuration`, set the Name of your site's index page to blank (empty),
and click Submit.

3. Test
-------

Test your site's links to ensure they are working properly with
index.php removed.

Some common problems include links returning 404s, a "No Input File
Specified" error, or all links returning the same content. This can
often be the case with hosts (such as GoDaddy) that require you to force
query strings. If this happens, follow the exception above for hosts
that force query strings.

If you encounter a problem, you can rename the .htaccess file to
something else (it only takes effect when it is named .htaccess) and set
the Name of your site's index page back to index.php.

Finished!
---------

Note that Technical Support Staff may, during troubleshooting, ask you
to reduce your .htaccess file to only these settings. Any additional
content questions may be moved to the Community Help forum.

.. note:: If using the Multiple Site Manager you can repeat the above
   steps for each site, assuming each site has its own public\_html or
   webroot folder.
