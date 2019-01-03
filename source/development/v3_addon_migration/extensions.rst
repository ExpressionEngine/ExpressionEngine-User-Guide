.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

*****************
Extension Changes
*****************

Before going to update your extension, please check the :doc:`/development/extension_hooks/index`
listing and check for any changes to the hooks you're using. There are several
new hooks in ExpressionEngine 3, as well as some changes and removals.

Custom Settings Pages
=====================

If you are using the ``settings`` method to show your extension settings you should
not need to make any changes. However, if you're using the ``settings_form`` method
then you will need to update your extension to the new control panel style.

Please refer to the :ref:`Module Control Panel <module_mcp_output>` changes for details
on how to create these. The form should submit to ``addons/settings/<addonName>/save``,
where ``<addonName>`` is the folder name of your add-on.
