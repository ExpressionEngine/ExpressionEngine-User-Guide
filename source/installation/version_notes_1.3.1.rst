Update Notes for Version 1.3.1
==============================

.. note:: You only need to perform this step if you have customized your
   member profile templates
   under :menuselection:`Admin --> Member Profile Templates`.

   If you have **not** customized them there are no additional steps to
   perform.

ExpressionEngine 1.3.1 adds a new option to the member profile areas of
EE. If You *Have* Customized Your Member Themes you will need to
manually add one new preference item to your profile area.

Go to :menuselection:`Admin --> Member Profile Templates --> Default --> Edit Preferences` and
add the following code where you wish the preference to appear::

	</tr><tr>
	<td class='tableCellOne' colspan='2'><div class='defaultBold'>
	<input type='checkbox' name='accept_messages' value='y' {state:accept_messages} />  {lang:accept_messages}
	</div>
	</td>
