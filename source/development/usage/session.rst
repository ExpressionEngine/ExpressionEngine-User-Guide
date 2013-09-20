Session Class
=============

.. contents::
  :local:

.. highlight:: php

Calling the Session Class
-------------------------

.. class:: Session

  ExpressionEngine uses the Session class for storing information about
  the user currently visiting the ExpressionEngine site. If the user is
  a member and is logged in, then their various preferences and
  privileges are loading into variables, which are then immediately
  available throughout the entire program without the use of a query.
  This class is initialized automatically. ::

    function session_example()
    {
        if (ee()->session->userdata('group_id') != 1)
        {
            exit('Not a Superadmin');
        }
        else
        {
            $admin_email = ee()->session->userdata('email')
        }
    }

  The Functions class has numerous methods that use the information in
  the Session class variables to provide useful information for modules
  and plugins, such as allowed channels and access to areas. Make sure
  to check out the Functions class reference file for more information
  on these methods.

User Data Information
---------------------

.. method:: userdata($which[, $default = FALSE])

  .. note:: We recommend using the :meth:`Session::userdata` method
    instead of accessing the userdata property directly.

  The ``userdata`` method allows you to access information about the
  current user, and it will likely be the most used part of this class
  for any module. Below is a list of the variables that it contains::

    $group_id = ee()->session->userdata('group_id');

  :param string $which: The key you're looking for (see below)
  :param boolean $default: An optional default value to use if the key
    isn't set
  :returns: The value associated with the key
  :rtype: Mixed

  .. note:: If a user has a ``group_id`` of 1, then they can access
    anything, no matter the other settings.

  - ``username`` - Username of user
  - ``screen_name`` - Screename of user, if any
  - ``email`` - Email Address
  - ``url`` - Homepage, if any
  - ``location`` - Location, if any
  - ``language`` - Chosen Language
  - ``timezone`` - Chosen Timezone (``UM12`` - ``UTC`` - ``UP12``)
  - ``time_format`` - ``eu``/``us``
  - ``group_id`` - Group ID number (1-Superadmin, 2-Banned, 3-Guests,
    4-Pending, 5-Members, 6+ Other Member Groups
  - ``access_cp`` - ``y``/``n``
  - ``is_banned`` - ``0``/``1``
  - ``channel_id`` - Default channel's ``channel_id`` number
  - ``tmpl_group_id`` - Default template's ``group_id`` number
  - ``member_id`` - User's unique ``member_id``
  - ``last_visit`` - Last visit of user in Unixtime
  - ``total_entries`` - Total entries
  - ``total_comments`` - Total comments
  - ``total_forum_posts`` - Total Forum Posts for User (sum of topics
    and replies)
  - ``total_forum_topics`` - Total topics posted by user
  - ``total_forum_replies`` - Total replies posted by user
  - ``last_forum_post_date`` - Last time user posted in forum in GTM
    Unix timestamp
  - ``profile_theme`` - Selected member profile theme, if blank then
    default
  - ``forum_theme`` - Select forum theme, if blank then default
  - ``private_messages`` - Number of unread private messages
  - ``accept_messages`` - (``y``/``n``) Accept Private Messages
  - ``display_signatures`` - (``y``/``n``)
  - ``display_avatars`` - (``y``/``n``)
  - ``last_email_date`` - Last time an email was sent
  - ``notify_by_default`` - Notify of comments by default
  - ``ignore_list`` - Array containing ``member_id``'s that the logged
    in user wishes to ignore
  - ``group_title`` - Name of Group
  - ``is_locked`` - (``y``/``n``) Is member group access locked and only
    available to Superadmins?
  - ``can_view_offline_system`` - (``y``/``n``)
  - ``can_view_online_system`` - (``y``/``n``)
  - ``can_access_cp`` - (``y``/``n``)
  - ``can_access_publish`` - (``y``/``n``)
  - ``can_access_edit`` - (``y``/``n``)
  - ``can_access_design`` - (``y``/``n``)
  - ``can_access_comm`` - (``y``/``n``)
  - ``can_access_modules`` - (``y``/``n``)
  - ``can_access_admin`` - (``y``/``n``)
  - ``can_admin_channels`` - (``y``/``n``)
  - ``can_admin_members`` - (``y``/``n``)
  - ``can_delete_members`` - (``y``/``n``)
  - ``can_admin_mbr_groups`` - (``y``/``n``)
  - ``can_admin_mbr_templates`` - (``y``/``n``)
  - ``can_ban_users`` - (``y``/``n``)
  - ``can_admin_utilities`` - (``y``/``n``)
  - ``can_admin_preferences`` - (``y``/``n``)
  - ``can_admin_modules`` - (``y``/``n``)
  - ``can_admin_templates`` - (``y``/``n``)
  - ``can_view_other_entries`` - (``y``/``n``)
  - ``can_edit_other_entries`` - (``y``/``n``)
  - ``can_assign_post_authors`` - (``y``/``n``)
  - ``can_delete_self_entries`` - (``y``/``n``)
  - ``can_delete_all_entries`` - (``y``/``n``)
  - ``can_view_other_comments`` - (``y``/``n``)
  - ``can_edit_own_comments`` - (``y``/``n``)
  - ``can_delete_own_comments`` - (``y``/``n``)
  - ``can_edit_all_comments`` - (``y``/``n``)
  - ``can_delete_all_comments`` - (``y``/``n``)
  - ``can_moderate_comments`` - (``y``/``n``)
  - ``can_send_email`` - (``y``/``n``)
  - ``can_send_cached_email`` - (``y``/``n``)
  - ``can_email_members`` - (``y``/``n``)
  - ``can_email_member_groups`` - (``y``/``n``)
  - ``can_email_mailinglist`` - (``y``/``n``)
  - ``can_email_from_profile`` - (``y``/``n``)
  - ``can_view_profiles`` - (``y``/``n``)
  - ``can_post_comments`` - (``y``/``n``)
  - ``exclude_from_moderation`` - (``y``/``n``)
  - ``can_search`` - (``y``/``n``)
  - ``search_flood_control`` - Number of seconds between searches
  - ``can_send_private_messages`` - (``y``/``n``)
  - ``can_attach_in_private_messages`` - (``y``/``n``)
  - ``include_in_memberlist`` - (``y``/``n``)
  - ``display_photos`` - (``y``/``n``)
  - ``session_id`` - Session ID number
  - ``admin_sess`` - (``0``/``1``) Admin Session (``0`` => no, ``1``
    => yes)
  - ``ip_address`` - IP Address of user
  - ``user_agent`` - HTTP User Agent of user

  On the Control Panel side of ExpressionEngine a few more variables are
  included:

  - ``theme`` - Chosen Control Panel theme
  - ``quick_links`` - Quick Links for member
  - ``template_size`` - Size of Template textarea
  - ``assigned_channels`` - Array containing channel_id's of assigned
    channels for member.
  - ``assigned_modules`` - Array where the keys are the module_id's and
    the values determine if access is allowed (``0`` => no, ``1`` => yes).
    For Superadmins it will be empty, since they have unlimited access.
  - ``show_sidebar`` - (``y``/``n``) The state of the Control Panel
    sidebar.

Flash Data for Redirects
------------------------

.. method:: set_flashdata($key[, $val = ''])

  You may sometimes need to store small pieces of data, such as language
  keys, across page requests to show as result messages. You can do this
  using redirect flash data.::

    ee()->session->set_flashdata('result_message', 'Entry Deleted!');
    ee()->functions->redirect(BASE.AMP.'C=addons_modules'.AMP.'M=show_module_cp'.AMP.'module=fortune');

    // On the new page
    $message = ee()->session->flashdata('result_message');

  :param mixed $key: The name you want to store the data under
  :param string $val: The message that goes along with the message type
  :rtype: Void

  Flash data will often be used to specify a :doc:`Control panel class
  </development/usage/cp>` $cp_message variable (``'message_success'``,
  ``'message_notice'``, ``'message_error'``, ``'message_failure'``) the
  key and the message as the value, as such default view variables are
  displayed automatically.

  .. note:: Due to internal limitations this will only work in
    combination with the redirect method of the Functions class. Also
    keep in mind that this data is stored in a cookie, which have
    limited capacity.

Cache Access
------------

The Session cache is provided for you to use for
"flash" content, i.e. values that you would like to persist during a
page load, helping you eliminate redundant queries and PHP processing.

Here is an example of how one might utilize the cache methods. This way,
no matter how many times this method is called on a given page load (for
instance, a tag being used twice on a template, or within a tag that
might loop, such as a plugin within the Channel entries tag), the query
and loading of the array occurs only once.

::

    if ( ! ee()->session->cache('super_class', 'admins'))
    {
        $query = ee()->db->select('member_id')->get('super_class_admins');

        if ($query->num_rows() > 0)
        {
            $cache = array();

            foreach ($query->result() as $row)
            {
                $cache[] = $row->member_id;
            }

            ee()->session->set_cache('super_class', 'admins', $cache);
        }
    }

    // set a local variable from the cached

You can see an example of real-world usage of :meth:`Session::cache` in
the Channel module's ``fetch_custom_channel_fields()`` and
``next_prev_entry()`` methods, and the IP to Nation module's
``get_country()`` method.

.. method:: set_cache($class, $key, $val)

  Set the value of a session cache item::

    ee()->session->set_cache('module', 'name', $value);

  :param string $class: Name of the class you want to store this under,
    only used as an identifier, does not need to be the same as the
    class you're currently in
  :param string $key: Name of the cache item you're storing
  :param mixed $val: The data you want to store
  :returns: Session class
  :rtype: Object

.. method:: cache($class, $key[, $default = FALSE])

  Retrieve the value of a Session cache item::

    $value = ee()->session->cache('module', 'name');

  :param string $class: Name of the class you want to retrieve from
  :param string $key: Name of the cache item you're retrieving
  :param mixed $default: Default value if the ``$key`` doesn't exist
  :returns: The stored data
  :rtype: Mixed

Tracker Array
-------------

.. attr:: tracker

  The Session class has one more useful variable that is only available on
  the user side of the site. ``ee()->session->tracker`` is an array
  that contains the last five ExpressionEngine pages viewed by this user
  in the form of a ExpresionEngine query string (i.e. '/channel/comments/'
  or 'index' for main site page). The array's keys ranges from 0-5.

  ::

    $current_page = ee()->session->tracker['0'];
    $last_page = ee()->session->tracker['1'];
    $two_pages_ago = ee()->session->tracker['2'];

  If a page is constantly reloaded, ExpressionEngine will not allow the
  array to fill up with just the page's query string but waits until the
  user visits another page before updating the tracker array.
