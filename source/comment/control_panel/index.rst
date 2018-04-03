Comment Module Control Panel
============================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`CP Overview --> Review All New`

.. contents::
	:local:

The Comment Module Control Panel allows you to moderate comments. By
using the drop-down menus the list can be filtered by channel, comment
status, or date range. You can select multiple comments
using the checkboxes on the right, then either delete them or change
their status using the option menu at the bottom of the page.

Main Display
------------

Search and Filter
~~~~~~~~~~~~~~~~~

The main table shows the following columns:

-  **Comment**: The comment body, limited by default to 50 characters. Also includes the commenter's name and the title of the entry commented on.
-  **Date**: The date and time assigned to the comment.
-  **IP**: The commenter's IP address.
-  **Status**: The status of the comment (Pending, Open or Closed).
-  **Manage**: Contains a link to view full comment details and to edit the comment.

Comment Administration Privileges
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Comment administration permissions are set on a per member group basis
in :doc:`Create/Edit Member Groups </cp/members/groups/form>`.

-  **Can Moderate Comments**: Can view all comments and change the
   status of any comment.
-  **Can edit their own comments**: Can view, alter
   the status, and edit only comments they made.
-  **Can delete their own comments**: Can delete only
   comments they made.
-  **Can edit comments in ANY channel entries**: Can view, alter the
   status, and edit any comment.
-  **Can delete comments in ANY channel entries**: Can delete any
   comment.

.. note:: In order to moderate comments, the member must have access to
   the Comment Module Control Panel.

Settings
--------

This screen allows you to edit Comment settings. Note that much of the
behavior of the Comment Module is determined on a per Channel basis, and
thus found in the Comment Posting Preferences section of the
:doc:`Channel Preferences
</cp/channel/tab-settings>`.


.. _comment-force-censoring-label:

Enable Word Censoring?
~~~~~~~~~~~~~~~~~~~~~~

:doc:`Word censoring </cp/settings/word-censor>` normally applies to the
entire site, affecting both channel entries and comments. This setting
allows you to apply word censoring to comments, even when it is not
enabled system-wide.


.. _comment-expired-comments-label:

Moderate After Comments Expire?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, comments are no longer accepted for entries after their
comment expiration date has passed. Select this preference to override
that behavior and allow moderated comments on entries after comment
expiration.


.. _comment-editing-time-label:

Comment Editing Time Limit
~~~~~~~~~~~~~~~~~~~~~~~~~~

Set the length of time in seconds that members have to edit their
comments on the front end of the site. Set to "0" for no limit.
Members in the Super Admin group are exempt from this time limit.

Editing Comments
----------------

The edit page shows the recorded comment data and allows editing of the
individual comment.

Comments by registered members will use the member data when displaying
name, email, URL and location. Thus these fields will not be editable
for registered members.

If accessed by an administrator with only 'Can Moderate Comments'
privileges, only the status will be editable.


.. toctree::
	:glob:
	:titlesonly:
	:hidden:
