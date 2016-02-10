###############
Mime Type Class
###############

.. contents::
  :local:

.. highlight:: php

***************************
Calling the Mime Type Class
***************************

.. class:: Mime_type

  ExpressionEngine uses the Mime Type class whenever a file's, or buffer's, Mime
  type needs to be determined. Additionally, it is used to dertermine if a file
  is an image, and to determine if a file is safe for uploading. This
  class is a library, so you have to load the Mime Type library before using
  it::

    ee()->load->library('mime_type');

.. note:: The Mime Type library uses the Mime Type at
    ``system/ee/legacy/config/mimes.php`` when determining if a file is
    safe for uploading or is an image.

.. note:: There is a ``mime_whitelist_additions`` :ref:`config override <overrides-mime-whitelist-additions>`
	for adding installation specific Mime Types to the whitelist.

.. note:: There is a ``mime_whitelist_member_exception`` :ref:`config override <overrides-mime-whitelist-member-exception>`
    and a ``mime_whitelist_member_group_exception`` :ref:`config override <overrides-mime-whitelist-member-group-exception>`
    which will bypass the whitelist for those members and/or member groups.

Methods
=======

.. method:: getWhitelist()

  Returns the whitelist of Mime Types

  :returns: An array of Mime types that are on the whitelist
  :rtype: array

.. method:: ofFile($path)

  Determines the Mime type of a file

  :throws: Exception If the file does not exist
  :param string $path: The full path to the file being checked
  :returns: The Mime type of the file
  :rtype: string

.. method:: ofBuffer($buffer)

  Determines the Mime type of a buffer

  :param string $buffer: The buffer/data to check
  :returns: The Mime type of the buffer
  :rtype: string

.. method:: fileIsImage($path)

  Determines if a file is an image or not.

  :throws: Exception If the file does not exist
  :param string $path: The full path to the file being checked
  :returns: TRUE if it is an image; FALSE if not
  :rtype: bool

.. method:: isImage($mime)

  Determines if a Mime type is in our list of valid image Mime types.

  :param string $mime: The mime to check
  :returns: TRUE if it is an image; FALSE if not
  :rtype: bool

.. method:: fileIsSafeForUpload($path)

  Gets the Mime type of a file and compares it to our whitelist to see if
  it is safe for upload.

  :throws: Exception If the file does not exist
  :param string $path: The full path to the file being checked
  :returns: TRUE if it safe; FALSE if not
  :rtype: bool

.. method:: isSafeForUpload($mime)

  Checks a given Mime type against our whitelist to see if it is safe for
  upload

  :param string $mime: The mime to check
  :returns: TRUE if it is an image; FALSE if not
  :rtype: bool