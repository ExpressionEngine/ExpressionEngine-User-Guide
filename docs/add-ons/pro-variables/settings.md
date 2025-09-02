<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Settings

## Settings for Pro Variables  

### Select Variable Managers

Select the member groups that are allowed to manage the variables (create, modify settings, delete), rather than just editing their contents. Overall access to Pro Variables is controled in the Member Role settings under "Allowed add-on access," but by default only Super Admins can manage variables -- all other member roles will only have access to edit the variables.

### Clear cache

If set to No, changing a Pro Variable will never clear the cache. If set to Yes, all native cache will be cleared whenever any variables are saved. If set to "Optionally", you will see two buttons: "Save Variables" and "Save and Clear Cache" to optionally clear the cache.

### Enable early parsing?

This controls the overall ability for Pro Variables to be parsed early in the parsing order. By default, which is "No," all Pro Variables will be parsed quite late in the parsing order (i.e. when Global Variables are parsed). If set to Yes at all, then you can control the parsing timing of each individual Pro Variable. If set to "Yes, before Snippets," early parsing will happen just before existing Template Partials and config variables are parsed, which means they can include Partials. If set to "Yes, after Snippets," that means EE will parse (chosen) Pro Variables just after Template Partials and variables set in config.php, so you can include Pro Variables in those places.

NOTE: You also need to turn on early parsing for each individual variable you want to exhibit this behavior.

WARN: Use caution when turning on this feature, as users could potentially break your templates!


### Variable types

Here you can find a list of available Variable Types — Pro Variables-compatible Field Types. Select which types you want to enable. Disabled types will not be made available in the module.
