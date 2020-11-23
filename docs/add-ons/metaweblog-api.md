<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://www.packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Metaweblog API / Movable Type

[TOC]

**Control Panel Location:** `Developer --> Add-Ons --> Metaweblog API`

The Metaweblog API (Application Programming Interface) is an interface or "protocol" that allows other programs to interact with ExpressionEngine. In practical terms, it allows you to post and edit entries using a Metaweblog API-compatible program of your choosing instead of the ExpressionEngine Control Panel.

ExpressionEngine supports the Metaweblog API as well as an extension to it known as the Movable Type API. It is important to understand that the Metaweblog API was originally designed for posting to one Channel Field, and does not support comments, etc. Thus, it is typically only used for simple entry posting purposes. The Movable Type API is slightly more flexible in that it supports posting content to up to four Channel Fields.

## Configuration

The Metaweblog API Control Panel is accessed via `Developer --> Add-Ons --> Metaweblog API` in the Control Panel. This page lists all of your existing configurations as well as the URL to be used for connecting to that configuration with your Metaweblog API-compatible software.

Click on a configuration's name to edit it. The following options are available:

### Name

The name of this configuration.

### Use default text formatting preferences?

If Yes, the Channel Fields' content will be sent as if they are being displayed on a webpage, with the field's Text Formatting preference respected. If No, the fields' content will be sent untouched.

The "No" setting is useful when you want to publish and edit content in its "raw" state with your software, regardless of how it will actually appear on the site.

### Status

Choose the Entry Status for all entries submitted using this Configuration. If you choose the 'Do Not Set Status' option, then whatever the Client sends for status (open or closed) will be accepted.

### Channel

Here you choose the Channel to use for this Configuration. This choice determines which fields are available for selection in the following preferences.

### Excerpt

Here you determine which field from your Field Group corresponds to the "Excerpt Field" in your Metaweblog API-compatible program. Only text-type fields are available for selection. This field is only available when using the Movable Type API.

### Content

Here you determine which field from your Field Group corresponds to the "Content Field" in your Metaweblog API-compatible program. Only text-type fields are available for selection.

### More

Here you determine which field from your Field Group corresponds to the "More Field" in your Metaweblog API-compatible program. Only text-type fields are available for selection. This field is only available when using the Movable Type API.

### Keywords

Here you determine which field from your Field Group corresponds to the "Keywords Field" in your Metaweblog API-compatible program. Only text-type fields are available for selection. This field is only available when using the Movable Type API.

### Allowed directory

If your Metaweblog API-compatible program allows you to upload files, you may specify into which folder you want files uploaded. Your choices are determined by what you have set up at `Files --> Upload Directories`.

The user sending the files via the Metaweblog API must have permission to upload to that folder. If you do not wish to allow uploads via the Metaweblog API, select "None".

NOTE: **Note:** When using an upload folder with the MetaWeblog API, make sure to use absolute paths.

NOTE: **Note:** Many Metaweblog API-compatible programs do not support a file upload feature. You may also encounter issues when uploading very large files.

## Connecting with a Metaweblog API Compatible Program

In general, you will use the URL of your desired configuration as shown on the Metaweblog API Control Panel page at `Developer --> Add-Ons --> Metaweblog API` to connect with your program. Below is information specific to some common programs.

### MarsEdit

1.  Create a New Blog in MarsEdit.
2.  Name it anything you wish, enter the URL of your site's homepage, and click **Finish**.
3.  Click **Edit Settings** on the next dialog that appears.
4.  For _System Name_, choose **ExpressionEngine**.
5.  For _System API_, ensure **Movable Type API** is selected.
6.  For _API Endpoint URL_, enter the URL of your desired configuration as shown on the Metaweblog API Control Panel page at `Developer --> Add-Ons --> Metaweblog API`.
7.  For _Blog ID_, enter the **Channel ID** of the Channel you'll be posting to.
8.  Click **OK**, then right-click on the newly created Blog in the MarsEdit sidebar and choose **Enter Password...**
9.  Enter the **username** and **password** for your ExpressionEngine account.
10. You should now be able to edit and post entries using MarsEdit.

### Ecto

1.  Click **New Account**.
2.  For _System_, choose **ExpressionEngine** or **MovableType**.
3.  For _Access Point_, enter the URL of your desired configuration as shown on the Metaweblog API Control Panel page at `Developer --> Add-Ons --> Metaweblog API`.
4.  Enter the **username** and **password** for your ExpressionEngine account.
5.  At first, ecto will show the existing entries from all Channels you have access to. In the sidebar on the left side of ecto's main screen, click the triangle next to your ExpressionEngine site and click the Channel that corresponds to the **Channel Field Group** you selected for this configuration in ExpressionEngine's Metaweblog API Control Panel page. Attempting to publish to or edit entries from other Channels may result in unexpected behavior.
6.  You should now be able to edit and post entries using ecto.
