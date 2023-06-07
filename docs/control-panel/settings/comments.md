<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Comment Settings

**Control Panel Location: `Settings --> Comment Settings`**

This section of the Control Panel allows you to define comment settings of your site. If you are using the [Multiple Site Manager](msm/overview.md), note that these settings are per-site.

## Settings

### Enable comment module?

When set to enable, channels will be able to use the comment module.

### Enable word censoring?

When set to "enable", commenting will use the [word censoring](control-panel/settings/word-censor.md) filters.

### Moderate expired entries?

If this option is enabled, then comments will not immediately appear on the site. Instead, the comments will go into a queue and await review/moderation by an administrator.

Member Roles (such as the SuperAdmin Role by default) can be set to bypass comment moderation and have their comments posted immediately. That option can be set at `Members > Member Roles`.

### Comment edit time limit (in seconds)

This is the optional number of seconds that must lapse after a comment is posted before that same user can post another comment. This setting can help reduce comment "spam". The preference can be left blank or set to 0 (zero) if you do not want to impose a limit.
