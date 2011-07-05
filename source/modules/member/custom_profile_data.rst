Custom Profile Data Tag
=======================

The Custom Profile Data Tag allows you to display member profile
information in any of your templates. Data can either be shown from the
currently logged-in user or from a specified user using the
member\_id="" parameter.

**Notes:** Remember that the profile information for the current visitor
to a page such as {screen\_name}, {location}, {email}, etc. are always
available in any template as `Global
Variables <../../templates/globals/index.html>`_. Therefore, **only**
use this tag if you need to show custom profile data (that is, fields
that you have created in the `Custom Profile
Page <../../cp/members/custom_member_fields.html>`_) or member data for
a specific user.

**Important:** If not using the member\_id="" attribute, avoid using
Template Caching on any Template containing this tag. If you do not
avoid caching, then data will not be dynamic for each user. Instead,
whoever happens to load the page when it is cached will have their
information shown for everyone until the cache expires. Unlike this tag,
`Global Variables <../../templates/globals/index.html>`_ can be used in
templates that are cached.

Here is the basic tag syntax::

	{exp:member:custom_profile_data}      <div>{age}</div>     <div>{gender}</div>  {/exp:member:custom_profile_data}

Parameters
----------

member\_id=
~~~~~~~~~~~

::

	member_id="147"

You can specify a particular member's information to display. By default
(if you do not include the member\_id parameter), the tag will simply
display information pertaining to the currently logged-in user.

Variables
---------


avatar\_height
~~~~~~~~~~~~~~

::

	{avatar_height}

The height of the avatar image associated with the user. Typically used
as such::

	{if avatar} <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar" /> {/if}

avatar\_width
~~~~~~~~~~~~~

::

	{avatar_width}

The width of the avatar image associated with the user. Typically used
as such::

	{if avatar} <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar" /> {/if}

avatar\_url
~~~~~~~~~~~

::

	{avatar_url}

The URL to the avatar image associated with the user. Typically used as
such::

	{if avatar} <img src="{avatar_url}" width="{avatar_width}" height="{avatar_height}" alt="{screen_name}'s avatar" /> {/if}

bio
~~~

::

	{bio}

The user's bio.

birthday
~~~~~~~~

::

	{birthday}

The user's birthday.

daylight\_savings
~~~~~~~~~~~~~~~~~

::

	{daylight_savings}

The user's daylight savings setting.

email
~~~~~

::

	{email}

The user's Javascript encoded email address.

group\_id
~~~~~~~~~

::

	{group_id}

The user's Group ID.

join\_date
~~~~~~~~~~

::

	{join_date format="%Y %m %d"}

The date the user joined the site.

language
~~~~~~~~

::

	{language}

The user's language.

location
~~~~~~~~

::

	{location}

The location (as entered in their profile) of the user.

last\_activity
~~~~~~~~~~~~~~

::

	{last_activity format="%Y %m %d"}

The time of the user's last page load.

last\_comment\_date
~~~~~~~~~~~~~~~~~~~

::

	{last_comment_date format="%Y %m %d"}

The date of the user's last comment.

last\_entry\_date
~~~~~~~~~~~~~~~~~

::

	{last_entry_date format="%Y %m %d"}

The date of the user's last channel entry.

last\_forum\_post\_date
~~~~~~~~~~~~~~~~~~~~~~~

::

	{last_forum_post_date format="%Y %m %d"}

The date of the user's last forum post.

last\_visit
~~~~~~~~~~~

::

	{last_visit format="%Y %m %d"}

The date when the user was last active on the site PRIOR to their
current session.

local\_time
~~~~~~~~~~~

::

	{local_time format="%Y %m %d"}

The user's local time.

member\_group
~~~~~~~~~~~~~

::

	{member_group}

The user's member group.

member\_id
~~~~~~~~~~

::

	{member_id}

The user's Member ID.

photo\_height
~~~~~~~~~~~~~

::

	{photo_height}

The height of the photo image associated with the user. Typically used
as such::

	{if photo}             <img src="{photo_url}" width="{photo_width}" height="{photo_height}" alt="{screen_name}'s photo" />             {/if}

photo\_width
~~~~~~~~~~~~

::

	{photo_width}

The width of the photo image associated with the user. Typically used as
such::

	{if photo}             <img src="{photo_url}" width="{photo_width}" height="{photo_height}" alt="{screen_name}'s photo" />             {/if}

photo\_url
~~~~~~~~~~

::

	{photo_url}

The URL to the photo image associated with the user. Typically used as
such::

	{if photo}             <img src="{photo_url}" width="{photo_width}" height="{photo_height}" alt="{screen_name}'s photo" />             {/if}

screen\_name
~~~~~~~~~~~~

::

	{screen_name}

The user's screen name.

search\_path
~~~~~~~~~~~~

::

	{search_path}

The search path to show entries and posts by this user. ::

	<a href="{search_path}">View Entries by User</a>

send\_private\_message
~~~~~~~~~~~~~~~~~~~~~~

::

	{send_private_message}

The URL to send a Private Message to this user. ::

	<a href="{send_private_message}">Send Private Message to {screen_name}.</a>

signature
~~~~~~~~~

::

	{signature}

The user's signature.

timezone
~~~~~~~~

::

	{timezone}

The user's timezone.

total\_comments
~~~~~~~~~~~~~~~

::

	{total_comments}

The total number of comments made by the user.

total\_entries
~~~~~~~~~~~~~~

::

	{total_entries}

The total number of entries made by the user.

total\_forum\_posts
~~~~~~~~~~~~~~~~~~~

::

	{total_forum_posts}

The total number of forum posts made by the user.

total\_forum\_topics
~~~~~~~~~~~~~~~~~~~~

::

	{total_forum_topics}

The total number of forum topics made by the user.

url
~~~

::

	{url}

The user's URL.

username
~~~~~~~~

::

	{username}

The user's username.

Other Member Fields
~~~~~~~~~~~~~~~~~~~

All other member fields can be accessed using the "short name" of the
field::

	{age} {gender} {zodiac} etc..

These are totally dynamic in that any profile field you create for your
members will automatically be available by its "short name" as a
variable.
