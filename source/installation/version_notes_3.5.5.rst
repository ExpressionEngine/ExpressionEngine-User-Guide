.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#######################
Version Notes for 3.5.5
#######################

If you have **not** customized your existing forum templates:
-------------------------------------------------------------

Simply replace your entire forum theme folder with the new set:

themes/ee/forum/

If you **have** customized your existing templates:
---------------------------------------------------

You will need to manually edit your Edit Preferences Template (forum_member/edit_preferences.html)

Replace::

  <form method="post" action="{path:update_edit_preferences}">
  <input type="hidden" name="XID" value="{XID_HASH}" />

With::

  {form_declaration}
