.. # This source file is part of the open source project
   # ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)
   #
   # @link      https://expressionengine.com/
   # @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
   # @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0

Handling Extreme Traffic
========================

**Notice:** This info is intended for Server Admins when dealing with
high-volume traffic spikes or as a permanent solution for radically high
volume sites.

These ExpressionEngine features will help Server Admins decrease server
resource usage and keep an ExpressionEngine installation running
smoothly in the event of a traffic spike or as a way of dealing with the
day-to-day reality of radically high-volume sites.

Database Activity
-----------------

In general, we recommend using the InnoDB storage engine for ExpressionEngine's MySQL tables, and that is what is used by default when ExpressionEngine is installed. While ExpressionEngine will run fine with MyISAM, the MyISAM storage engine has to lock an entire table when it inserts a new row. Especially in extreme traffic events, this characteristic of MyISAM can bring a database server to its knees.

There are a few optional tracking features of ExpressionEngine that will update tables on every page load. These trackers are not enabled by default, but if you have enabled them, and experience an extreme traffic event, you may want to disable them to help ease the load on the server.

These can be disabled in your Control Panel :doc:`Tracking Preferences </cp/settings/hit-tracking>`. If you are unable to access your site due to the traffic, you or your server administrator can manually override these features in your config.php file as follows:

config.php Extreme Traffic Overrides
------------------------------------

.. highlight:: php

::

	$config['enable_online_user_tracking']

(y/n) - Corresponds to :doc:`Enable Online User Tracking? </cp/settings/hit-tracking>`

::

	$config['enable_hit_tracking']

(y/n) - Corresponds to :doc:`Enable Template Hit Tracking? </cp/settings/hit-tracking>`

::

	$config['enable_entry_view_tracking']

(y/n) - Corresponds to :doc:`Enable Channel Entry View Tracking? </cp/settings/hit-tracking>`

::

	$config['log_referrers']

(y/n) - Corresponds to :doc:`Enable Referrer Logging? </cp/settings/hit-tracking>`

::

	$config['dynamic_tracking_disabling']

(numeric) - Corresponds to :doc:`Suspend ALL tracking when number of online visitors exceeds: </cp/settings/hit-tracking>`

::

	$config['disable_all_tracking']

(y/n) - config.php only preference which can be set to ``y`` in an emergency, which will disable all of the above. This is useful for server administrators who need a way to respond immediately and can't access the control panel.


Disk I/O
--------

ExpressionEngine's caching mechanisms can help reduce database load in most situations. However if you use file-based caching, that may transfer some of the resources saved from the database server to the web server. Thus, it is recommended that you use either the Memcached or Redis :ref:`caching driver <caching_drivers>` instead of the file driver, especially on high-traffic sites. The increased disk i/o from file caches being created and destroyed during a high traffic event consumes significantly more server resources than the memory-based caching drivers.

If you are running in a PHP environment without Opcode caching, :doc:`saving templates as files </templates/templates_as_files>` can marginally increase disk i/o as each template must be retrieved from disk. We recommend running PHP 7 or greater so that this type of file activity is managed better by the server.
