<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Avatar Settings

**Control Panel Location: `Settings > Avatar Settings`**

This section of the Control Panel allows you to define the avatar settings of your site.

## Settings

### Avatar directory

The URL to your avatar folder. In most cases, this will be similar to:

- `https://example.com/images/avatars/`
- `///example.com/images/avatars/`
- `/images/avatars/`

### Avatar path

Here you set the _server path_ (**not** the URL) to the avatars upload folder. By default avatars are located in the avatars folder inside the images folder

The server path might look something like:

    /home/example.com/public_html/images/avatars/

If you do not know what to use for your full server path, contact your Host or server admin. Remember that this upload folder must be writable. See [File Permissions](troubleshooting/general.md#file-permissions) for details.

### Maximum width

The maximum width (in pixels) allowed for user-uploaded avatars. If the image exceeds maximum width, it will be automatically resized.

### Maximum height

The maximum height (in pixels) allowed for user-uploaded avatars. If the image exceeds maximum height, it will be automatically resized.

### Maximum file size (kb)

The maximum file size allowed for user-uploaded avatars.

NOTE: **Note:** There are 1024 Kilobytes per Megabyte, so if you want to allow a 2 MB avatar you'll enter 2048.
