<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Version Update Notes
Please view the update notes for any versions that are newer than the version you upgraded from.

[TOC]

## Version Notes for 6.0.0

ExpressionEngine 6.0.0 brings significant changes, most of which are handled automatically in the update process.

The following list are items that you will want to be aware of.

- The Rich Text Editor (RTE) can no longer be applied to fields via the ` {exp:rte:script_url}` tag.
- Displaying an RTE field in the Channel Form's channel entry loop should be done using `{display_field}` rather than manually constructing a textarea field.
- A number of new language keys have been added. Custom languages will need to be updated for 6.0.

## Version Notes for 7.0.0

ExpressionEngine 7.0.0 integrated both Low Search (now Pro Search) and Low Variables (now Pro Variables) as native add-ons in the core.  If you have either add-on already installed, the following steps are recommended.

- After upgrade, if Low Search and/or Low variables were already installed, on the Add-on page you will see the corresponding native Pr Search/Pro Variables installed and the Low add-on uninstalled.  This was done automatically.  You should remove the old add-on folder in system/user/addons/.  
- While old Low Search and Low Variable tags will continue to work in version 7, it is recommended they be replaced.  To do so, first backup your database.  Next, in `Tools - Utilities - Search and Replace`, search for ``{exp:low_search:`` and replace with `{exp:pro_search:`.  Likewise, if Low Variables was used, search for `{exp:low_variables:` and replace with `{exp:pro_variables:`.
