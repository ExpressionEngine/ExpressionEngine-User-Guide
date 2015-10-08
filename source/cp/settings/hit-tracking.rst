Hit Tracking
============

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Hit Tracking`

.. Overview

This section of the Control Panel allows you to define the messaging
settings of your site.

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

.. _tracking-enable-online-user-tracking-label:

Enable online user tracking?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If enabled, online user statistics are tracked and the user-based
variables in the :doc:`Statistics </add-ons/statistics/index>` module
are available for use.

.. _tracking-enable-template-hit-tracking-label:

Enable template hit tracking?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When set to "Yes", hits to your templates will be tracked in your
database on each page load.

.. _tracking-enable-channel-entry-view-label:

Enable entry view tracking?
~~~~~~~~~~~~~~~~~~~~~~~~~~~

When set to "Yes", you can utilize the :doc:`/add-ons/channel/entry_tracking`
feature of the Channel module.

.. _suspend-tracking-label:

Suspend threshold?
~~~~~~~~~~~~~~~~~~

.. note:: Online User Tracking must be enabled for this feature to work,
	or the information will not be available to ExpressionEngine to
	determine your site's traffic.

If a value is provided for this setting, when the number of "online
visitors" exceeds that value, all of the above tracking features will be
temporarily disabled until the number of online visitors drops below the
indicated value. Recommended values for this feature will vary based on
your hosting environment. Check with your server administrator to
discuss reasonable limits for your site.
