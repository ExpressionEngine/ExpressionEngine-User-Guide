Update Notes for Version 2.8
============================

Channel Form's preserve_checkboxes parameter deprecated
-------------------------------------------------------

The ``preserve_checkboxes`` for Channel Form was a setting that allowed
the values of checkbox fields that were not included in a Channel Form
form to be preserved upon save because the nature of how web browsers
handle POST data for checkboxes would wipe out their data. This setting
was set to not preserve checkboxes by default which would lead to data
coming up missing in these checkbox fields, so the parameter has been
removed and now all checkbox data is preserved by default.

Accessing a non-existent page in paginated results will trigger {no_results}
----------------------------------------------------------------------------

For example, if one tried to access page 50 but there were only 10
pages, the previous behavior was the user was redirected to the first
page. Now that situation will trigger the ``{if no_results}``
conditional in your template.