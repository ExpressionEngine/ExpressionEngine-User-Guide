RSS
===

.. contents::
   :local:
   :depth: 1

Introduction
------------

The main purpose of the RSS tag is to render the top portion of the feed
containing the name of the author, the character encoding, etc., while
the main channel tag renders the actual rows.

The RSS Module Tag is intended to be used in conjunction with the
:doc:`/add-ons/channel/channel_entries`.
The entire RSS feed is enclosed between the following tags::

	{exp:rss:feed}

	{/exp:rss:feed}

Sample RSS and Atom Templates
-----------------------------

- :download:`Sample Atom Feed <sample_atom.txt>`
- :download:`Sample RSS Feed <sample_rss.txt>`

Parameters
----------

.. contents::
   :local:

If you use any of the following parameters, you will probably want to
mirror the same settings for your {exp:channel:entries} tag contained
inside the RSS tag.

channel=
~~~~~~~~

::

	channel="which"

**Required**. From which :doc:`channel
</cp/admin/channels/channel_management>` to show the meta data
information.

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

status=
~~~~~~~

::

	status="open"

You may restrict to a particular :doc:`status
</cp/admin/channels/statuses>`. You can choose multiple statuses using a
pipe::

	status="draft|reviewed|published"

Or exclude statuses using "not"

::

	status="not submitted|processing|closed"

username=
~~~~~~~~~

::

	username="petunia"

This parameter limits the query by username. You can use the pipe
character to query by multiple usernames

::

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


Variables
---------

.. contents::
   :local:

author
~~~~~~

::

	{author}

The name of the person who submitted the last entry.

channel\_description
~~~~~~~~~~~~~~~~~~~~

::

	{channel_description}

The description of the channel.

channel\_id
~~~~~~~~~~~

::

	{channel_id}

ID number of the channel (not the channel entry, the actual channel).

channel\_language
~~~~~~~~~~~~~~~~~

::

	{channel_language}

The code for the language the channel is in (en-us, etc.).

channel\_name
~~~~~~~~~~~~~

::

	{channel_name}

The name of the channel.

channel\_url
~~~~~~~~~~~~

::

	{channel_url}

The URL associated with the channel as set in the "Channel URL"
preference under :doc:`Channel Administration
</cp/admin/channels/channel_management>`.

date
~~~~

::

	{date format="%Y %m %d"}

The date on which the last entry was submitted. See :doc:`Date Variable
Formatting </templates/date_variable_formatting>` for more information.

edit\_date
~~~~~~~~~~

::

	{edit_date format="%Y %m %d"}

The date on which the entry was last edited. See :doc:`Date Variable
Formatting </templates/date_variable_formatting>` for more information.

email
~~~~~

::

	{email}

The email of the person submitting the very last entry.

encoding
~~~~~~~~

::

	{encoding}

The XML character encoding for the channel.

gmt\_entry\_date
~~~~~~~~~~~~~~~~

::

	{gmt_date format="%Y %m %d"}

The date the entry was submitted in GMT. This variable is **not**
localized for each user's date settings. See :doc:`Date Variable
Formatting </templates/date_variable_formatting>` for more information.

gmt\_edit\_date
~~~~~~~~~~~~~~~

::

	{gmt_edit_date format="%Y %m %d"}

The date on which the entry was last edited in GMT. This variable is
**not** localized for each user's date settings. See `Date Variable
Formatting </templates/date_variable_formatting>` for more information.

version
~~~~~~~

::

	{version}

The version of ExpressionEngine that you are using (1.0, 1.1, etc.).
This data is pulled from system/core/core.system.php.


RFC3229 Support
---------------

ExpressionEngine has the ability to serve only new content if it
receives an `RFC3229-compliant <http://www.ietf.org/rfc/rfc3229.txt>`_
request. This means that programs or servers that are configured to do
so can request to only see new content that has been produced since the
last time it requested a feed and EE will provide only that new content.
This allows you to reduce bandwidth costs and download time by only
serving the necessary content.

This ability is provided by adding a special parameter to the
{exp:channel:entries} opening tag, :ref:`channel_entries_dynamic_start`.
It is used like so::

	{exp:channel:entries channel="default_site" limit="10" dynamic_start="yes"}

Empty Feeds and Errors
----------------------

If the combination of tag parameters you specify leads to an error or an
empty feed, ExpressionEngine will output a valid, empty RSS feed for
you. If you'd like to display the tag errors in this default feed to
help troubleshoot why no entries are available, you can put the RSS
module into debug mode by adding the debug= parameter::

	{exp:rss:feed channel="default_site" debug="yes"}

If you want, you can also specify your own feed to use in place of the
default, with the option of displaying the tag error as well, using the
{if empty\_feed} conditional. Tag errors can be displayed with the
{error} variable.::

	{if empty_feed}
		<?xml version="1.0" encoding="{charset}"?>
		<rss version="2.0">
			<channel>
				<title>{site_name}</title>
				<link>{site_url}</link>
				<description>{site_name}</description>
				<item>
					<title>Feed Error</title>
					<description>{error}</description>
				</item>
			</channel>
		</rss>
	{/if}
