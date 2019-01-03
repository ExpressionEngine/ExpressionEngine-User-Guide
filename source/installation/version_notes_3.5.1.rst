.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 3.5.1
#######################

ExpressionEngine 3.5.0 had a small bug in the new value / label pair feature of Select, Checkbox, Radio, and Multiselect fields. When accessing the item with ``{field_name}`` instead of with an explicit ``{field_name:value}`` or ``{field_name:label}`` modifier, it was mistakenly outputting the label, instead of the stored value. If you happened to have built templates using the unmodified version of these variables in the week after 3.5.0's release, please check to see if you need to switch to the explicit ``:label`` modifier. We apologize for any inconvenience this bug may have caused.
