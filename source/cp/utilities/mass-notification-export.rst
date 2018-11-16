.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Mass Notification Export
========================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Developer Tools --> Utilities --> Mass Notification Export`

.. Overview

The Mass Notification Export utility enables you to export a CSV file of the ID,
screen name, username, and email address for all your Members. This action will
be logged to the :doc:`/cp/logs/cp`.

This can be used to notify users in the unfortunate event of a data breach, such
as is required by the |gdpr|. We recommend to validating the email addresses
before sending any mass notification emails, otherwise your server could end
up blacklisted. Any of the following services will validate email addresses:

* `Email Verifier App <https://www.emailverifierapp.com>`_
* `VerifyEmailAddress.org <https://www.verifyemailaddress.org>`_
* `Hunter <https://hunter.io/email-verifier>`_

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

When enabled each email address will be checked to ensure it matches the syntax
specified in `RFC 822 <https://tools.ietf.org/html/rfc822>`_. Additionally the
domain will be checked to ensure it exists. This will produce two CSV files, one
for all the valid addresses, and another for the invalid addresses.
