#############
Moblog Module
#############

.. contents::
   :local:
   :depth: 2

************
Introduction
************

The Moblog, or "mobile blogging", Module allows you to submit Channel
Entries to ExpressionEngine via email. Emails may contain images or
other attachments, typically sent via a mobile device.

The basic concept is this: You send an email containing the text of your
entry along with a file or image attachment to a specific email address
you've set up as your Moblog account. ExpressionEngine will then check
that email account looking for any Moblog messages, which will be
submitted to your site based on your preferences.


****************************
Supported Attachment Formats
****************************

By default, ExpressionEngine's Moblog Module supports a large number of
formats. If needed, you can also edit the available formats at the top
of the system/modules/moblog/mod.moblog.php file.

-  **Images**: bmp, gif, jpe, jpeg, jpg, pdf, png, tif, tiff
-  **Files**: doc, xls, zip, tar, tgz, swf, sit, php, txt, html, asp,
   js, rtf
-  **Movies**: 3gp, mov, mpg, avi, movie
-  **Audio**: mid, midi, mp2, mp3, aac, mp4, aif, aiff, aifc, ram, rm,
   rpm, wav, ra, rv, wav

.. note:: Be aware that many email services have limits on the size of
   file attachments. Further, the files have to be uploaded by the system when it
   checks the moblog, so extremely large files can cause a server time-out.

****************************
Submitting Content Via Email
****************************

In most cases, your email body will simply be whatever text you want to
submit along with your file::

	Here's a quick picture of the train station this morning on the way to work.
	Notice the guy selling flowers? He's been there every morning like clockwork for the last 2 years.
	He's always cheerful and actually has some pretty nice flowers.

.. _moblog-overrides:

Overrides
=========

In addition to the regular body text of the email (and
the file/image attachment) you can specify several values that can
override the defaults selected for your Moblog in the Control Panel.

The overrides should normally be placed at the top of the email before
your actual body content, and on their own lines. Most of the overrides have multiple possible
syntaxes in order to make them easier to use.

Here is a more complicated example that uses some of the "overrides"::

	AUTH:johnsmith:mysecretword
	
	{category}3,6{/category}
	{field:body format="xhtml"}
		Here's a quick picture of the train station this morning on the way to work.
		Notice the guy selling flowers?  He's been there every morning like clockwork for the last 2 years.
		He's always cheerful and actually has some pretty nice flowers.
	{/field:body}
	{field:location format="none"}Train Station{/field:location}

.. contents::
   :local:

category
--------

::

	{category}3,News,7{/category}
	
	<category>3,News,7</category>

You may override the default category selection and specify your own.
You may specify either the category ID (the number) or the text name of
the category. Multiple categories can be separated by commas (,), colons
(:), or the pipe character (\|).

The category override can be defined using either braces
({category}{/category}) or angle brackets (<category></category>).

entry\_title
------------

::

	{entry_title}My Unique Title{/entry_title}

	<entry_title>My Unique Title</entry_title>

You may override the standard entry title (which is determined from the
subject of the email) and specify your own. The entry title override can
be defined using either braces ({entry\_title}{/entry\_title}) or angle
brackets (<entry\_title></entry\_title>).

field
-----

::

	{field:entry_body}food_images{/field:entry_body}

	<field:entry_body>Food Images</field:entry_body>

You may override the default field into which the contents will be
placed and specify your own. You must specify into which field the text
should be placed and you may also specify more than one field. For
instance, if you want some text placed in the "body" field and other
text placed in the "summary" field then you could use::

	{field:body}This is the body text.{/field:body}
	
	{field:summary}This is a summary.{/field:summary}

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
-------------

::

	{file_archive}yes{/file_archive}

	<file_archive>yes</file_archive>

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
------

::

	{status}pending{/status}

::

	<status>Closed</status>

You may override the default status for the entry and specify your own.
Simply use the name of the status.

The status override can be defined using either braces
({status}{/status}) or angle brackets (<status></status>).

sticky
------

::

	{sticky}yes{/sticky}

::
	
	<sticky>no</sticky>

You may override the default "sticky" setting for the entry and specify
your own. Simply use the name of the status.

The sticky override can be defined using either braces
({sticky}{/sticky}) or angle brackets (<sticky></sticky>).

User Authorization
------------------

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

.. _check-moblog-tag:

****************
Check Moblog Tag
****************

This tag can be placed in any of your ExpressionEngine Site Templates.
It works together with the "Time Between Checks" setting in the Control
Panel . Whenever a visitor to your site loads a Template with this Tag
on it, ExpressionEngine will look to see if the necessary amount of time
has passed based on the "Time Between Checks" setting for this moblog
(:menuselection:`Add-Ons --> Modules --> Moblog` in
the Control Panel). If the necessary time has passed since the last time
a check was performed then ExpressionEngine will check the specified
Moblog(s) for new messages.

Typically, this tag would be placed on a relatively high-traffic
Template so that checks would be automatically performed at reasonable
intervals. The tag can also be placed on a page dedicated to the purpose
so that you could have a "Check Moblogs" page on your site if you
wished. ::

	{exp:moblog:check silent="yes" which="cellphone"}

Parameters
==========

.. contents::
   :local:

silent=
-------

::

	silent="yes"

You can specify whether or not you want messages about the Moblog Check
to be seen. By default, this value is "yes", which means that the check
will be silent and no messages will be seen. If you set the parameter to
"no", then ExpressionEngine will output messages for errors and
successes.

which=
------

::

	which="cellphone"

Here you can specify which Moblog or Moblogs you wish to check. You
specify the Moblog by using the "short name" from the Control Panel
setup. You may also specify "all" so that all of your enabled Moblogs
will be checked. Additionally, you can use the pipe character to
separate multiple moblogs::

	which="cellphone|moblog2|samsung"

Or you can add the word "not" (with a space after it) to exclude
moblogs::

	which="not moblog2|samsung"

*************
Control Panel
*************

See the `Moblog Module Control Panel <control_panel/index.html>`_ page.

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	control_panel/index
