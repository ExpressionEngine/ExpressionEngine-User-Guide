---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2019, EllisLab Corp. (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Benchmarking Class

[TOC]

The benchmarking class allows you to time the difference between any two marked points.

## Using the Benchmark Class

The Benchmark class can be used within your [controllers](development/legacy/controllers.md), views, or your models. The process for usage is this:

1.  Mark a start point
2.  Mark an end point
3.  Run the "elapsed time" function to view the results

Here's an example using real code:

    ee()->benchmark->mark('code_start');

    // Some code happens here

    ee()->benchmark->mark('code_end');

    echo ee()->benchmark->elapsed_time('code_start', 'code_end');

NOTE: **Note:** The words "code_start" and "code_end" are arbitrary. They are simply words used to set two markers. You can use any words you want, and you can set multiple sets of markers. Consider this example :

    ee()->benchmark->mark('dog');

    // Some code happens here

    ee()->benchmark->mark('cat');

    // More code happens here

    ee()->benchmark->mark('bird');

    echo ee()->benchmark->elapsed_time('dog', 'cat');
    echo ee()->benchmark->elapsed_time('cat', 'bird');
    echo ee()->benchmark->elapsed_time('dog', 'bird');

### Displaying Total Execution Time

If you would like to display the total elapsed time from the moment ExpressionEngine starts to the moment the final output is sent to the browser, simply place this in one of your view templates:

    <?php echo ee()->benchmark->elapsed_time();?>

You'll notice that it's the same function used in the examples above to calculate the time between two point, except you are **not** using any parameters. When the parameters are absent, ExpressionEngine does not stop the benchmark until right before the final output is sent to the browser. It doesn't matter where you use the function call, the timer will continue to run until the very end.

An alternate way to show your elapsed time in your view files is to use this pseudo-variable, if you prefer not to use the pure PHP:

    {elapsed_time}

NOTE: **Note:** If you want to benchmark anything within your controller functions you must set your own start/end points.

### Displaying Memory Consumption

If your PHP installation is configured with `--enable-memory-limit`, you can display the amount of memory consumed by the entire system using the following code in one of your view file:

    <?php echo ee()->benchmark->memory_usage();?>

NOTE: **Note:** This function can only be used in your view files. The consumption will reflect the total memory used by the entire app.

An alternate way to show your memory usage in your view files is to use this pseudo-variable, if you prefer not to use the pure PHP:

    {memory_usage}

## Class Reference

**class `EE_Benchmark`**

[TOC=3]

The library is loaded using the following code:

    ee()->load->library('benchmark');

### `mark($name)`

| Parameter | Type     | Description                                |
| --------- | -------- | ------------------------------------------ |
| \$name    | `String` | the name you wish to assign to your marker |
| Returns   | `Void`   |                                            |

Sets a benchmark marker.

### `elapsed_time([$point1 = ''[, $point2 = ''[, $decimals = 4]]])`

| Parameter  | Type     | Description                            |
| ---------- | -------- | -------------------------------------- |
| \$point1   | `String` | a particular marked point              |
| \$point2   | `String` | a particular marked point              |
| \$decimals | `Int`    | number of decimal places for precision |
| Returns    | `String` | Elapsed time                           |

Calculates and returns the time difference between two marked points.

If the first parameter is empty this function instead returns the `{elapsed_time}` pseudo-variable. This permits the full system execution time to be shown in a template. The output class will swap the real value for this variable.

### `memory_usage()`

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| Returns   | `String` | Memory usage info |

Simply returns the `{memory_usage}` marker.

This permits it to be put it anywhere in a template without the memory being calculated until the end. The [Output Class](/development/legacy/libraries/output.md) will swap the real value for this variable.
