Date Localization
=================

ExpressionEngine stores all dates and times in UTC (Universal
Coordinated Time), formerly known as GMT (Greenwich Mean Time). The
benefit of doing so is that each member of your site can choose their
own time zone and date localization settings. This permits entries and
other information containing dates/times to appear in each member's
local time. All dates are offset in real time for each user viewing your
site.

If people browsing your site are not members, or if they have not set a
time zone preferences in their personal profile, the times will instead
be shown according to your master system localization settings found in
the `Admin > Localization
Settings <../cp/admin/system_admin/localization_settings.html>`_ area of
your Control Panel. If you prefer that the localization settings of a
particular member be used as the site default this can be specified in
the My Account > Administrative Options page.

If you do not wish to permit your members to set their own localization
preferences you can disable the feature in the `Admin > Membership
Preferences <../cp/members/membership_preferences.html>`_ page of the
control panel. When disabled, the localization preferences page will not
be accessible to members in their member profile area.

**A note regarding Daylight Saving Time (DST).**

Since dates/times will adjust themselves automatically to your local
time, an issue can arise if you view or edit channel entries with dates
that fall outside your current Daylight Saving Time setting. In order to
compensate for this EE stores whether DST is active or not on the date
that an entry is posted. You'll find this setting in the PUBLISH page
under the options tab. Although it will set itself automatically when
you post entries, if you find yourself editing the date of an entry,
changing it so that it falls outside the dates that DST is active in
your area, you may need to enable or disable this preference for that
entry otherwise the time may be off by an hour.
