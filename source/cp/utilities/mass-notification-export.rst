Mass Notification Export
========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Utilities --> Mass Notification Export`

.. Overview

Mass Notification Export utility enables you to export a CSV file of the ID, screen name, username, and email address for all your Members. This action will be logged.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access Tools sections: Utilities
* Access settings: Members

Fields
------

.. contents::
  :local:
  :depth: 1

.. Each Field

Validate email addresses?
~~~~~~~~~~~~~~~~~~~~~~~~~

When on each email address will be checked to ensure it matches the syntax specified in `RFC 822 <https://tools.ietf.org/html/rfc822>`_. Additionally the domain will be checked to ensure it exists. This will produce two CSV files, one for all the valid addresses, and another for the invalid addresses.
