Renaming Main Site File
=======================

Naming your Main Site File
--------------------------

You can name your site index.php file anything you want and the system
will automatically be able to use the name. However, you will need to
update the Admin > System Preferences > General Configuration settings
within the Control Panel with the new name of your site index so that
links will be rendered correctly.

Removing the File Extension
---------------------------

In addition to simply being able to rename your main site file, you can
also make your URLs even more friendly by eliminating the file extension
from the file. In order to be able to do this you will have to instruct
your web server to process the file as a PHP file even though it no
longer has a .php extension.

Here are instructions for accomplishing this if your website is on a
server running the Apache web server:

#. Rename your actual file by removing the ".php" file extension. You
   may also change the name from "index" to something else if you wish.
   For example, let's say you want to change the name to mynewindex.
   Make a note of the new name.
#. Create a blank text file on your server in the same directory as your
   main site file. Name this text file ".htaccess" (without the quotes).
   Be sure to note the period at the beginning of the filename; this is
   **very** important.
#. Place the following code in your new .htaccess file. **Note:** the
   word "mynewindex" needs to correspond to the new name of your site
   index file from Step 1.

   -  If your site runs on the **Apache 2.x** server try this code::

	<Files mynewindex>     AcceptPathInfo on     SetOutputFilter PHP     SetInputFilter PHP </Files>

   -  If your site runs on the **Apache 1.x** server, Apache 2.x with
      PHP 4.3.2 or newer, or another server, try this code::

	<Files mynewindex>     ForceType application/x-httpd-php </Files>

   -  If your Host/server runs PHP as a CGI process (as opposed to a web
      server module) you *may* need to use this code::

	<Files mynewindex>      SetHandler application/x-httpd-php </Files>

   **Important:**
   You should confirm with your Host/server admin that the web server
   is set up to "AllowOverride". Otherwise the above commands may not
   actually take effect.

   You can also confirm the correct .htaccess commands to use with your
   Host/server admin. While the above commands will usually work,
   occasionally servers will be set up in non-standard ways and your
   Host/server admin will need to tell you the correct commands.

   If your Host uses a non-Apache webserver, then you will need to
   contact them for how to instruct your web server to process the file
   as a PHP file even though it no longer has a .php extension.

#. Go to Admin > General Configuration in your Control Panel and update
   the name of your website index page to what you chose in Step 1 (make
   sure that the ".php" file extension is not on the name).
#. Update any path/URL settings you may have under Admin > Channel
   Management to match your renamed file.
#. You may also discover that your newly-renamed mynewindex file is not
   being displayed when you simply go to the directory for your site
   (without including the file name). If that's the case, then you may
   need to add one more thing to the top of your .htaccess file::

	DirectoryIndex mynewindex index.php index.shtml index.html index.htm

   The server looks for the files you list in the order you list them.
   The first file it finds meeting the description will be shown as the
   "default" page for that directory.

Remove index.php Entirely from the URL
--------------------------------------

The unofficial EE Wiki has a page with instructions on ways you can
`completely remove the index.php
file <http://expressionengine.com/wiki/Remove_index.php_From_URLs/>`_
from your URLs. Note that this is only possible on some servers and
EllisLab does not officially support this use.
