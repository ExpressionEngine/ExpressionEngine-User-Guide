Moblogging Module
=================

Control Panel Location: Modules > Moblog Module
The Moblogging Module Control Panel allows you to set up your Moblog
account so you can begin emailing content to your site.

Main Screen
-----------

The main Moblog Module screen lists your existing Moblogs and allows you
to edit, delete, or perform a check on any of them.

Create a New Moblog
~~~~~~~~~~~~~~~~~~~

This link in the upper right allows you to `create a new
moblog <#create_a_new_moblog>`_.

Moblogs
~~~~~~~

The name of the moblog.

Check Moblog
~~~~~~~~~~~~

This link allows you to have ExpressionEngine check the moblog to get
new emails.

Preferences
~~~~~~~~~~~

You may edit the preferences for your moblog by following this link. The
preferences are listed under the "Create a New Moblog" section.

Delete
~~~~~~

You may select a moblog to delete with the checkbox in this column.
Simply check the box and then use the Delete button. All deletions are
permanent.

There is also a separate page that covers the syntax available in the
`Moblog Email Template <email_template.html>`_, which is a crucial part
of setting up a "channel" Moblog.

Create a New Moblog
-------------------

This screen allows you to create a new Moblog account.

General Settings
----------------

Full Moblog Name
~~~~~~~~~~~~~~~~

The full display name of the Moblog account.

Short Name
~~~~~~~~~~

The short name for the Moblog account. It must be a single word with no
spaces or special punctuation.

Time Between Checks
~~~~~~~~~~~~~~~~~~~

The amount of time that will elapse between checks of your Moblog
account. This is used in conjunction with the
`{exp:moblog:check} <../check_moblog.html>`_ tag on your page.

Moblog Enabled
~~~~~~~~~~~~~~

You can determine whether or not the Moblog account is enabled. If the
account is disabled then it will not be included when checks are made.

File Archive Mode
~~~~~~~~~~~~~~~~~

Enabling this preference basically means that your moblog is only used
for uploading files. With this enabled, entries in the corresponding
channel will not be created when a moblog email is processed.

Channel Entry Settings
----------------------

Choose Channel
~~~~~~~~~~~~~~

Determine with which channel the Moblog account will be associated. When
you send in an entry, the entry will go into this channel. If you do not
specify a channel, then no entries will be created when you send an
email; only the attachments will be processed.

Default Categories
~~~~~~~~~~~~~~~~~~

You may choose which category or categories the entry will be assigned
to. This choice is simply a default; it can be overridden when sending
the email. Field must be of the textarea type.

Default Field
~~~~~~~~~~~~~

You may choose which field the entry will be assigned to. This choice is
simply a default; it can be overridden when sending the email.

Default Status
~~~~~~~~~~~~~~

You may choose which status the entry will be assigned to. This choice
is simply a default; it can be overridden when sending the email.

Default Author
~~~~~~~~~~~~~~

You may choose which field the entry will be assigned to. This choice is
simply a default; it can be overridden when sending the email.

Make Entry Sticky?
~~~~~~~~~~~~~~~~~~

You may choose whether or not entries submitted via the Moblog should be
marked as "sticky" by default.

Allow Overrides in Email?
~~~~~~~~~~~~~~~~~~~~~~~~~

This allows you to specify whether or not you can override the default
values specified on this page by including
`overrides <../email_contents.html>`_ in the actual email text. If
turned on, this preference will cause the Moblog to ignore any overrides
sent along with the email.

Moblog Template
~~~~~~~~~~~~~~~

This allows you to specify exactly how the contents of your email will
be handled. The syntax for the Template is covered on the `Moblog Email
Template <email_template.html>`_ page.

Email Settings
--------------

Email Account Type
~~~~~~~~~~~~~~~~~~

The type of email account. Currently, only POP3 accounts are supported.

Email Address
~~~~~~~~~~~~~

This is the email account to which you will be sending your emails.
ExpressionEngine will check this account to find emails you've sent that
should be processed by the Moblog Module.

Incoming Mail Server
~~~~~~~~~~~~~~~~~~~~

The email server on which the email account you specified resides. This
is the server to which ExpressionEngine will attempt to connect. This is
typically something like mail.example.com. If you are using POP3 over
SSL, you must prefix the server address with **ssl://**, e.g.
**ssl://pop.gmail.com**.

Email Account Username
~~~~~~~~~~~~~~~~~~~~~~

The username for the specified email account. Once submitted, the
information will be encrypted in ExpressionEngine. Remember that some
email accounts require you to use the full email address as the
"username": username@example.com.

Email Account Password
~~~~~~~~~~~~~~~~~~~~~~

The password for the specified email account. Once submitted, the
information will be encrypted in ExpressionEngine.

Moblog Subject Prefix
~~~~~~~~~~~~~~~~~~~~~

When ExpressionEngine checks the specified email account, it will ignore
any messages that do not have this text in the subject. The text does
not technically have to be at the beginning of the subject, either; it
can appear anywhere in the subject. If you leave this setting blank,
then all emails will be processed. By default, any text in the subject
that is *not* the subject prefix will be used for the entry title.

Authorization Required in Email?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If this preferences is set to Yes, then you will need to provide a valid
username and password in the email sent. This ensures an extra level of
security so that only authorized people will be able to post via the
Moblog Modules. If the user authentication from the email fails then an
entry will not be posted.

Delete Unauthorized Moblog Emails?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may determine how ExpressionEngine will handle an "unauthorized"
email. If you require email authorization (above) and the email fails
the authorization (for instance the username or password are incorrect)
then you can have ExpressionEngine automatically delete that email. If
you do not set this, then the email will be left on the server.

Valid 'From' Emails for Moblog
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can specify a list of email addresses from which you can submit
Moblog emails. This preference will allow you to add in another layer of
security so that ExpressionEngine will only accept emails that you want
it to process. This feature will check what address is specified as
"From" on emails and compare it to your list.

You can specify one or more email addresses by either placing them on
separate lines in the textarea or by separating them with a space. If
you leave the setting blank then ExpressionEngine will not filter emails
based on where it is "From".

**Note:** For security reasons, the email addresses put into this field
**must** be case sensitive. So, if your email client capitalizes letters
in your email address, then you will have to capitalize the letters in
this field as well. For example, if your email address is
'web@example.com', your email client might specify the From address as
'Web@example.com'.

Ignore Email Text
~~~~~~~~~~~~~~~~~

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
-------------

Upload Directory for Files
~~~~~~~~~~~~~~~~~~~~~~~~~~

You may determine into which of your File Upload directories the file
attachments will be placed. These upload directories are defined in the
`File Upload
Preferences <../../../cp/content/files/file_upload_preferences.html>`_
section.

Image Size
~~~~~~~~~~

Choose the image from your defined image dimensions from the selected
upload directory. If you don't choose a size, the image will upload at
full size. These sizes are defined in the `File Upload
Preferences <../../../cp/content/files/file_upload_preferences.html>`_
section.

Thumb Size
~~~~~~~~~~

Choose the thumbnail size from your defined image dimensions from the
selected upload directory. These sizes are defined in the `File Upload
Preferences <../../../cp/content/files/file_upload_preferences.html>`_
section.

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	*