########################
Date Variable Formatting
########################

.. contents::
   :local:
   :depth: 2

************
Introduction
************

Many tags, including channel fields of the "date" type, are designed to
display dates and times. The output of these tags can be formatted so
that the date and time appear in the manner you wish. This includes the format
of the date, a fixed timezone, and relative date options.

**************
Standard Dates
**************

.. _date_variable_parameters:

Parameters
==========

.. contents::
   :local:
   :depth: 1

format=
-------

The ``format=`` parameter enables you to format the date using the Date
Formatting Codes listed below. Each code letter is always preceded by a
percent sign. The example::

	{current_time format="%F %d %Y"}

would be rendered like this::

	January 15 2006

You are allowed to use any character you want within the format
parameter, **except** a percent sign. For example, this::

	{current_time format="%D, %F %d, %Y - %g:%i:%s"}

Would be rendered like this::

	Mon, January 15, 2006 - 10:23:45

Date Formatting Codes
~~~~~~~~~~~~~~~~~~~~~

+------------+-----------------------------------------------------------------------+--------------------------------------------+
| Variable   | Description                                                           | Sample Rendering                           |
+============+=======================================================================+============================================+
| Seconds                                                                                                                         |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%s**     | seconds                                                               | "00" to "59"                               |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%U**     | seconds since the epoch                                               |                                            |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| Minutes                                                                                                                         |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%i**     | minutes                                                               | "00" - "59"                                |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| Hours                                                                                                                           |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%g**     | hour, 12-hour format without leading zeros                            | "1" to "12"                                |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%G**     | hour, 24-hour format without leading zeros                            | "0" to "23"                                |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%h**     | hour, 12-hour format                                                  | "01" to "12"                               |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%H**     | hour, 24-hour format                                                  | "00" to "23"                               |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| AM / PM                                                                                                                         |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%a**     |                                                                       | "am" / "pm"                                |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%A**     |                                                                       | "AM" / "PM"                                |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| Day                                                                                                                             |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%d**     | day of the month, 2 digits with leading zeros                         | "01" to "31"                               |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%D**     | day of the week, textual, 3 letters                                   | "Fri"                                      |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%j**     | day of the month without leading zeros                                | "1" to "31"                                |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%l**     | (lowercase 'L') - day of the week, textual, long                      | "Friday"                                   |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%w**     | day of the week, numeric                                              | "0" (Sunday) to "6" (Saturday)             |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| Week                                                                                                                            |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%W**     | ISO-8601 week number of year, weeks starting on Monday                | "42": the 42nd week in the year            |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| Month                                                                                                                           |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%m**     | month                                                                 | "01" to "12"                               |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%M**     | month, textual, 3 letters                                             | "Jan"                                      |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%F**     | month, textual, long                                                  | "January"                                  |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%n**     | month without leading zeros                                           | "1" to "12"                                |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%t**     | number of days in the given month                                     | "28" to "31"                               |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| Year                                                                                                                            |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%L**     | boolean for whether it is a leap year                                 | "0" or "1"                                 |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%y**     | year, 2 digits                                                        | "99"                                       |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%Y**     | year, 4 digits                                                        | "1999"                                     |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%z**     | day of the year                                                       | "0" to "365"                               |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| Other                                                                                                                           |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%B**     | Swatch Internet time                                                  |                                            |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%I**     | (capital i)                                                           | "1" if Daylight Saving Time, "0" otherwise |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%O**     | Difference to Greenwich time (GMT) in hours                           | "-0500"                                    |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%P**     | Difference to Greenwich time (GMT) with colon between hours and       | "-05:00"                                   |
|            | minutes                                                               |                                            |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%r**     | RFC 2822 formatting                                                   | "Thu, 21 Dec 2000 16:01:07 +0200"          |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%S**     | English ordinal suffix, 2 characters                                  | "th", "nd"                                 |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%T**     | Time zone setting of this machine                                     | MDT                                        |
+------------+-----------------------------------------------------------------------+--------------------------------------------+
| **%Z**     | time zone offset in seconds. The offset for time zones west of UTC is | "-43200" to "43200"                        |
|            | always negative, and for those east of UTC is always positive.        |                                            |
+------------+-----------------------------------------------------------------------+--------------------------------------------+

.. _template_date_formatting_constants:

Date Formatting Constants
~~~~~~~~~~~~~~~~~~~~~~~~~

You may also use the pre-defined Date Formatting Constants listed below
for easy access to some standard format strings. For example, this::

	{current_time format="{DATE_ATOM}"}

Would be rendered like this::

	2006-01-15T20:23:45-06:00

Available pre-defined formatting strings are described in the table
below.

===================   =========================   ===============================
Date Formatting Constants
---------------------------------------------------------------------------------
Variable              Equivalent                  Sample Rendering
===================   =========================   ===============================
**{DATE\_ATOM}**      %Y-%m-%dT%H:%i:%s%Q         2006-10-16T08:19:39-06:00
**{DATE\_COOKIE}**    %l, %d-%M-%y %H:%i:%s UTC   Monday, 16-Oct-06 08:19:39 UTC
**{DATE\_ISO8601}**   %Y-%m-%dT%H:%i:%s%Q         2006-10-16T08:19:39-05:00
**{DATE\_RFC822}**    %D, %d %M %y %H:%i:%s %O    Mon, 16 Oct 06 08:19:39 -0500
**{DATE\_RFC850}**    %l, %d-%M-%y %H:%i:%s UTC   Monday, 16-Oct-06 08:10:19 UTC
**{DATE\_RFC1036}**   %D, %d %M %y %H:%i:%s %O    Mon, 16 Oct 06 08:19:39 -0500
**{DATE\_RFC1123}**   %D, %d %M %Y %H:%i:%s %O    Mon, 16 Oct 2006 08:19:39 -0500
**{DATE\_RFC2822}**   %D, %d %M %Y %H:%i:%s %O    Mon, 16 Oct 2006 08:19:39 -0500
**{DATE\_RSS}**       %D, %d %M %Y %H:%i:%s %O    Mon, 16 Oct 2006 08:19:39 -0500
**{DATE\_W3C}**       %Y-%m-%dT%H:%i:%s%Q         2006-10-16T08:19:39-06:00
===================   =========================   ===============================

timezone=
---------

The ``timezone=`` parameter will convert the date to the specified timezone::

	timezone="America/Los_Angeles"

This will override the timezone specified in the
:doc:`localization settings </cp/admin/localization_settings>` in the control
panel, and the member's localization settings.  PHP.net has a
`list of supported timezones <http://php.net/manual/en/timezones.php>`_.

**************
Relative Dates
**************

Relative dates are always a string indicating the difference between the date
and right now. By default the number of years, months, weeks, days, hours,
minutes, and seconds are calculated, and the first non zero unit is displayed.
Control over which units are calculated, how many units are used in the
display, and determining when to stop showing a relative date are available.

Any date can be displayed with relative language. For example, assuming a
channel entry was posted 2 days ago, this::

	{entry_date:relative}

Would be rendered like this::

	2 days ago

This also works into the future. For example, assume you have a launch date
just 2 days away, this::

	{launch_date:relative}

Would be rendered like this::

	in 2 days

Parameters
==========

.. contents::
   :local:
   :depth: 1

depth=
------

The ``depth=`` parameter determines how many calculated units to display,
starting from the largest non zero unit to the smallest. The defalut is "1".
When depth is 2 we will join the two units with "and". For example, assuming a
relative date 4 days, 3 hours, 2 minutes, and 1 second in the past this::

	{entry_date:relative depth="2"}

Would be rendered like this::

	4 days and 3 hours ago

When the depth is greater than 2 the units are displayed with commas. Using the
same date as above this::

	{entry_date:relative depth="3"}

Would be rendered like this::

	4 days, 3 hours, and 2 minutes ago

future=
-------

The ``future=`` parameter determines what text is wrapped around the relative
date when the date is in the future. Any text is allowed, and all copies of
``%s`` will be replaced with the relative date. The default is "in %s". For
example, assuming a date 2 days into the future, this::

	{entry_date:relative future="%s until"}

Would be rendered like this::

	2 days until

Another example::

	{entry_date:relative future="in %s time"}

Would be rendered like this::

	in 2 days time

less_than=
----------

The ``less_than=`` parameter determines what text to use when the relative date
is below the threshold of the smallest unit. The default is "less than". For
example, assuming a date only seconds old this::

	{entry_date:relative units="minutes" less_than="not quite"}

Would be rendered like this::

	not quite one minute ago

past=
-----

The ``past=`` parameter determines what text is wrapped around the relative
date when the date is in the past. Any text is allowed, and all copies of
``%s`` will be replaced with the relative date. The default is "ago". For
example, assuming a date 2 days ago, this::

	{entry_date:relative past="%s in the past"}

Would be rendered like this::

	2 days in the past

singular=
---------

The ``singular=`` parameter determines what text to display when the value of a
given unit is 1. The default is "one". For example, assuming a date 1 day in the past this::

	{entry_date:relative singular="1"}

Would be rendered like this::

	1 day ago

stop=
-----

The ``stop=`` parameter determines when to stop calculating a relative date and
instead display a standard date. Any valid date/time string parameter for PHP's
`strtotime() <http://www.php.net/manual/en/function.strtotime.php>`_ function is
acceptable. ExpressionEngine will compute a timestamp based on the date and the
provided ``stop=`` value. When the computed timestamp is greater than or
equal to the current timestamp the date will be displayed as a standard date.

For example, if you want relative dates but only for one day::

	{entry_date:relative stop="+1 day"}

Or perhaps you would rather show relative dates until midnight::

	{entry_date:relative stop="tomorrow"}

If an invalid value is used for ``stop=`` a relative date will be displayed.

units=
------

The ``units=`` parameter determines which parts of a relative date are
calculated prior to displaying them. The following units are available:

-  ``years``
-  ``months``
-  ``weeks``
-  ``days``
-  ``hours``
-  ``minutes``
-  ``seconds``

When a unit is omitted the next smallest unit will reflect it. For example,
assuming a date 8 days old this::

	{entry_date:relataive units="weeks|days"}

Would be rendered like this::

	one week ago

But this::

	{entry_date:relataive units="days"}

Would be rendered like this::

	8 days ago

The default is equivalent to::

	units="years|months|weeks|days|hours|minutes|seconds"
