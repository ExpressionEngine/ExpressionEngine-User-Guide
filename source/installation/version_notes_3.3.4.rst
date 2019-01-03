.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 3.3.4
#######################

An `.htaccess` file was added to the themes folder in order to allow font resources to be downloaded and used across domains and subdomains in environments that support it.  Without such access, UI image elements in the control panel may be missing when viewed using certain URLs.

When you update, be certain to copy over the .htaccess file from the new themes folder to your current themes folder.
