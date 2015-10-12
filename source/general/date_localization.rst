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
the :doc:`Localization
Settings </cp/settings/general>` area of
your Control Panel. If you prefer that the localization settings of a
particular member be used as the site default this can be specified in
the :menuselection:`Profile --> Personal Settings` page.

If you do not wish to permit your members to set their own localization
preferences you can disable the feature in the :doc:`Membership
Preferences </cp/settings/members>` page of the
Control Panel. When disabled, the localization preferences page will not
be accessible to members in their member profile area.
