Tracking Preferences
====================

.. rst-class:: cp-path

**Control Panel Location:** :menuselection:`Settings --> Tracking Preferences`

.. Overview

This section of the Control Panel allows you to define preferences for various tracking features of ExpressionEngine. Adjustments to these settings can help decrease resource usage if you are not utilizing the features, as well as help you manage :doc:`extreme traffic events</optimization/handling_extreme_traffic>`.


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

Enable Online User Tracking?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If enabled, online user statistics are tracked and the user-based
variables in the :doc:`Statistics </add-ons/statistics/index>` module
are available for use.

.. _tracking-enable-template-hit-tracking-label:

Enable Template Hit Tracking?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When set to "Yes", hits to your templates will be tracked in your
database on each page load.

.. _tracking-enable-channel-entry-view-label:

Enable Channel Entry View Tracking?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When set to "Yes", you can utilize the :doc:`/add-ons/channel/entry_tracking`
feature of the Channel module.

Enable Referrer Tracking?
~~~~~~~~~~~~~~~~~~~~~~~~~

You can determine whether referrer tracking is performed by the system.
When you have this preference set to "Yes", one additional database
access query will be performed for each page load so that the statistics
can be generated.

Maximum number of recent referrers to save
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You can limit the number of referrers stored in your database. This
setting helps ensure that your database does not get too large due to
storing referrers. Tracking does not cease when this number is reached,
but will trigger automatic pruning of the collected referrer data.

.. _suspend-tracking-label:

Suspend ALL tracking when number of online visitors exceeds:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note:: Online User Tracking must be enabled for this feature to work,
	or the information will not be available to ExpressionEngine to
	determine your site's traffic.

If a value is provided for this setting, when the number of "online
visitors" exceeds that value, all of the above tracking features will be
temporarily disabled until the number of online visitors drops below the
indicated value. Recommended values for this feature will vary based on
your hosting environment. Check with your server administrator to
discuss reasonable limits for your site.
