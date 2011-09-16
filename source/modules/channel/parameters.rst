Channel Entries Tag Parameters
==============================

A variety of parameters can be added to control what is displayed by the
channel tag. Parameters are added to the opening partion of the tag.
Here is a simple example of the channel tag with three parameters. ::

	{exp:channel:entries  channel="news"  orderby="date"  limit="15" }     content {/exp:channel:entries}

In the above example, only 15 channel entries are shown, all from the
"news" channel, ordered by "date".

The following parameters are available:


author\_id=
~~~~~~~~~~~

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
~~~~~~~~~~

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
~~~~~~~~~~~~~~~~

::

	cache="yes" refresh="60"

This parameter enables tag caching. Refresh is the number of minutes
between cache refreshes.

cat\_limit=
~~~~~~~~~~~

::

	cat_limit="30"

This parameter lets you set a different limit for the category display
than the regular display. For example, let's say you normally only want
10 entries on your main channel page, but you want 100 entries shown
when viewing a specific category. For that, you could do this::

	{exp:channel:entries limit="10" cat_limit="100"}

category=
~~~~~~~~~

::

	category="2"

Categories are specified by ID number (the ID number of each
`category <../../cp/admin/content_admin/category_edit.html>`_ is
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
~~~~~~~~~~~~~~~~

::

	category_group="2"


Category Groups are specified by ID number (the ID number of each
`category
group <../../cp/admin/content_admin/category_management.html>`_ is
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
~~~~~~~~

::

	channel="news"

From which
`channel <../../cp/admin/content_admin/channel_management.html>`_ to
show the entries (will show all channels if no channel is specified).
Additionally, you can use the pipe character to separate multiple
channels::

	channel="channel1|channel2|channel3"

Or you can add the word "not" (with a space after it) to exclude
channels::

	channel="not channel1|channel2|channel3"

You must specify this parameter if you use the `category name in
URL <../../cp/admin/content_admin/global_channel_preferences.html>`_
feature.

disable=
~~~~~~~~

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

	{exp:channel:entries orderby="date" sort="desc" limit="10"} <a href="{title_permalink='channel/comments'}">{title}</a><br /> {/exp:channel:entries}

In this example you are only showing the title of your entries and
nothing else; yet, the channel tag automatically fetches categories and
other data automatically. Using the disable= parameter you can turn off
the unneeded features from being queried. In this case, you don't need
any of the features that can be disabled. ::

	{exp:channel:entries orderby="date" sort="desc" limit="10" disable="categories|custom_fields|member_data|pagination"} <a href="{title_permalink='channel/comments'}">{title}</a><br /> {/exp:channel:entries}

display\_by=
~~~~~~~~~~~~

::

	display_by="month" ``display_by="day"`` ``display_by="week"``

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
`show\_current\_week="" <parameters.html#par_show_current_week>`_,
`start\_day="" <parameters.html#par_start_day>`_, and
`week\_sort="" <parameters.html#par_week_sort>`_ to give more control
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
~~~~~~~~

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
url by including the `paginate <#par_paginate>`_ parameter. If that tag
is used in conjunction with the dynamic parameter, the tag will act
dynamically for pagination data only.

dynamic\_start=
~~~~~~~~~~~~~~~

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
~~~~~~~~~~

::

	entry_id="147"

You can hard code the channel tag to show a specific channel entry.

You can hard code the channel tag to show a specific channel entry. You
may also specify multiple entries by separating them with the pipe
character::

	entry_id="13|42|147" Or use "not" to exclude entries::

	entry_id="not 45|534|807"

entry\_id\_from=
~~~~~~~~~~~~~~~~

::

	entry_id_from="20"

This parameter is used together with
`entry\_id\_to= <#par_entry_id_to>`_ to designate a range of entries to
display. This parameter indicates the beginning of the range. With the
example above, the tag would begin displaying entries starting with
entry ID 20.

entry\_id\_to=
~~~~~~~~~~~~~~

::

	entry_id_to="40"

This parameter is used together with
`entry\_id\_from= <#par_entry_id_from>`_ to designate a range of entries
to display. This parameter indicates the end of the range. With the
example above, the tag would stop displaying entries at entry ID 40.

fixed\_order=
~~~~~~~~~~~~~

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
tag to the entry id's you specify, effectively setting the `entry\_id=
parameter <#par_entry_id>`_ to the same id's given to the fixed\_order=
parameter.

group\_id=
~~~~~~~~~~

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

limit=
~~~~~~

::

	limit="12"

This parameter limits the number of entries on any given page. The limit
will default to 100 entries if a value is not specified. If you are
using :doc:`pagination <pagination_page>` then this will determine
the number of entries shown per page.

month\_limit=
~~~~~~~~~~~~~

::

	month_limit="30"

This parameter lets you set a different limit for the month display than
the regular display. For example, let's say you normally only want 10
entries on your main channel page, but you want 100 entries shown when
viewing a specific month. For that, you could do this::

	{exp:channel:entries limit="10" month_limit="100"}

offset=
~~~~~~~

::

	offset="1"

This parameter offsets the display by X number of entries. For example,
if you want to show all entries except the three latest ones, you would
do this::

	offset="3"

orderby=
~~~~~~~~

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
field <../../cp/admin/content_admin/custom_channel_fields.html>`_. Use
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

	Default Site - Entry One - Albert         Default Site - Entry Two - Bobby         Second Site    - Entry One - Alligator         Second Site    - Entry Two - Buffalo

If you have multiple Sites where each site has a field with the same
exact short name, then you can specify that short name (without the site
specified) and ExpressionEngine will treat those two fields as the same
value and be able to order them as if they were the same field::

	orderby="body"

::

	Default Site - Entry One - Albert         Second Site    - Entry One - Alligator         Default Site - Entry Two - Bobby         Second Site    - Entry Two - Buffalo

Thus, the output will then be ordered by the body, regardless of the
originating site.

paginate=
~~~~~~~~~

::

	paginate="top" ``paginate="bottom"`` ``paginate="both"``

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
~~~~~~~~~~~~~~~

::

	paginate_base="site/index"

This tells ExpressionEngine to override the normal
:doc:`pagination <pagination_page>` link locations and point instead to
the explicitly stated template group and template.

paginate\_type=
~~~~~~~~~~~~~~~

::

	paginate_type="field"

This tells ExpressionEngine to function in "pagination" mode for your
channel entry fields so that you can automatically have an entry span
multiple pages. See the `Spanning a Channel Entry Across Multiple
Pages <pagination_spanning.html>`_ page.

related\_categories\_mode=
~~~~~~~~~~~~~~~~~~~~~~~~~~

::

	related_categories_mode="no" ``related_categories_mode="yes"``

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

The default limit when enabling related\_categories\_mode="" is 10
entries, and can be overridden with the addition of the
`limit="" <#par_limit>`_ parameter.

When the related\_categories\_mode="" parameter is set to "yes", there
are two additional parameters available to the Channel Entries tag:
custom\_fields="yes" and member\_data="yes", which will allow the
displaying of field data and member data respectively. By default, those
two parameters are both set to "no" to reduce load. Below is a
simplified example with both optional parameters enabled::

	{exp:channel:entries related_categories_mode="yes" custom_fields="yes" member_data="yes"}     <h3>{title}</h3>     {body}     <div class="posted">Posted by {author} on {entry_date format='%m/%d'} at {entry_date format='%h:%i %A'}</div> {/exp:channel:entries}

**Note:** Relationships, Reverse Relationships, Pagination, and
Categories are not available when Related Category Mode is enabled.

relaxed\_categories=
~~~~~~~~~~~~~~~~~~~~

::

	relaxed_categories="yes"

This parameter allows you to use the category indicator in your URLs
with an entries tag specifying multiple channels that do **not** share
category groups.

require\_entry="yes"
~~~~~~~~~~~~~~~~~~~~

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

**Note:** You will often use this parameter in conjunction with the `no
results <conditional_variables.html#cond_if_no_results>`_ conditional.

search:field\_name=
~~~~~~~~~~~~~~~~~~~

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
^^^^^^^^^^^^^^^^

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
^^^^^^^^^^^^^^^^^^^

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
	
The above example will return all entries that contain the whole word "cat". It will not match entries where the phrase "cat" only lies within another word.

Including / Excluding Empty Fields
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
~~~~~~~~~~~~~~~~~~~~

::

	show_current_week="yes"

Requires use of the
`display\_by="week" <parameters.html#par_display_by>`_ parameter. When
set to "yes", it displays the current week by default (i.e. no
pagination in the URL) and automatically adjusts the pagination links to
indicate the correct page for that week.

show\_expired=
~~~~~~~~~~~~~~

::

	show_expired="yes"

You can determine whether you wish for entries that have "expired" to be
included.

show\_future\_entries=
~~~~~~~~~~~~~~~~~~~~~~

::

	show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to
be included. This option is useful when doing things like creating a
list of events, some of which have not occurred yet. Note that EE will
still display past entries; this parameter simply instructs EE to also
include entries from the future.

show\_pages=
~~~~~~~~~~~~

::

	show_pages="only" ``show_pages="no"``

Allows you to tell the Channel module whether to show those entries that
have been used to create pages with the Pages module. You can also set
it to "only" and *only* show those entries that have had Pages assigned
to them. The default is "yes" and it will treat entries with assigned
Pages no different from any other entries.

**Tip:** show\_pages="only" acts in the same manner as
`dynamic="no" <#par_dynamic>`_. show\_pages="only" aids in building
persistent menus based off existing Pages.

sort=
~~~~~

::

	sort="asc" ``sort="desc"``

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
~~~~~~~~~~~

::

	start_day="Monday"

Requires use of the
`display\_by="week" <parameters.html#par_display_by>`_ parameter. Allows
you to choose whether the week starts on Monday or Sunday. Sunday is the
default.

start\_on=
~~~~~~~~~~

::

	start_on="2004-06-05 20:00"

You can specify a particular date/time on which to start the entries.
Only entries that are on or after this date will be included in the
display. This parameter is often used together with the
`stop\_before= <#par_stop_before>`_ parameter for limiting the entry
display to a specific date range.

Format
^^^^^^

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
^^^^^^^^^^^

This parameter can be used in conjunction with
`{current\_time} <../../templates/globals/single_variables.html#var_current_time>`_::

	{exp:channel:entries channel="{my_weblog}" sort="desc" start_on="{current_time format='%Y-%m-%d %H:%i'}" show_future_entries="yes"}

The above would display future entries starting from the current time.

If the date needs to be set dynamically, then PHP must often be used.
`Enable PHP <../../templates/php_templates.html>`_ in the Template, set
it to be parsed on "input". One example usage is::

	<?php     $start_time = $this->EE->localize->decode_date('%Y-%m-%d %H:%i', $this->EE->localize->now - 86400); ?> {exp:channel:entries channel="{my_weblog}" limit="5" sort="desc" start_on="<?php echo $start_time; ?>"}

The above would display up to 5 entries with entry dates that fall
within the previous 24 hours (86400 seconds is the number of seconds in
one day: 60 seconds \* 60 minutes \* 24 hours).

status=
~~~~~~~

::

	status="open"

You may restrict to entries with a particular
`status <../../cp/admin/content_admin/statuses.html>`_ . The two
statuses "open" and "closed" are default statuses that are always
available, so you can always specify those if needed. You can choose
multiple statuses using a pipe::

	status="draft|reviewed|published"

Or exclude statuses using "not"

::

	status="not submitted|processing|closed"

stop\_before=
~~~~~~~~~~~~~

::

	stop_before="2004-06-12 20:00"

You can specify a particular date/time on which to end the entries. Only
entries that are before this date will be included in the display
(entries exactly on this date/time will not be included). This parameter
is often used together with the `start\_on= <#par_start_on>`_ parameter
for limiting the entry display to a specific date range. See the
`start\_on= <#par_start_on>`_ parameter for information about how to
define the date/time in the parameter.

If the date needs to be set dynamically, then PHP must often be used.
`Enable PHP <../../templates/php_templates.html>`_ in the Template, set
it to be parsed on "input" and then use something like this::

	<?php     $current_time = $this->EE->localize->decode_date('%Y-%m-%d %H:%i', $this->EE->localize->now - 518400); ?> {exp:channel:entries channel="{my_weblog}" orderby="date" sort="desc" stop_before="<?php echo $current_time; ?>"}

The above would display entries in descending date from six days in the
past (518400 is the number of seconds in six days : 60 seconds \* 60
minutes \* 24 hours \* 6 days).

sticky=
~~~~~~~

::

	sticky="no"

By default, sticky topics always remain at the top of the page. You can
manually turn off stickies by using the above parameter.

track\_views=
~~~~~~~~~~~~~

ExpressionEngine lets you track how many times a channel entry has been
"viewed" on a particular page. The view tracking counter will ONLY
increment on pages that show a single entry using the
{exp:channel:entries} tag, and only when the feature is enabled by using
this parameter in the tag you want tracked. Up to four different
instances of the view counter can be used (each in a different tag on a
different page).

To enable the view counter you will use one of these four parameters in
the tag located in the page you want tracked. ::

	track_views="one" ``track_views="two"`` ``track_views="three"``

``track_views="four"``

Each of the above four parameters corresponds to these variables, which
can be shown within any tag::

	{view_count_one}{view_count_two}{view_count_three}{view_count_four}

uncategorized\_entries=
~~~~~~~~~~~~~~~~~~~~~~~

::

	uncategorized_entries="no"

By default, when specifying the `category=`_ parameter with 'not ' at the
beginning , ExpressionEngine will show all entries without those
categories *including* any entries without categories assigned. If you
would prefer that ExpressionEngine not show these uncategorized entries,
then set this parameter to "no" and they will be ignored.

url\_title=
~~~~~~~~~~~

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
~~~~~~~~~

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
~~~~~~~~~~~

::

	week_sort="asc"

Requires the `display\_by="week" <parameters.html#par_display_by>`_
parameter. Changes the sort order of the weeks so that you can either
have the weeks displayed by most recent first or oldest first. Separate
from the sort="" parameter, which will only affect the sorting of
entries within the weeks, not the weeks themselves.

year=, month=, day=
~~~~~~~~~~~~~~~~~~~

::

	year="2003" ``month="12"`` ``day="23"``

You can limit queries by year, month, or day. For example, to show all
of year 2002 you'll use only::

	year="2002"

To show only the month of December in 2003 you'll do this::

	year="2003" month="12"

**Note:** Don't combine these parameters with the "display\_by"
parameter discussed previously, as these take precedence over that
parameter. In addition, the three parameters must be applied "in order",
meaning that you must specify the year if you specify the month and you
must specify both month and year to use day.

Examples
~~~~~~~~

Here are a few examples of the channel tag using multiple parameters at
the same time. ::

	{exp:channel:entries channel="news|sports" limit="15"}     channel content {/exp:channel:entries}

The above tag would display the first 15 entries from the "news" and
"sports" channels. ::

	{exp:channel:entries limit="10" orderby="most_recent_comment" sort="desc"}     channel content {/exp:channel:entries}

The above tag would display the 10 entries with the most recent
comments. ::

	{exp:channel:entries group_id="not 3|5" year="2003" channel="politics" category="17"}     channel content {/exp:channel:entries}

The above tag would display entries from 2003 for the "politics" channel
if they belong to the category with the ID "17". Only entries created by
members who are *not* part of Member Groups 3 or 5 will be included.
