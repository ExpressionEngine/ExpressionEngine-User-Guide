<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Code Debugging

[TOC]

In addition to the standard [troubleshooting steps](troubleshooting/general.md#troubleshooting) to display errors in your browser, ExpressionEngine also offers some helper functions to help troubleshoot your add-on code.

### `dump($var)`

Dumps the variable as a pre-formatted block. Essentially what `var_dump` does in PHP, but looks nicer.

### `dd($var)`

"Dump and die". Outputs pre-formatted dump of variable and stops code execution.

### `trace(10)`

Outputs the debug backtrace of the function being called. Useful if you need to find out which function called your code. The number is the number of steps back, or the functions, to be listed.
