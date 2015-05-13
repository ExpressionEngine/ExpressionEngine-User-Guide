CAPTCHA Preferences
===================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> CAPTCHA Preferences`

This section of the Control Panel allows you to set
:doc:`CAPTCHA </security/captchas>` preferences for your
website.


.. _captcha-require:

Require CAPTCHA?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you enable this preference, then site visitors will be required to
pass a CAPTCHA to submit any front-end form, including Channel Form,
comment forms, and member registrations. If members are logged in, they
will not have to enter a CAPTCHA unless the
:ref:`Require CAPTCHA with logged-in members? <captcha-require-logged-in-members>`
preference is enabled below.

.. _captcha-server-path:

Server Path to CAPTCHA Folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The *server path* (not a URL) to the folder containing your
:doc:`CAPTCHA </security/captchas>` images. In some cases a
simple relative path will work correctly. If you are not sure how to
determine your server path please contact your system administrator.


.. _captcha-full-url:

Full URL to CAPTCHA Folder
~~~~~~~~~~~~~~~~~~~~~~~~~~

The full URL to the :doc:`CAPTCHAs </security/captchas>` image
folder, with a trailing slash.


.. _captcha-use-truetype:

Use TrueType Font for CAPTCHA?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If your server supports TrueType Fonts, then you can enable this
setting. If you receive errors such as Call to undefined function:
imagettftext() on your site then your server does not support TrueType
Fonts and you should set this to "No".


.. _captcha-add-random-number:

Add Random Number to CAPTCHA Word
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Specify whether to add a random three-digit number to the end of each
generated CAPTCHA word. This makes it more difficult for scripts to
guess or brute-force the form submission.


.. _captcha-require-logged-in-members:

Require CAPTCHA with logged-in members?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you enable this preference, then members who are logged in will need
to fill out CAPTCHA information in order to post comments (assuming
you've enabled CAPTCHA support for comment posting). If you disable this
setting, then members who are logged in can bypass the CAPTCHA check.
