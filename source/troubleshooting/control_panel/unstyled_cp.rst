.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Control Panel is Unstyled
=========================

CSS is not being applied to the Control Panel

Troubleshooting Control Panel CSS
---------------------------------

If the control panel appears without styling, first check to make sure
that the **themes** folder exists and contains a complete **ee/cp**
folder. You may wish to re-upload the **themes/ee** folder to
ensure it is complete.

If all themes files are present, you will want to double check your **Themes directory** and **Themes path** in your :doc:`/cp/settings/urls`. Keep in mind that **Themes path** is a *full server path*, for instance ``/home/example.com/public_html/themes/``. If you do not know what to use for your full server path, contact your web host or sysadmin.


