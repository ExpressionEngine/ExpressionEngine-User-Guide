CAPTCHA images not appearing
============================

CAPTCHAs are enabling but there is a blank space where they should
appear.

Troubleshooting missing CAPTCHA Images
--------------------------------------

There are several possible reasons for CAPTCHA images to not appear:

-  The path and/or URL to the CAPTCHA directory is not specified
   correctly under Admin > Captcha Preferences
-  images/captchas/ directory is not set to 777/writable
-  The server does not support True Type Fonts. TrueType Fonts can be
   disabled in Admin > Captcha Preferences
-  GD library isn't installed and/or working correctly


