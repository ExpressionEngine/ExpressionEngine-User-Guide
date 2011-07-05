Removing index.php from ExpressionEngine URLs
=============================================

Beginning with the release of ExpressionEngine 2.2, EllisLab can now
offer limited official support for removing index.php from your URLs.

index.php appears in your URLs because it is the file responsible for
processing all requests to the system. In a URL such as
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

**Note:** Files beginning with a period are hidden by default on some
operating systems, including Mac OS X. Ensure your FTP client is set to
show **all** files, including hidden ones.

Then add the following code to this newly created .htaccess file::

	<IfModule mod_rewrite.c>     RewriteEngine On     # Removes index.php     RewriteCond $1 !\.(gif|jpe?g|png)$ [NC]     RewriteCond %{REQUEST_FILENAME} !-f     RewriteCond %{REQUEST_FILENAME} !-d     RewriteRule ^(.*)$ /index.php/$1 [L]     # If 404s, "No Input File" or every URL returns the same thing     # make it /index.php?/$1 above (add the question mark) </IfModule>

2. Update General Configuration
-------------------------------

In the Control Panel, go to Admin > General Configuration, set the Name
of your site's index page to blank (empty), and click Submit.

3. Test
-------

Test your site's links to ensure they are working properly with
index.php removed.

Some common problems include links returning 404s, a "No Input File
Specified" error, or all links returning the same content. This can
often be the case with hosts that require you to force query strings,
such as GoDaddy. If this happens, try adding a question mark as
described in the .htaccess comments (preceeded with a #) above, so that
the line::

	RewriteRule ^(.*)$ /index.php/$1 [L]

becomes::

	RewriteRule ^(.*)$ /index.php?/$1 [L]

If you encounter a problem, you can rename the .htaccess file to
something else (it only takes effect when it is named .htaccess) and set
the Name of your site's index page back to index.php.

Finished!
---------

Note that Technical Support Staff may, during troubleshooting, ask you
to reduce your .htaccess file to only these settings. Any additional
content questions may be moved to the Community Help forum.

**Note:** If using the Multiple Site Manager you can repeat the above
steps for each site, assuming each site has its own public\_html or
webroot folder.
