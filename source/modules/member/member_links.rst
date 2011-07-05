Member-Related Links
====================

This page describes how to create links that point to the various
member-related pages, enabling your visitors to sign-up for a membership
account, log-in, log-out, edit their profile, etc.

Log In
~~~~~~

This link points to the personal profile login page. To create the link,
use this variable::

	{path='member/login'}

Place the variable inside of a link tag::

	<a href="{path='member/login'}">Log In</a>

Log Out
~~~~~~~

This link allows users to log-out of the system. To create the link, use
this variable::

	{path='logout'}

Place the variable inside of a link tag::

	<a href="{path='logout'}">Log Out</a>

Registration Page
~~~~~~~~~~~~~~~~~

This link points to the member registration page. To create the link,
use this variable::

	{path='member/register'}

Place the variable inside of a link tag::

	<a href="{path='member/register'}">Register as a new member</a>

View Memberlist
~~~~~~~~~~~~~~~

This link points to the page showing a list of all registered members.
To create the link, use this variable::

	{path='member/memberlist'}

Place the variable inside of a link tag::

	<a href="{path='member/memberlist'}">View the Memberlist</a>

Member Profile Page
~~~~~~~~~~~~~~~~~~~

This link points to the personal profile page of the logged-in user,
allowing them to edit any of their settings. To create the link, use
this variable::

	{path='member/profile'}

Place the variable inside of a link tag::

	<a href="{path='member/profile'}">Edit your profile</a>

When the link is rendered it will appear similar to:
http://example.com/index.php/member/profile/

Forgotten Password?
~~~~~~~~~~~~~~~~~~~

This link points to the page where users can retrieve their password::

	{path='member/forgot_password'}

Place the variable inside of a link tag::

	<a href="{path='member/forgot_password'}">Forget your password?</a>

Member Navigation
-----------------

A good strategy for the above links is to use them within conditional
tags that let you present links based on whether someone is logged in or
not. Here's an example::

	{if logged_in}    <a href="{path='member/profile'}">Edit your profile</a>    <a href="{path='member/memberlist'}">View the Memberlist</a>    <a href="{path='logout'}">Log Out</a> {/if}  {if logged_out}    Are you a member?  If so, please <a href="{path='member/login'}">log-in</a>.    Not a member?  Please <a href="{path='member/register'}">register</a>.    Have you <a href="{path='member/forgot'}">forgotten your password</a>? {/if}
