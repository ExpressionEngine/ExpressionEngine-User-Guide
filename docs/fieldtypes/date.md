<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Date Fieldtype

The Date field allows for quick entry of dates via the publish form. When the field has focus, a date-picker appears in the form of a calendar where you can select a day to enter into the field.

## Field Options

### Localized or Fixed?

On the publish form, along with a field to enter a date, you will also see an option to select whether you want the date localized or fixed:

- **Localized:** A date that is localized will be translated into the logged-in member's current timezone. For instance, if you enter a date of _10/21/2015 4:29 PM_ and you're in Pacific Daylight Time, a member in Eastern Daylight Time will see the date as _10/21/2015 7:29 PM_. Or, for logged out members, the date will be localized on the front-end according to the site's configured timezone.
- **Fixed:** A fixed date will NOT be localized to a member's timezone, or the site's configured timezone. The date will appear as it does in the control panel everywhere by all members.

## Template Tag

Date fields render as regular date variables:

    {date_field format="%F %d %Y"}
    {!-- January 01 2019 --}

Visit [Date Variable Formatting](templates/date-variable-formatting.md) to see all date formatting options.
