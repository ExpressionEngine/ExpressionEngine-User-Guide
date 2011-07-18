Comment Entry Tag
=================

The Comment Entries Tag enables you to show the user-submitted comments
associated with your entries.

**Note:** The Comment Entries Tag is intended for use in one of your
"single entry" pages. That is, a page that shows a single, specific
channel entry. Therefore, your Comment page must be linked to from
within your Channel entries using the `URL Title
Path <../channel/variables.html#var_url_title_path>`_ variable or the
`Entry ID Path <../channel/variables.html#var_entry_id_path>`_ variable,
so that the comments can be associated to a specific entry.

Here is a basic example showing how you might use the comment tag::

	{exp:comment:entries sort="asc" limit="20"}  {comment}  <p>By {name} on {comment_date format="%Y %m %d"}</p>  {/exp:comment:entries}

Please note that the comment entries tag should **not** typically be
nested inside of a standard {exp:channel:entries} tag.


Parameters
----------


dynamic=
~~~~~~~~

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
~~~~~~~~~~

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
~~~~~~~~~~~~

::

	comment_id="22"

You can hard code the comment entries tag to show specific comments. As
with the entry\_id parameter, you may also specify multiple comments by
separating them with the pipe character. This parameter takes precedence
over any entry specified in the url.

limit=
~~~~~~

::

	limit="30"

Allows you to limit the number of comments. The limit will default to
100 comments if a value is not specified. If you are using
:doc:`pagination <../channel/pagination_page>` then this
will determine the number of comments shown per page.

orderby=
~~~~~~~~

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
~~~~~~~~~

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
~~~~~~~~~~~~~~~

::

	paginate_base="site/index"

This tells ExpressionEngine to override the normal
:doc:`pagination <../channel/pagination_page>` link locations and point
instead to the explicitly stated template group and template.

show\_expired=
~~~~~~~~~~~~~~

::

	show_expired="yes"

You can determine whether you wish for comments on "expired" entries to
be included.

sort=
~~~~~

::

	sort="asc" ``sort="desc"``

The sort order can be "asc" (ascending order or "oldest item first" for
dates) or "desc" (descending order or "newest item first" for dates). If
you do not use a sort order the default is desc.

url\_title=
~~~~~~~~~~~

::

	url_title="my_wedding"

You can hard code the comment entries tag to show comments for a
specific channel entry by its URL title.

**Note:** This parameter takes precedence over any entry specified
dynamically in the URL, so when using this parameter you will want to
make sure it is clear to the user which entry the displayed comments
belong to.

channel=
~~~~~~~~

::

	channel="which"

From which
`channel <../../cp/admin/content_admin/channel_management.html>`_ to
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
~~~~~~~~~~~~~~

::

	entry_status="Featured"

status=
~~~~~~~

::

	status="Closed"

author\_id=
~~~~~~~~~~~

::

	author_id="5"

Variables
---------


absolute\_count
~~~~~~~~~~~~~~~

::

	{absolute_count}

The absolute "count" out of the current comment being displayed by the
tag, including those comments on previous pages (if using pagination).

If five entries are being displayed per page, then for the fourth entry
on the second page the {absolute\_count} variable would have a value of
"9".

author
~~~~~~

::

	{author}

The comment author's screen name, if a member; otherwise, this variable
will display the name submitted with the comment. ::

	<a href="http://example.com/index.php/member/{author_id}/">{author}</a>

author\_id
~~~~~~~~~~

::

	{author_id}

The ID corresponding to the comment author's member profile. This is
only applicable if the comment was left by a registered member.
Non-registered commenters will return a zero (0).

This can be useful for creating links to the commenter's member profile::

	<a href="http://example.com/index.php/member/{author_id}/">{name}</a>

aol\_im
~~~~~~~

::

	{aol_im}

The author's AOL IM account name

avatar\_image\_height
~~~~~~~~~~~~~~~~~~~~~

::

	{avatar_image_height}

The height of the avatar image associated with the entry's author.
Typically used as such::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

avatar\_image\_width
~~~~~~~~~~~~~~~~~~~~

::

	{avatar_image_width}

The width of the avatar image associated with the entry's author.
Typically used as such::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

avatar\_url
~~~~~~~~~~~

::

	{avatar_url}

The URL to the avatar image associated with the entry's author.
Typically used as such::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

can\_moderate\_comment
~~~~~~~~~~~~~~~~~~~~~~

::

	{if can_moderate_comment}

This variable will be used in a conditional to allow `comment
editing <comment_editing.html>`_. It indicates whether a member has
permission to edit a given comment AND/OR close that comment.

channel\_title
~~~~~~~~~~~~~~

::

	{channel_title}

This variable simply displays the content from the "Full Channel Name"
setting of the channel that the comment belongs to.

comment
~~~~~~~

::

	{comment}

The body of the comment

comment\_stripped
~~~~~~~~~~~~~~~~~

::

	{comment_stripped}

The body of the comment without any typographical processing and with
ExpressionEngine tags encoded. This tag is for use in `comment
editing <comment_editing.html>`_.

comment\_auto\_path
~~~~~~~~~~~~~~~~~~~

::

	{comment_auto_path}

This variable is replaced by the URL set in the "Comment Page URL"
preference under Admin > Channel Management. No entry id, URL Title, or
other information is included; this is simply the exact URL from the
preference.

comment\_entry\_id\_auto\_path
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{comment_entry_id_auto_path}

This variable is replaced by the URL set in the "Comment Page URL"
preference under Admin > Channel Management. The ID number of the entry
will be automatically added. For example, this::

	<a href="{comment_entry_id_auto_path}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/234/">my entry</a>

comment\_id
~~~~~~~~~~~

::

	{comment_id}

The ID associated with the comment

comment\_site\_id
~~~~~~~~~~~~~~~~~

::

	{comment_site_id}

The Site ID for the comment.

comment\_url\_title\_auto\_path
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{comment_url_title_auto_path}

This variable is replaced by the URL set in the "Comment Page URL"
preference under Admin > Channel Management. The URL Title of the entry
will be automatically added. For example, this::

	<a href="{comment_url_title_auto_path}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/ice_cream/">my entry</a>

count
~~~~~

::

	{count}

The "count" out of the current comment being displayed by the tag on the
current page.

If five entries are being displayed per page, then for the fourth entry
on the page the {count} variable would have a value of "4".

editable
~~~~~~~~

::

	{if editable}Show Edit{/if}

This variable will be used in a conditional to allow `comment
editing <comment_editing.html>`_. It indicates whether a member has
permission to edit a given comment.

email
~~~~~

::

	{email}

The comment author's email address, if specified.

entry\_author\_id
~~~~~~~~~~~~~~~~~

::

	{entry_author_id}

The member ID for the creator of the entry whose comments are being
displayed.

entry\_id
~~~~~~~~~

::

	{entry_id}

The ID number of the entry

entry\_id\_path
~~~~~~~~~~~~~~~

::

	{entry_id_path='channel/comments'}

The URL to the specified template. The ID number of the entry with which
the comment is associated will be automatically added. For example,
this::

	<a href="{entry_id_path='channel/comments'}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/234/">my entry</a>

icq
~~~

::

	{icq}

The author's ICQ IM user identification number

interests
~~~~~~~~~

::

	{interests}

The author's "interests" as entered in their profile

ip\_address
~~~~~~~~~~~

::

	{ip_address}

The IP address of the commenter

location
~~~~~~~~

::

	{location}

The commenter's location as entered in their profile

group\_id
~~~~~~~~~

::

	{group_id}

The commenter's member group id (0 for non-members)

member\_search\_path
~~~~~~~~~~~~~~~~~~~~

::

	{member_search_path='search/results'}

This variable is replaced by a URL that passes the author's member name
to your search results Template. In this way, you can display all
entries made by the author. You should specify the
Template\_Group/Template that you use to display search results. For
example::

	<a href="{member_search_path='search/results'}">View entries by this member</a>

msn\_im
~~~~~~~

::

	{msn_im}

The author's MSN IM account name

occupation
~~~~~~~~~~

::

	{occupation}

The author's occupation as entered in their profile

name
~~~~

::

	{name}

Name of the author

paginate=
~~~~~~~~~

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
~~~~~~~~~

::

	{permalink}

The URL to the actual comment with anchor. Put this variable in a link::

	<a href="{permalink}">permanent link</a>

photo\_url
~~~~~~~~~~

::

	{photo_url}

This variable supplies the URL to the member photo (if you have that
option enabled and the member has uploaded their photo). It is intended
for use in an image tag.

photo\_image\_height
~~~~~~~~~~~~~~~~~~~~

::

	{photo_image_height}

This variable supplies the height of the member photo. It is intended
for use in an image tag.

photo\_image\_width
~~~~~~~~~~~~~~~~~~~

::

	{photo_image_width}

This variable supplies the width of the member photo. It is intended for
use in an image tag.

signature
~~~~~~~~~

::

	{signature}

The signature associated with the entry's author. Typically used as
such::

	{if signature} <p>{signature}</p> {/if}

signature\_image\_height
~~~~~~~~~~~~~~~~~~~~~~~~

::

	{signature_image_height}

The height of the signature image associated with the entry's author.
Typically used as such::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

signature\_image\_url
~~~~~~~~~~~~~~~~~~~~~

::

	{signature_image_url}

The URL to the signature image associated with the entry's author.
Typically used as such::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

signature\_image\_width
~~~~~~~~~~~~~~~~~~~~~~~

::

	{signature_image_width}

The width of the signature image associated with the entry's author.
Typically used as such::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

switch=
~~~~~~~

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
~~~~~

::

	{title}

The title of the channel entry with which the comment is associated.

total\_results
~~~~~~~~~~~~~~

::

	{total_results}

The total number of comments being displayed by this tag on the current
page.

total\_comments
~~~~~~~~~~~~~~~

::

	{total_comments}

The total number of comments for this tag on all pages.

url
~~~

::

	{url}

The author's raw URL, if it exists

url\_as\_author
~~~~~~~~~~~~~~~

::

	{url_as_author}

Hyperlink pointing to the URL (if it exists) with the author name as the
link title. If the URL does not exist simply the name is returned.

url\_or\_email
~~~~~~~~~~~~~~

::

	{url_or_email}

URL if it exists, otherwise the email address

url\_or\_email\_as\_author
~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{url_or_email_as_author}

Hyperlink or email link as author screen\_name (or username if they
haven't specified a screen name)

url\_or\_email\_as\_link
~~~~~~~~~~~~~~~~~~~~~~~~

::

	{url_or_email_as_link}

Same as above only it will display the URL or email address as a link

url\_title\_path
~~~~~~~~~~~~~~~~

::

	{url_title_path='channel/comments'}

The URL to the specified template. The "url title" of the entry with
which the comment is associated will be automatically added. For
example, this::

	<a href="{url_title_path='channel/comments'}">permalink</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/ice_cream/">permalink</a>

username
~~~~~~~~

::

	{username}

The author's username (returns FALSE for non-members)

channel\_id
~~~~~~~~~~~

::

	{channel_id}

The ID number of the actual channel

yahoo\_im
~~~~~~~~~

::

	{yahoo_im}

The author's Yahoo IM account name

Custom Member Fields
~~~~~~~~~~~~~~~~~~~~

All custom member profile fields can be accessed using the "short name"
of the field::

	{age} {gender} {zodiac} etc..

These are totally dynamic in that any profile field you create for your
members will automatically be available by its "short name" as a
variable.

Single Variable Dates
---------------------

Several date variables are available for use. As with other date
variables, these require the "format" parameter in order to define how
the date should be displayed. See the `date variable
formatting <../../templates/date_variable_formatting.html>`_ page for
more information.


comment\_date
~~~~~~~~~~~~~

::

	{comment_date format="%Y %m %d"}

The date of the comment.

edit\_date
~~~~~~~~~~

::

	{edit_date format="%Y %m %d"}

The date on which the comment was edited.

gmt\_comment\_date
~~~~~~~~~~~~~~~~~~

::

	{gmt_comment_date format="%Y %m %d"}

The date of the comment but **not** localized for the user.

Conditionals
------------

Conditionals work in comments::

	{if name=="bozo"}  You've got a big nose!  {/if}

if avatar
~~~~~~~~~

::

	{if avatar} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has an avatar image specified. ::

	{if avatar} <img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar" /> {/if}

if is\_ignored
~~~~~~~~~~~~~~

::

	{if is_ignored} content {/if}

This conditionals allows you to show (or hide) specific content if the
comment was made by a member on the logged-in user's ignore list. A
simplified example of how this might be used is::

	{exp:comment:entries}          {if is_ignored}You are ignoring {author}.{/if}      <div {if is_ignored}style="display: none;"{/if}>{comment}</div>      {/exp:comment:entries}

Or you can use Javascript to allow the user to read the comment if they
wish::

	<script type="text/javascript">     <!--      function showHideComment(el)     {     if (document.getElementById(el).style.display == "block")     {         document.getElementById(el).style.display = "none";     }     else     {         document.getElementById(el).style.display = "block";     }        }     //-->     </script>      {exp:comment:entries}          {if is_ignored}     <p><a href="#" onclick="showHideComment('{comment_id}')">View / Hide</a> comment from ignored member: {author}</p>     {/if}      <div id="{comment_id}" {if is_ignored}style="display: none;"{/if}>{comment}</div>      {/exp:comment:entries}

**Important:** Avoid using Template Caching on any Template containing
this conditional. If you do not avoid caching, then data will not be
dynamic for each user. Instead, whoever happens to load the page when it
is cached will have their ignore list applied to everyone until the
cache expires.

if no\_results
~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~~

::

	{if signature_image} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has a signature image specified. ::

	{if signature_image} <img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature" /> {/if}

Comment Submission Form
-----------------------

Please see the dedicated `Comment Submission Form <form.html>`_ page.
