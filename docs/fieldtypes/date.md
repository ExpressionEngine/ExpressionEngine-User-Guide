<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Date Fieldtype

The Date field allows for quick entry of dates via the publish form. When the field has focus, a date-picker appears in the form of a calendar where you can select a day to enter into the field.

![date field](/_images/field_date.png)

## Field Settings

### Date Localization

Choose how the field data should be localized. The options are
- _Always localized_ (the date displayed on the front-end will be converted into the logged-in member's timezone. An example use case is the start of an online event, when attenders need to know their local time)
- _Alway fixed_ (the date on the front-end will be displayed in the site's configured timezone. An example use case is the start of an in-person event, when attenders need to know the time as it is in the event's timezone)
- _Ask each time_

### Include time?
When turned off, only date will be displayed, otherwise the editor can also enter the time into the same field.

When turned on, the date picker will also display time input. Depending on member preferences, the time input will be in 12 or 24 hour format.

## Publish form

On the publish form (when `Date Localization` setting is set to `Ask each time`), along with a field to enter a date, you will also see an option to select whether you want the date localized or fixed:

- **Localized:** A date that is localized will be translated into the logged-in member's current timezone. For instance, if you enter a date of _10/21/2015 4:29 PM_ and you're in Pacific Daylight Time, a member in Eastern Daylight Time will see the date as _10/21/2015 7:29 PM_. Or, for logged out members, the date will be localized on the front-end according to the site's configured timezone.
- **Fixed:** A fixed date will NOT be localized to a member's timezone, or the site's configured timezone. The date will appear as it does in the control panel everywhere by all members.

NOTE: **Note:** These options are only available when using Date as a field and not as a Grid column.

At the bottom of the calendar popup you will also see a "Today" button that can be used to automatically set the date to the current date.

## Template Tag

Date fields render as regular date variables:

    {date_field format="%F %d %Y"}
    {!-- January 01 2019 --}

Visit [Date Variable Formatting](templates/date-variable-formatting.md) to see all date formatting options.
