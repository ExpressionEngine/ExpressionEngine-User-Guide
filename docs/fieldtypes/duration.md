<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://ellislab.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Duration Fieldtype

Duration is a fieldtype that allows you to store lengths of time. For instance, time results for races, running times of feature films, etc. The site builder can determine whether the publisher is indicating duration in terms of hours, minutes, or seconds. Both the input and output are very flexible.

For example, if the duration field is set with "seconds" for units, and the content author enters 333 for the value:

    Lap 1: {duration}
    {!-- Lap 1: 5:33 --}

## Field Options

### Units

Units can be set to Hours, Minutes or Seconds. This is used to determine the length of time being described when a content author enters a whole number like "42". The publish form will automatically display the unit in the field's placeholder text to give the author input reminders.

## Alternate Input

The author could also input duration values using colon-notation(`:`), regardless of the units setting. A value of **5:33** is five minutes and thirty-three seconds, **2:15:12** is two hours, fifteen minutes, and twelve seconds, and so on.

## Alternate Output

Similar to [Date Variable Formatting](templates/date-variable-formatting.md), you can customize how you display the duration using a `format=` parameter. For example, 2:15:12 (8112 seconds) could also be displayed with:

    Running length: {duration format="%h hrs, %m min"}
    {!-- Running length: 2 hrs, 15 min --}

| Unit    | Format Code |
| :------ | :---------- |
| Hours   | %h          |
| Minutes | %m          |
| Seconds | %s          |
