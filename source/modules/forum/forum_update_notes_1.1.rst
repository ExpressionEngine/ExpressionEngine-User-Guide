Forum Update Notes for Version 1.1
==================================

Perform this step ONLY if you have Customized Your Forum Themes
---------------------------------------------------------------

You will need to manually add one new preference item to your profile
area. In your control panel, go to:

Modules > Discussion Forum > Templates > Default > Member Profile
Templates > Edit Preferences Form

Add the following code where you wish the preference to appear::

	</tr><tr><td class='tableCellOne' colspan='2'><div class='defaultBold'><input type='checkbox' name='accept_messages' value='y' {state:accept_messages} />  {lang:accept_messages}</div></td>

`Return to Update Page <forum_update.html>`_

`ExpressionEngine <http://expressionengine.com/>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_
