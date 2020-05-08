<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Forum Themes

**Control Panel Location:** `Developer --> Templates --> Forums`

The ExpressionEngine Forums make use of "themes" to determine how they are displayed. The Forum Module comes with several "default" themes.

Theme assets such as images are located in your installation under `themes/ee/forum/` in a folder named after the theme.

The theme templates are located in `system/ee/templates/_themes/forum`, also in a folder named after the theme.

In order to edit the Templates:

1.  Copy `themes/ee/forum/theme_name/` to `themes/user/forum/custom_theme_name/`
2.  Copy `system/ee/templates/_themes/forum/theme_name` to `system/user/templates/_themes/forum/custom_theme_name/`

NOTE: **Note:** The contents of `themes/ee/` and `system/ee` are replaced every update, and any changes made there will be lost. All customization needs to happen in `themes/user/` and `system/user/`.

To make edits to the templates from inside the Control Panel, set the `system/user/templates/_theme/forum/` folders and files to be writable. See [File Permissions](troubleshooting/general.md#file-permissions) for details. Only themes in the `system/user/templates/_theme/forum/` folder will be available for editing in the Control Panel.

You can easily switch the default theme used by the forum by choosing a new one under Default Preferences.
