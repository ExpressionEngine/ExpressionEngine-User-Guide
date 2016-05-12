#########################
Standard Global Variables
#########################

These Global Variables can be used anywhere within your Templates. Note
that they are subject to ExpressionEngine's :doc:`parsing order
</templates/template_engine>`, which can affect their availability when
used inside other tags.

.. contents::
  :local:

Variables
=========

app\_build
----------

::

  {app_build}

The build date of ExpressionEngine that you are using.

app\_version
------------

::

  {app_version}

The version of ExpressionEngine that you are using (2.2.0, 2.3.0, etc.).

charset
-------

::

  {charset}

This variable will be substituted for the global character set (UTF-8).
It is typically used in your META tags to indicate the character
encoding::

  <meta http-equiv="Content-Type" content="text/html; charset={charset}" />

cp_session_id
-------------

::

  {cp_session_id}

The session id for the control panel. This is the value needed in the "S="
portion of the control panel URL. Only output for logged-in members who
have access to the Control Panel.  It is typically used for "Edit This"
style links::

  {if author_id == logged_in_member_id OR logged_in_group_id == "1"}&bull; <a href="{cp_url}?S=0&amp;D=cp&amp;C=content_publish&amp;M=entry_form&amp;channel_id={channel_id}&amp;entry_id={entry_id}">Edit This</a>{/if}

cp\_url
-------

::

  {cp_url}

The URL to the control panel for this site. Only output for logged-in
members who have access to the Control Panel.

.. _global_csrf_token:

csrf\_token
-----------

::

  {csrf_token}

This variable is a required value for the hidden form field 'csrf_token'.

current_path
------------

::

  {current_path}

This variable outputs the current URI path relative to your ExpressionEngine
installation, e.g. *news/article/man-captures-all-the-rabbits*.

.. note:: If there are no URL segments, this will output a slash: */*

.. _global_current_time:

current\_time
-------------

::

  {current_time}

This variable displays the current server time localized to each user's
particular setting. As with other date variables, you will use the
standard :doc:`date variable formatting
</templates/date_variable_formatting>`::

  {current_time format="%Y %m %d %H:%i:%s"}

.. note:: Unlike the rest of the Standard Global Variables,
  ``{current_time}`` is parsed very early on in the Template parser,
  which allows you to make dynamic use of it in your tags, for
  instance as a tag parameter, or in a conditional.

current_query_string
--------------------

::

  {current_query_string}

This variable displays the current security-filtered query string, which
can be useful to append to your path variables when you want a link to
retain the current query string, e.g.::

  gclid=1123581321

.. note:: This variable has already been URL encoded so all characters
  are transported safely and ready to append to URLs as needed.

.. _global_variable_current_url:

current_url
-----------

::

  {current_url}

This variable displays the full current URL.

debug\_mode
-----------

::

  {debug_mode}

This variable will be substituted with either "on" or "off" based on
your debug mode settings.

doc\_url
--------

::

  {doc_url}

This variable will be substituted with the URL found in **URL to
Documentation Directory** under :menuselection:`Settings --> URL and Path Settings`.

elapsed\_time
-------------

::

  {elapsed_time}

The amount of time, in seconds, it took ExpressionEngine to render the
current page.

embed
-----

::

  {embed='news/local'}

This variable allows you to embed one Template within another. Please
see the :doc:`Embedded Templates <../embedding>` section.

.. _global-encode:

encode
------

::

  {encode="you@example.com" title="Email Me!"}

This variable will encode the specified email address using javascript
and HTML entities to make it more difficult for spam harvesters to grab
an email address from your site. If you normally show your email address
on your site you are encouraged to use this variable. The title
parameter on the variable allows you to specify the text you want to use
for the link. ::

  Email Me!


gzip\_mode
----------

::

  {gzip_mode}

This variable will be substituted with either "on" or "off" based on
your output compression settings mode settings.

hits
----

::

  {hits}

This variable will be substituted with the number of hits that any given
template containing the variable has received.

homepage
--------

::

  {homepage}

This variable will be substituted with the **URL to the root directory of
your site** preference under :menuselection:`Settings --> URL and Path Settings`.

is_ajax_request
---------------

::

  {is_ajax_request}

Boolean (TRUE/FALSE) variable representing whether or not the template is being accessed via an Ajax request (XMLHttpRequest header). Most commonly this would be used to prevent direct access of template stubs used as content providers for Ajax, e.g.::

  {if ! is_ajax_request}
    {redirect="404"}
  {/if}

  {!-- ExpressionEngine tags below to define content to return --}

lang
----

::

  {lang}

This variable will be substituted for the **Default XML Language**
preference under :menuselection:`Settings --> General Settings`.

layout
------

::

  {layout="news/local"}

This variable allows you to wrap a Template in another. Please
see the :doc:`Template Layouts <../layouts>` section.

member\_group
-------------

::

  {member_group}

The Member Group ID number for the currently logged-in user.

member\_profile\_link
---------------------

::

  {member_profile_link}

This variable will be substituted with a link to the public profile page
for the currently logged in user. The text of the link will be the
member's screen name. For instance, the output might be::

  <a href="http://example.com/index.php/member/1/">Joe Smith</a>


password_max_length
-------------------

::

  {password_max_length}

This variable is used the ``maxlength`` property of password inputs on
login forms::

  <input type="password" name="password" maxlength="{password_max_length}" autocomplete='off' />

.. _global_redirect:

redirect
--------

::

  {redirect='news/local' status_code="301"}

This variable allows you redirect the visitor to another template.
Typically this will mean that you will be utilizing the tag within
conditionals. ::

  {if segment_3 != 'cookies'}   {redirect='bake/cookies'} {/if}

You can also use the redirect variable to provide tighter control of
your URLs, and trigger 404 pages in certain conditions. When you want to
display your 404 page, just use "404" for the template. For instance,
you might do this on a template group's 'index' template that you do not
wish to be displayed if an arbitrary second URL segment exists. ::

  {if segment_2 != ''}   {redirect="404"} {/if}

Be careful that through your redirect variables that you do not create
an infinite loop.

The ``status_code`` parameter lets you optionally pass a `3xx redirect
code
<http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#3xx_Redirection>`_
(e.g. 301, 302).

site\_description
-----------------

::

  {site_description}

Available to MSM sites only, this variable will be substituted with your site's description as defined under :menuselection:`Developer Tools --> Site Manager`.

site\_name
----------

::

  {site_name}

This variable will be substituted with your site name as defined under
:menuselection:`Settings --> General Settings`.

.. _global_site_url:

site\_url
---------

::

  {site_url}

This variable will be substituted with your site URL as defined under
:menuselection:`Settings --> URL and Path Settings`.

.. _global_template_edit_date:

template_name
-------------

This variable displays the name of the template currently being processed.::

  {template_name}

template_group
--------------

This variable displays the name of the template group for the template
currently being processed.::

  {template_group}

template_id
-----------

This variable displays the numeric ID of the template currently being processed.::

  {template_id}

template_type
-------------

This variable displays the :ref:`type <template-type>` of the template
currently being processed (e.g. "webpage", "rss", "xml", etc.).::

  {template_type}

template\_edit\_date
--------------------

This variable displays the localized time for when the template was last
updated. As with other date variables, you will use the standard
:doc:`date variable formatting </templates/date_variable_formatting>`::

  {template_edit_date format="%Y %m %d %H:%i:%s"}

theme\_folder\_url
------------------

::

  {theme_folder_url}

The URL to your theme folder.

total\_queries
--------------

::

  {total_queries}

The total number of database queries used to generate the current page.

webmaster\_email
----------------

::

  {webmaster_email}

  {encode="{webmaster_email}" title="Contact Us"}

The email address for the site, as specified in :doc:`Email
Configuration </cp/settings/email>`.


.. _member_variables:

Member Variables
================

logged\_in\_email
-----------------

::

  {logged_in_email}

The email address for the currently logged-in user.

logged\_in\_group\_description
------------------------------

::

  {logged_in_group_description}

The Member Group description for the currently logged-in user.

logged\_in\_group\_id
---------------------

::

  {logged_in_group_id}

The Member Group ID number for the currently logged-in user.

logged\_in\_group\_title
------------------------

::

  {logged_in_group_title}

The title of the member group for the currently logged-in user.

logged\_in\_ip\_address
-----------------------

::

  {logged_in_ip_address}

This variable will be substituted with the IP address of the currently
logged in user.

logged\_in\_location
--------------------

::

  {logged_in_location}

The location (as entered in their profile) for the currently logged-in
user.

logged\_in\_member\_id
----------------------

::

  {logged_in_member_id}

The Member ID for the currently logged-in user.

logged\_in\_private\_messages
-----------------------------

::

  {logged_in_private_messages}

The number of unread private messages for the currently logged-in user.

logged\_in\_screen\_name
------------------------

::

  {logged_in_screen_name}

The screen name for the currently logged-in user.

logged\_in\_total\_comments
---------------------------

::

  {logged_in_total_comments}

The total number of comments posted by the currently logged-in user.

logged\_in\_total\_entries
--------------------------

::

  {logged_in_total_entries}

The total number of entries posted by the currently logged-in user.

logged\_in\_total\_forum\_posts
-------------------------------

::

  {logged_in_total_forum_posts}

The total number of forum posts made by the currently logged-in user.

logged\_in\_total\_forum\_replies
---------------------------------

::

  {logged_in_total_forum_replies}

The total number of replies to forum posts by the currently logged-in user.

logged\_in\_total\_forum\_topics
--------------------------------

::

  {logged_in_total_forum_topics}

The total number of forum topics made by the currently logged-in user.

logged\_in\_username
--------------------

::

  {logged_in_username}

The username for the currently logged-in user.
