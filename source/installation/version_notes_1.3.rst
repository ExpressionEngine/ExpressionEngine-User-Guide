Update Notes for Version 1.3
============================

Update your Member Profile Templates
------------------------------------

Due to the changes in how ExpressionEngine 1.3 deals with member
templates, the "member" Template Group is no longer necessary. After you
finish the update, you can log into your Control Panel, go to the
Templates tab, and *delete* the **member** template group

ExpressionEngine 1.3 has greatly changed the member profile section,
adding support for private messaging, avatars, signatures, etc., and the
structure of the templates has changed. Unfortunately, this means it is
not possible to retain any previous changes you might have made. Once
you complete the update to 1.3 you may update the new templates, which
can be accessed via Admin > Member Profile Templates.

Update your Statistics Tag
--------------------------

If you make use of the {exp:stats} EE Tag in your site then you may need
to make one small change. If you're using the {member\_names} variable
pair then you will need to change the path from "member/profile" to
"member/index". For instance, if you previously had this::

	{member_names}  <a href="{member_path='member/profile'}">{name}</a><br />  {/member_names}

You will need to alter it to this::

	{member_names}  <a href="{member_path='member/index'}">{name}</a><br />  {/member_names}
