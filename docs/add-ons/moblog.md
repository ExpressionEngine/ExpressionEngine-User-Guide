---
lang: ee
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Moblog

[TOC]

The Moblog, or "mobile blogging", Module allows you to submit Channel Entries to ExpressionEngine via email. Emails may contain images or other attachments, typically sent via a mobile device.

The basic concept is this: You send an email containing the text of your entry along with a file or image attachment to a specific email address you've set up as your Moblog account. ExpressionEngine will then check that email account looking for any Moblog messages, which will be submitted to your site based on your preferences.

### Supported Attachment Formats

By default, ExpressionEngine's Moblog Module supports a large number of formats.

- **Images**: bmp, gif, jpe, jpeg, jpg, pdf, png, tif, tiff
- **Files**: doc, xls, zip, tar, tgz, swf, sit, php, txt, html, asp, js, rtf
- **Movies**: 3gp, mov, mpg, avi, movie
- **Audio**: mid, midi, mp2, mp3, aac, mp4, aif, aiff, aifc, ram, rm, rpm, wav, ra, rv, wav

NOTE: **Note:** Be aware that many email services have limits on the size of file attachments. Further, the files have to be uploaded by the system when it checks the moblog, so extremely large files can cause a server time-out.

## Submitting Content Via Email

In most cases, your email body will simply be whatever text you want to submit along with your file:

    Here's a quick picture of the train station this morning on the way to work.
    Notice the guy selling flowers? He's been there every morning like clockwork for the last 2 years.
    He's always cheerful and actually has some pretty nice flowers.

### Overrides

In addition to the regular body text of the email (and the file/image attachment) you can specify several values that can override the defaults selected for your Moblog in the Control Panel.

The overrides should normally be placed at the top of the email before your actual body content, and on their own lines. Most of the overrides have multiple possible syntaxes in order to make them easier to use.

Here is a more complicated example that uses some of the "overrides":

    AUTH:johnsmith:mysecretword

    {category}3,6{/category}
    {field:body format="xhtml"}
        Here's a quick picture of the train station this morning on the way to work.
        Notice the guy selling flowers?  He's been there every morning like clockwork for the last 2 years.
        He's always cheerful and actually has some pretty nice flowers.
    {/field:body}
    {field:location format="none"}Train Station{/field:location}

#### category

    {category}3,News,7{/category}

    <category>3,News,7</category>

You may override the default category selection and specify your own. You may specify either the category ID (the number) or the text name of the category. Multiple categories can be separated by commas (,), colons (:), or the pipe character (|).

The category override can be defined using either braces ({category}{/category}) or angle brackets (&lt;category&gt;&lt;/category&gt;).

#### entry_title

    {entry_title}My Unique Title{/entry_title}

    <entry_title>My Unique Title</entry_title>

You may override the standard entry title (which is determined from the subject of the email) and specify your own. The entry title override can be defined using either braces ({entry_title}{/entry_title}) or angle brackets (&lt;entry_title&gt;&lt;/entry_title&gt;).

#### field

    {field:entry_body}food_images{/field:entry_body}

    <field:entry_body>Food Images</field:entry_body>

You may override the default field into which the contents will be placed and specify your own. You must specify into which field the text should be placed and you may also specify more than one field. For instance, if you want some text placed in the "body" field and other text placed in the "summary" field then you could use:

    {field:body}This is the body text.{/field:body}

    {field:summary}This is a summary.{/field:summary}

Furthermore, you may specify the formatting to use for the field by adding a format parameter to the tag. For instance:

    {field:body format="xhtml"}This is the body text.{/field:body}

Available choices for the format parameter are:

- **none**: sets the field to use no formatting
- **br**: sets the field to use "Auto &lt;br /&gt;" formatting
- **xhtml**: sets the field to use "XHTML" formatting.
- If you have set up your entry field to use a particular Plugin for formatting then you may also specify that Plugin by name here.

The field override can be defined using either braces ({field}{/field}) or angle brackets (&lt;field&gt;&lt;/field&gt;).

You may only specify a field that is of the "textarea" type here. You cannot specify "text input" or "drop-down list" fields.

#### file_archive

    {file_archive}yes{/file_archive}

    <file_archive>yes</file_archive>

You may override the default file archive setting for the entry and specify manually that this email is a file archive (i.e. you are simply uploading a file and no corresponding entry should be made). Simply use either yes, true, or 1 to indicate that only the files of this email should be uploaded. Alternatively, use no, false, or 0 to indicate that an entry should be created using this email.

The file archive override can be defined using either braces ({file_archive}{/file_archive}) or angle brackets (&lt;file_archive&gt;&lt;/file_archive&gt;).

#### status

    {status}pending{/status}

    <status>Closed</status>

You may override the default status for the entry and specify your own. Simply use the name of the status.

The status override can be defined using either braces ({status}{/status}) or angle brackets (&lt;status&gt;&lt;/status&gt;).

#### sticky

    {sticky}yes{/sticky}

    <sticky>no</sticky>

You may override the default "sticky" setting for the entry and specify your own. Simply use the name of the status.

The sticky override can be defined using either braces ({sticky}{/sticky}) or angle brackets (&lt;sticky&gt;&lt;/sticky&gt;).

#### User Authorization

    AUTH:johnsmith:mysecretword

You may override the default author for the entry and specify your own author. The syntax for this override is different from the others and follows the guide: AUTH:theusername:thepassword. "theusername" should be replaced by the username of the desired member and "thepassword" should be replaced by their password.

Place this authorization line as the first line in your email

Note that if you have the Authorization Required in Email? option turned on for this Moblog in the Control Panel then you **must** include this user authorization. If you do not include it or if the authorization fails, the entry will not be posted. The Delete Unauthorized Moblog Emails? setting will determine whether or not the email is deleted from the server in these cases.

Further, note that the member account being used must be part of a Member Group that has permission to post entries to this channel.

## Check Moblog Tag

This tag can be placed in any of your ExpressionEngine Site Templates. It works together with the "Time Between Checks" setting in the Control Panel . Whenever a visitor to your site loads a Template with this Tag on it, ExpressionEngine will look to see if the necessary amount of time has passed based on the "Time Between Checks" setting for this moblog (`Add-Ons --> Modules --> Moblog` in the Control Panel). If the necessary time has passed since the last time a check was performed then ExpressionEngine will check the specified Moblog(s) for new messages.

Typically, this tag would be placed on a relatively high-traffic Template so that checks would be automatically performed at reasonable intervals. The tag can also be placed on a page dedicated to the purpose so that you could have a "Check Moblogs" page on your site if you wished.

    {exp:moblog:check silent="yes" which="cellphone"}

### Parameters

#### silent=

    silent="yes"

You can specify whether or not you want messages about the Moblog Check to be seen. By default, this value is "yes", which means that the check will be silent and no messages will be seen. If you set the parameter to "no", then ExpressionEngine will output messages for errors and successes.

#### which=

    which="cellphone"

Here you can specify which Moblog or Moblogs you wish to check. You specify the Moblog by using the "short name" from the Control Panel setup. You may also specify "all" so that all of your enabled Moblogs will be checked. Additionally, you can use the pipe character to separate multiple moblogs:

    which="cellphone|moblog2|samsung"

Or you can add the word "not" (with a space after it) to exclude moblogs:

    which="not moblog2|samsung"

## Control Panel

**Control Panel Location:** `Developer --> Add-Ons --> Moblog`

The Moblog Module Control Panel lists your existing Moblogs and allows you to edit, delete or perform a check on any of them.

## Moblog Creation Fields

### General Settings

#### Moblog name

The full display name of the Moblog account.

#### Short name

The short name for the Moblog account. It must be a single word with no spaces or special punctuation.

#### Time between checks

The amount of time that will elapse between checks of your Moblog account. This is used in conjunction with the `check_moblog_tag` on your page.

#### Moblog enabled?

You can determine whether or not the Moblog account is enabled. If the account is disabled then it will not be included when checks are made.

#### File archive mode enabled?

Enabling this preference basically means that your moblog is only used for uploading files. With this enabled, entries in the corresponding channel will not be created when a moblog email is processed.

### Channel Entry Settings

#### Channel

Determine with which channel the Moblog account will be associated. When you send in an entry, the entry will go into this channel. If you do not specify a channel, then no entries will be created when you send an email; only the attachments will be processed.

#### Default categories

You may choose which category or categories the entry will be assigned to. This choice is simply a default; it can be overridden when sending the email. Field must be of the textarea type.

#### Default field

You may choose which field the entry will be assigned to. This choice is simply a default; it can be overridden when sending the email.

#### Default status

You may choose which status the entry will be assigned to. This choice is simply a default; it can be overridden when sending the email.

#### Default author

You may choose which field the entry will be assigned to. This choice is simply a default; it can be overridden when sending the email.

#### Make entry sticky?

You may choose whether or not entries submitted via the Moblog should be marked as "sticky" by default.

#### Allow overrides in email?

This allows you to specify whether or not you can override the default values specified on this page by including [overrides](#overrides) in the actual email text. If turned on, this preference will cause the Moblog to ignore any overrides sent along with the email.

#### Moblog template

Define how the information you submit in your email is handled. A simple example:

    {images}<img src="{file}" width="{width}" height="{height}" alt="pic" />{/images}
    {text}

A more complex example:

    {field name="body" format="xhtml"} {text} {/field}
    {field name="body_image" format="none"} {images} <img src="{file}" width="{width}" height="{height}" alt="pic" /> {/images} {/field}

##### audio

    {audio} <p>Listen to the <a href="{file}">audio</a>!</p> {/audio}

This tag pair allows you to specify how to process an audio file that's attached to the email. The {file} variable inside the tag pair will contain the URL to the uploaded audio file.

##### field

    {field name="extended" format="xhtml"} {text} {/field}

This tag pair allows you to specify into which field you would like the contents placed. If you do not specify a field with this variable then the contents will be placed in the default field specified in the Control Panel. This field has two parameters:

1.  **name=** the "short name" of the field in which you want the contents placed.
2.  **format=** the type of formatting you would like applied to the field contents: none, &lt;br /&gt;, or xhtml.

You may only specify a field that is of the "textarea" type here. You cannot specify "text input" or "drop-down list" fields.

##### file

    {audio} <p>Listen to the <a href="{file}">audio</a>!</p> {/audio}

This variable will be replaced by the URL to the uploaded file.

##### files

    {files match="movie|files"} <p>View the <a href="{file}">presentation</a>.</p> {/files}

This tag pair allows you to specify how to process a standard file that's attached to the email. The {file} variable inside the tag pair will contain the URL to the uploaded file.

This tag pair is special in that it has the match= parameter that can be used to determine which types of files will be affected. The options are:

- **all**: all types of files will be matched
- **audio**: files matching the "audio" supported format
- **files**: files matching the "files" supported formats
- **images**: files matching the "images" supported formats
- **movie**: files matching the "movie" supported formats

Multiple format types may be specified by separating them with the pipe character:

    {files match="audio|files"}

##### height

    <img src="{file}" width="{width}" height="{height}" alt="pic" />

The height (in pixels) of the uploaded image.

##### images

    {images} <img src="{file}" width="{width}" height="{height}" alt="pic" /> {/images}

This tag pair allows you to specify how to process an image file that's attached to the email. The {file} variable inside the tag pair will contain the URL to the uploaded image file.

##### movie

    {movie} <p>Watch our new <a href="{file}">movie</a> now.</p> {/movie}

This tag pair allows you to specify how to process an movie file that's attached to the email. The {file} variable inside the tag pair will contain the URL to the uploaded movie file.

##### text

    {field name="extended" format="xhtml"} {text} {/field}

The text content of the email. Typically this will be a description of the attached file.

##### thumbnail

    {images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The URL to an automatically-generated thumbnail version of the attached image.

##### thumb_height

    {images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The height (in pixels) of the automatically-generated thumbnail version of the attached image.

##### thumb_width

    {images} <img src="{thumbnail}" width="{thumb_width}" height="{thumb_height}" alt="thumbnail image" /> {/images}

The width (in pixels) of the automatically-generated thumbnail version of the attached image.

##### width

    <img src="{file}" width="{width}" height="{height}" alt="pic" />

The width (in pixels) of the uploaded image.

### Email Settings

#### Email account type

The type of email account. Currently, only POP3 accounts are supported.

#### Email address

This is the email account to which you will be sending your emails. ExpressionEngine will check this account to find emails you've sent that should be processed by the Moblog Module.

#### Incoming mail server

The email server on which the email account you specified resides. This is the server to which ExpressionEngine will attempt to connect. This is typically something like mail.example.com. If you are using POP3 over SSL, you must prefix the server address with **ssl://**, e.g. **ssl://pop.gmail.com**.

#### Email account username

The username for the specified email account. Once submitted, the information will be encrypted in ExpressionEngine. Remember that some email accounts require you to use the full email address as the "username": <username@example.com>.

#### Email account password

The password for the specified email account. Once submitted, the information will be encrypted in ExpressionEngine.

#### Moblog subject prefix

When ExpressionEngine checks the specified email account, it will ignore any messages that do not have this text in the subject. The text does not technically have to be at the beginning of the subject, either; it can appear anywhere in the subject. If you leave this setting blank, then all emails will be processed. By default, any text in the subject that is _not_ the subject prefix will be used for the entry title.

#### Authorization required in email?

If this preferences is set to Yes, then you will need to provide a valid username and password in the email sent. This ensures an extra level of security so that only authorized people will be able to post via the Moblog Modules. If the user authentication from the email fails then an entry will not be posted.

#### Delete unauthorized moblog emails?

You may determine how ExpressionEngine will handle an "unauthorized" email. If you require email authorization (above) and the email fails the authorization (for instance the username or password are incorrect) then you can have ExpressionEngine automatically delete that email. If you do not set this, then the email will be left on the server.

#### Valid 'From' Emails for Moblog

You can specify a list of email addresses from which you can submit Moblog emails. This preference will allow you to add in another layer of security so that ExpressionEngine will only accept emails that you want it to process. This feature will check what address is specified as "From" on emails and compare it to your list.

You can specify one or more email addresses by either placing them on separate lines in the textarea or by separating them with a space. If you leave the setting blank then ExpressionEngine will not filter emails based on where it is "From".

NOTE: **Note:** For security reasons, the email addresses put into this field **must** be case sensitive. So, if your email client capitalizes letters in your email address, then you will have to capitalize the letters in this field as well. For example, if your email address is '<web@example.com>', your email client might specify the From address as '<Web@example.com>'.

#### Ignore Email Text

Here you can specify any text in the email which you want to ignore. This is useful for email accounts such as those through Hotmail or Yahoo that add advertisements at the bottom. It's also useful for removing automatically-added signatures.

ExpressionEngine will first try to match the entire specified text to something in the email. If there is no match, then it will go through each of the lines (a line being one ended in a carriage return) of specified text individually and try to match content in the email in order to remove the desired content.

### File Settings

#### Upload directory for files

You may determine into which of your File Upload directories the file attachments will be placed. These upload directories are defined in the [Create/Edit Upload Directory](control-panel/file-manager.md#createedit-upload-directory) section.

#### Image size

Choose the image from your defined image dimensions from the selected upload directory. If you don't choose a size, the image will upload at full size. These sizes are defined in the [Create/Edit Upload Directory](control-panel/file-manager.md#createedit-upload-directory) section.

#### Thumb size

Choose the thumbnail size from your defined image dimensions from the selected upload directory. These sizes are defined in the [Create/Edit Upload Directory](control-panel/file-manager.md#createedit-upload-directory) section.
