<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Automated Upgrading

[TOC]

Add-ons can be automatically upgraded during the ExpressionEngine core upgrading process, if the user has opted to do so.

## The upgrade.addon_name.php File

The upgrade.addon_name.php file allows your add-on to hook into the EE upgrade process to run code at various stages of the upgrade process.

For example:

upgrade.my_awesome_plugin.php

```
<?php

class My_awesome_plugin_upgrade {

	public function upgrade($version)
	{
		
		if(version_compare($version, '3.0.0', '=')) {
			// Run updates for upgrade to EE3
		}

		if(version_compare($version, '4.0.0', '=')) {
			// Run updates for upgrade to EE4
		}

		if(version_compare($version, '5.0.0', '=')) {
			// Run updates for upgrade to EE5
		}

		if(version_compare($version, '6.0.0', '=')) {
			// Run updates for upgrade to EE6
		}

		if(version_compare($version, '7.0.0', '=')) {
			// Run updates for upgrade to EE7
		}
	}

}
```

The upgrade function is run at each minor version update of the ExpressionEngine process. If your add-on has an `upgrade.addon_name.php`, where `addon_name` is the snake_case name of your add-on, ExpressionEngine will automatically run the `upgrade` function at each version update.

The add-on `upgrade` function should accept a parameter `$version` that will be the current stepped version in the ExpressionEngine update process.