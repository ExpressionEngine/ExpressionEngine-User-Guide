<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Math

Math module provides template tag to perform mathematical operations on numbers. It can be used to calculate values, perform arithmetic operations, and format the results.

Additionally to the module, there is also a [variable modifier](templates/variable-modifiers.md#math) that can be used to perform calculations on variables, and [`{layout:set:math}`](templates/layouts.md) tag.

#### `{exp:math}`

The tag can be used as single tag or as a tag pair. It accepts an `expression` parameter which is a mathematical expression to be evaluated.

`expression` is the arithmetic expression to be evaluated. It can contain numbers and operators. It supports order of operation, parentheses, negation, basic arithmetic operations (`+`, `-`, `*`, `/`, `^`) and built-in functions.
For example, you can use `{exp:math expression="10 + 5"}` to add 10 and 5, or `{exp:math expression="20 / 4"}` to divide 20 by 4.
Of course, you can use variables or custom field values, for example `{exp:math expression="{variable_name} + 5"}`.

The result returned is formatted number. Supported parameter for formatting are:

- `decimals` - number of decimal places to round the result to
- `decimal_point` - character to use as decimal point
- `thousands_separator` - character to use as thousands separator

When used as tag pair, the result is contained in `result` variable

    {exp:math expression="{current_time}/10+5"}
        {result}
    {/exp:math}

The list of built-in functions includes:
- `abs(x)` - absolute value of x
- `ceil(x)` - smallest integer greater than or equal to x
- `floor(x)` - largest integer less than or equal to x
- `round(x)` - round x to nearest integer
- `sqrt(x)` - square root of x
- `sin(x)` - sine of x (x in radians)
- `cos(x)` - cosine of x (x in radians)
- `tan(x)` - tangent of x (x in radians)
- `arcsin(x)` - arcsine of x (result in radians)
- `arccos(x)` - arccosine of x (result in radians)
- `arctan(x)` - arctangent of x (result in radians)
- `log(x)` - natural logarithm of x
