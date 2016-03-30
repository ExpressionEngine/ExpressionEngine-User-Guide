Channel Settings
================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Channel Manager --> Settings`

.. Overview

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Design & Content
* Channels: Edit Channels

Fields
-------

.. contents::
  :local:
  :depth: 1

.. Each Fields

This screen allows you to edit the preferences and settings associated
with the channel. 

General Channel Preferences
---------------------------

Description
~~~~~~~~~~~~~~~~~~~

A short description of the channel. Spaces, punctuation, and other
special characters are allowed. This is used, for example, in RSS feeds.

XML language
~~~~~~~~~~~~

This preference determines the XML language setting that you can use for
your channel pages. This information is available as a variable for use
in the channel Templates.

URL and Path Settings
---------------------

Channel
~~~~~~~

The full URL to the main page for this channel.

Comment form
~~~~~~~~~~~~

The full URL to the "comments" page for this channel. The URL should
include the Template Group and Template. For example:
http://example.com/index.php/channel/comments/

Search results
~~~~~~~~~~~~~~

The full URL where you would like search results from this channel to be
pointed. The URL should include the Template Group and Template. For
example, if you wish that links off the search results page point to
your "comments" Template you might use:
http://example.com/index.php/channel/comments/

RSS feed
~~~~~~~~

The URL where you can view the RSS feed for this channel. For example:
http://example.com/index.php/channel/rss\_2.0/.

Live Look template
~~~~~~~~~~~~~~~~~~

The template that will be used for a Live Look at your entries. Links
are available from both the main Edit section of the control panel as
well as the "View Entry" page that displays after submitting an entry.
If you do not want to use a Live Look Template with a channel, simply
set this preference to "No Live Look Template".

Defaults
--------

Generated title
~~~~~~~~~~~~~~~

Title assigned to all new entries in this channel.

URL title prefix
~~~~~~~~~~~~~~~~

URL title prefix assigned to all new entries in this channel.

Status
~~~~~~

The default status for new channel entries. The available options depend
on what :doc:`Status Group <channel_groups>` the channel is assigned to
use and which statuses are defined for that group.

Category
~~~~~~~~

The default category for new channel entries. The available options
depend on what :doc:`Category Group <channel_groups>` the channel is
assigned to use and which categories are defined for that group. In
addition to the categories from that group, the "None" option is also
available, in which case no category will be selected by default.


Search excerpt
~~~~~~~~~~~~~~

You can specify which field from your entries to use in search result
excerpts. The list is dynamically populated depending on which :doc:`Field
Group <channel_groups>` the channel is assigned to use and which
fields are defined for that group. Only fields that have been set as
"searchable" will be included.

Publishing
----------

HTML formatting
~~~~~~~~~~~~~~~

This setting determines how raw HTML code within entries is handled.
There are three options:

#. **Convert HTML into character entities**: This will convert the HTML
   tags so that they will display as plain text on a page when viewed.
   This would be useful if you want to display example code often.
#. **Allow only safe HTML**: This will allow "safe" HTML (<b>, <i>,
   <em>, <del>, <ins>, <strong>, <pre>, <code>, <blockquote>, <h2>,
   <h3>, <h4>, <h5>, <h6>) to be kept so that they are interpreted by
   the browser when the entry is viewed. All other HTML is converted to
   character entities and the raw code will be seen upon viewing.
#. **Allow ALL HTML**: This leaves the HTML code as written and the code
   will then be interpreted by the browser when the entry is viewed.


Show extra publish controls?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When set to yes, a second set of publish controls will appear at the top of the 
publish form for this channel.


Allow image URLs?
~~~~~~~~~~~~~~~~~

You can determine whether or not you want people to be able to display
images within your entries by using the URL for the image. If "Yes" is
selected for this option, people can display images as inline content in
your channel. If the setting is "No" then images will not be allowed.


Render URLs and Email addresses as links?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When this option is set to "Yes", any full URLs or email addresses will
be automatically formatted as a valid HTML link to the address. If the
option is "No" then the URL or email address will be treated and
displayed as plain text.

Channel Form
------------

Status
~~~~~~

Default status for forms in this channel.

Author
~~~~~~

Default author for guest entries posted via Channel Form.

Allow guest submissions?
~~~~~~~~~~~~~~~~~~~~~~~~

When set to yes, unregistered users will be able to submit forms for this channel.

Versioning
----------

Enable entry versioning?
~~~~~~~~~~~~~~~~~~~~~~~~

When set to enable, ExpressinEngine will save revisions of each entry for this 
channel.

Maximum versions per entry
~~~~~~~~~~~~~~~~~~~~~~~~~~

Maximum number of revisions to be saved per entry.

Notifications
-------------

Notify the author of an entry whenever a comment is submitted?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Whenever a new comment is submitted, the author of the entry can be
notified. An email will be sent to the email address associated with the
author member in the system.

Enable recipient list below for comment notification?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can specify a list of email addresses to receive notifications when
a comment is posted. This setting determines whether or not the list
will receive the updates. The addresses are specified in the next
setting.

Email address of Notification Recipient(s)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the previous setting is set to "Yes", then these are the recipients
of the email alert. You may define a single email address or list
multiple addresses by separating them with a comma. Ex:
"admin@example.com, joe@example.com"

Commenting
----------

.. _channel_prefs_allow_comments:

Allow comments?
~~~~~~~~~~~~~~~

Determines whether or not comments are allowed in this channel.

Allow comments default?
~~~~~~~~~~~~~~~~~~~~~~~

When set to yes, the "Allow comments" option will be set to "yes" by default


Require membership?
~~~~~~~~~~~~~~~~~~~

Determines whether visitors to the website must be members in order to
post. If this preferences is set to "Yes" and an unregistered visitor
attempts to post a comment the comment will not be accepted and the
visitor will receive a message.

Require Email?
~~~~~~~~~~~~~~

You can optionally require that anyone posting comments must list an
email address. You can determine in your
:doc:`/cp/design/templates/index` whether or not the address is shown
publicly, but requiring an email address in order to post comments can
help reduce the number of "spam" comments you receive since the visitor
must submit a valid email address.

Moderate comments?
~~~~~~~~~~~~~~~~~~

If this option is enabled, then comments will not immediately appear on
the site. Instead, the comments will go into a queue and await
review/moderation by an administrator.

Member Groups (such as the SuperAdmin Group by default) can be set to
bypass comment moderation and have their comments posted immediately.
That option can be set at :menuselection:`Members --> Member Groups`.

Maximum characters allowed?
~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may set a maximum number of characters allowed in any comment.
Setting this preference to 0 (zero) will not place a restriction on the
number of characters allowed.

Comment time limit
~~~~~~~~~~~~~~~~~~

This is the optional number of seconds that must lapse after a comment
is posted before that same user can post another comment. This setting
can help reduce comment "spam". The preference can be left blank or set
to 0 (zero) if you do not want to impose a limit.

Comment expiration
~~~~~~~~~~~~~~~~~~

The number of days after an entry is posted in which to allow comments.
After that period has expired, the entry will be closed to commenting
and the comment form will no longer appear. Existing comments will still
be displayed. Enter 0 (zero) for no expiration. Note that this
preference sets the *default* setting for the channel. The setting can
be overridden and changed on a per-entry basis.

You may override this setting in the
:doc:`/add-ons/comment/control_panel/index` section of the Comment
Module so that comments are set to be moderated rather than closed once
the expiration period is passed.

If you also select the checkbox accompanying this setting, then all
existing entries in this channel will be updated to reflect the new
setting when you submit.

Text formatting
~~~~~~~~~~~~~~~

This setting determines how comments are formatted by the system. There
are three possible choices:

#. **None**: No automatic formatting is done; the comment is left as-is.
   This could be useful if you want people to be able to use full HTML
   in their comments.
#. **xhtml**: Comments will be formatted as valid XHTML. Text blocks
   with double line breaks will be turned into paragraphs, line breaks
   will be replaced by <br /> tags, special characters will be formatted
   as character entities, etc.
#. **Auto <br />**: All line breaks in the comment will be converted
   into <br /> tags. This includes any line breaks that may occur inside
   HTML code, which could cause unexpected displays.

HTML formatting
~~~~~~~~~~~~~~~

Like the channel setting, this preference determines how raw HTML code
within comments is handled. There are three options:

#. **Convert HTML into character entities**: This will convert the HTML
   tags so that they will display as plain text on a page when viewed.
   This would be useful if you want to display example code often.
#. **Allow only safe HTML**: This will allow "safe" HTML (<b>, <i>, <u>,
   <em>, <strike>, <strong>, <pre>, <code>, <blockquote>) to be kept so
   that they are interpreted by the browser when the entry is viewed.
   All other HTML is converted to character entities and the raw code
   will be seen upon viewing. Note that while <h2>, <h3>, <h4>, <h5>,
   <h6> are considered "safe" in channel entries, they are not allowed
   in comments.
#. **Allow all HTML (not recommended)**: This leaves the HTML code as
   written and the code will then be interpreted by the browser when the
   entry is viewed. This is generally not recommended since visitors
   would be able to submit HTML code which could drastically alter the
   display of your webpage.

Allow image URLs?
~~~~~~~~~~~~~~~~~

You can determine whether or not you want people to be able to display
images within comments by using the URL for the image.

Render URLs and Email addresses as links?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When this option is set to "Yes", any full URLs or email addresses will
be automatically formatted as a valid HTML link to the address. If the
option is "No" then the URL or email address will be treated and
displayed as plain text.

