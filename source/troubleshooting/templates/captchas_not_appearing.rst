CAPTCHA images not appearing
============================

CAPTCHAs are enabling but there is a blank space where they should
appear.

Troubleshooting missing CAPTCHA Images
--------------------------------------

There are several possible reasons for CAPTCHA images to not appear:

-  The path and/or URL to the CAPTCHA directory is not specified
   correctly under :menuselection:`Settings --> CAPTCHA`.
-  The *images/captchas/* directory is not writable. See :doc:`/troubleshooting/general/file_permissions` for details.
-  The server does not support True Type Fonts. TrueType Fonts can be
   disabled in :menuselection:`Settings --> CAPTCHA`.
-  GD library isn't installed and/or working correctly


