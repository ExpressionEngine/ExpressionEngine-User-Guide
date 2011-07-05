Reverse Related Entries
=======================

Find the Entries That Have a Parent Relationship With This One
What are Reverse Relationships?
-------------------------------

**Note:** This documentation references the definitions and examples
given in the `Related Entries <related_entries.html>`_ section. If you
have not done so, please read that first.

An entry that has related entries is called the parent or primary entry.
The entries that are being related to are called its children. In the
example given in the Related Entries documentation, the events would be
the parents as they are pulling in the data from the performer entries,
which are the children. A Reverse Relationship would be the child
entries displaying all of the parent entries that have created a
relationship with it. Thus, a performer entry would be able to display
any and all events at which the band has played.

Displaying Reverse Relationships
--------------------------------

1. Add Related Entry Tags to your Template
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To show a related entry, you will use the following tags::

	{reverse_related_entries orderby="title"}{/reverse_related_entries}

**Note:** Unlike the Related Entries tag, the Reverse Related Entries
tag does not contain an id parameter as there is no need. However, it
does support six of the typical parameters used by other
ExpressionEngine tags::

	{reverse_related_entries channel="default_site" status="open" sort="desc" orderby="title" offset="5" limit="10"}{/reverse_related_entries}

In this way, you can grab reverse related entries from specific channels
with a certain status while sorting and ordering as you see fit. As
Relationships are cached in order to reduce the load on
ExpressionEngine, these are the only parameters available at this time.

**Important:** The above tags **must** be placed inside your
`{exp:channel:entries} <channel_entries.html>`_ tag.

Here is an example showing the related entries tags inside your channel
entry tags::

	{exp:channel:entries channel="performers" limit="15"}<h3>{title}</h3>     {body}     {reverse_related_entries sort="desc" orderby="title"}           <h2>{title}</h2> {body}     {/reverse_related_entries}          Submitted on: {entry_date format='%M %d, %Y'}          {/exp:channel:entries}

{if no\_reverse\_related\_entries} Conditional
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The {if no\_reverse\_related\_entries} conditional allows you specify
certain content to be displayed when an entry does not have a related
entry for the field specified. ::

	{exp:channel:entries channel="performers" limit="15"}         <h3>{title}</h3>         {body}         {reverse_related_entries sort="desc" orderby="title"}          {if no_reverse_related_entries}           <h2>No Events for This Performer</h2>          {/if}          <h2>{title}</h2>          {body}{/reverse_related_entries}Submitted on: {entry_date format='%M %d, %Y'}{/exp:channel:entries}

What Type of Reverse Related Data can be Displayed?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nearly anything that is available in the `*channel
entries* <channel_entries.html>`_ tags can be shown as reverse related
data.

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
