.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Messaging Settings
==================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Messaging Settings`

.. Overview

This section of the Control Panel allows you to define the messaging
settings of your site.

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

Maximum characters
~~~~~~~~~~~~~~~~~~

Specifies the maximum number of characters allowed in a Private Message
to limit its total length.

Formatting
~~~~~~~~~~

This setting determines how raw HTML code within Private Messages is
handled. There are three options:

#. **Allow only safe HTML**: This will allow "safe" HTML to be rendered:
   (<b>, <i>, <u>, <em>, <strike>, <strong>, <pre>, <code>,
   <blockquote>, <h2>, <h3>, <h4>, <h5>, <h6>). All other HTML is
   converted to character entities.
#. **Convert HTML into character entities**: This will convert the HTML
   tags to HTML character entities so that it will display as plain text
   when viewed. This is useful if you want to display example code.
#. **Allow ALL HTML**: This leaves the HTML code as written and the code
   will then be interpreted by the browser when the message is viewed.

Convert URLs and Emails into links?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When this option is set to "Yes", any full URLs or email addresses will
be automatically formatted as a valid HTML link to the address. If the
option is "No" then the URL or email address will be treated and
displayed as plain text.

Upload directory
~~~~~~~~~~~~~~~~

The URL to your attachments folder. In most cases, this will be
similar to:

 - https://example.com/images/pm\_attachments/
 - ///example.com/images/pm\_attachments/
 - /images/pm\_attachments/

.. _server-path-for-attachment-upload-directory:

Upload path
~~~~~~~~~~~

Here you set the *server path* (**not** the URL) to the Private
Message attachment upload folder. By default, it is the pm\_attachments
folder inside the images folder.

The server path might look something like::

  /home/example.com/public\_html/images/pm\_attachments/

If you do not know what to use for your full server path, contact your Host or
server admin. Remember that this upload folder must be be writable. See :doc:`/troubleshooting/general/file_permissions` for details.

Maximum attachments
~~~~~~~~~~~~~~~~~~~

Specifies the maximum number of file attachments that are allowed to be
included with each Private Message.

Maximum file size (kb)
~~~~~~~~~~~~~~~~~~~~~~

Specifies the maximum size of the attachment for each Private Message.

Maximum total file size (mb)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum total storage space allowed for all Private Message
attachments in the system. Once this limit is reached, no new Private
Message attachments will be allowed.
