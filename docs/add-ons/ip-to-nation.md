<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# IP to Nation

[TOC]

**Control Panel Location:** `Developer --> Add-Ons --> IP to Nation`

The IP to Nation module enables you to determine which country an IP address is associated with. You can do two things with this information:

1.  **Ban entire countries.** When a country is banned, someone with an IP address from that country is not permitted to submit comments, referrer data, or use the email/tell-a-friend forms.
2.  **Show a flag icon** ![image0](_images/flag-us.gif) within your comments or entries to indicate the country of the person who submitted the entry.

## Database Updates

To update your installation, simply make sure that you are running the latest version of ExpressionEngine, and visit the `Developer --> Add-Ons --> IP to Nation` page in your Control Panel and click the Update IP Database button. The update may take a few seconds; do not click any links or refresh the page while the auto-update is taking place.

## Banning Countries

To look up the country associated with an IP address, or to ban a country, go to `Developer --> Add-Ons --> IP to Nation` in your Control Panel and enter an IP address in the "Search for an IP address" field.

To ban a country, make sure your IP database is updated, then find the country you wish to ban in the "Banned countries" checklist. Make a selection and click Save Banlist.

## World Flags Tag

In order to use the world flag feature, please first visit the Modules page of the control panel and make sure your IP to Nation module is installed.

NOTE: **Note:** Please [download the flag icons](https://ellislab.com/asset/file/world_flags.zip) from ExpressionEngine.com. Once downloaded, unzip the archive, then upload the "world_flags" folder to your server. The folder can go anywhere since you'll set the URL in the tag as described below.

The "world flags" tag can be used within your {exp:comment:entries} or {exp:channel:entries} like this:

    {exp:ip_to_nation:world_flags image_url="https://example.com/images/world_flags/"}
        {ip_address}
    {/exp:ip_to_nation:world_flags}

## Parameters

### `image_url=`

This URL to your "world_flags" folder.

Make sure you include the folder name in the URL and include a trailing slash:

    https://example.com/images/world_flags/

### `type="text"`

You can optional set the tag to output the name of the country as text by using the type="text" parameter.

NOTE: **Note:** This product includes GeoLite data created by MaxMind, available from <http://maxmind.com/>.
