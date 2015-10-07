Date
====

The Date field allows for quick entry of dates via the publish form. When the field has focus, a date-picker appears in the form of a calendar where you can select a day to enter into the field.

Localized or Fixed?
-------------------

On the publish form, along with a field to enter a date, you will also see an option to select whether you want the date localized or fixed:

* **Localized:** A date that is localized will be translated into the logged-in member's current timezone. For instance, if you enter a date of `10/21/2015 4:29 PM` and you're in Pacific Daylight Time, a member in Eastern Daylight Time will see the date as `10/21/2015 7:29 PM`. Or, for logged out members, the date will be localized on the front-end according to the site's configured timezone.
* **Fixed:** A fixed date will NOT be localized to a member's timezone, or the site's configured timezone. The date will appear as it does in the control panel everywhere by all members.

Template Tag
------------

Date fields give great power for customization in your templates. Visit :doc:`/templates/date_variable_formatting` to see all that is possible.
