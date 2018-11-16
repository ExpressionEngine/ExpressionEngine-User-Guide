.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 3.2.0
#######################

With 3.2.0, we changed the path where the dictionary words text file is loaded and referenced. Before, it was pointing to ``system/ee/legacy/config``, but now it is pointing to ``system/user/config``. If you're using the dictionary text file, you will need to move the file to the config folder in the user directory in order for the disabling of dictionary passwords feature to keep working.
