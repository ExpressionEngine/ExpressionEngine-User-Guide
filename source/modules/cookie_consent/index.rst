##############
Cookie Consent
##############

.. contents::
   :local:
   :depth: 2

************
Introduction
************

The Cookie Consent Module prevents ExpressionEngine cookies from being set unless 
the user has explicitly granted permission as indicated by the presence of a 
'cookies_allowed' cookie.  In the absence of such permission, any existing 
ExpressionEngine cookies will be automatically deleted and no further cookies 
set until permission is granted.  In addition, member registration and member 
login will require cookie consent.

The module makes two means of granting consent available: a direct link that can 
be used anywhere and form field that can be included on login and registration 
pages.  Removing permission to set cookies is also provided for via a link.

To access the Cookie Consent control panel, go to :menuselection:`Add-Ons --> 
Modules --> Cookie Consent` in your Control Panel. There you will be able control 
settings related to control panel login and cookie clearing behavior.
See :doc:`Cookie Consent control panel <control_panel/index>` for more
information.

**Note:** Installing this module will prevent cookies from being set by all first 
party ExpressionEngine code and any code that uses the Function class' set_cookie() 
method.  Cookies may still be set by third party code using PHP, JavasScript, third 
party scripts, etc. 


.. _installation:

************
Installation
************

The Cookie Consent Module is available as a `separate download  
<https://github.com/EllisLab/Cookie-Consent/archive/master.zip>`_. on `GitHub <https://github.com/EllisLab/Cookie-Consent>`_..  The module 
folder should be placed in your third_party folder (typically system/expressionengine/third_party/).  

.. _message-tag:

***********
Message tag
***********

This tag allows you to conditionally display messages based on whether the user 
has the cookies_allowed cookie set, thus indicating consent to set cookies.  
Typically you will show a link to grant cookie permission only to those who have 
not already granted consent.  You may also use the module to display a link to 
revoke cookie consent. ::

	{exp:cookie_consent:message}

		{if cookies_allowed == 'yes'}
			Thanks for allowing cookies!<br>
			Delete cookies: {clear_ee_cookies_link}
		{if:else}
			Please allow cookies:<br>
			{cookies_allowed_link}
		{/if}
	
	{/exp:cookie_consent:message}

Single Variables
================

.. contents::
   :local:

clear\_all\_cookies\_link
-------------------------

::

	{clear_all_cookies_link}

A link to disallow cookie setting using ExpressionEngine's native functions 
and clear all existing cookies for the site domain.

clear\_ee\_cookies\_link
------------------------

::

	{clear_ee_cookies_link}

A link to disallow cookies and clear existing ExpressionEngine cookies.
Only cookies with the cookie prefix specified in your configuration will be 
cleared (by default, that prefix is **exp_**).

cookies\_allowed
----------------

::

	{cookies_allowed}

Indicates whether the current user has consented to having cookies set or not.  
The only values are 'yes' or 'no'.  This variable will typically be used in a 
conditional.

cookies\_allowed\_link
----------------------

::

	{cookies_allowed_link}

A link to enable cookies.

.. _forms:

****************************
Login and Registration Forms
****************************

Cookie consent is required in order to login or register.  If consent has not 
been granted, an error message will be shown when a login or registration form 
is submitted.  In order to provide flexibility in how you gain consent, posting 
a form field named 'cookie_consent' with a value of 'y' will allow the consent 
cookie and all subsequent cookies to be set. 

::

	<input type='checkbox' name='cookie_consent' value='y'/>&nbsp;&nbsp;<span  class="alert">Allow Cookies</span>  

Typically this form field will be used inside the Cookie Consent Message tag 
and only shown if cookie consent has not been granted.  This applies to both 
regular ExpressionEngine templates and the Member Profile templates.

.. _forum:

***********************************
Cookie Consent and the Forum Module
***********************************

As with other login and registration forms, a 'cookie_consent' field with a 
value of 'y' can be used in the forum login and registration pages to indicate 
consent.  The Cookie Consent Message tag can be used in the 
forum_member/login_form.html and forum_member/registration_form.html to 
conditionally display the field.

You may also create a new forum theme page that may be included in other 
templates as needed to display cookie consent variables.  To add the new 
page, you must create a folder called 'forum_cookie_consent' inside your forum 
theme folder.  The theme page itself must be named 'cookie_consent.html'. 

The following single variables are available in this theme page:

::

	{clear_all_cookies_link}
	{clear_ee_cookies_link}
	{cookies_allowed_link}
	
The following conditional variables are available in this theme page:

::

	{if cookies_allowed}{/if}
	{if cookies_not_allowed}{/if}

The new template can be included in any other template using {include:cookie_consent}.

.. _cookie_list:

*********************************
Standard ExpressionEngine Cookies
*********************************

Basic Cookies
=============

tracker
-------

End of session.  Contains the last 5 pages viewed.  Typically used for form or 
error message returns.

last_visit
----------

1 year.  Date of the user's last visit.  Can be shown as a statistic for members 
and used by the forum to show unread topics for both members and guests.

last_activity
-------------

1 year.  Records the time of the last page load.  Used in conjunction with the 
last_visit cookie.

cookies_allowed
---------------

1 year.  Indicates whether the user has given consent for cookies to be set.

Comment Module Cookies
======================

notify_me
---------

1 year.  Indicates that a user wants email notification of new comments to an 
entry.

save_info
---------

1 year. Determines whether personal information should be stored in a cookie in 
order to pre-fill fields in the comment form.

my_name
-------

1 year.  The user's name, as entered in the comment form.

my_url
------

1 year.  The user's URL, as entered in the comment form.

my_email
--------

1 year.  The user's email address, as entered in the comment form.

my_location
-----------

1 year.  The user's location, as entered in the comment form.


Additional Logged In Cookies 
============================

perpage
-------

26 weeks.  Number of entries to show on the Content Edit page.

flash
-----

24 hours.  Control panel user feedback messages.

cp_last_site_id
---------------

End of session.  MSM cookie indicating the last site accessed in the control 
panel.

expiration*
-----------

1 year.
	
anon*
-----

1 year.  Determines whether the user's username is displayed in the list of 
currently logged in members.

remember*
---------
	
2 weeks.  Determines whether a user is automatically logged in upon visiting the site.


Forum Cookies
=============

forum_theme
-----------

1 year.  The user's chosen forum theme if changed from the default.

forum_topics
------------

1 year.  Read topics in the forum, used to display new topics for the user.

* Not set if using 'sessions only'

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	control_panel/index
