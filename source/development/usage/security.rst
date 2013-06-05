Security Class
==============

.. contents::
  :local:

.. highlight:: php

Calling the Security Class
--------------------------

.. class:: Security

  This class is initialized automatically.

Security filtering
------------------

.. method:: xss_clean($str[, $is_image = FALSE])

  ``xss_clean()`` is the built in ExpressionEngine XSS sanitization
  method, which is constantly tweaked for improved security and
  performance::

    $str = ee()->security->xss_clean($str);

  :param mixed $str: Either a string or an array to sanitize
  :param boolean $is_image: Set to ``TRUE`` if you want to test images
    for XSS attacks.
  :returns: Either a string or an array of sanitized strings. If
    ``$is_image`` is set to ``TRUE``, will return ``FALSE`` if the image
    fails the check.
  :rtype: Mixed

Other Class Methods
-------------------

.. method:: sanitize_filename($str[, $relative_path = FALSE])

  Removes naughty characters from filenames. Returns a sanitized
  string::

    $filename = ee()->security->sanitize_filename($name);

  :param string $str: Filename to sanitize
  :param boolean $relative_path: Set to ``TRUE`` if you want to validate
     a filename with a relative path
  :returns: Sanitized filename
  :rtype: String

.. method:: xss_hash()

  Returns a random hash::

    echo ee()->security->xss_hash();

  :returns: Random hash
  :rtype: String
