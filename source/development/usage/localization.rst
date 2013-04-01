Localize Class
==============

.. contents::
	:local:

Introduction
------------

ExpressionEngine's Localize Class gives developers easy ways to work
with dates.

ExpressionEngine stores all dates and times in UTC (Universal
Coordinated Time), formerly known as GMT (Greenwich Mean Time). The
benefit of doing so is that each member of an EE site can choose their
own timezone and date localization settings. This permits entries and
other information containing dates/times to appear in each member's
local time. ExpressionEngine uses the date/time and localization
functions available in the Localize class to set and display dates and
times throughout the application.

This class is initialized by the system automatically so there is no
need to do it manually.

What time is it now?
--------------------

To get a Unix timestamp of the current time, access the ``now`` property
in the Localize Class, like so::

    $this->EE->localize->now;

:returns:
    Integer: Unix timestamp accouting for server offset setting

Using the ``now`` property rather than PHP's ``time()`` accounts for the
``server_offset`` hidden configuration value so the most accurate time
can be made available to ExpressionEngine and its add-ons.

Displaying time
---------------

To generate a formatted date string based on a given date or the current
date, use ``Localize::format_date``::

    $this->EE->localize->format_date('%D, %F %d, %Y - %g:%i:%s');

+-----------------------+-----------------------------------------------------------------------+
|Parameter              |Value                                                                  |
+=======================+=======================================================================+
|``$format``            |(string) Desired format of date using                                  |
|                       |:doc:`date formatting variables </templates/date_variable_formatting>` |
+-----------------------+-----------------------------------------------------------------------+
|``$timestamp``         |(int) Unix timestamp to format; if left ``NULL``, current time will be |
|                       |used                                                                   |
+-----------------------+-----------------------------------------------------------------------+
|``$localize``          |(boolean or string) Boolean of whether to use the current member's     |
|                       |timezone for localization (TRUE), or to use GMT (FALSE); or string of  |
|                       |PHP timezone to use for the localization; defaults to TRUE             |
+-----------------------+-----------------------------------------------------------------------+

:returns:
    String: Formatted and optionally localized date

Examples
~~~~~~~~

::

    $this->EE->localize->format_date('%r');
    // Thu, 14 Feb 2013 14:24:55 -0500

    $this->EE->localize->format_date('%r', 1345065960);
    // Wed, 15 Aug 2012 17:26:00 -0400

    $this->EE->localize->format_date('%r', 1345065960, FALSE);
    // Wed, 15 Aug 2012 21:26:00 +0000

    $this->EE->localize->format_date('%r', 499163160, 'America/Los_Angeles');
    // Sat, 26 Oct 1985 01:26:00 -0700

Get time from a string
----------------------

Similar to PHP's ``strtotime()``, the Localize class provides a way to
take a pre-formatted date string, user input for example, and turn it into
Unix timestamp for storage in a database. It's important to use our
``Localize::string_to_timestamp`` method instead of ``strtotime()`` so
that the site's or member's localization is taken into account.

::

    $this->EE->localize->string_to_timestamp('2015-10-21 06:30 PM');

+-----------------------+-----------------------------------------------------------------------+
|Parameter              |Value                                                                  |
+=======================+=======================================================================+
|``$human_string``      |(string) Human-readable date                                           |
+-----------------------+-----------------------------------------------------------------------+
|``$localized``         |(boolean or string) Boolean of whether the passed date is pre-localized|
|                       |to the current member's timezone (TRUE), or should be treated as GMT   |
|                       |(FALSE); or string of PHP timezone the passed date should represent;   |
|                       |defaults to TRUE                                                       |
+-----------------------+-----------------------------------------------------------------------+

:returns:
    Integer: Unix timestamp representing the passed date string.

Examples
~~~~~~~~

::

    $this->EE->localize->string_to_timestamp('2015-10-21 06:30 PM');
    // 1445466600 (Wed, 21 Oct 2015 22:30:00 GMT, localized from America/New_York)

    $this->EE->localize->string_to_timestamp('2015-10-21 06:30 PM', FALSE);
    // 1445452200 (Wed, 21 Oct 2015 18:30:00 GMT, treated as unlocalized)

Human-readable time
-------------------

For a common human-readable date format conforming to ExpressionEngine's
:doc:`default time formatting setting </cp/admin/localization_settings>`,
use the ``Localize::human_time`` method. This method is most commonly
used to express dates in the control panel.

::

    $this->EE->localize->human_time();

+-----------------------+-----------------------------------------------------------------------+
|Parameter              |Value                                                                  |
+=======================+=======================================================================+
|``$timestamp``         |(integer) Unix timestamp                                               |
+-----------------------+-----------------------------------------------------------------------+
|``$localize``          |(boolean or string) Boolean of whether to use the current member's     |
|                       |timezone for localization (TRUE), or to use GMT (FALSE); or string of  |
|                       |PHP timezone to use for the localization; defaults to TRUE             |
+-----------------------+-----------------------------------------------------------------------+
|``$seconds``           |(boolean) Whether or not to include seconds, overrides                 |
|                       |``include_seconds`` hidden config; defaults to FALSE                   |
+-----------------------+-----------------------------------------------------------------------+

Example
~~~~~~~

::

    $this->EE->localize->human_time();
    // 2013-02-15 03:35 PM
