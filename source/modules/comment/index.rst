#######
Comment
#######

.. contents::
	:local:
	:depth: 2

************
Introduction
************

The Comment Module allows you to show user-submitted comments on your site.
Comments can be managed via the Comment Module Control Panel, and users can 
edit their own comments via AJAX on the front-end of your site. In addition,
the comment module supports `Comment Pagination <../channel/pagination_page.html>`_. 


*******************
Comment Entries Tag
*******************

The Comment Entries Tag enables you to show the user-submitted comments
associated with your entries.

.. note:: The Comment Entries Tag is intended for use in one of your
   "single entry" pages. That is, a page that shows a single, specific
   channel entry. Therefore, your Comment page must be linked to from
   within your Channel entries using the :ref:`channel-entries-url_title_path` 
   variable or the :ref:`channel-entries-entry_id_path` variable,
   so that the comments can be associated to a specific entry.

Here is a basic example showing how you might use the comment tag::

	{exp:comment:entries sort="asc" limit="20"}
		{comment}
		<p>By {name} on {comment_date format="%Y %m %d"}</p>
	{/exp:comment:entries}

.. important:: The Comment Entries tag should **not** be
   nested inside of a standard {exp:channel:entries} tag.


Parameters
==========

.. contents::
	:local:
	:depth: 2

dynamic=
--------

::

	dynamic="no"

The channel and comment display engines set some parameters dynamically,
based on what is in the URL. There are times, however, where you do not
want the parameters affected by what the URL contains. To override the
dynamic nature of the comment tag, use dynamic="no".

This is often useful if you want to list comments in a "sidebar" on your
site and have them always be the same ones regardless of which page on
your site you visit (main page, archives, comments, etc.). Using this,
you can create a "recent comments" list. By setting dynamic="no" you
will ensure that the list is not affected by anything passed in the URL.

When dynamic is set to 'no', pagination will still function using an 'N'
as a pagination indicator in the url rather than the standard 'P'
indicator.

entry\_id=
----------

::

	entry_id="24"

You can hard code the comment entries tag to show comments for a
specific channel entry by its entry ID. You may also specify comments
from multiple entries by separating them with the pipe character::

	entry_id="13|42|147" Or use "not" to exclude entries::

	entry_id="not 45|534|807"

**Note:** This parameter takes precedence over any entry specified
dynamically in the URL, so when using this parameter you will want to
make sure it is clear to the user which entry the displayed comments
belong to.

comment\_id=
------------

::

	comment_id="22"

You can hard code the comment entries tag to show specific comments. As
with the entry\_id parameter, you may also specify multiple comments by
separating them with the pipe character. This parameter takes precedence
over any entry specified in the url.

limit=
------

::

	limit="30"

Allows you to limit the number of comments. The limit will default to
100 comments if a value is not specified. If you are using
:doc:`pagination <../channel/pagination_page>` then this
will determine the number of comments shown per page.

.. _comment-entries-orderby:

orderby=
--------

::

	orderby="date"

The "order" parameter sets the display order of the comments. Setting
options for this parameter include:

-  orderby="date"
-  orderby="email"
-  orderby="location"
-  orderby="name"
-  orderby="url"
-  orderby="random"

paginate=
---------

::

	paginate="top" ``paginate="bottom"`` ``paginate="both"``

This parameter is for use with entry
:doc:`pagination <../channel/pagination_page>` and determines where the
pagination code will appear for your comments:

#. **top**: The navigation text and links will appear *above* your list
   of comments.
#. **bottom**: The navigation text and links will appear *below* your
   list of comments.
#. **both**: The navigation text and links will appear both above and
   below your list of comments.

If no parameter is specified, the navigation block will default to the
"bottom" behavior.

paginate\_base=
---------------

::

	paginate_base="site/index"

This tells ExpressionEngine to override the normal
:doc:`pagination <../channel/pagination_page>` link locations and point
instead to the explicitly stated template group and template.

show\_expired=
--------------

::

	show_expired="yes"

You can determine whether you wish for comments on "expired" entries to
be included.

sort=
-----

::

	sort="asc" ``sort="desc"``

The sort order can be "asc" (ascending order or "oldest item first" for
dates) or "desc" (descending order or "newest item first" for dates). If
you do not use a sort order the default is desc.

url\_title=
-----------

::

	url_title="my_wedding"

You can hard code the comment entries tag to show comments for a
specific channel entry by its URL title.

**Note:** This parameter takes precedence over any entry specified
dynamically in the URL, so when using this parameter you will want to
make sure it is clear to the user which entry the displayed comments
belong to.

channel=
--------

::

	channel="which"

From which
`channel <../../cp/admin/channels/channel_management.html>`_ to
show the comments (will show comments from any channel if no channel is
specified). Additionally, you can use the pipe character to separate
multiple channels::

	channel="channel1|channel2|channel3"

Or you can add the word "not" (with a space after it) to exclude
channels::

	channel="not channel1|channel2|channel3"

The channel= parameter can have some security implications. If you do
**not** use this parameter then it is possible that people could see
comments for a channel entry that they otherwise would not have access
to. If you use multiple channels and want to make sure only certain
people can see certain content, then you're encouraged to make use of
this parameter.

entry\_status=
--------------

::

	entry_status="Featured"

status=
-------

::

	status="Closed"

author\_id=
-----------

::

	author_id="5"

Variables
=========

.. contents::
	:local:
	:depth: 2

absolute\_count
---------------

::

	{absolute_count}

The absolute "count" out of the current comment being displayed by the
tag, including those comments on previous pages (if using pagination).

If five entries are being displayed per page, then for the fourth entry
on the second page the {absolute\_count} variable would have a value of
"9".

author
------

::

	{author}

The comment author's screen name, if a member; otherwise, this variable
will display the name submitted with the comment. ::

	<a href="http://example.com/index.php/member/{author_id}/">{author}</a>

author\_id
----------

::

	{author_id}

The ID corresponding to the comment author's member profile. This is
only applicable if the comment was left by a registered member.
Non-registered commenters will return a zero (0).

This can be useful for creating links to the commenter's member profile::

	<a href="http://example.com/index.php/member/{author_id}/">{name}</a>

aol\_im
-------

::

	{aol_im}

The author's AOL IM account name

avatar\_image\_height
---------------------

::

	{avatar_image_height}

The height of the avatar image associated with the entry's author.
Typically used as such::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

avatar\_image\_width
--------------------

::

	{avatar_image_width}

The width of the avatar image associated with the entry's author.
Typically used as such::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

avatar\_url
-----------

::

	{avatar_url}

The URL to the avatar image associated with the entry's author.
Typically used as such::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

can\_moderate\_comment
----------------------

::

	{if can_moderate_comment}

This variable will be used in a conditional to allow :ref:`comment
editing <comment-editing>`. It indicates whether a member has
permission to edit a given comment AND/OR close that comment.

channel\_title
--------------

::

	{channel_title}

This variable simply displays the content from the "Full Channel Name"
setting of the channel that the comment belongs to.

comment
-------

::

	{comment}

The body of the comment

comment\_stripped
-----------------

::

	{comment_stripped}

The body of the comment without any typographical processing and with
ExpressionEngine tags encoded. This tag is for use in :ref:`comment
editing <comment-editing>`.

comment\_auto\_path
-------------------

::

	{comment_auto_path}

This variable is replaced by the URL set in the **Comment Page URL**
preference under :menuselection:`Admin --> Channel Management`. No entry
id, URL Title, or other information is included; this is simply the
exact URL from the preference.

comment\_date
-------------

::

	{comment_date format="%Y %m %d"}

The date of the comment. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for more information.


comment\_entry\_id\_auto\_path
------------------------------

::

	{comment_entry_id_auto_path}

This variable is replaced by the URL set in the **Comment Page URL**
preference under :menuselection:`Admin --> Channel Management`. The ID
number of the entry will be automatically added. For example, this::

	<a href="{comment_entry_id_auto_path}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/234/">my entry</a>

comment\_id
-----------

::

	{comment_id}

The ID associated with the comment

comment\_site\_id
-----------------

::

	{comment_site_id}

The Site ID for the comment.

comment\_url\_title\_auto\_path
-------------------------------

::

	{comment_url_title_auto_path}

This variable is replaced by the URL set in the **Comment Page URL**
preference under :menuselection:`Admin --> Channel Management`. The URL
Title of the entry will be automatically added. For example, this::

	<a href="{comment_url_title_auto_path}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/ice_cream/">my entry</a>

count
-----

::

	{count}

The "count" out of the current comment being displayed by the tag on the
current page.

If five entries are being displayed per page, then for the fourth entry
on the page the {count} variable would have a value of "4".

editable
--------

::

	{if editable}Show Edit{/if}

This variable will be used in a conditional to allow :ref:`comment
editing <comment-editing>`. It indicates whether a member has
permission to edit a given comment.

edit\_date
----------

::

	{edit_date format="%Y %m %d"}

The date on which the comment was edited. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for more information.

email
-----

::

	{email}

The comment author's email address, if specified.


entry\_author\_id
-----------------

::

	{entry_author_id}

The member ID for the creator of the entry whose comments are being
displayed.

entry\_id
---------

::

	{entry_id}

The ID number of the entry

entry\_id\_path
---------------

::

	{entry_id_path='channel/comments'}

The URL to the specified template. The ID number of the entry with which
the comment is associated will be automatically added. For example,
this::

	<a href="{entry_id_path='channel/comments'}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/234/">my entry</a>

gmt\_comment\_date
------------------

::

	{gmt_comment_date format="%Y %m %d"}

The date of the comment but **not** localized for the user. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for more information.

icq
---

::

	{icq}

The author's ICQ IM user identification number

interests
---------

::

	{interests}

The author's "interests" as entered in their profile

ip\_address
-----------

::

	{ip_address}

The IP address of the commenter

location
--------

::

	{location}

The commenter's location as entered in their profile

group\_id
---------

::

	{group_id}

The commenter's member group id (0 for non-members)

member\_search\_path
--------------------

::

	{member_search_path='search/results'}

This variable is replaced by a URL that passes the author's member name
to your search results Template. In this way, you can display all
entries made by the author. You should specify the
Template\_Group/Template that you use to display search results. For
example::

	<a href="{member_search_path='search/results'}">View entries by this member</a>

msn\_im
-------

::

	{msn_im}

The author's MSN IM account name

occupation
----------

::

	{occupation}

The author's occupation as entered in their profile

name
----

::

	{name}

Name of the author

paginate=
---------

::

	paginate="top" ``paginate="bottom"`` ``paginate="both"``

This parameter is for use with entry
:doc:`pagination <../channel/pagination_page>` and
determines where the pagination code will appear for your entries:

#. **top**: The navigation text and links will appear *above* your list
   of entries.
#. **bottom**: The navigation text and links will appear *below* your
   list of entries.
#. **both**: The navigation text and links will appear both above and
   below your list of entries.

If no parameter is specified, the navigation block will default to the
"bottom" behavior.

permalink
---------

::

	{permalink}

The URL to the actual comment with anchor. Put this variable in a link::

	<a href="{permalink}">permanent link</a>

photo\_url
----------

::

	{photo_url}

This variable supplies the URL to the member photo (if you have that
option enabled and the member has uploaded their photo). It is intended
for use in an image tag.

photo\_image\_height
--------------------

::

	{photo_image_height}

This variable supplies the height of the member photo. It is intended
for use in an image tag.

photo\_image\_width
-------------------

::

	{photo_image_width}

This variable supplies the width of the member photo. It is intended for
use in an image tag.

signature
---------

::

	{signature}

The signature associated with the entry's author. Typically used as
such::

	{if signature} <p>{signature}</p> {/if}

signature\_image\_height
------------------------

::

	{signature_image_height}

The height of the signature image associated with the entry's author.
Typically used as such::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

signature\_image\_url
---------------------

::

	{signature_image_url}

The URL to the signature image associated with the entry's author.
Typically used as such::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

signature\_image\_width
-----------------------

::

	{signature_image_width}

The width of the signature image associated with the entry's author.
Typically used as such::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

switch=
-------

::

	{switch="option_one|option_two|option_three"}

This variable permits you to rotate through any number of values as the
entries are displayed. The first entry will use "option\_one", the
second will use "option\_two", the third "option\_three", the fourth
"option\_one", and so on.

The most straightforward use for this would be to alternate colors. It
could be used like so::

	{exp:comment:entries} <div class="{switch="one|two"}"> <h1>{name}</h1> {comment} </div> {/exp:comment:entries}

The entries would then alternate between <div class="one"> and <div
class="two">.

Multiple instances of the {switch=} tag may be used and the system will
intelligently keep track of each one.

title
-----

::

	{title}

The title of the channel entry with which the comment is associated.

total\_results
--------------

::

	{total_results}

The total number of comments being displayed by this tag on the current
page.

total\_comments
---------------

::

	{total_comments}

The total number of comments for this tag on all pages.

url
---

::

	{url}

The author's raw URL, if it exists

url\_as\_author
---------------

::

	{url_as_author}

Hyperlink pointing to the URL (if it exists) with the author name as the
link title. If the URL does not exist simply the name is returned.

url\_or\_email
--------------

::

	{url_or_email}

URL if it exists, otherwise the email address

url\_or\_email\_as\_author
--------------------------

::

	{url_or_email_as_author}

Hyperlink or email link as author screen\_name (or username if they
haven't specified a screen name)

url\_or\_email\_as\_link
------------------------

::

	{url_or_email_as_link}

Same as above only it will display the URL or email address as a link

url\_title\_path
----------------

::

	{url_title_path='channel/comments'}

The URL to the specified template. The "url title" of the entry with
which the comment is associated will be automatically added. For
example, this::

	<a href="{url_title_path='channel/comments'}">permalink</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/ice_cream/">permalink</a>

username
--------

::

	{username}

The author's username (returns FALSE for non-members)

channel\_id
-----------

::

	{channel_id}

The ID number of the actual channel

yahoo\_im
---------

::

	{yahoo_im}

The author's Yahoo IM account name

Custom Member Fields
====================

All custom member profile fields can be accessed using the "short name"
of the field::

	{age} {gender} {zodiac} etc..

These are totally dynamic in that any profile field you create for your
members will automatically be available by its "short name" as a
variable.


Conditionals
============

Conditionals work in comments::

	{if name=="bozo"}  You've got a big nose!  {/if}

if avatar
---------

::

	{if avatar} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has an avatar image specified. ::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

if is\_ignored
--------------

::

	{if is_ignored} content {/if}

This conditionals allows you to show (or hide) specific content if the
comment was made by a member on the logged-in user's ignore list. A
simplified example of how this might be used is::

	{exp:comment:entries}
		{if is_ignored}You are ignoring {author}.{/if}
		<div {if is_ignored}style="display: none;"{/if}>{comment}</div>
	{/exp:comment:entries}

Or you can use Javascript to allow the user to read the comment if they
wish::

	<script type="text/javascript">
		function showHideComment(el) {
		    if (document.getElementById(el).style.display == "block") {
		        document.getElementById(el).style.display = "none";
		    }
		    else {
		        document.getElementById(el).style.display = "block";
		    }	
		}
	</script>

	{exp:comment:entries}
		{if is_ignored}
		    <p><a href="#" onclick="showHideComment('{comment_id}')">View / Hide</a> comment from ignored member: {author}</p>
		{/if}
	
		<div id="{comment_id}" {if is_ignored}style="display: none;"{/if}>{comment}</div>
	{/exp:comment:entries}
	
.. important:: Avoid using Template Caching on any Template containing
   this conditional. If you do not avoid caching, then data will not be
   dynamic for each user. Instead, whoever happens to load the page when it
   is cached will have their ignore list applied to everyone until the
   cache expires.

if no\_results
--------------

::

	{if no_results} content {/if}

You may use this conditional for displaying a message in the case when
no comments are returned. The contents inside of the conditional will be
displayed in cases where there are no results returned for the tag. ::

	{if no_results}  <p>There are no comments for this entry yet.</p>  {/if}

Further, you may specify that another Template be shown in a case when
there are no results. In order to do that, you must use the redirect=
variable::

	{if no_results} {redirect="site/noresult"} {/if}

if signature\_image
-------------------

::

	{if signature_image} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has a signature image specified. ::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}


******************************
Comment Notification Links Tag
******************************

The {exp:comment:notification\_links} tag can be to allow members to
subscribe to an entry without commenting via a simple link. This tag may only be used on a single entry page. ::

	{exp:comment:notification_links}
		{if subscribed}
			<h5><a href="{unsubscribe_link}">Unsubscribe to comment notification for this entry.</a></h5>
		{if:else}
			<h5><a href="{subscribe_link}">Subscribe to comment notification for this entry.</a></h5>
		{/if}
	{/exp:comment:notification_links}

Comment notification links will only show on a single-entry pages, such
as "comment" pages.

.. note:: Only logged in members may subscribe without commenting. The
   tag will return nothing for non-logged in members.


**************************
Displaying Recent Comments
**************************

The standard ExpressionEngine {exp:comment:entries} comment tag can be
used to display a list of recent comments. Many people use a list like
this in a sidebar of their site.

A simple example::

	{exp:comment:entries sort="desc" orderby="date" limit="10" dynamic="no"}
		{comment}
		<p>
			By {name} on {comment_date format="%Y %m %d"}<br>
			From the entry '<a href="{comment_url_title_auto_path}">{title}</a>'.
		</p>
	{/exp:comment:entries}

It is very important that the dynamic="no" parameter be included above.
This is what allows ExpressionEngine to display the comments independent
of a particular entry. Also note that you can use a number of values for
the `comment-entries-orderby` parameter.


.. _comment-submission-form:

***********************
Comment Submission Form
***********************

The comment submission form is created very similar to a standard web form, only
you don't specify the opening and closing form tags. There are a few
variables that are required in order to enable people's personal
information (name, email, url, etc.) to appear in the form. Here's how
the comment form is typically created::

	{exp:comment:form channel="news" preview="channel/preview"}
			
		{if logged_out}
			<label for="name">Name:</label> <input type="text" name="name" value="{name}" size="50" /><br /> 
			<label for="email">Email:</label> <input type="text" name="email" value="{email}" size="50" /><br /> 
			<label for="location">Location:</label> <input type="text" name="location" value="{location}" size="50" /><br /> 
			<label for="url">URL:</label> <input type="text" name="url" value="{url}" size="50" /><br /> 
		{/if}
		
		<label for="comment">Comment:</label><br /> 
		<textarea name="comment" cols="70" rows="10">{comment}</textarea>
		<label><input type="checkbox" name="save_info" value="yes" {save_info} /> Remember my personal information</label><br /> 
		<label><input type="checkbox" name="notify_me" value="yes" {notify_me} /> Notify me of follow-up comments?</label><br /> 
		
		{if captcha}
			<label for="captcha">Please enter the word you see in the image below:</label><br /> 
			<p>{captcha}<br />
			<input type="text" name="captcha" value="{captcha_word}" maxlength="20" /></p>
		{/if}
		
		<input type="submit" name="submit" value="Submit" />
		<input type="submit" name="preview" value="Preview" />
		
	{/exp:comment:form}

This form should be placed on a "single-entry" type page such as a
comments page, of course.

.. tip:: Notice the variables in the "value" form fields? These allow us to show
   the user's information in the form automatically if they click the
   "remember personal info" option.


Parameters
==========

.. contents::
	:local:

entry\_id=
----------

::

	entry_id="24"

You can hard code the comment form tag to display a comment form for a
specific channel entry by its entry ID.

**Note:** This parameter takes precedence over any entry specified
dynamically in the URL, so when using this parameter you will want to
make sure it is clear to the user which entry the displayed comment form
belongs to.

preview=
--------

::

	preview="channel/preview"

This is a **required** parameter if you are using comment previews
indicating which template should be used for comment previews. Like
other "path" variables in ExpressionEngine you will use the Template
Group/Template name. More on previewing can be found in the `Comment
Previewing`_ section.

url\_title=
-----------

::

	url_title="my_wedding"

You can hard code the comment for tag to display a comment form for a
specific channel entry by its URL title.

**Note:** This parameter takes precedence over any entry specified
dynamically in the URL, so when using this parameter you will want to
make sure it is clear to the user which entry the displayed comment form
belong to.

channel=
--------

::

	channel="news"

With this parameter you can specify exactly which channel you want the
submitted comment associated to. This is an important, but optional,
parameter.

If you link to your comment form page using the entry's URL Title, then
you are **strongly encouraged** to include this parameter in your tag.

Because you can have the same URL Title in different channels, using
this parameter will ensure that the comment submitted will be associated
with the correct entry. Without this parameter, it is possible that the
comment could be associated with an entry in a different channel that
happens to have the same URL Title.

form\_class=
------------

::

	form_class="news_comment_form"

With this parameter, you can specify the css class you want the form to
have, enabling fine-grained styling of the comment form.

form\_id=
---------

::

	form_id="news_comment_form"

With this parameter, you can specify the css id you want the form to
have. The default value is 'comment\_form'

return=
-------

::

	return="template_group/template/url_title"

This parameter allows you to define where the user will be returned
after submitting a comment. The parameter can be defined in two ways:

#. Use the standard Template\_Group/Template syntax to specify where to
   return the user. For instance, if you want the user to be returned to
   the "local" Template in the "news" Template Group, you would use:
   return="news/local"
#. Use a full URL. For example: return="http://example.com/return.html"

If this parameter is not defined, they will be returned to the form
page.


Conditionals
============

.. contents::
	:local:

logged\_out
-----------

::

	{if logged_out}

The conditional variable {if logged\_out} allows the system to show the
short form (textarea only) if the user is a logged in member. We
recommend you use the form this way because if a member is logged in,
their personal data is fetched automatically.

captcha
-------

::

	{if captcha}

As noted in the `captcha
section <../../general/captchas.html#thecode>`_, the contents of the
conditional ({if captcha}) tag will only appear if you have the CAPTCHA
preference turned on for comments in the channel the entry is associated
with.

comments\_expired
-----------------

::

	{if comments_expired}

If commenting has expired (and expiration is not set to be `overridden
by moderation <control_panel/index.html#settings>`_), the contents of
this conditional will replace all other tag contents.

comments\_disabled
------------------

::

	{if comments_disabled}

If commenting has been disabled, the contents of this conditional will
replace all other tag contents.


******************
Comment Previewing
******************

To preview a comment requires that you create a specific Template for
it. This Template will contain at minimum two tags. The first is the tag
that shows the preview::

	{exp:comment:preview}
		{comment}
	{/exp:comment:preview}

The second is the `Comment Submission Form`_ tag. This
allows the comment to be displayed as well as the form containing the
info so it can be previewed again or submitted.

Variables
=========

.. contents::
	:local:

comment
-------

::

	{comment}

The body of the comment.

comment\_date
-------------

::

	{comment_date format="%Y %m %d"}

The date of the comment. As with other date variables, this requires the
"format" parameter in order to define how the date should be displayed.
See the `date variable
formatting <../../templates/date_variable_formatting.html>`_ page for
more information.

email
-----

::

	{email}

The email address of the comment author.

location
--------

::

	{location}

The author's location as entered in their profile or the comment entry
form.

name
----

::

	{name}

Name of the author.

url
---

::

	{url}

The author's raw URL, if it exists.

url\_as\_author
---------------

::

	{url_as_author}

Hyperlink pointing to the URL (if it exists) with the author name as the
link title. If the URL does not exist simply the name is returned.

url\_or\_email
--------------

::

	{url_or_email}

URL if it exists, otherwise the email address.

url\_or\_email\_as\_author
--------------------------

::

	{url_or_email_as_author}

Hyperlink or email link as author screen\_name (or username if they
haven't specified a screen name).

url\_or\_email\_as\_link
------------------------

::

	{url_or_email_as_link}

Same as above only it will display the URL or email address as a link.

Conditionals
------------

The following conditionals are available:

-  {if email}
-  {if location}
-  {if logged\_in}
-  {if logged\_out}
-  {if name}
-  {if url}


.. _comment-editing:

**************************************************
Allowing Members to Edit Comments on the Front End
**************************************************

The available tags and variables allow you to write your own client side
code for implementing comment editing. The following is a simplified
example using the native :ref:`{exp:jquery:script\_tag} <jquery-script-tag>`.

Example Code
============

The Comment Entries Tag Code::

	{exp:comment:entries limit="20"}
		<div class="comment" id="comment_{comment_id}">
			<span class="comment_body">
				{comment}
			</span>
		
			{if editable}
				<a href="#" class="edit_link">Edit</a>
		
				<div class="editCommentBox" style="display:none;">
					<textarea cols="70" rows="8">{comment_stripped}</textarea><br />
					<input type="submit" name="cancel" value="Cancel" class="cancel_edit">
					<input type="submit" name="save" value="Save" class="submit_edit">
				</div>
			{/if}
		
			{if can_moderate_comment}
			<a href="#" class="mod_link">Close</a>
			{/if}
		</div>
	{/exp:comment:entries}


The JavaScript Code::

	{exp:jquery:script_tag}
	{exp:comment:edit_comment_script}


Comment Edit Script Tag
=======================

::

	{exp:comment:edit_comment_script}

This tag outputs a script tag that will include the necessary JavaScript
for your comment editor. This script requires jQuery, so you will
typically use it in conjunction with the :ref:`jquery-script-tag`.

AJAX Edit URL Tag
=================

::

	{exp:comment:ajax_edit_url}

This tag outputs an action url that links to a method that processes the
submitted data. It is useful if you are `customizing the client-side
code <#customizing>`_. The method requires both a comment id and either
a comment or a status variable. For example::

	$.post("{exp:comment:ajax_edit_url}", {status: "close", comment_id: id, XID: hash});

**Note:** If secure forms is enabled, a proper security hash must be
sent in order to edit or close the comment.

A request for an edit will return a response array. In the case of an
error, an error key with a response message will be sent. If the request
is successful, an array with a new security hash will be sent with the
key of 'XID'. If the entry was closed, a 'moderated' key will be set. If
it was edited, a 'comment' key will be returned containing the updated
comment text.

Useful Comment Entry Tags
=========================

-  `{if editable} <#editable>`_
-  `{if can\_moderate\_comment} <#can-moderate-comment>`_
-  `{comment\_stripped} <#comment-stripped>`_

Editing Permissions
===================

The {if editable} conditional in the Comment Entries tag outputs content
when the viewing member has permission to edit the comment indicated
while the {if can\_moderate\_comment} outputs content if they have
permission to both edit the comment and close it.

For regular members, in order to edit comments they must be a logged in
member, the author of the comment, and the editing time limit must not
have expired.

Comment moderators may both edit the comment contents or close the
comment. Superadmins will always have {editable} and
{can\_moderate\_comment} permissions on any comment. If a member is in a
group with permission to edit comments to their own entries and the
comment is to one of their entries, they will have edit permissions.
Lastly, if a member is in a group with permission to edit comments in
any entry, they will have edit permissions. The edit time limit does not
apply to moderators.

Customizing Client-Side Code
============================

If you need additional control or customized hooks in your markup and
JavaScript for the comment editor, you can forego the simplified jQuery
and {exp:comment:comment\_edit\_script} and roll your own. You can use
the example code below for reference. ::

	<script type="text/javascript" charset="utf-8">
		$.fn.CommentEditor = function(options) {
	
			var OPT;
	
			OPT = $.extend({
				url: "{exp:comment:ajax_edit_url}",
				comment_body: '.comment_body',
				showEditor: '.edit_link',
				hideEditor: '.cancel_edit',
				saveComment: '.submit_edit',
				closeComment: '.mod_link'
			}, options);
	
			var view_elements = [OPT.comment_body, OPT.showEditor, OPT.closeComment].join(','),
				edit_elements = '.editCommentBox', 
				hash = '{XID_HASH}';
	
			return this.each(function() {
				var id = this.id.replace('comment_', ''),
				parent = $(this);
	
				parent.find(OPT.showEditor).click(function() { showEditor(id); return false; });
				parent.find(OPT.hideEditor).click(function() { hideEditor(id); return false; });
				parent.find(OPT.saveComment).click(function() { saveComment(id); return false; });
				parent.find(OPT.closeComment).click(function() { closeComment(id); return false; });
			});
	
			function showEditor(id) {
				$("#comment_"+id)
					.find(view_elements).hide().end()
					.find(edit_elements).show().end();
			}
	
			function hideEditor(id) {
				$("#comment_"+id)
					.find(view_elements).show().end()
					.find(edit_elements).hide();
			}
	
			function closeComment(id) {
				var data = {status: "close", comment_id: id, XID: hash};
	
				$.post(OPT.url, data, function (res) {
					if (res.error) {
						return $.error('Could not moderate comment.');
					}
	
					hash = res.XID;
					$('input[name=XID]').val(hash);
					$('#comment_' + id).hide();
			   });
			}
	
			function saveComment(id) {
				var content = $("#comment_"+id).find('.editCommentBox'+' textarea').val(),
					data = {comment: content, comment_id: id, XID: hash};
	
			$.post(OPT.url, data, function (res) {
					if (res.error) {
						return $.error('Could not save comment.');
					}
	
					hash = res.XID;
					$('input[name=XID]').val(hash);
					$("#comment_"+id).find('.comment_body').html(res.comment);
					hideEditor(id);
		   		});
			}
		};
	
	
		$(function() { $('.comment').CommentEditor(); });
	</script>

*************
Control Panel
*************

See the :doc:`Comment Module Control Panel <control_panel/index>` page.


.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	control_panel/index