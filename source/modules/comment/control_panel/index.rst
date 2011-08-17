Comment Module Control Panel
============================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Add-Ons --> Modules --> Comment`

.. contents::
	:local:

The Comment Module Control Panel allows you to moderate comments. By
using the drop-down menus the list can be filtered by channel, comment
status, or date range. In addition, you can search in the comments, by
commenter IP address, commenter name, commenter email and by the channel
entry title the comment is assigned to. You can select multiple comments
using the checkboxes on the right, then either delete them or change
their status using the option menu at the bottom of the page.

|Comment Control Panel|

Main Display
------------

Search and Filter
~~~~~~~~~~~~~~~~~

The main table shows the following columns:

-  **Display toggle**: Toggles the display of the full comment. Click on
   the column heading to expand/collapse all comments.
-  **Comment**: The comment body, limited by default to 100 characters
   with line breaks preserved (see
   `view\_comment\_chars <../../../general/hidden_configuration_variables.html#view_comment_chars>`_
   and
   `view\_comment\_leave\_breaks <../../../general/hidden_configuration_variables.html#view_comment_leave_breaks>`_
   for formatting options). Clicking the comment text allows you to
   `view or edit the comment <#editing-comments>`_.
-  **Entry Title**: Click to search in entry titles for all comments for
   this entry.
-  **Name**: The commenter's name. Click to search in names for more
   name matches.
-  **Email**: The commenter's email address. Click to search for more
   email matches.
-  **Date**: The date and time assigned to the comment.
-  **IP**: The commenter's IP address. Click to search for more IP
   matches.
-  **Status**: The status of the comment (Pending, Open or Closed).
   Click to filter on this status.

**NOTE:** The 'Add IPs to Blacklist' checkbox is only available when
deleting comments. The `Blacklist Module <../../blacklist/index.html>`_
must be installed to use this feature.

Comment Administration Privileges
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Comment administration permissions are set on a per member group basis
in `Create/Edit Member
Groups <../../../cp/members/member_groups_edit.html>`_

.

-  **Can Moderate Comments**: Can view all comments and change the
   status of any comment.
-  **Can edit comments in their own channel entries**: Can view, alter
   the status, and edit only comments to their own entries.
-  **Can delete comments in their own channel entries**: Can delete only
   comments to their own entries.
-  **Can edit comments in ANY channel entries**: Can view, alter the
   status, and edit any comment.
-  **Can delete comments in ANY channel entries**: Can delete any
   comment.

**NOTE:** In order to moderate comments, the member must have access to
the Comment Module Control Panel.

Settings
--------

This screen allows you to edit Comment settings. Note that much of the
behavior of the Comment Module is determined on a per Channel basis, and
thus found in the Comment Posting Preferences section of the `Channel
Preferences <../../../cp/admin/content_admin/channel_edit_preferences.html>`_.

Force word censoring for comments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`Word censoring <../../../cp/admin/system_admin/word_censoring.html>`_
normally applies to the entire site, affecting both channel entries and
comments. This setting allows you to apply word censoring to comments,
even when it is turn off for the site as a whole. The censored words and
replacements are still determined by the Administration preferences, and
if site-wide word censoring is enabled, comments will still be censored
regardless of this setting.

Moderate expired comments
~~~~~~~~~~~~~~~~~~~~~~~~~

Forces moderation of comments once the Comment Expiration date for an
entry is passed, rather than closing comments entirely. The existing
moderation rules regarding whether members are exempt from moderation
will be followed.

Comment Editing Time Limit
~~~~~~~~~~~~~~~~~~~~~~~~~~

This specifies the length of time (in seconds) that non-Superadmins have
before comment editing is disallowed on the front end of the site. Set
to 0 for no limit.

Editing Comments
----------------

The edit page shows the recorded comment data and allows editing of the
individual comment.

|Comment Edit Control Panel|

Comments by registered members will use the member data when displaying
name, email, url and location. Thus these fields will not be editable
for registered members.

If accessed by an administrator with only 'Can Moderate Comments'
privileges, only the status will be editable.


.. |Comment Control Panel| image:: ../../../images/comment_cp.png
.. |Comment Edit Control Panel| image:: ../../../images/comment_edit_form.png

.. toctree::
	:glob:
	:titlesonly:
	:hidden:
	
	*