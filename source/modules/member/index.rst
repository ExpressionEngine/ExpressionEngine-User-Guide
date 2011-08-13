########################
Member Management Module
########################

.. contents::
   :local:

************
Introduction
************

Many member management features are built-in to ExpressionEngine,
so unlike other modules, the Member Management module is
not managed from the Modules area of the Control Panel.

.. note:: The Member Module is available only with the purchase of a Non-Commercial or
   Commercial license.

You'll find many member management options available at:

- The `Members <../../cp/members/index.html>`_ section, which
  hosts a comprehensive suite of member management utilities
  including the `Membership Preferences <../../cp/members/membership_preferences.html>`_ page.
- The My Account Page, accessible from the Control Panel's sidebar.
  It can also display information for any member if you choose a
  particular member from :menuselection:`Members --> View All`.
- The public side of your website also has a Member Profile area, enabling
  your site members to manage their personal profile information without
  having access to your Control Panel. Typically, this Member Profile area
  is found at::

	http://example.com/index.php/member/profile/

************************
Member Profile Templates
************************

The public profile area has its own set of templates which can be edited
to change the look. You'll find the templates located at::

	themes/profile_themes/default

These templates can be edited with a text editor, or you may choose to
edit them via your Control Panel at :menuselection:`Design --> Themes --> Member Profile Templates`

A good strategy is to make a copy of the entire **default** templates
folder, then edit your copy so you can leave the **default** files intact.
Set your new copy as the site default at :menuselection:`Members --> Preferences --> Default Member Profile Theme`

**************
Login Form Tag
**************

The Login Form Tag allows you to place a login form in any
template you choose, so that site members can log in.

.. note:: The Member Profile Templates described above also contain a login form, which appears
   when someone who is not logged in tries to access a member-only area.

Here is how you might use the tag::

	{exp:member:login_form return="site/index"}
		<p>
			<label>Username</label><br>
			<input type="text" name="username" value="" maxlength="32" size="25">
		</p>
		<p>
			<label>Password</label><br>
			<input type="password" name="password" value="" maxlength="32" size="25">
		</p>
		{if auto_login}
			<p><input type="checkbox" name="auto_login" value="1"> Auto-login on future visits</p>
		{/if}
		
		<p><input type="checkbox" name="anon" value="1" checked="checked"> Show my name in the online users list</p>
		<p><input type="submit" name="submit" value="Submit"></p>
		<p><a href="{path='member/forgot_password'}">Forgot your password?</a></p>
	{/exp:member:login_form}

Parameters
==========

id=
---

::

	id="login_form"

This parameter allows you to specify the id attribute for the <form>
tag:

name=
-----

::

	name="login_form"

This parameter allows you to specify a name attribute for the <form>
tag:

return=
-------

::

	return="site/index"

This parameter allows you to define where the user will be returned
after successfully logging in. The parameter can be defined in two ways:

#. Use the standard Template\_Group/Template syntax to specify where to
   return the user. For instance, if you want the user to be returned to
   the "local" Template in the "news" Template Group, you would use:
   return="news/local"
#. Use a full URL. For example: return="http://example.com/return.html"

Variables
=========

{if auto\_login}
----------------

::

	{if auto_login} {/if}

It is recommended that you use this variable as indicated in the example
code at the top. This conditional will display the contents inside
(typically the "stay logged in" checkbox) based on how your session
preference is set. In order for this feature to work you must be set to
use "cookies only" and not sessions.::

	{if auto_login}
		<p><input class="checkbox" type="checkbox" name="auto_login" value="1"> Auto-login on future visits</p>
	{/if}

*********************
Creating Member Links
*********************

You can create links that point to various
member-related pages, enable visitors to sign-up for an
account, log-in, log-out, edit their profile, etc.

Log In
======

This link points to the personal profile login page. To create the link,
use this variable::

	{path='member/login'}

Place the variable inside of a link tag::

	<a href="{path='member/login'}">Log In</a>

Log Out
=======

This link allows users to log-out of the system. To create the link, use
this variable::

	{path='logout'}

Place the variable inside of a link tag::

	<a href="{path='logout'}">Log Out</a>

Registration Page
=================

This link points to the member registration page. To create the link,
use this variable::

	{path='member/register'}

Place the variable inside of a link tag::

	<a href="{path='member/register'}">Register as a new member</a>

View Memberlist
===============

This link points to the page showing a list of all registered members.
To create the link, use this variable::

	{path='member/memberlist'}

Place the variable inside of a link tag::

	<a href="{path='member/memberlist'}">View the Memberlist</a>

Member Profile Page
===================

This link points to the personal profile page of the logged-in user,
allowing them to edit any of their settings. To create the link, use
this variable::

	{path='member/profile'}

Place the variable inside of a link tag::

	<a href="{path='member/profile'}">Edit your profile</a>

When the link is rendered it will appear similar to:
http://example.com/index.php/member/profile/

Forgotten Password?
===================

This link points to the page where users can retrieve their password::

	{path='member/forgot_password'}

Place the variable inside of a link tag::

	<a href="{path='member/forgot_password'}">Forget your password?</a>

Member Navigation
=================

A good strategy for the above links is to use them within conditional
tags that let you present links based on whether someone is logged in or
not. Here's an example::

	{if logged_in}
		<a href="{path='member/profile'}">Edit your profile</a><br>
		<a href="{path='member/memberlist'}">View the Memberlist</a><br>
		<a href="{path='logout'}">Log Out</a>
	{/if}
	{if logged_out}
		Are you a member? Please <a href="{path='member/login'}">log-in</a>.<br>
		Not a member? <a href="{path='member/register'}">Register</a>.<br>
		Have you <a href="{path='member/forgot'}">forgotten your password</a>?
	{/if}

***************
Ignore List Tag
***************

The Ignore List Tag allows you to display member profile information for
members in a member's Ignore List. Fields can either be shown from the
ignore list of currently logged-in user or from a specified user.

.. important:: Avoid using Template Caching on any Template containing
   this tag. If you do not avoid caching, then data will not be dynamic for
   each user. Instead, whoever happens to load the page when it is cached
   will have their information shown for everyone until the cache expires.
   Unlike this tag, `Global
   Variables <../../templates/globals/index.html>`_ can be used in
   templates that are cached.

Here is the basic tag syntax::

	{exp:member:ignore_list}
		<p>{ignore_screen_name}</p>
	{/exp:member:ignore_list}

Parameters
==========

member\_id=
-----------

::

	member_id="147"

You can specify a particular member's information to display. By default
(if you do not include the member\_id parameter), the tag will simply
display information pertaining to the currently logged-in user.

Variables
=========

The following member variables are available. The unique prefix
"ignore\_" ensures that the Ignore List variables do not conflict with
Global Variables or member variables from other tags.

-  {ignore\_member\_id}
-  {ignore\_group\_id}
-  {ignore\_group\_description}
-  {ignore\_username}
-  {ignore\_screen\_name}
-  {ignore\_email}
-  {ignore\_ip\_address}
-  {ignore\_location}
-  {ignore\_total\_entries}
-  {ignore\_total\_comments}
-  {ignore\_private\_messages}
-  {ignore\_total\_forum\_topics}
-  {ignore\_total\_forum\_replies}
-  {ignore\_total\_forum\_posts}
