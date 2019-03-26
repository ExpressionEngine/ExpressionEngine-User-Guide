<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Site Manager

**Control Panel Location: `Developer > Site Manager`**

Manage multiple Sites from a single installation

[TOC]

## One Installation, Multiple Websites

The Site Manager empowers you to create and manage multiple "websites" (Sites) from a single ExpressionEngine installation. These Sites can use your existing domain, sub-domains, a brand new domain, or a combination of the above. Each Site is has its own set of preferences, templates, and channels. This lets you leverage a single ExpressionEngine installation across multiple internet properties.

## From School House to University

Think of the Multiple Site Manager as converting a one-building school house into a University campus. The student body (Member database) is campus wide but every department (Site) has its own building (templates), its own way of doing things (preferences), unique curriculum (channels), student lounge (Site specific forums, requires Discussion Forums 2.0+), and rules about what students can do (Member Group permissions are Site specific). Any department on Campus can take advantage of the schools resources (Modules, Plugins, Extensions).

That's not a perfect analogy but it conveys the scope of what the Multiple Site Manager enables you to do from a single ExpressionEngine installation.

### Key Features

- Multiple Sites from a single installation
- Multiple Forums from a single installation (requires [Discussion Forums 3.0](add-ons/forum/index.md))
- Member Database is "installation wide"
- Shared Member Groups across Sites
- Member Groups can have per Site preferences.
- Channels and Templates can be accessed across Sites
- Intuitively organized Control Panel
- Independent Preferences per site
- Specialty Templates per Site (Login screens, member profiles, etc...)
- Modules are Site Agnostic so any Site can use any Module.

### Requirements

- All Sites must reside on the same server
- If using sub-domains or domains, directories must be able to access your main installation system directory.

## Create/Edit Sites

**Control Panel Location: `Developer > Site Manager > New/Edit`**

This allows you to create or edit a new Site. The site manager [must be enabled](#enable-site-manager) in Control Panel Location: `Settings > General Settings` in order to create sites.
