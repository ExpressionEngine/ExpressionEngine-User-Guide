.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Sent Emails
===========

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer --> Utilities --> Sent`

.. Overview

This section of the Control Panel shows a table of all the previously sent
emails. It lists the email title (subject), when it was sent, number of
recipients, a re-send link, and a delete checkbox.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access Tools sections: Utilities
* Access Tools sections: Communicate

Actions
-------

.. contents::
  :local:
  :depth: 1

.. Each Action

Search Emails
~~~~~~~~~~~~~

This will search emails by subject, message, from name, from email, recipients,
CC, and BCC, respecting the current filters.

Create New Email
~~~~~~~~~~~~~~~~

.. note:: This will only display when there are no sent emails.

Manage
~~~~~~

The icons in the manage column perform actions on the email in its row.

View
^^^^

This will open a modal which displays the email.

Resend
^^^^^^^^

This will take you to :doc:`index` populated with this email's data.

Bulk Actions
~~~~~~~~~~~~

The checkbox in the right-most column of the table selects a button for a bulk
action. When at least one checkbox is checked the bulk action dropdown menu and
submit button will be made available in the lower righthand corner of the table.

Remove
^^^^^^

The selected emails will be removed. Removing a email will cause a
confirmation modal to appear that will summarize the action.
