Forum Update Notes for Version 3.1.14
=====================================

Discussion Forum 3.1.14 requires version 2.7.0 or greater of
ExpressionEngine.

A number of additions have been made to the forum themes.

If you have **not** customized your existing forum templates:
-------------------------------------------------------------

Simply replace your entire forum theme folder with the new set:

themes/forum\_themes/

The update process is now complete. You can disregard the rest of the
information in this page.

If you **have** customized your existing templates:
---------------------------------------------------

If you have customized the look of your forum you will need to manually
update your templates as described below.

Add New Reset Password File
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Add a new file named forum_member/reset_password_form.html file.  See the included
file for an example of the contents.


Add Secure Form Hidden Field
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Some forms need to have a hidden field added after the opening forum tag.  The
line you need to add should look like::

	<input type="hidden" name="XID" value="{XID_HASH}" />

Add this field after the opening form tag in the files listed below.  For
example::


	<form method="post" action="{path:update_notepad}">
	<input type="hidden" name="XID" value="{XID_HASH}" />

Files to edit:

- forum_member/edit_preferences.html
- forum_member/edit_profile_form.html
- forum_member/email_prefs_form.html
- forum_member/localization_form.html
- forum_member/message_compose.html
- forum_member/notepad_form.html
- forum_member/subscriptions_form.html
- forum_member/username_password_form.html


:doc:`Return to Update Page <forum_update>`

`ExpressionEngine <http://ellislab.com/expressionengine>`_ – Copyright ©
2002-2011 – `EllisLab, Inc. <http://ellislab.com/>`_