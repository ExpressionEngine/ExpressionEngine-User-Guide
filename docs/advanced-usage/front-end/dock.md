<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2021, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# ExpressionEngine Pro Dock

[TOC]

## Overview
The Dock is a central component of ExpressionEngine's front-end functionality. 

![dock overview](_images/ee-pro-dock.png)

## Controls

### Drag Handle
The Dock can be repositioned on the screen by clicking and holding the drag handle while moving the Dock around on the screen.

![dock drag handle](_images/ee-pro-dock-drag.png)

### Edit Toggle
The Edit Toggle will enable or disable all front edit links for the current user.

![dock toggle](_images/ee-pro-dock-toggle.png)

### Close Windows
Clicking on the Close Windows icon will close all currently opened edit windows.

![dock close button](_images/ee-pro-dock-close.png)

### Tile Windows
Clicking on the Tile Windows icon will stack all currently opened front edit windows to allow for easier navigation when many windows are open at once.

![dock tile windows](_images/ee-pro-dock-tile.png)

### Control Panel
The Control Panel button on the Dock will open the site's Control Panel in a new tab.

![dock control panel button](_images/ee-pro-dock-cp.png)

## Prolets
Prolets are add-on components that reveal some of add-on's functionality for the Control Panel to the front-end, making it possible to edit data directly on the page where it belongs.

### Entries Prolet
Pro is currently shipped with the Entries prolet. Clicking on the Entries prolet opens a prolet window with all entries currently listed. Allowing you to quickly find and edit other entries in your site.

![dock entries](_images/ee-pro-dock-entries.png)

### Custom Prolets
Developers may create third-party prolets that can be installed with add-ons. Read the [docs on creating prolets](development/prolets.md) for more information on how to create and install third-party prolets.

![dock prolets](_images/ee-pro-dock-prolets.png)

## Disabling
The Dock can be disabled by either the setting in the [Control Panel](control-panel/settings/front-end-editing.md) or [config override](general/system-configuration-overrides.md#enable-dock).

WARN **Warning**: If the Dock is disabled, all of ExpressionEngine's [Front-End Content Management](advanced-usage/front-end/overview.md) is turned off for the front-end. 