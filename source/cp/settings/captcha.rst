CAPTCHA Settings
================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> CAPTCHA Settings`

.. Screenshot (optional)

.. Overview

This section of the Control Panel allows you to set
:doc:`CAPTCHA </security/captchas>` preferences for your
website.

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

Require CAPTCHA?
~~~~~~~~~~~~~~~~

If you enable this preference, then site visitors will be required to pass a
CAPTCHA to submit any front-end form, including Channel Form, comment forms,
and member registrations. If members are logged in, they will not have to enter
a CAPTCHA unless the `Require CAPTCHA while logged in?`_ preference is enabled
below.

Use TrueType font?
~~~~~~~~~~~~~~~~~~

If your server supports TrueType Fonts, then you can enable this
setting. If you receive errors such as Call to undefined function:
imagettftext() on your site then your server does not support TrueType
Fonts and you should set this to "No".

Add random number?
~~~~~~~~~~~~~~~~~~

Specify whether to add a random three-digit number to the end of each
generated CAPTCHA word. This makes it more difficult for scripts to
guess or brute-force the form submission.

Require CAPTCHA while logged in?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you enable this preference, then members who are logged in will need
to fill out CAPTCHA information in order to post comments (assuming
you've enabled CAPTCHA support for comment posting). If you disable this
setting, then members who are logged in can bypass the CAPTCHA check.

CAPTCHA directory
~~~~~~~~~~~~~~~~~

The URL to your :doc:`CAPTCHA </security/captchas>` images. In most cases, this
will be similar to:

 - http://example.com/images/captchas/
 - ///example.com/images/captchas/
 - /images/captchas/

CAPTCHA path
~~~~~~~~~~~~

Here you set the *server path* (**not** the URL) to your :doc:`CAPTCHA </security/captchas>` images folder. By default, it is the captchas
folder inside the images folder.

The server path might look something like::

  /home/example.com/public\_html/images/captchas/

If you do not know what to use for your full server path, contact your Host or
server admin. Remember that this upload folder must be set to 777 permissions
(or otherwise be "writable").
