.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2018, EllisLab, Inc. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Performance Monitoring with New Relic
=====================================

ExpressionEngine supports deep application monitoring with `New Relic
<http://newrelic.com/>`_
out of the box. When New Relic is deployed on your server,
you will instantly have visibility into performance metrics such as [1]_:

* Individual page transaction performance
* Slow SQL queries
* Detailed Stack traces that can help diagnose specific pain points
  in both first and third-party code.
* Identifying transactions that are memory / resource hogs

This information can be used to help you make decisions on where to
focus your efforts when optimizing, whether it be making changes to
templates, implementation caching mechanisms, modifying your add-ons,
or even just knowing which developer to seek out for support.

.. [1] Availability of features may vary depending on your New Relic
   account.

.. _sysadmin-newrelic_app_name:

Customizing the Application Name
--------------------------------

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Debugging & Output`

If you're using New Relic to monitor the performance of multiple
ExpressionEngine installations, you'll likely want those installations
to show up separately in your New Relic dashboard. As long as New Relic
is deployed on your server, you'll see an option in the *Output and
Debugging* settings to customize the application name that is reported
to New Relic.

You can also set the application name as a :ref:`configuration
override <overrides-newrelic-app-name>`.


Disabling New Relic's RUM JavaScript
------------------------------------

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Debugging & Output`

It may be desirable at times to disable New Relic's `Real User
Monitoring JavaScript <https://newrelic.com/docs/features/real-user-
monitoring>`_ from being inserted into your web pages. Services that
fetch your web pages in order to import content for you (such as
`Campaign Monitor <http://campaignmonitor.com>`_ and `MailChimp
<http://mailchimp.com>`_ for instance) may get hung up on the script tag
that the New Relic PHP extension inserts into your content.

To disable New Relic's RUM JavaScript from being inserted, turn off the
*Enable New Relic RUM JavaScript?* preference in the *Output and
Debugging* settings.
