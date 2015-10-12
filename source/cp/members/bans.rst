Banned Members
==============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Manage Bans`

.. Overview

The User Banning section of the Control Panel allows you to ban users by IP
address, email, or name.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: Members
* Members Allowed actions: Ban Members

Actions
-------

.. contents::
  :local:
  :depth: 1

.. Each Action

.. include:: /cp/members/_header.rst

Username Links
~~~~~~~~~~~~~~

This will take you to the member's :doc:`profile <profile>`.

Username Email Links
~~~~~~~~~~~~~~~~~~~~

This will allow you to email the member using your default mail client.

Manage
~~~~~~

The icons in the manage column perform actions on the member in its row.

Edit
^^^^

This will take you to the member's :doc:`profile <profile>`.

Bulk Actions
~~~~~~~~~~~~

The checkbox in the right-most column of the table selects a button for a bulk
action. When at least one checkbox is checked the bulk action dropdown menu and
submit button will be made available in the lower righthand corner of the table.

Remove
^^^^^^

The selected members will be removed. Removing a member will cause a
confirmation modal to appear that will summarize the action.

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

IP addresses
~~~~~~~~~~~~

Specify IP addresses to ban from site registration and login. Use
wildcards to ban blocks of IP addresses. For example, ``123.321.*``.
Each IP address should be placed on a separate line.

You also set what happens when a user with a banned IP address tries to
access the site:

-  Restrict the user to viewing the site only. They will not be able to
   submit comments or do anything else except passively view the
   content.
-  Show the user a specific message.
-  Redirect the user to another specified site.

Email addresses
~~~~~~~~~~~~~~~

Specify email addresses to ban from site registration and login. Use
wildcards for partial email addresses. For example,
``*@spammydomain.com``. Each address should be placed on a separate
line.

Restricted usernames
~~~~~~~~~~~~~~~~~~~~

Specify usernames that cannot be used for member accounts, which can
be handy for reserving certain usernames for your own use.

Restricted screen names
~~~~~~~~~~~~~~~~~~~~~~~

Specify screen names that cannot be used for member accounts, which can
be handy for reserving certain screen names for your own use.

When a banned user attempts access
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can prevent access completely by forwarding them to another website, or
show them an unavailable message, or allow them to access the website in view
only mode.
