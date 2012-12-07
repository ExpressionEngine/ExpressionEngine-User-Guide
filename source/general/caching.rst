Data Caching and Performance
============================

Although ExpressionEngine renders your web pages very fast, you'll find
that there is a direct correlation between page load speed and the
amount of dynamic information contained within your pages. The greater
the number of tags and variables you use, the more processing cycles the
template rendering engine has to perform.

For this reason, we highly recommend that you use the caching systems
and techniques described below. Doing so will increase the performance
of your site and utilize server resources more efficiently.

The caching technology in ExpressionEngine is comprised of several
independent data caching systems and preferences.

.. contents::
	:local:

.. _caching-tag-caching:

Tag Caching
-----------

The Tag Caching system lets you cache the output of individual tags.
This enables you to display sections of your pages completely
dynamically while leaving others to display statically. By caching
individual tags you will reduce the amount of scripting and server
resources needed to display any given page while maintaining a fully
dynamic presentation for things that require it.

Tag caching is time-based, meaning the cache is used for a
user-definable time interval. When the time expires, the cache is
automatically refreshed.

To enable tag caching, add these two parameters to **any** tag::

	cache="yes" refresh="10"

.. note:: Refresh indicates the time, in minutes, between cache
   refreshes.

For example, to cache your channel tag in 30 minute intervals you'll do
this::

	{exp:channel:entries cache="yes" refresh="30"}

.. _caching-template-caching:

Template Caching
----------------

Template Caching (or Dynamic Page Caching) lets you cache entire
templates, making your pages much more light-weight. Because
ExpressionEngine requires some scripting and a few database queries in
order to manage core resources, we can't achieve 100% static pages, but
we can get close.

Template caching, like tag caching, is time-based. To enable Template
caching, click the "Preferences" link in your Templates page. There you
will enable caching as well as set the time interval of the refreshes.

We call it Dynamic Page Caching because the system will clear itself
automatically when certain events happen. For example, if you cache your
comments page, when someone submits a comment, the cache will be
cleared, momentarily overriding the normal caching preferences.

.. note:: Dynamic Page Caching will supersede Tag Caching. There is no
   increased benefit to using tag caching and page caching together.
   When page caching is on, no other caching setting matters. Therefore,
   if you want to cache individual tags, turn off page caching.

.. _caching-dynamic-channel-query-caching:

Dynamic Channel Query Caching
-----------------------------

This feature is found under :menuselection:`Admin --> Channel
Administration --> Global Preferences`. This feature will improve the
speed at which the {exp:channel:entries} tag is rendered by caching
queries that are normally executed dynamically. This option cannot be
used for all people, though.

Enable this feature only if you **do not** use future entries, expiring
entries, or random entries.

.. _caching-query-disabling:

Query Disabling
---------------

The disable= parameter is available in the {exp:channel:entries} tag. It
allows you to turn off aspects of the tag that you might not be using in
order to improve performance. The channel tag is designed to fetch a lot
of information by default: Categories, fields, member data, etc.
Depending on how you use the tag, some of this data may not be needed.
Through the use of the "disable" parameter you can turn off aspects of
the tag in order to make it more lightweight.

The syntax for the disable parameter is this: disable="ITEM YOU WANT TO
DISABLE". There are five items that can be turned off:

-  categories
-  category\_fields
-  custom\_fields
-  member\_data
-  pagination

You may specify multiple items to disable by separating them with the
pipe character::

	disable="categories|member_data"

The best approach is to examine the data you are showing in each
instance of the tag. If there is a type of data you are not utilizing,
turn it off.

For example, let's say you are using an instance of your channel tag to
show your 10 most recent entry titles::

	{exp:channel:entries orderby="date" sort="desc" limit="10"}
		<h1 href="{title_permalink='channel/comments'}">{title}</h1>
	{/exp:channel:entries}

In this example you are only showing the title of your entries and
nothing else; yet, the channel tag automatically fetches categories and
other data automatically. Using the disable= parameter you can turn off
the unneeded features from being queried. In this case, you don't need
any of the features that can be disabled. ::

	{exp:channel:entries orderby="date" sort="desc" limit="10" disable="categories|custom_fields|member_data|pagination"}
		<h1 href="{title_permalink='channel/comments'}">{title}</h1>
	{/exp:channel:entries}

.. note:: You can also use disable="category\_fields" in
   the :doc:`channel categories </modules/channel/categories>` tag,
   the :doc:`category heading </modules/channel/category_heading>` tag,
   and the :doc:`category archives </modules/channel/category_archive>`
   tag.
