.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

#####################
Comment Subscriptions
#####################

.. contents::
  :local:
  :depth: 2

******************************
Comment Notification Links Tag
******************************

The ``{exp:comment:notification_links}`` tag can be to allow members to
subscribe to an entry without commenting via a simple link. This tag may only be
used on a single entry page.::

  {exp:comment:notification_links}
    {if subscribed}
      <h5><a href="{unsubscribe_link}">Unsubscribe to comment notification for this entry.</a></h5>
    {if:else}
      <h5><a href="{subscribe_link}">Subscribe to comment notification for this entry.</a></h5>
    {/if}
  {/exp:comment:notification_links}

Comment notification links will only show on a single-entry pages, such
as "comment" pages.

.. note:: Only logged in members may subscribe without commenting. The
   tag will return nothing for non-logged in members.

.. note:: If your URL does not contain the entry ID or url_title, you must use
  either the ``entry_id=`` or ``url_title=`` parameter on your
  ``{exp:comment:notification_links}`` tag.

***************************
Comment Subscriber List Tag
***************************

The Comment Subscriber List Tag enables you to display the members who
have subscribed to comment notifications for a particular entry.

.. note:: The Comment Subscriber List Tag is intended for use in one of your
  "single entry" pages. That is, a page that shows a single, specific
  channel entry. Its variables are all prefixed, so you can easily use it
  inside of a channel entries tag or a comment entries tag.

Here is a basic example showing how you might use the Comment Subscriber
List Tag::

  {exp:comment:subscriber_list}
    {if subscriber_count == 1}
      <p>{subscriber_total_results} Subscribed</p>
      <ul>
    {/if}

    {if subscriber_is_member}
      <li><a href="{path='member/{subscriber_member_id}'}">{subscriber_screen_name}</a></li>
    {/if}

    {if subscriber_count == subscriber_total_results}
      <li>and {subscriber_guest_total} Guest{if subscriber_guest_total != 1}s{/if}</li>
      </ul>
    {/if}
  {/exp:comment:subscriber_list}

Parameters
==========

.. contents::
  :local:
  :depth: 2

entry\_id=
----------

::

  entry_id="24"

You can hard code the comment subscriber list tag to show subscribers
for a specific channel entry by its entry ID.

.. note:: This parameter takes precedence over any entry specified
  dynamically in the URL, so when using this parameter you will want to
  make sure it is clear to the user which entry the displayed comments
  belong to.

exclude\_guests=
----------------

::

  exclude_guests="yes"

If you would like to exclude guest comments from the list and totals, set
the `exclude_guests` parameter to "yes". Comments made by non-members will
not be included in the totals, and their email addresses will not be
available for output to Super Admins.


Variables
=========

.. contents::
  :local:
  :depth: 2

subscriber\_count
-----------------

::

  {subscriber_count}

The "count" out of the current subscriber being displayed by the tag. Also
available simply as `{count}`, but using the prefixed version makes this
variable safe to use inside of other tags that may have their own `{count}`
variable.

subscriber\_email
-----------------

::

  {subscriber_email}

The email address of the subscriber being displayed.

.. note:: For the privacy of your site's members, email addresses will
  **only** be output to logged in Super Admins. This is useful for making
  this information known to administrators, e.g.::

   {if subscriber_is_member}
    {subscriber_screen_name}
   {if:else}
    {encode="{subscriber_email}"}
   {/if}

  `{subscriber_email}` will be empty if you are not logged in as a
  Super Admin so it is best to use this variable in a conditional.

subscriber\_guest\_total
------------------------

::

  {subscriber_guest_total}

The total number of subscribers to an entry who are **not** registered
members of the site.

subscriber\_member\_id
----------------------

::

  {subscriber_member_id}

The member ID of the subscriber being displayed. This will be "0" if the
subscriber is a guest, so it is best to use this variable in a conditional.

subscriber\_member\_total
-------------------------

::

  {subscriber_member_total}

The total number of subscribers to an entry who are registered members
of the site.

subscriber\_screen\_name
------------------------

::

  {subscriber_screen_name}

The screen name of the subscriber. This will be empty if the subscriber
is a guest, so it is best to use this variable in a conditional.

subscriber\_total\_results
--------------------------

::

  {subscriber_total_results}

The total number of subscribers to an entry. Also available simply as
`{total_results}`, but using the prefixed version makes this variable
safe to use inside of other tags that may have their own
`{total_results}` variable.


Conditionals
============

.. contents::
  :local:

subscriber\_is\_member
----------------------

::

  {if subscriber_is_member}

The conditional allows you to show (or hide) content based on whether
the subscriber is a registered member of the site.
