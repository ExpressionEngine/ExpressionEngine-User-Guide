Update Notes for Version 2.8
============================

PHP Version Requirement
-----------------------

The PHP version requirement has increased to version 5.3.10 or greater.
If you are not already running a version of PHP that meets this
requirement, please contact your host to upgrade your installed version
of PHP *prior* to updating to ExpressionEngine 2.8.

While the minimum requirement is PHP 5.3.10, we recommend that everyone
look into upgrading to PHP 5.4 now. In 5.4, PHP uses far less memory,
in some cases cutting memory usage in half for *each page load*.

Channel Form's preserve_checkboxes= Parameter Deprecated
--------------------------------------------------------

The ``preserve_checkboxes=`` parameter for Channel Form was a setting
that allowed the values of checkbox fields that were not included in a
Channel Form form to be preserved upon save because the nature of how
web browsers handle POST data for checkboxes would wipe out their data.
This setting was set to not preserve checkboxes by default which would
lead to data coming up missing in these checkbox fields, so the
parameter has been removed and now all checkbox data is preserved by
default.

Change in Behavior for Accessing Non-Existent Paginated Pages
-------------------------------------------------------------

For example, if one tried to access page 50 but there were only 10
pages, the previous behavior was the user was redirected to the first
page. Now that situation will trigger the ``{if no_results}``
conditional in your template.

New Variable Available in Forgotten Password Instructions
---------------------------------------------------------

The ``{username}`` variable can now be used in the :ref:`Forgotten
Password Instructions <email-notification-templates>` email template,
and installations that have this particular template unmodified from the
default are updated automatically by the update wizard. If you have
customized the this email template, you may want to reference the new
default for a suggestion on how to incorporate the new variable into
your template::

  {name},

  To reset your password, please go to the following page:

  {reset_url}

  Then log in with your username: {username}

  If you do not wish to reset your password, ignore this message. It will expire in 24 hours.

  {site_name}
  {site_url}
