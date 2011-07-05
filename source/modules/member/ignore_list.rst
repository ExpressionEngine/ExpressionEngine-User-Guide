Ignore List Tag
===============

The Ignore List Tag allows you to display member profile information for
members in a member's Ignore List. Fields can either be shown from the
ignore list of currently logged-in user or from a specified user.

**Note:** This tag can only be used in the templates accessed via the
TEMPLATES tab in the Control Panel, not in member profile or forum
templates.

**Important:** Avoid using Template Caching on any Template containing
this tag. If you do not avoid caching, then data will not be dynamic for
each user. Instead, whoever happens to load the page when it is cached
will have their information shown for everyone until the cache expires.
Unlike this tag, `Global
Variables <../../templates/globals/index.html>`_ can be used in
templates that are cached.

Here is the basic tag syntax::

	{exp:member:ignore_list}      <div>{ignore_screen_name}</div>  {/exp:member:ignore_list}

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

