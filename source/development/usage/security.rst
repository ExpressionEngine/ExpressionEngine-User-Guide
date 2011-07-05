Security Class
==============

-  `Calling the Security Class <security.html#calling>`_
-  `XSS Filtering <security.html#xss_filter>`_
-  `Other Class Variables <security.html#other_vars>`_

Calling the Security Class
--------------------------

This class is initialized automatically.

Security filtering
------------------

$this->EE->security->xss\_clean() is the built in ExpressionEngine XSS
sanitization method, which is constantly tweaked for improved security
and performance. It accepts both a *string* and an *array* and will
return sanitized text. ::

	$str = $this->EE->security->xss_clean($str);

An optional second parameter, is\_image, allows this function to be used
to test images for potential XSS attacks, useful for file upload
security. When this second parameter is set to TRUE, instead of
returning an altered string, the function returns TRUE if the image is
safe, and FALSE if it contained potentially malicious information that a
browser may attempt to execute. ::

	if ($this->EE->security->xss_clean($file, TRUE) === FALSE) {     // file failed the XSS test }

Other Class Variables
---------------------

$this->EE->security->sanitize\_filename()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Removes naughty characters from filenames. Returns a sanitized
   string.

::

	$filename = $this->EE->security->sanitize_filename($name);

$this->EE->security->xss\_hash()
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

   Returns a random hash.

::

	echo $this->EE->security->xss_hash();

