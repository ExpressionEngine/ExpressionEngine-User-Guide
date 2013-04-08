#################
Member Management
#################

.. contents::
   :local:
   :depth: 2

************
Introduction
************

Many member management features are built-in to ExpressionEngine,
so unlike other modules, the Member Management module is
not managed from the Modules area of the Control Panel.

.. note:: The Member Module is available only with a `purchased <https://store.ellislab.com/>`_
   ExpressionEngine license.

You'll find many member management options available at:

- The :doc:`Members </cp/members/index>` section, which
  hosts a comprehensive suite of member management utilities
  including
  the :doc:`Membership Preferences </cp/members/membership_preferences>`
  page.
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
edit them via your Control Panel at :menuselection:`Design --> Themes
--> Member Profile Templates`

A good strategy is to make a copy of the entire **default** templates
folder, then edit your copy so you can leave the **default** files
intact. Set your new copy as the site default under :menuselection:`Members
--> Preferences --> Default Member Profile Theme`

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

.. contents::
   :local:

form_class=
-----------

::

	form_class="login"

This parameter allows you to specify the class attribute for the <form>
tag.

form_id=
--------

::

	form_id="login"

This parameter allows you to specify the id attribute for the <form>
tag.

form_name=
----------

::

	form_name="login"

This parameter allows you to specify a name attribute for the <form>
tag.

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

.. contents::
   :local:

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

.. _creating_member_links:

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


***********************
Custom Profile Data Tag
***********************

The Custom Profile Data Tag allows you to display member profile information
in your Templates. The data can either be shown from the currently logged-in user
or from a specified user using the member_id="" parameter.

.. note:: Remember that the profile information for the current visitor, such as
   {screen_name}, {location}, {email}, etc. are always available in any template
   as :doc:`Global Variables </templates/globals/index>`. Therefore, only use this
   tag if you need to show custom profile data (that is, Member Fields that you have
   created yourself) or information for a specific user.

Here is a basic example::

	{exp:member:custom_profile_data}
		<p>{age}, {gender}</p>
	{/exp:member:custom_profile_data}

.. important:: If you omit the member_id= parameter as in the above example,
   do *not* enable Template Caching on any Template containing this tag. Otherwise
   the data will not be dynamic and whoever happens to load the page when it is
   cached will have their information shown for everyone until the cache expires.
   Unlike this tag, :doc:`Global Variables </templates/globals/index>` *can* be
   used in templates that are cached.

Parameters
==========

.. contents::
	:local:

member_id=
----------

::

	member_id="147"

Specifies a particular member's information to display. By default
(if you do not include the member_id parameter), the tag will simply display
information pertaining to the currently logged-in user.

Variables
=========

.. contents::
	:local:

avatar_height
-------------

::

	{avatar_height}

The height of the avatar image associated with the user. Typically used as such::

	{if avatar}
		<img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
	{/if}

avatar_width
------------

::

	{avatar_width}

The width of the avatar image associated with the user. Typically used as such::

	{if avatar}
		<img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
	{/if}

avatar_url
----------

::

	{avatar_url}

The URL to the avatar image associated with the user. Typically used as such::

	{if avatar}
		<img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar">
	{/if}

bio
---

::

	{bio}

The user's biography.

birthday
--------

::

	{birthday}

The user's birthday.

email
-----

::

	{email}

The user's Javascript-encoded email address.

group_id
--------

::

	{group_id}

The user's Group ID.

join_date
---------

::

	{join_date format="%Y %m %d"}

The date the user joined the site.

language
--------

::

	{language}

The user's language.

location
--------

::

	{location}

The location (as entered in their profile) of the user.

last_activity
-------------

::


	{last_activity format="%Y %m %d"}

The time of the user's last page load.

last_comment_date
-----------------

::

	{last_comment_date format="%Y %m %d"}

The date of the user's last comment.

last_entry_date
---------------

::

	{last_entry_date format="%Y %m %d"}

The date of the user's last channel entry.

last_forum_post_date
--------------------

::

	{last_forum_post_date format="%Y %m %d"}

The date of the user's last forum post.

last_visit
----------

::

	{last_visit format="%Y %m %d"}

The date when the user was last active on the site PRIOR to their current session.

local_time
----------

::

	{local_time format="%Y %m %d"}

The user's local time.

member_group
------------

::

	{member_group}

The user's member group.

member_id
---------

::

	{member_id}

The user's Member ID.

photo_height
------------

::

	{photo_height}

The height of the photo image associated with the user. Typically used as such::

	{if photo}
		<img src="{photo_url}" width="{photo_width}" height="{photo_height}" alt="{screen_name}'s photo">
	{/if}

photo_width
-----------

::

	{photo_width}

The width of the photo image associated with the user. Typically used as such::

	{if photo}
		<img src="{photo_url}" width="{photo_width}" height="{photo_height}" alt="{screen_name}'s photo">
	{/if}

photo_url
---------

::

	{photo_url}

The URL to the photo image associated with the user. Typically used as such::

	{if photo}
		<img src="{photo_url}" width="{photo_width}" height="{photo_height}" alt="{screen_name}'s photo">
	{/if}


screen_name
-----------

::

	{screen_name}

The user's screen name.

search_path
-----------

::

	{search_path}

The search path to show entries and posts by this user::

	<a href="{search_path}">View Entries by User</a>

send_private_message
--------------------

::

	{send_private_message}

The URL to send a Private Message to this user::

	<a href="{send_private_message}">Send Private Message to {screen_name}.</a>

signature
---------

::

	{signature}

The user's signature.

timezone
--------

::

	{timezone}

The user's timezone.

total_comments
--------------

::

	{total_comments}

The total number of comments made by the user.

total_entries
-------------

::

	{total_entries}

The total number of entries made by the user.

total_forum_posts
-----------------

::

	{total_forum_posts}

The total number of forum posts made by the user.

total_forum_topics
------------------

::

	{total_forum_topics}

The total number of forum topics made by the user.

url
---

::

	{url}

The user's URL.

username
--------

::

	{username}

The user's username.

Other Member Fields
-------------------

All other member fields that you created can be accessed using the Short Name of the field::

	{age}
	{gender}
	{zodiac}
	etc..


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
   Unlike this tag, :doc:`Global Variables </templates/globals/index>` 
   can be used in templates that are cached.

Here is the basic tag syntax::

	{exp:member:ignore_list}
		<p>{ignore_screen_name}</p>
	{/exp:member:ignore_list}

Parameters
==========

.. contents::
   :local:

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
