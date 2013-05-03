Security Class
==============

.. contents::
	:local:

Calling the Security Class
--------------------------

This class is initialized automatically.

Security filtering
------------------

ee()->security->xss\_clean() is the built in ExpressionEngine XSS
sanitization method, which is constantly tweaked for improved security
and performance. It accepts both a *string* and an *array* and will
return sanitized text. ::

	$str = ee()->security->xss_clean($str);

An optional second parameter, is\_image, allows this function to be used
to test images for potential XSS attacks, useful for file upload
security. When this second parameter is set to TRUE, instead of
returning an altered string, the function returns TRUE if the image is
safe, and FALSE if it contained potentially malicious information that a
browser may attempt to execute. ::

	if (ee()->security->xss_clean($file, TRUE) === FALSE)
	{
	    // file failed the XSS test
	}

Other Class Variables
---------------------

ee()->security->sanitize\_filename()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Removes naughty characters from filenames. Returns a sanitized
string.

::

	$filename = ee()->security->sanitize_filename($name);

ee()->security->xss\_hash()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Returns a random hash.

::

	echo ee()->security->xss_hash();

