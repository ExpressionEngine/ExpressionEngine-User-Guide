Captcha Preferences
===================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Admin --> Security and Privacy --> Captcha Preferences`

This section of the Control Panel allows you to set
:doc:`CAPTCHA </security/captchas>` preferences for your
website.

Server Path to Captcha Folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The *server path* (not a URL) to the folder containing your
:doc:`CAPTCHA </security/captchas>` images. In some cases a
simple relative path will work correctly. If you are not sure how to
determine your server path please contact your system administrator.

Full URL to Captcha Folder
~~~~~~~~~~~~~~~~~~~~~~~~~~

The full URL to the :doc:`CAPTCHAs </security/captchas>` image
folder, with a trailing slash.

Use TrueType Font for Captcha?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If your server supports TrueType Fonts, then you can enable this
setting. If you receive errors such as Call to undefined function:
imagettftext() on your site then your server does not support TrueType
Fonts and you should set this to "No".

Add Random Number to Captcha Word
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Enabling this setting adds a random three-digit number to the end of the
CAPTCHA word. This helps make it more difficult for scripts to be able
to guess or brute-force the form submission. By default,
ExpressionEngine only has about 1000 words in the CAPTCHA word list so
by enabling this setting you add a more randomizing element.

Require captcha with logged-in members?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you enable this preference, then members who are logged in will need
to fill out Captcha information in order to post comments (assuming
you've enabled Captcha support for comment posting). If you disable this
setting, then members who are logged in can bypass the captcha check.
