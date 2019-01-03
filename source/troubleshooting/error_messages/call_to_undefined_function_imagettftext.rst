.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Call to undefined function: imagettftext()
==========================================

ExpressionEngine returns the following error: **"Call to undefined
function: imagettftext()."**

Troubleshooting
---------------

This error---and similar warnings such as **"Warning: imagettftext():
Could not find/open font in ..."**---indicate that ExpressionEngine is
running on a server where PHP is missing TrueType font support.
Resolving this problem requires contacting the host support or server
admin and have them upgrade to a PHP version that has such support
compiled in.

If that is not an option, **Use TrueType Font for Captcha?** should be
set to *No* under :menuselection:`Settings --> CAPTCHA` or
CAPTCHAs should be disabled altogether.
