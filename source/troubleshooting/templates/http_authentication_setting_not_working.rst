.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

"Enable HTTP Authentication?" Setting Not Working
=================================================

If you've enabled :doc:`HTTP Authentication </cp/design/template/edit>` for a template and authentication is failing:

1. Dirst check to make sure that you've also given access to the desired member group(s), and that the user you are authenticating with is from one of those groups.
2. Double check that the username and password is correct by logging in to ExpressionEngine as that member.

If it still fails to authenticate, it could be that the web server is not making the authentication details available to PHP (and thus unavailable to ExpressionEngine). This is common when the web server is running PHP-FPM and Apache for instance. In those cases, you can fix this by adding the following to the Apache VirtualHost or in your `.htaccess`:

.. code-block:: apache

  SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1

or:

.. code-block:: apache

  RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
