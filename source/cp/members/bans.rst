.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Ban Settings
============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Members --> Ban Settings`

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


Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

.. _member-banned-ip-label:

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

.. _member-banned-email-label:

Email addresses
~~~~~~~~~~~~~~~

Specify email addresses to ban from site registration and login. Use
wildcards for partial email addresses. For example,
``*@spammydomain.com``. Each address should be placed on a separate
line.

.. _member-banned-username-label:

Restricted usernames
~~~~~~~~~~~~~~~~~~~~

Specify usernames that cannot be used for member accounts, which can
be handy for reserving certain usernames for your own use.

.. _member-banned-screename-label:

Restricted screen names
~~~~~~~~~~~~~~~~~~~~~~~

Specify screen names that cannot be used for member accounts, which can
be handy for reserving certain screen names for your own use.

When a banned user attempts access
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can prevent access completely by forwarding them to another website, or
show them an unavailable message, or allow them to access the website in view
only mode.
