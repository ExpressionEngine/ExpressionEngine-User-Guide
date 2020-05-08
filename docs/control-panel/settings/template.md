<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Template Settings

**Control Panel Location: `Settings > Template Settings`**

This section of the Control Panel allows you to define global preferences which affect all Templates.

## Settings

### Enable strict URLs?

This setting determines whether or not ExpressionEngine allows Templates from your default Template Group to be directly accessed in the first URL segment. Enabling Strict URLs requires that the first URL segment be a valid Template Group only, or a 404 page is shown.

If you wish to extend this to the second segment, requiring a valid template, then in your "index" template of your Template Group(s) that you wish to do this, you can take advantage of the [{redirect=} global variable](templates/globals/single-variables.md#redirect) like so:

    {if segment_2 != ''}   {redirect="404"} {/if}

Our official recommendation is that users **enable** Strict URLs, as doing so makes the path to your content more precise, allows more relevant 404 pages, and does not allow your content to be shown with variances in the URL structure. However, for legacy reasons, Strict URLs are disabled by default.

### 404 page

This determines which template should be displayed when someone tries to access an invalid URL. If you choose "None", a standard 404 message and server header will be shown.

Please note that ExpressionEngine **only** validates the first two segments of your URLs when determining whether to show a 404 page, since these segments will correlate to a Template Group and Template name (which represent your site's "pages"). Anything beyond the first two segments can not be used to show a 404 page (with one notable exception, using the `channel_entries_require_entry` parameter).

For an explanation regarding how ExpressionEngine interprets your URLs, please see [URL Structure](general/url-structure.md) page.

### Save template revisions?

If this preference is set to "Yes", then any changes you make to one of your [Templates](control-panel/template-manager.md#edit-template) will be saved. This allows you to keep a record of all changes made so that you can easily revert back to an earlier version of a Template if you need to do so.

### Maximum revisions?

The maximum number of revisions that should be kept for **each** template. For example, if you set this to 5, only the most recent 5 revisions will be saved for any given template. This setting helps ensure that your database does not get too large due to storing Template revisions.
