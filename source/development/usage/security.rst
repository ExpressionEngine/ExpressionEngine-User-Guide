Security Class
==============

.. contents::
  :local:

.. highlight:: php

Calling the Security Class
--------------------------

.. class:: Security

  This class is initialized automatically.

Cross Site Scripting Protection
-------------------------------

For general XSS protection handling, please refer to the :ref:`Cross Site
Scripting <dev_guidelines_xss_protection>` section of the security guidelines.

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


Cross Site Request Forgery Protection
-------------------------------------

For general CSRF protection handling, please refer to the :ref:`Cross Site
Request Forgery <dev_guidelines_csrf_protection>` section of the security guidelines.

.. method:: restore_xid([$xid = REQUEST_XID])

  .. deprecated:: 2.8 CSRF Tokens are now multi-use.

  By default all XIDs are single use tokens. In some cases you may want
  to allow reuse of the token. To do this you can call ``restore_xid()``
  at any point during the request that consumed the token. ::

    ee()->security->restore_xid();


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
