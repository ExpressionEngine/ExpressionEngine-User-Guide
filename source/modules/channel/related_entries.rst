Relating Entries to Other Entries
=================================

Creating Data Relationships for Increased Power
ExpressionEngine allows you to create relationships between entries in
different channels, or between channel entries.

Why would you relate entries to other entries?
----------------------------------------------

Here is an example to illustrate why someone would want to create
relationships between entries.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The Night Club Owner
~~~~~~~~~~~~~~~~~~~~

Imagine that you run a night club in which different musical artists
perform nightly. To help promote your club you decide to create an
ExpressionEngine channel to display information about each night's
events.

Each day you submit a new entry with information about a particular
night's performances. You also include detailed information about each
performer (names, bio, discography, etc.), but since many of the
performers appear regularly at your club, over time you end up with a
lot of duplicated information in your entries. And if a piece of
information about a performer changes you have to updated it in every
entry that mentions them. Before long you realize that this is not very
efficient.

If only you could maintain a second channel in which you store only
information about each performer, and then connect it somehow to the
main channel so that you would never have to duplicate information.
Guess what? You can with *relationships*.

In the above scenario, your primary channel (let's call the channel
Events) would contain only information that is unique about a particular
night, like the date, time, any special pricing, etc., and the second
channel (let's call the channel Performers) would contain only
information about each performer. You would then dynamically pull
information from each performer into the appropriate *Events* channel.
To your site visitors the information appears just like a normal channel
entry, but internally, ExpressionEngine is pulling information from one
entry and showing it within another.

The following graphic illustrates the concept. The "events" channel on
the left is showing information from the "performers" channel on the
right. Only a *relationship* exists between the entries. The data itself
is never duplicated.

|image0|
Each channel entry can be related to one or more entries from other
Channels.
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Setting Up A Relationship
-------------------------

There are two steps to setting up a relationship, described in detail
next:

#. Create the relationship between a channel and another.
#. Add "related entry" tags to your Templates so the related data can be
   shown.

Once your relationship is set up, whenever you access the PUBLISH page
to submit new content you'll see a drop-down menu showing the titles of
all the entries in the related channel. Choose a particular entry from
the list and voila... the entries will be related.

1. Create the Relationship
~~~~~~~~~~~~~~~~~~~~~~~~~~

Add a field of the type "Relationship" to the appropriate Channel Field
Group in:

Admin > Channel Administration > Channel Fields

When you add a Relationship field you'll be asked to choose which
channel to relate it to. Once set, you'll see a drop-down menu in the
PUBLISH page showing the titles of all the entries in the related
channel.

2. Add Related Entry Tags to your Template
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To show a related entry, you will use the following tags::

	{related_entries id="field_name"}{/related_entries}

**Note:** The id parameter must contain the Field Short Name of the
Relationship field. For example, if your field is called *performers*
you'll use this::

	{related_entries id="performers"}{/related_entries}

**Important:** The above tags **must** be placed inside your
`{exp:channel:entries} <channel_entries.html>`_ tag.

Here is an example showing the related entries tags inside your channel
entry tags::

	{exp:channel:entries channel="news" limit="15"}<h3>{title}</h3>{body}{related_entries id="performers"} <h2>{title}</h2> {body}{/related_entries}Submitted on: {entry_date format='%M %d, %Y'}{/exp:channel:entries}

{if no\_related\_entries} Conditional
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The {if no\_related\_entries} conditional allows you specify certain
content to be displayed when an entry does not have a related entry for
the field specified. ::

	{exp:channel:entries channel="news" limit="15"}<h3>{title}</h3>{body}{related_entries id="performers"}          {if no_related_entries}           <h2>No Performer Information Available</h2>          {/if}          <h2>{title}</h2>          {body}{/related_entries}Submitted on: {entry_date format='%M %d, %Y'}{/exp:channel:entries}

What Type of Related Data can be Displayed?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nearly anything that is available in the *channel entries* tags can be
shown as related data.

-  `{exp:channel:entries} <channel_entries.html>`_

**Important:** For performance reasons all related entry data is cached
internally by the system when you submit new entries using the Publish
page. This has the unfortunate side effect of making a some items that
are normally dynamic not able to be used. These include various
statistical variables:

{view\_count\_one}
{view\_count\_two}
{view\_count\_three}
{view\_count\_four}
{expiration\_date }
{comment\_expiration\_date}
{recent\_comment\_date}
{comment\_total}

Examples:
~~~~~~~~~

**Channel:** To relate a channel entry to another you'll do something
similar to this::

	{exp:channel:entries channel="news" limit="15"}<h3>{title}</h3>{body}{related_entries id="channel"}   {date_heading}   <h3 class="date">{entry_date format=' %l, %F %d, %Y '}</h3>   {/date_heading}   <h2 class="title">{title}</h2>   {summary}   <div class="posted">Posted by <a href="{profile_path='member/index'}">{author}</a> on {entry_date format='%m/%d'}   {categories}   <a href="{path='SITE_INDEX'}">{category_name}</a>   {/categories}{/related_entries}Submitted on: {entry_date format='%M %d, %Y'}{/exp:channel:entries}

As indicated above: Do **not** place the opening/closing entry tags
within the related tags. ONLY put the variables and HTML you'd like to
appear.

.. |image0| image:: ../../images/related_entries.gif
