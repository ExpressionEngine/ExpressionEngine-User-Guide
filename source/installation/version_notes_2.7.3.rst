##############################
Update Notes for Version 2.7.3
##############################

******************************
Truncated Email Address Fields
******************************

We've updated all email address fields to be 75 characters long, and for
most installs, that shouldn't be a problem. This is what a 76 character
email address might look like::

  firstname.lastname.title.department@subsubdomain.subdomain.domain.tld.tldext

You can check for overly long email addresses by running the following
SQL queries one at a time in the SQL Manager (:menuselection:`Tools -->
Data --> SQL Manager`):

.. code:: sql

  SELECT email FROM exp_members WHERE LENGTH(email) > 75;
  SELECT from_email FROM exp_email_cache WHERE LENGTH(from_email) > 75;
  SELECT recipient FROM exp_email_console_cache WHERE LENGTH(recipient) > 75;
  SELECT admin_email_address FROM exp_simple_commerce_items WHERE LENGTH(admin_email_address) > 75;
  SELECT email FROM exp_mailing_list WHERE LENGTH(email) > 75;
  SELECT email FROM exp_mailing_list_queue WHERE LENGTH(email) > 75;
  SELECT email FROM exp_comments WHERE LENGTH(email) > 75;
  SELECT email FROM exp_comment_subscriptions WHERE LENGTH(email) > 75;

***************************
Altered Profile Theme Files
***************************

- HTML ``<form>`` tags were replaced with the ``{form_declaration}`` tag.

Affected files:

- themes/profile_themes/agile_records/message_compose.html
- themes/profile_themes/agile_records/subscriptions_form.html
- themes/profile_themes/default/edit_preferences.html
- themes/profile_themes/default/edit_profile_form.html
- themes/profile_themes/default/email_prefs_form.html
- themes/profile_themes/default/localization_form.html
- themes/profile_themes/default/message_compose.html
- themes/profile_themes/default/notepad_form.html
- themes/profile_themes/default/subscriptions_form.html
- themes/profile_themes/default/username_password_form.html


:ref:`Return to Update Page <update_cleanup>`
