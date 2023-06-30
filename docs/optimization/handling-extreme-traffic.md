<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Handling Extreme Traffic

[TOC]

**Notice:** This info is intended for Server Admins when dealing with high-volume traffic spikes or as a permanent solution for radically high volume sites.

These ExpressionEngine features will help Server Admins decrease server resource usage and keep an ExpressionEngine installation running smoothly in the event of a traffic spike or as a way of dealing with the day-to-day reality of radically high-volume sites.

## Database Activity

In general, we recommend using the InnoDB storage engine for ExpressionEngine's MySQL tables, and that is what is used by default when ExpressionEngine is installed. While ExpressionEngine will run fine with MyISAM, the MyISAM storage engine has to lock an entire table when it inserts a new row. Especially in extreme traffic events, this characteristic of MyISAM can bring a database server to its knees.

There are a few optional tracking features of ExpressionEngine that will update tables on every page load. These trackers are not enabled by default, but if you have enabled them, and experience an extreme traffic event, you may want to disable them to help ease the load on the server.

These can be disabled in your Control Panel [Tracking Preferences](control-panel/settings/hit-tracking.md). If you are unable to access your site due to the traffic, you or your server administrator can manually override these features in your config.php file as follows:

## config.php Extreme Traffic Overrides

    $config['enable_online_user_tracking']

(y/n) - Corresponds to [Enable Online User Tracking?](control-panel/settings/hit-tracking.md)

    $config['enable_hit_tracking']

(y/n) - Corresponds to [Enable Template Hit Tracking?](control-panel/settings/hit-tracking.md)

    $config['enable_entry_view_tracking']

(y/n) - Corresponds to [Enable Channel Entry View Tracking?](control-panel/settings/hit-tracking.md)

    $config['log_referrers']

(y/n) - Corresponds to [Enable Referrer Logging?](control-panel/settings/hit-tracking.md)

    $config['dynamic_tracking_disabling']

(numeric) - Corresponds to [Suspend ALL tracking when number of online visitors exceeds:](control-panel/settings/hit-tracking.md)

    $config['disable_all_tracking']

(y/n) - config.php only preference which can be set to `y` in an emergency, which will disable all of the above. This is useful for server administrators who need a way to respond immediately and can't access the control panel.

## Disk I/O

ExpressionEngine's caching mechanisms can help reduce database load in most situations. However if you use file-based caching, that may transfer some of the resources saved from the database server to the web server. Thus, it is recommended that you use either the Memcached or Redis [caching driver](optimization/caching.md#caching-drivers) instead of the file driver, especially on high-traffic sites. The increased disk i/o from file caches being created and destroyed during a high traffic event consumes significantly more server resources than the memory-based caching drivers.

If you are running in a PHP environment without Opcode caching, [saving templates as files](general/system-configuration-overrides.md#save_tmpl_files) can marginally increase disk i/o as each template must be retrieved from disk. We recommend running PHP 7 or greater so that this type of file activity is managed better by the server.

## Using Load Balancers

Using load balancer or reverse proxy server is popular solution to mitigare DDoS attacks and make handling high traffic easier.

When the server is placed behind reverse proxy or load balancer, ExpressionEngine in default configuration might not know the user's real IP address because it would be substituted with the proxy IP address. Most of the proxies however would send the real user's IP in some HTTP headers. In order to use the data in those headers to obtain the real user IP address, you need to configure the system to make it aware of the list of trusted proxy IP addresses or ranges. This can be done using [`proxy.php` configuration file](config/config-files.md#reverse-proxy-ip-addresses).