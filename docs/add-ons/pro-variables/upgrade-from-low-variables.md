<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Upgrading from Low Variables

In the ExpressionEngine v7.0.0 release, Pro Variables was added added as a native add-on that ships with the core files.  It is an update of the standalone add-on Low Variables.  If you previously had Low Variables installed, the update will automatically install Pro Variables and uninstall Low Variables.  The transition should be automatic and seamless, and old Low Variables tags will continue to function.

However, best practice in this situation requires 2 additional steps:

- Remove the old add-on folder system/user/addons/low_variables.  
- Replace the old format `{exp:low_variables:` tags with new `{exp:pro_variables:` format.  This can be done with the Find and Replace utility found in  `Tools - Utilities - Search and Replace`. It is recommended that you save a database backup before making this change.  Then simply search for `{exp:low_variables:` and replace with `{exp:pro_variables:`. 