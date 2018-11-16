.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

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


