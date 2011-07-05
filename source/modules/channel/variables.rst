Channel Entries - Single Variables
==================================

The standard {exp:channel:entries} tag has a multitude of variables that
can be used inside of it. These variables have been split into two broad
categories:


Standard Variables
------------------


absolute\_count
~~~~~~~~~~~~~~~

::

	{absolute_count}

The absolute "count" out of the current entries being displayed by the
tag, including those entries on previous pages (if using pagination).

If five entries are being displayed per page, then for the fourth entry
on the second page the {absolute\_count} variable would have a value of
"9"

**BONUS:** Since the Search module utilizes channel variables,
{absolute\_count} is also available to the Search Results tag.

absolute\_results
~~~~~~~~~~~~~~~~~

::

	{absolute_results}

This variable will always display the absolute total number of results
that are returned by the tag, regardless of pagination.

aol\_im
~~~~~~~

::

	{aol_im}

The author's AOL IM account name

author
~~~~~~

::

	{author}

The author's screen name, if it exists; otherwise, this variable will
display the username.

author\_id
~~~~~~~~~~

::

	{author_id}

The member ID number of the author

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

bio
~~~

::

	{bio}

The author's bio as entered in their profile.

channel
~~~~~~~

::

	{channel}

The name of the channel that the currently displayed entry is assigned
to.

channel\_id
~~~~~~~~~~~

::

	{channel_id}

The ID number of the actual channel (not the *entry*)

channel\_short\_name
~~~~~~~~~~~~~~~~~~~~

::

	{channel_short_name}

The short name of the channel of the currently displayed entry.

yahoo\_im
~~~~~~~~~

::

	{yahoo_im}

The author's Yahoo IM account name

comment\_auto\_path
~~~~~~~~~~~~~~~~~~~

::

	{comment_auto_path}

This variable is replaced by the URL set in the "Comment Page URL"
preference under Admin > Channel Management. No entry id, URL Title, or
other information is included; this is the exact URL from the
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

comment\_total
~~~~~~~~~~~~~~

::

	{comment_total}

The total number of comments for a particular entry

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

The "count" out of the current entries being displayed. If five entries
are being displayed, then for the fourth entry the {count} variable
would have a value of "4".

email
~~~~~

::

	{email}

The author's raw email address

entry\_id
~~~~~~~~~

::

	{entry_id}

The ID number of the channel entry

entry\_id\_path
~~~~~~~~~~~~~~~

::

	{entry_id_path='channel/archives'}

The URL to the specified template. The ID number of the entry will be
automatically added. For example, this::

	<a href="{entry_id_path='channel/archives'}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/archives/234/">my entry</a>

entry\_site\_id
~~~~~~~~~~~~~~~

::

	{entry_site_id}

The Site ID of the channel entry.

forum\_topic\_id
~~~~~~~~~~~~~~~~

::

	{forum_topic_id}

If you have the Discussion Forum Module installed and if you have
associated a forum thread with a channel entry (via the "Forum" section
of the Publish tab), this is the ID number of the forum thread. It will
typically be used like so::

	{if forum_topic} <a href="{path='forums/viewthread'}{forum_topic_id}">Discuss this in our forums</a> {/if}

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

The IP address of the author when they posted the entry

location
~~~~~~~~

::

	{location}

The author's location as entered in their profile

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

page\_uri
~~~~~~~~~

::

	{page_uri}

If you have the Pages Module installed and if you have associated a
static page with a channel entry (via the "Pages" section of the Publish
tab), this is the page uri for the page. It will typically be used like
so::

	{if page_uri != ''} <a href="{page_uri}">View this page</a> {/if}

page\_url
~~~~~~~~~

::

	{page_url}

If you have the Pages Module installed and if you have associated a
static page with a channel entry (via the "Pages" section of the Publish
tab), this is the page url for the page (the site URL + the page URI).
It will typically be used like so::

	{if page_url != ''} <a href="{page_url}">View this page</a> {/if}

permalink
~~~~~~~~~

::

	{permalink}

This variable defaults to site index with entry ID number::

	http://example.com/index.php/235/

In addition, you can specify a template group/template and the entry ID
will automatically be added::

	{permalink="channel/archives"}

Will render as::

	http://example.com/index.php/channel/archives/235/

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

profile\_path
~~~~~~~~~~~~~

::

	{profile_path='member'}

The URL to the author of the current entry. The ID number of the author
will be automatically added. Used in a link::

	<a href="{profile_path='member'}">{author}</a>

relative\_url
~~~~~~~~~~~~~

::

	{relative_url}

The URL stored in your Channel URL setting under Channel Management,
with the domain information removed. For example, if your setting is
http://example.com/index.php/site/index/ the variable will output
/index.php/site/index/. Typically only used in the Atom feed Template.

relative\_date
~~~~~~~~~~~~~~

::

	{relative_date}

The amount of time that has passed between when the entry was submitted
and the current time. The output is displayed in the format 1 day, 3
hours, 45 minutes. This variable is useful for displaying something such
as "This entry was posted 1 day, 3 hours, 45 minutes ago."

screen\_name
~~~~~~~~~~~~

::

	{screen_name}

The author's screen name, if it exists. This variable will not return
anything if the author does not have a screen name defined.

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

status
~~~~~~

::

	{status}

The status of the entry (open, closed, etc.)

switch=
~~~~~~~

::

	{switch='option_one|option_two|option_three'}

This variable permits you to rotate through any number of values as the
entries are displayed. The first entry will use "option\_one", the
second will use "option\_two", the third "option\_three", the fourth
"option\_one", and so on.

The most straightforward use for this would be to alternate colors. It
could be used like so::

	{exp:channel:entries channel="yourchannel"} <div class="{switch='one|two'}"> <h1>{title}</h1> {body} </div> {/exp:channel:entries}

The entries would then alternate between <div class="one"> and <div
class="two">.

Multiple instances of the {switch=} tag may be used and the system will
intelligently keep track of each one.

title
~~~~~

::

	{title}

The title of the entry

title\_permalink
~~~~~~~~~~~~~~~~

::

	{title_permalink}

This variable uses the "url title" as the link. It defaults to the site
index with the "url title"::

	http://example.com/index.php/my_ugly_boyfriend/

In addition, you can specify a specific template group/template and the
"url title" will automatically be added::

	{title_permalink="channel/archives"}

Will render as::

	http://example.com/index.php/channel/archives/my_ugly_boyfriend/

**Note:** When creating a new entry, if you don't supply the "url title"
then it will be automatically created from the actual entry title.
Spaces are turned into underscores and quotes are removed. For example,
"Joe's night out" becomes "joes\_night\_out".

total\_results
~~~~~~~~~~~~~~

::

	{total_results}

The total number of entries being displayed.

trimmed\_url
~~~~~~~~~~~~

::

	{trimmed_url}

The domain name for your site, trimmed of any subdomains. For instance,
example.com becomes example.com. Typically only used in the Atom feed
Template.

url
~~~

::

	{url}

The author's raw URL, if it exists

url\_or\_email
~~~~~~~~~~~~~~

::

	{url_or_email}

The author's URL if it exists, otherwise the raw email address

url\_or\_email\_as\_author
~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	{url_or_email_as_author}

A hyperlink to the author's URL if it exists, otherwise it will be an
email link for the author's email address. The text of the link will be
the author's screenname if it exists, otherwise it will be the username.

url\_or\_email\_as\_link
~~~~~~~~~~~~~~~~~~~~~~~~

::

	{url_or_email_as_link}

This is similar to the above variable. The difference is that the text
for the link will be either the URL or the email address.

url\_title
~~~~~~~~~~

::

	{url_title}

The human readable title used in the URL as a permalink

url\_title\_path
~~~~~~~~~~~~~~~~

::

	{url_title_path='channel/archives'}

The URL to the specified template. The "url title" of the entry will be
automatically added. For example, this::

	<a href="{url_title_path='channel/archives'}">permalink</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/archives/ice_cream/">permalink</a>

username
~~~~~~~~

::

	{username}

The author's username

Date Variables
--------------

Several date variables are available for use. As with other date
variables, these require the "format" parameter in order to define how
the date should be displayed. See the `date variable
formatting <../../templates/date_variable_formatting.html>`_ page for
more information.

-  `{recent\_comment\_date format="%Y %m
   %d"} <#var_recent_comment_date>`_

entry\_date
~~~~~~~~~~~

::

	{entry_date format="%Y %m %d"}

The date the entry was submitted

expiration\_date
~~~~~~~~~~~~~~~~

::

	{expiration_date format="%Y %m %d"}

The expiration date of the entry

edit\_date
~~~~~~~~~~

::

	{edit_date format="%Y %m %d"}

The date on which the entry was last edited

gmt\_entry\_date
~~~~~~~~~~~~~~~~

::

	{gmt_entry_date format="%Y %m %d"}

The date the entry was submitted in GMT. This variable is **not**
localized for each user's date settings.

gmt\_edit\_date
~~~~~~~~~~~~~~~

::

	{gmt_edit_date format="%Y %m %d"}

The date on which the entry was last edited in GMT. This variable is
**not** localized for each user's date settings.

recent\_comment\_date
~~~~~~~~~~~~~~~~~~~~~

::

	{recent_comment_date format="%Y %m %d"}

The date of the most recent comment associated with the entry

week\_date
~~~~~~~~~~

::

	{week_date format="%Y %m %d"}

The date that the week of the currently displayed entry started on, most
commonly used in "weekly" `date
headings <variable_pairs.html#var_date_heading>`_.

This variable is affected by the `start\_day
parameter <parameters.html#par_start_day>`_. By default, the week date
will fall on Sunday for the week of the entry. When start\_day="Monday"
is used, the week date will fall on Monday for the week of the entry.

Date Fields
~~~~~~~~~~~

Refer to the `Date Field <custom_fields.html#date_fields>`_
documentation.
