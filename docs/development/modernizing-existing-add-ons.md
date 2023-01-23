<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2022, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Modernizing Existing Add-ons



The ExpressionEngine 7.2 release brought a new add-on development approach, which generates the majority of the add-on's needed files and structure. It also brings additional organization to how add-ons are developed.

NOTE: These changes do NOT break existing add-ons.  The old development methodologies will still work.

The idea of an add-on _being_ a "plugin", "module", "extension", "fieldtype", etc. is no longer accurate. Instead, an add-on can include features such as template tags, actions, fieldtypes, or extensions.

To utilize the updated method for creating add-ons, you will need to make some small changes to your current add-ons. However, this does not mean that you need to completely convert your add-ons to the new method. After making these updates, you can continue using your existing add-ons and begin creating new ones using the updated method.



[TOC]

## Updating your mod.addon.php file
In order to use the new approach, you will have to have your mod file use and extend the module add-on service


```
use ExpressionEngine\Service\Addon\Module;

class Addon extends Module

```

## Updating your mcp.addon.php file

In order to use the new approach, you will have to have your mcp file use and extend the Mcp add-on service

```
use ExpressionEngine\Service\Addon\Mcp;

class Addon_mcp extends Mcp
```

## Updating your ext.addon.php file

In order to use the new approach, you will have to have your ext file use and extend the Extension add-on service

```
use ExpressionEngine\Service\Addon\Extension;

class Addon_ext extends Extension
```

## Updating your upd.addon.php file

In order to use the new approach, you will have to have your upd file use and extend the Installer add-on service

```
use ExpressionEngine\Service\Addon\Installer;

class Addon_upd extends Installer
```
## A Note on Plugins
If your add-on is currently a plugin and you are looking to take advantage of the new add-on development methodologies, we recommend migrating your plugin methods (functions) to your mod file first.  This can be done with a simple copy and paste.
