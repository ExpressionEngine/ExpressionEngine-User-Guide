<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Tracking

**Control Panel Location: `Settings > Tracking`**

This section of the Control Panel allows you to define preferences for various tracking features of ExpressionEngine. Adjustments to these settings can help decrease resource usage if you are not utilizing the features, as well as help you manage [extreme traffic events](optimization/handling-extreme-traffic.md).

## Settings

### Enable tracker cookie?

When enabled, ExpressionEngine will set `exp_tracker` cookie on each page visit, allowing navigation through browsing history. Disabling it might influence redirect behavior of some forms on front-end.

### Enable online user tracking?

If enabled, online user statistics are tracked and the user-based variables in the [Statistics](add-ons/statistics.md) module are available for use.

### Enable template hit tracking?

When set to "Yes", hits to your templates will be tracked in your database on each page load.

### Enable entry view tracking?

When set to "Yes", you can utilize the [Entry “Views” Tracking Tag](channels/entry-tracking.md) feature of the Channel module.

### Suspend threshold?

NOTE: **Note:** Online User Tracking must be enabled for this feature to work, or the information will not be available to ExpressionEngine to determine your site's traffic.

If a value is provided for this setting, when the number of "online visitors" exceeds that value, all of the above tracking features will be temporarily disabled until the number of online visitors drops below the indicated value. Recommended values for this feature will vary based on your hosting environment. Check with your server administrator to discuss reasonable limits for your site.
