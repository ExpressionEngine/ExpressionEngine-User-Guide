Membership Preferences
======================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Preferences`

The Membership Preferences section of the Control Panel allows you to
set all of your membership-related preferences.

General Configuration
---------------------

.. _allow-member-register-label:

Allow New Member Registrations?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Set whether site visitors are allowed to register for accounts.

.. versionchanged:: 2.1.2
   New member registrations are disabled by default on new
   installations.

.. _member-account-activation-label:

Require Member Account Activation?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here you can choose how membership accounts are activated:

-  **No activation required**: New members are automatically activated
   and approved for the site. They can immediately log in and begin
   using any member areas available at your site.
-  **Self-activation via email**: New members are sent an email. Inside
   the email is a special activation link that the user must visit
   within two days to activate their account. By default
   ExpressionEngine uses this method since it ensures that the email
   address the user submitted when signing up is valid.
-  **Manual activation by an administrator**: New members may only be
   activated by an admin visiting the :menuselection:`Members -->
   Activate Pending` section of the Control Panel.

.. _member-require-tos-label:

Require Terms of Service
~~~~~~~~~~~~~~~~~~~~~~~~

When new members register through the site, a "terms of service" block
of text is displayed. This preference determines whether new members
must indicate that they agree to abide by these terms before they can
register. You may edit the terms of service within the registration form
template, located at :menuselection:`Design --> Themes --> Member
Profile Templates --> Default --> Registration Form`.

.. _allow-member-localization-label:

Allow members to set their own localization preferences?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Set whether dates and times are localized to each members' own
localization preferences. If set to "No", all dates and times will be
localized to the site default and localization preferences will be
disabled in the Member Profile and My Account pages.

.. _default-member-group-label:

Default Member Group Assigned to New Members
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This allows you to specify the Member Group to which approved members
will be assigned.

.. _member-default-theme-label:

Default Member Profile Theme
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The default member profile theme to be used in the Member Profile area
of your site. Available, installed themes are listed in the menu.

.. _profile-trigger-word-label:

Profile Triggering Word
~~~~~~~~~~~~~~~~~~~~~~~

When this word is encountered in your URL it will display your member
profile area. The word you choose can not be the name of an existing
template group. The default value of this is "member". That means that a
URL like the following would trigger ExpressionEngine to display the
member profile area:

http://example.com/index.php/member/profile/

Default Member List Preferences
-------------------------------

This sets default values for the public member list, typically located
at:

http://example.com/index.php/member/memberlist/

Member List - Sort By
~~~~~~~~~~~~~~~~~~~~~

Specifies the sorting criteria to be used. Choices are: Total Posts,
Screen Name, Total Comments, Total Entries, Join Date.

.. _member-list-order-label:

Member List - Order
~~~~~~~~~~~~~~~~~~~

Specifies whether to show the list in *Ascending* or *Descending* order.

.. _member-list-rows-label:

Member List - Rows
~~~~~~~~~~~~~~~~~~

Specifies the number of rows to return by default.

Notification Preferences
------------------------

.. _member-send-notifications-label:

Send new member notifications?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If enabled, notifications will be sent to the email addresses specified in the
next preference field.

.. _member-send-notifications-email-label:

Email address for notifications
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here you can specify the email addresses which should receive notifications (see
previous preference). Multiple email addresses should be separated by commas.

Private Messaging Preferences
-----------------------------

Maximum Number of characters to allow in Private Messages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Specifies the maximum number of characters allowed in a Private Message
to limit its total length.

HTML Formatting in Private Messages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This setting determines how raw HTML code within Private Messages is
handled. There are three options:

#. **Allow only safe HTML**: This will allow "safe" HTML to be rendered:
   (<b>, <i>, <u>, <em>, <strike>, <strong>, <pre>, <code>,
   <blockquote>, <h2>, <h3>, <h4>, <h5>, <h6>). All other HTML is
   converted to character entities.
#. **Convert HTML into character entities**: This will convert the HTML
   tags to HTML character entities so that it will display as plain text
   when viewed. This is useful if you want to display example code.
#. **Allow ALL HTML**: This leaves the HTML code as written and the code
   will then be interpreted by the browser when the message is viewed.

Auto-convert URLs and email addresses into links?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When this option is set to "Yes", any full URLs or email addresses will
be automatically formatted as a valid HTML link to the address. If the
option is "No" then the URL or email address will be treated and
displayed as plain text.

.. _server-path-for-attachment-upload-directory:

Server Path for Attachment Upload Directory
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here you set the *full server path* (**not** the URL) to the Private
Message attachment upload folder. By default, it is the pm\_attachments
folder inside the images folder.

The full server path might look something like
/home/example.com/public\_html/images/pm\_attachments/. If you do not
know what to use for your full server path, contact your Host or server
admin. Remember that this upload folder must be set to 777 permissions
(or otherwise be "writable").

Maximum Number of Attachments per Private Message
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Specifies the maximum number of file attachments that are allowed to be
included with each Private Message.

Maximum Size of Attachment for a Private Message (in Kilobytes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Specifies the maximum size of the attachment for each Private Message.

Maximum Amount of All Attachments (in Megabytes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum total storage space allowed for all Private Message
attachments in the system. Once this limit is reached, no new Private
Message attachments will be allowed.

Avatar Preferences
------------------

.. _avatar-enable-label:

Enable Avatars
~~~~~~~~~~~~~~

This determines whether avatars are enabled for your site. If enabled,
then users will be able to associate an image with their account that
you can optionally display with entries, comments, and forum posts.

.. _avatar-upload-label:

Allow members to upload their own avatars?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Set whether members can upload their own avatar. If this is set to "No"
but avatars are enabled, members will only be able to choose from among
the default avatars.

.. note:: As a site admin, you can add your own avatars by uploading
    them to :file:`/images/avatars/default_set/`.

.. _avatar-url-label:

URL to Avatar Folder
~~~~~~~~~~~~~~~~~~~~

The URL to the folder on your site that contains the avatars.

.. _avatar-path-label:

Server Path to Avatar Folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here you set the *full server page* (**not** the URL) to the avatars
folder. By default avatars are located in the avatars folder inside the
images folder.

The full server path might look something like
/home/example.com/public\_html/images/avatars/. If you do not know what
to use for your full server path, contact your Host or server admin.

.. _avatar-max-width-label:

Avatar Maximum Width
~~~~~~~~~~~~~~~~~~~~

The maximum width (in pixels) allowed for user-uploaded avatars.

.. _avatar-max-height-label:

Avatar Maximum Height
~~~~~~~~~~~~~~~~~~~~~

The maximum height (in pixels) allowed for user-uploaded avatars.

.. _avatar-max-kb-label:

Avatar Maximum Size (in Kilobytes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum file size allowed for user-uploaded avatars.

.. note:: There are 1024 Kilobytes per Megabyte, so if you want to allow
   a 2 MB avatar you'll enter 2048.

Member Photo Preferences
------------------------

.. _enable-member-photos-label:

Enable Member Photos
~~~~~~~~~~~~~~~~~~~~

This determines whether member photos are enabled for your site. If
enabled, then users will be able to upload an image to be displayed in
their member profile area.

URL to Photos Folder
~~~~~~~~~~~~~~~~~~~~

The URL to the folder on your site that contains the member photos.

Server Path to Photo Folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here you set the full *server* path to the member photos folder. By
default, it is the member\_photos folder inside the images folder. This
is **not** the URL to the folder.

The full server path might look something like
/home/example.com/public\_html/images/member\_photos/. If you do not
know what to use for your full server path, contact your Host or server
admin. Remember that this upload folder must be set to 777 permissions
(or otherwise be "writable").

.. _member-photo-max-width-label:

Photo Maximum Width
~~~~~~~~~~~~~~~~~~~

The maximum width (in pixels) allowed for user-uploaded member photos.

.. _member-photo-max-height-label:

Photo Maximum Height
~~~~~~~~~~~~~~~~~~~~

The maximum height (in pixels) allowed for user-uploaded member photos.

.. _member-photo-max-size-kb-label:

Photo Maximum Size (in Kilobytes)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum file size allowed for user-uploaded member photos.

.. note:: There are 1024 Kilobytes per Megabyte, so if you want to allow
   a 2 MB photo you'll enter 2048.

Signature Preferences
---------------------

.. _allow-member-sigs-label:

Allow Users to have Signatures?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This determines whether member signatures are enabled for your site. If
enabled, then users will be able to create a signature for their account
that you can optionally display with entries, comments, and forum posts.

.. _member-signature-max-chars-label:

Maximum number of characters per signature
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum number of characters allowed within a member's signature.

.. _member-signature-hot-linking-label:

Allow image hot linking in signatures?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Specifies whether or not members can "hot link" to images located on
other sites or servers. Most sites do not like other people to hot link
to their content since it basically "steals" their bandwidth.

.. _member-signature-allow-upload-label:

Allow users to upload an image in their signature?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determine whether or not members will be allowed to upload images to be
used in their signatures.

.. _member-signature-URL-label:

URL to Signature Image Upload Folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The URL to the folder on your site that contains the signature image
uploads.

.. _member-signature-server-path-label:

Server path to Signature Image Upload Folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Here you set the *full server page* (**not** the URL) to the signature
image uploads folder. By default, it is the signature\_attachments
folder inside the images folder.

The full server path might look something like
/home/example.com/public\_html/images/signature\_attachments/. If you do
not know what to use for your full server path, contact your Host or
server admin. Remember that this upload folder must be set to 777
permissions (or otherwise be "writable").

.. _member-signature-max-width-label:

Maximum Width of Signature Image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum width (in pixels) allowed for user-uploaded signature
images.

.. _member-signature-max-height-label:

Maximum Height of Signature Image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum height (in pixels) allowed for user-uploaded signature
images.

.. _member-signature-max-size-label:

Maximum Size (in Kilobytes) of Signature Image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The maximum file size allowed for user-uploaded signature images.

