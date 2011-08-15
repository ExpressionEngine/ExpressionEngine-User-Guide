Emoticon Module
===============

.. contents::
   :local:

Introduction
------------

Smileys are graphical representations of commonly used "emoticons", such
as :-). When smileys are turned on, the system will display a small
graphic of a smiley-face instead of the emoticon text, like this:
|Smile|

Showing smileys with your comments
----------------------------------

In order to show a pop-up window containing smilies next to your comment
form you must do several things:

#. Create a template called "smilies" (or whatever you like).

#. In the template containing your comment form, add a link similar to this::

	<a href="#" onclick="window.open('{path='channel/smileys'}', '_blank', 'width=300,height=400')">Smilies</a>

Note the "path" variable.

#. In your new smiley template, add the following Javascript in your html head::

	<script type="text/javascript">
		function add_smiley(smiley) {
			opener.document.getElementById('comment_form').comment.value += " " + smiley + " ";
			window.close();
			opener.window.document.getElementById('comment_form').comment.focus();
		}
	</script>

Then, use the following code to create a table containing the smileys::

	<table border="0" width="100%" cellpadding="6" cellspacing="1">
		{exp:emoticon columns="4"}
			<tr class="row">
				<td class="red"><div>{smiley}</div></td>
			</tr>
		{/exp:emoticon}
	</table>

Note the "column" parameter in the emoticon tag. It allows you to
specify how many columns of smilies the table will show.

ExpressionEngine will then automatically populate the table with all of
the smiley images that you have in whatever directory you have specified
as your "smilies" directory in the :menuselection:`Admin --> System Administration --> Emoticon Preferences`
section of the Control Panel.

Creating or Modifying Emoticons
-------------------------------

Please see the Developer Documentation section on `Emoticon
Development <../../development/emoticons.html>`_.

.. |Smile| image:: ../../images/smile.gif
