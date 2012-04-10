###################
Channel Entries Tag
###################

.. contents::
   :local:
   :depth: 1

************
Introduction
************

The Channel Entries tag is the primary tag used to show the content you
create and edit via your Control Panel's :menuselection:`Publish` section.
It's the most powerful tag in ExpressionEngine, and the most commonly
used since its main function is to retrieve and display your site's content.

The Channel Entries tag can display both multi-entry and
single-entry content - that is, several entries on a page, or one
specific one (it dynamically adjusts its output based on the URL
request). It can also show entries from specific categories, specific
days, monthly archives, permalinks, and more. 

Here is a basic example of how this tag might be used:

::

	{exp:channel:entries channel="news" limit="10"}
	    <h2>{title}</h2>
	    {body}
	{/exp:channel:entries}

In the above example, everything between the opening and closing
exp:channel:entries tags is repeated 10 times (once for each entry in
the "News" channel). {title} is replaced with the Title of each entry,
and {body} is replaced with the content entered into the "Body" field
of each entry.

.. _channel-entries-parameters:

**********
Parameters
**********

.. contents::
   :local:
   :depth: 1

author\_id=
-----------

::

	author_id="1"
	

This parameter limits the query by the member ID of the entry's author.
You can use the pipe character to query by multiple author IDs::

	author_id="1|2|3"

Or you can add "not" to exclude author IDs

::

	author_id="not 1|2|3" 
	
You can also use the constant "CURRENT\_USER" to show entries from only the currently logged in user.


::

    author_id="CURRENT_USER"


This allows each logged-in user to get only their entries. Users who are
not logged in won't see anything. Alternatively, you can use the
constant "NOT\_CURRENT\_USER" to show entries **except** from the
currently logged in user. ::

	author_id="NOT_CURRENT_USER"

backspace=
----------

::

	backspace="7"
	

Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br /> tag
after each entry you'll have this::

	Entry 1<br />          Entry 2<br />  Entry 3<br />

You might, however, not want the <br /> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br />
tag has 6 characters plus a new line character, so you would do this::

::

	{exp:channel:entries backspace="7"}    {title}<br /> {/exp:channel:entries}

That will produce code like this::

	   Entry 1<br />             Entry 2<br />        Entry 3

cache=, refresh=
----------------

::

	cache="yes" refresh="60"

This parameter enables tag caching. Refresh is the number of minutes
between cache refreshes.

cat\_limit=
-----------

::

	cat_limit="30"

This parameter lets you set a different limit for the category display
than the regular display. For example, let's say you normally only want
10 entries on your main channel page, but you want 100 entries shown
when viewing a specific category. For that, you could do this::

	{exp:channel:entries limit="10" cat_limit="100"}

category=
---------

::

	category="2"

Categories are specified by ID number (the ID number of each
`category <../../cp/admin/channels/category_edit.html>`_ is
displayed in the Control Panel). The reason we use the ID is because
categories can be called anything (with spaces, quotes, etc.), and also
renamed. It would be much more difficult to have to update the tag
parameters every time you updated a category name. Further, you can have
multiple categories with the same name either in different Category
Groups or in different parts of the hierarchy within the same Category
Group.

And as with some of the other parameters, you can stack categories to
get entries with any of those categories

::

	category="2|45|4|9"

Or use "not" to exclude categories

::

	category="not 4|5|7"


And, you can use an inclusive stack to only get entries with *all* of
the categories

::

	category="3&7&8"


Or you can negate the inclusive stack and get entries that do not of
*all* of those categories

::

	category="not 3&5"


**Note:** When you use the category="3\|4" parameter (not excluding),
you are implicitly telling ExpressionEngine to only deal with entries
that have been assigned one or more categories. If you have entries that
haven't been categorized then they will be ignored and not included in
the results. However, if you are using exclusion (category="not 3\|4"),
then you will be shown all entries without those categories *including*
those without any categories assigned. To change this behavior when
excluding categories use the
`uncategorized\_entries="" <#uncategorized-entries>`_
parameter.

**Note:** Using this parameter will automatically cause ExpressionEngine
to *ignore* any category information specified via the URL. For
instance, if you are on a "category page" (e.g. a "/C13/" segment in the
URL) that will be completely ignored in favor of whatever you have
specified via the parameter.

category\_group=
----------------

::

	category_group="2"


Category Groups are specified by ID number (the ID number of each
`category
group <../../cp/admin/channels/category_management.html>`_ is
displayed in the Control Panel). The reason we use the ID is because
category groups can be called anything (with spaces, quotes, etc.), and
also renamed. It would be much more difficult to have to update the tag
parameters every time you updated a category name.

And as with some of the other parameters, you can stack category groups

::

	category_group="1|2|4"

Or use "not" to exclude categories

::

	category_group="not 2"

**Note:** Using this parameter will automatically cause ExpressionEngine
to *ignore* any category information specified via the URL. For
instance, if you are on a "category page" (e.g. a "/C13/" segment in the
URL) that will be completely ignored in favor of whatever you have
specified via the parameter.

channel=
--------

::

	channel="news"

From which
`channel <../../cp/admin/channels/channel_management.html>`_ to
show the entries (will show all channels if no channel is specified).
Additionally, you can use the pipe character to separate multiple
channels::

	channel="channel1|channel2|channel3"

Or you can add the word "not" (with a space after it) to exclude
channels::

	channel="not channel1|channel2|channel3"

You must specify this parameter if you use the `category name in
URL <../../cp/admin/channels/global_channel_preferences.html>`_
feature.

disable=
--------

::

	disable="categories"

The disable= parameter allows you to turn off aspects of the tag that
you might not be using in order to improve performance. The channel tag
is designed to fetch a lot of information by default: Categories,
channel fields, member data, etc. Depending on how you use the tag, some
of this data may not be needed. Through the use of the "disable"
parameter you can turn off aspects of the tag in order to make it more
lightweight.

The syntax for the disable parameter is this: disable="ITEM YOU WANT TO
DISABLE". The following items can be turned off:

-  categories
-  category\_fields
-  custom\_fields
-  member\_data
-  pagination

**Note:** If you disable categories, category fields will automatically
be disabled.

You may specify multiple items to disable by separating them with the
pipe character::

	disable="categories|member_data"

The best approach is to examine the data you are showing in each
instance of the tag. If there is a type of data you are not utilizing,
turn it off.

For example, let's say you are using an instance of your channel tag to
show your 10 most recent entry titles::

	{exp:channel:entries orderby="date" sort="desc" limit="10"}
		<a href="{title_permalink='channel/comments'}">{title}</a><br>
	{/exp:channel:entries}

In this example you are only showing the title of your entries and
nothing else; yet, the channel tag automatically fetches categories and
other data automatically. Using the disable= parameter you can turn off
the unneeded features from being queried. In this case, you don't need
any of the features that can be disabled. ::

	{exp:channel:entries orderby="date" sort="desc" limit="10" disable="categories|custom_fields|member_data|pagination"}
		<a href="{title_permalink='channel/comments'}">{title}</a><br>
	{/exp:channel:entries}

display\_by=
------------

::

	display_by="month"

There are three optional "display types" that let you limit the display
of your entries. If you **do not** use these parameters the default
grouping is by "number".

These parameters interact with the "limit" parameter to tailor the
number of entries per page. For example, if you want to show only the
last month that contains entries you'll do this::

	display_by="month" limit="1"

At 12 AM on the first day of the month, based on your server time, the
previous month will no longer be visible. If you want to show three
months you'll do this::

	display_by="month" limit="3"

If you want to show only one day you'll do this::

	display_by="day" limit="1"

If you want to show 14 days you'll do this::

	display_by="day" limit="14"

These are all optional. If you do not use this parameter your entries
will be limited by number. In other words::

	limit="20"

Will show 20 entries.

**display\_by="week"**

The display\_by="week" parameter allows the displaying of entries by
week. To simply show the last week that contains entries, you can use
this::

	display_by="week" limit="1"

The display\_by="week" parameter can be used with other parameters like
`show_current_week=`_, `start_day=`_ and `week_sort=`_ to give more control
over how the weeks are displayed and used with pagination.

For example, if you want to display the current week by default but also
show entries in future weeks with pagination, you can use this::

	display_by="week" limit="1" show_future_entries="yes" show_current_week="yes"

**NOTE:** The display\_by parameter uses the last unit of time provided
that has entries. If you display\_by="day" then it will show the last
day that has entries. If you display\_by="month" combined with limit="3"
then it will show the last 3 months with entries, even if these months
are not consecutive.

This parameter uses UTC/GMT time and is not localized to the server or
logged in user.

dynamic=
--------

::

	dynamic="no"

The channel display engine sets some parameters dynamically, based on
what is in the URL. There are times, however, where you do not want the
parameters affected by what the URL contains. To override the dynamic
nature of the channel tag, use dynamic="no".

This is often useful if you want to list entries in a "sidebar" on your
site and have them always be the same ones regardless of which page on
your site you visit (main page, archives, comments, etc.). By setting
dynamic="no" you will ensure that the list is not affected by anything
passed in the URL.

Note: you may allow the tag to be sensitive to pagination data in the
url by including the `paginate=`_ parameter. If that tag
is used in conjunction with the dynamic parameter, the tag will act
dynamically for pagination data only.

dynamic_parameters=
-------------------

::

	dynamic_parameters="orderby|limit|sort"

The `Dynamic Parameters <dynamic_parameters.html>`_ feature permits a
{exp:channel:entries} tag's parameters to be set "on the fly" using POST
data submitted via a form. A practical use for this is to create some
display options in a form on your page that your visitors can use to
select their preferred page view.

**NOTE:** This feature will only work if page caching is turned OFF for
the template in which it is being used.

Every Parameter available to the channel tag can be set dynamically.

.. _channel-entries-dynamic-start:

dynamic\_start=
---------------

::

	dynamic_start="yes"

This parameter is only used in the tag when used in an RSS/Atom feed. It
will not do anything in any other circumstance. The default value is
"no", so you must specify this parameter in order to take advantage of
the feature.

When used in an RSS/Atom feed, this parameter allows ExpressionEngine to
dynamically provide a starting date for the feed. This is used to allow
EE to serve only *new* content when it is requested by the feed via a
RFC3229-compliant request (`RFC3229
info <http://tools.ietf.org/rfc/rfc3229.txt>`_).

entry\_id=
----------

::

	entry_id="147"

You can hard code the channel tag to show a specific channel entry.

You can hard code the channel tag to show a specific channel entry. You
may also specify multiple entries by separating them with the pipe
character::

	entry_id="13|42|147" Or use "not" to exclude entries::

	entry_id="not 45|534|807"

entry\_id\_from=
----------------

::

	entry_id_from="20"

This parameter is used together with
`entry_id_to=`_ to designate a range of entries to
display. This parameter indicates the beginning of the range. With the
example above, the tag would begin displaying entries starting with
entry ID 20.

entry\_id\_to=
--------------

::

	entry_id_to="40"

This parameter is used together with
`entry_id_from=`_ to designate a range of entries
to display. This parameter indicates the end of the range. With the
example above, the tag would stop displaying entries at entry ID 40.

fixed\_order=
-------------

::

	fixed_order="3|7|1"

You can hard code the channel entries tag to show entries in a specific
order based on their entry ids. Entries will be displayed in the order
specified in the pipe delimited list. In the example above, the three
entries with id's 3, 7, and 1 would be displayed in that order.

If you wish, you can also cause the entries to be displayed in the
*reverse* of the order you specified. To do this, use the sort= param,
setting it to 'desc'::

	fixed_order="3|7|1" sort="desc"

In the above example, three entries would be displayed, in the order: 1,
7, and then 3.

**Note:** Using this parameter will automatically constrain the entries
tag to the entry id's you specify, effectively setting the `entry_id=`_
parameter to the same id's given to the fixed_order= parameter.

group\_id=
----------

::

	group_id="4"

You can decide from which Member Groups (by specifying the group ID) you
wish entries to be shown. If you choose "4", then only entries created
by members of the Member Group with the ID of 4 will be shown. You can
choose multiple Member Groups using a pipe::

	group_id="2|3|4"

Or exclude groups using "not"

::

	group_id="not 2|3|4"

.. _channel-entries-limit:

limit=
------

::

	limit="12"

This parameter limits the number of entries on any given page. The limit
will default to 100 entries if a value is not specified. If you are
using :doc:`pagination <pagination_page>` then this will determine
the number of entries shown per page.

month\_limit=
-------------

::

	month_limit="30"

This parameter lets you set a different limit for the month display than
the regular display. For example, let's say you normally only want 10
entries on your main channel page, but you want 100 entries shown when
viewing a specific month. For that, you could do this::

	{exp:channel:entries limit="10" month_limit="100"}

offset=
-------

::

	offset="1"

This parameter offsets the display by X number of entries. For example,
if you want to show all entries except the three latest ones, you would
do this::

	offset="3"

.. _channel-entries-orderby:

orderby=
--------

::

	orderby="date"

The "order" parameter sets the display order of the entries. Setting
options for this parameter include:

-  orderby="comment\_total"
-  orderby="date"
-  orderby="edit\_date"
-  orderby="entry\_id"
-  orderby="expiration\_date"
-  orderby="most\_recent\_comment"
-  orderby="random"
-  orderby="screen\_name"
-  orderby="title"
-  orderby="url\_title"
-  orderby="username"
-  orderby="view\_count\_one"
-  orderby="view\_count\_two"
-  orderby="view\_count\_three"
-  orderby="view\_count\_four"

In addition you can order by a `channel
field <../../cp/admin/channels/custom_channel_fields.html>`_. Use
the "short\_name" of the field::

	orderby="name_of_field"

**Note:** Ordering by a Relationship field will cause entries to appear
in the order the relationships were made, not based on any content from
the related entries.

**Note:** When ordering by "random", entries that have been marked as
"sticky" will not appear first; they will appear randomly with all other
entries.

**Multiple Orders and Sorts**

The `orderby=`_ and `sort=`_ parameters can accept multiple
values using the pipe character. This allows you to have multiple levels
of ordering and then specify the sort rules for those levels.

For example, if you wish to order by **screen\_name** *alphabetically*
and then have the **most recent entries** *first*, you would use the
following parameters::

	orderby="screen_name|date" sort="asc|desc"

**Multiple Site Manager and orderby=**

The orderby= parameter can accept a site short-name in the namespace. ::

	orderby="default_site:body|second_site:summary"

When ordering by multiple fields from multiple Sites, remember that
entries from another site will have no data for that field, and the
entries will be ordered as such. This results in ordering entries by
Site and then Field(s)::

	orderby="default_site:body|second_site:summary"

Will result in::

	Default Site - Entry One - Albert
	Default Site - Entry Two - Bobby
	Second Site    - Entry One - Alligator
	Second Site    - Entry Two - Buffalo

If you have multiple Sites where each site has a field with the same
exact short name, then you can specify that short name (without the site
specified) and ExpressionEngine will treat those two fields as the same
value and be able to order them as if they were the same field::

	orderby="body"

::

	Default Site - Entry One - Albert
	Second Site    - Entry One - Alligator
	Default Site - Entry Two - Bobby
	Second Site    - Entry Two - Buffalo

Thus, the output will then be ordered by the body, regardless of the
originating site.

paginate=
---------

::

	paginate="top"

This parameter is for use with entry :doc:`pagination <pagination_page>`
and determines where the pagination
code will appear for your channel entries:

#. **top**: The navigation text and links will appear *above* your list
   of entries.
#. **bottom**: The navigation text and links will appear *below* your
   list of entries.
#. **both**: The navigation text and links will appear both above and
   below your list of entries.

If no parameter is specified, the navigation block will default to the
"bottom" behavior.

paginate\_base=
---------------

::

	paginate_base="site/index"

This tells ExpressionEngine to override the normal
:doc:`pagination <pagination_page>` link locations and point instead to
the explicitly stated template group and template.

paginate\_type=
---------------

::

	paginate_type="field"

This tells ExpressionEngine to function in "pagination" mode for your
channel entry fields so that you can automatically have an entry span
multiple pages. See the `Spanning a Channel Entry Across Multiple
Pages <pagination_spanning.html>`_ page.

related\_categories\_mode=
--------------------------

::

	related_categories_mode="no" related_categories_mode="yes"

**Important Note:** This parameter is intended for use **only** when you
are using the channel tag within "single entry" pages. Single entry
pages are ones that show only a single entry, specified by the ID number
or URL Title in the URL.

When enabled, this parameter alters the behavior of the
{exp:channel:entries} tag, causing it to ignore the entry ID or URL
title found in the URL, and *instead* show a list of entries that are in
the same category as the entry specified in the URL. This lets you
create a list of entries that are "related" to the primary one specified
by the URL.

The default limit when enabling related_categories_mode is 10
entries, and can be overridden with the addition of the
:ref:`channel-entries-limit` parameter.

When the related\_categories\_mode="" parameter is set to "yes", there
are two additional parameters available to the Channel Entries tag:
custom\_fields="yes" and member\_data="yes", which will allow the
displaying of field data and member data respectively. By default, those
two parameters are both set to "no" to reduce load. Below is a
simplified example with both optional parameters enabled::

	{exp:channel:entries related_categories_mode="yes" custom_fields="yes" member_data="yes"}
		<h2>{title}</h2>
		{body}
		<div class="posted">Posted by {author} on {entry_date format='%m/%d'} at {entry_date format='%h:%i %A'}</div>
	{/exp:channel:entries}

**Note:** Relationships, Reverse Relationships, Pagination, and
Categories are not available when Related Category Mode is enabled.

relaxed\_categories=
--------------------

::

	relaxed_categories="yes"

This parameter allows you to use the category indicator in your URLs
with an entries tag specifying multiple channels that do **not** share
category groups.

.. _channel-entries-require_entry:

require\_entry="yes"
--------------------

::

	require_entry="yes"

This parameter tells the channel tag that it should expect the URL to
contain a valid entry ID or a valid URL title. If an ID is not found in
the URL, the tag will not display any data. Normally, the channel tag
will show something, even if the URL doesn't point to a particular
entry. For example, your main channel page will typically show several
of your most recent entries. Whereas your "single entry" pages, like
your comment page, will show a single entry based on information in the
URL. However, if one of your single entry pages is requested, but it
doesn't contain a valid ID, this parameter will tell the tag that you do
not wish the template to display anything.

**Note:** You will often use this parameter in conjunction with the 
`if no_results`_ conditional.

search:field\_name=
-------------------

::

	search:body="pickles"

The "search:" parameter allows you to constrain Channel Entries output
based on content within your fields. You specify which field to search
by using the field's short name immediately after "search:". You can
search based on whether a field is an exact match to your provided term
or whether or not a field simply contains your term.

**Note:** Only fields of the type "Text Input", "Textarea", and
"Drop-down Lists" are searched with this parameter.

"Exact" Matching
~~~~~~~~~~~~~~~~

Use "Exact" matching when you only want entries whose fields match your
terms exactly. To trigger "Exact" matching, precede your search terms
with an equal sign (=). You may provide a pipe-delimited list of terms. ::

	search:body="=pickles|shoes"

This example would return all entries where the 'body' field was either
'pickles' or 'shoes'.

Or you can use "not" to exclude entries::

	search:body="=not pickles|shoes"

This example would return all entries where the 'body' field was
**neither** 'pickles' **nor** 'shoes'. Note that the equal sign precedes
the keyword "not".

"Contains" Matching
~~~~~~~~~~~~~~~~~~~

Use "Contains" matching when you are interested only if a field contains
your terms, anywhere in the field. ::

	search:body="pickles|shoes"

This example would return all entries that contained the term "pickles"
or contained the term "shoes". ::

	search:body="not pickles|shoes"

This example would return all entries that contained **neither** the
term "pickles" **nor** contained the term "shoes".

"Contains" matching also lets you use an inclusive set of terms. Instead
of separating the terms with a pipe symbol, you would separate them with
double ampersands (so that single ampersands may still be used as part
of search terms). ::

	search:body="pickles&&shoes"

This example would return all entries that contained **both** the term
"pickles" **and** the term "shoes". ::

	search:body="not pickles&&shoes"

This example would return all entries that **do not** contain **both**
the term "pickles" **and** the term "shoes". It would still display
entries that contain the word "pickles", so long as the field did not
*also* contain the word "shoes".

When doing a "Contains" search, ExpressionEngine is literally just
looking for matches on the combination of letters given. For instance
using "cat" in a "Contains" search would match entries with "cat",
"cats", "category", "vocation", etc. If you need "Contains" matching,
but only want entries that include the term as a whole word on its own,
you can add the special trigger \\W after the term.

::

	search:body="cat\W" 
	
The above example will return all entries that contain the whole word "cat".
It will not match entries where the phrase "cat" only lies within another word.

Including / Excluding Empty Fields
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you wish to only display entries that have (or do not have) content,
use the special search constant IS\_EMPTY. ::

	search:body="IS_EMPTY"

This example would return all results where the body field is empty. ::

	search:body="not IS_EMPTY"

This example would return all results where the body field is **not**
empty, i.e. only entries where the body field had content.

The IS\_EMPTY search constant can also be used in conjunction with other
search terms, for both "Exact" and "Contains" type matching. ::

	search:body="=IS_EMPTY|sandwich"

Since it is prefixed with =, this example is an "Exact" match and would
return all results where the body is empty or is "sandwich". ::

	search:body="IS_EMPTY|sandwich"

This example is a "Contains" match and would return all results where
the body is empty **or** contains the word "sandwich". ::

	search:body="not IS_EMPTY|sandwich|salad"

This example returns only entries that have content, but **not** those
that contain "sandwich" **nor** those that contain the word "salad".

**Note:** You may use multiple search: parameters in a channel entries
tag, as long as each one is searching a different field. e.g.::

	{exp:channel:entries search:style="=ale" search:region="germany|belgium" search:rating="=3|4|5"}

show\_current\_week=
--------------------

::

	show_current_week="yes"

Requires use of the
`display_by=`_ "week" parameter. When
set to "yes", it displays the current week by default (i.e. no
pagination in the URL) and automatically adjusts the pagination links to
indicate the correct page for that week.

show\_expired=
--------------

::

	show_expired="yes"

You can determine whether you wish for entries that have "expired" to be
included.

.. _channel-entries-show-future-entries:

show\_future\_entries=
----------------------

::

	show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to
be included. This option is useful when doing things like creating a
list of events, some of which have not occurred yet. Note that EE will
still display past entries; this parameter simply instructs EE to also
include entries from the future.

.. _channel-entries-show-pages:

show\_pages=
------------

::

	show_pages="only" show_pages="no"

Allows you to tell the Channel module whether to show those entries that
have been used to create pages with the Pages module. You can also set
it to "only" and *only* show those entries that have had Pages assigned
to them. The default is "yes" and it will treat entries with assigned
Pages no different from any other entries.

**Tip:** show_pages="only" acts in the same manner as
`dynamic=`_ "no". show\_pages="only" aids in building
persistent menus based off existing Pages.

sort=
-----

::

	sort="asc" sort="desc"

The sort order can be ascending or descending. The order will default to
"descending" if nothing is specified.

**Multiple Orders and Sorts**

Along with the `orderby=`_ parameter
this parameter can accept multiple values using the pipe character so
that you can have multiple levels of ordering and set the sort for those
levels. For example, if you wish to order by screen\_name alphabetically
and then have the most recent entries first, you would use the following
parameters::

	orderby="screen_name|date" sort="asc|desc"

If no sort value or an incorrect value is specified for an order, then
the default will be "descending".

start\_day=
-----------

::

	start_day="Monday"

Requires use of the
`display_by=`_ "week" parameter. Allows
you to choose whether the week starts on Monday or Sunday. Sunday is the
default.

start\_on=
----------

::

	start_on="2004-06-05 20:00"

You can specify a particular date/time on which to start the entries.
Only entries that are on or after this date will be included in the
display. This parameter is often used together with the
`stop_before=`_ parameter for limiting the entry
display to a specific date range.

Format
~~~~~~

The date/time **must** be specified in the following format:

-  YYYY-MM-DD HH:MM

Here, YYYY is the four-digit year, MM is the two-digit month, DD is the
two-digit day of the month, HH is the two-digit hour of the day, and MM
is the two-digit minute of the hour. If the month, day, hour or minute
has only one digit, precede that digit with a zero. (E.g. "March 9,
2004" would become "2004-03-09".) All date/times are given in local
time, according to your ExpressionEngine configuration.

You may optionally use a 12 hour time format by including am/pm notation
(2004-06-05 20:00 is equivalent to: 2004-06-05 08:00 PM and 2004-06-05
08:00 pm; 2004-06-05 08:00 is equivalent to: 2004-06-05 08:00 AM and
2004-06-05 08:00 am).

**Note:** If you are using a non-English language pack, it's necessary
to use a 24 hour format only, as the AM/PM indicators may have been
changed.

Common Uses
~~~~~~~~~~~

This parameter can be used in conjunction with :ref:`global-current_time`::

	{exp:channel:entries channel="{my_weblog}" sort="desc" start_on="{current_time format='%Y-%m-%d %H:%i'}" show_future_entries="yes"}

The above would display future entries starting from the current time.

If the date needs to be set dynamically, then PHP must often be used.
:doc:`Enable PHP </templates/php>` in the Template and set
it to be parsed on "input". One example usage is::

	<?php
		$start_time = $this->EE->localize->decode_date('%Y-%m-%d %H:%i', $this->EE->localize->now - 86400);
	?>
	
	{exp:channel:entries channel="{my_weblog}" limit="5" sort="desc" start_on="<?php echo $start_time; ?>"}

The above would display up to 5 entries with entry dates that fall
within the previous 24 hours (86400 seconds is the number of seconds in
one day: 60 seconds \* 60 minutes \* 24 hours).

status=
-------

::

	status="open"

You may restrict to entries with a particular
`status <../../cp/admin/channels/statuses.html>`_ . The two
statuses "open" and "closed" are default statuses that are always
available, so you can always specify those if needed. You can choose
multiple statuses using a pipe::

	status="draft|reviewed|published"

Or exclude statuses using "not"

::

	status="not submitted|processing|closed"

stop\_before=
-------------

::

	stop_before="2004-06-12 20:00"

You can specify a particular date/time on which to end the entries. Only
entries that are before this date will be included in the display
(entries exactly on this date/time will not be included). This parameter
is often used together with the `start_on=`_ parameter
for limiting the entry display to a specific date range.

If the date needs to be set dynamically, then PHP must often be used.
:doc:`Enable PHP </templates/php>` in the Template and set
it to be parsed on "input" and then use something like this::

	<?php
		$current_time = $this->EE->localize->decode_date('%Y-%m-%d %H:%i', $this->EE->localize->now - 518400);
	?>
	
	{exp:channel:entries channel="{my_weblog}" orderby="date" sort="desc" stop_before="<?php echo $current_time; ?>"}

The above would display entries in descending date from six days in the
past (518400 is the number of seconds in six days : 60 seconds \* 60
minutes \* 24 hours \* 6 days).

sticky=
-------

::

	sticky="no"

By default, sticky topics always remain at the top of the page. You can
manually turn off stickies by using the above parameter.

.. _channel-entries-track-views:

track\_views=
-------------

ExpressionEngine lets you track how many times a channel entry has been
"viewed" on a particular page. The view tracking counter will ONLY
increment on pages that show a single entry using the
{exp:channel:entries} tag, and only when the feature is enabled by using
this parameter in the tag you want tracked. Up to four different
instances of the view counter can be used (each in a different tag on a
different page).

To enable the view counter you will use one of these four parameters in
the tag located in the page you want tracked. ::

	track_views="one" track_views="two" track_views="three" track_views="four"

Each of the above four parameters corresponds to these variables, which
can be shown within any tag::

	{view_count_one}{view_count_two}{view_count_three}{view_count_four}

.. _channel-entries-uncategorized-entries:

uncategorized\_entries=
-----------------------

::

	uncategorized_entries="no"

By default, when specifying the `category=`_ parameter with 'not ' at the
beginning , ExpressionEngine will show all entries without those
categories *including* any entries without categories assigned. If you
would prefer that ExpressionEngine not show these uncategorized entries,
then set this parameter to "no" and they will be ignored.

url\_title=
-----------

::

	url_title="my_wedding"

This parameter limits the query by an entry's url\_title. You can use
the pipe character to query by multiple url\_titles::

	url_title="my_wedding|my_honeymoon|my_kids"

Or you can add "not" to exclude url\_titles::

	url_title="not my_in_laws"

**Note:** It is strongly suggested you use the channel="" parameter when
using the url\_title="" parameter as ExpressionEngine can be set up to
allow the same url\_title for two different channels.

username=
---------

::

	username="petunia"

This parameter limits the query by username. You can use the pipe
character to query by multiple usernames::

	username="tom|dick|harry"

Or you can add "not" to exclude usernames

::

	username="not tom|dick|harry|fred"
	
You can also use the constant "CURRENT\_USER" to show entries from only the currently logged in user.

::

	username="CURRENT_USER"

This allow each logged-in user to get only their entries. Users who are
not logged in won't see anything. Alternatively, you can use the
constant "NOT\_CURRENT\_USER" to show entries **except** from the
currently logged in user. ::

	username="NOT_CURRENT_USER"

week\_sort=
-----------

::

	week_sort="asc"

Requires the `display_by=`_ "week"
parameter. Changes the sort order of the weeks so that you can either
have the weeks displayed by most recent first or oldest first. Separate
from the sort="" parameter, which will only affect the sorting of
entries within the weeks, not the weeks themselves.

year=, month=, day=
-------------------

::

	year="2003"
	
::

	month="12"

::
	
	day="23"

You can limit queries by year, month, or day. For example, to show all
of year 2002 you'll use only::

	year="2002"

To show only the month of December in 2003 you'll do this

::

	year="2003"

::
	
	month="12"

**Note:** Don't combine these parameters with the "display\_by"
parameter discussed previously, as these take precedence over that
parameter. In addition, the three parameters must be applied "in order",
meaning that you must specify the year if you specify the month and you
must specify both month and year to use day.


.. _channel-entries-single-variables:

****************
Single Variables
****************

.. contents::
   :local:

absolute\_count
---------------

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
-----------------

::

	{absolute_results}

This variable will always display the absolute total number of results
that are returned by the tag, regardless of pagination.

aol\_im
-------

::

	{aol_im}

The author's AOL IM account name.

author
------

::

	{author}

The author's screen name, if it exists; otherwise, this variable will
display the username.

author\_id
----------

::

	{author_id}

The member ID of the author.

avatar\_image\_height
---------------------

::

	{avatar_image_height}

The height of the avatar image associated with the entry's author.
Typically used as such::

	{if avatar}
		<img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar">
	{/if}

avatar\_image\_width
--------------------

::

	{avatar_image_width}

The width of the avatar image associated with the entry's author.
Typically used as such::

	{if avatar}
		<img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar">
	{/if}

avatar\_url
-----------

::

	{avatar_url}

The URL to the avatar image associated with the entry's author.
Typically used as such::

	{if avatar}
		<img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar">
	{/if}

bio
---

::

	{bio}

The author's bio as entered in their profile.

channel
-------

::

	{channel}

The name of the channel that the currently displayed entry is assigned
to.

channel\_id
-----------

::

	{channel_id}

The ID number of the actual channel (not the *entry*.)

channel\_short\_name
--------------------

::

	{channel_short_name}

The short name of the channel of the currently displayed entry.

yahoo\_im
---------

::

	{yahoo_im}

The author's Yahoo IM account name.

comment\_auto\_path
-------------------

::

	{comment_auto_path}

This variable is replaced by the URL set in the "Comment Page URL"
preference under Admin > Channel Management. No entry id, URL Title, or
other information is included; this is the exact URL from the
preference.

comment\_entry\_id\_auto\_path
------------------------------

::

	{comment_entry_id_auto_path}

This variable is replaced by the URL set in the "Comment Page URL"
preference under Admin > Channel Management. The ID number of the entry
will be automatically added. For example, this::

	<a href="{comment_entry_id_auto_path}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/234">my entry</a>

comment\_total
--------------

::

	{comment_total}

The total number of comments for a particular entry.

comment\_url\_title\_auto\_path
-------------------------------

::

	{comment_url_title_auto_path}

This variable is replaced by the URL set in the "Comment Page URL"
preference under Admin > Channel Management. The URL Title of the entry
will be automatically added. For example, this::

	<a href="{comment_url_title_auto_path}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/comments/ice_cream/">my entry</a>

count
-----

::

	{count}

The "count" out of the current entries being displayed. If five entries
are being displayed, then for the fourth entry the {count} variable
would have a value of "4".

edit\_date
----------

::

	{edit_date format="%Y %m %d"}

The date on which the entry was last edited. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

email
-----

::

	{email}

The author's raw email address.

entry\_date
-----------

::

	{entry_date format="%Y %m %d"}

The date the entry was submitted. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

entry\_id
---------

::

	{entry_id}

The ID number of the channel entry.

.. _channel-entries-entry_id_path:

entry\_id\_path
---------------

::

	{entry_id_path='channel/archives'}

The URL to the specified template. The ID number of the entry will be
automatically added. For example, this::

	<a href="{entry_id_path='channel/archives'}">my entry</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/archives/234/">my entry</a>

entry\_site\_id
---------------

::

	{entry_site_id}

The Site ID of the channel entry.

expiration\_date
----------------

::

	{expiration_date format="%Y %m %d"}

The expiration date of the entry. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

.. _channel-entries-forum_topic_id:

forum\_topic\_id
----------------

::

	{forum_topic_id}

If you have the Discussion Forum Module installed and if you have
associated a forum thread with a channel entry (via the "Forum" section
of the Publish tab), this is the ID number of the forum thread. It will
typically be used like so::

	{if forum_topic}
		<a href="{path='forums/viewthread'}{forum_topic_id}">Discuss this in our forums</a>
	{/if}

.. _channel-entries-gmt_entry_date:

gmt\_entry\_date
----------------

::

	{gmt_entry_date format="%Y %m %d"}

The date the entry was submitted in GMT. This variable is **not**
localized for each user's date settings. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

gmt\_edit\_date
---------------

::

	{gmt_edit_date format="%Y %m %d"}

The date on which the entry was last edited in GMT. This variable is
**not** localized for each user's date settings. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

icq
---

::

	{icq}

The author's ICQ IM user identification number.

interests
---------

::

	{interests}

The author's "interests" as entered in their profile.

ip\_address
-----------

::

	{ip_address}

The IP address of the author when they posted the entry.

location
--------

::

	{location}

The author's location as entered in their profile.

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

The author's MSN IM account name.

occupation
----------

::

	{occupation}

The author's occupation as entered in their profile.

.. _channel-entries-page-uri:

page\_uri
---------

::

	{page_uri}

If you have the Pages Module installed and if you have associated a
static page with a channel entry (via the "Pages" section of the Publish
tab), this is the page uri for the page. It will typically be used like
so::

	{if page_uri != ''} <a href="{page_uri}">View this page</a> {/if}

.. _channel-entries-page-url:

page\_url
---------

::

	{page_url}

If you have the Pages Module installed and if you have associated a
static page with a channel entry (via the "Pages" section of the Publish
tab), this is the page url for the page (the site URL + the page URI).
It will typically be used like so::

	{if page_url != ''} <a href="{page_url}">View this page</a> {/if}

permalink
---------

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

profile\_path
-------------

::

	{profile_path='member'}

The URL to the author of the current entry. The ID number of the author
will be automatically added. Used in a link::

	<a href="{profile_path='member'}">{author}</a>

recent\_comment\_date
---------------------

::

	{recent_comment_date format="%Y %m %d"}

The date of the most recent comment associated with the entry. See `Date Variable
Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

relative\_url
-------------

::

	{relative_url}

The URL stored in your Channel URL setting under Channel Management,
with the domain information removed. For example, if your setting is
http://example.com/index.php/site/index/ the variable will output
/index.php/site/index/. Typically only used in the Atom feed Template.

relative\_date
--------------

::

	{relative_date}

The amount of time that has passed between when the entry was submitted
and the current time. The output is displayed in the format 1 day, 3
hours, 45 minutes. This variable is useful for displaying something such
as "This entry was posted 1 day, 3 hours, 45 minutes ago."

screen\_name
------------

::

	{screen_name}

The author's screen name, if it exists. This variable will not return
anything if the author does not have a screen name defined.

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

	{if signature_image}
		<img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature">
	{/if}

signature\_image\_url
---------------------

::

	{signature_image_url}

The URL to the signature image associated with the entry's author.
Typically used as such::

	{if signature_image}
		<img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature">
	{/if}

signature\_image\_width
-----------------------

::

	{signature_image_width}

The width of the signature image associated with the entry's author.
Typically used as such::

	{if signature_image}
		<img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature">
	{/if}

status
------

::

	{status}

The status of the entry (open, closed, etc.)

switch=
-------

::

	{switch='option_one|option_two|option_three'}

This variable permits you to rotate through any number of values as the
entries are displayed. The first entry will use "option\_one", the
second will use "option\_two", the third "option\_three", the fourth
"option\_one", and so on.

The most straightforward use for this would be to alternate colors. It
could be used like so::

	{exp:channel:entries channel="yourchannel"}
		<div class="{switch='one|two'}">
			<h2>{title}</h2>
			{body}
		</div>
	{/exp:channel:entries}

The entries would then alternate between <div class="one"> and <div
class="two">.

Multiple instances of the {switch=} tag may be used and the system will
intelligently keep track of each one.

title
-----

::

	{title}

The title of the entry

title\_permalink
----------------

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
--------------

::

	{total_results}

The total number of entries being displayed.

trimmed\_url
------------

::

	{trimmed_url}

The domain name for your site, trimmed of any subdomains. For instance,
example.com becomes example.com. Typically only used in the Atom feed
Template.

url
---

::

	{url}

The author's raw URL, if it exists.

url\_or\_email
--------------

::

	{url_or_email}

The author's URL if it exists, otherwise the raw email address.

url\_or\_email\_as\_author
--------------------------

::

	{url_or_email_as_author}

A hyperlink to the author's URL if it exists, otherwise it will be an
email link for the author's email address. The text of the link will be
the author's screenname if it exists, otherwise it will be the username.

url\_or\_email\_as\_link
------------------------

::

	{url_or_email_as_link}

This is similar to the above variable. The difference is that the text
for the link will be either the URL or the email address.

url\_title
----------

::

	{url_title}

The human readable title used in the URL as a permalink.

.. _channel-entries-url_title_path:

url\_title\_path
----------------

::

	{url_title_path='channel/archives'}

The URL to the specified template. The "url title" of the entry will be
automatically added. For example, this::

	<a href="{url_title_path='channel/archives'}">permalink</a>

Would be rendered like this::

	<a href="http://example.com/index.php/channel/archives/ice_cream/">permalink</a>

username
--------

::

	{username}

The author's username.

week\_date
----------

::

	{week_date format="%Y %m %d"}

The date that the week of the currently displayed entry started on, most
commonly used in "weekly" scenarios with the `date_heading`_ variable pair.

This variable is affected by the `start_day=`_ parameter. By default, the week date
will fall on Sunday for the week of the entry. When start\_day="Monday"
is used, the week date will fall on Monday for the week of the entry.
See `Date Variable Formatting <../../templates/date_variable_formatting.html>`_ for
more information.

.. _channel-entries-conditional-variables:

*********************
Conditional Variables
*********************

Conditionals allow you to more precisely control your content.

.. note:: A more complete explanation of conditional control structures
   and operators can be found on the `Global
   Conditionals <../../templates/globals/conditionals.html>`_ page.

Here is an example that tests for the "summary" field being not empty

::

	{if summary != ""}
	    The summary is not empty!
	{/if}

An alternate, shorthand syntax can accomplish the same thing

::

	{if summary}
	    The summary is not empty!
	{/if}

If only the variable name is in the conditional statement it tests for
"not empty".

Many of the single variables can be used in a conditional. You may
always use the short name of one of your custom entry fields in a
conditional. In addition, there are several unique conditionals.

.. contents::
   :local:

if allow\_comments
------------------

::

	{if allow_comments} content {/if}

This special conditional lets you conditionally display content if the
current entry is set to allow comments. This conditional will return
FALSE if commenting has expired. ::

	{if allow_comments}
		({comment_total}) <a href="{comment_path='channel/comments'}">Comments</a>
	{/if}

Or you can display content if commenting is disabled::

	{if allow_comments == FALSE} content {/if}

if avatar
---------

::

	{if avatar} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has an avatar image specified. ::

	{if avatar}
		<img src="{avatar_url}" width="{avatar_image_width}" height="{avatar_image_height}" alt="{author}'s avatar">
	{/if}

if category\_request
--------------------

::

	{if category_request} content {/if}

This special conditional lets you conditionally display content if the
current tag is being displayed based on a category specified in the URL.
For instance, if the URL being viewed were
http://example.com/index.php/channel/archives/C13/ that could trigger
this conditional.

if count
--------

::

	{if count > 5} content {/if}

This conditional allows you to test against which number entry is being
displayed. You could use this to apply different styles to the first
entry or have the last 5 entries out of 10 be formatted differently.

if forum\_topic
---------------

::

	{if forum_topic} content {/if}

You may use this conditional for displaying content when a forum topic
has been associated with a channel entry. That option is only available
if the Discussion Forum Module is installed. It will typically be used
like so::

	{if forum_topic}
		<a href="{path='forums/viewthread'}/{forum_topic_id}">Discuss this in our forums</a>
	{/if}

if no\_results
--------------

::

	{if no_results} content {/if}

You may use this conditional for displaying a message in the case when
no entries are returned. The contents inside of the conditional will be
displayed in cases where there are no results returned for the tag. 

::

	{if no_results}  <p>There are no entries available.</p>  {/if}

Further, you may specify that another Template be shown in a case when
there are no results. In order to do that, you must use the redirect=
variable

::

	{if no_results} {redirect="channel/noresult"} {/if}

Lastly, if you want to simply display your 404 page (with 404 headers)
when no entries are returned, simply use "404" as the template name. 

::

	{if no_results} {redirect="404"} {/if}

if not\_category\_request
-------------------------

::

	{if not_category_request} content {/if}

This special conditional lets you conditionally display content if the
current tag is *not* being displayed based on a category specified in
the URL. For instance, if the URL being viewed were
http://example.com/index.php/channel/archives/C13/ that would not
trigger this conditional.

if not\_forum\_topic
--------------------

::

	{if not_forum_topic} content {/if}

You may use this conditional for displaying content when *no* forum
topic has been associated with a channel entry. That option is only
available if the Discussion Forum Module is installed. It will typically
be used like so::

	{if not_forum_topic} There is no forum discussion available. {/if}

if photo
--------

::

	{if photo} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has a photo image specified. ::

	{if photo}
		<img src="{photo_url}" width="{photo_image_width}" height="{photo_image_height}" alt="{author}'s photo">
	{/if}

if signature\_image
-------------------

::

	{if signature_image} content {/if}

This special conditional lets you conditionally display content if the
current entry's author has a signature image specified. ::

	{if signature_image}
		<img src="{signature_image_url}" width="{signature_image_width}" height="{signature_image_height}" alt="{author}'s signature">
	{/if}

if sticky
---------

::

	{if sticky == 'y'} content {/if}

You may test whether an entry is set to be "sticky". You may also test
whether it is not "sticky". ::

	{if sticky == 'n'} content {/if}

**************
Variable Pairs
**************

Variable pairs contain an opening and closing tag as well as content
in-between. Example::

	{date_heading}  <h1>{entry_date format="%Y %m %d"}</h1>  {/date_heading}

The reason variable pairs have an opening and closing pair is because
the information between the pairs can be shown or not shown if the
criteria for each tag is met.

In the case of the "date\_heading" pair, for example, it only appears at
a certain interval that you set (hourly, daily, weekly, monthly, etc.).
By using a pair of variables you can put HTML formatting between them
that only gets shown when the interval is met. Otherwise, the chunk is
not displayed.


date\_footer
------------

::

	{date_footer display="daily"}  <p>That's all from today!</p>  {/date_footer}

The date footer can be used to show a footer at certain intervals. The
interval can be set to show hourly, daily, weekly, monthly, or yearly.
An optional "display" parameter can be used to set the display interval::

	{date_footer display="daily"}

Choices for the "display" parameter are:

-  {date\_footer display="hourly"}
-  {date\_footer display="daily"}
-  {date\_footer display="weekly"}
-  {date\_footer display="monthly"}
-  {date\_footer display="yearly"}

If no parameter is specified it will default to "daily".

.. note:: You can use as many date\_footers as you want in the same tag.
   There is a bit of a performance hit, however, since date parsing is the
   most processor intensive. Read the caching section for information on
   improving performance.

date\_heading
-------------

::

	{date_heading}  <h1>{entry_date format="%Y %m %d"}</h1>  {/date_heading}

The date heading can be used to show a heading at certain intervals. The
interval can be set to show hourly, daily, weekly, monthly, or yearly.

When using weekly intervals, the `week_date`_ variable would typically be used. ::

	{date_heading display="weekly"}Week of {week_date format="%Y %m %d"}{/date_heading}

An optional "display" parameter can be used to set the display interval::

	{date_heading display="daily"}

Choices for the "display" parameter are:

-  {date\_heading display="hourly"}
-  {date\_heading display="daily"}
-  {date\_heading display="weekly"}
-  {date\_heading display="monthly"}
-  {date\_heading display="yearly"}

If no parameter is specified it will default to "daily".

.. note:: You can use as many date\_footers as you want in the same tag.
   There is a bit of a performance hit, however, since date parsing is the
   most processor intensive. Read the caching section for information on
   improving performance.
   
categories
----------

Categories are unique in that they are a "looping pair". Since you can
have multiple categories per entry, we need a mechanism to show as many
categories as exist for each entry. ::

	{categories}
		{category_image}
		<a href="{path='channel/index'}">{category_name}</a>
	{/categories}

.. contents::
   :local:
   :depth: 1

Categories Tag Pair Parameters
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. contents::
   :local:

backspace=
^^^^^^^^^^

::

	{categories backspace="5"}

Backspacing removes characters (including spaces and line breaks) from
the last iteration of the loop. For example, if you put a <br> tag
after each category you'll have this::

	Local News<br>
	Health News<br>
	Science News<br>

You might, however, not want the <br> tag after the final item. Simply
count the number of characters (including spaces and line breaks) you
want to remove and add the backspace parameter to the tag. The <br>
tag has 4 characters plus a new line character, so you would do this::

	{categories backspace="5"}
		{category_name}<br>
	{/categories}

That will produce code like this::

	   Local News<br>
	   Health News<br>
	   Science News

limit=
^^^^^^

::

	{categories limit="1"}

This parameter limits the number of categories output by this variable
pair. When in use, it will limit the output to the number provided,
using the specified order in the Category Management page to determine
which categories get shown.

show=
^^^^^

::

	{categories show="4|7"}

With this parameter, you can specify which categories can be included
when listing them with the {categories} variable pair. For instance, if
you had entries that belonged to several categories, you could use this
parameter to limit the display to only those categories you specified.
While the entries may actually belong to more categories, only those you
specify would be shown. Category IDs are separated by the pipe character
to specify more than one category.

You may alternatively specify which categories to not show::

	{categories show="not 3|6|8"}

show\_group=
^^^^^^^^^^^^

::

	{categories show_group="1|3"}

With this parameter, you can specify which category groups can be
included when listing categories with the {categories} variable pair.
For instance, if you had entries in a channel that had multiple category
groups but only wanted to show the categories for one of those groups,
you could specify that category group's ID number with this parameter.
Category Group IDs are separated by the pipe character to specify more
than one category group.

You may alternatively specify which category groups to not show::

	{categories show_group="not 2|4"}

Categories Tag Pair Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. contents::
   :local:

active
^^^^^^

::

	{if active} This category is active {/if}

You may use this conditional to test whether the category shown is the
active category or not, based on the dynamic URI segment.

category\_description
^^^^^^^^^^^^^^^^^^^^^

::

	{category_description}

The description associated with the category.

category\_group
^^^^^^^^^^^^^^^

::

	{category_group}

The category group ID of the category.

category\_id
^^^^^^^^^^^^

::

	{category_id}

The category ID associated with the category.

parent\_id
^^^^^^^^^^

::

	{parent_id}

The category ID associated with the category's parent (or 0 in the case
of a top level category).

category\_image
^^^^^^^^^^^^^^^

::

	{category_image}

The image link (or other information) you can optionally store with each
category within the Control Panel.

category\_name
^^^^^^^^^^^^^^

::

	{category_name}

This displays the name of the category.

category\_url\_title
^^^^^^^^^^^^^^^^^^^^

::

	{category_url_title}

This variable displays the URL title of the category

path=''
^^^^^^^

::

	{path='channel/index'}

This variable will be replaced by a URL to the specifies Template
Group/Template. The category designation information will automatically
be added to the end of the URL so that the target page will know which
category to display.

If you want the category links to point to your site index instead of a
particular template group/template you can use SITE\_INDEX instead::

	{categories}  <a href="{path='SITE_INDEX'}">{category_name}</a>  {/categories}

Custom Category Fields
~~~~~~~~~~~~~~~~~~~~~~

All custom fields assigned to a category can be accessed using the
"short name" of the field::

	{class} {extended_description} {category_name_fr} etc..

These are totally dynamic in that any field you create for your category
will automatically be available by its "short name" as a variable.

**********
Pagination
**********

The `Pagination <pagination_page.html>`_ feature allows you to create
"next" and "previous" links between pages of entries.

You can also span a single entry `across multiple
pages <pagination_spanning.html>`_, like online magazines do.

**********************
Entry "Views" Tracking
**********************

The Channel Entries tag also has a `Views
Tracking <entry_tracking.html>`_ feature that lets you track the number
of times an entry has been viewed.

*************
Relationships
*************

The Channel Module supports a powerful `Relationship <relationships.html>`_
feature that lets you associate one entry to another.
