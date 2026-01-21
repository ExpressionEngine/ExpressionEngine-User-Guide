<!--
    This source file is part of the open source project
    ExpressionEngine User Guide (https://github.com/ExpressionEngine/ExpressionEngine-User-Guide)

    @link      https://expressionengine.com/
    @copyright Copyright (c) 2003-2020, Packet Tide, LLC (https://packettide.com)
    @license   https://expressionengine.com/license Licensed under Apache License, Version 2.0
-->

# Calendar Tag

[TOC]

This tag allows you to display a calendar which contains links based on entries in your channel. Here is an example of what you might use for a "mini-calendar" that you could place on each page of your site:

    {exp:channel:calendar switch="calendarToday|calendarCell"}

    <table class="calendarBG" border="0" cellpadding="6" cellspacing="1" summary="My Calendar">
        <tr class="calendarHeader">
            <th>
                <div class="calendarMonthLinks"><a href="{previous_path='channel/index'}">&lt;&lt;</a>
                </div>
            </th>
            <th colspan="5">
                {date format="%F %Y"}
            </th>
            <th>
                <div class="calendarMonthLinks">
                    <a class="calendarMonthLinks" href="{next_path='channel/index'}">&gt;&gt;</a>
                </div>
            </th>
        </tr>
        <tr>
        {calendar_heading}
        <td class="calendarDayHeading">{lang:weekday_abrev}</td>
        {/calendar_heading}
        </tr>
        {calendar_rows}
            {row_start}<tr>{/row_start}
            {if entries}
                <td class='{switch}' align='center'><a href="{day_path='channel/index'}">{day_number}</a>
                </td>
            {/if}
            {if not_entries}
                <td class='{switch}' align='center'>{day_number}</td>
            {/if}
            {if blank}
                <td class='calendarBlank'>{day_number}</td>
            {/if}
            {row_end}</tr>{/row_end}
        {/calendar_rows}
        </table>
    {/exp:channel:calendar}

Here is an example of what you might use for a "big" calendar that listed all entries on each day:

    {exp:channel:calendar switch="calendarToday|calendarCell" channel="default_site"}
    <table class="calendarBG" border="0" cellpadding="6" cellspacing="1" summary="My Calendar" width="90%">
        <tr class="calendarHeader">
            <th>
                <div class="calendarMonthLinks">
                    <a href="{previous_path='channel/cal'}">&lt;&lt;</a>
                </div>
            </th>
            <th colspan="5">{date format="%F %Y"}</th>
            <th>
                <div class="calendarMonthLinks">
                    <a class="calendarMonthLinks" href="{next_path='channel/cal'}">&gt;&gt;</a>
                </div>
            </th>
        </tr>
        <tr>
        {calendar_heading}
            <td class="calendarDayHeading">{lang:weekday_abrev}</td>
        {/calendar_heading}
        </tr>
        {calendar_rows}
            {row_start}<tr>{/row_start}
            {if entries}
                <td class='{switch}' align='center'>
                    <a href="{day_path='channel/index'}">{day_number}</a>
                    {entries}
                    <div>
                        <a href="{title_permalink='channel/index'}">{title}</a>
                        <a href="{profile_path='member/profile'}">{author}</a>
                    </div>
                    {/entries}
                </td>
            {/if}
            {if not_entries}
                <td class='{switch}' align='center'>{day_number}</td>
            {/if}
            {if blank}
                <td class='calendarBlank'>{day_number}</td>
            {/if}
            {row_end}</tr>{/row_end}
        {/calendar_rows}
    </table>
    {/exp:channel:calendar}

You may also view the [example CSS](_downloads/calendar-css.txt) to go along with the calendar examples. You can add this to your main stylesheet if you wish, modify it as needed, or simply ignore it.

## Parameters

[TOC=3]

Most of the [Parameters](channels/entries.md) of the standard {exp:channel:entries} tag are available. In addition, the following are special to the channel calendar tag.

NOTE: **Note:** Dynamic Parameters may not be used with the calendar tag.

### `leading_zeroes=`

    leading_zeroes="yes"

Setting this parameter to "yes" will display the {day_number} variable as a two-digit, zero-padded number, e.g.: 01, 02, 03, etc. The default setting is "no."

### `month= year=`

    month="04" year="2002"

You may hardcode the month and year to display for the calendar. You **must** specify both the month and year. The month should be specified in numerical form.

### `show_future_entries=`

    show_future_entries="yes"

You can determine whether you wish for entries dated in the "future" to be included. This option is useful when doing things like creating a list of events, some of which have not occurred yet.

### `show_offline_sites=`

    show_offline_sites="no"

When this option is set to "no", entries from MSM sites that are set to "offline" will not be included in the results. The default is "yes", which includes entries from offline sites.


### `start_day=`

    start_day="sunday"

You may define the day of the week on which your week starts. Available values:

- sunday
- monday
- tuesday
- wednesday
- thursday
- friday
- saturday

### `switch=`

    switch="calendarToday|calendarCell"

This parameter works differently than the one available in the channel entries tag. This parameter lets you define two states: the "today" state and "all other" states. Typically, this is used to define two CSS classes which are applied to the table cell holding the day of the month. If the cell corresponds to today's date then the "today" state (the first state) is applied, otherwise the "all others" state (the second state) is applied.

This works together with the [{switch}](#switch-1) variable.

## Variables

[TOC=3 hide]

### `{author}`

The author's screen name, if it exists; otherwise, this variable will display the username. This is used inside the [{entries}{/entries}](#entries) variable pair.

### `{comment_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the Settings tab. No entry id, URL Title, or other information is included; this is the exact URL from the preference.

### `{comment_entry_id_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the channel's **Settings** tab. The ID number of the entry will be automatically added. For example, this

    <a href="{comment_entry_id_auto_path}">my entry</a>

Would be rendered like this

    <a href="https://example.com/channel/comments/234/">my entry</a>

### `{comment_url_title_auto_path}`

This variable is replaced by the URL set in the **Comment Page URL** preference under `Developer --> Channels` in the channel's **Settings** tab. The URL Title of the entry will be automatically added. For example, this

    <a href="{comment_url_title_auto_path}">my entry</a>

Would be rendered like this

    <a href="https://example.com/channel/comments/ice_cream/">my entry</a>

### `{comment_path}`

    {comment_path='channel/comments'}

The URL to the specified template. The ID number of the entry will be automatically added. For example, this:

    <a href="{comment_path='channel/comments'}">comments</a>

Would be rendered like this:

    <a href="https://example.com/channel/comments/234/">comments</a>

This is only available for use inside the {entries}{/entries} variable pair.

### `{comment_total}`

The total number of comments for a particular entry. This is used inside the [{entries}{/entries}](#entries) variable pair.

### `{date}`

    {date format="%F %Y"}

The current date. As with other date variables, this require the "format" parameter in order to define how the date should be displayed. See the [date variable formatting](templates/date-variable-formatting.md) page for more information.

### `{day_number}`

The number of the day of the month.

### `{day_path}`

    {day_path='channel/index'}

This variable will be replaced by a URL designed to show all entries from the specified day. Typically, the path should be for your main Template that shows your multiple entries. For example, this:

    <a href="{day_path='channel/index'}">{day_number}

Might be rendered like this:

    <a href="https://example.com/channel/2003/02/17/">17</a>

### `{entry_id_path}`

    {entry_id_path='channel/comments'}

The URL to the specified template. The ID number of the entry will be automatically added. For example, this:

    <a href="{entry_id_path='channel/comments'}">my entry</a>

Would be rendered like this:

    <a href="https://example.com/channel/comments/234/">my entry</a>

This is only available for use inside the {entries}{/entries} variable pair.

### `{next_date}`

    {next_date format="%m %Y"}

The next date for the calendar; i.e. the next month. As with other date variables, this require the "format" parameter in order to define how the date should be displayed. See the [date variable formatting](templates/date-variable-formatting.md) page for more information.

### `{next_path}`

    {next_path='channel/calendar'}

This variable will be replaced by a URL designed to point to the next month on the calendar. Typically, the path should be to the current calendar page.

### `{permalink}`

This variable defaults to site index with entry ID number:

    https://example.com/235/

In addition, you can specify a template group/template and the entry ID will automatically be added:

    {permalink="channel/archives"}

Will render as:

    https://example.com/channel/archives/235/

This is only available for use inside the {entries}{/entries} variable pair.

### `{previous_date}`

    {previous_date format="%m %Y"}

The previous date for the calendar; i.e. the previous month. As with other date variables, this require the "format" parameter in order to define how the date should be displayed. See the [date variable formatting](templates/date-variable-formatting.md) page for more information.

### `{previous_path}`

    {previous_path='channel/calendar'}

This variable will be replaced by a URL designed to point to the previous month on the calendar. Typically, the path should be to the current calendar page.

### `{profile_path}`

    {profile_path='member/profile'}

The URL to the author of the current entry. This is used inside the [{entries}{/entries}](#entries) variable pair. The ID number of the author will be automatically added. Use in a link:

    <a href="{profile_path='member/profile'}">{author}</a>

This is only available for use inside the {entries}{/entries} variable pair.

### `{switch}`

This variable permits you to alternate between any two values as the entries are displayed. This variable works together with the [switch=](#switch) parameter.

### `{title}`

The title of the entry. This is used inside the [{entries}{/entries}](#entries) variable pair.

### `{title_permalink}`

This variable uses the "url title" as the link. It defaults to the site index with the "url title":

    https://example.com/my_ugly_boyfriend/

In addition, you can specify a specific template group/template and the "url title" will automatically be added:

    {title_permalink="channel/archives"}

Will render as:

    https://example.com/channel/archives/my_ugly_boyfriend/

NOTE: **Note:** When creating a new entry, if you don't supply the "url title" then it will be automatically created from the actual entry title. Spaces are turned into underscores and quotes are removed. For example, "Joe's night out" becomes "joes_night_out".

This is only available for use inside the {entries}{/entries} variable pair.

### `{url_title_path}`

    {url_title_path='channel/archives'}

The URL to the specified template. The "url title" of the entry will be automatically added. For example, this:

    <a href="{url_title_path='channel/archives'}">permalink</a>

Would be rendered like this:

    <a href="https://example.com/channel/archives/ice_cream/">permalink</a>

This is only available for use inside the {entries}{/entries} variable pair.

## Variable Pairs

[TOC=3]

### `{calendar_heading}`

    {calendar_heading}
        <td class="calendarDayHeading">{lang:weekday_abrev}</td>
    {/calendar_heading}

This variable pair is used to create the table row showing the days of the week. You can use one of three variables to determine what is shown for the day:

1.  **{lang:weekday_abrev}**: The one-letter abbreviation for the day of the week. i.e. M, T, etc.
2.  **{lang:weekday_long}**: The full-text for the day of the week. i.e. Monday, Tuesday, etc.
3.  **{lang:weekday_short}**: The short-text for the day of the week. i.e. Mon, Tue, etc.

Using these variables will allow the calendar to display the day names in the appropriate language for the user. If they have a language specified in their profile then the system will use that, otherwise it will use the default language specified in the Control Panel.

### `{calendar_rows}`

    {calendar_rows}
        {row_start}<tr>{/row_start}
            <td class='{switch}' align='center'>
                <a href="{day_path='channel/index'}">{day_number}</a>
                {entries}
                <div>
                    <a href="{title_permalink='channel/index'}">{title}</a> <a href="{profile_path='member/profile'}">{author}</a>
                </div>
                {/entries}
            </td>
        {row_end}</tr>{/row_end}
    {/calendar_rows}

This variable pair is used to create the rows of dates for the calendar.

### `{entries}`

    {entries}
        <div>
            <a href="{title_permalink='channel/index'}">{title}</a> <a href="{profile_path='member/profile'}">{author}</a>
        </div>
    {/entries}

This variable pair will loop through entries in the specified channel(s) that occur on that date.

### `{row_end}`

    {row_end}</tr>{/row_end}

This variable pair simply defines what content to use at the end of a row.

### `{row_start}`

    {row_start}<tr>{/row_start}

This variable pair simply defines what content to use at the start of a row.
