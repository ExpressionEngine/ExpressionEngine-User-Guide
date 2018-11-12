.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Submitting a form has no effect and the page simply reloads
===========================================================

Form submissions that silently fail are typically caused by a URL
mismatch. Check if your server is configured to re-write URLs by:

-  Forcing the addition or removal of the "www" subdomain
-  Forcing the addition or removal of trailing forward slashes in your
   URLs

Troubleshooting
---------------

Such URL re-writing rules are often found in a .htaccess file located in
the web root of your site. Temporarily disable this file (if it exists)
by renaming it to anything else and testing again. Your host can also
help you determine if any such rules are in effect or possibly
configured elsewhere.


