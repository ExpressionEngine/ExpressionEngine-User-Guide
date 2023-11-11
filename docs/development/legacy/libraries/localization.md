---
lang: php
---

<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Localize Class

**class `Localize`**

ExpressionEngine's Localize Class gives developers easy ways to work with dates.

ExpressionEngine stores all dates and times in UTC (Universal Coordinated Time), formerly known as GMT (Greenwich Mean Time). The benefit of doing so is that each member of an EE site can choose their own timezone and date localization settings. This permits entries and other information containing dates/times to appear in each member's local time. ExpressionEngine uses the date/time and localization methods available in the Localize class to set and display dates and times throughout the application.

This class is initialized by the system automatically so there is no need to do it manually.

## What time is it now?

### property `$now`

To get a Unix timestamp of the current time, access the `now` property in the Localize Class. Using the `now` property rather than PHP's `time()` accounts for the `server_offset` hidden configuration value so the most accurate time can be made available to ExpressionEngine and its add-ons.

    ee()->localize->now;

## Displaying time

### `format_date($format[, $timestamp = NULL[, $localize = TRUE]])`

| Parameter   | Type      | Description                                                                                                                                                   |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$format    | `String`  | Desired format of date using [date formatting variables](templates/date-variable-formatting.md)                                                               |
| \$timestamp | `Int`     | Unix timestamp to format, or current time if NULL                                                                                                             |
| \$localize  | `Boolean` | Boolean of whether to use the current member's timezone for localization (TRUE), or to use GMT (FALSE); or string of PHP timezone to use for the localization |
| Returns     | `String`  | Formatted and optionally localized date                                                                                                                       |

Generates a formatted date string based on a given date or the current date:

    ee()->localize->format_date('%D, %F %d, %Y %g:%i:%s%a');
    // Tue, April 09, 2013 3:07:11pm

    ee()->localize->format_date('%r', 1345065960);
    // Wed, 15 Aug 2012 17:26:00 -0400

    ee()->localize->format_date('%r', 1345065960, FALSE);
    // Wed, 15 Aug 2012 21:26:00 +0000

    ee()->localize->format_date('%r', 499163160, 'America/Los_Angeles');
    // Sat, 26 Oct 1985 01:26:00 -0700

## Get time from a string

### `string_to_timestamp($human_string[, $localize = TRUE])`

| Parameter      | Type      | Description                                                                                                                                                                                  |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$human_string | `String`  | Human-readable date                                                                                                                                                                          |
| \$localize     | `Boolean` | Boolean of whether the passed date is pre-localized to the current member's timezone (TRUE), or should be treated as GMT (FALSE); or string of PHP timezone the passed date should represent |
| Returns        | `Integer` | Unix timestamp representing the passed date string.                                                                                                                                          |

Similar to PHP's `strtotime()`, the Localize class provides a way to take a pre-formatted date string, user input for example, and turn it into Unix timestamp for storage in a database. It's important to use our this method instead of `strtotime()` so that the site's or member's localization is taken into account.

    ee()->localize->string_to_timestamp('2015-10-21 06:30 PM');
    // 1445466600 (Wed, 21 Oct 2015 22:30:00 GMT, localized from America/New_York)

    ee()->localize->string_to_timestamp('2015-10-21 06:30 PM', FALSE);
    // 1445452200 (Wed, 21 Oct 2015 18:30:00 GMT, treated as unlocalized)

## Human-readable time

### `human_time([$timestamp = NULL[, $localize = TRUE[, $seconds = FALSE[, $include_time = TRUE]]]])`

| Parameter   | Type      | Description                                                                                                                                                   |
| ----------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \$timestamp | `Integer` | Unix timestamp                                                                                                                                                |
| \$localize  | `Boolean` | Boolean of whether to use the current member's timezone for localization (TRUE), or to use GMT (FALSE); or string of PHP timezone to use for the localization |
| \$seconds   | `Boolean` | Whether or not to include seconds, overrides `include_seconds` hidden config                                                                                  |
| \$include_time | `Boolean` | Whether or not to include time                                                                                                                             |
| Returns     | `String`  | Human-readable date                                                                                                                                           |

Returns a common human-readable date format conforming to ExpressionEngine's [default time formatting setting](control-panel/settings/general.md). This method is most commonly used to express dates in the control panel.

    ee()->localize->human_time();
    // 2013-02-15 03:35 PM
