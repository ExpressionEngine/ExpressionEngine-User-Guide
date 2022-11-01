<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Code Debugging

[TOC]

When debugging you add-on (or an issue with someone else's code) you'd need to start with enabling debugging in Control Panel [Debugging & Output](control-panel/settings/debug-output.md) settings.

It might be also worth to edit the site's main `index.php` file and temporary change `$debug = 0;` to `$debug = 1;`.

Then, you can use some helper function to get to the source of problem in PHP code

### `dump($var)`

Dumps the variable as pre-formatted block. Essentially what `var_dump` does in PHP, but looks nicer.

### `dd($var)`

"Dump and die". Outputs pre-formatted dump of variable and stops code execution.

### `trace(10)`

Outputs the debug backrace of function being called. Useful if you need to find out which function called your code. The number is the number of steps back, or the functions, to be listed.
