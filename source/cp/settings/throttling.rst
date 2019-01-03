.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Access Throttling
=================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Access Throttling`

.. Overview

This section of the Control Panel allows you to manage the Throttling
feature. See :doc:`/optimization/throttling` for more information
regarding this feature.

.. Screenshot (optional)

.. Permissions

Permission Restrictions
-----------------------

* Access settings: General Settings

Settings
--------

.. contents::
  :local:
  :depth: 1

.. Each Action/Section

.. _enable-throttling-label:

Enable throttling?
~~~~~~~~~~~~~~~~~~

Allows you to enable or disable this feature.

.. _throttling-no-ip-address-label:

Require IP?
~~~~~~~~~~~

Set the system to deny a visitor access if the user's IP address cannot
be determined while throttling is enabled.

.. _throttling-max-page-load-label:

Maximum page loads
~~~~~~~~~~~~~~~~~~

The total number of times a user is allowed to load your web pages
(within the time interval below) before being locked out. For example,
if you set this preference to 5 page loads within 10 seconds, a user can
not browse more than 5 pages within a 10 second interval or the
throttling feature will be triggered, locking them out of your site
according to the parameters you set below.

.. _throttling-time-interval-label:

Time interval
~~~~~~~~~~~~~

The number of **seconds** during which the above number of page loads
are allowed.

.. _throttling-lockout-time-label:

Lockout time
~~~~~~~~~~~~

The length of time in **seconds** that a user will be unable to use your
site.

.. _throttling-action-to-take:

Lock out action
~~~~~~~~~~~~~~~

The action that should take place if a user has exceeded the limits. The
options are:

-  :guilabel:`Send 404 headers`: This option will cause standard server 404 Page
   Not Found headers to be sent.
-  :guilabel:`URL Redirect`: This option will send the user to a URL of your
   choice.
-  :guilabel:`Show custom message`: This option will display a custom message
   you can specify.

.. _throttling-url-for-redirect:

Redirect
~~~~~~~~

If you choose the :guilabel:`URL Redirect` option above, this preference
enables you to set the destination URL.

.. _throttling-custom-message:

Message
~~~~~~~

Set a custom message to show throttled visitors. Throttling must be
enabled and :guilabel:`Action to Take` must be set to :guilabel:`Show
custom message`.
