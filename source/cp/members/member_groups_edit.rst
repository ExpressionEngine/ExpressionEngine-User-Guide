Member Groups - Create/Edit
===========================

Control Panel Location: :menuselection:`Members --> Member Groups -->
Create/Edit`. This page describes each of the preferences available to
your Member Groups.

Enable Group Security Lock
--------------------------

When a group is locked, only a Super Admin can assign a member to that
group. If you allow other users to administrate member accounts, it is
highly recommended that you ONLY unlock groups you want them to be able
to assign other users to. Without this feature, anyone with
administrative privileges could effectively assign themselves or others
to member groups with greater privileges.

Site Access
-----------

Can View Site When it is Online
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of this group can view your site when it is
"online" in your `General
Configuration <../admin/general_configuration.html>`_ page.
It is highly unlikely that you'll ever set this preference to "no"
unless the Member Groups is used with banned users.

Can View Site When it is Offline
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of this group can view your site when it has
been taken offline in your `General
Configuration <../admin/general_configuration.html>`_ page.

Member Account Privileges
-------------------------

Can view public profiles
~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group can view the public profiles of
other members.

Can email other members via the profile email console
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group can email other members using
the Email Console in the member profile area.

Can edit own HTML formatting buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines if members of a group can edit HTML buttons presented to them
on the publish page.

Include Members in PUBLISH page multi-author list?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether members of this group will appear in the Publish page
"Multi-Author list".

**Note:** This setting overrides any individual users's setting in the
My Account area. If set here to "Yes", then **all** members of the
member group will be displayed in the Multi-Author list drop-down in the
Publish page.

Include Members in Site's Member List?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether members of the group are included in Member List,
typically located at:

http://example.com/index.php/member/memberlist/

Can delete own account - deletes all posts, entries, and comments as well
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group can delete their own account.
If enabled, members of this group will be able to delete their own
account through their front-end member control panel.

**Note:** When a user deletes their own account, it also removes *all
content* created by them from your site: comments, channel entries,
forum topics, and forum posts.

Email Address of Delete Notification Recipient(s)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If the previous setting is set to "Yes", then these are the recipients
of the email alert. You may define a single email address or list
multiple addresses by separating them with a comma. Ex:
"admin@example.com, joe@example.com" This notification only applies to
members who delete their own accounts from their front-end member
control panel, and not to members who are deleted from the system
control panel by an administrator.

Comment Posting Privileges
--------------------------

Can submit comments
~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group can post comments.

Exclude member from comment moderation
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you use the Comment Moderation feature, this preference determines
whether a member of the group is exempt from being moderated.

Search Privileges
-----------------

Can use search utility
~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to use the simple or
advanced search forms.

Number of seconds between searches
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The number of seconds that must lapse before a user is allowed to
perform a subsequent search. Set to 0 if you do not require any time to
lapse.

Private Messaging Privileges
----------------------------

Can send private messages
~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to send private
messages.

Maximum Number of Private Messages a user can store
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Sets the maximum number of Private Messages that each member of the
group can store. This is the sum of all Private Messages in their
"Inbox", "Sent", and any custom folders they have created.

Maximum Number of Private Messages a user can send per day
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may restrict how many Private Messages any particular user of the
group may send in one day. This can help prevent abuse of the Private
Messaging system.

Can Add Attachments to Private Messages
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to add attachments
to their private messages.

Can Send Bulletins
~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to send Bulletins.

Control Panel Access
--------------------

Can access the control panel?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to access the
Control Panel.

Control Panel Area Access
-------------------------

These preferences let you restrict access to various areas of the
Control Panel.

Can access PUBLISH page
~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to access the
PUBLISH page.

Can access EDIT page
~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to access the EDIT
page.

access TEMPLATES page
~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to access the
PUBLISH page.

Can access COMMUNICATE page
~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to access the
TEMPLATES page.

Can access MODULES page
~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to access the
MODULES page.

Can access ADMIN page
~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to access the ADMIN
page.

Control Panel Administrative Privileges
---------------------------------------

These preferences let you assign Control Panel administrative
privileges.

Can administrate channels and channel preferences
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to create, edit, and
delete Channels and Channel preferences.

Can administrate file upload preferences
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to create, edit, and
delete File Upload Preferences and Watermarks, and Synchronize files.

Can administrate template groups and templates
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to create, edit, and
delete Template Groups and Templates.

Can administrate members accounts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to create, edit, and
delete Membership accounts.

Can change the group that a member is assigned to
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to change the Member
Groups assignment for any given member (except Super Admins). Note: Only
Groups that are unlocked apply to this preference.

Can administrate member profile templates
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to edit Member
Profile Templates.

Can delete members
~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to delete Member
accounts.

Can ban users
~~~~~~~~~~~~~

Determines whether a member of the group is allowed to access the User
Banning page.

Can administrate system utilities
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to administrate
Utilities, located at :menuselection:`Admin --> Utilities`.

Can administrate general preferences
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to administrate
System Preferences, located at :menuselection:`Admin --> System Preferences`.

Can install/remove modules
~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to
install/de-install the Modules.

Control Panel Email Privileges
------------------------------

Can send email via the Control Panel
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to send email using
the COMMUNICATE page.

Can send email to Member Groups
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to send email to
entire Member Groups using the COMMUNICATE page.

Can send email to Mailing List
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to send email to a
Mailing List using the COMMUNICATE page.

Can view/send cached email
~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to see previously
sent email messages as well as re-send them.

Channel Posting and Editing Privileges
--------------------------------------

These preferences determine the privileges a user has with regard to
creating, editing, and deleting channel entries via the control panel.

Can view channel entries authored by others
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **view** channel
entries that have been authored by someone else. Note: One entries
within channels assigned to the user (see below) apply.

Can delete their own channel entries
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **delete** their
own channel entries. Note: One entries within channels assigned to the
user (see below) apply.

Can edit entries authored by others
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **edit** channel
entries that have been authored by someone else. If this is set to yes
then members of this group will also be able to *view channel entries
authored by others* regardless of that permission's setting. Note: One
entries within channels assigned to the user (see below) apply.

Can delete channel entries authored by others
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **delete**
channel entries that have been authored by someone else. Note: One
entries within channels assigned to the user (see below) apply.

Can change the author name when posting channel entries
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to change the author
name when posting or editing entries. Note: One entries within channels
assigned to the user (see below) apply.

Can edit and add new categories
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **add** new
categories from the publish page.

Can delete categories
~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **delete**
categories from the publish page.

Channel Assignment
------------------

This area will show a list of all the channels in the system. You may
assign a channel or combinations of channels to the group. Only
channel(s) that are assigned to the group are included in the Channel
Posting and Editing Privileges above.

.. _comment-admin-privs:

Comment Administration Privileges
---------------------------------

Can Moderate Comments
~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **moderate
comments** via the control panel.

Can view comments in channel entries authored by others
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **view comments**
via the control panel for channel entries authored by someone else.

Can edit comments in their own channel entries
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **edit comments**
via the control panel for their own channel entries.

Can delete comments in their own channel entries
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **delete
comments** for their own channel entries.

Can edit comments in ANY channel entries
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **edit comments**
for channel entries authored by someone else.

Can delete comments in ANY channel entries
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Determines whether a member of the group is allowed to **delete
comments** for channel entries authored by someone else.

Template Editing Privileges
---------------------------

Similar to the Channel Assignment area above, this area will show a list
of all the **Template Groups** in the system. You may assign a template
group or combinations of them to the member group. Only Template
Group(s) that are assigned to the member group are allowed to be
accessed and members will have add/edit/delete privileges in those
template groups.

Module Access Privileges
------------------------

Individual Modules can be assigned to the group, allowing its control
panel (if it has one) to be accessed.
