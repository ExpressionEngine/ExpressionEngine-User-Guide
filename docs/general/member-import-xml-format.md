<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Member XML Format

[TOC]

ExpressionEngine utilizes a special XML format for member data:

    <members>
        <member>
            <username>brettb</username>
            <screen_name>Brett Bretterson</screen_name>
            <password type="md5">653132ffd94b986bf2bb806b3c67d190</password>
            <email>brett@example.com</email>
        </member>
        <member>
            <username>robr</username>
            <screen_name>Robert Robertson</screen_name>
            <password type="sha1">1b4395b877794a16a7f4db5747380dbaafc7ff18</password>
            <email>robert@example.com</email>
        </member>
    </members>

The XML tags are identical to their database field counterparts from the exp_members table. All fields are allowed except for "unique_id".

NOTE: **Important:** The &lt;member_id&gt; tag will cause the import utility to overwrite any existing members with the same ID. It is generally recommended that you do not use a &lt;member_id&gt; tag, so when transferring users from one system to another, ExpressionEngine can automatically create new unique IDs for each member without overwriting any existing members.

## Required Tags

There are a few tags common to every ExpressionEngine member XML file, as follows.

### Root Tag

XML documents require a root tag surrounding all of the elements. For the ExpressionEngine member XML format, the required root tag is `<members></members>`.

### Element Tag

Each XML element of your member data must be contained in a `<member></member>` tag block.

### Member Data Tags

There are three required tags to form a valid member element.

- `<username>`
- `<screen_name>`
- `<email>`

### Password Tag

The &lt;password&gt; tag has a special attribute, type. This allows you to provide contextual information for the password.

### type=

#### "text"

    <password type="text">pa55w0id</password>

"text" type passwords are plain text, unencrypted passwords. When importing members from an XML file, ExpressionEngine will automatically encrypt "text" type passwords for you before inserting them into the database. This allows you to keep existing passwords when importing member data from a third party application that does not store encrypted passwords.

#### "md5"

    <password type="md5">653132ffd94b986bf2bb806b3c67d190</password>

"md5" passwords are those that have been encrypted with an RSA Data Security, Inc. MD5 Message-Digest Algorithm (md5) hash. [[RFC1321]](http://www.faqs.org/rfcs/rfc1321.html)

#### "sha1"

    <password type="sha1">1b4395b877794a16a7f4db5747380dbaafc7ff18</password>

"sha1" passwords are those that have been encrypted with a US Secure Hash Algorithm 1 (sha1) hash. [[RFC3174]](http://www.faqs.org/rfcs/rfc3174.html)

NOTE: **Note:** If you import encrypted passwords of one type and your ExpressionEngine installation was configured with a different type of encryption, the passwords will not work, and users will need to use the "Forgot Password" link to log in.

## Available Member Data Tags

- `<accept_admin_email>`
- `<accept_messages>`
- `<accept_user_email>`
- `<authcode>`
- `<avatar_filename>`
- `<avatar_height>`
- `<avatar_width>`
- `<cp_theme>`
- `<display_avatars>`
- `<display_signatures>`
- `<email>`
- `<forum_theme>`
- `<group_id>`
- `<in_authorlist>`
- `<ip_address>`
- `<join_date>`
- `<language>`
- `<last_activity>`
- `<last_bulletin_date>`
- `<last_comment_date>`
- `<last_email_date>`
- `<last_entry_date>`
- `<last_forum_post_date>`
- `<last_view_bulletins>`
- `<last_visit>`
- `<localization_is_site_default>`
- `<member_id>`
- `<notepad>`
- `<notepad_size>`
- `<notify_by_default>`
- `<notify_of_pm>`
- `<password>`
- `<photo_filename>`
- `<photo_height>`
- `<photo_width>`
- `<pmember_id>`
- `<private_messages>`
- `<profile_theme>`
- `<quick_links>`
- `<quick_tabs>`
- `<screen_name>`
- `<sig_img_filename>`
- `<sig_img_height>`
- `<sig_img_width>`
- `<signature>`
- `<smart_notifications>`
- `<template_size>`
- `<time_format>`
- `<timezone>`
- `<tmpl_group_id>`
- `<total_comments>`
- `<total_entries>`
- `<total_forum_posts>`
- `<total_forum_topics>`
- `<tracker>`
- `<upload_id>`
- `<username>`
- `<channel_id>`
