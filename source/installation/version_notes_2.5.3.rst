Update Notes for Version 2.5.3
==============================

Change to Channel Field Searching Across Multiple Sites
-------------------------------------------------------

The search parameter in the channel entries tag pair has been updated to search
the contents of fields of the same name across the specified sites. For
example::

	{exp:channel:entries channel="news" site="siteA|siteB" search:news_body="Breaking News"}

Assuming the News channel in both sites has a field called ``news_body``, the
above tag will return search results from *both* sites.

Altered Language File
---------------------

The following language file was edited:

- language/english/safecracker_lang.php

  - Added key: form_decryption_failed


Altered View Files
------------------

- views/_shared/refresh_message.php
- views/account/email_settings.php
- views/account/forgot_password.php
- views/account/login.php
- views/account/username_password.php
- views/design/manager.php
- views/members/register.php


:ref:`Return to Update Page <update_additional_steps>`
