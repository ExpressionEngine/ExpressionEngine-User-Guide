Submitting Content Via Email
============================

This page describes the possible syntax you can use in the body of your
Moblog emails. In addition to the regular body text of the email (and
the file/image attachment) you can specify several values that can
override the defaults selected for your Moblog in the Control Panel.

These overrides are placed in the body of the email on their own lines.
The overrides should normally be placed at the top of the email before
your actual body content. Most of the overrides have multiple possible
syntaxes in order to give a choice in how to enter them to make it
easier.

Overrides
---------

In most cases, your email body will simply be whatever text you want to
submit along with your file::

	Here's a quick picture of the train station this morning on the way to work.  Notice the guy selling flowers?  He's been there every morning like clockwork for the last 2 years.  He's always cheerful and actually has some pretty nice flowers.

Here is a more complicated example that uses some of the "overrides"::

	AUTH:johnsmith:mysecretword {category}3,6{/category}  {field:body format="xhtml"}Here's a quick picture of the train station this morning on the way to work.  Notice the guy selling flowers?  He's been there every morning like clockwork for the last 2 years.  He's always cheerful and actually has some pretty nice flowers.{/field:body}  {field:location format="none"}Train Station{/field:location}

Available overrides:


category
~~~~~~~~

::

	{category}3,News,7{/category} ``<category>3,News,7</category>``

You may override the default category selection and specify your own.
You may specify either the category ID (the number) or the text name of
the category. Multiple categories can be separated by commas (,), colons
(:), or the pipe character (\|).

The category override can be defined using either braces
({category}{/category}) or angle brackets (<category></category>).

entry\_title
~~~~~~~~~~~~

::

	{entry_title}My Unique Title{/entry_title}

``<entry_title>My Unique Title</entry_title>``

You may override the standard entry title (which is determined from the
subject of the email) and specify your own. The entry title override can
be defined using either braces ({entry\_title}{/entry\_title}) or angle
brackets (<entry\_title></entry\_title>).

field
~~~~~

::

	{field:entry_body}food_images{/field:entry_body}

``<field:entry_body>Food Images</field:entry_body>``

You may override the default field into which the contents will be
placed and specify your own. You must specify into which field the text
should be placed and you may also specify more than one field. For
instance, if you want some text placed in the "body" field and other
text placed in the "summary" field then you could use::

	{field:body}This is the body text.{/field:body}  {field:summary}This is a summary.{/field:summary}

Furthermore, you may specify the formatting to use for the field by
adding a format parameter to the tag. For instance::

	{field:body format="xhtml"}This is the body text.{/field:body}

Available choices for the format parameter are:

-  **none**: sets the field to use no formatting
-  **br**: sets the field to use "Auto <br />" formatting
-  **xhtml**: sets the field to use "XHTML" formatting.
-  If you have set up your entry field to use a particular Plugin for
   formatting then you may also specify that Plugin by name here.

The field override can be defined using either braces ({field}{/field})
or angle brackets (<field></field>).

You may only specify a field that is of the "textarea" type here. You
cannot specify "text input" or "drop-down list" fields.

file\_archive
~~~~~~~~~~~~~

::

	{file_archive}yes{/file_archive}

``<file_archive>yes</file_archive>``

You may override the default file archive setting for the entry and
specify manually that this email is a file archive (i.e. you are simply
uploading a file and no corresponding entry should be made). Simply use
either yes, true, or 1 to indicate that only the files of this email
should be uploaded. Alternatively, use no, false, or 0 to indicate that
an entry should be created using this email.

The file archive override can be defined using either braces
({file\_archive}{/file\_archive}) or angle brackets
(<file\_archive></file\_archive>).

status
~~~~~~

::

	{status}pending{/status} ``<status>Closed</status>``

You may override the default status for the entry and specify your own.
Simply use the name of the status.

The status override can be defined using either braces
({status}{/status}) or angle brackets (<status></status>).

sticky
~~~~~~

::

	{sticky}yes{/sticky} ``<sticky>no</sticky>``

You may override the default "sticky" setting for the entry and specify
your own. Simply use the name of the status.

The sticky override can be defined using either braces
({sticky}{/sticky}) or angle brackets (<sticky></sticky>).

User Authorization
~~~~~~~~~~~~~~~~~~

::

	AUTH:johnsmith:mysecretword

You may override the default author for the entry and specify your own
author. The syntax for this override is different from the others and
follows the guide: AUTH:theusername:thepassword. "theusername" should be
replaced by the username of the desired member and "thepassword" should
be replaced by their password.

Place this authorization line as the first line in your email

Note that if you have the Authorization Required in Email? option turned
on for this Moblog in the Control Panel then you **must** include this
user authorization. If you do not include it or if the authorization
fails, the entry will not be posted. The Delete Unauthorized Moblog
Emails? setting will determine whether or not the email is deleted from
the server in these cases.

Further, note that the member account being used must be part of a
Member Group that has permission to post entries to this channel.
