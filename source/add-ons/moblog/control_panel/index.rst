.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

###########################
Moblog Module Control Panel
###########################

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Add-Ons --> Moblog`

The Moblog Module Control Panel lists your existing Moblogs and allows you
to edit, delete or perform a check on any of them.

.. contents::
   :local:
   :depth: 1


**********************
Moblog Creation Fields
**********************

.. contents::
  :local:
  :depth: 2

General Settings
================

Moblog name
-----------

The full display name of the Moblog account.

Short name
----------

The short name for the Moblog account. It must be a single word with no
spaces or special punctuation.

Time between checks
-------------------

The amount of time that will elapse between checks of your Moblog
account. This is used in conjunction with the
:ref:`check_moblog_tag` on your page.

Moblog enabled?
---------------

You can determine whether or not the Moblog account is enabled. If the
account is disabled then it will not be included when checks are made.

File archive mode enabled?
--------------------------

Enabling this preference basically means that your moblog is only used
for uploading files. With this enabled, entries in the corresponding
channel will not be created when a moblog email is processed.

Channel Entry Settings
======================

Channel
-------

Determine with which channel the Moblog account will be associated. When
you send in an entry, the entry will go into this channel. If you do not
specify a channel, then no entries will be created when you send an
email; only the attachments will be processed.

Default categories
------------------

You may choose which category or categories the entry will be assigned
to. This choice is simply a default; it can be overridden when sending
the email. Field must be of the textarea type.

Default field
-------------

You may choose which field the entry will be assigned to. This choice is
simply a default; it can be overridden when sending the email.

Default status
--------------

You may choose which status the entry will be assigned to. This choice
is simply a default; it can be overridden when sending the email.

Default author
--------------

You may choose which field the entry will be assigned to. This choice is
simply a default; it can be overridden when sending the email.

Make entry sticky?
------------------

You may choose whether or not entries submitted via the Moblog should be
marked as "sticky" by default.

Allow overrides in email?
-------------------------

This allows you to specify whether or not you can override the default
values specified on this page by including
:ref:`overrides <moblog_overrides>` in the actual email text. If
turned on, this preference will cause the Moblog to ignore any overrides
sent along with the email.

Moblog template
---------------

Define how the information you submit in your email is
handled. A simple example::

    {images}<img src="{file}" width="{width}" height="{height}" alt="pic" />{/images}
    {text}

A more complex example::

    {field name="body" format="xhtml"} {text} {/field}
    {field name="body_image" format="none"} {images} <img src="{file}" width="{width}" height="{height}" alt="pic" /> {/images} {/field}

audio
~~~~~

::

    {audio} <p>Listen to the <a href="{file}">audio</a>!</p> {/audio}

This tag pair allows you to specify how to process an audio file that's
attached to the email. The {file} variable inside the tag pair will
contain the URL to the uploaded audio file.

field
~~~~~

::

    {field name="extended" format="xhtml"} {text} {/field}

This tag pair allows you to specify into which field you would like the
contents placed. If you do not specify a field with this variable then
the contents will be placed in the default field specified in the
Control Panel. This field has two parameters:

#. **name=** the "short name" of the field in which you want the
   contents placed.
#. **format=** the type of formatting you would like applied to the
   field contents: none, <br />, or xhtml.

You may only specify a field that is of the "textarea" type here. You
cannot specify "text input" or "drop-down list" fields.

file
~~~~

::

    {audio} <p>Listen to the <a href="{file}">audio</a>!</p> {/audio}

This variable will be replaced by the URL to the uploaded file.

files
~~~~~

::

    {files match="movie|files"} <p>View the <a href="{file}">presentation</a>.</p> {/files}

This tag pair allows you to specify how to process a standard file
that's attached to the email. The {file} variable inside the tag pair
will contain the URL to the uploaded file.

This tag pair is special in that it has the match= parameter that can be
used to determine which types of files will be affected. The options
are:

-  **all**: all types of files will be matched
-  **audio**: files matching the "audio" supported format
-  **files**: files matching the "files" supported formats
-  **images**: files matching the "images" supported formats
-  **movie**: files matching the "movie" supported formats

Multiple format types may be specified by separating them with the pipe
character::

    {files match="audio|files"}

height
~~~~~~

::

    <img src="{file}" width="{width}" height="{height}" alt="pic" />

The height (in pixels) of the uploaded image.

images
~~~~~~

::

    {images} <img src="{file}" width="{width}" height="{height}" alt="pic" /> {/images}

This tag pair allows you to specify how to process an image file that's
attached to the email. The {file} variable inside the tag pair will
contain the URL to the uploaded image file.

movie
~~~~~

::

    {movie} <p>Watch our new <a href="{file}">movie</a> now.</p> {/movie}

This tag pair allows you to specify how to process an movie file that's
attached to the email. The {file} variable inside the tag pair will
contain the URL to the uploaded movie file.

text
~~~~

::

    {field name="extended" format="xhtml"} {text} {/field}

The text content of the email. Typically this will be a description of
the attached file.

thumbnail
~~~~~~~~~

::

    {images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The URL to an automatically-generated thumbnail version of the attached
image.

thumb\_height
~~~~~~~~~~~~~

::

    {images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The height (in pixels) of the automatically-generated thumbnail version
of the attached image.

thumb\_width
~~~~~~~~~~~~

::

    {images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The width (in pixels) of the automatically-generated thumbnail version
of the attached image.

width
~~~~~

::

    <img src="{file}" width="{width}" height="{height}" alt="pic" />

The width (in pixels) of the uploaded image.


Email Settings
==============

Email account type
------------------

The type of email account. Currently, only POP3 accounts are supported.

Email address
-------------

This is the email account to which you will be sending your emails.
ExpressionEngine will check this account to find emails you've sent that
should be processed by the Moblog Module.

Incoming mail server
--------------------

The email server on which the email account you specified resides. This
is the server to which ExpressionEngine will attempt to connect. This is
typically something like mail.example.com. If you are using POP3 over
SSL, you must prefix the server address with **ssl://**, e.g.
**ssl://pop.gmail.com**.

Email account username
----------------------

The username for the specified email account. Once submitted, the
information will be encrypted in ExpressionEngine. Remember that some
email accounts require you to use the full email address as the
"username": username@example.com.

Email account password
----------------------

The password for the specified email account. Once submitted, the
information will be encrypted in ExpressionEngine.

Moblog subject prefix
---------------------

When ExpressionEngine checks the specified email account, it will ignore
any messages that do not have this text in the subject. The text does
not technically have to be at the beginning of the subject, either; it
can appear anywhere in the subject. If you leave this setting blank,
then all emails will be processed. By default, any text in the subject
that is *not* the subject prefix will be used for the entry title.

Authorization required in email?
--------------------------------

If this preferences is set to Yes, then you will need to provide a valid
username and password in the email sent. This ensures an extra level of
security so that only authorized people will be able to post via the
Moblog Modules. If the user authentication from the email fails then an
entry will not be posted.

Delete unauthorized moblog emails?
----------------------------------

You may determine how ExpressionEngine will handle an "unauthorized"
email. If you require email authorization (above) and the email fails
the authorization (for instance the username or password are incorrect)
then you can have ExpressionEngine automatically delete that email. If
you do not set this, then the email will be left on the server.

Valid 'From' Emails for Moblog
------------------------------

You can specify a list of email addresses from which you can submit
Moblog emails. This preference will allow you to add in another layer of
security so that ExpressionEngine will only accept emails that you want
it to process. This feature will check what address is specified as
"From" on emails and compare it to your list.

You can specify one or more email addresses by either placing them on
separate lines in the textarea or by separating them with a space. If
you leave the setting blank then ExpressionEngine will not filter emails
based on where it is "From".

.. note:: For security reasons, the email addresses put into this field
   **must** be case sensitive. So, if your email client capitalizes letters
   in your email address, then you will have to capitalize the letters in
   this field as well. For example, if your email address is
   'web@example.com', your email client might specify the From address as
   'Web@example.com'.

Ignore Email Text
-----------------

Here you can specify any text in the email which you want to ignore.
This is useful for email accounts such as those through Hotmail or Yahoo
that add advertisements at the bottom. It's also useful for removing
automatically-added signatures.

ExpressionEngine will first try to match the entire specified text to
something in the email. If there is no match, then it will go through
each of the lines (a line being one ended in a carriage return) of
specified text individually and try to match content in the email in
order to remove the desired content.

File Settings
=============

Upload directory for files
--------------------------

You may determine into which of your File Upload directories the file
attachments will be placed. These upload directories are defined in the
:doc:`/cp/files/uploads/form` section.

Image size
----------

Choose the image from your defined image dimensions from the selected
upload directory. If you don't choose a size, the image will upload at
full size. These sizes are defined in the
:doc:`/cp/files/uploads/form` section.

Thumb size
----------

Choose the thumbnail size from your defined image dimensions from the
selected upload directory. These sizes are defined in the
:doc:`/cp/files/uploads/form` section.
