<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Performance Monitoring with New Relic

[TOC]

ExpressionEngine supports deep application monitoring with [New Relic](http://newrelic.com/) out of the box. When New Relic is deployed on your server, you will instantly have visibility into performance metrics such as:

- Individual page transaction performance
- Slow SQL queries
- Detailed Stack traces that can help diagnose specific pain points in both first and third-party code.
- Identifying transactions that are memory / resource hogs

This information can be used to help you make decisions on where to focus your efforts when optimizing, whether it be making changes to templates, implementation caching mechanisms, modifying your add-ons, or even just knowing which developer to seek out for support.

## Customizing the Application Name

**Control Panel Location:** `Settings --> Debugging & Output`

If you're using New Relic to monitor the performance of multiple ExpressionEngine installations, you'll likely want those installations to show up separately in your New Relic dashboard. As long as New Relic is deployed on your server, you'll see an option in the _Output and Debugging_ settings to customize the application name that is reported to New Relic.

You can also set the application name as a [configuration override](general/system-configuration-overrides.md#newrelic_app_name).

## Disabling New Relic's RUM JavaScript

**Control Panel Location:** `Settings --> Debugging & Output`

It may be desirable at times to disable New Relic's [Real User Monitoring JavaScript](https://newrelic.com/docs/features/real-user-monitoring) from being inserted into your web pages. Services that fetch your web pages in order to import content for you (such as [Campaign Monitor](http://campaignmonitor.com) and [MailChimp](http://mailchimp.com) for instance) may get hung up on the script tag that the New Relic PHP extension inserts into your content.

To disable New Relic's RUM JavaScript from being inserted, turn off the _Enable New Relic RUM JavaScript?_ preference in the _Output and Debugging_ settings.
