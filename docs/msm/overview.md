<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Multiple Site Manager Overview

[TOC]

The Multiple Site Manager empowers you to create and manage multiple “websites” (Sites) from a single ExpressionEngine installation. These Sites can use your existing domain, sub-domains, a brand new domain, or a combination of the above. Each Site is has its own set of preferences, templates, and channels. This lets you leverage a single ExpressionEngine installation across multiple internet properties.

## From School House to University

Think of the Multiple Site Manager as converting a one-building school house into a University campus. The student body (Member database) is campus wide but every department (Site) has its own building (templates), its own way of doing things (preferences), unique curriculum (channels), student lounge (Site specific forums, requires Discussion Forums 2.0+), and rules about what students can do (Member Group permissions are Site specific). Any department on Campus can take advantage of the schools resources (Modules, Plugins, Extensions).

That's not a perfect analogy but it conveys the scope of what the Multiple Site Manager enables you to do from a single ExpressionEngine installation.

## Multiple Site Manager Vocabulary

It's important to understand a few key terms before reviewing the rest of the documentation.

- **Multiple Site Manager**: The ExpressionEngine Add-on that enables management of multiple websites from a single ExpressionEngine installation.
- **Original Site**: The existing ExpressionEngine installation when you installed the Multiple Site Manager. This Site cannot be deleted and will remain if the Multiple Site Manager is removed.
- **Site**: A unique "website" created using the Multiple Site Manager that is not the Original Site.
- **Site specific**: Refers to items that apply to a single Site and can be set per Site.
- **Installation wide**: Refers to items that apply to the entire ExpressionEngine installation and are not Site Specific.
